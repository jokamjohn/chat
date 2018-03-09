import React from 'react';
import './style.css';
import UserAvatar from "./userAvator";
import Sidebar from "./sidebar";
import MessageBoxHeading from "./messageBoxHeading";
import MessageBox from "./messageBox";
import ReplyBox from "./replyBox";
import {getConnected, loginEvent} from "../../io/events";
import {getEmail} from "../../utils/authService";

class ChatPage extends React.Component {

  state = {
    onlineUsers: {},
  };

  componentDidMount() {
    getConnected();
    loginEvent(users => this.setState({onlineUsers: Object.assign(this.state.onlineUsers, users)}))
  }

  render() {
    return (
        <div className="container app">
          <div className="row app-one">
            <div className="col-sm-4 side">
              <div className="side-one">
                <UserAvatar email={getEmail()}/>
                <Sidebar onlineUsers={this.state.onlineUsers}/>
              </div>
            </div>
            <div className="col-sm-8 conversation">
              <MessageBoxHeading/>
              <MessageBox/>
              <ReplyBox/>
            </div>
          </div>
        </div>
    )
  }
}

export default ChatPage;