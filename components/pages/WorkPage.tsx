import React from 'react';
import ScramblingHeading from '../ScramblingHeading';
import ProjectsPage from '../ProjectsPage';
import ExperiencePage from '../ExperiencePage';
import { CaseStudy, WorkExperience } from '../../data/content';
import NextPageButton from '../NextPageButton';
import { Page } from '../../App';

interface WorkPageProps {
    showProjectDetailPage: (project: CaseStudy) => void;
    showExperienceDetailPage: (experience: WorkExperience) => void;
    navigateTo: (page: Page) => void;
}

const WorkPage: React.FC<WorkPageProps> = ({ showProjectDetailPage, showExperienceDetailPage, navigateTo }) => {
    return (
        <div className="animate-reveal-in py-16 sm:py-20 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <ScramblingHeading text="My Work" />
                    <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">
                        This is a collection of my professional experience and a deep dive into the projects I've delivered. Explore how I've transformed complex challenges into clear, data-driven solutions.
                    </p>
                </div>
                
                {/* Experience Section */}
                <div className="mb-24">
                   <ExperiencePage showMainPage={() => {}} showDetailPage={showExperienceDetailPage} />
                </div>

                {/* Projects Section */}
                <div>
                   <ProjectsPage showMainPage={() => {}} showProjectDetailPage={showProjectDetailPage} />
                </div>
            </div>
            <NextPageButton navigateTo={navigateTo} nextPage="about" label="About" />
        </div>
    );
};

export default WorkPage;