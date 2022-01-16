export const likePhoto = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore()
        const firebase = getFirebase()
        const state = getState()
        const uid = state.firebase.auth.uid

        fireStore
            .update(
                { collection: "users", doc: uid },
                {
                    likedImages: [payload, payload]
                }
            )
            .then(response => {
                console.log("Successfully added image")
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const dislikePhoto = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // const fireStore = getFirestore()
        // const state = getState()
        // const uid = state.firebase.auth.uid

        console.log(payload)
    }
}
