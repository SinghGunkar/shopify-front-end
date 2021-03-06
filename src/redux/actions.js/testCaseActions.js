import nasaImageAPI from "../../apis/nasaAPI"

export const searchForTerm = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore()
        const state = getState()
        const uid = state.firebase.auth.uid

        console.log("Searching for: " + payload)
        nasaImageAPI
            .get("", {
                params: {
                    q: payload,
                    media_type: "image"
                }
            })
            .then(response => {
                console.log(response.data)
                return dispatch({
                    type: "VALIDATE_TESTCASE_SUCCESS"
                })
            })

            .catch(err => {
                console.log(err)
                return dispatch({
                    type: "VALIDATE_TESTCASE_ERROR"
                })
            })
    }
}

export const setIsFetchingState = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        return dispatch({
            type: "START_FETCHING_VALIDATION_RESULTS",
            payload: "fetching"
        })
    }
}
