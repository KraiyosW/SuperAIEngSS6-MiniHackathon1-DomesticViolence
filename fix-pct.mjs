import fs from 'fs';
import path from 'path';

const file = './src/lib/data.ts';
let content = fs.readFileSync(file, 'utf-8');

// The original pattern I used might be `pct: Math.round((v.count / total) * 100)`
// or `pct: Math.round((c / total) * 100)` etc.
// Better regex: `Math\.round\(([^)]+) \* 100\)` -> `Number(($1 * 100).toFixed(1))`

content = content.replace(/Math\.round\(([^)]+ \* 100)\)/g, 'Number(($1).toFixed(1))');

fs.writeFileSync(file, content);
console.log('Fixed pct in data.ts');
