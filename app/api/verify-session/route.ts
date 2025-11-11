
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      id: session.id,
      customer_email: session.customer_email,
      amount_total: session.amount_total,
      payment_status: session.payment_status,
    });
  } catch (error: any) {
    console.error('Error verifying session:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to verify session' },
      { status: 500 }
    );
  }
}
