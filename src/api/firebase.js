// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB6Uwtjzie5ibCVz-XmHV1hHjD_Crd1-QY",
	authDomain: "deploys-bootcamp.firebaseapp.com",
	projectId: "deploys-bootcamp",
	storageBucket: "deploys-bootcamp.appspot.com",
	messagingSenderId: "920872945995",
	appId: "1:920872945995:web:a9defafa46e76ddde240ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);