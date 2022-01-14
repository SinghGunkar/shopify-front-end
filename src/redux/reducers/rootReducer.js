import { combineReducers } from "redux"
import authReducer from "./authReducer"
import searchResultsReducer from "./searchReducer"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"

export const rootReducer = combineReducers({
    authErrors: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    searchResults: searchResultsReducer
})
