export const baseURL = "http://localhost:3004/";

export type pathURLStrings = "items" | "companies" | "tags";
export type keyURLStrings = "getItems" | "getCompanies" | "getTags";

export const pathURls: {[key in keyURLStrings]: pathURLStrings} = {
  getItems: "items",
  getCompanies: "companies",
  getTags: "tags",
};
