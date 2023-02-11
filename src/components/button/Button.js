import React from "react";

function Button(props) {
    const onClickHandler = () => {
        props.onClickHandler();
    }

    return (
        <button onClick={onClickHandler}>Counter</button>
    );
}

export default Button