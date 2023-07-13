import { takeEvery, call, put, all} from "redux-saga/effects";
import * as typeBeatsSaga from './typeBeatsSaga';

export default function* rootSaga() {
    yield all([
      watchTypeBeatsSaga(),
    ])
  }
  
  // watcher saga: watches for actions dispatched to the store, starts worker saga
  export function* watchTypeBeatsSaga() {
    yield takeEvery("GET_TYPEBEATS", getTypeBeats);
    yield takeEvery("PUT_TYPEBEAT", putTypeBeat);
    yield takeEvery("DELETE_TYPEBEAT", deleteTypeBeat);
  }
  
  // worker saga: makes the api call when watcher saga sees the action
  function* getTypeBeats() {
    try {
      const response = yield call(typeBeatsSaga.getAllTypeBeats);
      const typeBeats = response
      yield put({ type: "CALL_SUCCESS", typeBeats });
    } catch (error) {
      yield put({ type: "CALL_FAILURE", error});
    }
  }
  
  function* putTypeBeat(action) {
    try {
      const response = yield call(typeBeatsSaga.addTypeBeat, action.beat);
      const typeBeatAdded = response.id
      yield put({ type: "PUT_SUCCESS", typeBeatAdded });
    } catch (error) {
      yield put({ type: "PUT_FAILURE", error});
    }
  }

  function* deleteTypeBeat(action) {
    try {
      const response = yield call(typeBeatsSaga.deleteTypeBeat, action.beat);
      const typeBeatDeleted = response.id
      yield put({ type: "DELETE_SUCCESS", typeBeatDeleted });
    } catch (error) {
      yield put({ type: "DELETE_FAILURE", error});
    }
  }
  