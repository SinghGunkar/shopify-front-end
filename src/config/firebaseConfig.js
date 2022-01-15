import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

export const firebaseConfig = {
    apiKey: "AIzaSyB2BvzLUjDOoigi3qH6rfIIsQSVpeDSMhY",
    authDomain: "shopify-front-end-challenge.firebaseapp.com",
    projectId: "shopify-front-end-challenge",
    storageBucket: "shopify-front-end-challenge.appspot.com",
    messagingSenderId: "356264499345",
    appId: "1:356264499345:web:ed57478a2c3862d088c730",
    measurementId: "G-PJQQWTXZ1G",
    userProfile: "users",
    useFirestoreForProfile: true
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshot: true, merge: true })
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export default firebase
