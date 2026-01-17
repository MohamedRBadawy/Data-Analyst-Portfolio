import React from 'react';
import { SearchIcon, PencilIcon, CodeIcon, RocketIcon, DocumentTextIcon, UsersIcon } from '../constants';

const EngagementModelSection: React.FC = () => {
    const phases = [
        {
            number: 1,
            title: "Clarity Audit",
            timeline: "Week 1",
            icon: <SearchIcon className="w-8 h-8" />,
            description: "We start with a deep-dive audit of your current workflows. I interview your team, map your processes, and identify the highest-ROI opportunities. You get a clear report showing what's broken, what it's costing you, and what to fix first.",
            deliverable: "Audit report with prioritized recommendations",
            investment: "5-10 hours of team time for interviews"
        },
        {
            number: 2,
            title: "Scope & Blueprint",
            timeline: "Week 1-2",
            icon: <PencilIcon className="w-8 h-8" />,
            description: "No surprises. I create a detailed project scope with fixed deliverables, timeline, and cost. You see exactly what you're getting before we start building. We agree on success metrics together.",
            deliverable: "Project blueprint, timeline, and fixed-price proposal",
            investment: "2-3 hours for scope review and approval"
        },
        {
            number: 3,
            title: "Build & Iterate",
            timeline: "Weeks 2-4",
            icon: <CodeIcon className="w-8 h-8" />,
            description: "I build your solution in stages, showing you progress weekly. You provide feedback, and I adjust. This isn't a black box—you see the system take shape and can course-correct early.",
            deliverable: "Working dashboards, automation scripts, or integrated systems",
            investment: "1-2 hours/week for progress reviews"
        },
        {
            number: 4,
            title: "Document Everything",
            timeline: "Week 4",
            icon: <DocumentTextIcon className="w-8 h-8" />,
            description: "I create comprehensive documentation that your team can actually use. No jargon. Clear instructions. Video walkthroughs if needed. The goal is team autonomy, not dependency on me.",
            deliverable: "User guides, process documentation, video tutorials",
            investment: "Review time to ensure docs match your team's needs"
        },
        {
            number: 5,
            title: "Train & Handoff",
            timeline: "Week 4-5",
            icon: <UsersIcon className="w-8 h-8" />,
            description: "I personally train your team on the new system. We run through real scenarios together. I don't leave until everyone is confident. This is where the system becomes yours.",
            deliverable: "Live training sessions, Q&A, confidence checks",
            investment: "2-4 hours of team training time"
        },
        {
            number: 6,
            title: "Exit & Support",
            timeline: "Week 5+",
            icon: <RocketIcon className="w-8 h-8" />,
            description: "I'm not trying to lock you in. After handoff, you own the system. I offer optional 30-day support for questions, then you're free. Some clients keep me on a light retainer for new projects—but only if it makes sense for them.",
            deliverable: "30 days of email/Slack support (optional retainer available)",
            investment: "None required after handoff"
        }
    ];

    return (
        <section id="engagement-model" className="py-20 px-6 lg:px-12 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-h2 font-poppins text-brand-text-primary mb-4">
                        How I Work: Predictable, Scoped, Built to Last
                    </h2>
                    <p className="text-2xl text-brand-text-primary/80 font-medium max-w-4xl mx-auto">
                        I don't believe in endless retainers or black-box development. Every engagement follows a clear, proven process designed to make me <span className="text-brand-accent font-semibold">replaceable</span>—not indispensable.
                    </p>
                </div>

                <div className="space-y-8">
                    {phases.map((phase, index) => (
                        <div key={index} className="holographic-panel rounded-xl p-6 lg:p-8 hover:border-brand-accent transition-all duration-300">
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Phase Number & Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent border-2 border-brand-accent">
                                        {phase.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                        <h3 className="text-3xl font-poppins font-bold text-brand-text-primary">
                                            Phase {phase.number}: {phase.title}
                                        </h3>
                                        <span className="text-brand-accent font-roboto-mono text-base mt-1 sm:mt-0">
                                            {phase.timeline}
                                        </span>
                                    </div>

                                    <p className="text-brand-text-primary/80 font-medium mb-6 leading-relaxed text-xl">
                                        {phase.description}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <p className="text-base text-brand-accent font-semibold mb-1">Deliverable:</p>
                                            <p className="text-base text-brand-text-primary/80 font-medium">{phase.deliverable}</p>
                                        </div>
                                        <div>
                                            <p className="text-base text-brand-accent font-semibold mb-1">Your Investment:</p>
                                            <p className="text-base text-brand-text-secondary">{phase.investment}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Line */}
                            {index < phases.length - 1 && (
                                <div className="ml-8 mt-4 mb-0 h-8 border-l-2 border-brand-border opacity-30"></div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 holographic-panel rounded-2xl p-8 lg:p-12 border-brand-cta text-center">
                    <h3 className="text-h3 font-poppins text-brand-cta mb-6">Why This Matters</h3>
                    <p className="text-2xl text-brand-text-primary mb-8 max-w-4xl mx-auto">
                        You're not hiring a vendor. You're hiring a systems architect who aims to make themselves <span className="text-brand-accent font-bold">unnecessary</span>.
                    </p>
                    <p className="text-brand-text-primary/80 font-medium max-w-3xl mx-auto text-xl leading-relaxed">
                        Most consultants want you dependent. I want you empowered. The best outcome is when your team runs the system without me—and calls me back only when you're ready to optimize something new.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EngagementModelSection;

