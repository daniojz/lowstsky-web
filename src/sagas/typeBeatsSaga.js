import { takeEvery, call, put, all} from "redux-saga/effects";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import {db} from '../firebase'

export default function* rootSaga() {
  yield all([
    watchTypeBeatsSaga(),
  ])
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watchTypeBeatsSaga() {
  yield takeEvery("GET_TYPEBEATS", getTypeBeats);
  yield takeEvery("PUT_TYPEBEAT", putTypeBeat);
}

// worker saga: makes the api call when watcher saga sees the action
function* getTypeBeats() {
  try {
    const response = yield call(getAllTypeBeats);
    const typeBeats = response
    yield put({ type: "CALL_SUCCESS", typeBeats });

  } catch (error) {
    yield put({ type: "CALL_FAILURE", error});
  }
}

function* putTypeBeat() {
  try {
    const response = yield call(addTypeBeat);
    const typeBeatAdded = response
    yield put({ type: "CALL_SUCCESS", typeBeatAdded });
  
  } catch (error) {
    yield put({ type: "CALL_FAILURE", error});
  }
}

// function that makes the api request and returns a Promise for response
async function getAllTypeBeats() {
    const querySnapshot = await getDocs(collection(db, "typeBeats"));
    return querySnapshot.docs
}
async function addTypeBeat() {
    try {
        const docRef = await addDoc(collection(db, "typeBeats"), {
          title: "",
          bpm: "",
          key: "",
          price: "",
          description: ""
        });
        return docRef
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
async function deleteTypeBeat() {

}

