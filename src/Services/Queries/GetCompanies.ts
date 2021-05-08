import {pathURls} from "Config";
import {axiosHelper} from "Services/AxiosHelper";
import {GetCompaniesModel} from "Models";

const getCompanies = async (): Promise<GetCompaniesModel> =>
  (
    await axiosHelper({
      method: "get",
      url: pathURls.getCompanies,
    })
  ).data;

export default getCompanies;
