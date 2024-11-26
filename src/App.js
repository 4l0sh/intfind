import react, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './layout/skills/skills';
import Wizard from './layout/wizard';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Wizard />} />
          <Route exact path='/skills' element={<Skills />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
