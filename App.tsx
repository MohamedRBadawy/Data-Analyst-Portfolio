
import React, { useState, useEffect } from 'react';
import { InteractionProvider } from './context/InteractionContext';
import { CaseStudy, ServiceItem, WorkExperience } from './data/content';
import GenerativeBackground from './components/GenerativeBackground';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import ExperienceDetailPage from './components/ExperienceDetailPage';
import ProgressBar from './components/ProgressBar';
import BottomNavBar from './components/BottomNavBar';

// New Page Components
import HomePage from './components/pages/HomePage';
import WorkPage from './components/pages/WorkPage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
// ToolkitPage imported but unused intentionally
import ContactPage from './components/pages/ContactPage';


export type Page = 'home' | 'work' | 'about' | 'services' | 'contact' | 'projectDetail' | 'serviceDetail' | 'experienceDetail';

const pageOrder: Page[] = ['home', 'work', 'about', 'services', 'contact'];

const App: React.FC = () => {
    // Initialize state from hash or default to 'home'
    const getInitialPage = (): Page => {
        const hash = window.location.hash.replace('#', '');
        return (pageOrder.includes(hash as Page) ? hash as Page : 'home');
    };

    const [currentPage, setCurrentPage] = useState<Page>(getInitialPage());
    const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
    const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(null);

    // Sync state with URL hash on mount and hash change
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash === '' || hash === 'home') {
                setCurrentPage('home');
            } else if (pageOrder.includes(hash as Page)) {
                setCurrentPage(hash as Page);
            }
            // Note: Detail pages don't have unique hashes in this simple implementation
            // to keep state complex objects alive. They rely on internal state.
            // If the user hits back from a detail page, we handle it below.
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navigateTo = (page: Page) => {
        setCurrentPage(page);
        window.location.hash = page;
        window.scrollTo(0, 0);
    };

    const showProjectDetailPage = (project: CaseStudy) => {
        setSelectedProject(project);
        setCurrentPage('projectDetail');
        window.scrollTo(0, 0);
        // We don't set hash for detail pages to avoid complex serialization in URL, 
        // but we could conceptually add #work/project-id in a larger app.
    };

    const showServiceDetailPage = (service: ServiceItem) => {
        setSelectedService(service);
        setCurrentPage('serviceDetail');
        window.scrollTo(0, 0);
    };

    const showExperienceDetailPage = (experience: WorkExperience) => {
        setSelectedExperience(experience);
        setCurrentPage('experienceDetail');
        window.scrollTo(0, 0);
    };

    // Handle "Back" logic specifically for Detail pages returning to main views
    const handleBack = (targetPage: Page) => {
        navigateTo(targetPage);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage navigateTo={navigateTo} showProjectDetailPage={showProjectDetailPage} />;
            case 'work':
                return <WorkPage showProjectDetailPage={showProjectDetailPage} showExperienceDetailPage={showExperienceDetailPage} navigateTo={navigateTo} />;
            case 'about':
                return <AboutPage showProjectDetailPage={showProjectDetailPage} navigateTo={navigateTo} />;
            case 'services':
                return <ServicesPage navigateTo={navigateTo} showServiceDetailPage={showServiceDetailPage} />;
            case 'contact':
                return <ContactPage />;
            case 'projectDetail':
                return selectedProject && <ProjectDetailPage project={selectedProject} onBack={() => handleBack('work')} />;
            case 'serviceDetail':
                return selectedService && <ServiceDetailPage service={selectedService} onBack={() => handleBack('services')} navigateToContact={() => navigateTo('contact')} />;
            case 'experienceDetail':
                return selectedExperience && <ExperienceDetailPage experience={selectedExperience} onBack={() => handleBack('work')} showProjectDetailPage={showProjectDetailPage} />;
            default:
                return <HomePage navigateTo={navigateTo} showProjectDetailPage={showProjectDetailPage} />;
        }
    };

    const isDetailPage = ['projectDetail', 'serviceDetail', 'experienceDetail'].includes(currentPage);

    const getProgress = () => {
        let pageForProgress = currentPage;
        if (['projectDetail', 'experienceDetail'].includes(currentPage)) {
            pageForProgress = 'work';
        } else if (currentPage === 'serviceDetail') {
            pageForProgress = 'services';
        }

        const currentIndex = pageOrder.findIndex(p => p === pageForProgress);
        if (currentIndex === -1) return 0;

        return ((currentIndex + 1) / pageOrder.length) * 100;
    };

    const progress = getProgress();

    return (
        <div className="bg-brand-bg text-brand-text-primary pb-20 lg:pb-0">
            <ProgressBar progress={progress} />
            <GenerativeBackground />

            <div className="relative z-10 flex">
                <Sidebar navigateTo={navigateTo} activePage={currentPage} />
                <main className="flex-grow lg:ml-64">
                    {renderPage()}
                    {!isDetailPage && <Footer />}
                </main>
            </div>

            <BottomNavBar navigateTo={navigateTo} activePage={currentPage} />
        </div>
    );
};

const AppWrapper: React.FC = () => (
    <InteractionProvider>
        <App />
    </InteractionProvider>
);

export default AppWrapper;
