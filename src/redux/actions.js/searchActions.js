import nasaImageAPI from "../../apis/nasaAPI"

export const fetchSearchResults = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // const fireStore = getFirestore()
        // const state = getState()
        // const uid = state.firebase.auth.uid

        console.log("Searching for: " + payload)
        nasaImageAPI
            .get("", {
                params: {
                    q: payload,
                    media_type: "image"
                }
            })
            .then(response => {
                // console.log("Fetched results: ", response.data)

                return new Promise(function (resolve, reject) {
                    setTimeout(() => {
                        return dispatch({
                            type: "SEARCH_SUCCESSFUL",
                            payload: {
                                fetchedResults: response.data,
                                status: "idle"
                            }
                        })
                    }, 1000)
                })
            })

            .catch(err => {
                console.log(err)
                return dispatch({
                    type: "SEARCH_ERROR",
                    payload: { error: err, status: "idle" }
                })
            })
    }
}

export const setIsSearchingState = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        return dispatch({
            type: "FETCHING_SEARCH_RESULTS",
            payload: "fetching"
        })
    }
}
