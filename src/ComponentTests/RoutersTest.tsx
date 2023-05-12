import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import ContactTest from './ContactTest.tsx';
import AboutUsTest from './AboutUs.tsx';

function RoutersTest() {
  return (
  <Router>
    <div className="container">
      <div className="btn-group">
        {/* <Link to="/" className='btn btn-dark'>Main page</Link> */}
        <NavLink to="/" className='btn btn-dark'>Main page</NavLink>
        <NavLink to="/contact" className='btn btn-dark'>Contact page</NavLink>
        <NavLink to="/aboutUs/5" className='btn btn-dark'>About us page</NavLink>
      </div>
      <hr />
      <Routes>
        <Route path='/contact' element={<ContactTest/>} />
        <Route path='/aboutUs/:id' element={<AboutUsTest/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default RoutersTest;
