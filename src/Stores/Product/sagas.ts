import {call, put, select, takeLatest} from "redux-saga/effects";
import getItems, {GetItemsReponse} from "Services/Queries/GetItems";
import {setItems, setMaxPage} from "Stores/App";
import {resetBrand, setBrand, storeBrands} from ".";
import {
  setCategory,
  setCurrentPage,
  setSort,
  storeCategory,
  storeCurrentPage,
  storeSort,
} from "./slices";

// Workers
function* getCurrentItems() {
  const currentPage: number = yield select(storeCurrentPage);
  const category: string = yield select(storeCategory);
  const sort: string = yield select(storeSort);
  const brands: string[] = yield select(storeBrands);

  try {
    const itemsResult: GetItemsReponse = yield call(() =>
      getItems(currentPage, category, sort, brands)
    );
    yield put(setMaxPage(itemsResult.maxPageCount));
    yield put(setItems(itemsResult.data));
  } catch (error) {
    console.log(error);
  }
}

// Watchers
function* appSagasWatcher() {
  yield takeLatest(setCurrentPage, getCurrentItems);
  yield takeLatest(setCategory, getCurrentItems);
  yield takeLatest(setSort, getCurrentItems);
  yield takeLatest(setBrand, getCurrentItems);
  yield takeLatest(resetBrand, getCurrentItems);
}

export default appSagasWatcher;
