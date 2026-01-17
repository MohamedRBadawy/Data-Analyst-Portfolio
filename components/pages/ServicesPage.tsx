import React from 'react';
import Services from '../Services';

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
        <>
            <SectionNav sectionIds={['services']} />
            <div className="animate-reveal-in">
                <div id="services" data-title="MY SERVICES">
                    <Services onViewDetails={showServiceDetailPage} />
                </div>

                <NextPageButton navigateTo={navigateTo} nextPage="process" label="How I Work" />
            </div>
        </>
    );
};

export default ServicesPage;