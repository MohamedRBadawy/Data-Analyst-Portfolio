import React, { useState, useEffect } from 'react';
import { Workflow } from '../data/content';

interface InteractiveWorkflowProps {
    workflow: Workflow;
}

const InteractiveWorkflow: React.FC<InteractiveWorkflowProps> = ({ workflow }) => {
    const [solvedBottlenecks, setSolvedBottlenecks] = useState<Set<string>>(new Set());
    const [isComplete, setIsComplete] = useState(false);

    const totalBottlenecks = workflow.nodes.filter(n => n.isBottleneck).length;

    useEffect(() => {
        if (solvedBottlenecks.size === totalBottlenecks && totalBottlenecks > 0) {
            setIsComplete(true);
        }
    }, [solvedBottlenecks, totalBottlenecks]);

    const handleNodeClick = (nodeId: string) => {
        setSolvedBottlenecks(prev => new Set(prev).add(nodeId));
    };
    
    // Reset state when workflow changes
    useEffect(() => {
        setSolvedBottlenecks(new Set());
        setIsComplete(false);
    }, [workflow]);

    const isPathSolved = (path: (typeof workflow.paths)[0]): boolean => {
       const fromNode = workflow.nodes.find(n => n.id === path.from);
       const toNode = workflow.nodes.find(n => n.id === path.to);
       const fromSolved = !fromNode?.isBottleneck || solvedBottlenecks.has(fromNode.id);
       const toSolved = !toNode?.isBottleneck || solvedBottlenecks.has(toNode.id);
       return fromSolved && toSolved;
    };

    return (
        <div className="relative">
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <defs>
                     <filter id="glow-chaos" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="glow-clarity" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* Paths */}
                {workflow.paths.map((path, index) => (
                    <g key={`path-group-${index}`}>
                         {/* Clarity Path (drawn on solve) */}
                        <path
                            d={path.clarityD}
                            stroke="var(--brand-clarity)"
                            strokeWidth="2"
                            fill="none"
                            className="path-clarity"
                            style={{ opacity: isPathSolved(path) ? 1 : 0 }}
                        />
                         {/* Chaos Path (fades out on solve) */}
                         <path
                            d={path.chaoticD}
                            stroke="var(--brand-chaos)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            fill="none"
                            style={{ opacity: isPathSolved(path) ? 0 : 1, transition: 'opacity 0.5s' }}
                        />
                    </g>
                ))}

                {/* Nodes */}
                {workflow.nodes.map(node => {
                    const isSolved = solvedBottlenecks.has(node.id);
                    const isClickable = node.isBottleneck && !isSolved;
                    return (
                         <g key={node.id} className={isClickable ? 'cursor-pointer' : ''} onClick={() => isClickable && handleNodeClick(node.id)}>
                            <circle
                                cx={node.cx}
                                cy={node.cy}
                                r="8"
                                fill={node.isBottleneck ? 'var(--brand-chaos)' : 'var(--brand-surface)'}
                                stroke={node.isBottleneck ? (isSolved ? 'var(--brand-clarity)' : 'var(--brand-chaos)') : 'var(--brand-accent)'}
                                strokeWidth="2"
                                className="transition-all duration-500"
                                style={{
                                    fill: isSolved ? 'var(--brand-clarity)' : (node.isBottleneck ? 'var(--brand-chaos)' : 'var(--brand-surface)'),
                                    filter: node.isBottleneck && !isSolved ? 'url(#glow-chaos)' : (isSolved ? 'url(#glow-clarity)' : 'none')
                                }}
                            />
                            <text x={node.cx} y={node.cy + 20} textAnchor="middle" fill="var(--brand-text)" fontSize="10">{node.label}</text>
                         </g>
                    );
                })}
            </svg>
            <div className={`absolute inset-0 flex items-center justify-center bg-brand-surface/80 transition-opacity duration-500 ${isComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                 <div className="text-center p-4 rounded-lg">
                    <h3 className="font-poppins text-2xl font-bold text-brand-clarity">Workflow Optimized!</h3>
                </div>
            </div>
        </div>
    );
};

export default InteractiveWorkflow;

