import React from "react"
import { connect } from "react-redux"
import { dislikePhoto, likePhoto } from "../../redux/actions.js/likeDislikeActions"
import "./searchResultsList.scss"
import Button from "../button/Button"

const SearchDataList = ({ searchDataArray, likeImage, dislikeImage }) => {
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
                    <Button
                        onClick={() => likeImage(imageLink)}
                        isLikeButton={true}
                        type="submit"
                    >
                        Like
                    </Button>
                    <Button
                        onClick={() => dislikeImage(imageLink)}
                        isDislikeButton={true}
                        type="submit"
                    >
                        Unlike
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

const mapStateToProps = state => {
    return {
        likedPhotos: state.likedPhotos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        likeImage: url => dispatch(likePhoto(url)),
        dislikeImage: url => dispatch(dislikePhoto(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDataList)
