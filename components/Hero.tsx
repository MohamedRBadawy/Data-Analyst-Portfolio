
import React from 'react';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';
import { Page } from '../App';

interface HeroProps {
    navigateTo: (page: Page) => void;
}

const StaggeredRevealText: React.FC<{ text: string; baseDelay: number }> = ({ text, baseDelay }) => {
    const words = text.split(' ');
    return (
        <p className="text-xl sm:text-2xl text-brand-text-secondary mt-8 max-w-3xl mx-auto relative z-10">
            {words.map((word, i) => (
                <span key={i} className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: `${baseDelay + i * 30}ms` }}>
                    {word}{' '}
                </span>
            ))}
        </p>
    );
};

const ScrollIndicator: React.FC = () => (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '2500ms' }}>
        <span className="text-brand-text-secondary text-xs uppercase tracking-widest mb-2">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
    </div>
);

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
    const { setIsHovering } = useInteraction();

    return (
        <section className="min-h-screen flex items-center justify-center text-center px-4 sm:px-8 relative overflow-hidden pt-20 pb-20">
            {/* Soft Ambient Background - Reduced Opacity */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-brand-accent/5 rounded-full blur-[120px] animate-pulse-slow"></div>
            </div>

            <div className="max-w-5xl relative z-10 flex flex-col items-center">
                {/* Executive Framing Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 backdrop-blur-sm mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></div>
                    <span className="font-roboto-mono text-brand-accent text-xs sm:text-sm tracking-wider uppercase font-medium">
                        Operational Intelligence for Growing SMBs
                    </span>
                </div>

                {/* Main Headline - Instantly Readable */}
                <ScramblingHeading
                    text="Turn Operational Chaos Into Automated Clarity"
                    className="font-poppins text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-text-primary to-brand-clarity leading-[1.1] mb-6 tracking-tight max-w-4xl"
                />

                {/* Sub-headline - Plain Language Value Prop */}
                <p className="text-lg sm:text-xl text-brand-text-secondary max-w-2xl mx-auto leading-relaxed mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    Stop running your business on spreadsheets and gut feel.
                    I transform manual workflows into <span className="text-brand-text-primary font-semibold">custom data systems</span> that save time, reduce errors, and scale with you.
                </p>

                {/* Credibility & Trust Section - High Visibility */}
                <div className="w-full max-w-3xl mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <div className="bg-brand-surface/30 border border-brand-border/30 rounded-xl p-6 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col text-left">
                            <span className="text-xs text-brand-text-secondary uppercase tracking-widest mb-1">Trusted By Industry Leaders</span>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-white text-lg">K LINE EUROPE</span>
                                <span className="text-xs bg-brand-border/20 text-brand-border px-2 py-0.5 rounded border border-brand-border/30">Fortune 500</span>
                            </div>
                        </div>
                        <div className="h-px w-full md:w-px md:h-12 bg-brand-border/20"></div>
                        <div className="flex flex-col text-left">
                            <span className="text-xs text-brand-text-secondary uppercase tracking-widest mb-1">Proven Outcomes</span>
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-brand-cta font-bold text-lg">$200K+ ROI</span>
                                <span className="text-brand-text-secondary text-sm">•</span>
                                <span className="font-mono text-brand-accent font-bold text-lg">500+ Hours Saved</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Area */}
                <div className="flex flex-col items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                    <button
                        onClick={() => navigateTo('contact')}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="btn btn-primary animate-pulse-cta mb-4 text-base px-12 py-5"
                    >
                        Book Your Free Clarity Audit
                    </button>
                    <p className="text-brand-text-secondary text-xs sm:text-sm italic opacity-80">
                        No pitch. No obligation. Just 30 minutes to find your bottlenecks.
                    </p>
                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
};

export default Hero;
