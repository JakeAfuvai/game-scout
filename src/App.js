import React from "react"
import { connect } from "react-redux"
import PlayDataForm from "./PlayDataForm/PlayDataForm"

const App = props => {
    console.log(props.state.playInfo)
    return (
        <div className="app-container">
            <PlayDataForm addPlay={props.addPlay}/>
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