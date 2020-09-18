import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() { 
    return ( 
      <ul>
        <li><Link to="/students-list">Students</Link></li>
        <li><Link to="/average">Average</Link></li>
        <li><Link to="/min-max">Min / Max</Link></li>
      </ul>
     );
  }
}
 
export default Menu;