import {CompanyModel, ItemModel} from "Models";
import {call, put, takeLatest} from "redux-saga/effects";
import getCompanies from "Services/Queries/GetCompanies";
import getItems from "Services/Queries/GetItems";
import {onAppInit, setCompanies, setItems} from "./slices";

// Workers

function* handleOnAppInit() {
  try {
    const itemsResult: ItemModel[] = yield call(() => getItems(0, "mug"));
    const companiesResult: CompanyModel[] = yield call(() => getCompanies());

    yield put(setItems(itemsResult));
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
