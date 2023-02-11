import React from "react";

function Button(props) {
    const onClickHandler = () => {
        const incrementor = props.incrementor || 1;
        props.onClickHandler(incrementor);
    }

    return (
        <button onClick={onClickHandler}>{props.buttonText || 'Counter Button'}</button>
    );
}

export default Button