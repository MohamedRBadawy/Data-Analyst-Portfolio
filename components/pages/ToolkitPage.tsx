import React from 'react';
import Toolkit from '../Toolkit';
import { CaseStudy } from '../../data/content';
import { Page } from '../../App';
import NextPageButton from '../NextPageButton';

interface ToolkitPageProps {
    showProjectDetailPage: (study: CaseStudy) => void;
    navigateTo: (page: Page) => void;
}

const ToolkitPage: React.FC<ToolkitPageProps> = ({ showProjectDetailPage, navigateTo }) => {
    return (
        <div className="animate-reveal-in">
            <Toolkit showProjectDetailPage={showProjectDetailPage} />
            <NextPageButton navigateTo={navigateTo} nextPage="contact" label="Contact" />
        </div>
    );
};

export default ToolkitPage;