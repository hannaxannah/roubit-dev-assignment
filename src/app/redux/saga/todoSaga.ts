import { call, put, takeEvery } from "redux-saga/effects";
import {
  TODO_LIST_REQUEST,
  todoListSuccess,
  todoListFailure,
  ADD_TODO_REQUEST,
  addTodoSuccess,
  addTodoFailure,
  CHECK_TODO_REQUEST,
  checkTodoSuccess,
  checkTodoFailure,
  UPDATE_TODO_REQUEST,
  updateTodoSuccess,
  updateTodoFailure,
  DELETE_TODO_REQUEST,
  deleteTodoSuccess,
  deleteTodoFailure,
} from "../actions/todoAction";
import { Action } from "../reducers/todoReducer";
import {
  fetchGetTodos,
  fetchCreateTodo,
  fetchCheckTodo,
  fetchUpdateTodo,
  fetchDeleteTodo,
} from "@/app/APIs/todoAPI";
import { Todo } from "../actions/todoAction";

// todo list
function* todoListSaga() {
  try {
    const response: Todo[] = yield call(fetchGetTodos);
    // console.log("todoListSaga", response);
    yield put(todoListSuccess(response));
  } catch (_error) {
    const error = _error as Error;
    yield put(todoListFailure(error.message));
  }
}

export function* watchTodoRequest() {
  yield takeEvery(TODO_LIST_REQUEST, todoListSaga);
}

// add todo
function* addTodoSaga(action: Action) {
  if (action.type === ADD_TODO_REQUEST) {
    console.log("addtodosaga", action.title);
    try {
      const response: Todo = yield call(fetchCreateTodo, action.title);
      console.log("addTodoSaga", response);
      yield put(addTodoSuccess(response));
    } catch (_error) {
      const error = _error as Error;
      yield put(addTodoFailure(error.message));
    }
  }
}

export function* watchAddTodoRequest() {
  yield takeEvery(ADD_TODO_REQUEST, addTodoSaga);
}

// check todo
function* checkTodoSaga(action: Action) {
  if (action.type === CHECK_TODO_REQUEST) {
    // console.log("checkTodoSaga", action.id, action.completed);
    try {
      const response: Todo = yield call(
        fetchCheckTodo,
        action.id,
        action.completed
      );
      //   console.log("checkTodoSaga", response);
      yield put(checkTodoSuccess(response));
    } catch (_error) {
      const error = _error as Error;
      yield put(checkTodoFailure(error.message));
    }
  }
}

export function* watchCheckTodoRequest() {
  yield takeEvery(CHECK_TODO_REQUEST, checkTodoSaga);
}

// update todo
function* updateTodoSaga(action: Action) {
  if (action.type === UPDATE_TODO_REQUEST) {
    try {
      const response: Todo = yield call(
        fetchUpdateTodo,
        action.id,
        action.title
      );
      console.log("updateTodoSaga", response);
      yield put(updateTodoSuccess(response));
    } catch (_error) {
      const error = _error as Error;
      yield put(updateTodoFailure(error.message));
    }
  }
}

export function* watchUpdateTodoRequest() {
  yield takeEvery(UPDATE_TODO_REQUEST, updateTodoSaga);
}

// delete todo
function* deleteTodoSaga(action: Action) {
  if (action.type === DELETE_TODO_REQUEST) {
    try {
      const response: string = yield call(fetchDeleteTodo, action.id);
      console.log("deleteTodoSaga", response);
      yield put(deleteTodoSuccess(response));
    } catch (_error) {
      const error = _error as Error;
      yield put(deleteTodoFailure(error.message));
    }
  }
}

export function* watchDeleteTodoRequest() {
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga);
}
