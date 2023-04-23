import {collection, getDocs } from "firebase/firestore";
import {initFirestore} from "./firebaseApp";

const db = initFirestore();
const videoModules = collection(db, "video-modules");

export async function getVideoModules() {
    const querySnapshot = await getDocs(videoModules);
    let categoryToVideos = new Map();

    querySnapshot.forEach((doc) => {
        categoryToVideos.set(doc.id, doc.data());
    });
    return categoryToVideos;
}