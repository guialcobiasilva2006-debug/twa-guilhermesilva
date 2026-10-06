import { writeFile } from 'node:fs/promises';
import { items } from './data.js';
import {
  byCategory,
  search,
  total,
  top,
  categories
} from './catalog.js';

const [cmd, ...args] = process.argv.slice(2);

function formatItem(item) {
  return `${item.id} · ${item.name} (${item.category}) - ${item.price.toFixed(2)}€`;
}

if (!cmd) {
  items.map(formatItem).forEach((line) => console.log(line));
} else if (cmd === 'top') {
  const limit = Number(args[0]) || 3;
  top(items, limit).map(formatItem).forEach((line) => console.log(line));
} else if (cmd === 'search') {
  const query = args.join(' ');
  search(items, query).map(formatItem).forEach((line) => console.log(line));
} else if (cmd === 'report') {
  const reportData = {
    count: items.length,
    total: Number(total(items).toFixed(2)),
    categories: categories(items),
    top3: top(items, 3)
  };

  await writeFile('report.json', JSON.stringify(reportData, null, 2), 'utf-8');
  console.log('Relatório criado com sucesso em report.json!');
} else {
  const categoryResults = byCategory(items, cmd);
  if (categoryResults.length > 0) {
    categoryResults.map(formatItem).forEach((line) => console.log(line));
  } else {
    console.log(`Nenhum resultado encontrado para: "${cmd}"`);
  }
}
