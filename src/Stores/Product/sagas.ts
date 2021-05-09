import {call, put, select, takeLatest} from "redux-saga/effects";
import getItems, {GetItemsReponse} from "Services/Queries/GetItems";
import {setItems} from "Stores/App";
import {
  setCategory,
  setCurrentPage,
  storeCategory,
  storeCurrentPage,
} from "./slices";

function* getCurrentItems() {
  const currentPage: number = yield select(storeCurrentPage);
  const category: string = yield select(storeCategory);

  try {
    const itemsResult: GetItemsReponse = yield call(() =>
      getItems(currentPage, category)
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

// Watchers
function* appSagasWatcher() {
  yield takeLatest(setCurrentPage, handleOnSetCurrentPage);
  yield takeLatest(setCategory, handleOnSetCategory);
}

export default appSagasWatcher;
