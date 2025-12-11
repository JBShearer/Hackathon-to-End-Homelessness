# Interoperability Architecture

**Last updated:** December 10, 2025  
**Scope:** Align discussion & event system with NIEM, FIWARE/OASC NGSI-LD, city APIs, and Tractus-X

---

## 1. Design Goals

1. **Standards Alignment**
   - Use **NGSI-LD** (FIWARE / OASC) as the primary interoperability shape
   - Be mappable to **NIEM** concepts (Incident, Activity, Person, Organization, Location)
   - Support integration with **city APIs** (e.g., Open311-style service requests)
   - Provide hooks for **Tractus-X** assets and processes (especially logistics & resources)

2. **Hackathon-Friendly**
   - Keep the core discussion schema simple and human-centric
   - Add an **interop layer** that more advanced teams can plug into

3. **Non-Breaking**
   - Existing discussion features (business processes, topics, posts, reputation) continue to work standalone
   - Interop is **optional**: if you never configure FIWARE / NGSI-LD / Tractus-X, the app still behaves normally

---

## 2. High-Level Model

At a high level, the system has two layers:

1. **Community & Discussion Layer (Hackathon UX)**
   - `business_processes` – 21 core homelessness response processes (emergency → strategic)
   - `topics` – discussion threads under each process
   - `posts` – replies / threaded discussions
   - `profiles`, `reputation_events`, `achievements`, `user_achievements`

2. **Interoperability Layer (NGSI-LD / NIEM / FIWARE / Tractus-X)**
   - `interop_locations` – Places / locations
   - `interop_parties` – Persons and organizations
   - `interop_events` – Events/incidents (e.g. homelessness-related events)
   - `interop_service_requests` – Service requests / tickets
   - `interop_resources` – Assets/resources (beds, warehouses, vehicles, etc.)
   - `external_systems` – Registered external platforms (FIWARE broker, city API, Tractus-X, etc.)
   - `external_entity_mappings` – ID mappings between local entities and external entities

**Key linkage:**
- `topics` has **optional** foreign keys:
  - `interop_event_id` → `interop_events.id`
  - `interop_service_request_id` → `interop_service_requests.id`

This lets a discussion topic be explicitly tied to:
- A specific **event/incident** (e.g., a major encampment cleanup, shelter shutdown, crisis response), and/or
- A specific **service request** (e.g., a city ticket for a location or population).

---

## 3. Interop Tables & NGSI-LD Alignment

### 3.1 `interop_locations`

Represents NGSI-LD **Place / Location** entities.

**Columns (simplified):**
- `id` – Local UUID
- `ngsi_id` – NGSI-LD ID (e.g., `urn:ngsi-ld:Place:1234`)
- `ngsi_type` – Usually `Place` or a subtype
- `name`, `description`
- Address fields: `city`, `region`, `postal_code`, `country_code`, etc.
- Coordinates: `latitude`, `longitude`

**NGSI-LD Mapping Example:**

```jsonc
{
  "id": "urn:ngsi-ld:Place:1234",
  "type": "Place",
  "name": { "type": "Property", "value": "Downtown Winter Shelter" },
  "location": {
    "type": "GeoProperty",
    "value": {
      "type": "Point",
      "coordinates": [-118.2437, 34.0522]
    }
  },
  "address": {
    "type": "Property",
    "value": {
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90012",
      "addressCountry": "US"
    }
  }
}
```


### 3.2 `interop_parties`

Represents **Person** or **Organization**.

**Columns:**
- `ngsi_type` – typically `Person` or `Organization`
- `party_type` – `person` / `organization`
- `name`, `given_name`, `family_name`, `organization_name`
- `email`, `phone`

**NGSI-LD Example:**

```jsonc
{
  "id": "urn:ngsi-ld:Person:john-doe",
  "type": "Person",
  "name": { "type": "Property", "value": "John Doe" },
  "email": { "type": "Property", "value": "john@example.org" }
}
```


### 3.3 `interop_events`

Represents homelessness-related **events/incidents**, aligned with:
- NGSI-LD custom type: `HomelessnessEvent`
- NIEM concepts: `em:Incident`, `act:Activity`

**Columns:**
- `ngsi_type` – default `HomelessnessEvent`
- `title`, `description`
- `category_code`, `severity_code`, `status_code`
- `start_time`, `end_time`
- `location_id` → `interop_locations`
- `subject_party_id` → `interop_parties` (person/organization involved)

**NGSI-LD Example:**

```jsonc
{
  "id": "urn:ngsi-ld:HomelessnessEvent:ev-001",
  "type": "HomelessnessEvent",
  "title": { "type": "Property", "value": "Emergency winter shelter overflow" },
  "category": { "type": "Property", "value": "shelter-capacity" },
  "severity": { "type": "Property", "value": "high" },
  "status": { "type": "Property", "value": "active" },
  "location": { "type": "Relationship", "object": "urn:ngsi-ld:Place:1234" }
}
```


### 3.4 `interop_service_requests`

Represents **service tickets**, aligned with:
- NGSI-LD `ServiceRequest` (FIWARE Smart City domain)
- City APIs like Open311 (service requests, status, priority)

**Columns:**
- `ngsi_type` – `ServiceRequest`
- `service_type_code` – aligns with Open311 `service_code`
- `status_code`, `priority_code`
- `summary`, `description`
- `opened_at`, `closed_at`
- `location_id` → `interop_locations`
- `requester_party_id`, `assigned_party_id` → `interop_parties`

**Open311-ish Mapping:**
- `service_request_id` ↔ `external_entity_id` in `external_entity_mappings`
- `service_code` ↔ `service_type_code`
- `status` ↔ `status_code`


### 3.5 `interop_resources`

Represents **assets / resources** used in homelessness response, designed with **Tractus-X** and supply chain in mind:

**Columns:**
- `resource_type` – e.g., `shelter-bed`, `vehicle`, `warehouse`, `equipment`
- `status_code`
- `location_id` → `interop_locations`
- `external_asset_id` – can hold **Tractus-X assetId** or similar.

This allows Tractus-X connectors or other data space connectors to:
- Reference your resources by `external_asset_id`
- Track asset flows across organizations.


### 3.6 `external_systems` & `external_entity_mappings`

These provide a generic mapping between **local interop entities** and any number of **external systems** (FIWARE brokers, city APIs, Tractus-X, etc.).

- `external_systems`:
  - `code` – e.g., `fiware-main`, `la-open311`, `tractusx-pilot`
  - `system_type` – `fiware`, `open311`, `tractus-x`, etc.

- `external_entity_mappings`:
  - `interop_table_name` – e.g., `interop_events`, `interop_service_requests`
  - `interop_id` – local UUID for the entity
  - `external_system_id` – which system
  - `external_entity_id` – the ID in that system (e.g., Open311 `service_request_id`, NGSI-LD entity ID in Fiware, Tractus-X assetId)

This gives you a **many-to-many** bridge between your world and multiple external worlds.

---

## 4. Linking Discussions to Interop Entities

### 4.1 Topics

`topics` table now includes:
- `interop_event_id` → `interop_events.id`
- `interop_service_request_id` → `interop_service_requests.id`

This enables:
- A topic dedicated to a **specific event**:
  - Example: incident at a shelter or encampment
- A topic attached to a **specific service request**:
  - Example: “LA 311 ticket #123456 about encampment cleanup on 5th & Main”

A hackathon team can:
- Create an `interop_event` from incoming NGSI-LD data or manually
- Create a `topic` that references that `interop_event_id`
- Use the Community UI to coordinate response ideas, capture feedback, and track learnings.


### 4.2 Business Processes as Higher-Level Tags

`business_processes` remains your curated taxonomy of:
- Emergency response
- Case management
- Housing navigation
- Logistics & supply chain
- Policy & advocacy
- Data & technology

You do **not** have to change this taxonomy to conform to NIEM or NGSI-LD; instead, you treat it as a **human-facing lens**:
- Each topic has: `business_process_id` (lens) + optional `interop_event_id` / `interop_service_request_id` (standardized anchor).

---

## 5. NIEM, FIWARE/NGSI-LD, and Tractus-X Mapping Summary

### 5.1 NIEM

- `interop_events` ↔ `em:Incident` / `act:Activity`
- `interop_locations` ↔ `nc:LocationType`
- `interop_parties` ↔ `nc:PersonType`, `nc:OrganizationType`
- `interop_service_requests` ↔ various `ServiceRequest` or `Activity` patterns
- `interop_resources` ↔ `nc:ItemType` or domain-specific asset types

You can extend with NIEM-style **code lists** for `category_code`, `status_code`, etc., as needed.


### 5.2 FIWARE / NGSI-LD

- All `interop_*` tables have `ngsi_id` and `ngsi_type` for direct mapping to NGSI-LD Entities
- Typical types:
  - `Place`, `Location`
  - `Person`, `Organization`
  - `HomelessnessEvent` (custom domain type)
  - `ServiceRequest` (FIWARE urban domain)
  - `Resource` (custom, can be made more specific as needed)

Adapters (future work) can:
- Query FIWARE Context Broker for NGSI-LD entities
- Upsert into `interop_*` tables
- Or push data from `interop_*` back into FIWARE as NGSI-LD JSON.


### 5.3 Tractus-X

- `interop_resources.external_asset_id` can store Tractus-X `assetId`
- Logistics business processes (supply-chain, warehousing, transportation, staffing) serve as the **process context** in which these assets are discussed.
- Future work: add tables to track **asset flows** and link to Tractus-X contract or policy IDs.

---

## 6. How Hackathon Teams Should Use This

### Basic Usage (No Interop)
- Just use `business_processes`, `topics`, `posts`, `profiles` as-is.
- Ignore the `interop_*` tables.

### Interop-Aware Projects
- When designing new features, prefer:
  - Creating a row in `interop_events` or `interop_service_requests`
  - Linking topics to those rows via `interop_event_id` / `interop_service_request_id`
  - Storing any external IDs in `external_entity_mappings`.

Example: **City 311 + FIWARE project**
1. Read NGSI-LD `ServiceRequest` from FIWARE.
2. Map to `interop_service_requests` row (insert/update).
3. Add `external_entity_mappings` entry linking to Fiware.
4. Create a `topic` with `interop_service_request_id` referencing that row.
5. Use the Community UI to crowdsource solutions.

---

## 7. Next Implementation Steps (Optional)

These are not yet implemented but are natural follow-ons:

1. **Supabase Functions / RPCs**
   - `create_ngsi_service_request(payload)` – to ingest NGSI-LD JSON
   - `export_ngsi_event(event_id)` – to emit NGSI-LD for a given `interop_event`

2. **Adapters**
   - FIWARE adapter (HTTP client) that syncs NGSI-LD entities with `interop_*` tables
   - Open311 adapter that maps Open311 service requests into `interop_service_requests`
   - Tractus-X adapter that maps `interop_resources` to assets in the dataspace.

3. **UI Enhancements**
   - Show linked events/requests on topic pages
   - Filter topics by event status, service request type, or resource/location.

---

## 8. Summary

- The **interop layer** (`interop_*` + `external_*`) gives you:
  - NGSI-LD–shaped entities for FIWARE/OASC
  - A path to NIEM-compatible naming and code lists
  - Hooks for city APIs (Open311-style) and Tractus-X assets
- The **discussion layer** stays hackathon-friendly and readable
- Topics can now be attached to **real-world, standards-based entities**, enabling:
  - Rich analytics
  - Cross-system integration
  - Future automation for city and service-provider workflows.
