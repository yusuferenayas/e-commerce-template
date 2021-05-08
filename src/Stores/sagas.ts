import {all, call, fork, put, take} from "redux-saga/effects";
import {onAppInit} from "./App";
import appSaga from "./App/sagas";

export function* initialSaga() {
  // yield put(cmsRequest());
  // yield take(cmsRequestSuccess);

  // Indicate that the app is initialized
  yield put(onAppInit());
}

function* rootSaga() {
  yield fork(initialSaga);
  // Add Sagas Here
  yield all([appSaga].map(fork));
}

export default rootSaga;
