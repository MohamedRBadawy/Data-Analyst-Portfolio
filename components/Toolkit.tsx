import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import ScramblingHeading from './ScramblingHeading';
import { toolkitData, caseStudies, CaseStudy } from '../data/content';
import Modal from './Modal';
import { CodeIcon, LightBulbIcon } from '../constants';
import CodeHighlight from './CodeHighlight';
import { useInteraction } from '../context/InteractionContext';

type Tab = 'dashboards' | 'process' | 'code';

interface ToolkitProps {
    showProjectDetailPage: (study: CaseStudy) => void;
}

const Toolkit: React.FC<ToolkitProps> = ({ showProjectDetailPage }) => {
    const { setIsHovering } = useInteraction();
    const [activeTab, setActiveTab] = useState<Tab>('dashboards');
    const [currentDashboard, setCurrentDashboard] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState<{ title: string; code: string } | null>(null);

    const [explanation, setExplanation] = useState('');
    const [isExplaining, setIsExplaining] = useState(false);
    const [explanationError, setExplanationError] = useState('');

    const handleNextDashboard = () => {
        setCurrentDashboard((prev) => (prev + 1) % toolkitData.dashboards.length);
    };

    const handlePrevDashboard = () => {
        setCurrentDashboard((prev) => (prev - 1 + toolkitData.dashboards.length) % toolkitData.dashboards.length);
    };

    const handleViewCode = (project: typeof toolkitData.codeProjects[0]) => {
        setSelectedCode({ title: project.title, code: project.code });
        setExplanation('');
        setExplanationError('');
        setIsModalOpen(true);
    };

    const handleExplainCode = async () => {
        if (!selectedCode) return;

        setIsExplaining(true);
        setExplanation('');
        setExplanationError('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `Explain the following code snippet:
                \`\`\`javascript
                ${selectedCode.code}
                \`\`\``,
                config: {
                    systemInstruction: "You are a helpful assistant that explains code in simple, plain English for a non-technical manager. Focus on what the code achieves for a business. Keep it concise and avoid technical jargon."
                }
            });
            const text = response.text;
            setExplanation(text);
        } catch (e) {
            console.error(e);
            setExplanationError('Sorry, I couldn\'t generate an explanation at this time.');
        } finally {
            setIsExplaining(false);
        }
    };

    const activeDashboard = toolkitData.dashboards[currentDashboard];

    const handleViewDetails = () => {
        const project = caseStudies.find(cs => cs.id === activeDashboard.caseStudyId);
        if (project) {
            showProjectDetailPage(project);
        }
    };


    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="text-center mb-16">
                    <ScramblingHeading text="My Toolkit" />
                    <p className="text-xl text-brand-text-secondary mt-4 max-w-4xl mx-auto">
                        Here's a look at the dashboards I build, the process I follow, and the code I write. This section provides a practical overview of my capabilities and how I approach solving complex data challenges.
                    </p>
                </div>


                <div className="max-w-6xl mx-auto">
                    {/* Tab Navigation */}
                    <div className="flex justify-center border-b border-brand-border mb-12">
                        {(['dashboards', 'process', 'code'] as Tab[]).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 sm:px-6 py-3 font-poppins font-bold text-md sm:text-lg capitalize transition-colors duration-300 relative ${activeTab === tab ? 'text-brand-accent' : 'text-brand-text-secondary hover:text-white'}`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent transition-all duration-300"
                                        style={{ transformOrigin: 'left' }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[500px]">
                        {activeTab === 'dashboards' && (
                            <div className="animate-reveal-in">
                                <div className="flex flex-col lg:flex-row gap-[var(--space-xl)] items-center holographic-panel p-6 sm:p-8 rounded-xl">
                                    <div className="lg:w-3/5 w-full">
                                        <div
                                            onClick={handleViewDetails}
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                            className="cursor-pointer group relative overflow-hidden rounded-lg border-2 border-brand-border hover:border-brand-accent transition-all duration-300"
                                        >
                                            <video
                                                key={activeDashboard.image}
                                                src={activeDashboard.image}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="rounded-lg shadow-2xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-102"
                                            />
                                            <div className="absolute inset-0 bg-brand-bg/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="text-white font-bold font-roboto-mono text-[10px] uppercase tracking-[0.15em] py-2 px-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                                                    View Project Details
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-2/5 w-full">
                                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-4">{activeDashboard.title}</h3>
                                        <p className="text-brand-text-secondary mb-4">{activeDashboard.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {activeDashboard.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-brand-border text-sm rounded-full font-medium text-brand-text-secondary">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button onClick={handlePrevDashboard} className="px-4 py-2 rounded-lg bg-brand-surface hover:bg-brand-border transition-colors" aria-label="Previous dashboard">‹ Prev</button>
                                            <span className="font-roboto-mono text-sm">{currentDashboard + 1} / {toolkitData.dashboards.length}</span>
                                            <button onClick={handleNextDashboard} className="px-4 py-2 rounded-lg bg-brand-surface hover:bg-brand-border transition-colors" aria-label="Next dashboard">Next ›</button>
                                        </div>
                                        <button
                                            onClick={handleViewDetails}
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                            className="inline-flex items-center justify-center px-6 py-3 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full text-[10px] sm:text-xs font-roboto-mono font-bold uppercase tracking-[0.15em] text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10 hover:border-brand-accent/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] mt-6 w-full group"
                                        >
                                            View Project Details
                                            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'process' && (
                            <div className="animate-reveal-in">
                                <div className="relative pl-12">
                                    <div className="absolute top-0 left-4 w-1 h-full bg-brand-border rounded-full" />
                                    {toolkitData.process.map((item) => (
                                        <div key={item.step} className="mb-12 relative">
                                            <div className="absolute -left-8 top-1.5 w-8 h-8 bg-brand-accent text-brand-bg rounded-full flex items-center justify-center ring-8 ring-brand-bg">
                                                {item.icon}
                                            </div>
                                            <div className="p-6 holographic-panel rounded-xl ml-6">
                                                <h4 className="font-poppins text-xl font-bold text-brand-clarity mb-2 text-glow-accent">{item.step}. {item.title}</h4>
                                                <p className="text-brand-text-secondary">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'code' && (
                            <div className="animate-reveal-in">
                                <p className="text-center text-brand-text-secondary mb-12 max-w-4xl mx-auto">Code is only valuable if its impact is understood. When you click 'Explain this Code,' the portfolio uses an integrated AI engine to provide an instant, non-technical executive summary of the script's bottom-line value. This built-in governance layer accelerates decision-making and ensures non-technical leaders immediately grasp the solution's business impact.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-xl)]">
                                    {toolkitData.codeProjects.map(project => (
                                        <div key={project.title} className="holographic-panel p-6 rounded-xl flex flex-col">
                                            <div className="flex items-center mb-3">
                                                <CodeIcon className="w-6 h-6 text-brand-cta mr-3" size={24} />
                                                <h4 className="font-poppins text-xl font-bold">{project.title}</h4>
                                            </div>
                                            <p className="text-brand-text-secondary mb-4 flex-grow">{project.description}</p>
                                            <button
                                                onClick={() => handleViewCode(project)}
                                                onMouseEnter={() => setIsHovering(true)}
                                                onMouseLeave={() => setIsHovering(false)}
                                                className="btn btn-secondary !py-2 !px-4 mt-auto self-start"
                                            >
                                                View Code
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {selectedCode && (
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedCode.title}>
                        <CodeHighlight code={selectedCode.code} />
                        <div className="mt-6 text-center border-t border-brand-border pt-6">
                            <button
                                onClick={handleExplainCode}
                                disabled={isExplaining}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                className="inline-flex items-center justify-center mx-auto btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                            >
                                <LightBulbIcon className="w-5 h-5 mr-2" />
                                {isExplaining ? 'Generating Explanation...' : 'Explain this Code'}
                            </button>
                        </div>

                        {isExplaining && (
                            <div className="text-center p-4 mt-4">
                                <div className="animate-spin-slow mx-auto w-8 h-8 border-2 border-brand-accent border-t-transparent rounded-full" />
                            </div>
                        )}
                        {explanationError && <p className="text-center text-brand-chaos mt-4">{explanationError}</p>}
                        {explanation && (
                            <div className="mt-6 p-4 bg-brand-bg border border-brand-border rounded-lg animate-fade-in-up">
                                <h4 className="font-poppins font-bold text-brand-clarity mb-2">In Plain English:</h4>
                                <p className="text-brand-text-secondary whitespace-pre-wrap">{explanation}</p>
                            </div>
                        )}
                    </Modal>
                )}
            </div>
        </section>
    );
};

export default Toolkit;
