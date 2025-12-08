// src/lib/parseBibtex.js
export function parseBibFile(text) {
  const entries = [];
  const raw = text.split('@').slice(1);

  for (const entryText of raw) {
    const entry = {};

    // Extract everything inside @type{ ... }
    const typeMatch = entryText.match(/^(\w+)\s*{/);
    if (!typeMatch) continue;

    // Extract the label (before the first comma)
    const labelMatch = entryText.match(/^\w+\s*{\s*([^,]+),/);
    if (labelMatch) entry.label = labelMatch[1].trim();

    // Get main content
    const body = entryText.substring(typeMatch[0].length, entryText.lastIndexOf('}'));

    // Extract key/value fields
    const fieldRegex = /(\w+)\s*=\s*[{"]([^"}]+)[}"]/g;
    let m;

    while ((m = fieldRegex.exec(body))) {
      entry[m[1].toLowerCase()] = m[2].trim();
    }

    // Format authors
    if (entry.author) {
      entry.author = formatAuthors(entry.author);
    }

    // Normalize year as integer
    entry.year = entry.year ? parseInt(entry.year, 10) : null;

    entries.push(entry);
  }

  return entries;
}

// ------------------------------------------------------------
// Format authors: "Last, First and Last, First" → "F. Last, F. Last"
// ------------------------------------------------------------
function formatAuthors(authorField) {
  const authors = authorField.split(/\s+and\s+/i);

  const formatted = authors.map(a => {
    // Expect: "Last, First Middle"
    const parts = a.split(',');
    if (parts.length < 2) return a;

    const last = parts[0].trim();
    const firstNames = parts[1].trim().split(/\s+/);

    // Handle hyphenated names: "Pierre-Paul" → "P.-P."
    const firstInitials = firstNames
      .map(name => {
        if (name.includes('-')) {
          return name
            .split('-')
            .map(n => n[0].toUpperCase() + '.')
            .join('-');
        }
        return name[0].toUpperCase() + '.';
      })
      .join(' ');

    return `${firstInitials} ${last}`;
  });

  return formatted.join(', ');
}
