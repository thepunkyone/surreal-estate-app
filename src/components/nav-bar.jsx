import React from 'react';
import '../style/nav-bar.css';

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
      <ul className="nav">
        <li className="item">View Properties</li>
        <li className="item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
