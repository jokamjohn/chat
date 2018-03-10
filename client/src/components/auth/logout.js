import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signout} from "../../utils/authService";
import {logout} from "../../redux/actions/auth";
import {logoutUserEvent} from "../../io/events";

class Logout extends React.Component {
  componentDidMount() {
    signout();
    this.props.dispatch(logout(false));
    logoutUserEvent();
  }

  render() {
    if (!this.props.isLoggedIn) return <Redirect to='/login'/>;
    return null;
  }
}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(Logout);