import React, { useRef } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ClaritySandbox from './components/ClaritySandbox';
import CaseStudies from './components/CaseStudies';
import Industries from './components/Industries';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GenerativeBackground from './components/GenerativeBackground';
import CustomCursor from './components/CustomCursor';
import { InteractionProvider } from './context/InteractionContext';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import Toolkit from './components/Toolkit';

type Section = 'home' | 'solutions' | 'toolkit' | 'cases' | 'industries' | 'about' | 'blog' | 'contact';

type SectionRefs = Record<Section, React.RefObject<HTMLDivElement>>;

function App() {
    const sectionRefs: SectionRefs = {
        home: useRef<HTMLDivElement>(null),
        solutions: useRef<HTMLDivElement>(null),
        toolkit: useRef<HTMLDivElement>(null),
        cases: useRef<HTMLDivElement>(null),
        industries: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        blog: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };
    const sandboxRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const resourcesRef = useRef<HTMLDivElement>(null);

    const isHomeVisible = useIntersectionObserver(sectionRefs.home);
    const areSolutionsVisible = useIntersectionObserver(sectionRefs.solutions);
    const isSandboxVisible = useIntersectionObserver(sandboxRef);
    const isToolkitVisible = useIntersectionObserver(sectionRefs.toolkit);
    const areCasesVisible = useIntersectionObserver(sectionRefs.cases);
    const areIndustriesVisible = useIntersectionObserver(sectionRefs.industries);
    const isAboutVisible = useIntersectionObserver(sectionRefs.about);
    const areTestimonialsVisible = useIntersectionObserver(testimonialsRef);
    const isBlogVisible = useIntersectionObserver(sectionRefs.blog);
    const areResourcesVisible = useIntersectionObserver(resourcesRef);
    const isContactVisible = useIntersectionObserver(sectionRefs.contact);


    const scrollToSection = (section: Section) => {
        sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    
    const scrollToContact = () => scrollToSection('contact');
    const scrollToCases = () => scrollToSection('cases');

    return (
        <InteractionProvider>
            <CustomCursor />
            <GenerativeBackground />
            <div className="relative z-10 lg:pl-20">
                <Sidebar scrollToSection={scrollToSection} />
                <main>
                    <div ref={sectionRefs.home} className={isHomeVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <Hero scrollToContact={scrollToContact} />
                    </div>
                    <div ref={sectionRefs.solutions} className={areSolutionsVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <ProblemSolution scrollToSection={scrollToCases} />
                    </div>
                    <div ref={sandboxRef} className={isSandboxVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <ClaritySandbox />
                    </div>
                     <div ref={sectionRefs.toolkit} className={isToolkitVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <Toolkit />
                    </div>
                    <div ref={sectionRefs.cases} className={areCasesVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <CaseStudies />
                    </div>
                    <div ref={sectionRefs.industries} className={areIndustriesVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <Industries />
                    </div>
                    <div ref={sectionRefs.about} className={isAboutVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <About />
                    </div>
                    <div ref={testimonialsRef} className={areTestimonialsVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <Testimonials />
                    </div>
                    <div ref={sectionRefs.blog} className={isBlogVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <Blog />
                    </div>
                    <div ref={resourcesRef} className={areResourcesVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <Resources />
                    </div>
                    <div ref={sectionRefs.contact} className={isContactVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                        <Contact />
                    </div>
                    <Footer />
                </main>
            </div>
        </InteractionProvider>
    );
}

export default App;