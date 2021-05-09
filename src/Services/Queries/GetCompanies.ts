import {pathURls} from "Config";
import {axiosHelper} from "Services/AxiosHelper";
import {CompanyModel} from "Models";

const getCompanies = async (): Promise<CompanyModel> =>
  (
    await axiosHelper({
      method: "get",
      url: pathURls.getCompanies,
    })
  ).data;

export default getCompanies;
