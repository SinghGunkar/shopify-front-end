import React, { useState } from "react"
import { connect } from "react-redux"
import Button from "../button/Button"
import FormInput from "../form-input/FormInput"
import { signUpUser } from "../../redux/actions.js/authActions"

import "./signUpStyles.scss"

const SignUp = ({ signUpUserWithUserCredentials, signUpError }) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = event => {
        event.preventDefault()
        signUpUserWithUserCredentials(state)
        setState({ name: "", email: "", password: "", confirmPassword: "" })
    }

    const handleChange = event => {
        const { value, name } = event.target
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div className="sign-up-container">
            <span className="sign-up-title">Sign up</span>
            <span className="sign-up-sub-title">
                Enter your name, email, and password
            </span>

            <form
                className="sign-up-form"
                onSubmit={() => {
                    console.log("Sign up disabled")
                }}
            >
                <FormInput
                    name="name"
                    type="name"
                    handleChange={e => handleChange(e)}
                    value={state.name || ""}
                    label="name"
                    required
                />

                <FormInput
                    name="email"
                    type="email"
                    handleChange={e => handleChange(e)}
                    value={state.email || ""}
                    label="email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={e => handleChange(e)}
                    value={state.password || ""}
                    label="password"
                    required
                />

                <Button type="submit" onClick={handleSubmit}>
                    {" "}
                    Sign Up{" "}
                </Button>
                <br />
                <h5 className="sign-up-error">
                    {signUpError ? `${signUpError}` : ""}
                </h5>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        signUpError: state.authErrors.signUpError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpUserWithUserCredentials: userSignUpData =>
            dispatch(signUpUser(userSignUpData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
