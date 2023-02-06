import { initializeApp } from "firebase/app"
import { collection, getDocs, getFirestore } from 'firebase/firestore';




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
const db = getFirestore(app);

export const getData = async () => {
	const snapshot = await getDocs(collection(db, "users"))
	const data = []
	snapshot.forEach(doc => {
		const user = doc.data()
		const id = doc.id
		data.push({ ...user, id })
	})
	console.log(data);
	return { data }
}