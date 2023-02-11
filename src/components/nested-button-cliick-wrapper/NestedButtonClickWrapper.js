import Button from "components/button/Button";
import Display from "components/display/Display";
import React, { useState } from "react";

function NestedButtonClickWrapper() {
    const [counter, setCounter] = useState(0);

    const incrementCountHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <Button onClickHandler={incrementCountHandler}></Button>
            <Display message={counter}></Display>
        </>
    );
}

export default NestedButtonClickWrapper;