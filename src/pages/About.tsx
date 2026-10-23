import { Banknote, GraduationCap, Globe2, Mail } from 'lucide-react';
import { Newsletter, PageHero, Section } from '../components/Blocks';

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="A free guide to undergraduate life, in Canada and abroad.">
        CollegeTrackr Canada is a not-for-profit that connects Canadian students with undergraduate opportunities — without expensive consultation fees or programs.
      </PageHero>

      <Section kicker="Our mission" title="Relationships first, starting in grade 9">
        <div className="split">
          <p className="body-lg">
            We make studying abroad accessible. Our focus is helping students build relationships with university admissions representatives, starting in their first year of high school — for students, parents and guidance counsellors alike.
          </p>
          <p className="body-lg">
            We run online and in-person events with universities that support Canadian students and athletes. Topics include scholarships, academic programs, financial aid, campus developments and athletics.
          </p>
        </div>
      </Section>

      <Section tone="alt" kicker="What we do" title="How CollegeTrackr works">
        <div className="grid-4">
          <div className="card"><span className="icon-chip"><Globe2 size={20} /></span><h3>Events</h3><p>Online workshops and in-person fairs with partner universities.</p></div>
          <div className="card"><span className="icon-chip"><GraduationCap size={20} /></span><h3>Resources</h3><p>Guides for university searches and preparation.</p></div>
          <div className="card"><span className="icon-chip"><Banknote size={20} /></span><h3>Funding</h3><p>Started with funding from our Founder &amp; President; events are now funded by university partners.</p></div>
          <div className="card"><span className="icon-chip"><Mail size={20} /></span><h3>Newsletter</h3><p>Free event invitations and resources for subscribers.</p></div>
        </div>
      </Section>

      <Section>
        <div className="ceo">
          <div className="avatar" aria-hidden="true">SK</div>
          <div>
            <p className="eyebrow">CEO message</p>
            <p className="ceo-text">
              We want to set a high standard for supporting students exploring undergraduate pathways, and we credit the feedback from our community and university partners for getting us there.
            </p>
            <p className="ceo-by"><strong>Sujee Kulendran</strong> · CEO, CollegeTrackr Canada</p>
          </div>
        </div>
        <p className="muted center">— The CollegeTrackr Team</p>
      </Section>

      <Newsletter />
    </>
  );
}
