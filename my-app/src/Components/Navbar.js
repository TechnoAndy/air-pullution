import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '../App.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      text: 'Home Page',
      path: '/',
    },
  ];
  const listOfLinks = links.map((link) => (
    <li key={link.id} className="nav-link">
      <NavLink className="nav-link" to={link.path}>{link.text}</NavLink>
    </li>
  ));
  return (
    <header>
      <Nav>
        <div>
          <div>
            <ul>
              {listOfLinks}
            </ul>
          </div>
        </div>
      </Nav>
    </header>
  );
};

export default Navbar;