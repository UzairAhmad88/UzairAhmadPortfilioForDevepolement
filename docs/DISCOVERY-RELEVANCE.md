# DISCOVERY RELEVANCE & SCORING ALGORITHM
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Functional Sorting vs. Evaluative Ranking

The Discovery engine explicitly separates internal functional matching from user-facing presentations:
- **Internal Score:** An integer weighting score used purely to order search results so that exact matches appear above broad keyword occurrences.
- **Zero Displayed Scores:** The UI **never** shows "98% match", "Top Result", "Best Project", or numerical relevance scores.
- **Zero Quality Bias:** No project or research piece is ranked as "superior" or "more valuable" than another; results are sorted solely on textual and facet alignment.

---

## 2. Deterministic Weighting Specification

1. **Exact Title Match (`+150`):** Query exactly equals the entity title.
2. **Title Substring (`+60`):** Query is a substring within the entity title.
3. **Canonical Technology Match (`+45`):** Entity technologies contain the query or an alias thereof.
4. **Topic Match (`+35`):** Entity topics contain the query term.
5. **Excerpt Substring (`+25`):** Excerpt or short description contains the query.
6. **Searchable Token Occurrence (`+10` per token):** Any word in the query matches tokens across the full searchable text.
7. **Alphabetical Secondary Tie-Breaker:** Entities with equal matching weights are ordered alphabetically by title.
