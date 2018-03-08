import React from 'react';

const Sidebar = () =>
    <React.Fragment>
      <div className="row sideBar">
        <div className="row sideBar-body">
          <div className="col-sm-3 col-xs-3 sideBar-avatar">
            <div className="avatar-icon">
              <img src="http://shurl.esy.es/y" alt="user avatar"/>
            </div>
          </div>
          <div className="col-sm-9 col-xs-9 sideBar-main">
            <div className="row">
              <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">Ankit Jain
                  </span>
              </div>
              <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>;

export default Sidebar;

