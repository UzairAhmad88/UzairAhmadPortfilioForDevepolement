# Personal Engineering Timeline — Date System & Precision Specification

## 1. Date Precision Principles

The platform follows a strict factual accuracy requirement. Dates are never fabricated or guessed. If an exact day is not recorded in repository commits or deployment metadata, the system utilizes lower-granularity precision.

---

## 2. Supported Precisions & Formatting

| Precision | Input String Format | Example Input | Display Output | Standard Usage |
|---|---|---|---|---|
| `day` | `YYYY-MM-DD` | `'2024-09-15'` | `September 15, 2024` | Exact publication or release dates. |
| `month` | `YYYY-MM` | `'2025-01'` | `January 2025` | Monthly verified milestone or sprint completion. |
| `year` | `YYYY` | `'2024'` | `2024` | Projects where only the active development year is verified. |
| `range` | `YYYY` + `YYYY` | `'2024'`, `'2025'` | `2024 – 2025` | Multi-year architectures or ongoing research programs. |

---

## 3. Formatting Logic

Implemented in `src/lib/timeline/timelineEngine.ts`:

```typescript
export function formatTimelineDate(
  dateStr: string,
  dateEnd?: string
): { display: string; precision: 'year' | 'month' | 'day' | 'range' } {
  if (dateEnd) {
    return {
      display: `${dateStr} – ${dateEnd}`,
      precision: 'range',
    };
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const parts = dateStr.split('-');
    const year = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return {
      display: `${monthNames[monthIndex]} ${day}, ${year}`,
      precision: 'day',
    };
  }

  if (/^\d{4}-\d{2}$/.test(dateStr)) {
    const parts = dateStr.split('-');
    const year = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return {
      display: `${monthNames[monthIndex]} ${year}`,
      precision: 'month',
    };
  }

  return {
    display: dateStr,
    precision: 'year',
  };
}
```

---

## 4. Sorting & Normalization Rules

When sorting two events with different precisions within the same year:
1. `YYYY-MM-DD` strings are compared directly.
2. `YYYY` strings are normalized to `YYYY-01-01` for chronological comparison purposes.
3. Event type priority and alphabetical title tie-breakers guarantee deterministic build output.
