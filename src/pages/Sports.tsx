import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, ShieldCheck } from 'lucide-react';
import { Newsletter, PageHero, Section } from '../components/Blocks';
import { ZOOM_EVENTS_URL } from '../data';

export function Sports() {
  return (
    <>
      <PageHero
        eyebrow="Sports"
        title="Compete at the next level."
        actions={<Link className="btn btn-gold" to="/sports-ncaa">NCAA guide <ArrowRight size={16} /></Link>}
      >
        Competitive athletics are part of the global pathway for many Canadian students. Hear from universities about sports, athletic facilities and resources for student-athletes.
      </PageHero>

      <Section kicker="What we cover" title="Athletics, alongside academics">
        <div className="grid-3">
          <div className="card"><span className="icon-chip"><Dumbbell size={20} /></span><h3>Sports programs</h3><p>Meet universities that support Canadian athletes.</p></div>
          <div className="card"><span className="icon-chip"><ShieldCheck size={20} /></span><h3>Eligibility &amp; recruiting</h3><p>Understand the process, starting with our NCAA guide for Canadians.</p></div>
          <div className="card"><span className="icon-chip"><ArrowRight size={20} /></span><h3>Resources</h3><p>Facilities and support available to student-athletes on campus.</p></div>
        </div>
      </Section>
      <Section tone="alt">
        <div className="actions">
          <Link className="btn btn-primary" to="/global-post-secondary-fair">See upcoming events</Link>
          <a className="btn btn-outline" href={ZOOM_EVENTS_URL} target="_blank" rel="noreferrer">Online events</a>
        </div>
      </Section>
      <Newsletter />
    </>
  );
}

export function NCAA() {
  return (
    <>
      <PageHero eyebrow="NCAA" title="NCAA guide for Canadians.">
        The NCAA joins us to share an in-depth overview of the eligibility and recruiting process for Canada's student-athletes.
      </PageHero>
      <Section kicker="Featured event" title="NCAA eligibility and recruiting">
        <div className="feature">
          <div className="feature-body">
            <p className="body-lg">
              Learn directly from the NCAA how eligibility and recruiting work for Canadian student-athletes.
            </p>
          </div>
          <div className="feature-cta">
            <a className="btn btn-primary" href={ZOOM_EVENTS_URL} target="_blank" rel="noreferrer">View in hub <ArrowRight size={16} /></a>
            <Link className="btn btn-outline" to="/sports">Back to Sports</Link>
          </div>
        </div>
      </Section>
      <Newsletter />
    </>
  );
}
