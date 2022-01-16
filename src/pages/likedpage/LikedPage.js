import React from "react"
import LikedImages from "../../components/liked-images/LikedImages"
import "./likedPage.scss"

const LikedPage = () => {
    return (
        <div className="homepage">
            <h3>You have liked the following images</h3>
            <LikedImages />
        </div>
    )
}

export default LikedPage
