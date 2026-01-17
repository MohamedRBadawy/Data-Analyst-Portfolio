
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
        summary: "End-to-end ownership of the organization’s operational data infrastructure, from system architecture and workflow design to executive intelligence and automation.",
        contributions: [], // Deprecated in favor of contributionCategories
        achievements: [
            "Unified fragmented operational data into a single, automated source of truth.",
            "Shifted management culture from reactive firefighting to data-driven prevention.",
            "Institutionalized system ownership, reducing dependency on external vendors.",
            "Stabilized core operational metrics by enforcing process compliance through system design."
        ],
        projects: [
            { title: "Automated Deals Reporting System", caseStudyId: "automated-deals-reporting" },
            { title: "Manufacturing Defect Reduction Dashboard", caseStudyId: "manufacturing-qc-dashboard" },
            { title: "Global On-Time Performance Dashboard", caseStudyId: "otp-facilities-report" },
            { title: "Team Performance & SLA Dashboard", caseStudyId: "team-performance-dashboard" }
        ],
        tools: [
            { category: "Business Intelligence", items: ["Looker Studio (Expert)", "Tableau (Learning)", "Power BI (Learning)"] },
            { category: "Automation & Data", items: ["Google Sheets", "Google Apps Script", "Tulip", "SQL (Learning)", "Python (Learning)", "n8n"] },
            { category: "Core Skills", items: ["Process Optimization", "Workflow Design", "AI Workflow Design", "Systems Thinking"] }
        ],
        zohoExpertise: [],
        contributionCategories: [
            {
                id: "operational-intelligence",
                title: "Operational Intelligence & Dashboards",
                description: "Operational control systems used daily to manage throughput, SLAs, and decision-making.",
                items: [
                    {
                        title: "Global On-Time Performance Dashboard",
                        description: "Unified fragmented logistics data into a real-time performance view, stabilizing service levels and preventing contract risk.",
                        caseStudyId: "otp-facilities-report"
                    },
                    {
                        title: "Manufacturing Defect Reduction Dashboard",
                        description: "Replaced reactive defect tracking with facility-level visibility, enabling root-cause analysis and preventative process correction.",
                        caseStudyId: "manufacturing-qc-dashboard"
                    },
                    {
                        title: "Team Performance & SLA Dashboard",
                        description: "Standardized productivity metrics across the planning team, replacing subjective reviews with objective workload balancing.",
                        caseStudyId: "team-performance-dashboard"
                    }
                ],
                subSection: {
                    title: "Operational Analysis Modules",
                    description: "Supporting analytical modules used to diagnose bottlenecks, distributor behavior, and workload patterns within the operational spine.",
                    items: [
                        {
                            title: "Incoming Aligners per Distributor",
                            description: "Used to analyze intake volume patterns and inform staffing allocation for peak arrival days."
                        },
                        {
                            title: "Full-Service Cases Analysis by Distributor",
                            description: "Used to analyze high-value account behavior and inform priority support tiering."
                        },
                        {
                            title: "Treatment Plans Throughput & Load Analysis",
                            description: "Used to analyze team capacity limits and inform daily assignment distribution logic."
                        },
                        {
                            title: "Client Performance Board",
                            description: "Used to analyze individual client turnaround times and inform account management intervention strategies."
                        }
                    ],
                    footer: "These modules do not operate independently; they feed decisions into the primary operational dashboards and workflows."
                }
            },
            {
                id: "workflow-automation",
                title: "Workflow Automation",
                description: "Automation embedded directly into operational workflows to eliminate manual coordination and reduce decision latency.",
                items: [
                    {
                        title: "Automated Deals Reporting System",
                        description: "Automated complex pricing logic within the sales workflow, eliminating manual calculation bottlenecks and ensuring quote accuracy.",
                        caseStudyId: "automated-deals-reporting"
                    }
                ]
            },
            {
                id: "internal-tools",
                title: "Internal Tools & Web Apps",
                description: "Purpose-built internal tools created to support specific operational constraints where existing platforms fell short.",
                items: [
                    {
                        title: "Production Planning Utility",
                        description: "Replaced manual shift assignment with a constraint-based interface, aligning staff allocation with real-time production needs."
                    },
                    {
                        title: "Material Request Tracker",
                        description: "Digitized the raw material request process, reducing floor downtime by connecting requests directly to inventory."
                    }
                ]
            },
            {
                id: "ai-prototypes",
                title: "AI & Experimental Prototypes",
                description: "Exploratory systems used to test automation and decision support before formal integration into the operational spine.",
                items: [
                    {
                        title: "Manufacturing Execution System (MES) Prototype",
                        description: "Modeled production workflows on the Tulip platform to test real-time tracking capabilities prior to full-scale MES investment."
                    },
                    {
                        title: "AI Agent Integration Initiatives",
                        description: "Piloted autonomous agents for departmental tasks to validate feasibility of reducing manual administrative load."
                    }
                ]
            },
            {
                id: "enterprise-systems",
                title: "Enterprise Systems Ownership",
                description: "System ownership and configuration of core enterprise tools, ensuring they aligned with real operational workflows instead of tool defaults.",
                items: [
                    {
                        title: "Zoho Analytics",
                        description: "Established the organization’s central reporting infrastructure, aggregating disconnected data sources into a single executive truth."
                    },
                    {
                        title: "Zoho CRM",
                        description: "Structured sales data architecture to enforce process compliance and provide accurate pipeline visibility."
                    },
                    {
                        title: "Zoho Projects",
                        description: "Configured project lifecycles to mirror operational reality, ensuring accurate capacity planning and resource tracking."
                    },
                    {
                        title: "Zoho Desk",
                        description: "Integrated support workflows with production data, linking customer issues directly to operational root causes."
                    },
                    {
                        title: "Zoho Inventory",
                        description: "Automated stock monitoring logic to trigger reordering based on consumption rates rather than manual checks."
                    }
                ]
            }
        ],
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
