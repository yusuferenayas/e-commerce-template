import {ItemModel, CompanyModel} from "Models";

export interface AppState {
  isLoading: boolean;
  items: ItemModel[] | undefined;
  companies: CompanyModel[] | undefined;
  maxPageCount: number;
}
