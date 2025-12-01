# Email Integration Guide - Olympus Masonry

**Status**: 🔴 **NOT IMPLEMENTED** - Pending Integration
**Priority**: HIGH - Required before production launch
**Last Updated**: November 2025

---

## Overview

The contact form (`components/ContactForm.tsx`) is currently using a simulated submission with a 1-second timeout. **Production email functionality is not yet integrated.**

---

## Current State

### What's Implemented
- ✅ Contact form UI with validation
- ✅ Form state management
- ✅ Client-side validation
- ✅ Loading states and user feedback
- ✅ Success/error messages

### What's Missing
- ❌ **Actual email sending** (TODO on line 28 of ContactForm.tsx)
- ❌ Resend SDK integration
- ❌ Email API route
- ❌ Environment variable configuration
- ❌ Email templates
- ❌ Error handling for failed emails

---

## TODO: Implementation Required

### Location of TODO Comment
**File**: `components/ContactForm.tsx`
**Line**: 28
**Comment**: `// TODO: Integrate with Resend or other email service`

---

## Recommended Solution: Resend

**Why Resend?**
- Modern, developer-friendly API
- Excellent deliverability
- Free tier: 100 emails/day
- Simple Next.js integration
- No credit card required for free tier

**Resend Pricing**:
- Free: 100 emails/day, 3,000/month
- Pro: $20/month for 50,000 emails/month

---

## Implementation Steps

### Step 1: Install Resend SDK
```bash
npm install resend
```

### Step 2: Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use Resend's test domain
3. Generate an API key from dashboard
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   ```

### Step 3: Create Email API Route
Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Olympus Masonry Website <noreply@olympusmasonry.ca>',
      to: ['ollympus1@outlook.com'], // Peter's email
      replyTo: email, // User's email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

### Step 4: Update ContactForm.tsx
Replace the TODO section with actual API call:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
    console.error('Form submission error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Step 5: Configure Environment Variables
Add to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_FORM_TO_EMAIL=ollympus1@outlook.com
CONTACT_FORM_FROM_EMAIL=noreply@olympusmasonry.ca
```

### Step 6: Test Email Sending
```bash
# Development testing
npm run dev

# Test the contact form on http://localhost:3000/contact
# Verify emails arrive in Peter's inbox (ollympus1@outlook.com)
```

---

## Email Template Options

### Option 1: Simple HTML (Recommended for MVP)
- Plain HTML email (shown above)
- Fast implementation
- Works everywhere

### Option 2: React Email (Future Enhancement)
Install `@react-email/components` for branded email templates:
```bash
npm install @react-email/components
```

Create email template in `emails/ContactFormEmail.tsx`:
```typescript
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Section,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  phone,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '40px' }}>
          <Heading style={{ color: '#D4A657' }}>New Contact Request</Heading>
          <Section>
            <Text><strong>From:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            {phone && <Text><strong>Phone:</strong> {phone}</Text>}
            <Text><strong>Message:</strong></Text>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
```

---

## Domain Configuration (Production)

### Verify Domain with Resend
1. Add your domain to Resend dashboard
2. Add DNS records:
   - SPF record
   - DKIM record
   - DMARC record (optional but recommended)
3. Wait for verification (usually 5-10 minutes)
4. Update `from` address to use verified domain

**Example DNS Records** (to add in domain registrar):
```
Type: TXT
Name: resend._domainkey
Value: [provided by Resend]

Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
```

---

## Testing Checklist

Before production launch:
- [ ] Resend API key configured in Vercel environment variables
- [ ] Domain verified with Resend
- [ ] Test email sending from contact form
- [ ] Verify emails arrive in Peter's inbox
- [ ] Test error handling (invalid API key, network failure)
- [ ] Test spam filter (check spam folder)
- [ ] Verify "Reply-To" header works correctly
- [ ] Test with different email providers (Gmail, Outlook, Yahoo)
- [ ] Ensure rate limiting is adequate (100/day on free tier)

---

## Alternative Email Services

If Resend doesn't work:

### SendGrid
- **Pros**: Established, reliable
- **Cons**: Complex setup, worse free tier
- **Free Tier**: 100 emails/day permanently

### Postmark
- **Pros**: Excellent deliverability, transactional focus
- **Cons**: No free tier
- **Pricing**: $15/month for 10,000 emails

### AWS SES
- **Pros**: Very cheap, scalable
- **Cons**: Complex setup, AWS account required
- **Pricing**: $0.10 per 1,000 emails

---

## Error Handling

### Common Issues

**1. Email Not Sending**
- Check API key is correct
- Verify environment variable is loaded
- Check Resend dashboard for error logs

**2. Emails Going to Spam**
- Verify domain with SPF/DKIM
- Use authenticated domain (not test domain)
- Avoid spam trigger words

**3. Rate Limit Exceeded**
- Free tier: 100 emails/day
- Upgrade to Pro if needed
- Implement client-side rate limiting

---

## Monitoring & Analytics

### Recommended Monitoring
- Resend dashboard: Track send success/failure rates
- Vercel logs: Monitor API route errors
- Set up alerts for failed sends

### Metrics to Track
- Email delivery rate
- Bounce rate
- Spam complaints
- API response times

---

## Security Considerations

### Best Practices
- ✅ Never expose API key in client-side code
- ✅ Validate all form inputs server-side
- ✅ Sanitize user input before rendering in emails
- ✅ Implement rate limiting (prevent spam)
- ✅ Use environment variables for sensitive data
- ✅ Enable CORS only for your domain

### Rate Limiting (Future Enhancement)
Consider adding rate limiting to API route:
```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 emails per hour
});
```

---

## Next Steps

1. **Immediate**: Install Resend SDK and create API route
2. **Before Launch**: Verify domain and test email delivery
3. **Post-Launch**: Monitor email analytics and delivery rates
4. **Future**: Implement branded email templates with React Email

---

## Related Files

- `components/ContactForm.tsx` - Frontend form component
- `app/api/contact/route.ts` - **TO BE CREATED** - API endpoint
- `.env.local.example` - Environment variable template
- `docs/development/tech-stack.md` - Technical stack documentation

---

**Created**: November 2025
**Status**: Pending Implementation
**Owner**: Development Team
**Blocker**: None - Ready to implement
