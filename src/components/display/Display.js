import React from "react";

function Display(props) {
    return (
        <p>Message is {props.message || 'Blank'}</p>
    );
}

export default Display;