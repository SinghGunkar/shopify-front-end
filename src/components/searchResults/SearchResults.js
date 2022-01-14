import React from "react"
import { useSelector } from "react-redux"
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase"
import "./searchResults.scss"

const SearchResults = () => {
    return (
        <div className="found-test-cases-container">
            <h3>Search results go here</h3>
        </div>
    )
}

export default SearchResults
