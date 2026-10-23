import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ADDRESS, SIGNUP_URL, destinations, sportsNav } from '../data';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? ' logo-light' : ''}`}>
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
      <span>
        CollegeTrackr<small>Canada</small>
      </span>
    </span>
  );
}

function Dropdown({ label, items, basePaths }: { label: string; items: { label: string; to: string; blurb?: string }[]; basePaths: string[] }) {
  const { pathname } = useLocation();
  const active = basePaths.includes(pathname);
  return (
    <div className="dd">
      <button className={`nav-link dd-btn${active ? ' active' : ''}`} aria-haspopup="true">
        {label} <ChevronDown size={14} />
      </button>
      <div className="dd-panel">
        {items.map((i) => (
          <Link key={i.to} to={i.to} className="dd-item">
            <strong>{i.label}</strong>
            {i.blurb && <span>{i.blurb}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="header">
      <div className="container header-in">
        <Link to="/" aria-label="CollegeTrackr Canada home">
          <Logo />
        </Link>
        <nav className="nav-desktop" aria-label="Main">
          <NavLink to="/undergraduate" className="nav-link">Undergraduate</NavLink>
          <Dropdown label="Destinations" items={destinations} basePaths={destinations.map((d) => d.to)} />
          <NavLink to="/career-pathways" className="nav-link">Career Pathways</NavLink>
          <Dropdown label="Sports" items={sportsNav} basePaths={sportsNav.map((d) => d.to)} />
          <NavLink to="/global-post-secondary-fair" className="nav-link">Events</NavLink>
          <NavLink to="/about-us" className="nav-link">About</NavLink>
          <NavLink to="/contact-us" className="nav-link">Contact</NavLink>
        </nav>
        <div className="header-cta">
          <a className="btn btn-primary btn-sm" href={SIGNUP_URL} target="_blank" rel="noreferrer">Sign up</a>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/undergraduate">Undergraduate</NavLink>
          <p className="m-group">Study abroad</p>
          {destinations.map((d) => (
            <NavLink key={d.to} to={d.to}>{d.label}</NavLink>
          ))}
          <p className="m-group">Explore</p>
          <NavLink to="/career-pathways">Career Pathways</NavLink>
          <NavLink to="/sports">Sports</NavLink>
          <NavLink to="/sports-ncaa">NCAA</NavLink>
          <NavLink to="/global-post-secondary-fair">Events</NavLink>
          <p className="m-group">Company</p>
          <NavLink to="/about-us">About</NavLink>
          <NavLink to="/contact-us">Contact us</NavLink>
          <a className="btn btn-primary" href={SIGNUP_URL} target="_blank" rel="noreferrer">Sign up for the newsletter</a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-blurb">
            A free, not-for-profit guide connecting Canadian students and counsellors with undergraduate opportunities in Canada and abroad.
          </p>
          <p className="footer-addr">{ADDRESS}</p>
        </div>
        <div>
          <h4>Study abroad</h4>
          <ul>
            <li><Link to="/undergraduate">Undergraduate</Link></li>
            {destinations.map((d) => (
              <li key={d.to}><Link to={d.to}>{d.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/career-pathways">Career Pathways</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/sports-ncaa">NCAA</Link></li>
            <li><Link to="/global-post-secondary-fair">Events</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/contact-us">Contact us</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><a href={SIGNUP_URL} target="_blank" rel="noreferrer">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <span>©2017–2026 CollegeTrackr Inc. All rights reserved.</span>
        <span><Link to="/about-us">About</Link> · <Link to="/privacy">Privacy</Link> · <Link to="/contact-us">Contact us</Link></span>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1 });
    (window as any).__lenis = lenis;
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    (window as any).__lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    const sel = '.section-head, .card, .stat, .feature, .event, .ceo, .band-in, .newsletter-in, .faq details, .form, .prose > div, .split > p, .hero-panel, .chips';
    const els = Array.from(document.querySelectorAll<HTMLElement>(sel));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach((el) => {
      const sibs = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.transitionDelay = `${Math.min(sibs, 5) * 80}ms`;
      el.classList.add('reveal');
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
