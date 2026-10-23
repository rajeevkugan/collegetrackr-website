import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Faq, Newsletter, PageHero, Section } from '../components/Blocks';
import { ZOOM_EVENTS_URL, pathwayCriteria, pathwayFields } from '../data';

export default function Pathways() {
  return (
    <>
      <PageHero
        eyebrow="Career Pathways"
        title="From first year to your future career."
        actions={<a className="btn btn-gold" href={ZOOM_EVENTS_URL} target="_blank" rel="noreferrer">Learn more <ArrowRight size={16} /></a>}
      >
        Interested in healthcare, business, law, engineering or another field? Join us online or in person to learn about undergraduate routes and pre-professional programs at universities in Canada and abroad.
      </PageHero>

      <Section kicker="The basics" title="What is a career pathway?">
        <div className="split">
          <p className="body-lg">
            Career pathways are undergraduate programs that prepare students for professional studies and careers. A pre-med student, for example, should look for strong pre-med or direct-entry support.
          </p>
          <div className="chips">
            {pathwayFields.map((f) => <span key={f} className="chip">{f}</span>)}
          </div>
        </div>
      </Section>

      <Section tone="alt" kicker="How to evaluate a program" title="Four things to look for">
        <div className="grid-4">
          {pathwayCriteria.map((c) => (
            <div key={c.title} className="card">
              <span className="icon-chip"><CheckCircle2 size={20} /></span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="FAQ" title="We've got A's for your Q's">
        <Faq
          items={[
            { q: 'What about pharmacy careers?', a: <>Our online and in-person events let students meet universities about pre-pharmacy support. Find them on this page and the <Link to="/global-post-secondary-fair">Events</Link> page.</> },
            { q: "What if my career isn't listed, or I'm undecided?", a: <>You can still attend. Many universities offer hundreds of majors, and our events are a good way to explore.</> },
            { q: 'How do I receive updates?', a: <>Use the Sign up button to join the newsletter.</> },
          ]}
        />
        <div className="actions"><Link to="/contact-us" className="btn btn-outline">Contact us</Link></div>
      </Section>
      <Newsletter />
    </>
  );
}
