import React from 'react';
import Services from '../Services';
import LiveAudit from '../LiveAudit';
import { ServiceItem } from '../../data/content';
import { Page } from '../../App';
import NextPageButton from '../NextPageButton';

import SectionNav from '../SectionNav';

interface ServicesPageProps {
    showServiceDetailPage: (service: ServiceItem) => void;
    navigateTo: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ showServiceDetailPage, navigateTo }) => {
    return (
        <div className="animate-reveal-in">
            <SectionNav sectionIds={['services', 'workflow-audit']} />
            <div id="services" data-title="MY SERVICES">
                <Services onViewDetails={showServiceDetailPage} />
            </div>
            <div id="workflow-audit" data-title="WORKFLOW AUDIT">
                <LiveAudit navigateToContact={() => navigateTo('contact')} />
            </div>
            <NextPageButton navigateTo={navigateTo} nextPage="process" label="How I Work" />
        </div>
    );
};

export default ServicesPage;