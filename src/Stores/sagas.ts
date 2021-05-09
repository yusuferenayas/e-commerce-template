import {all, fork, put} from "redux-saga/effects";
import {onAppInit, onAppReady} from "./App";
import appSaga from "./App/sagas";

export function* initialSaga() {
  yield put(onAppInit());

  // Indicate that the app is initialized
  yield put(onAppReady());
}

function* rootSaga() {
  yield fork(initialSaga);
  // Add Sagas Here
  yield all([appSaga].map(fork));
}

export default rootSaga;
