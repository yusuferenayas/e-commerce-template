import {CompanyModel} from "Models";
import {call, put, select, takeLatest} from "redux-saga/effects";
import getCompanies from "Services/Queries/GetCompanies";
import getItems, {GetItemsReponse} from "Services/Queries/GetItems";
import getTags from "Services/Queries/GetTags";
import {storeCurrentPage, storeCategory, storeSort} from "Stores/Product";
import {onAppInit, setCompanies, setItems, setMaxPage, setTags} from "./slices";

// Workers

function* handleOnAppInit() {
  const currentPage: number = yield select(storeCurrentPage);
  const category: string = yield select(storeCategory);
  const sort: string = yield select(storeSort);

  try {
    const itemsResult: GetItemsReponse = yield call(() =>
      getItems(currentPage, category, sort)
    );
    const companiesResult: CompanyModel[] = yield call(() => getCompanies());
    const tagsResult: CompanyModel[] = yield call(() => getTags());

    yield put(setItems(itemsResult.data));
    yield put(setMaxPage(itemsResult.maxPageCount));
    yield put(setCompanies(companiesResult));
    yield put(setTags(tagsResult));
  } catch (error) {
    console.log(error);
  }
}

// Watchers
function* appSagasWatcher() {
  yield takeLatest(onAppInit, handleOnAppInit);
}

// eslint-disable-next-line
export default appSagasWatcher;
