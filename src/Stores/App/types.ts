import {ItemModel, CompanyModel, TagModel} from "Models";

export interface AppState {
  isLoading: boolean;
  items: ItemModel[] | undefined;
  companies: CompanyModel[] | undefined;
  tags: TagModel[] | undefined;
  maxPageCount: number;
}
