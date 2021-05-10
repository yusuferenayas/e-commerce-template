import {call, put, select, takeLatest} from "redux-saga/effects";
import getItems, {GetItemsReponse} from "Services/Queries/GetItems";
import {setItems, setMaxPage} from "Stores/App";
import {
  resetCurrentPage,
  storeSelectedBrands,
  resetSelectedBrand,
  setSelectedBrand,
  setSelectedTags,
  resetSelectedTags,
  storeSelectedTags,
} from ".";
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
  const selectedBrands: string[] = yield select(storeSelectedBrands);
  const selectedTags: string[] = yield select(storeSelectedTags);

  try {
    const itemsResult: GetItemsReponse = yield call(() =>
      getItems(currentPage, category, sort, selectedBrands, selectedTags)
    );
    yield put(setMaxPage(itemsResult.maxPageCount));
    yield put(setItems(itemsResult.data));
  } catch (error) {
    console.log(error);
  }
}

function* resetPageAndGetCurrentItems() {
  yield put(resetCurrentPage());
  yield getCurrentItems();
}

// Watchers
function* appSagasWatcher() {
  yield takeLatest(setCurrentPage, getCurrentItems);
  yield takeLatest(setSort, getCurrentItems);
  yield takeLatest(setCategory, resetPageAndGetCurrentItems);
  yield takeLatest(setSelectedBrand, resetPageAndGetCurrentItems);
  yield takeLatest(resetSelectedBrand, resetPageAndGetCurrentItems);
  yield takeLatest(setSelectedTags, resetPageAndGetCurrentItems);
  yield takeLatest(resetSelectedTags, resetPageAndGetCurrentItems);
}

export default appSagasWatcher;
