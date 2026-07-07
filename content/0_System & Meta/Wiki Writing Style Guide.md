This wiki uses an **in-universe historical tone** inspired by settings such as _Eberron_, _Dark Souls_, and speculative mythological scholarship. Articles should read as though they were compiled by scholars, archivists, theologians, or historians working from established records and modern-era knowledge.

The goal is not to create dramatic prose or cinematic storytelling, but to present lore as factual record wherever possible. Use disputed interpretation only when the uncertainty still exists for people living in the modern era of the setting.

# Reusable Prompt Template

You can reuse something like this in future prompts:

> Write in a formal, restrained, information-dense style focused on describing established beliefs, recorded accounts, and commonly referenced metaphysical models.  
Avoid melodrama, cinematic pacing, and emotional narration, but include concrete physical and sensory detail whenever it clarifies what is actually happening or what a phenomenon is actually like.  
State confirmed facts directly as facts. Use uncertainty language only when modern-era people in Arcanthys would still consider the point unresolved. Prefer in-world uncertainty phrasing over academic framing.  
Maintain a neutral, grounded tone with minimal stylistic flourish.  
Do not use cinematic phrasing, poetic language, or dramatic one-liners.  
Avoid value judgments or implied authority (do not describe something as “dominant,” “accepted,” or “orthodox”).  
Where uncertainty exists, state the uncertainty plainly without citing abstract source authority.  
Focus on mechanisms, classifications, observed effects, and historical or arcane consequences rather than interpretation, but describe those mechanisms and effects in concrete, physical terms rather than abstract or mechanical ones.  
Prioritize clarity and precision over mood-setting for its own sake. Grounded physical detail serves precision; dramatic atmosphere does not.

# Core Principles

## Write Like a Historian, Not a Novelist

Pages should describe events, beliefs, and entities in a factual and analytical manner.

Avoid:

- dramatic reveals,
- cinematic one-liners,
- emotional narration,
- or prose written for spectacle.

Instead:

- explain causes and consequences,
- describe ideological conflicts,
- and present mythology with scholarly distance.

### Avoid

> “And thus the heavens wept as the gods betrayed one another.”

### Prefer

> “The conflict marked the first major division among the gods and permanently altered the structure of divine worship.”

---

# Facts First, Uncertainty Only When Current

**Factual reference material** (gods' domains, factions' structures, established mechanics, confirmed doctrines, settled historical outcomes) should be stated directly and clearly.

Use uncertainty language only when the uncertainty still exists in the modern era of the world.

**For uncertain content**, use phrasing like:

- “Some believe…”
- “It is said…”
- “According to legend…”
- “No one knows for certain.”
- “The truth remains unknown.”
- “One possibility is…”

Avoid phrasing like:

- “According to certain sources…”
- “Scholars cannot reach a consensus…”
- “Most scholars believe…”
- “Historians argue…”

**For factual pages**, avoid false uncertainty. A god's established tenets, powers, or worship practices should be stated clearly. Only use uncertainty phrasing where actual ambiguity remains unresolved for contemporary in-world observers.

---

# Prioritize Clarity Over Drama

Sentences should be clear, structured, and information-dense.

Prefer:

- precise descriptions,
- logical progression,
- and historical framing.

Avoid:

- overly poetic metaphors,
- excessive adjectives,
- and melodramatic wording.

### Avoid

> “The terrible wound screamed across reality.”

### Prefer

> “The event destabilized the surrounding planes and released uncontrolled primordial essence.”

---

# Ground Abstractions in Physical Detail

Explaining a mechanism does not mean describing it like a game system or piece of software. Avoid mechanical or technical vocabulary (“logic,” “overlay,” “instance,” “condition,” “trigger,” “replaces,” “state”) even when describing metaphysical rules. This language reads like a rulebook or code comment, not an archival account, and breaks the in-universe illusion.

Instead, describe what the phenomenon looks, sounds, or feels like to someone present. Name the underlying mechanism if useful, but anchor it in a physical or sensory image rather than an abstract state change.

### Avoid

> “During strong resonance, fragments of Noctyran domains may overlap with the Material Plane, temporarily replacing local terrain logic with Noctyra-like conditions. These overlays fade when resonance recedes.”

### Prefer

> “When the resonance grows strong enough, pieces of Noctyra itself bleed into the Material Plane. For as long as it lasts, the ground and air take on the plane’s alien qualities, until the boundary settles and the world reasserts itself.”

---

# Explain Events Through Systems

Large historical events should feel driven by:

- ideology,
- theology,
- metaphysical rules,
- political structures,
- or cosmic consequences.

The setting should feel internally consistent.

Instead of:

> “The gods went to war because they hated each other.”

Prefer:

> “The conflict emerged from irreconcilable disagreements regarding the relationship between divine identity and mortal belief.”

---

# Use Formal but Readable Language

The tone should feel elevated without becoming archaic.

Prefer:

- formal modern English,
- measured sentence structure,
- and deliberate pacing.

Avoid:

- slang,
- modern casual phrasing,
- or faux-Shakespearean language.

### Avoid

> “Lo, the ancient gods did descend upon the realm.”

### Prefer

> “In the earliest ages, the gods walked openly upon the world.”

---

# Maintain Scholarly Distance

Even major revelations should be written neutrally.

The narration should not:

- celebrate,
- condemn,
- or emotionally react to events.

Instead, present information as though documenting it for future readers.

### Avoid

> “The First Gods committed an unforgivable betrayal.”

### Prefer

> “Later traditions interpreted the actions of the First Gods in sharply different ways.”

---

# Use Mythic Scale Sparingly

The setting should feel ancient and vast, but scale should emerge naturally through implication rather than constant exaggeration.

Use:

- references to ages,
- civilizations,
- theological shifts,
- and cosmic consequences.

Avoid constant escalation like:

- “infinite,”
- “unimaginable,”
- “eternal horror,”
- “beyond comprehension.”

Understatement often makes the world feel larger.

---

# Structure Pages Like Reference Material

Pages should resemble encyclopedia or archival entries. The tone depends on the content type:

## Obsidian Title and Infobox Rule

In this vault, the file name is the page title.

- Never add a standalone title `#` heading at the very top of a page; the file name already serves as the page title.
- A `#` heading is still valid for normal body sections after the lead paragraph.
- A `#` heading inside an infobox callout block (for example, `> # Name`) is also valid.

Use an infobox only when at least one of the following is true:

- The page has enough concrete details to justify a quick-reference summary.
- Comparable pages of the same type already use an infobox and consistency matters.

If neither condition is met, skip the infobox.

### Aliases Property

Any page with alternate names, titles, or epithets (a god's titles, a plane's other names, an event's other names, and so on) should list them as an Obsidian `aliases` frontmatter property at the very top of the file:

```
---
aliases:
  - Alias One
  - Alias Two
---
```

Include every title or epithet used to refer to the subject elsewhere in the wiki. If the file title contains extra qualifiers (for example, a file named "Name, The Epithet"), also alias the bare name on its own so it can be linked to directly.

After frontmatter (and after an infobox when one is used), begin the page body with a short defining lead paragraph.

- The first sentence should clearly define what the subject is.
- Put the page name in bold on first mention.
- Keep this lead concise and factual before moving into section headings.

**For factual/reference pages** (gods, factions, settled doctrines, confirmed mechanics):
- Be direct and clear
- Use precise language and established facts
- Organize logically for lookup and reference
- Avoid false uncertainty

**For historical/mythological pages** (ancient events, disputed accounts, contested lore):
- Apply in-world historical framing
- Acknowledge uncertainty only where modern-era evidence remains incomplete or contested
- Present contradictory sources
- Maintain distance from narrative

Recommended structure (adapt as needed):

- Overview
- History / Major Events
- Core Principles / Doctrines / Mechanics
- Beliefs and Interpretations (where applicable)
- Relations / Worship / Effects (depending on subject)
- Consequences
- Modern Understanding

Sections should transition logically and build upon prior information.

---

# Gods and Mythology

Gods should feel:

- powerful,
- alien,
- ideological,
- and shaped by history.

Avoid portraying deities as simple embodiments of good or evil.

Divine conflict should usually emerge from:

- philosophy,
- survival,
- identity,
- or differing understandings of creation.

Religious narratives can reflect propaganda, cultural memory, or incomplete truth, but do not apply this framing to points already settled in modern-era canon.

---

# Tone Summary

The ideal tone is:

> “Established canon presented as factual reference, with uncertainty used only where modern-era knowledge is genuinely incomplete.”

Or more simply:

> “Write facts as facts, and speculate only where people in the present age of the setting still do not know.”

---

# Punctuation

Do not use em dashes (—) anywhere in wiki prose. Rewrite with a comma, semicolon, colon, period, or parentheses instead, or restructure the sentence. This applies to all pages, not just new ones; when editing an existing page for other reasons, remove any em dashes you encounter along the way.

---

# Terminology

Use **[[Freeborn]]** as the standard collective term for non-human peoples (elves, dwarves, orcs, and others) in modern-era, neutral narration. Do not use "demihuman" or "non-human" for this purpose; the latter is specifically the Dominion of Solvaris's own imperial/legal term and should be reserved for period-accurate description of Solvarian-era attitudes, law, and documents.

---

# Authoring Safeguard

Unless specifically asked to generate something new, do not create new lore or ideas.

If an edit would introduce new lore, concepts, factions, events, mechanics, or setting ideas, confirm with the user first that they want that change.