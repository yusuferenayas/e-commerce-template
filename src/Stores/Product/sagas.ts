import {call, put, select, takeLatest} from "redux-saga/effects";
import getItems, {GetItemsReponse} from "Services/Queries/GetItems";
import {setItems} from "Stores/App";
import {setCurrentPage, storeCurrentPage} from "./slices";

function* handleOnSetCurrentPage() {
  const currentPage: number = yield select(storeCurrentPage);

  try {
    const itemsResult: GetItemsReponse = yield call(() =>
      getItems(currentPage, "mug")
    );

    yield put(setItems(itemsResult.data));
  } catch (error) {
    console.log(error);
  }
}

// Watchers
function* appSagasWatcher() {
  yield takeLatest(setCurrentPage, handleOnSetCurrentPage);
}

export default appSagasWatcher;
