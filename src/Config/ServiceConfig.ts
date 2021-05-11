// export const baseURL = "http://localhost:3004/" //for Local Server
export const baseURL = "https://json-server-yea.herokuapp.com/"; // for Prod Server

export type pathURLStrings = "items" | "companies" | "tags";
export type keyURLStrings = "getItems" | "getCompanies" | "getTags";

export const pathURls: {[key in keyURLStrings]: pathURLStrings} = {
  getItems: "items",
  getCompanies: "companies",
  getTags: "tags",
};
