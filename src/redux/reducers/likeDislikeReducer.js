const initialState = {
    likedPhotos: [],
    status: "idle"
}

const likeDislikePhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIKE_PHOTO":
            return {
                ...state
            }
        case "DISLIKE_PHOTO":
            return { ...state }
        case "LIKE_DISLIKE_ERROR":
            return { ...state }
        case "LIKE_SUCCESS":
            console.log("Successfully liked image")
            return { ...state, status: action.payload }
        default:
            return state
    }
}

export default likeDislikePhotoReducer
