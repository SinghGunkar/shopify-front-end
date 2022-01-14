import React from "react"
import { useSelector } from "react-redux"
import "./searchResults.scss"

const SearchDataList = ({ data }) => {
    console.log(data)

    if (data.length > 0) {
        return data.map((item, idk) => <h3 key={idk}>image goes here</h3>)
    }

    return ""
}

const SearchResults = () => {
    const searchResults = useSelector(state => state.searchResults.searchResults)
    const isLoading =
        useSelector(state => state.searchResults.nasaAPIState) === "fetching"
    const isData = searchResults?.collection?.items.length > 0
    const searchData = searchResults?.collection?.items

    return (
        <div className="found-test-cases-container">
            <h3>Search results go here</h3>

            {isLoading ? (
                "Loading"
            ) : isData ? (
                <SearchDataList data={searchData} />
            ) : (
                ""
            )}
        </div>
    )
}

export default SearchResults
