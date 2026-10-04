import { useState, type FormEvent } from 'react';
import { profile, socialLinks } from '../data/portfolio';
import { personal } from '../data/details';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [sending, setSending] = useState(false);
  const [copyStatus, setCopyStatus] = useState('Copy address');
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setSending(true); setStatus('Sending your message…'); setIsError(false);
    const params = {
      from_name: values.get('name'), from_email: values.get('email'),
      name: values.get('name'), email: values.get('email'),
      subject: values.get('subject'), message: values.get('message'),
      to_name: profile.name, time: new Date().toLocaleString(),
    };
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID, params, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    } catch (error: unknown) {
      // External service boundary: preserve the message and offer direct email on any delivery failure.
      setIsError(true);
      setStatus(error instanceof Error && error.message.includes('network') ? 'Connection unavailable. Your message is still here; try again or email me directly.' : 'The message could not be sent. Please try again or use the email address above.');
      return;
    } finally {
      setSending(false);
    }
    form.reset();
    setStatus('Your message is sent. Thank you for reaching out.');
    if (import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID) {
      try {
        const { default: emailjs } = await import('@emailjs/browser');
        await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID, { ...params, to_email: values.get('email'), to_name: values.get('name'), from_name: profile.name, from_email: profile.email }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      } catch (error: unknown) {
        // Main delivery succeeded; a failed receipt must never invite a duplicate submission.
        setStatus(error instanceof Error ? 'Your message is sent, but the automatic receipt was unavailable.' : 'Your message is sent. The automatic receipt could not be delivered.');
      }
    }
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus('Address copied'); }
    catch (error: unknown) { setCopyStatus(error instanceof Error ? 'Please select the address to copy' : 'Copy unavailable; use the email link'); }
  };
  return <section id="contact" className="section">
    <div className="section-heading"><p className="meta"><span>04</span>Leave a little hello</p><p className="availability">Open to work</p></div>
    <h2 className="contact-title">Something interesting<br /><em>in mind?</em></h2>
    <div className="contact-actions"><a href={`mailto:${profile.email}`} className="contact-email">{profile.email} ↗</a><button type="button" className="copy-button" onClick={copy} aria-live="polite">{copyStatus}</button></div>
    <div className="contact-detail"><p className="small">Questions, collaborations, or a good idea.<br />Let’s see what we can make together.</p><div className="social-list">{socialLinks.filter((link) => link.icon !== 'email').map((link) => <a key={link.label} href={link.icon === 'resume' ? `/${profile.resumeHref}` : link.href} className="text-link">{link.label} ↗</a>)}<a href={personal.phoneHref} className="text-link">{personal.phone}</a></div></div>
    <details className="contact-disclosure"><summary>Prefer to leave a message here?</summary>
      <form className="contact-form" onSubmit={submit}>
        <div className="field-grid"><div><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required maxLength={100} /></div><div><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} /></div></div>
        <div><label htmlFor="subject">What is it about?</label><input id="subject" name="subject" required maxLength={200} /></div>
        <div><label htmlFor="message">Your message</label><textarea id="message" name="message" rows={5} required maxLength={5000} /></div>
        <button type="submit" className="text-link" disabled={sending}>{sending ? 'Sending…' : 'Send message ↗'}</button>
        <p role="status" className="form-status" data-error={isError}>{status}</p>
      </form>
    </details>
  </section>;
}
