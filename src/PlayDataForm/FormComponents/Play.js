import React from "react"

const Play = props => {
    const { play, setter } = props
    
    return (
        <input 
            className="play-input"
            type="number"
            name="play"
            onChange={e => setter(e.target.value)}
            placeholder={play < 1 ? "Play #" : play}
        />
    )
}

export default Play