import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import OnThisDay from './pages/OnThisDay';
import VirtualTour from './pages/VirtualTour';
import MuseumStory from './pages/MuseumStory';
import BoardOfTrustees from './pages/BoardOfTrustees';
import AnnualSpeeches from './pages/AnnualSpeeches';
import Publications from './pages/Publications';
import ProjectsAndPrograms from './pages/ProjectsAndPrograms';
import Accreditations from './pages/Accreditations';
import Donate from './pages/Donate';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/on-this-day" element={<OnThisDay />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/museum-story" element={<MuseumStory />} />
          <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
          <Route path="/annual-speeches" element={<AnnualSpeeches />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects-and-programs" element={<ProjectsAndPrograms />} />
          <Route path="/accreditations-and-affiliations" element={<Accreditations />} />
        </Route>
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
