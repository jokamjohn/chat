import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container app">
          <div className="row app-one">

            <div className="col-sm-4 side">
              <div className="side-one">
                {/*Heading */}
                <div className="row heading">
                  <div className="col-sm-3 col-xs-3 heading-avatar">
                    <div className="heading-avatar-icon">
                      <img src="http://shurl.esy.es/y"/>
                    </div>
                  </div>
                </div>
                {/*Heading End*/}

                {/*sidebar*/}
                <div className="row sideBar">
                  <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                      <div className="avatar-icon">
                        <img src="http://shurl.esy.es/y"/>
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
                {/*Sidebar End*/}
              </div>
            </div>

            {/*New Message Sidebar End*/}

            {/*Conversation Start*/}
            <div className="col-sm-8 conversation">
              {/*Heading*/}
              <div className="row heading">
                <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                  <div className="heading-avatar-icon">
                    <img src="http://shurl.esy.es/y"/>
                  </div>
                </div>
                <div className="col-sm-8 col-xs-7 heading-name">
                  <a className="heading-name-meta">Ankit Jain
                  </a>
                  <span className="heading-online">Online</span>
                </div>
              </div>
              {/*Heading End*/}

              {/*Message Box*/}
              <div className="row message" id="conversation">

                <div className="row message-previous">
                  <div className="col-sm-12 previous">
                    <a onclick="previous(this)" id="ankitjain28" name="20">
                      Show Previous Message!
                    </a>
                  </div>
                </div>

                <div className="row message-body">
                  <div className="col-sm-12 message-main-receiver">
                    <div className="receiver">
                      <div className="message-text">
                        Hyy, Its Awesome..!
                      </div>
                      <span className="message-time pull-right">
                            Sun
                            </span>
                    </div>
                  </div>
                </div>

                <div className="row message-body">
                  <div className="col-sm-12 message-main-sender">
                    <div className="sender">
                      <div className="message-text">
                        Thanks n I know its awesome...!
                      </div>
                      <span className="message-time pull-right">
                  Sun
                </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*Message Box End*/}

              {/*Reply Box*/}
              <div className="row reply">
                <div className="col-sm-9 col-xs-9 ">
                  <textarea className="form-control" rows="1" id="comment"></textarea>
                </div>

                <div className="col-sm-1 col-xs-1 reply-send">
                  <i className="fa fa-send fa-2x" aria-hidden="true"></i>
                </div>
              </div>
              {/*Reply Box End*/}
            </div>
            {/*Conversation End*/}
          </div>
          {/*App One End*/}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
