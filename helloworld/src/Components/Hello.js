import React from "react";

const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Heloo {props.name} a.k.a {props.heroname} </h1>
            <p>
                {props.children}
            </p>
        
        </div>
    )
}

export default Hello