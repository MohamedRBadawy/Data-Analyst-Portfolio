import React, { useRef } from 'react';
import Hero from '../components/Hero';
import DesignPhilosophy from '../components/DesignPhilosophy';
import ClaritySandbox from '../components/ClaritySandbox';
import ROICalculator from '../components/ROICalculator';
import ServicesBlueprint from '../components/ServicesBlueprint';
import QuickStats from '../components/QuickStats';
import Testimonials from '../components/Testimonials';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HomePage: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const philosophyRef = useRef<HTMLDivElement>(null);
    const sandboxRef = useRef<HTMLDivElement>(null);
    const roiRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    const isHeroVisible = useIntersectionObserver(heroRef);
    const isPhilosophyVisible = useIntersectionObserver(philosophyRef);
    const isSandboxVisible = useIntersectionObserver(sandboxRef);
    const isROIVisible = useIntersectionObserver(roiRef);
    const isServicesVisible = useIntersectionObserver(servicesRef);
    const isStatsVisible = useIntersectionObserver(statsRef);
    const isTestimonialsVisible = useIntersectionObserver(testimonialsRef);

    return (
        <>
            <div ref={heroRef} className={isHeroVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <Hero />
            </div>
            <div ref={philosophyRef} className={isPhilosophyVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <DesignPhilosophy />
            </div>
            <div ref={sandboxRef} className={isSandboxVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <ClaritySandbox />
            </div>
            <div ref={roiRef} className={isROIVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <ROICalculator />
            </div>
            <div ref={servicesRef} className={isServicesVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <ServicesBlueprint />
            </div>
            <div ref={statsRef} className={isStatsVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <QuickStats />
            </div>
            <div ref={testimonialsRef} className={isTestimonialsVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <Testimonials />
            </div>
        </>
    );
};

export default HomePage;