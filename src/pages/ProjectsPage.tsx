import React, { useRef } from 'react';
import CaseStudies from '../components/CaseStudies';
import Industries from '../components/Industries';
import About from '../components/About';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProjectsPage: React.FC = () => {
    const caseStudiesRef = useRef<HTMLDivElement>(null);
    const industriesRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    const isCaseStudiesVisible = useIntersectionObserver(caseStudiesRef);
    const isIndustriesVisible = useIntersectionObserver(industriesRef);
    const isAboutVisible = useIntersectionObserver(aboutRef);

    return (
        <div className="pt-20">
            <div ref={caseStudiesRef} className={isCaseStudiesVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <CaseStudies />
            </div>
            <div ref={industriesRef} className={isIndustriesVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <Industries />
            </div>
            <div ref={aboutRef} className={isAboutVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <About />
            </div>
        </div>
    );
};

export default ProjectsPage;