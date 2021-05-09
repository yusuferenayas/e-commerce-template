import {CompanyModel} from "Models";
import {call, put, takeLatest} from "redux-saga/effects";
import getCompanies from "Services/Queries/GetCompanies";
import getItems, {GetItemsReponse} from "Services/Queries/GetItems";
import {onAppInit, setCompanies, setItems, setMaxPage} from "./slices";

// Workers

function* handleOnAppInit() {
  try {
    const itemsResult: GetItemsReponse = yield call(() => getItems(1, "mug"));
    const companiesResult: CompanyModel[] = yield call(() => getCompanies());

    yield put(setItems(itemsResult.data));
    yield put(setMaxPage(itemsResult.maxPageCount));
    yield put(setCompanies(companiesResult));
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
