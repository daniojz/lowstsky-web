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
  yield takeEvery("CALL_REQUEST", onRequestTypeBeats);
}

// function that makes the api request and returns a Promise for response
async function getAllTypeBeats() {
    const querySnapshot = await getDocs(collection(db, "typeBeats"));
    console.log(querySnapshot.docs)
    return querySnapshot.docs
}
async function addTypeBeat() {
    try {
        const docRef = await addDoc(collection(db, "typeBeats"), {
            title: "Ada",
            genre: "Lovelace",
            bpm: 120
        });
        console.log("Document written with ID: ", docRef);
        return docRef
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
async function deleteTypeBeat() {

}

// worker saga: makes the api call when watcher saga sees the action
function* onRequestTypeBeats() {
  try {
    console.log("heyBien")
    const response = yield call(getAllTypeBeats);
    const typeBeats = response
    console.log(typeBeats)
    // dispatch a success action to the store with the new dog
    yield put({ type: "CALL_SUCCESS", typeBeats });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    console.log("heyError")

    yield put({ type: "CALL_FAILURE", error});
  }
}