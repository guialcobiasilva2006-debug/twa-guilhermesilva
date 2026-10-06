export type Item = {
  id: number;
  name: string;
  category: string;
  price: number;
  tags: string[];
  specifications: {
    developer: string;
    year: number;
  };
};

export const byCategory = (list: Item[], cat: string): Item[] =>
  list.filter((i) => i.category.toLowerCase() === cat.toLowerCase());

export const total = (list: Item[]): number =>
  list.reduce((sum, item) => sum + item.price, 0);
