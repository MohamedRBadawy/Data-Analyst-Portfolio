
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';
import { CheckIcon, CodeIcon, SearchIcon, MailIcon } from '../constants';

interface BlueprintStep {
    step: number;
    title: string;
    description: string;
}

interface LiveAuditProps {
    navigateToContact: () => void;
}

const stepIcons = [
    <SearchIcon className="w-6 h-6 text-brand-text-secondary" size={24} />,
    <CodeIcon className="w-6 h-6 text-brand-text-secondary" size={24} />,
    <CheckIcon className="w-6 h-6 text-brand-text-secondary" />
];

const LoadingState: React.FC = () => (
    <div className="text-center p-8 space-y-4">
        <div className="animate-spin-slow mx-auto w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full" />
        <p className="font-roboto-mono text-brand-text-secondary animate-pulse">Initializing Architects Protocol...</p>
    </div>
);

const LiveAudit: React.FC<LiveAuditProps> = ({ navigateToContact }) => {
    const { setIsHovering } = useInteraction();
    const [problem, setProblem] = useState('');
    const [blueprint, setBlueprint] = useState<BlueprintStep[] | null>(null);
    const [rawStream, setRawStream] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!problem.trim()) {
            setError("Please describe a problem to analyze.");
            return;
        }
        setIsLoading(true);
        setIsStreaming(true);
        setError(null);
        setBlueprint(null);
        setRawStream('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            // We use streaming to show progress, but we still ask for JSON to parse at the end.
            // For visual effect, we display the raw text as it arrives.
            const responseStream = await ai.models.generateContentStream({
                model: "gemini-2.5-flash",
                contents: `Analyze this business problem and generate a solution blueprint: "${problem}"`,
                config: {
                    systemInstruction: `You are a world-class workflow optimization consultant. A user will describe a business problem. Provide a concise, 3-step 'Clarity Blueprint' to solve it. Each step must have a 'step' number (1, 2, 3), a short 'title', and a 'description' (1-2 sentences). Focus on solutions involving data consolidation, automation (e.g., Google Apps Script), and visualization (e.g., Looker dashboards).`,
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                step: { type: Type.NUMBER },
                                title: { type: Type.STRING },
                                description: { type: Type.STRING }
                            },
                            required: ["step", "title", "description"]
                        }
                    }
                }
            });

            let accumulatedText = '';
            for await (const chunk of responseStream) {
                const chunkText = chunk.text;
                accumulatedText += chunkText;
                setRawStream(prev => prev + chunkText);
                setIsLoading(false); // Stop "loading" spinner once first chunk arrives
            }

            try {
                const parsedBlueprint = JSON.parse(accumulatedText);
                setBlueprint(parsedBlueprint);
            } catch (jsonError) {
                console.error("JSON Parse Error during stream:", jsonError);
                // Fallback attempt to clean code fences if model adds them despite schema
                const cleaned = accumulatedText.replace(/```json/g, '').replace(/```/g, '');
                try {
                    setBlueprint(JSON.parse(cleaned));
                } catch (e2) {
                    setError("Blueprint generated but format was invalid. Please try again.");
                }
            }

        } catch (e) {
            console.error(e);
            setError("Sorry, there was an issue generating the blueprint. Please try again.");
        } finally {
            setIsLoading(false);
            setIsStreaming(false);
        }
    };

    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="text-center mb-16">
                    <ScramblingHeading text="Instant Workflow Audit" />
                    <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">
                        Describe a workflow bottleneck you're facing. My integrated AI assistant will generate a high-level blueprint to solve it in real-time.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto holographic-panel p-6 sm:p-8 rounded-xl">
                    <div className="flex flex-col gap-4">
                        <textarea
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}
                            placeholder="e.g., 'My team wastes hours every Monday manually creating sales reports from three different spreadsheets.'"
                            className="w-full p-4 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent min-h-[100px] text-brand-text-primary"
                            aria-label="Describe your workflow problem"
                            disabled={isLoading || isStreaming}
                        />
                        <button
                            onClick={handleGenerate}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            disabled={isLoading || isStreaming}
                            className="btn btn-primary disabled:bg-brand-process disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                        >
                            {isLoading ? 'Connecting...' : isStreaming ? 'Analyzing...' : 'Generate Blueprint'}
                        </button>
                    </div>

                    <div className="mt-8 min-h-[200px]">
                        {isLoading && <LoadingState />}
                        {error && <p className="text-center text-brand-chaos">{error}</p>}

                        {/* Streaming View - The Matrix/Terminal effect */}
                        {isStreaming && !blueprint && (
                            <div className="font-roboto-mono text-xs sm:text-sm text-brand-accent/70 p-4 border border-brand-border rounded-lg bg-black/50 overflow-hidden break-all animate-pulse">
                                {rawStream}
                                <span className="inline-block w-2 h-4 bg-brand-accent ml-1 animate-bounce">_</span>
                            </div>
                        )}

                        {blueprint && (
                            <div className="animate-reveal-in">
                                <div className="space-y-4">
                                    <h3 className="font-poppins text-2xl font-bold text-center text-brand-text-primary mb-4 text-glow-accent">Your Clarity Blueprint</h3>
                                    {blueprint.map((step, index) => (
                                        <div key={step.step} className="p-4 holographic-panel rounded-lg flex items-start gap-4" style={{ animationDelay: `${index * 150}ms` }}>
                                            <div className="flex-shrink-0 bg-brand-surface p-3 rounded-full mt-1">
                                                {stepIcons[index % stepIcons.length]}
                                            </div>
                                            <div>
                                                <h4 className="font-poppins font-bold text-lg text-brand-accent">{step.title}</h4>
                                                <p className="text-brand-text-secondary">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-8 pt-6 border-t border-brand-border/50">
                                    <h4 className="text-xl font-poppins font-bold text-brand-text-primary mb-4">Ready for the Next Step?</h4>
                                    <button
                                        onClick={navigateToContact}
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                        className="inline-flex items-center btn btn-primary !py-3 !px-6"
                                    >
                                        <MailIcon className="w-5 h-5 mr-3" />
                                        Discuss this Blueprint
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <p className="text-xs text-brand-text-secondary/50 text-center mt-6">
                        Note: This is an AI-generated suggestion. A real consultation provides a more in-depth, tailored solution.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LiveAudit;

