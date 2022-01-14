import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

export const firebaseConfig = {
    apiKey: "AIzaSyDLKoqWJQe1zdbmCPfU3OfweELPpbdC6hU",
    authDomain: "shopify-frontend-challen-ef8f5.firebaseapp.com",
    projectId: "shopify-frontend-challen-ef8f5",
    storageBucket: "shopify-frontend-challen-ef8f5.appspot.com",
    messagingSenderId: "10700909313",
    appId: "1:10700909313:web:6867ebffb96d34710bc900",
    measurementId: "G-KQR8C7DSQH",
    userProfile: "users",
    useFirestoreForProfile: true
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshot: true, merge: true })
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export default firebase
