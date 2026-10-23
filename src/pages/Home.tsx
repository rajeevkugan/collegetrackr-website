import { Link } from 'react-router-dom';
import { ArrowRight, Compass, HeartHandshake, Trophy, Video, Users } from 'lucide-react';
import { Faq, LinkCard, Newsletter, Section } from '../components/Blocks';
import { ZOOM_EVENTS_URL, destinations, stats } from '../data';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-in">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">Not-for-profit · Free for every family</p>
            <h1>Pathways in Canada and&nbsp;abroad.</h1>
            <p className="lead">
              We connect Canadian counsellors and students with universities at home and around the world — through free workshops, fairs and resources, funded entirely by our university partners.
            </p>
            <div className="actions">
              <Link to="/global-post-secondary-fair" className="btn btn-gold">Upcoming events <ArrowRight size={16} /></Link>
              <Link to="/undergraduate" className="btn btn-ghost-light">Explore undergraduate paths</Link>
            </div>
          </div>
          <div className="hero-panel" aria-hidden="true">
            <div className="hp-row"><span className="hp-label">Counsellors</span><b>300+</b></div>
            <div className="hp-row"><span className="hp-label">Students &amp; parents</span><b>4K+</b></div>
            <div className="hp-row"><span className="hp-label">Events since 2017</span><b>100+</b></div>
            <div className="hp-row"><span className="hp-label">Provinces &amp; territories</span><b>13</b></div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Section kicker="Why CollegeTrackr" title="Built around Canadian students and counsellors">
        <div className="grid-3">
          <div className="card">
            <span className="icon-chip"><HeartHandshake size={20} /></span>
            <h3>Free services</h3>
            <p>Cost-free resources for counsellors and students, supported by our university partners — never by families.</p>
          </div>
          <div className="card">
            <span className="icon-chip"><Compass size={20} /></span>
            <h3>Focused support</h3>
            <p>Events for Canadian counsellors and students pursuing global pathways, including competitive athletics.</p>
          </div>
          <div className="card">
            <span className="icon-chip"><Users size={20} /></span>
            <h3>Proven events</h3>
            <p>Join online or in-person fairs and workshops from the team that has run them since 2017.</p>
          </div>
        </div>
      </Section>

      <Section tone="alt" kicker="Explore" title="Career pathways and sports">
        <div className="split">
          <div>
            <p className="body-lg">
              Highlighting undergraduate paths in business, law, STEM and healthcare — plus competitive athletics — so students can find programs with the support they actually need.
            </p>
            <div className="actions">
              <Link to="/career-pathways" className="btn btn-primary">Career Pathways <ArrowRight size={16} /></Link>
              <Link to="/sports" className="btn btn-outline">Sports</Link>
            </div>
          </div>
          <div className="grid-2">
            <LinkCard to="/career-pathways" title="Career Pathways" text="Pre-professional and direct-entry programs in healthcare, law, business and engineering." />
            <LinkCard to="/sports-ncaa" title="NCAA guide" text="Eligibility and recruiting for Canadian student-athletes." />
          </div>
        </div>
      </Section>

      <Section kicker="Study abroad" title="Where do you want to go?">
        <div className="grid-3">
          {destinations.map((d) => (
            <LinkCard key={d.to} to={d.to} title={d.label} text={d.blurb ?? ''} />
          ))}
          <LinkCard to="/undergraduate" title="Undergraduate overview" text="Start here for a guide to every destination and pathway." />
        </div>
      </Section>

      <section className="band">
        <div className="container band-in">
          <div>
            <p className="eyebrow eyebrow-light">Workshops &amp; university fairs</p>
            <h2>Online and in-person, aligned to each other.</h2>
            <p>
              CollegeTrackr is a trailblazer in post-secondary fairs and workshops — Canada's first integrated career pathway workshops, with online programming aligned to in-person fairs.
            </p>
          </div>
          <div className="actions">
            <a className="btn btn-gold" href={ZOOM_EVENTS_URL} target="_blank" rel="noreferrer"><Video size={16} /> Online events</a>
            <Link className="btn btn-ghost-light" to="/global-post-secondary-fair">In-person events</Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="ceo">
          <div className="avatar" aria-hidden="true">SK</div>
          <div>
            <p className="eyebrow">A message from our CEO</p>
            <p className="ceo-text">
              Our aim is to set the gold standard for supporting students who are exploring undergraduate pathways — shaped by feedback from the counsellors, families and university partners we serve.
            </p>
            <p className="ceo-by"><strong>Sujee Kulendran</strong> · CEO, CollegeTrackr Canada</p>
          </div>
        </div>
      </Section>

      <Section tone="alt" kicker="FAQ" title="We've got A's for your Q's">
        <Faq
          items={[
            { q: 'What makes us different?', a: <>We run Canada's first integrated career pathway workshops, with online programming aligned to in-person fairs.</> },
            { q: 'Do you offer paid services?', a: <>No. All services are free and funded by our university and program partners.</> },
            { q: 'How do I sign up for updates?', a: <>Use the Sign up button to join the newsletter — you'll hear about programs, events and publications.</> },
          ]}
        />
        <div className="actions"><Link to="/contact-us" className="btn btn-outline">Contact us</Link></div>
      </Section>

      <Newsletter />
    </>
  );
}
