import { all, fork } from "redux-saga/effects";
import { watchLoginSaga, watchSignupSaga } from "./userSaga";
import {
  watchTodoRequest,
  watchAddTodoRequest,
  watchCheckTodoRequest,
  watchUpdateTodoRequest,
  watchDeleteTodoRequest,
} from "./todoSaga";

export function* rootSaga() {
  yield all([
    fork(watchLoginSaga),
    fork(watchSignupSaga),
    fork(watchTodoRequest),
    fork(watchAddTodoRequest),
    fork(watchCheckTodoRequest),
    fork(watchUpdateTodoRequest),
    fork(watchDeleteTodoRequest),
  ]);
}
