import React from "react"
import { connect, useSelector } from "react-redux"
import {
    dislikePhoto,
    likePhoto,
    setIsLoadingState
} from "../../redux/actions.js/likeDislikeActions"
import { useFirestoreConnect } from "react-redux-firebase"
import "./searchResultsList.scss"
import Button from "../button/Button"

const SearchDataList = ({
    searchDataArray,
    likeImage,
    dislikeImage,
    isLikeDislikeStatus,
    startLoading
}) => {
    const uid = useSelector(state => state.firebase.auth.uid)
    useFirestoreConnect([{ collection: "users", doc: uid }])
    const likedImages = useSelector(
        ({ firestore: { data } }) => data.users && data.users[uid]?.likedImages
    )

    const isImageAlreadyLiked = (likedImages, currentImageLink) => {
        return (
            likedImages.filter(image => image.imageLink === currentImageLink)
                .length > 0
        )
    }

    console.log(isLikeDislikeStatus)

    if (searchDataArray.length > 0) {
        return searchDataArray.map((result, index) => {
            const { data, links } = result
            const title = data[0].title
            const imageLink = links[0].href
            const dateCreated = data[0].date_created.split("T")[0]

            return (
                <div key={index} className="search-result-wrapper">
                    <h3>{title}</h3>
                    <h5>{"Date created: " + dateCreated}</h5>

                    <br />
                    <img src={imageLink} alt="new" />
                    <br />

                    {likedImages && isImageAlreadyLiked(likedImages, imageLink) ? (
                        <Button
                            onClick={() => {
                                startLoading()
                                dislikeImage(imageLink)
                            }}
                            isDislikeButton={true}
                            type="submit"
                            disabled={isLikeDislikeStatus === "loading"}
                        >
                            Unlike
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                startLoading()
                                likeImage({ title, dateCreated, imageLink })
                            }}
                            isLikeButton={true}
                            type="submit"
                            disabled={isLikeDislikeStatus === "loading"}
                        >
                            Like
                        </Button>
                    )}
                </div>
            )
        })
    }

    return ""
}

const mapStateToProps = state => {
    return {
        likedPhotos: state.likedPhotos,
        isLikeDislikeStatus: state.likeDislike.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        likeImage: url => dispatch(likePhoto(url)),
        dislikeImage: url => dispatch(dislikePhoto(url)),
        startLoading: () => dispatch(setIsLoadingState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDataList)
