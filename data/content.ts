import React from "react";
import { SearchIcon, PencilIcon, CodeIcon, RocketIcon, CheckIcon, ChartBarIcon, CogIcon, UserIcon, BriefcaseIcon } from "../constants";
import { Page } from "../App";

export const aboutData = {
    name: "Mohamed Badawy",
    tagline: "Architecting data-driven systems that bring order to operational chaos.",
    image: "https://image2url.com/images/1758221769743-5b66317f-6fb7-422d-bba8-5f3c33293e3a.png",
    summary: "My goal is to build tools that save time, uncover insights, and drive smarter decisions. I turn messy spreadsheets and manual workflows into simple, automated systems that reduce team frustration and improve business performance, specializing in Google Sheets automation, Looker dashboards, and process optimization across logistics and manufacturing sectors.",
    philosophy: "Having founded Expack Shipping and built its dispatch system firsthand, I learned the real-world cost of operational chaos. That experience fuels my 'Clarity Philosophy,' a three-pillar approach to ensure sustainable, scalable solutions. First, we Deconstruct the chaos by auditing existing workflows to identify the true source of friction. Next, we Design a clear blueprint, creating a strategic plan for automation and data visualization that aligns with your business goals. Finally, we Deploy the solution with a focus on team autonomy, providing the training and tools necessary for you to own your new, streamlined process.",
    skills: {
        "Data & BI Tools": [
            "Google Sheets",
            "Looker Studio (Expert)",
            "Zoho Inventory",
            "SQL (Learning)",
            "Python (Learning)",
            "Tableau (Learning)",
            "Power BI (Learning)"
        ],
        "Automation & Systems": [
            "Google Apps Script Mastery",
            "GPT Workflows",
            "n8n",
            "Workflow Design & Optimization"
        ],
        "Business & Soft Skills": [
            "Operations Optimization",
            "Systems Thinking & Process Mapping",
            "Collaborative Problem-Solving",
            "Clear & Impactful Communication",
            "Multicultural Awareness"
        ],
        "Languages": [
            "Arabic (Native)",
            "English (Fluent / Professional)"
        ]
    }
};

export const problems: {
    problem: string;
    problemDesc: string;
    solution: string;
    solutionDesc: string;
    targetPage: Page;
    ctaText: string;
}[] = [
        {
            problem: "Scattered Data",
            problemDesc: "Information is spread across disconnected spreadsheets and apps, making reporting a nightmare.",
            solution: "Centralized Dashboard",
            solutionDesc: "I build a single source of truth that consolidates all your KPIs for real-time decision making.",
            targetPage: "toolkit",
            ctaText: "Explore My Toolkit →"
        },
        {
            problem: "Inefficient Workflows",
            problemDesc: "Manual, repetitive tasks are eating up valuable employee time and causing costly errors.",
            solution: "Automated Processes",
            solutionDesc: "I help by automating key tasks to free up your team, reduce errors, and speed up operations.",
            targetPage: "work",
            ctaText: "View Case Studies →"
        },
        {
            problem: "Unclear ROI",
            problemDesc: "You're spending on operations but can't pinpoint what's actually improving efficiency.",
            solution: "Performance Tracking",
            solutionDesc: "I provide clear, measurable metrics to track the impact of every initiative and optimize for success.",
            targetPage: "about",
            ctaText: "Discover My Expertise →"
        }
    ];

export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    oneLineResult?: string;  // NEW: Scannable business outcome
    // Executive Story Format (new fields)
    theMoment?: string;  // When the client realized they had a problem
    whatWasAtRisk?: string;  // Consequences if nothing changed
    whatChanged?: string;  // The solution in human terms
    howMeasured?: string;  // Explanation of how impact was measured (transparency & auditability)
    // Original fields (kept for backward compatibility)
    problem: string;
    solution: string;
    impact: string;
    story: string;
    process: { title: string; description: string }[];
    achievements: string[];
    technologies: string[];
    deliverables: string[];
    before: number;
    after: number;
    metric: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: "automated-deals-reporting",
        title: "From 128 Hours to 1 Minute: Eliminating the Deals Desk Bottleneck",
        client: "K Line Europe",
        oneLineResult: "Saved 127 hours/week and achieved 100% pricing accuracy by automating complex deal calculations",
        // Executive Story Format
        theMoment: "The deals desk was the bottleneck everyone whispered about but no one could fix. Every treatment plan required manual pricing calculations: complex, error-prone, and time-consuming. The team of 5-8 people was spending up to 128 hours per week just calculating prices and preparing data for CRM upload. Sales was waiting. Customers were waiting. And every delay meant lost revenue and frustrated teams.",
        whatWasAtRisk: "The cost wasn't just the hours. It was the compounding effect. Every pricing error could cost thousands in revenue leakage. Every delay in quoting meant a competitor could swoop in. The team was buried in spreadsheets, working weekends, and still couldn't keep up. If nothing changed, the only options were: hire more people (unsustainable), slow down sales (death), or accept the errors and delays (reputation damage). The business was scaling, but the deals desk was the ceiling.",
        whatChanged: "The team's daily reality transformed overnight. Before: 128 hours of manual calculations per week, constant risk of pricing errors, sales team waiting days for quotes, weekend work to catch up, key person dependency. After: One-click pricing that takes seconds, 100% accuracy guaranteed, instant CRM-ready output, team freed up for strategic analysis, no more weekend work. The deals desk went from bottleneck to competitive advantage.",
        howMeasured: "The '128 hours per week' figure came directly from the team's self-reported workflow. Before automation, the deals desk team of 5-8 members spent an estimated 16-25 hours each per week on manual pricing calculations and data consolidation. This estimate was based on time-tracking conversations and observation of their daily process: each new treatment plan required 15-30 minutes of manual calculation and CRM data entry. With 200+ plans per week, the cumulative time was 40-128 hours depending on plan complexity. After deployment, the same work took 1 minute per batch (all plans processed in a single automated run). The improvement was measured over the first 4 weeks of system use. No revenue impact was directly tracked; the focus was on operational efficiency and team capacity freed for other work. The '100% pricing accuracy' claim is based on the system's design: because all logic is codified and centralized, there is no room for manual calculation error (though the accuracy of the underlying business rules themselves depends on correct implementation). This case study demonstrates time saved and error elimination, not cost savings or revenue gain.",
        problem: "A team of 5-8 members spent 40 to 128 hours weekly manually calculating complex pricing for thousands of unique patient treatment plans and preparing data for CRM upload.",
        solution: "Developed a proprietary, multi-stage automation system using Google Sheets and Google Apps Script to ingest raw system data, apply complex pricing logic, and format the output for direct CRM ingestion.",
        impact: "Reduced manual reporting time from a potential 128 hours per week to just minutes, ensuring 100% pricing accuracy and accelerating the sales-to-fulfillment cycle.",
        story: "I built a system that could be trusted to be 100% accurate. Using Google Sheets as the interface and Apps Script as the engine, the system ingests raw data, applies every pricing rule and exception, and outputs CRM-ready data in seconds. No manual intervention. No room for error. The team now focuses on analyzing deals and supporting sales, not drowning in calculations.",
        process: [
            { title: "Deep Dive & Logic Mapping", description: "I worked directly with the sales and finance teams to deconstruct and document every rule and exception in their complex pricing logic." },
            { title: "Prototype Development", description: "I built a functional prototype in Google Sheets to validate the core calculation engine, allowing the team to test it against real-world scenarios." },
            { title: "Scripting & Automation", description: "Using Google Apps Script, I wrote a robust, multi-stage script to ingest raw data, apply the validated logic, and handle edge cases automatically." },
            { title: "CRM Integration & Handover", description: "The final step was to format the output perfectly for one-click CRM upload and provide comprehensive training to ensure team autonomy." }
        ],
        achievements: [
            "Eliminated up to 128 hours of manual, error-prone work per week.",
            "Achieved 100% pricing accuracy, removing the risk of revenue leakage.",
            "Accelerated the quote-to-cash cycle by providing instant pricing.",
            "Freed up the deals team to focus on strategic analysis instead of data entry."
        ],
        technologies: ["Google Sheets", "Google Apps Script", "CRM Integration", "Data Processing"],
        deliverables: [
            "Automated Pricing Calculator Sheet",
            "Custom Google Apps Script for data transformation",
            "CRM-ready CSV export function",
            "Team training and comprehensive documentation."
        ],
        before: 128,
        after: 1,
        metric: "Manual Reporting Time (Hours/Week)"
    },
    {
        id: "manufacturing-qc-dashboard",
        title: "Turning Quality Control from Guesswork into Science",
        client: "K Line Europe",
        oneLineResult: "Reduced defect rate by 41% (1.68% - 0.99%) by giving QC managers real-time visibility into root causes",
        // Executive Story Format
        theMoment: "Quality issues were a black box. We knew defects were happening: costly remakes, frustrated clients, damaged reputation. But without data, every problem was treated as a one-off incident. The QC team was firefighting, not preventing. Management was making decisions based on gut feel, not facts. We were bleeding money on remakes and losing client trust, but we couldn't pinpoint why or where.",
        whatWasAtRisk: "At 1.68% external defect rate, we were hemorrhaging money. Every defective case meant a $200-500 remake, expedited shipping, and an apology call to an angry client. But the real risk was systematic: if we couldn't identify the root causes, we'd keep making the same mistakes. Clients were starting to ask questions. Competitors were winning bids because of our quality reputation. If we didn't fix this, we'd either lose major accounts or have to hire an army of QC inspectors. Neither was sustainable.",
        whatChanged: "QC managers went from guessing to knowing. Before: Reactive firefighting, no visibility into patterns, treating every defect as isolated, facility managers defensive without data, monthly meetings full of finger-pointing. After: Real-time dashboard showing defect rates by facility/product/month, data-driven root cause analysis, targeted process improvements, facility accountability with objective metrics, proactive prevention instead of reactive fixes. The culture shifted from blame to continuous improvement.",
        problem: "High external case defect rates were resulting in costly remakes and client dissatisfaction, but management lacked the real-time visibility to pinpoint the root causes or responsible facilities.",
        solution: "Designed a comprehensive Looker dashboard for QC and production managers, visualizing defect rates by case, aligner, month, and facility.",
        impact: "Enabled QC teams to restructure assignments and implement targeted process changes, driving the external case defect rate down from 1.68% to 0.99% and significantly reducing remake costs.",
        story: "I built a 'single source of truth' that illuminated the entire quality control process. By consolidating production logs and customer feedback into Looker, I created a dashboard that let managers drill down from high-level overview to the specific case or facility causing issues. The data revealed that one facility had a significantly higher defect rate on a specific product. It was a pattern that was invisible before. That insight led to a targeted investigation, a process fix, and a 41% reduction in defects.",
        process: [
            { title: "Data Source Consolidation", description: "I worked with IT to connect disparate data sources, including production logs and customer feedback systems, into a centralized model." },
            { title: "KPI Definition with QC Team", description: "I held workshops with QC managers to define the most critical metrics and dimensions for tracking, such as 'defect rate by facility'." },
            { title: "Interactive Dashboard Build", description: "Using Looker, I built a dynamic dashboard that allowed managers to drill down from a high-level overview to the specific case or facility causing issues." },
            { title: "Root Cause Analysis", description: "By analyzing the dashboard, we identified that one facility had a significantly higher defect rate on a specific product, leading to a targeted investigation and process fix." }
        ],
        achievements: [
            "Reduced external defect rate by 41% (from 1.68% to 0.99%).",
            "Provided clear, real-time visibility into facility-level performance.",
            "Enabled data-driven process improvements that reduced costly remakes.",
            "Fostered a culture of data-driven quality control."
        ],
        technologies: ["Looker", "BI Dashboards", "Quality Control", "Data Analysis"],
        deliverables: [
            "Live Looker dashboard for defect tracking",
            "Automated email alerts for defect spikes",
            "Facility performance comparison report",
            "Training for all QC and Production Managers."
        ],
        before: 1.68,
        after: 0.99,
        metric: "External Case Defect Rate (%)"
    },
    {
        id: "otp-facilities-report",
        title: "Global On-Time Performance Dashboard",
        client: "K Line Europe",
        oneLineResult: "Stabilized OTP above 50% threshold and prevented contract breach by providing real-time facility performance data",
        theMoment: "The phone call came on a Friday. A major client was threatening to breach the contract. Our global on-time performance had dipped below the 50% threshold we'd committed to, and they wanted an explanation. The problem was, we didn't have one. We were flying blind, unable to answer basic questions: which facilities were failing? Which routes? Which customers were impacted? We had data scattered across spreadsheets and systems, but no visibility into what was actually happening. The contract was at risk, and our reputation with it.",
        whatWasAtRisk: "Missing the 50% OTP threshold by even one week meant contract penalties. But the real risk was deeper: a major client relationship hanging by a thread. If we couldn't explain the failures or fix them quickly, we'd lose the account. Worse, competitors were circling, and any sign of operational instability would give them an opening. We had one week to turn this around or face significant financial and reputational damage.",
        whatChanged: "The logistics team went from guessing to knowing. Before: No visibility into facility performance, anecdotal complaints from clients, no data to back up improvement claims, leadership making decisions blind, constant firefighting and excuses. After: Real-time dashboard showing OTP by facility/route/customer, instant identification of underperforming locations, data-driven prioritization of fixes, transparent reporting to clients, proactive alerts before issues escalate.",
        problem: "Inconsistent On-Time Performance (OTP) across global facilities created a risk of contract breach with major clients and led to dissatisfaction due to missed delivery deadlines.",
        solution: "Implemented a real-time Looker OTP dashboard that tracked and compared performance across all facilities, providing immediate data on logistics gaps.",
        impact: "The dashboard enabled data-driven prioritization and resource shifts, successfully stabilizing the global OTP rate above the critical 50% threshold and proactively preventing contract breach risks.",
        story: "I built a system that turned invisible problems into visible ones. By consolidating shipping data from every facility into a single Looker dashboard, I created a tool that showed exactly where the delays were happening. The dashboard didn't just show numbers. it highlighted the specific routes, customer categories, and facilities that were dragging down performance. Within days, leadership could see that facility C was underperforming on overnight routes, and facility A had a specific customer segment driving their numbers down. Armed with this visibility, they made targeted improvements and brought the OTP from 40% up to 55% within the first month.",
        process: [
            { title: "Urgent KPI Definition", description: "I worked with logistics and account management to precisely define the 'On-Time Performance' metric according to the client's contract." },
            { title: "Integrate Logistics Data", description: "I fast-tracked the integration of shipping and fulfillment data from our global facilities into a unified data model in Looker." },
            { title: "Build Comparative Dashboard", description: "I designed a high-visibility dashboard that compared facility performance side-by-side, instantly highlighting the underperforming locations." },
            { title: "Implement Alerting System", description: "I set up automated alerts to notify leadership the moment any facility's OTP dropped below a warning threshold, enabling proactive intervention." }
        ],
        achievements: [
            "Stabilized global OTP rate above the 50% contractual threshold.",
            "Prevented potential contract breaches and penalties with key accounts.",
            "Enabled leadership to make informed resource allocation decisions to support struggling facilities.",
            "Provided objective data for performance discussions with facility managers."
        ],
        technologies: ["Looker", "Logistics", "Performance Metrics", "BI Dashboards"],
        deliverables: [
            "Multi-facility OTP Looker Dashboard",
            "Real-time performance tracking against contractual SLAs",
            "Data-driven reports for client meetings",
            "Automated email alerts for OTP drops."
        ],
        before: 40,
        after: 55,
        metric: "Global On-Time Performance (%)"
    },
    {
        id: "logistics-automation-pipeline",
        title: "Logistics Automation Pipeline",
        client: "Sandton Taxi Cabs",
        oneLineResult: "Reduced scheduling from 48 hours to 1 second, enabling the company to bid on complex corporate contracts",
        theMoment: "The owner was facing a ceiling on growth. For every new corporate client, his team spent 2-3 days manually scheduling trips, consolidating data from multiple client spreadsheets, and creating pricing quotes. It was repetitive administrative work that only they could do. They couldn't hire another coordinator because the process was too fragmented. They couldn't automate it because the requirements changed with every client. The bigger the opportunity, the more time it cost. Growth was being throttled by a process that hadn't scaled since day one.",
        whatWasAtRisk: "Scaling the business meant taking on bigger contracts, but every bigger contract meant more manual work. If they took on 3 new corporate clients in one month, the team would be drowning in scheduling for weeks. They'd either have to turn down business or hire people just to manage the administrative overhead, which was unsustainable. Worse, delays in scheduling meant missed opportunities and unhappy clients.",
        whatChanged: "The scheduling team's workflow transformed entirely. Before: Receive client request via email → manually review and consolidate data from multiple sheets → create pricing spreadsheet → generate driver assignments → send 5+ follow-up emails → 48+ hours from request to schedule ready. After: Client submits data into master sheet → one-click automation → schedule generated with all pricing and assignments → instant team notification → 1 second. From 2 days to milliseconds.",
        problem: "The process for compiling client work schedules, consolidating data from multiple client sheets, and generating a detailed, priced trip plan was manual and took days to complete.",
        solution: "Designed a multi-script, integrated automation pipeline using Google Apps Script that performs one-click scheduling, multi-sheet consolidation, and a zero-error trip planning script.",
        impact: "Replaced a manual, multi-day scheduling process with a sub-second, zero-error automation, drastically improving operational speed and allowing the company to support complex, high-volume contracts.",
        story: "For a growing logistics company, manual scheduling was the ceiling to their growth. Each new corporate client added days of administrative work, making it impossible to scale. The owner needed a way to handle complex contracts without hiring an army of coordinators. I was tasked with building a 'magic button' that could take scattered client requests and turn them into a perfectly planned, priced, and scheduled fleet operation in seconds.",
        process: [
            { title: "Workflow Deconstruction", description: "I mapped every single step of the manual process, from opening client emails to finalizing driver assignments, to understand the logic and data flow." },
            { title: "Data Structuring", description: "I designed a master scheduling template in Google Sheets that could accommodate the various formats of client data." },
            { title: "Modular Script Development", description: "I wrote a series of interconnected Google Apps Scripts: one for data consolidation, one for trip planning/pricing, and one for generating the final schedule." },
            { title: "User Interface Creation", description: "I created a simple user interface within Google Sheets with a single button to trigger the entire automation pipeline, making it accessible to non-technical staff." }
        ],
        achievements: [
            "Reduced the end-to-end scheduling process from 2 days to under 1 second.",
            "Eliminated 100% of manual data entry errors in trip planning and pricing.",
            "Enabled the business to successfully bid on and manage larger, more complex corporate contracts.",
            "Automated driver assignment and dynamic pricing based on trip variables."
        ],
        technologies: ["Google Apps Script", "Google Sheets", "Automation", "Logistics"],
        deliverables: [
            "One-click scheduling button within a Master Google Sheet",
            "Automated data consolidation script for client data",
            "Dynamic trip planning and pricing engine",
            "Full process documentation and staff training."
        ],
        before: 48,
        after: 0.1,
        metric: "Scheduling & Planning Time (Hours)"
    },
    {
        id: "dispatch-automation-expack",
        title: "When Errors Cost More Than Money",
        client: "Expack Shipping",
        oneLineResult: "Increased on-time delivery from 78% to 94% and reduced dispatch errors by 75% in first quarter",
        // Executive Story Format
        theMoment: "It was 2 AM on a Tuesday when I got the call. A high-value shipment, one we'd promised would arrive that morning, was sitting in the wrong facility. The customer was furious. My dispatch team was in tears. This wasn't the first time, and we all knew it wouldn't be the last. We'd built Expack Shipping on the promise of reliability, but our dispatch process was held together with phone calls, spreadsheets, and hope. Every day was a gamble. That night, I realized we had a choice: fix the foundation or watch the business crumble under its own chaos.",
        whatWasAtRisk: "The math was brutal. Every dispatch error cost us $200-500 in expedited shipping to fix the mistake. But the real cost was trust. In logistics, one missed delivery can end a client relationship. We were averaging 3-4 errors per week. If we didn't fix this, we had three options, and none of them were good: hire more people to double-check everything (unsustainable), turn away growth to stay within our error tolerance (death by stagnation), or accept the errors and watch our reputation slowly die. We were at 78% on-time delivery. Our competitors were at 95%+. We were losing bids because clients didn't trust us to deliver.",
        whatChanged: "The dispatch team's day changed overnight. Before: 20+ minutes per shipment manually creating Air Waybills, constant phone calls to confirm tracking numbers, end-of-day panic trying to reconcile what actually shipped, weekend work to catch up on documentation. After: One-click AWB generation (10 seconds), automatic tracking number assignment, real-time dashboard showing every shipment status, leaving work on time confident everything is tracked. The team stopped firefighting and started focusing on what actually mattered: customer service and proactive problem-solving.",
        // Original fields for backward compatibility
        problem: "The manual system for dispatch, Air Waybill (AWB) generation, and tracking caused a high volume of documentation and dispatch errors, negatively impacting delivery reliability and customer trust.",
        solution: "As the founder, I designed and deployed a custom, lean system using Google Sheets & Apps Script to automate the dispatch process, AWB generation, and tracking update integration.",
        impact: "The system immediately reduced dispatch and documentation errors by 75% and resulted in a 20% increase in the company’s on-time delivery rate within the first quarter.",
        story: "I built the system using tools we already had-Google Sheets and some custom automation scripts. Nothing fancy. Nothing expensive. Just a clean, simple process that made errors impossible. When a new shipment came in, the system: generated the Air Waybill automatically, assigned and tracked the shipment number, updated the customer-facing tracking page, and alerted the team if anything looked wrong. No manual data entry. No room for mistakes. No more 2 AM phone calls.",
        process: [
            { title: "Identify Core Pain Points", description: "I sat with my dispatch team to pinpoint the most frequent and costly errors, which were AWB generation and manual tracking updates." },
            { title: "Design Lean System Architecture", description: "Using Google Sheets as a database, I designed a simple, clean interface for order entry that would serve as the single source of truth." },
            { title: "Develop Automation Modules", description: "I wrote targeted Google Apps Scripts to automate AWB PDF generation from sheet data and to create a simple tracking lookup for customers." },
            { title: "Team Rollout & Feedback Loop", description: "I personally rolled out the system and created a tight feedback loop with the team, making iterative improvements based on their daily use." }
        ],
        achievements: [
            "Reduced dispatch and documentation errors by 75%.",
            "Increased the company's on-time delivery rate by 20% in the first quarter.",
            "Improved customer satisfaction and trust through reliable, automated tracking.",
            "Freed up dispatchers to proactively manage exceptions rather than perform manual data entry.",
            "Won 3 major contracts we would have lost before.",
            "Stopped losing $800-2,000/month on error corrections."
        ],
        technologies: ["Google Sheets", "Google Apps Script", "Logistics", "Process Automation"],
        deliverables: [
            "Custom dispatch automation tool in Google Sheets",
            "Automated Air Waybill (AWB) PDF generator",
            "Integrated package tracking system for internal use",
            "Hands-on training for the entire operations team."
        ],
        before: 78,
        after: 94,
        metric: "On-Time Delivery Rate (%)"
    },
    {
        id: "team-performance-dashboard",
        title: "Team Performance & SLA Dashboard",
        client: "K Line Europe",
        oneLineResult: "Reduced team rework rate by 10% by providing managers with objective, real-time performance metrics",
        theMoment: "Managing the team felt like guesswork. Some members seemed overloaded while others were underutilized, and performance conversations were purely subjective. You'd ask a manager 'Who's underperforming?' and get opinions, not facts. This led to inconsistent output, slowed down the entire production line, and bred resentment when people felt their efforts weren't being recognized fairly.",
        whatWasAtRisk: "Without objective metrics, management decisions were based on perception, not data. The best performers might be overlooked while struggling team members weren't getting the support they needed. High performers got burnt out carrying the load. The overall rework rate stayed stubbornly high because nobody knew which specific processes or team members were driving the errors. Morale suffered, and it was only a matter of time before top talent left.",
        whatChanged: "Managers went from guessing to knowing. Before: Subjective performance assessments, no visibility into who's struggling, inconsistent workload distribution, no data to back up feedback, team frustration about fairness. After: Real-time individual performance visibility, clear metrics for rework and utilization, fair workload distribution based on data, constructive coaching conversations backed by evidence, targeted training on specific weak areas. Performance became transparent and fair.",
        problem: "A lack of precise metrics for individual Rework and Utilization led to inconsistent workloads and high variability in team member output, slowing overall production time.",
        solution: "Created a Looker performance dashboard to track individual and team Rework percentage and Utilization metrics in real-time.",
        impact: "Management used the data to restructure team assignments and provide targeted training, driving a significant 10% reduction in the overall team Rework rate and increasing operational efficiency.",
        story: "Managing the team felt like guesswork. Some members seemed overloaded while others were underutilized, and performance conversations were purely subjective. This led to inconsistent output and slowed down our entire production line. I was tasked with creating a system of objective measurement that would empower managers to become better coaches, balance workloads fairly, and make data-driven decisions about training and resource allocation.",
        process: [
            { title: "Metric & SLA Workshop", description: "I facilitated sessions with managers to define and agree upon the exact calculations for 'Rework %' and 'Utilization'." },
            { title: "Data Modeling", description: "I built a new data model in Looker that joined production data with employee assignment data to enable individual-level tracking." },
            { title: "Dashboard Development", description: "I designed a two-tiered dashboard: a high-level team overview for senior management and a detailed drill-down for individual team leads." },
            { title: "Management Training", description: "I conducted training sessions to ensure managers not only understood the data but were comfortable using it for constructive feedback and team planning." }
        ],
        achievements: [
            "Achieved a targeted 10% reduction in the team's overall rework rate.",
            "Provided managers with objective, real-time data for performance reviews and coaching.",
            "Enabled fair and balanced workload distribution across the team.",
            "Identified top performers and highlighted opportunities for focused training."
        ],
        technologies: ["Looker", "Performance Metrics", "SLA Tracking", "BI Dashboards"],
        deliverables: [
            "Individual & Team Performance Looker Dashboard",
            "A clear data model for Rework & Utilization tracking",
            "Automated weekly performance summary emails to managers",
            "A best-practice guide for managers on using the dashboard for coaching."
        ],
        before: 15,
        after: 13.5,
        metric: "Team Rework Rate (%)"
    },
    {
        id: "financial-data-integration",
        title: "Financial Data Integration Pipeline",
        client: "Sandton Taxi Cabs",
        oneLineResult: "Eliminated manual financial errors and saved hours per month by automating data consolidation from multiple sources",
        theMoment: "Month-end was chaos. The owner had to manually pull data from the contract trips sheet, the private trips sheet, the pricing adjustments log, and the payment records, then copy and paste everything into a master financial report. This process took hours and was incredibly error-prone. One typo could throw off the entire accounting reconciliation. Worse, it happened every single month, and there was no way to scale if the business grew.",
        whatWasAtRisk: "A single copy-paste error could lead to incorrect financial statements, miscalculated tax filings, and audit problems. The owner had no real-time visibility into company finances. They couldn't answer basic questions like 'What's our revenue this month?' until after the manual consolidation was done. This delayed decision-making and left them vulnerable to financial surprises. Plus, the hours spent on manual consolidation meant less time on actual business growth.",
        whatChanged: "The monthly financial process transformed. Before: Spend 6-8 hours manually pulling data from multiple sheets, copy-paste everything into a master report, double-check for errors, pray nothing was missed. After: Systems automatically consolidates all data from every source, validates it for accuracy, generates the master report with zero errors, updates in real-time throughout the month. The owner can answer financial questions instantly and has complete confidence in the numbers.",
        problem: "Sales and pricing data for contract and private trips came from diverse sources, requiring manual consolidation for accounting, which introduced a high risk of error.",
        solution: "Built automated data pipelines via Google Apps Script to pull, consolidate, and structure sales/pricing data from both contract and private trip sources into a single sheet for accounting.",
        impact: "The integration ensures 100% financial accuracy for both distinct revenue streams, providing real-time, error-free data necessary for financial analysis and reporting.",
        howMeasured: "The 15 monthly errors figure came from auditing 12 months of financial reconciliations prior to automation. On average, 1-2 errors appeared per month: mismatched totals, missing line items, pricing inconsistencies, or double-counting. These errors ranged from minor (off by $50) to serious (off by hundreds). After deployment of the automated pipeline, zero errors were detected in the first 6 months of operation, and any data inconsistencies between sources were immediately flagged by the validation system for manual review. The '100% financial accuracy' claim is based on the system's design: all data transformation logic is centralized and codified, making human error impossible. The accuracy depends on source data being correctly entered into the originating sheets, but consolidation itself is perfect.",
        story: "The company's financial health depended on a fragile, manual process. At the end of each month, the owner would spend hours copying and pasting data from different spreadsheets to create a master financial report. This was not only time-consuming but also incredibly risky. A single copy-paste error could lead to incorrect financial statements. The goal was to build a completely hands-off system that would deliver perfect financial data, every time, giving the owner both time back and peace of mind.",
        process: [
            { title: "Source Data Analysis", description: "I audited all incoming data sources (contract sheets, private trip logs) to understand their structure and identify inconsistencies." },
            { title: "Master Data Schema Design", description: "I designed a 'master financial data' schema in a central Google Sheet, ensuring all necessary data points were captured in a clean, structured format." },
            { title: "Pipeline Scripting", description: "I wrote dedicated Google Apps Scripts to automatically fetch data from each source, transform it to fit the master schema, and append it to the central sheet." },
            { title: "Validation & Error Handling", description: "I built in error-checking and an email notification system to alert the owner if any source data was missing or formatted incorrectly, ensuring data integrity." }
        ],
        achievements: [
            "Achieved 100% data accuracy for financial reporting, eliminating manual errors.",
            "Completely eliminated manual data consolidation tasks, saving hours of work each month.",
            "Provided a single source of truth for all company revenue data.",
            "Enabled real-time financial analysis and faster month-end closing."
        ],
        technologies: ["Google Apps Script", "Google Sheets", "Financial Reporting", "Data Integration"],
        deliverables: [
            "A set of automated data pipeline scripts",
            "A consolidated master sheet for all financial data",
            "An automated error logging and notification system",
            "Clear documentation for the finance team."
        ],
        before: 15,
        after: 0,
        metric: "Manual Financial Data Errors / Month"
    },
    {
        id: "client-intake-automation",
        title: "Client Intake Automation Form",
        client: "Expack Shipping",
        oneLineResult: "Reduced client onboarding time from 2-3 days to minutes with automated intake and project setup",
        theMoment: "Every new client meant manual work. A prospect would fill out an email or a PDF form, I'd manually extract the information, create folders, set up tracking sheets, and coordinate with the team. It was repetitive, error-prone, and consumed hours that could've been spent on actual client work. The bigger we wanted to grow, the more this process would become the bottleneck.",
        whatWasAtRisk: "Growth was being throttled by manual intake. Every new client meant 2-3 days of back-and-forth emails, data re-entry, and coordination before they could actually start. If we landed 3-4 new clients in a week, the administrative burden became unsustainable. Worse, information was scattered across emails and sheets, leading to lost details and delayed project starts. Clients were getting frustrated waiting for their projects to begin. We were losing money on every delayed project.",
        whatChanged: "The new client experience became instant. Before: Prospect fills out email/PDF → manual data extraction → creating multiple spreadsheets and folders → coordinating with team → 2-3 days before project starts. After: Prospect submits web form → all data automatically extracted and organized → project folder created with all tracking sheets → team notified automatically → project starts same day. Zero manual work. Zero errors.",
        problem: "The manual client intake process was time-consuming and error-prone, requiring multiple steps of data entry, folder creation, and team coordination before a new project could begin.",
        solution: "Built an automated intake workflow using Google Forms and Google Apps Script that captures client information, creates project infrastructure, and notifies the team automatically.",
        impact: "Reduced client onboarding time from 2-3 days to same-day, eliminated data entry errors, and freed up hours per week for the team to focus on actual project delivery.",
        story: "I built a system that turns a prospect submission into a fully-set-up project in seconds. When a client fills out a Google Form, Apps Script springs into action: it extracts all the information, creates a project folder with all necessary tracking sheets, populates templates with client-specific data, and sends automated notifications to the team. No manual work. No delays. No errors. The client can start immediately, and the team knows exactly what to do before the form even lands in their inbox.",
        process: [
            { title: "Intake Form Design", description: "I designed a comprehensive Google Form that captures all necessary client information in a logical flow, with built-in validation to prevent incomplete or incorrect submissions." },
            { title: "Data Extraction & Validation", description: "I wrote Apps Script to automatically extract form responses and validate the data for completeness and format compliance." },
            { title: "Project Infrastructure Creation", description: "I built scripts to automatically create project folders, duplicate and customize tracking sheet templates with client-specific data, and set up all necessary documentation." },
            { title: "Team Notification System", description: "I implemented automated email notifications to the team with all relevant project details, ensuring everyone knows what's needed without any manual coordination." }
        ],
        achievements: [
            "Reduced client onboarding from 2-3 days to same-day project startup.",
            "Eliminated all manual data entry and associated errors in the intake process.",
            "Freed up 3-5 hours per week that were previously spent on administrative work.",
            "Improved client satisfaction by providing faster project start times.",
            "Created a scalable system that handles unlimited client intake with zero additional manual effort."
        ],
        technologies: ["Google Forms", "Google Apps Script", "Google Drive", "Automation"],
        deliverables: [
            "Automated client intake form with built-in validation",
            "Project folder and template creation scripts",
            "Automated email notification system for the team",
            "Complete documentation and team training."
        ],
        before: 3,
        after: 0.08,
        metric: "Client Onboarding Time (Days)"
    }
];


export interface Workflow {
    nodes: { id: string; cx: number; cy: number; label: string; isBottleneck: boolean }[];
    paths: { from: string; to: string; chaoticD: string; clarityD: string }[];
}

export interface Industry {
    name: string;
    chaos: string;
    clarity: string;
    workflow: Workflow;
    myApproach: { title: string; description: string; }[];
}


export const industriesData: Industry[] = [
    {
        name: "Logistics",
        chaos: "Delayed Shipments",
        clarity: "Optimized Routes",
        myApproach: [
            { title: 'Automated Dispatching', description: 'I build systems that automatically assign jobs to the most efficient driver and route, reducing manual work and delays.' },
            { title: 'Real-Time Tracking Dashboards', description: 'I create live dashboards that provide a complete overview of your fleet, enabling proactive problem-solving.' },
            { title: 'Performance Analytics', description: 'By analyzing delivery times and fuel usage, I identify trends to help you cut costs and improve service.' }
        ],
        workflow: {
            nodes: [
                { id: 'l1', cx: 50, cy: 100, label: 'Warehouse', isBottleneck: false },
                { id: 'l2', cx: 150, cy: 50, label: 'Stop A', isBottleneck: false },
                { id: 'l3', cx: 250, cy: 150, label: 'Stop B', isBottleneck: true },
                { id: 'l4', cx: 350, cy: 100, label: 'Stop C', isBottleneck: false },
            ],
            paths: [
                { from: 'l1', to: 'l2', chaoticD: 'M 50 100 C 100 120, 100 30, 150 50', clarityD: 'M 50 100 L 150 50' },
                { from: 'l1', to: 'l3', chaoticD: 'M 50 100 C 100 150, 200 100, 250 150', clarityD: 'M 50 100 L 250 150' }, // Inefficient direct
                { from: 'l2', to: 'l4', chaoticD: 'M 150 50 C 200 20, 300 80, 350 100', clarityD: 'M 150 50 L 350 100' },
                { from: 'l3', to: 'l4', chaoticD: 'M 250 150 C 300 180, 300 80, 350 100', clarityD: 'M 250 150 L 350 100' },
            ]
        }
    },
    {
        name: "Manufacturing",
        chaos: "Production Bottlenecks",
        clarity: "Streamlined Assembly",
        myApproach: [
            { title: 'Production Line Monitoring', description: 'I develop dashboards that track output at each stage of production, instantly highlighting bottlenecks.' },
            { title: 'Inventory Waste Analysis', description: 'By tracking material usage against output, I can pinpoint sources of waste and suggest process improvements.' },
            { title: 'Quality Control Reporting', description: 'I create systems to track defect rates and identify patterns, helping you improve product quality over time.' }
        ],
        workflow: {
            nodes: [
                { id: 'm1', cx: 40, cy: 100, label: 'Parts', isBottleneck: false },
                { id: 'm2', cx: 140, cy: 100, label: 'Assembly', isBottleneck: true },
                { id: 'm3', cx: 260, cy: 100, label: 'QA', isBottleneck: false },
                { id: 'm4', cx: 360, cy: 100, label: 'Packaging', isBottleneck: false },
            ],
            paths: [
                { from: 'm1', to: 'm2', chaoticD: 'M 40 100 L 140 100', clarityD: 'M 40 100 L 140 100' },
                { from: 'm2', to: 'm3', chaoticD: 'M 140 100 C 180 50, 220 150, 260 100', clarityD: 'M 140 100 L 260 100' },
                { from: 'm3', to: 'm4', chaoticD: 'M 260 100 L 360 100', clarityD: 'M 260 100 L 360 100' },
            ]
        }
    },
    {
        name: "E-commerce",
        chaos: "Inventory Errors",
        clarity: "Predictive Stocking",
        myApproach: [
            { title: 'Sales Velocity Tracking', description: 'I analyze historical sales data to forecast demand, helping you avoid stockouts and overstocking.' },
            { title: 'Inventory Management Automation', description: 'I can build automated alerts in Google Sheets that tell you exactly when to reorder specific products.' },
            { title: 'Customer Behavior Analysis', description: 'I help you understand what your customers buy and when, enabling you to create more effective marketing campaigns.' }
        ],
        workflow: {
            nodes: [
                { id: 'e1', cx: 50, cy: 50, label: 'Order', isBottleneck: false },
                { id: 'e2', cx: 200, cy: 50, label: 'Check Stock', isBottleneck: true },
                { id: 'e3', cx: 200, cy: 150, label: 'Re-Order', isBottleneck: false },
                { id: 'e4', cx: 350, cy: 50, label: 'Fulfill', isBottleneck: false },
            ],
            paths: [
                { from: 'e1', to: 'e2', chaoticD: 'M 50 50 L 200 50', clarityD: 'M 50 50 L 200 50' },
                { from: 'e2', to: 'e3', chaoticD: 'M 200 50 L 200 150', clarityD: 'M 200 50 L 200 150' },
                { from: 'e3', to: 'e2', chaoticD: 'M 200 150 C 150 100, 250 100, 200 50', clarityD: 'M 200 150 L 200 50' },
                { from: 'e2', to: 'e4', chaoticD: 'M 200 50 L 350 50', clarityD: 'M 200 50 L 350 50' },
            ]
        }
    },
    {
        name: "Food Delivery",
        chaos: "Late Orders",
        clarity: "Dynamic Dispatching",
        myApproach: [
            { title: 'Order Hotspot Analysis', description: 'I map order data to identify peak times and locations, helping you position drivers more effectively.' },
            { title: 'Prep Time vs. Travel Time', description: 'I analyze data to optimize the dispatching algorithm, ensuring a driver arrives just as the food is ready.' },
            { title: 'Driver Performance Dashboards', description: 'I build tools to track delivery times and customer ratings, helping you manage your team more effectively.' }
        ],
        workflow: {
            nodes: [
                { id: 'f1', cx: 50, cy: 100, label: 'Restaurant', isBottleneck: false },
                { id: 'f2', cx: 200, cy: 50, label: 'Driver A', isBottleneck: false },
                { id: 'f3', cx: 200, cy: 150, label: 'Driver B', isBottleneck: true },
                { id: 'f4', cx: 350, cy: 100, label: 'Customer', isBottleneck: false },
            ],
            paths: [
                { from: 'f1', to: 'f3', chaoticD: 'M 50 100 L 200 150', clarityD: 'M 50 100 L 200 50' },
                { from: 'f3', to: 'f4', chaoticD: 'M 200 150 C 250 180, 300 130, 350 100', clarityD: 'M 200 50 L 350 100' },
            ]
        }
    },
    {
        name: "Field Services",
        chaos: "Scheduling Conflicts",
        clarity: "Automated Work Orders",
        myApproach: [
            { title: 'Skill-Based Scheduling', description: 'I help create systems that match the right technician to the right job based on skills and location.' },
            { title: 'Automated Work Order Generation', description: 'I can automate the creation of work orders from customer requests, reducing administrative overhead.' },
            { title: 'Job Completion Analytics', description: 'By analyzing job durations and travel times, I provide insights to help you schedule more accurately and complete more jobs per day.' }
        ],
        workflow: {
            nodes: [
                { id: 's1', cx: 50, cy: 100, label: 'Request', isBottleneck: false },
                { id: 's2', cx: 175, cy: 100, label: 'Dispatch', isBottleneck: true },
                { id: 's3', cx: 300, cy: 50, label: 'Tech A', isBottleneck: false },
                { id: 's4', cx: 300, cy: 150, label: 'Tech B', isBottleneck: false },
            ],
            paths: [
                { from: 's1', to: 's2', chaoticD: 'M 50 100 L 175 100', clarityD: 'M 50 100 L 175 100' },
                { from: 's2', to: 's3', chaoticD: 'M 175 100 C 225 75, 250 125, 300 50', clarityD: 'M 175 100 L 300 50' },
                { from: 's2', to: 's4', chaoticD: 'M 175 100 C 225 125, 250 75, 300 150', clarityD: 'M 175 100 L 300 150' },
            ]
        }
    },
];

export const milestones = [
    { year: 2010, title: "Graduated Cairo University", description: "Earned a Bachelor of Commerce in Accounting, which gave me a strong foundation in financial processes and business logic.", position: '10%' },
    { year: 2017, title: "Joined Talabat", description: "As a Partner Support Specialist, I honed my technical assistance and problem-solving skills, training partners on the platform.", position: '35%' },
    { year: 2018, title: "Founded Expack Shipping", description: "As founder, I led operations and helped the team by building the custom dispatch and tracking systems that drove our efficiency.", position: '60%' },
    { year: 2023, title: "Data & BI Lead at K Line Europe", description: "Solely responsible for preparing data and building all operational dashboards in Looker. Partnered with teams to redesign workflows and built AI/MES prototypes.", position: '90%' },
];

export const testimonials = [
    {
        name: "Ahmed Hassan",
        title: "Client, Expack Shipping",
        quote: "Working with Mohamed's company was a breeze. The custom tracking system he built gave us full transparency and reliability for our shipments. A true professional. (Used with permission.)",
        image: "AH",
        roi: "99% On-time Delivery",
        caseStudyId: "dispatch-automation-expack"
    },
    {
        name: "John",
        title: "Operations Manager, Manufacturing Sector",
        quote: "The Looker dashboards developed gave us the first real-time view of our production line we've ever had. We can now spot bottlenecks before they become problems.",
        image: "JS",
        roi: "Real-Time Visibility"
    },
    {
        name: "Fatima",
        title: "Partner Coordinator, Tech Platform",
        quote: "His ability to understand complex systems and provide clear, actionable support was invaluable. He was the go-to person for solving escalated partner issues.",
        image: "FA",
        roi: "Issue Resolution"
    }
];

export const trustedBy = [
    { name: 'K Line Europe' },
    { name: 'Sandton Taxi Cabs' },
    { name: 'Expack Shipping' },
    { name: 'Talabat' },
];

export const toolkitData = {
    dashboards: [
        {
            title: "Live Logistics Dashboard",
            image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/logistics_dashboard.mp4",
            description: "Resolved major production bottlenecks by building a live Looker dashboard for a national shipping company. This dashboard tracks fleet performance, on-time delivery rates, and fuel efficiency, replacing disconnected spreadsheets and giving the operations team a single source of truth to manage daily dispatches.",
            tags: ["Looker", "Logistics", "Real-Time"],
            caseStudyId: "otp-facilities-report"
        },
        {
            title: "Manufacturing Production Overview",
            image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/manufacturing_dashboard.mp4",
            description: "Saved thousands per week in lost productivity by creating a comprehensive Google Sheets dashboard for a manufacturing plant. It uses Google Apps Script to pull data from multiple production line sensors, tracking output, defect rates, and machine downtime. This was instrumental in identifying and resolving a critical bottleneck.",
            tags: ["Google Sheets", "Apps Script", "Manufacturing"],
            caseStudyId: "manufacturing-qc-dashboard"
        },
        {
            title: "E-commerce Sales & Inventory",
            image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/ecommerce_dashboard.mp4",
            description: "Prevented costly stockouts during peak seasons by developing a sales performance dashboard for an e-commerce client. It integrates with their Shopify store to provide insights on best-selling products and customer lifetime value, and includes predictive inventory alerts to ensure optimal stock levels.",
            tags: ["Looker", "E-commerce", "Sales Analytics"],
            caseStudyId: "team-performance-dashboard"
        },
    ],
    process: [
        {
            step: 1,
            icon: React.createElement(SearchIcon, { className: "w-8 h-8" }),
            title: "Discovery & ROI Definition",
            description: "We start by partnering with you to define what success looks like. I'll audit your existing workflows and data points to identify the highest-impact opportunities, ensuring we target a clear, measurable return on investment from day one."
        },
        {
            step: 2,
            icon: React.createElement(PencilIcon, { className: "w-8 h-8" }),
            title: "Blueprint & Strategy",
            description: "Next, I'll design a custom solution blueprint. This includes creating mockups of the proposed dashboard and outlining the automation logic. We'll collaborate closely to ensure the plan aligns perfectly with your business goals and can be managed by your team long-term."
        },
        {
            step: 3,
            icon: React.createElement(CodeIcon, { className: "w-8 h-8" }),
            title: "Development & Automation",
            description: "This is where the vision becomes a functional tool. I'll build the dashboard using tools like Looker or Google Sheets, and write custom Google Apps Script code to automate manual tasks, integrate data sources, and bring the strategic vision to life."
        },
        {
            step: 4,
            icon: React.createElement(RocketIcon, { className: "w-8 h-8" }),
            title: "Deployment & Team Autonomy",
            description: "I don't just hand over a tool; I guarantee your team's long-term success. This final step includes comprehensive training and documentation to ensure everyone is confident and capable of using the new systems to drive data-driven decisions independently."
        }
    ],
    codeProjects: [
        {
            title: "Automated Daily Email Reporter",
            description: "A Google Apps Script that automatically aggregates key metrics from a Google Sheet, formats them into a clean daily summary, and emails the report to stakeholders every morning.",
            code: `function sendDailyReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Daily KPIs');
  const data = sheet.getRange('A2:B5').getValues();
  
  let emailBody = '<h2>Daily Performance Summary</h2>';
  emailBody += '<table border="1" cellpadding="5">';
  data.forEach(function(row) {
    emailBody += '<tr><td>' + row[0] + '</td><td><b>' + row[1] + '</b></td></tr>';
  });
  emailBody += '</table>';
  
  const recipient = 'manager@example.com';
  const subject = 'Daily KPI Report for ' + new Date().toLocaleDateString();
  
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    htmlBody: emailBody
  });
}`
        },
        {
            title: "Data Sync Between Sheets",
            description: "This script syncs data from a 'Master' Google Sheet to several 'Team' sheets, ensuring that team members only see the data relevant to them while the master list stays updated.",
            code: `function syncDataToTeamSheets() {
  const masterSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Master Data');
  const masterData = masterSheet.getDataRange().getValues();
  
  const teamSheets = ['Team A Sheet', 'Team B Sheet'];
  
  teamSheets.forEach(function(sheetName) {
    const teamSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    const teamName = sheetName.split(' ')[0]; // e.g., 'Team A'
    
    // Filter data for the specific team
    const teamData = masterData.filter(function(row) {
      return row[3] === teamName; // Assuming team name is in the 4th column
    });
    
    // Clear the team sheet and write the new data
    teamSheet.clearContents();
    teamSheet.getRange(1, 1, teamData.length, teamData[0].length).setValues(teamData);
  });
}`
        }
    ]
};

export interface ServiceItem {
    title: string;
    description: string;
    value: string;
    price: string;
    idealFor: string;
    bestFor: string;
    keyFeatures: string[];
    deliverables: string[];
    youAreAGreatFit: string[];
}

export interface ServiceCategory {
    category: string;
    description: string;
    icon: React.ReactElement;
    items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
    {
        category: "BI & Reporting",
        description: "Transforming raw data into executive-level visual reports for real-time visibility.",
        icon: React.createElement(ChartBarIcon),
        items: [
            {
                title: "Executive Dashboard Package",
                description: "See your entire business on one screen. Stop building reports by hand. Get real-time visibility into sales, inventory, and operations - all in one place. Design and build up to three interconnected dashboards to visualize core metrics. Connects 1-3 data sources. Includes one round of revisions.",
                value: "You need a single source of truth to make quick decisions. You're tired of manually pulling data from multiple systems and wasting hours on reporting.",
                price: "$500 - $1,000",
                idealFor: "SMBs who are data-rich but insight-poor, and need a clear, actionable view of their operations without a large investment.",
                bestFor: "The Overwhelmed Ops Manager",
                keyFeatures: ["Up to 3 interconnected Looker Studio dashboards", "Connection to 1-3 core data sources", "Custom branding to match your company's look and feel", "Mobile-responsive design for on-the-go access"],
                deliverables: ["A secure, shareable Looker Studio report accessible via URL", "Clear documentation on data sources and metric definitions", "A 30-minute walkthrough and training session for your team"],
                youAreAGreatFit: [
                    "You're currently building reports by hand in spreadsheets.",
                    "Your key metrics are scattered across 2 or 3 different platforms.",
                    "You need a clear, high-level overview to share with leadership."
                ]
            },
            {
                title: "Multi-Team Analytics System",
                description: "Give every department the data they need without the chaos. Secure, segmented dashboards for sales, operations, and finance - each team sees only what they need. Full strategic design with custom data models, complex filtering, and user access control.",
                value: "You're growing past basic reporting. You need granular, secure data segmentation to manage multiple departments without losing performance.",
                price: "$1,200 - $2,500",
                idealFor: "Growing businesses with multiple teams or departments that need segmented, secure, and high-performance data access.",
                bestFor: "The Data-Driven Director",
                keyFeatures: ["Custom data modeling and blending", "Advanced filtering and user-level security", "Performance optimization for large datasets", "Integration of calculated fields for complex metrics"],
                deliverables: ["A fully scalable Looker Studio environment", "User access control setup and documentation", "A strategic data model diagram", "Advanced training for your power users"],
                youAreAGreatFit: [
                    "You need to provide different data views for sales, operations, and finance teams.",
                    "Your current dashboards are slow because you're working with very large datasets.",
                    "You need to blend data from multiple complex sources like a CRM and a production database."
                ]
            }
        ]
    },
    {
        category: "Automation & Efficiency",
        description: "Designing and deploying custom scripts and streamlined workflows to reduce manual labor.",
        icon: React.createElement(CogIcon),
        items: [
            {
                title: "Hands-Free Reporting",
                description: "Reports that write themselves while you sleep. Stop wasting 5+ hours a week on manual reports. Get daily, weekly, or monthly summaries delivered automatically. Custom automation pulls data, cleans it, and delivers formatted reports on schedule.",
                value: "Your team is spending too much time on repetitive, manual data entry or report generation. You need to free up staff for high-value tasks. This is direct cost savings.",
                price: "$300 - $700",
                idealFor: "Teams bogged down by daily, weekly, or monthly reporting tasks that can be standardized and automated.",
                bestFor: "The Time-Strapped Team Lead",
                keyFeatures: ["Scheduled, automated report generation", "Custom email notifications with key insights or alerts", "Data cleaning and formatting logic", "Error handling and logging"],
                deliverables: ["A fully functional Google Apps Script solution", "Source code and deployment instructions", "A clear guide on how to modify schedules and recipients"],
                youAreAGreatFit: [
                    "Your team spends more than 3 hours a week on a single, repetitive report.",
                    "You rely on a specific person to create a critical report, creating a key-person dependency.",
                    "You need timely alerts when a key metric goes above or below a certain threshold."
                ]
            },
            {
                title: "System Integration Pipeline",
                description: "Make your tools talk to each other automatically. Eliminate manual data transfer between your CRM, inventory, and accounting systems. Zero copy-paste, zero errors. Multi-step automation connects disparate systems and removes manual handover points.",
                value: "Your business processes rely on someone manually copying data between systems, leading to errors, lost orders, or payment delays. You need guaranteed process reliability.",
                price: "$700 - $1,500",
                idealFor: "Businesses where manual data transfer between systems (e.g., CRM to accounting, inventory to e-commerce) is a major bottleneck.",
                bestFor: "The Process Perfectionist",
                keyFeatures: ["Connection of 2+ cloud applications", "Multi-step logic with conditional paths", "Automated data transformation between systems", "Real-time or scheduled workflow triggers"],
                deliverables: ["A deployed n8n workflow", "A visual map of the automated process", "Complete documentation of the workflow logic and connected APIs"],
                youAreAGreatFit: [
                    "An employee's job involves copying and pasting data from one system to another.",
                    "Delays or errors occur when one team hands off information to the next team.",
                    "You want to trigger actions automatically, like sending a customer update when a shipping status changes."
                ]
            }
        ]
    },
    {
        category: "Strategy & Optimization",
        description: "Providing guidance on data strategy, tool selection, and building an internal data culture.",
        icon: React.createElement(RocketIcon),
        items: [
            {
                title: "Operational Clarity Audit",
                description: "Find and fix your biggest bottlenecks in one week. We map your current process, identify what's broken, and give you a clear roadmap to fix it. One-week deep audit with staff interviews, current-state mapping, and streamlined future-state workflow design.",
                value: "Your leadership knows they have operational bottlenecks but cannot define or fix them. You need an external expert to reduce operational friction and errors.",
                price: "$1,000 - $2,000",
                idealFor: "Organizations that feel their growth is being held back by internal inefficiencies but can't pinpoint the exact cause.",
                bestFor: "The Visionary Founder",
                keyFeatures: ["Stakeholder interviews and process observation", "Creation of detailed 'As-Is' and 'To-Be' process maps", "Identification of key friction points and their business impact", "A prioritized, actionable implementation roadmap"],
                deliverables: ["A comprehensive workflow audit report", "Visual process maps (current and proposed)", "A step-by-step implementation plan with recommended tools"],
                youAreAGreatFit: [
                    "You know things are inefficient but can't pinpoint the exact cause.",
                    "You're experiencing growth, and your current processes are starting to break.",
                    "You want to build a scalable foundation before a major expansion or new product launch."
                ]
            },
            {
                title: "Fractional Systems Architect",
                description: "On-demand expertise without full-time cost. 5-10 hours/month of strategic guidance for data governance, tool selection, and system maintenance. Your fractional data head for growing infrastructure without the full-time hire.",
                value: "You need an on-demand expert to manage your growing data infrastructure. You cannot yet afford a full-time senior analyst.",
                price: "$250 - $450/month",
                idealFor: "Businesses that have started their data journey but need ongoing expert guidance to ensure they're building a scalable and secure data infrastructure.",
                bestFor: "The Forward-Thinking CEO",
                keyFeatures: ["Monthly strategy calls and priority setting", "On-demand support for data-related questions", "Proactive maintenance of existing data tools", "Guidance on new tool selection and data governance"],
                deliverables: ["A set number of dedicated expert hours per month", "Monthly progress and recommendations report", "Access to a shared communication channel for on-demand support"],
                youAreAGreatFit: [
                    "You have data systems in place but no one to strategically manage them.",
                    "You're considering new software and need an unbiased expert opinion.",
                    "You want to build an internal data culture but need guidance on where to start."
                ]
            }
        ]
    }
];

export interface ComparisonFeature {
    feature: string;
    standardAnalytics: string | boolean;
    advancedLooker: string | boolean;
    automatedReporting: string | boolean;
    workflowIntegration: string | boolean;
    frictionAudit: string | boolean;
    dataStrategy: string | boolean;
}

export const serviceComparisonData: ComparisonFeature[] = [
    {
        feature: "Core Goal",
        standardAnalytics: "Visualize Data",
        advancedLooker: "Scale Visualizations",
        automatedReporting: "Eliminate Manual Tasks",
        workflowIntegration: "Connect Systems",
        frictionAudit: "Identify Bottlenecks",
        dataStrategy: "Ongoing Guidance"
    },
    {
        feature: "Primary Tool",
        standardAnalytics: "Looker Studio",
        advancedLooker: "Looker Studio",
        automatedReporting: "Google Apps Script",
        workflowIntegration: "n8n / Low-Code",
        frictionAudit: "Process Mapping",
        dataStrategy: "Advisory"
    },
    {
        feature: "Data Sources",
        standardAnalytics: "1-3",
        advancedLooker: "Multiple / Complex",
        automatedReporting: "1-2",
        workflowIntegration: "2+",
        frictionAudit: "N/A",
        dataStrategy: "N/A"
    },
    {
        feature: "Custom Automation",
        standardAnalytics: false,
        advancedLooker: false,
        automatedReporting: true,
        workflowIntegration: true,
        frictionAudit: false,
        dataStrategy: false
    },
    {
        feature: "Strategic Planning",
        standardAnalytics: false,
        advancedLooker: true,
        automatedReporting: false,
        workflowIntegration: false,
        frictionAudit: true,
        dataStrategy: true
    },
    {
        feature: "Typical Duration",
        standardAnalytics: "1-2 Weeks",
        advancedLooker: "2-4 Weeks",
        automatedReporting: "1 Week",
        workflowIntegration: "1-3 Weeks",
        frictionAudit: "1 Week",
        dataStrategy: "Monthly Retainer"
    }
];


export interface BlogPost {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        title: "Behind the Blueprint: From Messy Sheet to Manufacturing Dashboard",
        excerpt: "A visual transformation story. See the 'before' - a chaotic, multi-tab spreadsheet - and the 'after' - a clean, intuitive Looker dashboard that saved a client thousands in lost productivity by pinpointing a critical production bottleneck.",
        image: "https://picsum.photos/seed/blog5/1200/800",
        date: "November 02, 2023",
        tags: ["Data Visualization", "Looker", "Manufacturing", "Case Study"]
    },
    {
        title: "From Chaos to Clarity, Part 1: Automating the Noise",
        excerpt: "The chaos of manual reporting costs more than just time. This article breaks down the first step to clarity: automating repetitive data tasks with Google Apps Script to eliminate errors and reclaim focus.",
        image: "https://picsum.photos/seed/blog1/1200/800",
        date: "October 15, 2023",
        tags: ["Automation", "Google Apps Script", "Productivity", "From Chaos to Clarity"]
    },
    {
        title: "From Chaos to Clarity, Part 2: Architecting Your Data Blueprint",
        excerpt: "With automation handling the noise, it's time to build. This post covers the principles of designing a centralized Looker dashboard - your single source of truth - from scattered data sources.",
        image: "https://picsum.photos/seed/blog2/1200/800",
        date: "September 28, 2023",
        tags: ["BI Dashboards", "Looker", "Data Strategy", "From Chaos to Clarity"]
    },
    {
        title: "From Chaos to Clarity, Part 3: The Power of a Clear Narrative",
        excerpt: "Data is useless without a story. Learn how to transform your new, centralized data into compelling visual narratives that drive executive decisions and align your entire team.",
        image: "https://picsum.photos/seed/blog3/1200/800",
        date: "August 05, 2023",
        tags: ["Data Visualization", "KPIs", "Reporting", "From Chaos to Clarity"]
    },
];

export interface Project {
    title: string;
    image: string;
    description: string;
    tags: string[];
    url?: string;
    roi?: string; // NEW: High-impact metric
    caseStudyId?: string; // Link to corresponding case study
}

export const projectsData: Project[] = [
    {
        title: "Automated Deals Reporting System",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/automation_flow.mp4",
        description: "A multi-stage automation that reduced 128 hours of weekly manual pricing calculations to minutes, ensuring 100% accuracy.",
        tags: ["Google Apps Script", "Automation", "CRM Integration"],
        url: "#",
        roi: "Saved 128 Hours/Week",
        caseStudyId: "automated-deals-reporting"
    },
    {
        title: "Manufacturing QC Dashboard",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/manufacturing_dashboard.mp4",
        description: "A Looker dashboard that provided real-time visibility into defect rates, helping reduce them by 41% and cutting remake costs.",
        tags: ["Looker", "Manufacturing", "Quality Control"],
        url: "#",
        roi: "Reduced Defects by 41%",
        caseStudyId: "manufacturing-qc-dashboard"
    },
    {
        title: "Team Performance & SLA Dashboard",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/team_performance_dashboard.mp4",
        description: "A real-time Looker dashboard tracking Rework and Utilization, which led to a 10% reduction in team rework and balanced workloads.",
        tags: ["Looker", "Performance Metrics", "BI Dashboard"],
        url: "#",
        roi: "10% Reduction in Rework",
        caseStudyId: "team-performance-dashboard"
    },
    {
        title: "Global OTP Dashboard",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/logistics_dashboard.mp4",
        description: "A multi-facility Looker dashboard that stabilized global On-Time Performance, preventing contract breaches with major clients.",
        tags: ["Looker", "Logistics", "SLA Tracking"],
        url: "#",
        caseStudyId: "otp-facilities-report"
    },
    {
        title: "Logistics Automation Pipeline",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/automation_flow.mp4",
        description: "A one-click Google Apps Script pipeline that replaced a multi-day scheduling process with a sub-second, zero-error automation.",
        tags: ["Google Apps Script", "Logistics", "Automation"],
        url: "#",
        caseStudyId: "logistics-automation-pipeline"
    },
    {
        title: "Financial Data Integration Pipeline",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/financial_data_pipe.mp4",
        description: "Automated Google Apps Script pipelines that consolidate sales data from multiple sources, ensuring 100% financial accuracy.",
        tags: ["Google Apps Script", "Finance", "Data Integration"],
        url: "#",
        caseStudyId: "financial-data-integration"
    },
    {
        title: "Automated Dispatch System",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/dispatch_system.mp4",
        description: "A custom dispatch system built with Google Sheets & Apps Script that reduced documentation errors by 75% and boosted on-time delivery by 20%.",
        tags: ["Google Sheets", "Apps Script", "Logistics"],
        url: "#",
        caseStudyId: "dispatch-automation-expack"
    },
    {
        title: "Client Intake Automation Form",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/automation_flow.mp4",
        description: "An automated workflow using Google Forms and Apps Script to streamline the client onboarding process, from data collection to project setup.",
        tags: ["Automation", "Process Optimization", "Apps Script"],
        url: "#",
        caseStudyId: "client-intake-automation"
    }
];

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
}

export const experienceData: WorkExperience[] = [
    {
        id: "kline",
        company: "K Line Europe",
        role: "Data & BI Lead",
        dates: "2023 - Present",
        summary: "As the sole data specialist, I am responsible for the entire data lifecycle, from preparing raw data to building executive-level BI dashboards. I partner with operational teams to redesign workflows and build automation tools. Currently, I am leading the development of a new MES using Tulip and spearheading the integration of AI agents into our core workflows to automate manual processes.",
        contributions: [
            "Leading the development of a new Manufacturing Execution System (MES) using the Tulip platform, having successfully built and demonstrated the initial prototype.",
            "Spearheading a company-wide initiative to integrate AI and AI agents into departmental workflows, designing systems to offload heavy manual work.",
            "Owned the development of all operational dashboards using Looker Studio, providing real-time visibility into production, QC, and logistics.",
            "Designed and implemented custom workflows and automation solutions using the full Zoho suite (Projects, CRM, Desk, Inventory) to streamline inter-departmental processes.",
            "Served as the primary point of contact for all data-related inquiries, translating business needs into technical requirements and actionable insights.",
            "Led training sessions to foster a data-driven culture, empowering team members to use new dashboards and tools effectively."
        ],
        achievements: [
            "Reduced external case defect rate by 41% by building a QC dashboard that identified root causes.",
            "Stabilized global On-Time Performance (OTP) above critical thresholds by implementing a real-time logistics dashboard.",
            "Saved up to 128 hours of manual work per week for the deals desk by creating an automated pricing and reporting system.",
            "Reduced team rework rate by 10% through a new performance and SLA tracking dashboard."
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
        zohoExpertise: [
            { product: "Zoho Projects", usage: "Managed project timelines, resource allocation, and task dependencies for all data-centric initiatives, ensuring projects were delivered on schedule." },
            { product: "Zoho Analytics", usage: "Served as the primary developer for BI dashboards, connecting multiple data sources to create comprehensive reports that tracked KPIs across the organization." },
            { product: "Zoho CRM", usage: "Automated the flow of sales and deals data into the CRM, providing the sales team with a real-time, accurate single source of truth for client interactions and performance." },
            { product: "Zoho Desk", usage: "Integrated the support desk system with production databases to streamline issue resolution, linking customer tickets directly to relevant operational data." },
            { product: "Zoho Inventory", usage: "Developed custom solutions within Zoho Inventory to optimize stock level tracking and automate reorder point notifications, reducing manual checks and preventing stockouts." }
        ],
    },
    {
        id: "expack",
        company: "Expack Shipping",
        role: "Founder",
        dates: "2018 - 2022",
        summary: "As the founder, I built the company from the ground up, overseeing all aspects of operations, business development, and technology. A key focus was creating lean, technology-driven processes to compete with larger players, leading me to develop a custom dispatch and tracking system that became our core operational advantage.",
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