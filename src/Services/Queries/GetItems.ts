import {itemsPerPage, pathURls} from "Config";
import {axiosHelper} from "Services/AxiosHelper";
import {ItemModel} from "Models";
import {sortParamsParse} from "Utils/sortComposer";

export type GetItemsReponse = {data: ItemModel[]; maxPageCount: number};

const getItems = async (
  page: number,
  type: string,
  sort: string
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
    },
  });

  const maxPageCount = link.split("page=")[3].split("&")[0];

  return {data, maxPageCount};
};

export default getItems;
