import { LinkCard, Newsletter, PageHero, Section } from '../components/Blocks';
import { destinations } from '../data';

export default function Undergraduate() {
  return (
    <>
      <PageHero eyebrow="Undergraduate" title="Find your undergraduate pathway.">
        Featured sessions from universities that offer strong support to Canadian students exploring undergraduate study and career options — in Canada and around the world.
      </PageHero>

      <Section kicker="By destination" title="Choose where to start">
        <div className="grid-3">
          {destinations.map((d) => (
            <LinkCard key={d.to} to={d.to} title={d.label} text={d.blurb ?? ''} />
          ))}
        </div>
      </Section>

      <Section tone="alt" kicker="By goal" title="Or start with what you want to do">
        <div className="grid-3">
          <LinkCard to="/career-pathways" title="Career Pathways" text="Healthcare, law, business, engineering and more — programs built to lead into professional studies." />
          <LinkCard to="/sports" title="Sports" text="Competitive athletics and the resources available to student-athletes." />
          <LinkCard to="/global-post-secondary-fair" title="Events" text="Meet universities at our online workshops and in-person fairs." />
        </div>
      </Section>
      <Newsletter />
    </>
  );
}
