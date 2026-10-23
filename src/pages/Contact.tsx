import { FormEvent } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { PageHero, Section } from '../components/Blocks';
import { ADDRESS } from '../data';

const people = [
  { role: 'Counsellor & student support', name: 'Alexandra Guerriero', email: 'alex@collegetrackr.com' },
  { role: 'Events & marketing support', name: 'Hailey Pride', email: 'hailey@collegetrackr.com' },
  { role: 'University support', name: 'Sujee Kulendran', email: 'sujee@collegetrackr.com' },
];

export default function Contact() {
  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${f.get('name')}`);
    const body = encodeURIComponent(`${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`);
    window.location.href = `mailto:info@collegetrackr.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero eyebrow="Contact us" title="We'd love to hear from you.">
        Reach the right person directly, or send us a note below.
      </PageHero>

      <Section>
        <div className="grid-3">
          {people.map((p) => (
            <div key={p.email} className="card">
              <p className="eyebrow">{p.role}</p>
              <h3>{p.name}</h3>
              <a className="inline-link" href={`mailto:${p.email}`}><Mail size={15} /> {p.email}</a>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt" kicker="Other questions" title="Send us a message">
        <div className="split">
          <form className="form" onSubmit={send}>
            <label>Name<input name="name" required autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Message<textarea name="message" rows={5} required /></label>
            <button className="btn btn-primary" type="submit">Send message</button>
            <p className="muted">This opens your email app, addressed to info@collegetrackr.com.</p>
          </form>
          <div className="card">
            <span className="icon-chip"><MapPin size={20} /></span>
            <h3>Visit us</h3>
            <p>{ADDRESS}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
