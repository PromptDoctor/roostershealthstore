import { useState } from 'react';

interface Props {
  subject?: string;
  endpoint?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({
  subject = 'New website enquiry',
  endpoint = '/.netlify/functions/contact',
}: Props) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(e.currentTarget) });
      const data: { success: boolean } = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="alert">
        <p>Thanks — your message was sent. We will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="subject" value={subject} />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

      <div>
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" type="text" name="name" required autoComplete="name" disabled={status === 'submitting'} />
      </div>

      <div>
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" name="email" required autoComplete="email" disabled={status === 'submitting'} />
      </div>

      <div>
        <label htmlFor="cf-phone">Phone</label>
        <input id="cf-phone" type="tel" name="phone" autoComplete="tel" disabled={status === 'submitting'} />
      </div>

      <div>
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" required rows={5} disabled={status === 'submitting'} />
      </div>

      {status === 'error' && (
        <p role="alert">Something went wrong — please try again or call us directly.</p>
      )}

      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
