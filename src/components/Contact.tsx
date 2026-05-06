import emailjs from '@emailjs/browser';
import { Mail, Send } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { contact, profile } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const adminResult = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: profile.name,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      console.log('Admin email sent:', adminResult.status, adminResult.text);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          to_email: formData.email,
          to_name: formData.name,
          from_name: profile.name,
          from_email: profile.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ).then(
        (result) => console.log('Auto-reply sent:', result.status, result.text),
        (error) => console.error('Auto-reply failed:', error)
      );

      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="relative rainbow-border rounded-2xl border border-border bg-card p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">Got an idea?</h2>
              <p className="mt-3 text-lg leading-relaxed text-fg-secondary">
                Want to collaborate on something cool? Let&apos;s make it happen.
              </p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>

          <form className="relative space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg-secondary">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition placeholder:text-fg-tertiary focus:border-accent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition placeholder:text-fg-tertiary focus:border-accent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-fg-secondary">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition placeholder:text-fg-tertiary focus:border-accent"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-fg-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition placeholder:text-fg-tertiary focus:border-accent"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-semibold text-bg transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? 'Sending…' : 'Get in Touch'}
            </button>

            {status && (
              <p className={`text-sm font-medium ${status === 'success' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {status === 'success'
                  ? 'Message sent! I will get back to you soon.'
                  : 'Something went wrong. Please try again.'}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
