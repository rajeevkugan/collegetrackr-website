import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Newsletter, PageHero, Section } from '../components/Blocks';
import { destinations, ZOOM_EVENTS_URL } from '../data';

type Config = {
  to: string;
  eyebrow: string;
  title: string;
  lead: string;
  featuredTitle: string;
  featured: string;
  who: string[];
  cta: string;
  external?: boolean;
};

function Destination({ c }: { c: Config }) {
  const others = destinations.filter((d) => d.to !== c.to);
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title}>{c.lead}</PageHero>

      <Section kicker="Featured event" title={c.featuredTitle}>
        <div className="feature">
          <div className="feature-icon"><CalendarDays size={26} /></div>
          <div className="feature-body">
            <p className="body-lg">{c.featured}</p>
            <div className="chips">
              {c.who.map((w) => <span key={w} className="chip">{w}</span>)}
            </div>
          </div>
          <div className="feature-cta">
            <a className="btn btn-primary" href={ZOOM_EVENTS_URL} target="_blank" rel="noreferrer">{c.cta} <ArrowRight size={16} /></a>
            <Link className="btn btn-outline" to="/global-post-secondary-fair">All events</Link>
          </div>
        </div>
      </Section>

      <Section tone="alt" kicker="Keep exploring" title="Other destinations">
        <div className="grid-4">
          {others.map((d) => (
            <Link key={d.to} to={d.to} className="card card-link">
              <h3>{d.label}</h3>
              <p>{d.blurb}</p>
              <span className="more">Explore <ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>
      </Section>
      <Newsletter />
    </>
  );
}

export const Canada = () => (
  <Destination c={{
    to: '/canada', eyebrow: 'Destination', title: 'Study in Canada',
    lead: 'Featured videos from Canadian universities that offer strong support to Canadian students exploring undergraduate study and career options.',
    featuredTitle: 'Canadian universities, up close',
    featured: 'Watch featured sessions from Canadian universities and see how they support students exploring undergraduate study and career paths.',
    who: ['Undergraduate study', 'Career options', 'Student support'], cta: 'View in hub',
  }} />
);

export const US = () => (
  <Destination c={{
    to: '/united-states', eyebrow: 'Destination', title: 'Study in the US: guide for Canadians',
    lead: 'An in-depth overview of the US admissions process for Canadian applicants.',
    featuredTitle: 'Study in US: Guide for Canadians',
    featured: 'Johns Hopkins University and Northwestern University present an in-depth overview of the US admissions process for Canadian applicants.',
    who: ['Johns Hopkins University', 'Northwestern University', 'US admissions'], cta: 'View in hub',
  }} />
);

export const UK = () => (
  <Destination c={{
    to: '/united-kingdom', eyebrow: 'Destination', title: 'Study in the UK: guide for Canadians',
    lead: 'A detailed overview of the UK admissions process for Canadian applicants.',
    featuredTitle: 'Study in UK: Guide for Canadians',
    featured: 'Representatives from Imperial College London and the University of Oxford give a detailed overview of the UK admissions process for Canadian applicants.',
    who: ['Imperial College London', 'University of Oxford', 'UK admissions'], cta: 'Learn more',
  }} />
);

export const Australia = () => (
  <Destination c={{
    to: '/studyinaustralia-newzealand', eyebrow: 'Destination', title: 'Study in Oceania: guide for Canadians',
    lead: 'Support for Canadian students interested in undergraduate study and career pathways in Australia and New Zealand.',
    featuredTitle: 'Featured video with OzTREKK',
    featured: 'OzTREKK offers support to Canadian students interested in undergraduate study and career pathways in Australia and New Zealand.',
    who: ['OzTREKK', 'Australia', 'New Zealand'], cta: 'View in hub',
  }} />
);

export const France = () => (
  <Destination c={{
    to: '/france', eyebrow: 'Destination', title: 'Study in France: guide for Canadians',
    lead: 'An in-depth overview for Canadians interested in studying in France.',
    featuredTitle: 'Study in France: Guide for Canadians',
    featured: 'École Polytechnique presents an in-depth overview for Canadians interested in studying in France.',
    who: ['École Polytechnique', 'France'], cta: 'View in hub',
  }} />
);
