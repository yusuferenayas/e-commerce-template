// Product

export const itemsPerPage = 16;

// Category

export const defaultCategory: string = "mug";
export const categories: string[] = ["mug", "shirt"];

// Sort

type SortOption = {
  value: string;
  label: string;
};

export const sortOptions: SortOption[] = [
  {
    value: "priceAsc",
    label: "Price low to high",
  },
  {
    value: "priceDesc",
    label: "Price high to low",
  },
  {
    value: "dateAsc",
    label: "Old to new",
  },
  {
    value: "dateDesc",
    label: "New to old",
  },
];
