import {itemsPerPage, pathURls} from "Config";
import {axiosHelper} from "Services/AxiosHelper";
import {ItemModel} from "Models";
import {sortParamsParse} from "Utils/sortParamsParse";
import qs from "qs";

export type GetItemsReponse = {data: ItemModel[]; maxPageCount: number};

const getItems = async (
  page: number,
  type: string,
  sort: string,
  brands?: string[],
  tags?: string[]
): Promise<GetItemsReponse> => {
  const {_order, _sort} = sortParamsParse(sort);

  const {
    data,
    headers: {link},
  } = await axiosHelper({
    method: "get",
    url: pathURls.getItems,
    params: {
      _page: page,
      _limit: itemsPerPage,
      itemType: type,
      _order,
      _sort,
      ...(brands && brands.length > 0 && {manufacturer: brands}),
      ...(tags && tags.length > 0 && {tags_like: tags}),
    },
    paramsSerializer: (params) => {
      return qs.stringify(params);
    },
  });

  const pageLinks = link.split("page=");
  const maxPageCount = pageLinks[pageLinks.length - 1].split("&")[0];

  return {data, maxPageCount};
};

export default getItems;
