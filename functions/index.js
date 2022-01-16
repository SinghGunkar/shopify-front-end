const functions = require("firebase-functions")
const admin = require("firebase-admin")

admin.initializeApp(functions.config().firebase)

exports.onUserCreated = functions.auth.user().onCreate(user => {
    const uid = user.uid
    const email = user.email

    return admin
        .firestore()
        .collection(`users`)
        .doc(uid)
        .set({ email: email, likedImages: [] })
        .then(() => {
            console.log("Cloud function ran on user created")
        })
        .catch(err => {
            console.log("Cloud function had error", err)
        })
})
