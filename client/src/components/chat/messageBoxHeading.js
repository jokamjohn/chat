import React from 'react';

const MessageBoxHeading = () =>
    <div className="row heading">
      <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
        <div className="heading-avatar-icon">
          <img src="http://shurl.esy.es/y" alt="user avatar"/>
        </div>
      </div>
      <div className="col-sm-8 col-xs-7 heading-name">
        <a className="heading-name-meta">John
        </a>
        <span>Online</span>
      </div>
    </div>;

export default MessageBoxHeading;