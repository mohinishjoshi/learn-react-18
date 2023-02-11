import NestedButtonClickWrapper from 'components/nested-button-cliick-wrapper/NestedButtonClickWrapper';
import React from 'react';
import './App.css';
import ClickCounter from './components/click-counter/ClickCounter';

function App() {
  return (
    <>
      <div>
        <h1>Simple Click Counter Component</h1>
        <ClickCounter></ClickCounter>
      </div>
      <hr></hr>
      <div>
        <h1>Nested Click Counter Wrapper Component</h1>
        <h2>Uses Elevating state</h2>
        <NestedButtonClickWrapper></NestedButtonClickWrapper>
      </div>
    </>
  );
}

export default App;
