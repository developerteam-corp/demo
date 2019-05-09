import constants from "./constants";
import { takeLatest } from "redux-saga/effects";
import { signupRequest } from "./signup/action";
import { loginRequest } from "./login/action";

function* watchActions() {
  yield takeLatest(constants.SIGNUP_REQUEST, signupRequest);
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
}

export default function* rootSaga() {
  yield [watchActions()];
}
