import React from 'react';
import gravatar from "gravatar";
import PropType from 'prop-types';

const UserCard = ({email, name, updatedAt}) => (
    <div className="row sideBar-body">
      <div className="col-sm-3 col-xs-3 sideBar-avatar">
        <div className="avatar-icon">
          <img src={gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, true)} alt="user avatar"/>
        </div>
      </div>
      <div className="col-sm-9 col-xs-9 sideBar-main">
        <div className="row">
          <div className="col-sm-8 col-xs-8 sideBar-name">
            <span className="name-meta">{name}</span>
          </div>
          <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
            <span className="time-meta pull-right">{updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
);

UserCard.propTypes = {
  email: PropType.string.isRequired,
  name: PropType.string.isRequired,
  updatedAt: PropType.string.isRequired,
};

export default UserCard;