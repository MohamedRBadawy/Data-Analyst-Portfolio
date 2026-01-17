import React from 'react';

const FoundersAdvantageSection: React.FC = () => {
    return (
        <section className="py-20 px-6 lg:px-12 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-h2 font-poppins text-brand-text-primary mb-6">
                        Why a Former Founder Builds Better Systems
                    </h2>
                    <div className="text-2xl text-brand-text-secondary space-y-3 max-w-4xl mx-auto leading-relaxed">
                        <p>I'm not a freelancer who learned automation from tutorials.</p>
                        <p>I'm not an agency that outsources your project to junior developers.</p>
                        <p>I'm not a pure technologist who's never run a P&L.</p>
                    </div>
                    <p className="text-3xl text-brand-accent font-bold mt-8">
                        I'm a founder who built systems to survive real operational pressure.
                    </p>
                </div>

                <div className="holographic-panel rounded-2xl p-10 lg:p-14 mb-12">
                    <h3 className="text-h3 font-poppins text-brand-cta mb-8">I've Lived Your Chaos</h3>

                    <div className="space-y-8 text-brand-text-secondary">
                        <p className="text-xl leading-relaxed">
                            In 2018, I founded <span className="text-brand-text-primary font-semibold">Expack Shipping</span>—a logistics company in Cairo. I didn't start as a data consultant. I started as a business owner drowning in the same chaos you're facing right now.
                        </p>

                        <div className="bg-brand-bg/50 rounded-lg p-6 border border-brand-chaos/30">
                            <p className="text-brand-chaos font-semibold mb-3">I lived the pain of:</p>
                            <ul className="space-y-3 ml-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-chaos mt-1 text-lg">•</span>
                                    <span className="text-lg">Dispatch errors that cost us customers</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-chaos mt-1 text-lg">•</span>
                                    <span className="text-lg">Manual tracking that ate 20+ hours/week</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-chaos mt-1 text-lg">•</span>
                                    <span className="text-lg">Spreadsheet hell that made scaling impossible</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-chaos mt-1 text-lg">•</span>
                                    <span className="text-lg">Key person dependency (me) that became a bottleneck</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-xl leading-relaxed">
                            I didn't have a budget for enterprise software or a team of developers. I had Google Sheets, desperation, and a refusal to accept "that's just how logistics works."
                        </p>

                        <p className="text-xl leading-relaxed text-brand-text-primary font-semibold">
                            So I built the solution myself.
                        </p>

                        <p className="text-xl leading-relaxed">
                            I automated our dispatch system. I created tracking dashboards. I eliminated 75% of our documentation errors and increased on-time delivery by 20% in the first quarter.
                        </p>

                        <p className="text-xl leading-relaxed">
                            The business survived because the systems worked under pressure—not in theory, but in the real world with real customers and real consequences.
                        </p>
                    </div>
                </div>

                <div className="holographic-panel rounded-2xl p-10 lg:p-14 border-brand-accent mb-12">
                    <h3 className="text-h3 font-poppins text-brand-accent mb-8">What This Means for You</h3>

                    <p className="text-2xl text-brand-text-primary font-bold mb-8">
                        I don't design systems from theory. I design systems that survive chaos.
                    </p>

                    <div className="space-y-6 text-brand-text-secondary">
                        <p className="text-xl leading-relaxed">
                            When I audit your workflows, I see them through the eyes of someone who's been in the trenches. I know which "best practices" actually work and which ones collapse under real-world pressure.
                        </p>

                        <p className="leading-relaxed text-xl">I know the difference between:</p>

                        <ul className="space-y-4 ml-6">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-accent mt-1 text-xl">→</span>
                                <span className="text-lg">A dashboard that looks good in a demo vs. one your team will actually use daily</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-accent mt-1 text-xl">→</span>
                                <span className="text-lg">Automation that works 95% of the time vs. automation you can trust with your business</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-accent mt-1 text-xl">→</span>
                                <span className="text-lg">Documentation that sits in a folder vs. documentation that empowers your team</span>
                            </li>
                        </ul>

                        <p className="text-xl leading-relaxed text-brand-text-primary font-semibold mt-8">
                            I build systems the way I needed them when I was in your shoes: reliable, practical, and built to last.
                        </p>
                    </div>
                </div>

                <div className="bg-brand-surface/30 rounded-2xl p-8 border border-brand-border">
                    <h3 className="text-h3 font-poppins text-brand-text-primary mb-6 text-center">The Difference</h3>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-brand-text-secondary mb-2">Freelancers</p>
                            <p className="text-brand-text-primary">build what you ask for</p>
                        </div>
                        <div>
                            <p className="text-brand-text-secondary mb-2">Agencies</p>
                            <p className="text-brand-text-primary">build what their process dictates</p>
                        </div>
                        <div>
                            <p className="text-brand-text-secondary mb-2">I build</p>
                            <p className="text-brand-accent font-bold">what actually works</p>
                        </div>
                    </div>

                    <p className="text-center text-brand-text-secondary mt-8 italic">
                        That's the founder's advantage.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FoundersAdvantageSection;

