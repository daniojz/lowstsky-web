import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore"; 
import {db} from '../firebase'


// function that makes the api request and returns a Promise for response
export async function getAllTypeBeats() {
    const querySnapshot = await getDocs(collection(db, "typeBeats"));
    return querySnapshot.docs
}
export async function addTypeBeat(beat) {
    try {
      debugger
        const docRef = await addDoc(collection(db, "typeBeats"), beat);
        return docRef
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export async function deleteTypeBeat(beat) {
  try {
    const docRef = await deleteDoc(collection(db, "typeBeats"), beat);
    return docRef
} catch (e) {
    console.error("Error adding document: ", e);
}
}

