import React from 'react';
import EngagementModelSection from '../EngagementModelSection';
import CostOfInactionSection from '../CostOfInactionSection';
import ProblemSolution from '../ProblemSolution';
import FAQSection from '../FAQSection';
import PostAuditSection from '../PostAuditSection';
import SectionNav from '../SectionNav';
import { Page } from '../../App';
import NextPageButton from '../NextPageButton';

interface ProcessPageProps {
    navigateTo: (page: Page) => void;
}

const ProcessPage: React.FC<ProcessPageProps> = ({ navigateTo }) => {
    return (
        <div className="animate-reveal-in">
            <SectionNav sectionIds={['cost-of-waiting', 'problem-solution', 'engagement-model', 'faq', 'next-steps']} />
            <div id="cost-of-waiting" data-title="COST OF CHAOS">
                <CostOfInactionSection />
            </div>
            <div id="problem-solution" data-title="BOTTLENECKS">
                <ProblemSolution navigateTo={navigateTo} />
            </div>
            <div id="engagement-model" data-title="HOW I WORK">
                <EngagementModelSection />
            </div>
            <div id="faq" data-title="FAQ">
                <FAQSection />
            </div>
            <div id="next-steps" data-title="NEXT STEPS">
                <PostAuditSection />
            </div>
            <NextPageButton navigateTo={navigateTo} nextPage="contact" label="Get Started" />
        </div>
    );
};

export default ProcessPage;

