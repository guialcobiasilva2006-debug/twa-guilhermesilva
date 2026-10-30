export const byCategory = (list, cat) =>
  list.filter((item) => item.category === cat);

export const search = (list, text) => {
  const lower = text.toLowerCase();
  return list.filter(
    (item) =>
      item.name.toLowerCase().includes(lower) ||
      item.tags.some((tag) => tag.toLowerCase().includes(lower))
  );
};

export const total = (list) =>
  list.reduce((sum, item) => sum + item.price, 0);

export const top = (list, n) =>
  [...list].toSorted((a, b) => b.price - a.price).slice(0, n);

export const categories = (list) =>
  [...new Set(list.map((item) => item.category))].sort();

export const withDiscount = (list, pct) =>
  list.map((item) => ({
    ...item,
    price: +(item.price * (1 - pct / 100)).toFixed(2)
  }));

  export function sortByPrice(list, dir = 'desc') {
  return [...list].sort((a, b) => {
    if (dir === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
}
