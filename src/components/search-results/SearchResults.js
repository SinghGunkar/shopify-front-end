import React from "react"
import { useSelector } from "react-redux"
import SearchDataList from "../search-results-list/SearchResultsList"
import "./searchResults.scss"

const SearchResults = () => {
    const searchResults = useSelector(state => state.searchResults.searchResults)
    const isLoading =
        useSelector(state => state.searchResults.nasaAPIState) === "fetching"
    const isData = searchResults?.collection?.items.length > 0
    const searchDataArray = searchResults?.collection?.items

    return (
        <div className="found-test-cases-container">
            <div className="search-results-container">
                {isLoading ? (
                    "Loading"
                ) : isData ? (
                    <SearchDataList searchDataArray={searchDataArray} />
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

export default SearchResults
