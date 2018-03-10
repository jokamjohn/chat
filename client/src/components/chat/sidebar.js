import React from 'react';
import PropTypes from 'prop-types';
import UserCard from "./userCard";
import {isObjectEmpty} from '../../utils/helper';
import {getEmail} from "../../utils/authService";

class Sidebar extends React.Component {
  render() {
    const {onlineUsers, onRecipientClick} = this.props;
    const users = Object.keys(onlineUsers);

    return (
        <div className="row sideBar">
          {!isObjectEmpty(onlineUsers)
              ?
              users.map(email => {
                if (email === getEmail()) {
                  delete onlineUsers.email;
                  return;
                }
                const name = onlineUsers[email].name;
                const key = onlineUsers[email].socketId;
                const userId = onlineUsers[email].userId;
                const socketId = onlineUsers[email].socketId;
                return <UserCard
                    key={key}
                    email={email}
                    name={name}
                    userId={userId}
                    onRecipientClick={onRecipientClick}
                    socketId={socketId}
                />
              })
              :
              <div>No users online</div>
          }
        </div>
    )
  }
}

Sidebar.propTypes = {
  onlineUsers: PropTypes.object,
  onRecipientClick: PropTypes.func,
};
export default Sidebar;

