import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Undergraduate from './pages/Undergraduate';
import { Australia, Canada, France, UK, US } from './pages/Destinations';
import Pathways from './pages/Pathways';
import { NCAA, Sports } from './pages/Sports';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="undergraduate" element={<Undergraduate />} />
        <Route path="canada" element={<Canada />} />
        <Route path="united-states" element={<US />} />
        <Route path="united-kingdom" element={<UK />} />
        <Route path="studyinaustralia-newzealand" element={<Australia />} />
        <Route path="france" element={<France />} />
        <Route path="career-pathways" element={<Pathways />} />
        <Route path="sports" element={<Sports />} />
        <Route path="sports-ncaa" element={<NCAA />} />
        <Route path="global-post-secondary-fair" element={<Events />} />
        <Route path="gpf-victoria" element={<Events />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
