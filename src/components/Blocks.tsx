import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SIGNUP_URL } from '../data';

export function PageHero({ eyebrow, title, children, actions }: { eyebrow: string; title: string; children?: ReactNode; actions?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <p className="lead">{children}</p>}
        {actions && <div className="actions">{actions}</div>}
      </div>
    </section>
  );
}

export function Section({ title, kicker, children, tone }: { title?: string; kicker?: string; children: ReactNode; tone?: 'alt' }) {
  return (
    <section className={`section${tone ? ' section-alt' : ''}`}>
      <div className="container">
        {(title || kicker) && (
          <div className="section-head">
            {kicker && <p className="eyebrow">{kicker}</p>}
            {title && <h2>{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter-in">
        <div>
          <h2>Sign up for our newsletter</h2>
          <p>Updates on programs, upcoming events and publications — straight to your inbox. Always free.</p>
        </div>
        <a className="btn btn-gold" href={SIGNUP_URL} target="_blank" rel="noreferrer">
          Sign up <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

export function LinkCard({ to, title, text }: { to: string; title: string; text: string }) {
  return (
    <Link to={to} className="card card-link">
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="more">
        Explore <ArrowRight size={15} />
      </span>
    </Link>
  );
}

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="faq">
      {items.map((i) => (
        <details key={i.q}>
          <summary>{i.q}</summary>
          <div>{i.a}</div>
        </details>
      ))}
    </div>
  );
}
