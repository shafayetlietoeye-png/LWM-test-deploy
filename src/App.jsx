import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import OnThisDay from './pages/OnThisDay';
import VirtualTour from './pages/VirtualTour';
import MuseumStory from './pages/MuseumStory';
import Prologue from './pages/Prologue';
import MissionStatement from './pages/MissionStatement';
import InitialEfforts from './pages/InitialEfforts';
import NewMuseum from './pages/NewMuseum';
import MuseumInNutshell from './pages/MuseumInNutshell';
import BoardOfTrustees from './pages/BoardOfTrustees';
import AnnualSpeeches from './pages/AnnualSpeeches';
import Publications from './pages/Publications';
import ProjectsAndPrograms from './pages/ProjectsAndPrograms';
import Accreditations from './pages/Accreditations';
import Donate from './pages/Donate';
import ExplorePage from './pages/ExplorePage';
import ActivityDetail from './pages/ActivityDetail';
import SupportDetail from './pages/SupportDetail';
import ObjectDonors from './pages/ObjectDonors';
import VisitDetail from './pages/VisitDetail';
import ArchiveDonors from './pages/ArchiveDonors';
import CampaignLeaflets from './pages/CampaignLeaflets';
import CampaignTVC from './pages/CampaignTVC';
import FriendsOfLWM from './pages/FriendsOfLWM';
import BuyTickets from './pages/BuyTickets';
import OpeningHours from './pages/OpeningHours';
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
          <Route path="/prologue" element={<Prologue />} />
          <Route path="/mission-statement" element={<MissionStatement />} />
          <Route path="/initial-efforts" element={<InitialEfforts />} />
          <Route path="/new-museum" element={<NewMuseum />} />
          <Route path="/museum-in-a-nutshell" element={<MuseumInNutshell />} />
          <Route path="/on-this-day" element={<OnThisDay />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/museum-story" element={<MuseumStory />} />
          <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
          <Route path="/annual-speeches" element={<AnnualSpeeches />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects-and-programs" element={<ProjectsAndPrograms />} />
          <Route path="/accreditations-and-affiliations" element={<Accreditations />} />
          <Route path="/explore/:pageKey" element={<ExplorePage />} />
          <Route path="/activities/:category/:item" element={<ActivityDetail />} />
          <Route path="/support/donation/object-donors" element={<ObjectDonors />} />
          <Route path="/support/donation/archive-donors" element={<ArchiveDonors />} />
          <Route path="/support/campaigns/leaflet" element={<CampaignLeaflets />} />
          <Route path="/support/campaigns/tvc" element={<CampaignTVC />} />
          <Route path="/support/community/friends" element={<FriendsOfLWM />} />
          <Route path="/support/:category" element={<SupportDetail />} />
          <Route path="/support/:category/:item" element={<SupportDetail />} />
          <Route path="/visit/opening-hours" element={<OpeningHours />} />
          <Route path="/visit/tickets/buy" element={<BuyTickets />} />
          <Route path="/visit/tickets/:item" element={<VisitDetail category="tickets" />} />
          <Route path="/visit/:item" element={<VisitDetail />} />
          <Route path="/donate" element={<Donate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
