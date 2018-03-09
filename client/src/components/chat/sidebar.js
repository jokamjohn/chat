import React from 'react';
import PropTypes from 'prop-types';
import UserCard from "./userCard";
import {isObjectEmpty} from '../../utils/helper';

class Sidebar extends React.Component {
  render() {
    const {onlineUsers} = this.props;
    const users = Object.keys(onlineUsers);

    return (
        <div className="row sideBar">
          {!isObjectEmpty(onlineUsers)
              ?
              users.map(email => {
                const name = onlineUsers[email].name;
                const key = onlineUsers[email].socketId;
                return <UserCard key={key} email={email} name={name} updatedAt='7:00'/>
              })
              :
              <div>No users online</div>
          }
        </div>
    )
  }
}

Sidebar.propTypes = {
  onlineUsers: PropTypes.object
};
export default Sidebar;

