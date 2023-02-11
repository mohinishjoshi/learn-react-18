import React from "react";
import { useState } from "react";

function ClickCounter() {
    const [counter, setCounter] = useState(0);

    const onClickHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={onClickHandler}> Click and Count</button>
            <p>
                Clicked {counter} times.
            </p>
        </div>
    );
}

export default ClickCounter;