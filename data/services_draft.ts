import React from 'react';
import type { Page } from '../App';
import {
    ChartBarIcon,
    CodeIcon,
    PuzzleIcon,
    DatabaseIcon,
    TerminalIcon,
    SearchIcon,
    BriefcaseIcon,
    LayersIcon,
    ZapIcon,
    TrendingUpIcon,
    ShieldCheckIcon,
    GlobeIcon
} from '../constants';

export interface Problem { // Explicitly exported
    title: string;
    description: string;
    icon: React.ElementType;
    targetPage: Page;
}

export const problems: Problem[] = [
    {
        title: "Drowning in Data, Starving for Wisdom",
        description: "You have spreadsheets, CRMs, and logs, but you still can't answer simple questions like \"Which product is causing the most defects?\" or \"Is our sales team actually efficient?\" without spending hours manually collating data.",
        icon: DatabaseIcon,
        targetPage: 'work'
    },
    {
        title: "The Manual Work Treadmill",
        description: "Your best people are stuck doing low-value work—copy-pasting data, formatting reports, and chasing updates—instead of the strategic work you hired them for. You know it's inefficient, but you don't have the time to fix it.",
        icon: PuzzleIcon,
        targetPage: 'services'
    },
    {
        title: "Systems That Don't Talk",
        description: "Your finance tool doesn't talk to your sales tool. Your inventory is in one place, your orders in another. You're paying for five different SaaS subscriptions, but you're still running the business on a fragile web of Excel sheets.",
        icon: TerminalIcon,
        targetPage: 'services'
    }
];

export interface Industry { // Explicitly exported
    name: string;
    icon: React.ElementType;
    problem: string;
    solution: string;
    tools: string[];
}

export interface Workflow {
    title: string;
    steps: {
        title: string;
        description: string;
        icon: React.ElementType;
    }[];
}

export const industriesData: Record<string, Workflow> = {
    "Logistics": {
        title: "Logistics Optimization Workflow",
        steps: [
            { title: "Data Ingestion", description: "Combine shipment logs from WMS, carrier APIs, and manual entry.", icon: DatabaseIcon },
            { title: "Standardization", description: "Normalize address formats and service levels.", icon: CodeIcon },
            { title: "Analysis", description: "Identify bottlenecks and late delivery drivers.", icon: ChartBarIcon }
        ]
    },
    "Manufacturing": {
        title: "Quality Control Loop",
        steps: [
            { title: "Defect Logging", description: "Capture defect data at the source.", icon: ShieldCheckIcon },
            { title: "Root Cause", description: "Correlate defects with production batches.", icon: SearchIcon },
            { title: "Resolution", description: "Implement and track corrective actions.", icon: CheckCircleIcon } // CheckCircleIcon not simplified? Just use CheckCircleIcon if available or placeholder
            // Wait, CheckCircleIcon was NOT in import list above. Replacing with ShieldCheckIcon or similar
        ]
    },
    "Finance": { // Added for completeness if needed? No, sticking to original content
        title: "Financial Reconciliation",
        steps: []
    }
};

// Fixing industriesData content to match ORIGINAL content exactly (which I read in lines 946-1063)
/*
Actually, the original content was different.
I should use strict copy.
Step 112: lines 801-1600.
Lines 937-1063:
export interface Industry { ... }
export const industriesData: Industry[] = [ ... ];
Wait, is it an Array or Record?
Line 946: export const industriesData: Industry[] = [
    { name: "Logistics & Supply Chain", icon: GlobeIcon, ... }
];
Ah, my memory failed. It is an ARRAY.
And `Workflow` interface?
Checking lines 930+...
I don't see `Workflow` interface near `Industry`.
Maybe I confused it.

Let's stick to EXACT content.
I will read `data/content.ts` AGAIN just for `services.ts` part to be 100% sure.
The `CheckCircleIcon` issue needs verification too.
*/

/* 
I will PAUSE writing `services.ts`.
I will READ `data/content.ts` lines 930-1400.
Then Write.
Safety first.
*/
