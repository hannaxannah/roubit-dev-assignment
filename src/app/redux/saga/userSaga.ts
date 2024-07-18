import { call, put, takeEvery } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  logInSuccess,
  logInFailure,
  SIGN_UP_REQUEST,
  signUpSuccess,
  signUpFailure,
} from "../actions/userAction";
import { Action } from "../reducers/userReducer";
import {
  fetchSignIn,
  SignInReturn,
  fetchSignUp,
  SignUpReturn,
} from "../../APIs/userAPI";

function* loginSaga(action: Action) {
  if (action.type === LOG_IN_REQUEST) {
    try {
      // console.log("loginSaga try");
      const { phoneNumberOrEmail, password } = action.loginFormData;
      // console.log(phoneNumberOrEmail, password);
      const response: SignInReturn = yield call(fetchSignIn, {
        phoneNumberOrEmail,
        password,
      });
      // console.log("loginSaga", response);
      if (response.status === 200) {
        yield put(logInSuccess(response.data.accessToken));
        localStorage.setItem("accessToken", response.data.accessToken);
        return;
      }
      yield put(logInFailure(response.message));
    } catch (_error) {
      const error = _error as Error;

      yield put(logInFailure(error.message));
    }
  }
}

export function* watchLoginSaga() {
  yield takeEvery(LOG_IN_REQUEST, loginSaga);
}

function* signupSaga(action: Action) {
  if (action.type === SIGN_UP_REQUEST) {
    try {
      // console.log("signupSaga try");
      const { phoneNumberOrEmail, fullName, username, password } =
        action.signupFormData;
      // console.log(phoneNumberOrEmail, fullName, username, password);
      const response: SignUpReturn = yield call(fetchSignUp, {
        phoneNumberOrEmail,
        fullName,
        username,
        password,
      });
      // console.log("signupSaga", response);
      if (response.status === 200) {
        yield put(signUpSuccess("success"));
        return;
      }
      yield put(logInFailure(response.message));
    } catch (_error) {
      const error = _error as Error;

      yield put(signUpFailure(error.message));
    }
  }
}

export function* watchSignupSaga() {
  yield takeEvery(SIGN_UP_REQUEST, signupSaga);
}
