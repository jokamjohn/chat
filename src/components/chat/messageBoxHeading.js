import React from 'react';
import gravatar from "gravatar";
import PropTypes from "prop-types";
import {titleCaseText} from "../../utils/helper";

const MessageBoxHeading = ({email, name}) => (
    <div className="row heading">
      <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
        <div className="heading-avatar-icon">
          <img src={gravatar.url(email, {s: '100', r: 'x', d: 'retro'})} alt="user avatar"/>
        </div>
      </div>
      <div className="col-sm-8 col-xs-7 heading-name">
        <a className="heading-name-meta">{titleCaseText(name)}</a>
        <span>Online</span>
      </div>
    </div>
);

MessageBoxHeading.proptypes = {
  email: PropTypes.string,
  name: PropTypes.string,
};

export default MessageBoxHeading;