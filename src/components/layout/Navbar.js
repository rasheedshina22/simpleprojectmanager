import React from 'react';
import { Link } from 'react-router-dom';
import SiginLinks from './SiginLinks';
import SignoutLinks from './SignoutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          MarioPlan
        </Link>
        {auth.uid ? <SiginLinks profile={profile} /> : <SignoutLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  //the state here is the global state
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
