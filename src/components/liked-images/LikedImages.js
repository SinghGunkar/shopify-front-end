import React from "react"
import { useSelector } from "react-redux"
import "./likedImages.scss"
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase"

const LikedImages = () => {
    const uid = useSelector(state => state.firebase.auth.uid)
    useFirestoreConnect([{ collection: "users", doc: uid }])
    const likedImages = useSelector(
        ({ firestore: { data } }) => data.users && data.users[uid]?.likedImages
    )

    if (!likedImages) {
        return <h3>You have not liked any images yet</h3>
    }

    return (
        <div className="liked-images-container">
            {`You have liked ${likedImages.length} images`}
        </div>
    )
}

export default LikedImages
