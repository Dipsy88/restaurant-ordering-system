import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Make order
      </Link>
      <Link to="/menu" className="item">
        Menu
      </Link>
      <Link to="/check" className="item">
        Check order
      </Link>
      <Link to="/process-order" className="item">
        Process orders
      </Link>
      <Link to="/complete-order" className="item">
        Orders completed
      </Link>
      <div className="right menu">
        <Link to="/logout" className="item">
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Header;
