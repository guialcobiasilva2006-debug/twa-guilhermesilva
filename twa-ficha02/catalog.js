export const byCategory = (list, cat) =>
  list.filter((i) => i.category.toLowerCase() === cat.toLowerCase());

export const search = (list, text) => {
  const terms = text.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return list.filter((item) => {
    const nameLower = item.name.toLowerCase();
    const tagsLower = item.tags.map((t) => t.toLowerCase());

    return terms.every(
      (term) => nameLower.includes(term) || tagsLower.some((tag) => tag.includes(term))
    );
  });
};

export const total = (list) =>
  list.reduce((sum, item) => sum + item.price, 0);

export const top = (list, n) =>
  [...list].toSorted((a, b) => b.price - a.price).slice(0, n);

export const categories = (list) =>
  [...new Set(list.map((item) => item.category))].toSorted();

export const withDiscount = (list, pct) =>
  list.map((item) => ({
    ...item,
    price: Number((item.price * (1 - pct / 100)).toFixed(2))
  }));

export const groupByCategory = (list) =>
  Object.groupBy(list, (item) => item.category);
