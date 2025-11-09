
import { Resend } from 'resend';

// Initialize Resend with a dummy key during build time if not available
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');

interface SendOrderConfirmationParams {
  to: string;
  customerName: string;
  planName: string;
  amount: number;
  orderId: string;
}

export async function sendOrderConfirmation({
  to,
  customerName,
  planName,
  amount,
  orderId,
}: SendOrderConfirmationParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Autopilot <onboarding@resend.dev>',
      to: [to],
      subject: `Order Confirmation - ${planName} Plan`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Confirmation</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Your Purchase!</h1>
            </div>
            
            <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <p style="font-size: 16px; margin-bottom: 20px;">Hi ${customerName},</p>
              
              <p style="font-size: 16px; margin-bottom: 30px;">
                Your purchase has been confirmed! Welcome to Autopilot's <strong>${planName}</strong> plan.
              </p>
              
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h2 style="margin-top: 0; font-size: 18px; color: #111827;">Order Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Order ID:</td>
                    <td style="padding: 8px 0; text-align: right; font-weight: 600;">${orderId}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Plan:</td>
                    <td style="padding: 8px 0; text-align: right; font-weight: 600;">${planName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 12px;">Total:</td>
                    <td style="padding: 8px 0; text-align: right; font-weight: 700; font-size: 20px; color: #667eea; border-top: 1px solid #e5e7eb; padding-top: 12px;">$${(amount / 100).toFixed(2)}</td>
                  </tr>
                </table>
              </div>
              
              <h2 style="font-size: 18px; margin-bottom: 15px;">What's Next?</h2>
              <ol style="padding-left: 20px; margin-bottom: 30px;">
                <li style="margin-bottom: 10px;">Access your purchase from your dashboard</li>
                <li style="margin-bottom: 10px;">Follow the setup guide to get started</li>
                <li style="margin-bottom: 10px;">Join our community for support and updates</li>
              </ol>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" 
                   style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                  Go to Dashboard
                </a>
              </div>
              
              <p style="font-size: 14px; color: #6b7280; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                If you have any questions, feel free to reply to this email or contact our support team.
              </p>
              
              <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">
                Best regards,<br>
                <strong>The Autopilot Team</strong>
              </p>
            </div>
            
            <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
              <p>© 2025 Autopilot. All rights reserved.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending order confirmation email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    return { success: false, error };
  }
}
