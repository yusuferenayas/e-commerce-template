import {pathURls} from "Config";
import {axiosHelper} from "Services/AxiosHelper";
import {TagModel} from "Models";

const getTags = async (): Promise<TagModel[]> =>
  (
    await axiosHelper({
      method: "get",
      url: pathURls.getTags,
    })
  ).data;

export default getTags;
