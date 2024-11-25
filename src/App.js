import react, { Fragment } from 'react';
import Wizard from './layout/wizard';
import './App.css';
import Test from './layout/test/test';

function App() {
  return (
    <Fragment>
      <Test />
      <Wizard />
    </Fragment>
  );
}

export default App;
