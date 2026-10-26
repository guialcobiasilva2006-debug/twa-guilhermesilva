import assert from 'node:assert/strict';
import { items } from './data.js';
import {
  byCategory,
  search,
  total,
  top,
  categories,
  withDiscount,
  groupByCategory
} from './catalog.js';

assert.equal(byCategory(items, 'fps').length, 3);
assert.equal(search(items, 'open world').length, 3);
assert.equal(Math.round(total(items)), 290);
assert.equal(top(items, 1)[0].name, 'Call of Duty: Modern Warfare III');
assert.deepEqual(categories(items), ['action', 'fps', 'rpg', 'sports']);

const discounted = withDiscount(items, 10);
assert.equal(discounted[0].price, 62.99);
assert.equal(items[0].price, 69.99);

const grouped = groupByCategory(items);
assert.equal(grouped.fps.length, 3);
