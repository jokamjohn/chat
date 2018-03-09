import React from 'react';
import gravatar from "gravatar";
import {getUsername} from "../../utils/authService";
import PropTypes from "prop-types";

const MessageBoxHeading = ({email}) => (
    <div className="row heading">
      <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
        <div className="heading-avatar-icon">
          <img src={gravatar.url(email, {s: '100', r: 'x', d: 'retro'})} alt="user avatar"/>
        </div>
      </div>
      <div className="col-sm-8 col-xs-7 heading-name">
        <a className="heading-name-meta">{getUsername()}</a>
        <span>Online</span>
      </div>
    </div>
);

MessageBoxHeading.proptypes = {
  email: PropTypes.string,
};

export default MessageBoxHeading;