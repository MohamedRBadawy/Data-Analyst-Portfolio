import React from 'react';
import About from '../About';
import FoundersAdvantageSection from '../FoundersAdvantageSection';
import QualificationSection from '../QualificationSection';
import TeamCollaboration from '../TeamCollaboration';
import SectionNav from '../SectionNav';
import { Page } from '../../App';
import NextPageButton from '../NextPageButton';

interface AboutPageProps {
    showProjectDetailPage: (study: any) => void;
    navigateTo: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
    return (
        <div className="animate-reveal-in">
            <SectionNav sectionIds={['about', 'qualifications', 'founders-advantage']} />
            <div id="about" data-title="ABOUT">
                <About />
            </div>
            <div id="qualifications" data-title="IS THIS FOR YOU?">
                <QualificationSection />
            </div>
            <div id="founders-advantage" data-title="WHY ME?">
                <FoundersAdvantageSection />
            </div>
            <TeamCollaboration navigateToContact={() => navigateTo('contact')} />
            <NextPageButton navigateTo={navigateTo} nextPage="services" label="Services" />
        </div>
    );
};

export default AboutPage;