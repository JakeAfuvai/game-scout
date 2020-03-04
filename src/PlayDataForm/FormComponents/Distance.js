import React from "react"

const Distance = props => {
    const { distance, setter } = props
    const padding = { padding: "5pt" }

    return (
        <div 
            className="distance-container" 
            style={{display: "flex", alignItems: "center"}}
        >
            <h3
                style={padding}
            >Distance</h3>
            <div
                style={distance === 1 ? 
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
                style={distance === 2 ? 
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
                style={distance === 3 ? 
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
                style={distance === 4 ? 
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
            <div
                style={distance === 5 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(5)} 
            >5</div>
            <div
                style={distance === 6 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(6)} 
            >6</div>
            <div
                style={distance === 7 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(7)} 
            >7</div>
            <div
                style={distance === 8 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(8)} 
            >8</div>
            <div
                style={distance === 9 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(9)} 
            >9</div>
            <div
                style={distance === 10 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(10)} 
            >10</div>
            <div
                style={distance === 11 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(11)} 
            >11+</div>
            <div
                style={distance === 0 ? 
                    {
                        background: "limeGreen",
                        padding: "5pt"
                    }
                    : 
                    {
                        background: "none",
                        padding: "5pt"
                    }}
                onClick={() => setter(0)} 
            >G</div>
        </div>
    )
}

export default Distance