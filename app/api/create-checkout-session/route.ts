
import { NextRequest, NextResponse } from 'next/server';
import { stripe, PRICING_TIERS, PricingTier } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tier, customerEmail } = body as {
      tier: PricingTier;
      customerEmail?: string;
    };

    if (!tier || !PRICING_TIERS[tier]) {
      return NextResponse.json(
        { error: 'Invalid pricing tier' },
        { status: 400 }
      );
    }

    const pricingConfig = PRICING_TIERS[tier];

    // For enterprise tier, redirect to contact page
    if (tier === 'enterprise') {
      return NextResponse.json({
        redirect: '/contact',
      });
    }

    if (!pricingConfig.priceId) {
      return NextResponse.json(
        { error: 'Price ID not configured for this tier' },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment', // One-time payment
      payment_method_types: ['card'],
      line_items: [
        {
          price: pricingConfig.priceId,
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
      metadata: {
        tier,
        planName: pricingConfig.name,
      },
      allow_promotion_codes: true,
    });

    return NextResponse.json({ 
      sessionId: session.id, 
      url: session.url 
    });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
