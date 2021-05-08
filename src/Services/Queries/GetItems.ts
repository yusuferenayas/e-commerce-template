import {pathURls} from "Config";
import {axiosHelper} from "Services/AxiosHelper";
import {GetItemsModel} from "Models";

const getItems = async (): Promise<GetItemsModel> =>
  (
    await axiosHelper({
      method: "get",
      url: pathURls.getItems,
    })
  ).data;

export default getItems;
