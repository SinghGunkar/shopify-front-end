import React from "react"
import { useSelector, connect } from "react-redux"
import "./likedImages.scss"
import { useFirestoreConnect, isLoaded } from "react-redux-firebase"
import Button from "../button/Button"
import {
    dislikePhoto,
    setIsLoadingState
} from "../../redux/actions.js/likeDislikeActions"

const LikedImages = ({ dislikeImage, isLikeDislikeStatus, startLoading }) => {
    const uid = useSelector(state => state.firebase.auth.uid)
    useFirestoreConnect([{ collection: "users", doc: uid }])
    const likedImages = useSelector(
        ({ firestore: { data } }) => data.users && data.users[uid]?.likedImages
    )

    if (!isLoaded) {
        return <h3>Loading</h3>
    }

    if (!likedImages) {
        return <h3>You have not liked any images yet</h3>
    }

    return (
        <div className="liked-images-container">
            <h3 className="number-of-likes">{`You have liked ${likedImages.length} images!`}</h3>

            <div className="test">
                {likedImages.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image.imageLink} alt="new" />
                            <div className="info">
                                <h4>{image.title}</h4>
                                <h4>{`Date created: ${image.dateCreated}`}</h4>

                                <Button
                                    onClick={() => {
                                        startLoading("loading")
                                        dislikeImage(image.imageLink)
                                    }}
                                    isDislikeButton={true}
                                    type="submit"
                                    disabled={isLikeDislikeStatus === "loading"}
                                >
                                    UNLIKE
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLikeDislikeStatus: state.likeDislike.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dislikeImage: url => dispatch(dislikePhoto(url)),
        startLoading: () => dispatch(setIsLoadingState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedImages)
