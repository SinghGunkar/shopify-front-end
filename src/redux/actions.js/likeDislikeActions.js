export const likePhoto = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // const fireStore = getFirestore()
        // const state = getState()
        // const uid = state.firebase.auth.uid

        console.log("like a photo")
    }
}

export const dislikePhoto = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log("dislike a photo")
    }
}
