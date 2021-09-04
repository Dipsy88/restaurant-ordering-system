import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLoggedOut = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Make order
      </Link>
      <Link to="/menu" className="item">
        Menu
      </Link>
      <div className="right menu">
        <Link to="/login" className="item">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default HeaderLoggedOut;
