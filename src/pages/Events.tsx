import { ArrowRight, MapPin } from 'lucide-react';
import { Newsletter, PageHero, Section } from '../components/Blocks';
import { VICTORIA_REGISTER_URL, ZOOM_EVENTS_URL, fallFairs } from '../data';

const today = new Date();
const isPast = (iso: string) => new Date(`${iso}T23:59:59`) < today;

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Global Post-Secondary Fairs"
        actions={<a className="btn btn-gold" href={ZOOM_EVENTS_URL} target="_blank" rel="noreferrer">Learn more <ArrowRight size={16} /></a>}
      >
        Meet universities from Canada and around the world and learn how they support students interested in specific undergraduate studies and career pathways.
      </PageHero>

      <Section kicker="Fall 2026" title="Fair series">
        <div className="event-grid">
          {fallFairs.map((e) => {
            const past = isPast(e.iso);
            return (
              <div key={e.city} className={`event${past ? ' event-past' : ''}`}>
                <div className="event-date"><strong>{e.date.split(' ')[1]}</strong><span>{e.date.split(' ')[0]}</span></div>
                <div className="event-body">
                  <h3>{e.city}</h3>
                  <span className={`tag${past ? '' : ' tag-live'}`}>{past ? 'Completed' : 'Upcoming'}</span>
                </div>
                <a className="event-link" href={e.url} target="_blank" rel="noreferrer" aria-label={`${e.city} event details`}>
                  {past ? 'Details' : 'Register'} <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
        <p className="muted">Times and venue details are provided on each event page. More dates are announced through the newsletter.</p>
      </Section>

      <Section tone="alt" kicker="Spring 2026" title="Global Post-Secondary Fair — Victoria">
        <div className="feature">
          <div className="feature-icon"><MapPin size={26} /></div>
          <div className="feature-body">
            <p className="body-lg"><strong>April 21, 2026 · 4:00–6:00 PM PT</strong><br />Glenlyon Norfolk School, Victoria</p>
            <p>Explore your undergraduate options and future career paths. Topics: undergraduate programs, career pathways (healthcare, law, business, engineering and more), scholarships and financial aid for Canadian students, and sports and athletic resources for student-athletes.</p>
          </div>
          <div className="feature-cta">
            <a className="btn btn-primary" href={VICTORIA_REGISTER_URL} target="_blank" rel="noreferrer">Event page <ArrowRight size={16} /></a>
          </div>
        </div>
      </Section>
      <Newsletter />
    </>
  );
}
