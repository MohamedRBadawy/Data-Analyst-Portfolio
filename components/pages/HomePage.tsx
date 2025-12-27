import React from 'react';
import Hero from '../Hero';
import TrustedBy from '../TrustedBy';
import Testimonial from '../Testimonial';
import QualificationSection from '../QualificationSection';
import CostOfInactionSection from '../CostOfInactionSection';
import ProblemSolution from '../ProblemSolution';
import FoundersAdvantageSection from '../FoundersAdvantageSection';
import FAQSection from '../FAQSection';
import PostAuditSection from '../PostAuditSection';
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

            {/* Social Proof - Hero Testimonial */}
            <section className="py-12 px-6 lg:px-12">
                <Testimonial
                    variant="hero"
                    quote="Mohamed transformed our deals desk from a 128-hour weekly nightmare into a one-click system. Our team finally has time to think strategically instead of drowning in spreadsheets."
                    name="Sarah Chen"
                    role="Deals Desk Manager"
                    company="K Line Europe"
                    result="99% time reduction • 100% pricing accuracy"
                />
            </section>

            <QualificationSection />
            <CostOfInactionSection />

            {/* Social Proof - After Problem Framing */}
            <section className="py-12 px-6 lg:px-12 bg-brand-surface/30">
                <div className="max-w-4xl mx-auto">
                    <Testimonial
                        variant="compact"
                        quote="We were losing $2,000/month to dispatch errors. Mohamed's system paid for itself in the first month."
                        name="Ahmed Khalil"
                        role="Operations Director"
                        company="Expack Shipping"
                        result="75% fewer errors"
                    />
                </div>
            </section>

            <ProblemSolution navigateTo={navigateTo} />
            <FoundersAdvantageSection />

            {/* FAQ and Post-Audit on Home Page */}
            <FAQSection />
            <PostAuditSection />

            <NextPageButton navigateTo={navigateTo} nextPage="work" label="View Case Studies" />
        </div>
    );
};

export default HomePage;