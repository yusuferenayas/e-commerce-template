import createSagaMiddleware from "redux-saga";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

import {AppState} from "./App";

const sagaMiddleware = createSagaMiddleware();
// serializableCheck and immutableCheck should be set to true after their issue has been solved
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    immutableCheck: false,
    serializableCheck: false,
  }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export interface RootState {
  app: AppState;
}

export default store;
