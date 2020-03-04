import React from "react"

const Down = props => {
    const { down, setter } = props

    const padding = { padding: "5pt" }

    return (
        <div 
            className="down-container" 
            style={{display: "flex", alignItems: "center"}}
        >
            <h3
                style={padding}
            >Down</h3>
            <div
                style={down === 1 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(1)} 
            >1</div>
            <div
                style={down === 2 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(2)} 
            >2</div>
            <div
                style={down === 3 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(3)} 
            >3</div>
            <div
                style={down === 4 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(4)} 
            >4</div>
        </div>
    )
}

export default Down