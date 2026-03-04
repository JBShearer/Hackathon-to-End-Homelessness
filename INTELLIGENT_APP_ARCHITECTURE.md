all# Intelligent App Architecture (Draft v0.1)

**Date:** 2026-02-20  
**Status:** Working Draft  
**Scope:** Unified architecture for **Project GAMER** with two solution domains:
- **Smart City Planning** (game/simulation layer)
- **Loot Locker** (physical donation/distribution operations layer)

---

## 1) Vision

Deliver a single **Intelligent App** in **Business Data Cloud (BDC)** that can:

1. Use **Smart City Planning** as a simulation/game interface for planning and training.
2. Use **Loot Locker** as a real-world execution interface for intake, matching, warehousing, and locker distribution.
3. Run analytics/planning in or over **SAP Analytics Cloud (SAC)**.
4. Integrate with **SAP ERP + cloud application models** and third-party systems.
5. Use **NIEM** and **FIWARE/NGSI-LD** as interoperability standards.

---

## 2) Product Positioning Model

- **Project GAMER** = umbrella product/program
- **Smart City Planning** = game/simulation module inside Project GAMER
- **Loot Locker** = operational fulfillment module inside Project GAMER
- **SAC** = planning/analytics interface and decisioning surface
- **BDC** = intelligent data + semantic + orchestration foundation

---

## 3) Deployment/UX Options (SAC-Centric)

### Option A — SAC Overlay Layer
Use SAC as the primary user shell; expose Smart City Planning and Loot Locker views as SAC-linked experiences.

**Best for:** executive planning + operations teams already living in SAC.

### Option B — SAC Plugin/Embedded Mode
Run Smart City Planning and Loot Locker as app modules embedded into SAC contexts (story links, analytic apps, custom app launch patterns).

**Best for:** preserving existing SAC artifacts while adding new capabilities incrementally.

### Option C — BDC Intelligent App First (Recommended Target)
Run Project GAMER as a BDC Intelligent App and use SAC as a core analytics/planning component inside the full workflow.

**Best for:** end-to-end orchestration across game simulation + real-world fulfillment.

---

## 4) Reference Layered Architecture

```text
┌───────────────────────────────────────────────────────────────┐
│ EXPERIENCE LAYER                                              │
│ - Project GAMER UI shell                                      │
│ - Smart City Planning game UI                                 │
│ - Loot Locker operations UI                                   │
│ - SAC stories / analytic apps / planning dashboards           │
└───────────────────────────────────────────────────────────────┘
                              │
┌───────────────────────────────────────────────────────────────┐
│ INTELLIGENCE & DECISION LAYER                                │
│ - Simulation/scenario engine                                  │
│ - Matching/routing optimization                               │
│ - Forecasting and intervention scoring                        │
│ - AI-assisted classification (donations/resources)            │
└───────────────────────────────────────────────────────────────┘
                              │
┌───────────────────────────────────────────────────────────────┐
│ PROCESS ORCHESTRATION LAYER                                  │
│ - Approval workflows                                           │
│ - Event-driven automation (intake → match → reserve → pickup)│
│ - Exception handling and escalation                            │
└───────────────────────────────────────────────────────────────┘
                              │
┌───────────────────────────────────────────────────────────────┐
│ DATA & SEMANTICS LAYER (BDC)                                 │
│ - Domain data products                                         │
│ - Canonical interoperability model                             │
│ - NIEM-aligned entities                                        │
│ - FIWARE/NGSI-LD entity graph                                 │
└───────────────────────────────────────────────────────────────┘
                              │
┌───────────────────────────────────────────────────────────────┐
│ INTEGRATION LAYER                                             │
│ - SAP ERP + cloud app connectors                              │
│ - API management + event mesh                                 │
│ - External systems (city APIs, FIWARE brokers, partner nets) │
└───────────────────────────────────────────────────────────────┘
                              │
┌───────────────────────────────────────────────────────────────┐
│ SOURCE & EDGE LAYER                                           │
│ - S/4 + LoB cloud systems                                     │
│ - Warehouse/yard logistics systems                            │
│ - Locker devices, robotics, IoT sensors                       │
│ - NGO/city/community data feeds                               │
└───────────────────────────────────────────────────────────────┘
```

---

## 5) Canonical Domain Model (Start Here)

Define BDC data products around these shared domains:

1. **Identity & Parties**
   - person, household, organization, provider, role
2. **Location & Place**
   - site, shelter, warehouse, yard, locker-bank, geospatial hierarchy
3. **Resource & Inventory**
   - item, condition, quantity, location, reservation status
4. **Request & Service Case**
   - request, urgency, eligibility, assignment, SLA state
5. **Event & Incident**
   - emergency event, disruption, demand spike, response operation
6. **Movement & Logistics**
   - route, shipment, transfer, truck stop, dock/yard event
7. **Simulation Scenario**
   - scenario configuration, assumptions, outcomes, KPIs, decisions

These domains support both gameplay and real operations.

---

## 6) Standards Strategy: NIEM + FIWARE

### NIEM Role
- Use NIEM-compatible naming for incident, activity, party, and location semantics.
- Keep a mapping layer from internal entities to NIEM exchange packages.

### FIWARE/NGSI-LD Role
- Use NGSI-LD entities for context sharing and external interoperability.
- Support context brokers/city interfaces for live situational updates.

### Practical Pattern
- Internal canonical model in BDC is authoritative for app workflows.
- NIEM and NGSI-LD mappings are explicit translation layers (not ad hoc field mapping).

---

## 7) SAP Integration Model

### SAP Data Sources (Typical)
- ERP core objects (materials, stock, procurement, projects, resources)
- Cloud LoB models (where applicable to logistics, procurement, quality, and planning)
- Business Network events for partner-side visibility

### Integration Patterns
- **Synchronous APIs** for on-demand reads/commands
- **Event streams** for status changes and sensor/device updates
- **Batch/ELT ingestion** for historical planning and model training

### Data Ownership Principle
- Source systems remain system-of-record.
- BDC becomes intelligent decision and cross-domain correlation plane.

---

## 8) Two Core End-to-End Flows

### A) Loot Locker Operations Flow
1. Donation intake (camera/AI/manual verify)
2. Inventory write + locationing (warehouse/locker candidate)
3. Request matching + approval workflow
4. Pick-pack-transfer to locker
5. Secure pickup, status closure, audit trail
6. Feedback loop to improve matching and stocking strategy

### B) Smart City Planning Flow
1. Scenario setup (demand, constraints, resources)
2. Simulation run (routing, capacity, policy knobs)
3. KPI evaluation in SAC/BDC views
4. Publish chosen strategy to operational workflow templates
5. Execute via integrated systems + monitor outcomes

The two flows share the same semantic model and KPIs.

---

## 9) Security & Governance Baseline

- Unified identity and role model across game, operations, and analytics.
- Fine-grained authorization (viewer/planner/operator/approver/admin).
- Data policy by domain (PII minimization, retention, auditability).
- Clear split between training/simulated data and live operational data.

---

## 10) MVP Roadmap (Phased)

### Phase 0 — Architecture Foundation
- Confirm canonical domains
- Finalize NIEM + NGSI-LD mapping strategy
- Define integration contracts and event taxonomy

### Phase 1 — Loot Locker First
- Implement intake → match → locker flow end-to-end
- Surface SAC dashboards over operational KPIs

### Phase 2 — Smart City Planning Module
- Launch simulation model with shared data products
- Export selected scenarios into executable operation templates

### Phase 3 — Unified Intelligent App in BDC
- Single shell experience
- Closed-loop planning + execution + learning
- Multi-site scaling (warehouses, yards, locker networks)

---

## 11) Immediate Next Decisions

1. Choose initial runtime posture:
   - SAC overlay first, or BDC app first.
2. Identify first system-of-record scope:
   - Which ERP/cloud models are in MVP.
3. Lock v1 canonical entities:
   - request, resource, location, event, movement.
4. Define v1 standards payloads:
   - NIEM package set + NGSI-LD entity set.
5. Select one pilot geography and one operational partner model.

---

## 12) Relation to Existing Repo Docs

- `INTEROPERABILITY_ARCHITECTURE.md` remains the detailed schema-level interop reference.
- This document is the **solution-level architecture blueprint** for combining:
  - Project GAMER
  - Smart City Planning
  - Loot Locker
  - SAC/BDC delivery strategy
