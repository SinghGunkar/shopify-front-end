import React from "react"

import "./buttonStyles.scss"

const Button = ({
    children,
    isGoogleSignIn,
    isDislikeButton,
    isLikeButton,
    ...otherProps
}) => {
    return (
        <button
            className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
                isDislikeButton ? "dislike-button" : ""
            } ${isLikeButton ? "like-button" : ""} button`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button
