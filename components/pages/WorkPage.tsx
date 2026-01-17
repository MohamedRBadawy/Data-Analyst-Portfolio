import React from 'react';
import ScramblingHeading from '../ScramblingHeading';
import ProjectsPage from '../ProjectsPage';
import ExperiencePage from '../ExperiencePage';
import Testimonials from '../Testimonials';
import SectionNav from '../SectionNav';
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
        <>
            <SectionNav
                sectionIds={['work-experience', 'case-studies', 'archive', 'testimonials']}
                className="bg-brand-bg/95 backdrop-blur-md py-2 border-b border-brand-border/10 transition-all duration-300"
            />
            <div className="animate-reveal-in pt-16 pb-12 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <ScramblingHeading text="My Work" />
                        <p className="text-lg text-brand-text-primary/80 font-medium mt-3 max-w-2xl mx-auto leading-normal">
                            A curated collection of my professional experience, key projects, and the results I've delivered.
                        </p>
                    </div>


                    {/* Experience Section */}
                    <div className="mb-20" id="work-experience" data-title="EXPERIENCE">
                        <ExperiencePage showMainPage={() => { }} showDetailPage={showExperienceDetailPage} hideHero={true} />
                    </div>

                    <div id="case-studies" data-title="CASE STUDIES" className="mb-20">
                        <ProjectsPage showMainPage={() => { }} showProjectDetailPage={showProjectDetailPage} hideHero={true} />
                    </div>

                    {/* Testimonials Section - Moved to End */}
                    <div id="testimonials" className="mb-0" data-title="TESTIMONIALS">
                        <Testimonials showProjectDetailPage={showProjectDetailPage} />
                    </div>
                </div>
                <NextPageButton navigateTo={navigateTo} nextPage="about" label="About" />
            </div>
        </>
    );
};

export default WorkPage;