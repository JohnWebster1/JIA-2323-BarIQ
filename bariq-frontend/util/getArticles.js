import {collection, getDocs, query, where } from "firebase/firestore";
import {initFirestore} from "./firebaseApp";

const db = initFirestore();
const articles = collection(db, "help-articles");
const categories = collection(db, "categories");

export async function getArticles() {
    const querySnapshot = await getDocs(articles);
    let idToArticles = new Map();

    querySnapshot.forEach((doc) => {
        idToArticles.set(doc.id, doc.data());
    });
    return idToArticles;
}

export async function getArticleById(id) {
    const q = query(articles, where("__name__", "==", id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return undefined;
    }
    return querySnapshot.docs[0].data();
}

export async function getCategories() {
    const querySnapshot = await getDocs(categories);
    let idToCategories = new Map();
    querySnapshot.forEach((doc) => {
        idToCategories.set(doc.id, doc.data().category);
    });

    return idToCategories;
}