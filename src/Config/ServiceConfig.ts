export const baseURL = "http://localhost:3004/";

export type pathURLStrings = "items" | "companies";

export const pathURls: {[key in string]: pathURLStrings} = {
  getItems: "items",
  getCompanies: "companies",
};
