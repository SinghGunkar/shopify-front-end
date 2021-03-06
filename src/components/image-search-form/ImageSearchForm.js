import React, { useState } from "react"
import { connect } from "react-redux"
import "./ImageSearchForm.scss"

import {
    fetchSearchResults,
    setIsSearchingState
} from "../../redux/actions.js/searchActions"

import FormInput from "../form-input/FormInput"
import Button from "../button/Button"

const ImageSearchForm = ({
    fetchResults,
    fetchingStatus,
    setAPIRequestStatusToFetching
}) => {
    const [userInput, setUserInput] = useState("")

    const handleChange = e => {
        setUserInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setAPIRequestStatusToFetching()
        fetchResults(userInput)
        setUserInput("")
    }

    return (
        <div className="test-challenges-form-container">
            <h3 className="title">Enter Input below</h3>

            <form className="test-challenges-form">
                <FormInput
                    name="userInput"
                    type="text"
                    handleChange={e => handleChange(e)}
                    value={userInput || ""}
                    label="Text"
                    disabled={fetchingStatus === "fetching" ? "disabled" : ""}
                    required
                />

                {fetchingStatus === "fetching" ? (
                    <h3 className="loading-text">Loading</h3>
                ) : (
                    <Button
                        onClick={handleSubmit}
                        isGoogleSignIn={false}
                        type="submit"
                    >
                        Submit
                    </Button>
                )}
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        fetchingStatus: state.searchResults.nasaAPIState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchResults: userInput => dispatch(fetchSearchResults(userInput)),
        setAPIRequestStatusToFetching: () =>
            dispatch(setIsSearchingState("fetching"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSearchForm)
