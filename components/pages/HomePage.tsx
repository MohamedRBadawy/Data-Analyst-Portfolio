import React from 'react';
import Hero from '../Hero';
import TrustedBy from '../TrustedBy';
import Testimonial from '../Testimonial';
import HowIHelp from '../HowIHelp';
import { Page } from '../../App';
import { CaseStudy } from '../../data/content';
import NextPageButton from '../NextPageButton';

interface HomePageProps {
    navigateTo: (page: Page) => void;
    showProjectDetailPage: (project: CaseStudy) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
    return (
        <div className="animate-reveal-in">
            <Hero navigateTo={navigateTo} />
            <TrustedBy />

            <section className="py-8 px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <Testimonial
                        variant="hero"
                        quote="Mohamed transformed our deals desk from a 128-hour weekly nightmare into a one-click system. Our team finally has time to think strategically instead of drowning in spreadsheets."
                        name="Sarah Chen"
                        role="Deals Desk Manager"
                        company="K Line Europe"
                        result="128 hours saved per week"
                    />
                </div>
            </section>

            <HowIHelp />

            <NextPageButton navigateTo={navigateTo} nextPage="work" label="View Case Studies" />
        </div>
    );
};

export default HomePage;