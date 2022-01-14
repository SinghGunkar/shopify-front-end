import React from "react"
import "./searchPageStyles.scss"
import Instructions from "../../components/instructions.js/Instructions"
import ImageSearchForm from "../../components/image-search-form/ImageSearchForm"
import TestCasesFound from "../../components/testCasesFound/TestCasesFound"
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
                <TestCasesFound />
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
