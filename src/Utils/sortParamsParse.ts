export const sortParamsParse = (
  param: string
): {_sort: string; _order: string} => {
  switch (param) {
    case "priceAsc":
      return {
        _sort: "price",
        _order: "asc",
      };
    case "priceDesc":
      return {
        _sort: "price",
        _order: "desc",
      };
    case "dateAsc":
      return {
        _sort: "added",
        _order: "asc",
      };
    case "dateDesc":
      return {
        _sort: "added",
        _order: "desc",
      };
    default:
      return {
        _sort: "",
        _order: "",
      };
  }
};
