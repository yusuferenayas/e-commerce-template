import {all, fork, put} from "redux-saga/effects";
import {onAppInit, onAppReady} from "./App";
import appSaga from "./App/sagas";
import productSaga from "./Product/sagas";

export function* initialSaga() {
  yield put(onAppInit());

  // Indicate that the app is initialized
  yield put(onAppReady());
}

function* rootSaga() {
  yield fork(initialSaga);
  // Add Sagas Here
  yield all([appSaga, productSaga].map(fork));
}

export default rootSaga;
