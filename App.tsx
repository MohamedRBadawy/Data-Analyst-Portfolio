
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
import KeyboardShortcuts from './components/KeyboardShortcuts';

// New Page Components
import HomePage from './components/pages/HomePage';
import WorkPage from './components/pages/WorkPage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ProcessPage from './components/pages/ProcessPage';
// ToolkitPage imported but unused intentionally
import ContactPage from './components/pages/ContactPage';


export type Page = 'home' | 'work' | 'about' | 'services' | 'process' | 'contact' | 'toolkit' | 'projectDetail' | 'serviceDetail' | 'experienceDetail';

const pageOrder: Page[] = ['home', 'work', 'toolkit', 'about', 'services', 'process', 'contact'];

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
    const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);

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

    // Keyboard shortcuts handler
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't trigger on input/textarea
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            // ? for help
            if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                setShowKeyboardShortcuts(!showKeyboardShortcuts);
                return;
            }

            // Esc to close shortcuts
            if (e.key === 'Escape') {
                setShowKeyboardShortcuts(false);
                return;
            }

            // 1-6 for navigation
            if (e.key >= '1' && e.key <= '6' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                const pageIndex = parseInt(e.key) - 1;
                if (pageIndex < pageOrder.length) {
                    e.preventDefault();
                    navigateTo(pageOrder[pageIndex]);
                }
                return;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showKeyboardShortcuts]);

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
            case 'process':
                return <ProcessPage navigateTo={navigateTo} />;
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
        <div className="bg-ops-bg text-ops-text-primary pb-20 lg:pb-0 min-h-screen font-sans">
            {/* Skip to Content - Accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-6 focus:py-3 focus:bg-brand-accent focus:text-brand-bg focus:font-bold focus:font-poppins focus:rounded-lg focus:shadow-[0_0_20px_rgba(0,245,255,0.6)] focus:outline-none"
            >
                Skip to main content
            </a>

            <KeyboardShortcuts isOpen={showKeyboardShortcuts} onClose={() => setShowKeyboardShortcuts(false)} />

            <ProgressBar progress={progress} />
            <GenerativeBackground />

            <div className="relative z-10 flex min-h-screen">
                <Sidebar navigateTo={navigateTo} activePage={currentPage} />

                {/* Asymmetric Layout: Work Surface */}
                <main id="main-content" className="flex-grow lg:ml-72 bg-ops-bg transition-colors duration-300 relative">
                    {/* Data Decorators: Corner Reticles */}
                    <div className="absolute top-6 left-6 w-3 h-3 border-l border-t border-signal-info/30 pointer-events-none hidden lg:block"></div>
                    <div className="absolute top-6 right-6 w-3 h-3 border-r border-t border-signal-info/30 pointer-events-none hidden lg:block"></div>
                    <div className="absolute bottom-6 left-6 w-3 h-3 border-l border-b border-signal-info/30 pointer-events-none hidden lg:block"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 border-r border-b border-signal-info/30 pointer-events-none hidden lg:block"></div>

                    <div className="max-w-[1600px] mx-auto w-full">
                        {renderPage()}
                    </div>
                    {!isDetailPage && <Footer />}
                </main>

                {/* Future Context Column (Reserved) - Hidden for now */}
                {/* <aside className="hidden 2xl:block w-72 fixed right-0 h-screen border-l border-ops-border bg-ops-panel"></aside> */}
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
