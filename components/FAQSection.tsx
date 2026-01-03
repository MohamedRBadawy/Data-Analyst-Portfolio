import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: "Is this real? How can you save 100+ hours a week?",
            answer: "It's math, not magic. Most businesses have high-value employees doing low-value work (data entry, copy-pasting, manual reporting). When automation handles 100% of that repetitive work in seconds, those hours vanish instantly. For example, at K Line Europe, we automated a 128-hour/week pricing process into a single button click."
        },
        {
            question: "What if this doesn't work for my specific industry?",
            answer: "Operations are universal. Whether you're in logistics, manufacturing, or service, you have inputs (data/requests), processing (logic/work), and outputs (reports/products). If you use spreadsheets, email, and CRMs, my systems work. That said, if I don't think I can help you, I'll tell you in the first 10 minutes of our call."
        },
        {
            question: "How is this different from hiring a cheaper freelancer?",
            answer: "A freelancer builds what you ask for. I build what your business needs. I'm a former founder who understands P&L, margins, and operational risk. I don't just write code; I design systems that fix business bottlenecks. Plus, cheap code is expensive—it breaks, it's insecure, and it's unmaintainable. I build robust, enterprise-grade systems."
        },
        {
            question: "How much of my time does this take?",
            answer: "Very little. I respect your time as an executive. We start with a 30-minute audit. If we proceed, I'll need ~60 minutes for a deep-dive discovery. After that, I go away and build. You get a weekly update, and then a final handover/training session. You don't manage me; I manage the transformation."
        },
        {
            question: "What software do I need to buy?",
            answer: "Likely nothing. I specialize in building on top of what you already have—Google Workspace, Microsoft 365, etc. We use powerful low-cost tools like Google Sheets, Looker Studio, and n8n. No expensive enterprise software licenses required."
        },
        {
            question: "What if I'm not ready yet?",
            answer: "That's why the Audit is free. You'll walk away with a clear diagnostic of your current state, regardless of whether you hire me. If the timing isn't right, you'll at least know exactly what to fix when you are ready."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-6 lg:px-12 relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-h2 font-poppins text-brand-text-primary mb-4">
                        Common Questions
                    </h2>
                    <p className="text-xl text-brand-text-secondary">
                        Everything you need to know before we talk
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="holographic-panel rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-6 flex items-center justify-between hover:bg-brand-surface/30 transition-colors duration-200"
                            >
                                <h3 className="text-lg font-poppins font-semibold text-brand-text-primary pr-4">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-6 h-6 text-brand-accent flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-brand-text-secondary leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center holographic-panel rounded-2xl p-8 border-brand-accent">
                    <p className="text-brand-text-secondary mb-4">
                        Still have questions?
                    </p>
                    <button className="btn btn-primary">
                        Book a Free Clarity Audit
                    </button>
                    <p className="text-sm text-brand-text-secondary mt-3">
                        We'll answer everything in 30 minutes
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

