import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    { isAuthenticated() ?
        <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
        :
        <NavLink activeStyle={styles.active} to="/login">Login</NavLink>
    }
  </nav>
)

export default NavBar;