import React from 'react';
import PropTypes from 'prop-types';
import gravatar from "gravatar";

const UserAvatar = ({email}) => (
    <div className="row heading">
      <div className="col-sm-3 col-xs-3 heading-avatar">
        <div className="heading-avatar-icon">
          <img src={gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, true)} alt="user avatar"/>
        </div>
      </div>
      <div className="col-sm-8 col-xs-7 heading-name">
        <a className="heading-name-meta">Online Users</a>
      </div>
    </div>
);

UserAvatar.proptypes = {
  email: PropTypes.string,
};


export default UserAvatar;