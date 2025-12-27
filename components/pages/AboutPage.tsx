import React from 'react';
import About from '../About';
import Testimonials from '../Testimonials';
import TeamCollaboration from '../TeamCollaboration';
import { CaseStudy } from '../../data/content';
import { Page } from '../../App';
import NextPageButton from '../NextPageButton';

interface AboutPageProps {
    showProjectDetailPage: (study: CaseStudy) => void;
    navigateTo: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ showProjectDetailPage, navigateTo }) => {
    return (
        <div className="animate-reveal-in">
            <About />
            <Testimonials showProjectDetailPage={showProjectDetailPage} />
            <TeamCollaboration navigateToContact={() => navigateTo('contact')} />
            <NextPageButton navigateTo={navigateTo} nextPage="services" label="Services" />
        </div>
    );
};

export default AboutPage;