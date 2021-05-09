import {itemsPerPage, pathURls} from "Config";
import {axiosHelper} from "Services/AxiosHelper";
import {ItemModel} from "Models";

const getItems = async (
  page: number,
  type: "mug" | "shirt"
): Promise<ItemModel> =>
  (
    await axiosHelper({
      method: "get",
      url: pathURls.getItems,
      params: {
        _page: page,
        _limit: itemsPerPage,
        itemType: type,
      },
    })
  ).data;

export default getItems;
