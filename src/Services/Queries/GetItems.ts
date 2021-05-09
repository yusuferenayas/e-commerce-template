import {itemsPerPage, pathURls} from "Config";
import {axiosHelper} from "Services/AxiosHelper";
import {ItemModel} from "Models";

export type GetItemsReponse = {data: ItemModel[]; maxPageCount: number};

const getItems = async (
  page: number,
  type: string
): Promise<GetItemsReponse> => {
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
    },
  });

  const maxPageCount = link.split("page=")[3].split("&")[0];

  return {data, maxPageCount};
};

export default getItems;
