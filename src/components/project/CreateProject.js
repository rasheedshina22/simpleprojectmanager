import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    //redirect the user to the dashboard
    //why cant we use the <Redirect />
    this.props.history.push('/');
  };
  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to='/signin' />;
    } else {
      return (
        <div className='container'>
          <form onSubmit={this.handleSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>Create A New Project</h5>
            <div className='input-field'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                name='title'
                id='title'
                onChange={this.handleChange}
              />
            </div>

            <div className='input-field'>
              <label htmlFor='content'> Project Content</label>
              <textarea
                name='content'
                id='content'
                className='materialize-textarea'
                onChange={this.handleChange}
              ></textarea>
            </div>

            <div className='input-field'>
              <button className='btn pink lighten-1 z-depth-0'>
                Create Project
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, { createProject })(CreateProject);
