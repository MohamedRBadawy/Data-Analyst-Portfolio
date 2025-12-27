import React from 'react';
import Services from '../Services';
import EngagementModelSection from '../EngagementModelSection';
import FAQSection from '../FAQSection';
import PostAuditSection from '../PostAuditSection';
import LiveAudit from '../LiveAudit';
import { ServiceItem } from '../../data/content';
import { Page } from '../../App';
import NextPageButton from '../NextPageButton';

interface ServicesPageProps {
    showServiceDetailPage: (service: ServiceItem) => void;
    navigateTo: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ showServiceDetailPage, navigateTo }) => {
    return (
        <div className="animate-reveal-in">
            <Services onViewDetails={showServiceDetailPage} />
            <EngagementModelSection />
            <FAQSection />
            <PostAuditSection />
            <LiveAudit navigateToContact={() => navigateTo('contact')} />
            <NextPageButton navigateTo={navigateTo} nextPage="contact" label="Contact" />
        </div>
    );
};

export default ServicesPage;