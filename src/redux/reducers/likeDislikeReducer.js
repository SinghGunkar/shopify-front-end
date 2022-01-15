const initialState = {
    likedPhotos: []
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
        default:
            return state
    }
}

export default likeDislikePhotoReducer
