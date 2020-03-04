import React from "react"
import { connect } from "react-redux"
import PlayDataForm from "./PlayDataForm/PlayDataForm"

const App = props => {
    return (
        <div className="app-container">
            <PlayDataForm />
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    addPlay: playObj => dispatch({type: "ADD_PLAY", payload: playObj})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)