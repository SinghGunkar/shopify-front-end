import React from "react"
// import { useSelector } from "react-redux"
import "./searchResultsList.scss"
import Button from "../button/Button"

const SearchDataList = ({ searchDataArray }) => {
    if (searchDataArray.length > 0) {
        return searchDataArray.map((result, index) => {
            const { data, links } = result
            const title = data[0].title
            const imageLink = links[0].href
            const dateCreated = data[0].date_created.split("T")[0]

            const handleLike = () => {
                console.log("Like picture")
            }

            const handleDislike = () => {
                console.log("Dislike picture")
            }

            if (index === 0) {
                console.log(data)
                console.log(imageLink)
            }

            return (
                <div key={index} className="search-result-wrapper">
                    <h3>{title}</h3>
                    <h5>{"Date created: " + dateCreated}</h5>
                    <Button
                        onClick={handleLike}
                        isGoogleSignIn={false}
                        isLikeButton={true}
                        type="submit"
                    >
                        Like
                    </Button>
                    <Button
                        onClick={handleDislike}
                        isGoogleSignIn={false}
                        isDislikeButton={true}
                        type="submit"
                    >
                        Dislike
                    </Button>
                    <br />
                    <img src={imageLink} alt="new" />
                    <br />
                </div>
            )
        })
    }

    return ""
}

export default SearchDataList
