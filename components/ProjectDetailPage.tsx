import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Rectangle } from 'recharts';
import { CaseStudy } from '../data/content';
import { useMatrixCountUp } from '../hooks/useMatrixCountUp';
import { useInteraction } from '../context/InteractionContext';
import HolographicBar from './charts/HolographicBar';
import CollapsibleSection from './ui/CollapsibleSection';
import ScramblingHeading from './ScramblingHeading';
import SectionIndex from './SectionIndex';
import Breadcrumb from './Breadcrumb';
import { CheckIcon, ClipboardListIcon, CodeIcon } from '../constants';

interface ProjectDetailPageProps {
    project: CaseStudy;
    onBack: () => void;
}



const cleanText = (text: string | undefined) => {
    if (!text) return text;
    return text.replace(/\*\*/g, '');
};

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
    const { setIsHovering } = useInteraction();
    const { val: afterCount, ref } = useMatrixCountUp(project.after);
    const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);
    const [isGapsOpen, setIsGapsOpen] = React.useState(false);

    const data = [
        { name: 'Before', value: project.before, color: 'var(--signal-critical)' },
        { name: 'After', value: project.after, color: 'var(--signal-success)' },
    ];

    // Dynamic section IDs based on content structure
    // Grouped for cleaner navigation in SectionIndex
    const getSectionIds = () => {
        if (project.tierAStructure) {
            // Impact > Context > Risk > Outcome > Details > Gaps
            return ['why-it-matters', 'context', 'problem-risk', 'outcome', 'system-details', 'gaps'];
        }
        return ['the-moment', 'what-was-at-risk', 'what-changed', 'how-it-worked', 'my-process', 'the-results', 'how-impact-measured'];
    };

    return (
        <div className="min-h-screen py-0 px-4 sm:px-8 lg:px-16 animate-reveal-in">
            <SectionIndex sectionIds={getSectionIds()} />
            <div className="max-w-4xl mx-auto pt-16 sm:pt-20">
                <Breadcrumb
                    items={[
                        { label: 'Work', onClick: onBack },
                        { label: 'Projects' },
                        { label: project.name },
                    ]}
                />
                <button
                    onClick={onBack}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="inline-flex items-center px-4 py-2 bg-ops-bg/60 backdrop-blur-xl border border-signal-info/20 rounded-full text-sm font-roboto-mono font-bold uppercase tracking-[0.1em] text-ops-text-secondary hover:text-ops-text-primary hover:bg-signal-info/10 hover:border-signal-info/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] mb-8 group"
                >
                    <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
                    Back to Work
                </button>

                <header className="text-center my-16">
                    <ScramblingHeading text={project.title} />
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-ops-text-secondary font-roboto-mono mt-8 text-sm leading-relaxed">
                        <span><strong className="font-poppins text-ops-text-primary">Client:</strong> {project.client}</span>
                        <div className="flex items-center gap-2">
                            <CodeIcon className="w-5 h-5 text-signal-success" />
                            <span>{project.technologies.join(', ')}</span>
                        </div>
                    </div>
                </header>

                <article className="space-y-12">
                    {/* Tier A Canonical Structure - Progressive Disclosure */}
                    {project.tierAStructure && (
                        <>
                            {/* Layer 1: Executive Summary (Always Visible) */}
                            <div id="summary" className="space-y-12">
                                <section id="why-it-matters" data-title="Impact">
                                    <h3 className="font-poppins text-h3 text-signal-info text-glow-accent mb-8">Why This Mattered</h3>
                                    <div className="text-lg md:text-xl text-ops-text-primary leading-relaxed border-l-4 border-signal-info pl-6 sm:pl-8 font-medium">
                                        {cleanText(project.tierAStructure.whyItMatters)}
                                    </div>
                                </section>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <section id="context" data-title="Context">
                                        <h4 className="font-poppins text-xl font-bold text-ops-text-secondary mb-5 uppercase tracking-wider">Context</h4>
                                        <div className="text-ops-text-primary leading-relaxed whitespace-pre-wrap border-l-2 border-ops-border pl-4 text-base">
                                            {cleanText(project.tierAStructure.context)}
                                        </div>
                                    </section>

                                    <section id="problem-risk" data-title="Risk">
                                        <h4 className="font-poppins text-xl font-bold text-ops-text-secondary mb-5 uppercase tracking-wider">Problem & Risk</h4>
                                        <div className="text-ops-text-primary leading-relaxed whitespace-pre-wrap border-l-2 border-signal-critical pl-4">
                                            {cleanText(project.tierAStructure.problemRisk)}
                                        </div>
                                    </section>
                                </div>

                                <section id="outcome" data-title="Outcome">
                                    <h3 className="font-poppins text-h3 text-signal-success text-glow-clarity mb-6">Outcome / Value Delta</h3>
                                    <div className="text-ops-text-primary leading-relaxed whitespace-pre-wrap border-l-4 border-signal-success pl-6 sm:pl-8">
                                        {cleanText(project.tierAStructure.outcome)}
                                    </div>
                                </section>
                            </div>

                            {/* Layer 2: System Details (Collapsible) */}
                            <CollapsibleSection
                                id="system-details"
                                dataTitle="System"
                                title="System Architecture & Implementation Details"
                                isOpen={isDetailsOpen}
                                onToggle={() => setIsDetailsOpen(!isDetailsOpen)}
                            >
                                <div className="space-y-12">
                                    <section>
                                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-6">System Design</h3>
                                        <div className="text-brand-text-primary leading-relaxed whitespace-pre-wrap border-l-4 border-brand-accent pl-6 sm:pl-8">
                                            {cleanText(project.tierAStructure.systemDesign)}
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-6">My Responsibility</h3>
                                        <div className="text-brand-text-primary leading-relaxed whitespace-pre-wrap border-l-4 border-brand-clarity pl-6 sm:pl-8">
                                            {cleanText(project.tierAStructure.responsibility)}
                                        </div>
                                    </section>
                                </div>
                            </CollapsibleSection>

                            {/* Layer 3: Gaps & Assumptions (Collapsible) */}
                            <CollapsibleSection
                                id="gaps"
                                dataTitle="Gaps"
                                title="Explicit Limitations & Missing Information"
                                isOpen={isGapsOpen}
                                onToggle={() => setIsGapsOpen(!isGapsOpen)}
                                variant="gaps"
                            >
                                <div className="text-brand-text-secondary leading-relaxed whitespace-pre-wrap">
                                    {cleanText(project.tierAStructure.gaps)}
                                </div>
                            </CollapsibleSection>
                        </>
                    )}

                    {/* Executive Story Format - Show if available (Legacy/Fallback) */}
                    {project.theMoment && (
                        <section id="the-moment" data-title="Moment">
                            <h3 className="font-poppins text-h3 text-brand-chaos text-glow-chaos mb-6">The Moment</h3>
                            <p className="text-lg text-brand-text-primary leading-relaxed border-l-4 border-brand-chaos pl-6 sm:pl-8">
                                {cleanText(project.theMoment)}
                            </p>
                        </section>
                    )}

                    {project.whatWasAtRisk && (
                        <section id="what-was-at-risk" data-title="Risk">
                            <h3 className="font-poppins text-h3 text-brand-chaos text-glow-chaos mb-6">What Was at Risk</h3>
                            <p className="text-lg text-brand-text-primary leading-relaxed border-l-4 border-brand-chaos pl-6 sm:pl-8">
                                {cleanText(project.whatWasAtRisk)}
                            </p>
                        </section>
                    )}

                    {project.whatChanged && (
                        <section id="what-changed" data-title="The Pivot">
                            <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-6">What Changed</h3>
                            <p className="text-lg text-brand-text-primary leading-relaxed border-l-4 border-brand-accent pl-6 sm:pl-8">
                                {cleanText(project.whatChanged)}
                            </p>
                        </section>
                    )}

                    {/* How It Worked - Original story field */}
                    <section id="how-it-worked" data-title="Logic">
                        <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-6">{project.theMoment ? 'How It Worked' : 'The Story'}</h3>
                        <p className="text-xl text-brand-text-primary leading-relaxed border-l-4 border-brand-accent pl-6 sm:pl-8">{cleanText(project.story)}</p>
                    </section>

                    <section id="my-process" data-title="Process">
                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">My Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.process.map((step, index) => (
                                <div key={index} className="holographic-panel p-6 rounded-lg">
                                    <h4 className="font-bold font-poppins text-xl text-brand-text-primary mb-2">{index + 1}. {step.title}</h4>
                                    <p className="text-brand-text-secondary">{cleanText(step.description)}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="the-results" data-title="Results">
                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">The Results</h3>
                        <div className="flex flex-col lg:flex-row gap-[var(--space-xl)] holographic-panel p-6 sm:p-8 rounded-lg">
                            <div className="lg:w-1/2">
                                <div className="flex items-center mb-4">
                                    <ClipboardListIcon className="w-8 h-8 text-brand-clarity mr-3" />
                                    <h4 className="font-poppins font-bold text-2xl">Key Achievements</h4>
                                </div>
                                <ul className="space-y-3">
                                    {project.achievements.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-brand-clarity mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-brand-text-primary">{cleanText(item)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-1/2 w-full text-center bg-brand-bg p-4 rounded-lg border border-brand-border">
                                <h4 className="font-poppins text-xl mb-4">{project.metric}</h4>
                                <div className="h-64 w-full">
                                    <ResponsiveContainer>
                                        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                            <XAxis dataKey="name" tick={{ fill: 'var(--brand-text-primary)' }} />
                                            <YAxis tick={{ fill: 'var(--brand-text-primary)' }} />
                                            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }} />
                                            <Bar dataKey="value" shape={(props: any) => <HolographicBar {...props} />}>
                                                {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <p className="font-roboto-mono text-3xl mt-4">
                                    From {project.before} to <span ref={ref} className="text-brand-clarity font-bold inline-block">{afterCount}</span>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How the Impact Was Measured - Transparency & Auditability */}
                    {project.howMeasured && (
                        <section id="how-impact-measured" data-title="Audit">
                            <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-6">How the Impact Was Measured</h3>
                            <p className="text-brand-text-primary leading-relaxed whitespace-pre-wrap border-l-4 border-brand-border/50 pl-6 sm:pl-8">
                                {cleanText(project.howMeasured)}
                            </p>
                        </section>
                    )}

                    {/* Evidence & Artifacts - Proof of Work */}
                    {project.id === 'automated-deals-reporting' && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-8 text-center">Evidence & Artifacts</h3>
                            <p className="text-brand-text-secondary text-center mb-8 italic">Below are anonymized proof artifacts demonstrating the methodology and results described above.</p>

                            <div className="space-y-8">
                                {/* Artifact 1: Apps Script Execution Log */}
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">1. Apps Script Execution Log</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Shows real-time execution data from actual batch processing runs. Each entry displays timestamp, processing duration in milliseconds, record count, and success status.
                                    </p>
                                    <p className="text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System processes 200+ deal records consistently in under 1 second per batch, with 100% success rate (zero failures).
                                    </p>
                                    <a href="/artifacts/deals-reporting/execution-log.pdf" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📄 View Execution Log (PDF)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (no deal IDs, client names, or amounts shown)
                                    </p>
                                </div>

                                {/* Artifact 2: Process Flow Diagram */}
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">2. Before/After Process Flow</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Visual comparison of manual workflow (6-8 steps, 16-25 hours) versus automated system (4 steps, 0.3 seconds).
                                    </p>
                                    <p className="text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System eliminates human error points and consolidates complex logic into single automated pipeline. Manual steps that took hours complete in milliseconds.
                                    </p>
                                    <a href="/artifacts/deals-reporting/process-flow.png" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        🖼️ View Process Diagram (PNG)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (represents methodology, not specific business logic)
                                    </p>
                                </div>

                                {/* Artifact 3: Sample Output File */}
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">3. CRM-Ready Output Sample</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Real CSV export format showing actual output structure: consistent columns, accurate calculations, zero manual corrections needed.
                                    </p>
                                    <p className="text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System produces perfectly formatted, CRM-ready output with no manual intervention. Data is consistent, accurate, and ready for one-click import.
                                    </p>
                                    <a href="/artifacts/deals-reporting/output-sample.csv" download className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📥 Download CSV Sample
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (Deal IDs, patient names, and prices replaced with [REDACTED])
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-brand-surface rounded-lg border border-brand-border">
                                <p className="text-sm text-brand-text-secondary text-center">
                                    <strong>Artifacts Storage & Access:</strong> All artifacts are anonymized, static files hosted with the portfolio. No external links or live system data exposed.
                                </p>
                            </div>
                        </section>
                    )}

                    {project.id === 'manufacturing-qc-dashboard' && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-8 text-center">Evidence & Artifacts</h3>
                            <p className="text-brand-text-secondary text-center mb-8 italic">These artifacts show how operational decisions became data-driven and repeatable.</p>

                            <div className="space-y-8">
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">1. Dashboard Before/After Comparison</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Visual comparison showing defect rate metrics before and after dashboard implementation, with facility-level performance breakdown.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Dashboard provided real-time visibility enabling QC managers to identify root causes and drive a 41% defect reduction.
                                    </p>
                                    <a href="/artifacts/manufacturing-qc/dashboard-before-after.png" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        🖼️ View Dashboard (PNG)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (facility names generalized)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">2. Root Cause Analysis Report</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Sample analysis showing how dashboard data revealed specific quality issues and led to targeted process improvements.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Dashboard insights were actionable and directly drove measurable quality improvements across facilities.
                                    </p>
                                    <a href="/artifacts/manufacturing-qc/root-cause-analysis-sample.pdf" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📄 View Analysis (PDF)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (facility and product names generalized)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">3. Facility Defect Data Sample</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Real dataset showing defect metrics by facility and product type, demonstrating data quality and granularity available to managers.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Dashboard is backed by consistent, reliable data that managers can drill down into for analysis.
                                    </p>
                                    <a href="/artifacts/manufacturing-qc/facility-defect-data-sample.csv" download className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📥 Download Data (CSV)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (facility names generalized)
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-brand-surface rounded-lg border border-brand-border">
                                <p className="text-sm text-brand-text-secondary text-center">
                                    <strong>Artifacts Storage & Access:</strong> All artifacts are anonymized, static files hosted with the portfolio. No external links or live system data exposed.
                                </p>
                            </div>
                        </section>
                    )}

                    {project.id === 'otp-facilities-report' && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-8 text-center">Evidence & Artifacts</h3>
                            <p className="text-brand-text-secondary text-center mb-8 italic">These artifacts demonstrate how visibility replaced manual intervention.</p>

                            <div className="space-y-8">
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">1. System Walkthrough: OTP Stabilization</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        A detailed walkthrough of the Global On-Time Performance Dashboard, demonstrating how we track facility performance against the 50% threshold and identify root causes for delays.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-6">
                                        <strong>What it proves:</strong> See the actual dashboard in action, including drill-down capabilities and the real-time data flow that saved the client relationship.
                                    </p>
                                    <div className="rounded-lg overflow-hidden border border-brand-border/50 shadow-2xl bg-black">
                                        <iframe
                                            src="https://drive.google.com/file/d/1fx5B8YBlSe82SvD7T7V2Pljs7yGn7U6p/preview"
                                            className="w-full aspect-video border-0"
                                            allow="autoplay"
                                            title="System Walkthrough: OTP Stabilization"
                                        ></iframe>
                                    </div>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized Walkthrough
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">2. Global OTP Dashboard Overview</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        High-level executive view showing global on-time performance trends, threshold tracking, and aggregate status across all regions.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Immediate visibility into global health against the 50% SLA threshold, enabling rapid executive reaction.
                                    </p>
                                    <div className="mb-4 overflow-hidden rounded-lg border border-brand-border/50 shadow-lg">
                                        <img
                                            src="/artifacts/kline/ots-kpi-overview.jpg"
                                            alt="Global OTP Dashboard Overview"
                                            className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (client data protected)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">3. Distributor Performance View</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Comparative performance breakdown by distributor/facility, highlighting specific underperformers dragging down the global average.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Pinpointed accountability by showing exactly which facilities were meeting targets and which needed support.
                                    </p>
                                    <div className="mb-4 overflow-hidden rounded-lg border border-brand-border/50 shadow-lg">
                                        <img
                                            src="/artifacts/kline/ots-distributor-performance.jpg"
                                            alt="Distributor Performance Breakdown"
                                            className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">4. Case-Level Drilldown</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Granular table view allowing teams to drill down from aggregate metrics to individual delayed cases to investigate root causes.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Transparency down to the unit level, removing "data black boxes" and enabling specific root-cause diagnosis.
                                    </p>
                                    <div className="mb-4 overflow-hidden rounded-lg border border-brand-border/50 shadow-lg">
                                        <img
                                            src="/artifacts/kline/ots-case-level-analysis.jpg"
                                            alt="Case Level Analysis Table"
                                            className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">5. Analysis Summary Report</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Periodic PDF summary report generated for leadership, synthesizing trends, risks, and recommended actions based on dashboard data.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> The system didn't just display data; it drove a regular rhythm of analysis and decision-making meetings.
                                    </p>
                                    <a href="/artifacts/kline/ots-portfolio-anonymized.pdf" download="OTS_Portfolio_Anonymized.pdf" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📥 Download Report (PDF)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (strategic data generalized)
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-brand-surface rounded-lg border border-brand-border">
                                <p className="text-sm text-brand-text-secondary text-center">
                                    <strong>Artifacts Storage & Access:</strong> All artifacts are anonymized, static files hosted with the portfolio. No external links or live system data exposed.
                                </p>
                            </div>
                        </section>
                    )}

                    {project.id === 'logistics-automation-pipeline' && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-8 text-center">Evidence & Artifacts</h3>
                            <p className="text-brand-text-secondary text-center mb-8 italic">Below are anonymized proof artifacts demonstrating the methodology and results described above.</p>

                            <div className="space-y-8">
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">1. Scheduling Process Flow Diagram</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Before/after visual comparison showing manual scheduling (48 hours, 5+ steps) versus automated system (1 second, fully automatic).
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Complete elimination of manual data consolidation, enabling instant scheduling and complex contract support.
                                    </p>
                                    <a href="/artifacts/logistics-automation/scheduling-process-flow.png" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        🖼️ View Process Flow (PNG)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (client names generalized)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">2. Sample Automation Output</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Real scheduling output showing generated trip assignments, pricing, and driver allocations ready for immediate dispatch.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System generates production-ready schedules with consistent pricing and optimized driver assignments in sub-second time.
                                    </p>
                                    <a href="/artifacts/logistics-automation/scheduling-output-sample.csv" download className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📥 Download Schedule (CSV)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (client and driver names generalized)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">3. Automation Execution Log</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Complete execution log showing all automation steps completing successfully with zero errors across multiple test runs.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System reliably executes complex scheduling logic in milliseconds with 100% success rate and zero manual intervention.
                                    </p>
                                    <a href="/artifacts/logistics-automation/automation-execution-log.pdf" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📄 View Log (PDF)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (no sensitive scheduling data)
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-brand-surface rounded-lg border border-brand-border">
                                <p className="text-sm text-brand-text-secondary text-center">
                                    <strong>Artifacts Storage & Access:</strong> All artifacts are anonymized, static files hosted with the portfolio. No external links or live system data exposed.
                                </p>
                            </div>
                        </section>
                    )}

                    {project.id === 'dispatch-automation-expack' && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-8 text-center">Evidence & Artifacts</h3>
                            <p className="text-brand-text-secondary text-center mb-8 italic">Below are anonymized proof artifacts demonstrating the methodology and results described above.</p>

                            <div className="space-y-8">
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">1. Dispatch Workflow Improvement Diagram</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Before/after process flow showing elimination of manual AWB creation, tracking entry, and reconciliation steps through automation.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Automation eliminated multiple error-prone manual touchpoints, resulting in 75% error reduction and 20% OTD improvement.
                                    </p>
                                    <a href="/artifacts/dispatch-automation/dispatch-workflow-before-after.png" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        🖼️ View Workflow (PNG)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (no shipment details)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">2. Air Waybill Generation Quality Sample</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Sample batch of auto-generated Air Waybills showing consistent formatting, accurate data population, and zero errors or manual corrections needed.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System generates production-ready documentation at scale with perfect consistency and zero defects.
                                    </p>
                                    <a href="/artifacts/dispatch-automation/awb-generation-sample-batch.pdf" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📄 View Sample (PDF)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (tracking numbers and addresses anonymized)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">3. Dispatch Performance Metrics</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        4-week performance dataset showing error elimination and on-time delivery improvement from 78% to 94% as automation matured.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Measurable, sustained improvement in dispatch reliability with zero errors maintained over extended operation.
                                    </p>
                                    <a href="/artifacts/dispatch-automation/dispatch-performance-metrics.csv" download className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📥 Download Metrics (CSV)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (facility names generalized)
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-brand-surface rounded-lg border border-brand-border">
                                <p className="text-sm text-brand-text-secondary text-center">
                                    <strong>Artifacts Storage & Access:</strong> All artifacts are anonymized, static files hosted with the portfolio. No external links or live system data exposed.
                                </p>
                            </div>
                        </section>
                    )}

                    {project.id === 'team-performance-dashboard' && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-8 text-center">Evidence & Artifacts</h3>
                            <p className="text-brand-text-secondary text-center mb-8 italic">These artifacts demonstrate how objective metrics replaced subjective management decisions.</p>

                            <div className="space-y-8">
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">1. Team Performance Dashboard</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Real-time dashboard showing individual and team rework rates, utilization metrics, and SLA compliance with trend analysis over 8 weeks.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Dashboard provided objective performance visibility enabling managers to identify improvement opportunities and guide team coaching.
                                    </p>
                                    <a href="/artifacts/team-performance/team-performance-dashboard.png" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        🖼️ View Dashboard (PNG)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (team member names generalized)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">2. Performance Coaching Case Study</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Real example of how dashboard data transformed performance management from subjective assessment to data-driven coaching with measurable improvement.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Dashboard metrics enabled specific, targeted coaching that resulted in measured performance improvement for struggling team members.
                                    </p>
                                    <a href="/artifacts/team-performance/performance-coaching-example.pdf" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📄 View Case Study (PDF)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (team member identities protected)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">3. Weekly Performance Metrics</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        8-week dataset showing individual team member rework and utilization metrics, demonstrating team-wide improvement and performance variation visibility.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Consistent metrics tracking enabled fair workload distribution and targeted support where needed, driving overall team efficiency.
                                    </p>
                                    <a href="/artifacts/team-performance/team-performance-weekly.csv" download className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📥 Download Metrics (CSV)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (team member names generalized)
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-brand-surface rounded-lg border border-brand-border">
                                <p className="text-sm text-brand-text-secondary text-center">
                                    <strong>Artifacts Storage & Access:</strong> All artifacts are anonymized, static files hosted with the portfolio. No external links or live system data exposed.
                                </p>
                            </div>
                        </section>
                    )}

                    {project.id === 'financial-data-integration' && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-8 text-center">Evidence & Artifacts</h3>
                            <p className="text-brand-text-secondary text-center mb-8 italic">Below are anonymized proof artifacts demonstrating the methodology and results described above.</p>

                            <div className="space-y-8">
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">1. Financial Data Consolidation Flow</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Diagram showing automated consolidation of multiple data sources (contract trips, private trips, adjustments, payments) into unified financial report.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System consolidates complex, multi-source financial data automatically, eliminating manual entry errors and ensuring 100% accuracy.
                                    </p>
                                    <a href="/artifacts/financial-integration/financial-data-consolidation-flow.png" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        🖼️ View Flow (PNG)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (column names generic)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">2. Monthly Financial Report Comparison</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Before/after comparison showing specific errors found in manual consolidation versus zero errors in automated system.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Automation eliminated 15+ monthly errors, ensuring audit-ready financial accuracy and reducing reconciliation time to zero.
                                    </p>
                                    <a href="/artifacts/financial-integration/monthly-financial-report-comparison.pdf" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📄 View Comparison (PDF)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (amounts may be redacted or representative)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">3. Consolidated Financial Dataset</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Sample of consolidated monthly financial data showing clean structure, consistent calculations, and complete data integrity across all revenue streams.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System produces perfectly formatted, audit-ready financial data with zero manual corrections needed.
                                    </p>
                                    <a href="/artifacts/financial-integration/monthly-financial-data-sample.csv" download className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📥 Download Data (CSV)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (client names may be generalized)
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-brand-surface rounded-lg border border-brand-border">
                                <p className="text-sm text-brand-text-secondary text-center">
                                    <strong>Artifacts Storage & Access:</strong> All artifacts are anonymized, static files hosted with the portfolio. No external links or live system data exposed.
                                </p>
                            </div>
                        </section>
                    )}

                    {project.id === 'client-intake-automation' && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-8 text-center">Evidence & Artifacts</h3>
                            <p className="text-brand-text-secondary text-center mb-8 italic">Below are anonymized proof artifacts demonstrating the methodology and results described above.</p>

                            <div className="space-y-8">
                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">1. Intake Automation Workflow Diagram</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Complete workflow showing form submission triggering automated folder creation, template population, and team notification in 45 seconds.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> Complete end-to-end automation eliminates 2-3 days of manual onboarding work, enabling same-day project startup.
                                    </p>
                                    <a href="/artifacts/client-intake/intake-automation-workflow.png" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        🖼️ View Workflow (PNG)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (no client-specific details)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">2. Sample Intake Form Submission</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Example intake form response showing how submitted data automatically triggers folder creation and template population for new project setup.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System captures all necessary project information from single form and auto-generates complete project infrastructure.
                                    </p>
                                    <a href="/artifacts/client-intake/sample-intake-form-submission.pdf" className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📄 View Sample (PDF)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (client names and contact info generalized)
                                    </p>
                                </div>

                                <div className="holographic-panel p-6 sm:p-8 rounded-lg border border-brand-border">
                                    <h4 className="font-poppins font-bold text-xl text-brand-text-primary mb-2">3. Automation Execution Logs</h4>
                                    <p className="text-brand-text-secondary mb-4">
                                        Multiple automation runs showing consistent 45-second execution time, 100% success rate, and zero errors across all automation steps.
                                    </p>
                                    <p className="text-sm text-brand-text-secondary mb-4">
                                        <strong>What it proves:</strong> System reliably handles unlimited client intakes with zero manual work and zero failures, enabling scalable growth.
                                    </p>
                                    <a href="/artifacts/client-intake/intake-automation-logs.csv" download className="inline-block px-4 py-2 bg-brand-clarity text-brand-bg rounded font-poppins font-bold hover:opacity-80 transition-opacity">
                                        📥 Download Logs (CSV)
                                    </a>
                                    <p className="text-xs text-brand-text-secondary mt-3">
                                        ✓ Anonymized (no sensitive project data)
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-brand-surface rounded-lg border border-brand-border">
                                <p className="text-sm text-brand-text-secondary text-center">
                                    <strong>Artifacts Storage & Access:</strong> All artifacts are anonymized, static files hosted with the portfolio. No external links or live system data exposed.
                                </p>
                            </div>
                        </section>
                    )}

                    <section>
                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">Key Deliverables</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.deliverables.map((item, index) => (
                                <div key={index} className="flex items-center holographic-panel p-4 rounded-lg">
                                    <span className="text-brand-accent mr-3 text-lg">✓</span>
                                    <span className="text-brand-text-primary">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-20 py-16 border-t border-brand-border/20">
                        <div className="text-center">
                            <h3 className="font-poppins text-h3 text-brand-text-primary mb-4">Interested in Similar Results?</h3>
                            <p className="text-brand-text-secondary mb-8 max-w-2xl mx-auto">
                                This is one example of how I transform operational chaos into automated clarity. Ready to explore what's possible for your business?
                            </p>
                            <button
                                onClick={onBack}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                className="inline-flex items-center px-8 py-4 bg-brand-cta text-brand-bg font-poppins font-bold rounded-lg hover:shadow-[0_8px_24px_rgba(255,199,0,0.3)] transition-all duration-300"
                            >
                                Explore More Projects
                                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </button>
                        </div>
                    </section>
                </article>
            </div>
        </div >
    );
};

export default ProjectDetailPage;
