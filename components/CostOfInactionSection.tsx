import React from 'react';

const CostOfInactionSection: React.FC = () => {
    const costs = [
        {
            title: "Lost Revenue",
            description: "When your team spends 10+ hours/week on manual reporting, that's $500-2,000/month in wasted labor. Multiply that by every inefficient process.",
            highlight: "$500-2,000/month",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Bad Decisions",
            description: "Without real-time data, you're flying blind. Late insights mean missed opportunities, overstocking, and reactive firefighting.",
            highlight: "missed opportunities",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Key Person Dependency",
            description: "If only Sarah knows how to run the report, you have a single point of failure. What happens when she's sick or leaves?",
            highlight: "single point of failure",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Team Burnout",
            description: "Repetitive manual work kills morale. Your best people didn't sign up to copy-paste data—they want to solve problems.",
            highlight: "kills morale",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
            )
        },
        {
            title: "Compounding Chaos",
            description: "Every month you delay, the problem gets worse. More data, more complexity. The cost of fixing it later is always higher.",
            highlight: "always higher",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-12 relative bg-chaos-noise/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-h2 font-poppins text-brand-text-primary mb-6">
                        What Operational Chaos Is <span className="text-brand-chaos drop-shadow-md">Really Costing You</span>
                    </h2>
                    <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Most business owners don't realize the true cost of "just dealing with it" until they see the numbers.
                    </p>
                </div>

                <div className="mb-20">
                    <h3 className="text-h3 font-poppins text-brand-accent mb-10 text-center">The Hidden Tax on Your Business</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {costs.map((cost, index) => (
                            <div key={index} className="holographic-panel rounded-xl p-8 hover:border-brand-chaos/60 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-lg bg-brand-chaos/10 flex items-center justify-center mb-6 text-brand-chaos group-hover:scale-110 transition-transform duration-300">
                                    {cost.icon}
                                </div>
                                <h4 className="text-xl font-poppins font-bold text-brand-text-primary mb-4">
                                    {cost.title}
                                </h4>
                                <p className="text-brand-text-secondary leading-relaxed text-base">
                                    {cost.description.split(cost.highlight).map((part, i, arr) => (
                                        <React.Fragment key={i}>
                                            {part}
                                            {i < arr.length - 1 && <span className="text-brand-text-primary font-semibold">{cost.highlight}</span>}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="holographic-panel rounded-2xl p-10 lg:p-14 border-brand-chaos/30 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-chaos to-transparent opacity-50"></div>

                    <h3 className="text-2xl font-poppins text-brand-text-secondary mb-2">The Real Question</h3>
                    <p className="text-lg text-brand-text-primary mb-8 max-w-3xl mx-auto">
                        How much is operational chaos costing you annually?
                    </p>

                    <div className="flex flex-col items-center justify-center mb-10">
                        <span className="text-5xl md:text-6xl font-bold text-brand-chaos text-glow-chaos mb-2 font-poppins tracking-tight">
                            $10k - $50k+
                        </span>
                        <span className="text-brand-text-secondary uppercase tracking-widest text-sm font-semibold">
                            Lost Annually to Inefficiencies
                        </span>
                    </div>

                    <button className="btn btn-primary px-8 py-4 text-lg shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] border-brand-chaos text-white bg-brand-chaos/90 hover:bg-brand-chaos transition-all duration-300">
                        Book Your Audit to Stop the Bleeding
                    </button>
                    <p className="text-sm text-brand-text-secondary mt-6">
                        See exactly what's broken and what to fix first.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CostOfInactionSection;
