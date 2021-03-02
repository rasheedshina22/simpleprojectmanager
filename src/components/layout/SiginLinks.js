import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SiginLinks = ({ profile, signOut }) => {
  const handleSignOut = () => {
    signOut();
  };
  return (
    <ul className='right'>
      <li>
        <NavLink to='/create'>New Project</NavLink>
      </li>
      <li>
        <a href='#!' onClick={handleSignOut} to='/'>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

export default connect(null, { signOut })(SiginLinks);
