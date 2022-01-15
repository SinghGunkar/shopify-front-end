export const likePhoto = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore()
        const state = getState()
        const uid = state.firebase.auth.uid

        console.log(fireStore)
        console.log(state)
        console.log(uid)

        console.log(payload)
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
