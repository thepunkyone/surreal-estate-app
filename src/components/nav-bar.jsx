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
        <FontAwesomeIcon icon="igloo" className="logo-icon" />
        Surreal Estate
      </div>
    </div>
  );
};

export default NavBar;
