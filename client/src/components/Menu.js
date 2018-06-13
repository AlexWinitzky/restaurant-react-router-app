import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';

const Menu = () => {
  if (isAuthenticated()) {
    return <h3>You've hacked the mainframe.</h3>
  } else {
    return <Redirect to="/login" />
  }
}

export default Menu;