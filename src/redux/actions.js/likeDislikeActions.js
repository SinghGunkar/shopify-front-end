export const likePhoto = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore()
        const firebase = getFirebase()
        const state = getState()
        const uid = state.firebase.auth.uid
        const likedImagesArr = state.firebase.profile.likedImages
        const isUserLikedNewImage =
            likedImagesArr.filter(img => img.imageLink === payload.imageLink)
                .length === 0

        if (isUserLikedNewImage) {
            likedImagesArr.push(payload)
            fireStore
                .update(
                    { collection: "users", doc: uid },
                    {
                        likedImages: likedImagesArr
                    }
                )
                .then(response => {
                    dispatch({ type: "LIKE_SUCCESS", payload: "idle" })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}

export const dislikePhoto = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore()
        const firebase = getFirebase()
        const state = getState()
        const uid = state.firebase.auth.uid
        const likedImagesArr = state.firebase.profile.likedImages

        const updatedImages = likedImagesArr.filter(img => img.imageLink !== payload)

        fireStore
            .update(
                { collection: "users", doc: uid },
                {
                    likedImages: updatedImages
                }
            )
            .then(response => {
                dispatch({ type: "DISLIKE_SUCCESS", payload: "idle" })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
