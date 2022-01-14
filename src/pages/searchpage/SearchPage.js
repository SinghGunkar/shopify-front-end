import React from "react"
import "./searchPageStyles.scss"
import Instructions from "../../components/instructions.js/Instructions"
import ImageSearchForm from "../../components/image-search-form/ImageSearchForm"
import SearchResults from "../../components/searchResults/SearchResults"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const SearchPage = ({ isUserSignedIn, isUserHasPropertyCreatedAt }) => {
    if (!isUserSignedIn) return <Redirect to="/signinsignup" />

    return (
        <div className="challenge-page-container">
            <div className="left-column">
                <Instructions />
                <ImageSearchForm />
            </div>

            <div className="right-column">
                <SearchResults />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isUserSignedIn: !state.firebase.auth.isEmpty,
        isUserHasPropertyCreatedAt: state.firebase
    }
}

export default connect(mapStateToProps)(SearchPage)
