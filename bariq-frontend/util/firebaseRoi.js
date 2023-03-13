import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {initFirestore} from "./firebaseApp";

const db = initFirestore();
const roiInputs = collection(db, "roi-inputs");

export async function saveRoiFields(fields) {
    // Add a new document in collection "roi-inputs"
    const id = new Date().getTime().toString(36) +
        Math.random().toString(36).substr(2, 9)
    // Generate a random unique id
    let data = {}
    for (let i = 0; i < fields.length; i++) {
        data[i] = fields[i]
    }
    await setDoc(doc(db, "roi-inputs", id), data);
}