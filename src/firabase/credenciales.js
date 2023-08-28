
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDSNd2eQuYxP7VPGuLHeM50RmVAq43dQKg",
    authDomain: "proyecto-codigofac.firebaseapp.com",
    projectId: "proyecto-codigofac",
    storageBucket: "proyecto-codigofac.appspot.com",
    messagingSenderId: "118590476996",
    appId: "1:118590476996:web:df44e7bfe619211d7c2f91"
};


const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp