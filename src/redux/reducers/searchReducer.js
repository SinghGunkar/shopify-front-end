const initialState = {
    searchResults: {},
    nasaAPIState: "idle"
}

const searchResultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_SUCCESSFUL":
            return {
                ...state,
                searchResults: action.payload.fetchedResults,
                nasaAPIState: action.payload.status
            }
        case "SEARCH_ERROR":
            console.log("Error when searching for results" + action.payload.error)
            return { ...state, nasaAPIState: action.payload.status }
        case "FETCHING_SEARCH_RESULTS":
            return { ...state, nasaAPIState: action.payload }
        default:
            return state
    }
}

export default searchResultsReducer
