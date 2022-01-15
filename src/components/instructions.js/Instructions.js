import React from "react"
import "./instructionsStyles.scss"

const Instructions = () => {
    return (
        <div className="instructions-container">
            <h3>How to use</h3>
            <li>Search for something</li>
            <li>
                If you search for something and no images are returned it means
                NASA's api didn't contain any images for your search
            </li>
            <li>Best viewed on a desktop browser</li>
        </div>
    )
}

export default Instructions
