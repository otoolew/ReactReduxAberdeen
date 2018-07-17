import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/course'>Course</Link></li>
        <li><Link to='/addcourse'>Add Course</Link></li>
        <li><Link to='/question'>Questions</Link></li>
      </ul>
    </nav>
  </header>
)
export default Header
