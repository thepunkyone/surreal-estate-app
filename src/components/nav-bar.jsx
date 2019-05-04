import React from 'react';
import '../style/nav-bar.css';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);


const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <FontAwesomeIcon icon="igloo" className="logo-icon fa-lg" />
        Surreal Estate
      </div>
      <div className="nav">
        <Link className="item" to="/">View Properties</Link>
        <Link className="item" to="/add-property">Add a Property</Link>
        <Link className="item">Sign In With Facebook</Link>
      </div>
    </div>
  );
};

export default NavBar;
