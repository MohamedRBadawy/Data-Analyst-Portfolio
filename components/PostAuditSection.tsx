import React from 'react';

const PostAuditSection: React.FC = () => {
    return (
        <section id="next-steps" className="py-20 px-6 lg:px-12 relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-h2 font-poppins text-brand-text-primary mb-4">
                        What Happens After the Clarity Audit?
                    </h2>
                    <p className="text-xl text-brand-text-secondary">
                        The audit is a conversation, not a sales pitch. Here's what actually happens:
                    </p>
                </div>

                <div className="space-y-8 mb-12">
                    {/* Outcome 1 */}
                    <div className="holographic-panel rounded-xl p-6 lg:p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent font-bold text-xl">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-poppins font-bold text-brand-text-primary mb-2">
                                    We're a Perfect Fit
                                </h3>
                                <p className="text-brand-text-secondary leading-relaxed">
                                    I'll show you exactly what's broken, what it's costing you, and what to fix first. You'll get a clear scope, timeline, and price. If it makes sense, we move forward. If not, no hard feelings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Outcome 2 */}
                    <div className="holographic-panel rounded-xl p-6 lg:p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent font-bold text-xl">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-poppins font-bold text-brand-text-primary mb-2">
                                    You're Not Ready Yet
                                </h3>
                                <p className="text-brand-text-secondary leading-relaxed">
                                    Sometimes the timing isn't right. Maybe your team isn't ready for change, or you have bigger priorities right now. I'll tell you honestly if that's the case—and I'll point you toward what to focus on first.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Outcome 3 */}
                    <div className="holographic-panel rounded-xl p-6 lg:p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent font-bold text-xl">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-poppins font-bold text-brand-text-primary mb-2">
                                    I'm Not the Right Person
                                </h3>
                                <p className="text-brand-text-secondary leading-relaxed">
                                    If your needs are outside my expertise (enterprise-scale systems, custom software development, full IT support), I'll tell you—and I'll recommend someone who can actually help you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What You'll Walk Away With */}
                <div className="holographic-panel rounded-2xl p-8 lg:p-10 border-brand-accent/30 mb-12">
                    <h3 className="text-h3 font-poppins text-brand-text-primary mb-4">
                        What You'll Walk Away With (No Matter What)
                    </h3>
                    <p className="text-brand-text-secondary mb-4">
                        Even if we don't work together, you'll leave the audit with:
                    </p>
                    <ul className="space-y-3">
                        {[
                            "A clear understanding of what's broken",
                            "An estimate of what it's costing you",
                            "A prioritized list of what to fix first",
                            "Honest advice on whether you need help or can handle it internally"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-brand-text-primary">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Why This Matters */}
                <div className="bg-brand-surface/30 rounded-2xl p-8 border border-brand-border text-center">
                    <h3 className="text-h3 font-poppins text-brand-text-primary mb-4">
                        Why This Matters
                    </h3>
                    <p className="text-brand-text-secondary mb-6 max-w-2xl mx-auto">
                        I'm not trying to close everyone who books a call. I'm trying to work with businesses where I can deliver real, measurable value. If that's not you, I'd rather tell you upfront than waste both our time.
                    </p>
                    <p className="text-xl text-brand-accent font-bold">
                        The audit is free because clarity should be.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PostAuditSection;

