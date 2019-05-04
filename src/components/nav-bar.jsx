import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import '../style/nav-bar.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <FontAwesomeIcon icon="igloo" className="logo-icon fa-lg" />
        Surreal Estate
      </div>
      <div className="nav">
        <Link className="item" to="/">View Properties</Link>
        <Link className="item" to="/add-property">Add a Property</Link>
        {props.userId
          ? <button onClick={onLogout}>Sign Out</button>
          : (
            <FacebookLogin
              appId="1088597931155576"
              autoLoad
              fields="name,email,picture"
              callback={props.onLogin}
            >
              Sign In With Facebook
            </FacebookLogin>
          )
        }
      </div>
    </div>
  );
};

export default NavBar;
