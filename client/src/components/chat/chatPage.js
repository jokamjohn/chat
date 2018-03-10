import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import UserAvatar from "./userAvator";
import Sidebar from "./sidebar";
import MessageBoxHeading from "./messageBoxHeading";
import MessageBox from "./messageBox";
import ReplyBox from "./replyBox";
import {addUserEvent, getDirectMessageEvent, getOnlineUserEvent, getOwnDirectMessageEvent} from "../../io/events";
import {getEmail, getUserId, getUsername} from "../../utils/authService";
import {connect} from 'react-redux';
import {addChatMessage, getChatMessagesFromAPI} from "../../redux/actions/chats";
import {addOnlineUsers} from "../../redux/actions/users";

class ChatPage extends React.Component {

  state = {
    recipientId: 0,
    recipientEmail: '',
    recipientName: '',
    recipientSocketId: '',
  };

  componentDidMount() {
    const {dispatch} = this.props;
    getOnlineUserEvent(users => dispatch(addOnlineUsers(users)));
    addUserEvent(getEmail(), getUsername(), getUserId());
    getDirectMessageEvent(message => dispatch(addChatMessage(message)));
    getOwnDirectMessageEvent(message => dispatch(addChatMessage(message)));
  }

  /**
   * Get the user of the clicked on recipient and set it in state.
   * @param recipientId Recipient user Id
   * @param email Recipient email address
   * @param name Recipient name
   * @param socketId
   */
  getRecipientUserInfo = (recipientId, email, name, socketId) => {
    this.setState({
      recipientId: recipientId,
      recipientEmail: email,
      recipientName: name,
      recipientSocketId: socketId,
    });
    this.props.dispatch(getChatMessagesFromAPI(recipientId));
  };

  render() {
    const {recipientId, recipientEmail, recipientName, recipientSocketId} = this.state;
    const {messages, onlineUsers} = this.props;
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
                    <ReplyBox recipientId={recipientId} socketId={recipientSocketId}/>
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

const mapStateToProps = state => state;

ChatPage.propTypes = {
  dispatch: PropTypes.func,
  message: PropTypes.array,
  onlineUsers: PropTypes.object,
};

export default connect(mapStateToProps)(ChatPage);