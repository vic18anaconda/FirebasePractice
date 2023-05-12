import React from 'react';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../screens/Home.tsx';
import About from '../screens/About.tsx';
import TermsAndConditions from '../screens/TermsAndConditions.tsx';
import UsersScreen from '../screens/UsersScreen.tsx';


function NavBar() {
  return (

    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about/10" className="nav-link">About 10</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about/20" className="nav-link">About 20</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/terms-and-conditions" className="nav-link">Terms and conditions</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<UsersScreen/>} />
        <Route path='/about/:id' element={<About/>} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />
      </Routes>
    </Router>
  );
}

export default NavBar;