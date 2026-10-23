export const SIGNUP_URL = 'https://e2655.share.hsforms.com/2QZ3cKAd2QXieotGmm4wIzA';
export const ZOOM_EVENTS_URL =
  'https://events.zoom.us/eo/AjDWr9xTfMVKr-4Qx_XtYdZPIYv46TiqpAnA1u1sNQXg486mnH7B~AggLXsr32QYFjq8BlYLZ5I06Dg';
export const VICTORIA_REGISTER_URL = 'https://collegetrackr.swoogo.com/spring26-gpf-victoria';

export const ADDRESS = '24 Maple Ave., 2nd Floor, Barrie, ON L4M 7W4';

export type NavItem = { label: string; to: string; blurb?: string };

export const destinations: NavItem[] = [
  { label: 'Study in Canada', to: '/canada', blurb: 'Canadian universities that back Canadian students' },
  { label: 'Study in the US', to: '/united-states', blurb: 'US admissions, explained for Canadians' },
  { label: 'Study in the UK', to: '/united-kingdom', blurb: 'Admissions guidance from Oxford and Imperial' },
  { label: 'Australia & New Zealand', to: '/studyinaustralia-newzealand', blurb: 'Oceania pathways with OzTREKK' },
  { label: 'Study in France', to: '/france', blurb: 'An overview with École Polytechnique' },
];

export const sportsNav: NavItem[] = [
  { label: 'Sports', to: '/sports', blurb: 'Competitive athletics and recruiting' },
  { label: 'NCAA', to: '/sports-ncaa', blurb: 'Eligibility and recruiting for Canadians' },
];

export const stats = [
  { value: '13', label: 'Provinces & territories supported' },
  { value: '300+', label: 'Counsellors registered' },
  { value: '4K+', label: 'Students & parents reached' },
  { value: '100+', label: 'Online and in-person events since 2017' },
];

export type FairEvent = { city: string; date: string; iso: string; url: string };

export const fallFairs: FairEvent[] = [
  { city: 'Halton', date: 'Oct 1', iso: '2026-10-01', url: 'https://events.zoom.us/ev/Arb-gwNC9VDdC1BLc4jyQmkk36s0EzN54_GJfvypN5jEtcizcfRp~AvTnvkLQIzhPU-oevDzEo_BFSnnvH8TJqzwQKxgev3zBOiGSsrdMoiQl5w' },
  { city: 'Toronto', date: 'Oct 3', iso: '2026-10-03', url: 'https://events.zoom.us/ev/AtGW0OBhUZFHNJm9VK61lUqG_ou55V7-n8g1fuNIY9wpfjNKZauT~AmnbgORwAu-TOgF89NLA7ISrNZ1VUN_PTqk1caRg5uv4BbcmZV_tTO671A' },
  { city: 'Montreal', date: 'Oct 4', iso: '2026-10-04', url: 'https://events.zoom.us/ev/Ah7SP9wAfeXDHxr3jFAWWieIO68YgupsAfFKJFukPVsgfwOBCWoB~AkZOsLyIyk7qfvbvVy9EoFjD-bcJwDrk38761rz065OGRyr6Th-uO6v6sg' },
  { city: 'Richmond', date: 'Oct 5', iso: '2026-10-05', url: 'https://events.zoom.us/ev/AuXqi-Qstegw_olO05PKFD1bv4VhudaKXpfg46iSXuhHG3oPejW5~AnNWzi0lK8bS7nJB3KOUIuIkSWRjekD_S0RCqwm8aDZI0khjY3-tcWvnlA' },
  { city: 'Vancouver', date: 'Oct 5', iso: '2026-10-05', url: 'https://events.zoom.us/ev/Aigi8QjbeLsyUt1TM8FmYkxmX0E5_YvBMxxgdoEqtU-R-IzcMSSR~AqO1J5gxhzk4r1ePd8rdWT_z6ysxYVrxg1NMl73NIWgHeYCJh6vZKfE1Sw' },
  { city: 'Calgary', date: 'Oct 7', iso: '2026-10-07', url: 'https://events.zoom.us/ev/Aov1zFqx47P0K9bx183tFQXv9ueOKo2aZ8ZFMQIpPLLme4iiqNib~AsI3bTIylaF0wDJX67slOf4IPe5PnOEvrHFl0QojFOmdjbc8Zq2pOgUF8A' },
];

export const pathwayCriteria = [
  { title: 'Academic fit', text: 'Strong majors in your field and real research opportunities.' },
  { title: 'Institutional support', text: 'Low faculty-to-student ratios and robust campus resources.' },
  { title: 'Financial viability', text: 'Scholarships and financial aid that make the plan workable.' },
  { title: 'Graduation outcomes', text: 'Where graduates go next — grad school, licensing, careers.' },
];

export const pathwayFields = ['Healthcare', 'Business', 'Law', 'Engineering', 'STEM', 'Pharmacy'];
