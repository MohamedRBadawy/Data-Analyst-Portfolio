
export interface ContributionCategory {
    id: string;
    title: string;
    description: string;
    items: {
        title: string;
        description: string;
        caseStudyId?: string;
    }[];
    subSection?: {
        title: string;
        description: string;
        items: { title: string; description: string }[];
        footer?: string;
    };
}

export interface WorkExperience {
    id: string;
    company: string;
    role: string;
    dates: string;
    summary: string;
    contributions: string[];
    achievements: string[];
    projects: { title: string; caseStudyId?: string; }[];
    tools: { category: string; items: string[] }[];
    zohoExpertise?: { product: string; usage: string; }[];
    contributionCategories?: ContributionCategory[];
    operatingContext?: string;
}

export const milestones = [
    { year: 2010, title: "Graduated Cairo University", description: "Earned a Bachelor of Commerce in Accounting, which gave me a strong foundation in financial processes and business logic.", position: '5%' },
    { year: 2013, title: "Early Operations & Manual Limits", description: "Worked across accounting, teaching, B2B sales, and pharmacy operations. High effort, fast learning, no leverage. Recognized the limits of manual work.", position: '20%' },
    { year: 2015, title: "High-Volume Operations Exposure", description: "Entered KPI-driven customer support and operations environments. Repeated exposure to broken workflows, manual coordination failures, and visibility gaps at scale.", position: '35%' },
    { year: 2017, title: "Operations Specialist at Talabat", description: "Dispatcher and partner support managing ~50 drivers per shift. Real-time order coordination exposed manual process failures and decision latency.", position: '50%' },
    { year: 2018, title: "Founded Expack Shipping", description: "Built custom dispatch and tracking systems to solve operational chaos. Scaled to 94% on-time delivery before operational complexity caused cash flow collapse.", position: '65%' },
    { year: 2022, title: "System Thinking Crystallized", description: "After Expack's operational failure, recognized: systems must be designed before scaling. Process redesign comes before automation.", position: '80%' },
    { year: 2023, title: "Operational Data Systems Lead at K Line Europe", description: "Sole owner of data lifecycle and automation systems. Leading MES development and AI agent integration across workflows.", position: '95%' },
];

export const experienceData: WorkExperience[] = [
    {
        id: "kline",
        company: "K Line Europe",
        role: "Operational Data Systems Lead",
        dates: "2023 - Present",
        summary: "Owned the architecture, implementation, and operational stability of data and workflow systems supporting large-scale European manufacturing operations for clear aligner production. Designed and deployed production-grade dashboards, automation, and analytical modules within live operational environments characterized by legacy processes, fragmented data, and active delivery and quality risk. Acted as the primary bridge between frontline operational teams and leadership, translating operational risk, inefficiencies, and performance gaps into measurable system interventions. Established internal ownership of operational intelligence systems, replacing reactive manual reporting with real-time visibility and enforcing process compliance directly through system design.",
        contributions: [], // Deprecated in favor of contributionCategories
        achievements: [
            "Unified fragmented operational data into a single automated source of truth supporting daily decision-making.",
            "Stabilized service-level performance by replacing reactive reporting with real-time operational visibility.",
            "Reduced dependency on external vendors by institutionalizing internal system ownership.",
            "Enforced process compliance through system design, stabilizing core operational metrics."
        ],
        projects: [
            { title: "Global On-Time Performance Dashboard", caseStudyId: "otp-facilities-report" },
            { title: "Manufacturing Defect Reduction Dashboard", caseStudyId: "manufacturing-qc-dashboard" },
            { title: "Team Performance & SLA Dashboard", caseStudyId: "team-performance-dashboard" },
            { title: "Automated Deals Reporting System", caseStudyId: "automated-deals-reporting" }
        ],
        tools: [
            { category: "Business Intelligence", items: ["Looker Studio", "Tableau", "Power BI"] },
            { category: "Automation & Data", items: ["Google Sheets", "Google Apps Script", "Tulip", "SQL", "Python", "n8n"] },
            { category: "Core Skills", items: ["Process Optimization", "Workflow Design", "AI Workflow Design", "Systems Thinking"] }
        ],
        zohoExpertise: [
            { product: "Zoho Analytics", usage: "Configured to aggregate disconnected data sources into a single executive truth." },
            { product: "Zoho CRM", usage: "Structured data architecture to enforce process compliance and pipeline visibility." },
            { product: "Zoho Projects", usage: "Configured lifecycles to mirror operational reality for accurate capacity planning." },
            { product: "Zoho Desk", usage: "Integrated support workflows with production data to link issues to root causes." },
            { product: "Zoho Inventory", usage: "Automated stock monitoring logic to trigger reordering based on consumption rates." }
        ],
        contributionCategories: [
            {
                id: "systems-delivered",
                title: "Systems Delivered at K Line",
                description: "Production systems designed to address specific operational risks and inefficiencies.",
                items: [
                    {
                        title: "Global On-Time Performance Dashboard",
                        description: "Real-time service-level visibility consolidating fragmented logistics data to prevent contract and delivery risk.",
                        caseStudyId: "otp-facilities-report"
                    },
                    {
                        title: "Manufacturing Defect Reduction Dashboard",
                        description: "Facility-level defect visibility enabling root-cause analysis and preventative correction.",
                        caseStudyId: "manufacturing-qc-dashboard"
                    },
                    {
                        title: "Team Performance & SLA Dashboard",
                        description: "Standardized productivity metrics replacing subjective reviews with objective workload balancing.",
                        caseStudyId: "team-performance-dashboard"
                    },
                    {
                        title: "Automated Deals Reporting System",
                        description: "Embedded pricing logic into sales workflows to eliminate manual calculation bottlenecks.",
                        caseStudyId: "automated-deals-reporting"
                    }
                ],
                subSection: {
                    title: "Supporting Analytical Modules",
                    description: "Diagnostic modules feeding primary dashboards to identify bottlenecks, workload imbalances, and distributor behavior.",
                    items: [
                        { title: "Intake volume analysis by distributor", description: "Informed staffing allocation." },
                        { title: "High-value account behavior analysis", description: "Informed support tiering." },
                        { title: "Team throughput and capacity analysis", description: "Guided daily assignment logic." }
                    ],
                    footer: "These modules do not operate independently; they feed decisions into the primary operational dashboards and workflows."
                }
            },
            {
                id: "workflow-automation",
                title: "Workflow Automation",
                description: "Automation embedded directly into live operational workflows to remove manual coordination and reduce decision latency. (See 'Automated Deals Reporting System' above).",
                items: []
            },
            {
                id: "internal-tools",
                title: "Internal Tools & Web Apps",
                description: "Purpose-built tools for specific operational constraints.",
                items: [
                    {
                        title: "Production Planning Utility",
                        description: "Replaced manual shift assignment with constraint-based staff allocation."
                    },
                    {
                        title: "Material Request Tracker",
                        description: "Digitized raw-material requests, reducing production floor downtime."
                    }
                ]
            },
            {
                id: "exploratory-prototypes",
                title: "Exploratory & Validation Prototypes",
                description: "Explicitly non-production systems used to test feasibility.",
                items: [
                    {
                        title: "MES Prototype (Tulip)",
                        description: "Modeled production workflows to validate real-time tracking prior to full MES investment."
                    },
                    {
                        title: "AI Agent Integration Initiatives",
                        description: "Piloted autonomous agents to test feasibility of reducing administrative load."
                    }
                ]
            },
            {
                id: "enterprise-systems",
                title: "Enterprise Systems Ownership",
                description: "Configured and governed core enterprise platforms to reflect real operational workflows rather than tool defaults.",
                items: []
            }
        ],
        operatingContext: "All systems were delivered within live operational environments with legacy processes, incomplete data, and active delivery risk. Systems were introduced incrementally to avoid disruption while maintaining operational continuity."
    },
    {
        id: "operations-support",
        company: "Operations & Customer Support",
        role: "Operations Specialist",
        dates: "2014 - 2017",
        summary: "Worked across high-pressure, KPI-driven operations environments including customer support, delivery coordination, and real-time dispatch. Managed operations for telecom support (Xceed/Teleperformance - DU), collections (Raya - Etisalat), delivery operations (Fetcher), and live dispatcher coordination (Talabat - ~50 drivers per shift). Repeated exposure to manual process failures at scale.",
        contributions: [
            "Coordinated real-time dispatch and order management in high-volume environments.",
            "Managed customer support escalations and partner training across multiple platforms.",
            "Identified recurring operational bottlenecks caused by lack of real-time visibility.",
            "Recognized that process failures were structural, not human error."
        ],
        achievements: [
            "Developed deep understanding of operational friction at scale.",
            "Recognized patterns: manual coordination creates decision latency and visibility gaps.",
            "Identified that systems were failing people, not the other way around."
        ],
        projects: [],
        tools: [
            { category: "Operations", items: ["Dispatch Coordination", "Customer Support", "Real-Time Problem Solving", "KPI Management"] }
        ]
    },
    {
        id: "expack",
        company: "Expack Shipping",
        role: "Founder",
        dates: "2018 - 2022",
        summary: "As the founder, I built the company from the ground up, overseeing all aspects of operations, business development, and technology. A key focus was creating lean, technology-driven processes to compete with larger players, leading me to develop a custom dispatch and tracking system that became our core operational advantage. The company ultimately failed due to operational chaos outpacing cash flow, not lack of demand · a lesson that shaped my approach to systems design.",
        contributions: [
            "Designed and built the company's entire operational infrastructure using Google Sheets and Google Apps Script.",
            "Automated key logistics processes including dispatch, Air Waybill (AWB) generation, and package tracking.",
            "Managed client relationships and developed solutions to meet their specific logistics needs.",
            "Led a small team, fostering a culture of efficiency and customer-centric problem-solving."
        ],
        achievements: [
            "Reduced dispatch and documentation errors by 75% with a custom-built automation system.",
            "Increased the company’s on-time delivery rate by 20% within the first quarter of system implementation.",
            "Successfully scaled operations to handle a 300% increase in shipment volume without a proportional increase in administrative staff."
        ],
        projects: [
            { title: "Automated Dispatch & Tracking System", caseStudyId: "dispatch-automation-expack" }
        ],
        tools: [
            { category: "Core Tools", items: ["Google Sheets", "Google Apps Script", "Logistics Management"] },
            { category: "Business", items: ["Operations Management", "Business Development", "Client Relations"] }
        ]
    }
];
