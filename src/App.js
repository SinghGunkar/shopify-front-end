import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import Header from "./components/header/Header"
import HomePage from "./pages/homepage/HomePage"
import SignInSignUpPage from "./pages/signin-signup/SignInSignUpPage"
import SearchPage from "./pages/searchpage/SearchPage"
import LikedPage from "./pages/likedpage/LikedPage"
import notFound from "./pages/notfoundpage/notFound"

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/signinsignup" component={SignInSignUpPage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/liked" component={LikedPage} />
                <Route path="*" exact={true} component={notFound} />
            </Switch>
        </div>
    )
}

export default App
