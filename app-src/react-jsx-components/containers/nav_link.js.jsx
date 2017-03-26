import React from 'react';
import { Link } from 'react-router';

const NavLink = ({ filter, children }) => (
  <Link
  to={filter === '' ? '/dashboard' : '/dashboard/' + filter}
  activeStyle={{
    textDecoration: 'none',
    color: 'black'
  }}
  >
    {children}
  </Link>
  );

export default NavLink;