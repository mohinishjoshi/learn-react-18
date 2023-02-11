import Button from "components/button/Button";
import Display from "components/display/Display";
import React, { useState } from "react";

function MultiButtonWrapper() {
    const [counter, setCounter] = useState(0);

    const incrementCountHandler = (data) => {
        console.log("OUTPUT ", data)
        setCounter(counter + data);
    }

    return (
        <>
            <Button onClickHandler={incrementCountHandler} buttonText={'+1'} incrementor={1}></Button>
            <Button onClickHandler={incrementCountHandler} buttonText={'+2'} incrementor={2}></Button>
            <Button onClickHandler={incrementCountHandler} buttonText={'+5'} incrementor={5}></Button>
            <Button onClickHandler={incrementCountHandler} buttonText={'+10'} incrementor={10}></Button>
            <Button onClickHandler={incrementCountHandler} buttonText={'+20'} incrementor={20}></Button>
            <Display message={counter}></Display>
        </>
    );
}

export default MultiButtonWrapper;