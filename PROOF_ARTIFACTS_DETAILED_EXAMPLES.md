# PROOF ARTIFACTS: DETAILED EXAMPLES & TEMPLATES

## This guide shows EXACTLY what each proof artifact should contain to maximize credibility

---

## ARTIFACT TYPE 1: EXECUTION LOG SCREENSHOT
**Used for:** Projects 1, 4, 5, 7, 8 (all automations)

### GOOD Example (Credible):
```
Google Apps Script Execution Transcript

Function: generatePricingBatch()
Trigger: Manual execution
Start Time: 2025-12-28 14:32:15 UTC
Duration: 0.847 seconds
Status: SUCCESS

Execution Summary:
├─ Records processed: 247
├─ Pricing rules applied: 247/247 (100%)
├─ CRM format conversions: 247/247 (100%)
├─ Errors encountered: 0
└─ Output size: 125.4 KB

Logs:
[14:32:15.001] Starting batch pricing engine
[14:32:15.234] Data ingestion complete: 247 records
[14:32:15.612] Pricing logic applied: 100% success rate
[14:32:15.847] Output generated: 125.4 KB CSV file
[14:32:15.848] SUCCESS - completed in 0.847 seconds
```

**Why it works:**
- Shows exact timestamps (hard to fake)
- Quantifies input/output (247 records, 100% success)
- Demonstrates speed (0.847 seconds = sub-second claim verified)
- Shows zero errors (supports reliability claim)

### BAD Example (Unconvincing):
```
"The system runs in about 1 minute and processes the data automatically"
```
**Why it fails:** Vague, unverifiable, reliant on your word

---

## ARTIFACT TYPE 2: BEFORE/AFTER DASHBOARD SCREENSHOT
**Used for:** Projects 2, 3, 6 (all BI dashboards)

### GOOD Example (Credible):

```
[BEFORE STATE - Month 1]
┌──────────────────────────────────────┐
│ Quality Control Dashboard (Manual)   │
├──────────────────────────────────────┤
│                                      │
│ Defect Rate: Not tracked             │
│ (Last update: 2025-01-15)            │
│                                      │
│ Facility Performance:                │
│  - Facility A: "Seems okay?"         │
│  - Facility B: "Had complaints"      │
│  - Facility C: "Not sure"            │
│                                      │
│ Root Cause Analysis: None available  │
│ (All data in spreadsheets)           │
│                                      │
└──────────────────────────────────────┘

[AFTER STATE - Month 6]
┌──────────────────────────────────────┐
│ Quality Control Dashboard (Looker)   │
├──────────────────────────────────────┤
│ External Case Defect Rate: 0.99%     │
│ ↓ 41% from 1.68% (Month 1)           │
│                                      │
│ By Facility (Real-Time):             │
│  ┌─ Facility A: 0.82% ✓              │
│  ├─ Facility B: 0.95% ✓              │
│  ├─ Facility C: 1.12% (monitor)      │
│  └─ Facility D: 0.88% ✓              │
│                                      │
│ Top Root Causes (This Month):        │
│  1. Product XYZ @ Facility C (62%)   │
│  2. Assembly line speed (18%)        │
│  3. QA process gap (20%)             │
│                                      │
└──────────────────────────────────────┘
```

**Why it works:**
- Shows exact transformation (manual → Looker)
- Displays quantified improvement (1.68% → 0.99%)
- Shows actionable insight (Product XYZ issue identified)
- Demonstrates ongoing monitoring (real-time, not one-off)

### BAD Example (Unconvincing):
```
[Screenshot of a generic Looker dashboard with 15 charts and KPIs]
"This is the dashboard that improved quality."
```
**Why it fails:** Unclear what changed, unclear what the improvement was, too much noise

---

## ARTIFACT TYPE 3: TREND GRAPH
**Used for:** Projects 1, 2, 3, 5, 7 (anything with a before/after metric)

### GOOD Example (Credible):

```
ON-TIME DELIVERY RATE
Expack Shipping, Post-System Implementation (Week 1-12)

100% ─────────────────────────────────────
95%  │                              ╭─── Stabilized at 94%
90%  │                         ╱────╯
85%  │                    ╱───╯
80%  │               ╱────╯
75%  │          ╱────╯ ← Baseline before system
70%  └──────────────────────────────────────
     Week 1  3  5  7  9  11
     System deployed → week 1
```

**With annotations:**
```
Week 1: 78% (system deployed, manual holdouts)
Week 2: 81% (team learning curve)
Week 3: 86% (process stabilizing)
Week 4: 89% (most errors eliminated)
Weeks 5-12: 92-94% (consistent; proof of sustainability)

Key insight: Improvement sustained for 8+ weeks proves durability.
```

**Why it works:**
- Shows trajectory, not just final number
- Demonstrates learning curve (realistic)
- Proves sustainability (doesn't drop back down)
- Easy to spot inflection point (week 1 = deployment)

### BAD Example (Unconvincing):
```
78% → 94%
"Increased on-time delivery rate by 20%"
```
**Why it fails:** Missing journey; could be luck, could be temporary

---

## ARTIFACT TYPE 4: SAMPLE INPUT/OUTPUT FILES
**Used for:** Projects 1, 4, 5, 7, 8 (any system that transforms data)

### GOOD Example (Credible):

**BEFORE: Messy input data**
```
[Email from client to coordinator]
"Hi Ahmed, for next week we need:
- Route A: 15 deliveries, clients listed below
- Route B: 8 deliveries (same as last time basically)
- Need pricing for both
- ASAP - client meeting tomorrow

[Attachments: 3 Excel files, PDF folder list, notes from call]"

---

[Manual consolidation process]
Step 1: Open email
Step 2: Open attachment 1 (client list)
Step 3: Open attachment 2 (pricing sheet)
Step 4: Copy addresses one-by-one
Step 5: Calculate pricing for each route (tedious)
Step 6: Create schedule in separate sheet
Step 7: Send email to driver with schedule
Step 8: Wait for driver to confirm (phone call)
Step 9: Update tracking sheet
```

**AFTER: Clean system output**
```
CONSOLIDATED SCHEDULE OUTPUT
Generated by: Logistics Automation Pipeline
Timestamp: 2025-12-28 10:00:15 UTC
Status: Ready for dispatch

Route A (15 deliveries)
├─ Client 1: [ADDR_ANON_1], 9:30 AM, $45
├─ Client 2: [ADDR_ANON_2], 9:45 AM, $45
├─ Client 3: [ADDR_ANON_3], 10:00 AM, $38
│ ... (12 more)
└─ Total: $652.50, ETA: 4.2 hours

Route B (8 deliveries)
├─ Client A: [ADDR_ANON_A], 2:00 PM, $52
│ ... (7 more)
└─ Total: $389.00, ETA: 2.8 hours

Driver Assignments:
├─ Driver ID_001: Route A + Route B (preferred pair)
└─ Estimated revenue: $1,041.50

Team notification sent at 10:00:16 UTC
```

**Why it works:**
- Shows exact transformation (messy → structured)
- Demonstrates that system outputs exactly what users need
- Proves zero manual re-entry needed
- Shows automation quality (pricing, routing, assignments all generated)

### BAD Example (Unconvincing):
```
"The system takes scattered client data and generates a clean schedule."
```
**Why it fails:** No tangible proof of transformation quality

---

## ARTIFACT TYPE 5: PROCESS FLOW DIAGRAM
**Used for:** All projects (shows method, not just results)

### GOOD Example (Credible):

**BEFORE STATE:**
```
Prospect Intake Process (Manual) = 2-3 days

1. Client contacts (email/phone) ──► 2-4 hours to respond
2. Extract info manually ──► 1 hour (error-prone)
3. Send info to team ──► Email thread, back-and-forth (4+ hours)
4. Create project folder ──► Manual (30 min)
5. Set up tracking sheets ──► Copy templates, customize (45 min)
6. Notify team ──► Scattered Slack messages (30 min)
7. Project ready ──► Next business day (overnight wait)

Total: 24-48+ hours (and error-prone at every step)
```

**AFTER STATE:**
```
Automated Client Intake (1 Form + Google Apps Script) = 15 seconds

1. Client completes form ──► 2 minutes (built-in validation)
2. Form submits ──► Triggers Apps Script (instant)
3. System extracts data ──► Validation complete (0.3 sec)
4. Project folder created ──► Drive automation (0.5 sec)
5. Sheets templates duplicated ──► Form data populated (1.2 sec)
6. Team notified ──► Automated email with complete project details (0.8 sec)
7. Project ready ──► Immediately (team can start same hour)

Total: 15 seconds
Error rate: 0% (validation rules prevent bad data)
Improvement: 96x faster, 100% accuracy
```

**Why it works:**
- Shows exact process before AND after
- Quantifies each step (transparency)
- Shows where automation adds value
- Demonstrates error reduction (validation)

### BAD Example (Unconvincing):
```
"We automated the client intake process"
```
**Why it fails:** Doesn't show HOW or WHY it's better

---

## ARTIFACT TYPE 6: ERROR RATE/TREND DATA TABLE
**Used for:** Projects 2, 5, 7 (anything with reliability claims)

### GOOD Example (Credible):

**DISPATCH SYSTEM - ERROR RATE TRACKING**
```
Week | Errors | Rate   | Error Type                | Root Cause
─────┼────────┼────────┼───────────────────────────┼────────────
1    | 15     | 18.3%  | AWB format errors (8)     | Manual transcription
     |        |        | Missing tracking (5)      | Info loss in handoff
     |        |        | Address typos (2)         | Keyboard entry
─────┼────────┼────────┼───────────────────────────┼────────────
2    | 11     | 13.4%  | AWB format (4)            | Partial automation
     |        |        | Missing tracking (4)      | Process stubs still manual
     |        |        | Address typos (3)         | Validation incomplete
─────┼────────┼────────┼───────────────────────────┼────────────
3    | 8      | 9.8%   | AWB format (2)            | Edge case fix needed
     |        |        | Missing tracking (1)      | Rare scenario
     |        |        | Address typos (0)         | Validation working
─────┼────────┼────────┼───────────────────────────┼────────────
...
─────┼────────┼────────┼───────────────────────────┼────────────
12   | 4      | 4.9%   | AWB format (1)            | Rare external data issue
     |        |        | Missing tracking (0)      | System covers 100%
     |        |        | Address typos (0)         | Validation prevents all
─────┼────────┼────────┼───────────────────────────┼────────────

SUMMARY:
- Week 1: 18.3% error rate
- Week 12: 4.9% error rate
- Reduction: 73% (claim: 75% is accurate)
- Sustainability: 4+ weeks at 4-5%, proving durability

Key insight: Errors decreased predictably (not suddenly), proving 
systematic improvement, not luck or temporary conditions.
```

**Why it works:**
- Shows week-by-week progress (not just before/after)
- Breaks down error types (transparency)
- Shows root causes addressed (method matters)
- Demonstrates sustainability (doesn't bounce back up)

### BAD Example (Unconvincing):
```
"Reduced errors by 75%"
(No supporting data table)
```
**Why it fails:** Claim without evidence

---

## ARTIFACT TYPE 7: ANONYMIZATION TEMPLATE
**Used for:** Any artifact containing potentially sensitive data

### GOOD Example (Safe):

```
ORIGINAL (CONFIDENTIAL):
Facility: Manchester Plant, UK
Manager: Sarah Mitchell
Error: Production line 3-B had 3 defects in Product SKU-2847X

ANONYMIZED (SAFE TO SHARE):
Facility: Facility A
Manager: [Redacted]
Error: Production line [REDACTED] had 3 defects in Product [REDACTED]

OR EVEN BETTER (ANONYMIZED + AGGREGATED):
Facility: Facility A
Defects detected: 3
Category: [Product category hidden, but tracked internally]
Action taken: Targeted investigation at manufacturing process level

Key insight: One facility had significantly higher defect rate on specific 
product categories, leading to investigation and targeted process fix.
```

**Why it works:**
- Shows you respect confidentiality
- Keeps the insight intact (still proves point)
- Demonstrates thoughtfulness (not reckless with data)

### BAD Example (Credibility Killer):
```
"Manchester Plant under Manager Sarah Mitchell had defects in SKU-2847X"
(Exposed confidential information)
```
**Why it fails:** Violates privacy; kills client trust; loses referrals

---

## CHECKLIST: IS YOUR ARTIFACT CREDIBLE?

For EACH artifact you create, verify:

- [ ] **Objective?** Numbers, logs, or screenshots (not opinions)
- [ ] **Specific?** Numbers, dates, metrics (not "reduced a lot")
- [ ] **Verifiable?** Stakeholder could confirm it (not obscure)
- [ ] **Confidential-Safe?** No PII, no secrets, no competitive harm
- [ ] **Proportionate?** Legible in 30 seconds (not overwhelming)
- [ ] **Contextual?** Explains what it proves (caption or annotation)
- [ ] **Trend-aware?** Shows progress over time (not snapshot)
- [ ] **Honest?** Represents actual data, not idealized version

**Fail ANY of these checks? → Rework the artifact before sharing**

---

## THE WINNING ARTIFACT STACK

**Dispatch Automation (High priority because high impact + founder credibility):**
1. Execution log (shows 10 seconds → fully automated AWB)
2. Weekly error rate trend (18% → 4.9%)
3. Process flow diagram (before/after manual → automated)

**Result:** Executive thinks "This founder eliminated errors through smart design, measured the impact rigorously, and can articulate exactly why it works."

**vs. Without artifacts:**
"Founder says they reduced errors by 75%"
Executive thinks: "Okay, but where's the proof?"

---

**This is the difference between** _"wow, impressive"_ **and** _"wow, here's proof."_

