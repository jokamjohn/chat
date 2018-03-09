import React from 'react';
import './style.css';
import UserAvatar from "./userAvator";
import Sidebar from "./sidebar";
import MessageBoxHeading from "./messageBoxHeading";
import MessageBox from "./messageBox";
import ReplyBox from "./replyBox";
import {addUserEvent, loginEvent} from "../../io/events";
import {getEmail, getUserId, getUsername} from "../../utils/authService";
import {getChatMessages} from "../../api/chatAPI";

class ChatPage extends React.Component {

  state = {
    onlineUsers: {},
    messages: [],
    recipientId: 0,
    recipientEmail: '',
    recipientName: '',
  };

  componentDidMount() {
    const {onlineUsers} = this.state;
    loginEvent(users => this.setState({onlineUsers: Object.assign(onlineUsers, users)}));
    addUserEvent(getEmail(), getUsername(), getUserId());
  }

  /**
   * Get the user of the clicked on recipient and set it in state.
   * @param userId Recipient user Id
   * @param email Recipient email address
   * @param name Recipient name
   */
  getRecipientUserInfo = (userId, email, name) => {
    this.setState({
      recipientId: userId,
      recipientEmail: email,
      recipientName: name
    });
    getChatMessages(userId).then(chat => this.setState({messages: chat.data.messages}));
  };

  render() {
    const {onlineUsers, recipientId, messages, recipientEmail, recipientName} = this.state;
    return (
        <div className="container app">
          <div className="row app-one">
            <div className="col-sm-4 side">
              <div className="side-one">
                <UserAvatar email={getEmail()}/>
                <Sidebar onlineUsers={onlineUsers} onRecipientClick={this.getRecipientUserInfo}/>
              </div>
            </div>
            <div className="col-sm-8 conversation">
              {recipientName && recipientEmail
                  ?
                  <React.Fragment>
                    <MessageBoxHeading email={recipientEmail} name={recipientName}/>
                    <MessageBox messages={messages} recipientId={recipientId}/>
                    <ReplyBox/>
                  </React.Fragment>
                  :
                  <div>
                    Click on an online user icon in the sidebar to start the chat
                  </div>
              }
            </div>
          </div>
        </div>
    )
  }
}

export default ChatPage;