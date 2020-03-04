import React from "react"

const Play = props => {
    const { play, setter } = props
    
    return (
        <input 
            className="play-input"
            placeholder="Play #"
            name="play"
            onChange={e => setter(e.target.value)}
        />
    )
}

export default Play