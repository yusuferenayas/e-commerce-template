import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLatest} from "redux-saga/effects";
// import {onInıtDataRequest} from "./slices";

// Workers

function* handleOnInıtRequestSaga({payload}: PayloadAction<string>) {
  // try {
  //   const onLoginResult: OnInıtModel = yield call(() => onInıtData(payload));
  //   yield put(onInıtDataRequestSuccess(onLoginResult));
  // } catch (error) {
  //   yield put(onInıtDataRequestError(error));
  // }
}

// Watchers
function* appSagasWatcher() {
  // yield takeLatest(onInıtDataRequest, handleOnInıtRequestSaga);
}

// eslint-disable-next-line
export default appSagasWatcher;
