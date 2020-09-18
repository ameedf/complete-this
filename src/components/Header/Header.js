import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  const number = Math.ceil(Math.random() * 100);
  return (
    <div className="navigation">
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
          <Link to={"/page2/" + number} >Page 2</Link>
        </div>
      </nav>
      <hr/>
    </div>
  );
}

export default Header;