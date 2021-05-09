import {call, put, select, takeLatest} from "redux-saga/effects";
import getItems, {GetItemsReponse} from "Services/Queries/GetItems";
import {setItems} from "Stores/App";
import {
  setCategory,
  setCurrentPage,
  setSort,
  storeCategory,
  storeCurrentPage,
  storeSort,
} from "./slices";

function* getCurrentItems() {
  const currentPage: number = yield select(storeCurrentPage);
  const category: string = yield select(storeCategory);
  const sort: string = yield select(storeSort);

  try {
    const itemsResult: GetItemsReponse = yield call(() =>
      getItems(currentPage, category, sort)
    );

    yield put(setItems(itemsResult.data));
  } catch (error) {
    console.log(error);
  }
}

// Workers
function* handleOnSetCurrentPage() {
  yield getCurrentItems();
}

function* handleOnSetCategory() {
  yield getCurrentItems();
}

function* handleOnSetSort() {
  yield getCurrentItems();
}

// Watchers
function* appSagasWatcher() {
  yield takeLatest(setCurrentPage, handleOnSetCurrentPage);
  yield takeLatest(setCategory, handleOnSetCategory);
  yield takeLatest(setSort, handleOnSetSort);
}

export default appSagasWatcher;
