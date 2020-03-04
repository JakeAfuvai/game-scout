import React, { useState } from "react"

import Play from "./FormComponents/Play"
import Down from "./FormComponents/Down"
import Distance from "./FormComponents/Distance"
import Yard from "./FormComponents/Yard"
import Formation from "./FormComponents/Formation"
import Playtype from "./FormComponents/Playtype"
import Result from "./FormComponents/Result"

const PlayDataForm = props => {
    const [play, setPlay] = useState()
    const [down, setDown] = useState()
    const [distance, setDistance] = useState()
    const [yard, setYard] = useState()
    const [formation, setFormation] = useState()
    const [playtype, setPlaytype] = useState()
    const [result, setResult] = useState()

    return (
        <form className="play-data-form" onSubmit={e => {e.preventDefault(); console.log("submitted")}}>
            <Play play={play} setter={setPlay}/>
            <Down down={down} setter={setDown}/>
            <Distance distance={distance} setter={setDistance}/>
            <Yard yard={yard} setter={setYard}/>
            <Formation formation={formation} setter={setFormation}/>
            <Playtype playtype={playtype} setter={setPlaytype}/>
            <Result result={result} setter={setResult}/>
            <button>Submit Play</button>
        </form>
    )
}

export default PlayDataForm