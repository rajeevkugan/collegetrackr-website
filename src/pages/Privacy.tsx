import { ADDRESS } from '../data';
import { PageHero, Section } from '../components/Blocks';

const sections: { h: string; p: string[] }[] = [
  { h: 'Introduction', p: ['CollegeTrackr Inc., a Canadian not-for-profit, runs this site and offers free resources and events to families. This policy covers the website, its subdomains and event registration.'] },
  { h: 'Personal information we collect', p: ['Contact details (including parent or guardian information), academic and professional background, and information you submit through support requests and forms.'] },
  { h: 'How we use your information', p: ['To register you for events, send educational and marketing messages, and analyze registration trends.'] },
  { h: 'How we share your information', p: [
    'Partner colleges and universities: registering for an event means consenting to share your academic and contact details with institutions worldwide.',
    'Program partners and sponsors: sharing happens only with explicit, optional opt-in consent. We do not sell student data to sponsors for marketing as a condition of attending events.',
    'Service providers: GoToCollegeFair, Zoom, AWS, Leadpages.net and HubSpot store or process data on our behalf.',
  ] },
  { h: 'International data transfers', p: ['Data may be stored or processed outside Canada, where foreign laws and access requests may apply.'] },
  { h: 'Protection of minors', p: ['Our services target high school students. Parental or guardian involvement is encouraged or required for minors.'] },
  { h: 'Your rights over your data', p: ['You can request access to your data or ask for its deletion. Data we must keep for security or compliance reasons is excluded.'] },
  { h: 'Event disclaimers and limitation of liability', p: [
    'Information accuracy: we are not liable for errors or decisions based on event or site content, and events may change or be cancelled.',
    'Photos and video: media may be taken and used publicly without full names attached. Attendees can opt out at the registration desk.',
  ] },
  { h: 'Cookies and embedded content', p: ['The site uses cookies. Third-party embedded content, such as YouTube videos, may collect data under its own terms.'] },
  { h: 'Data security', p: ['We use safeguards and limit access to authorized personnel, but cannot guarantee complete internet security.'] },
  { h: 'Changes to this policy', p: ['We may update this policy. Continued use of the site or events counts as acceptance of changes.'] },
  { h: 'Contact us', p: [`Questions and complaints: info@collegetrackr.com · ${ADDRESS}`] },
];

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy">Last modified June 12, 2026.</PageHero>
      <Section>
        <div className="prose">
          {sections.map((s, i) => (
            <div key={s.h}>
              <h2>{i + 1}. {s.h}</h2>
              {s.p.map((t) => <p key={t}>{t}</p>)}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
