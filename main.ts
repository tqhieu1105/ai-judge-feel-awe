import { mkdirSync, writeFileSync } from 'node:fs';

const text = 'On the ferry home, you lean against your mother. Her knitting rests in her lap. Beyond the glass, a star holds still while the black water folds and unfolds. You wake once. The wool has slipped over your knees. The star is still there.';

// The gate counts Unicode code points, not JavaScript UTF-16 code units.
const characters = [...text].length;
if (characters < 1 || characters > 280 || text.trim().length === 0) {
  throw new Error('Entry must contain 1 to 280 characters and visible text.');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
