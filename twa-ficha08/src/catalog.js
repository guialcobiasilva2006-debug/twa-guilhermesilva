export function search(items, query) {
  const q = query.toLowerCase()
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      (item.category && item.category.toLowerCase().includes(q))
  )
}