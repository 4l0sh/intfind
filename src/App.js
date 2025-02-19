import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './layout/skills/skills';
import Wizard from './layout/wizard';
import Opleiding from './layout//opleiding/opleiding';
import Experience from './layout/experience/experience';
import Referenties from './layout/referenties/referenties';
import Login from './auth/login';
import LoginTest from './layout/login/loginTest';
import StudentCard from './student/studentCard';
import EditUser from './layout/manageUsers/editUser';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Wizard />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/opleiding' element={<Opleiding />} />
          <Route exact path='/referenties' element={<Referenties />} />
          <Route exact path='/experience' element={<Experience />} />
          <Route path='/login' element={<Login />} />
          <Route path='loginTest' element={<LoginTest />} />
          <Route path='/studentCard' element={<StudentCard />} />
          <Route path='/editUser' element={<EditUser />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
