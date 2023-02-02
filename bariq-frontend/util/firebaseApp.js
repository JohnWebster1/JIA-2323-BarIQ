import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA5kXmV_hfCASdfPn9bT0Ww7CKlyrUOUy8",
    authDomain: "bariq-d254e.firebaseapp.com",
    projectId: "bariq-d254e",
    storageBucket: "bariq-d254e.appspot.com",
    messagingSenderId: "220081135810",
    appId: "1:220081135810:web:2e7ca4cd5aefdb33e3db5b"
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}