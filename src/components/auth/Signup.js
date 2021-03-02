import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../store/actions/authActions';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state);

    this.setState({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    });
  };
  render() {
    const { auth, authError } = this.props;

    if (auth.uid) {
      return <Redirect to='/' />;
    } else {
      return (
        <div className='container'>
          <form onSubmit={this.handleSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>Sign Up</h5>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={this.handleChange}
              />
            </div>

            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                onChange={this.handleChange}
              />
            </div>

            <div className='input-field'>
              <label htmlFor='firstName'>Firstname</label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                onChange={this.handleChange}
              />
            </div>

            <div className='input-field'>
              <label htmlFor='lastName'>Lastname</label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                onChange={this.handleChange}
              />
            </div>
            <div className='input-field'>
              <button className='btn pink lighten-1 z-depth-0'>Signup</button>
              <div className='red-text center'>
                {authError && <p> {authError}</p>}
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, { signup })(Signup);
