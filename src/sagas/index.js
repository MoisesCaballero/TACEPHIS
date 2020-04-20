import { all, put, takeEvery } from 'redux-saga/effects';
import {
  DO_LOGIN,
  SET_LOADER,
  LOGIN_SUCCESS,
} from '../actions';


// worker Saga: will be fired on DO_LOGIN actions
function* doLogin({ email, password }) {
  yield put({ type: SET_LOADER, isLoading: true });
  console.log(`${email}||${password}`);
  const user = {
    name: 'DANIEL',
    medic: 'Gustavo',
    Alarm: '8:00pm',
  };
  yield put({ type: SET_LOADER, isLoading: false });
  yield put({ type: LOGIN_SUCCESS, user });
}

/*
  Starts watchLogin on each dispatched `DO_LOGIN` action.
  Allows concurrent fetches of login.
*/
function* watchLogin() {
  yield takeEvery(DO_LOGIN, doLogin);
}

// rootSaga watch for all
export default function* rootSaga() {
  yield all([
    watchLogin(),
  ]);
}
