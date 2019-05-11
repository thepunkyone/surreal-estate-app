import React, { Fragment } from 'react';
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
          ? (
            <Fragment>
              <button onClick={props.onLogout} className="item">Sign Out</button>
              <Link className="item" to="/saved-properties">Saved Properties</Link>
            </Fragment>
          )
          : (
            <FacebookLogin
              appId={110308195738064}
              autoLoad
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
