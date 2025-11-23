import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickLinks } from './components/QuickLinks';
import { LatestUpdates } from './components/LatestUpdates';
import { KeyServices } from './components/KeyServices';
import { DataSection } from './components/DataSection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/pages/AboutPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { DataReportsPage } from './components/pages/DataReportsPage';
import { TendersPage } from './components/pages/TendersPage';
import { ContactPage } from './components/pages/ContactPage';
import { WaterDataPage } from './components/pages/WaterDataPage';
import { FloodAlertsPage } from './components/pages/FloodAlertsPage';
import { CareersPage } from './components/pages/CareersPage';
import { EventsPage } from './components/pages/EventsPage';
import { ReservoirDataPage } from './components/pages/ReservoirDataPage';
import { BasinMapsPage } from './components/pages/BasinMapsPage';
import { HistoricalDataPage } from './components/pages/HistoricalDataPage';
import { PublicationsPage } from './components/pages/PublicationsPage';

export type PageType = | 'home' | 'about' | 'projects' | 'data-reports' | 'tenders' | 'contact' | 
  'water-data' | 'flood-alerts' | 'careers' | 'events' | 'reservoir-data' | 'basin-maps' | 
  'historical-data' | 'publications';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage onNavigate={setCurrentPage} />;
      case 'data-reports':
        return <DataReportsPage onNavigate={setCurrentPage} />;
      case 'tenders':
        return <TendersPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      case 'water-data':
        return <WaterDataPage onNavigate={setCurrentPage} />;
      case 'flood-alerts':
        return <FloodAlertsPage onNavigate={setCurrentPage} />;
      case 'careers':
        return <CareersPage onNavigate={setCurrentPage} />;
      case 'events':
        return <EventsPage onNavigate={setCurrentPage} />;
      case 'reservoir-data':
        return <ReservoirDataPage onNavigate={setCurrentPage} />;
      case 'basin-maps':
        return <BasinMapsPage onNavigate={setCurrentPage} />;
      case 'historical-data':
        return <HistoricalDataPage onNavigate={setCurrentPage} />;
      case 'publications':
        return <PublicationsPage onNavigate={setCurrentPage} />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <QuickLinks onNavigate={setCurrentPage} />
            <LatestUpdates />
            <KeyServices />
            <DataSection onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
