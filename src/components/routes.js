import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ApplicationBar from "./appBar";
import LoginCard from "./auth/login";
import RegisterCard from "./auth/register";
import Logout from "./auth/logout";
import ChatPage from "./chat/chatPage";
import {PrivateRoute} from "./auth/privateRoute";
import {connect} from "react-redux";

class Routes extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
            <ApplicationBar/>
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/chat'/>}/>
              <PrivateRoute path='/chat' component={ChatPage} isAuthenticated={this.props.isLoggedIn}/>
              <Route path='/login' component={LoginCard}/>
              <Route path='/logout' component={Logout}/>
              <Route path='/register' component={RegisterCard}/>
              <Route render={() => <div>404 Page Not Found</div>}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
    )
  }
}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(Routes);

