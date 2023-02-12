import CardList from 'components/card-list/CardList';
import MultiButtonWrapper from 'components/multi-button-wrapper/MultiButtonWrapper';
import NestedButtonClickWrapper from 'components/nested-button-cliick-wrapper/NestedButtonClickWrapper';
import React from 'react';
import './App.css';
import ClickCounter from './components/click-counter/ClickCounter';

function App() {
  return (
    <>
      <div>
        <h1>Ch 1 Simple Click Counter Component</h1>
        <ClickCounter></ClickCounter>
      </div>

      <hr />

      <div>
        <h1>Ch 2 Nested Click Counter Wrapper Component</h1>
        <h2>Uses Elevating state</h2>
        <NestedButtonClickWrapper></NestedButtonClickWrapper>
      </div>

      <hr />

      <div>
        <h1> Ch 3 Multi Button Wrapper Component</h1>
        <MultiButtonWrapper></MultiButtonWrapper>
      </div>

      <hr />

      <div>
        <h1> Ch 4 Github Cards Component</h1>
        <CardList></CardList>
      </div>
    </>
  );
}

export default App;
