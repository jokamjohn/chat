import React from 'react';
import gravatar from "gravatar";
import PropType from 'prop-types';
import {titleCaseText} from "../../utils/helper";
import {connect} from "react-redux";

class UserCard extends React.Component {
  render() {
    const {email, name, updatedAt, userId, onRecipientClick, socketId, onlineUsers} = this.props;
    return (
        <div className="row sideBar-body" onClick={() => onRecipientClick(userId, email, name, socketId)}>
          <div className="col-sm-3 col-xs-3 sideBar-avatar">
            <div className="avatar-icon">
              <img src={gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, true)} alt="user avatar"/>
            </div>
          </div>
          <div className="col-sm-9 col-xs-9 sideBar-main">
            <div className="row">
              <div className="col-sm-8 col-xs-8 sideBar-name">
                <span className="name-meta">{titleCaseText(name)}</span>
                <div style={{color: 'red', marginLeft: '10px'}}>
                  <strong><i><span>{onlineUsers[email].typing ? '... is typing' : ''}</span></i></strong>
                </div>
              </div>
              <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                {/*<span className="time-meta pull-right">{updatedAt}</span>*/}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(UserCard);

UserCard.propTypes = {
  email: PropType.string.isRequired,
  name: PropType.string.isRequired,
  onRecipientClick: PropType.func,
  userId: PropType.number,
  socketId: PropType.string,
  isTyping: PropType.bool,
};

