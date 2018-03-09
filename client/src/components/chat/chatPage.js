import React from 'react';
import './style.css';
import UserAvatar from "./userAvator";
import Sidebar from "./sidebar";
import MessageBoxHeading from "./messageBoxHeading";
import MessageBox from "./messageBox";
import ReplyBox from "./replyBox";
import {getConnected, loginEvent} from "../../io/events";
import {getEmail} from "../../utils/authService";
import {getChatMessages} from "../../api/chatAPI";

class ChatPage extends React.Component {

  state = {
    onlineUsers: {},
    messages: [],
    recipientId: 0,
  };

  componentDidMount() {
    getConnected();
    loginEvent(users => this.setState({onlineUsers: Object.assign(this.state.onlineUsers, users)}));
    getChatMessages(12).then(chat => this.setState({messages: chat.data.messages}))
  }

  /**
   * Get the user of the clicked on recipient and set it in state.
   * @param userId
   */
  getRecipientUserId = userId => this.setState({recipientId: userId});

  render() {
    const {onlineUsers, recipientId, messages} = this.state;
    return (
        <div className="container app">
          <div className="row app-one">
            <div className="col-sm-4 side">
              <div className="side-one">
                <UserAvatar email={getEmail()}/>
                <Sidebar onlineUsers={onlineUsers} onRecipientClick={this.getRecipientUserId}/>
              </div>
            </div>
            <div className="col-sm-8 conversation">
              <MessageBoxHeading/>
              <MessageBox messages={messages} recipientId={recipientId}/>
              <ReplyBox/>
            </div>
          </div>
        </div>
    )
  }
}

export default ChatPage;