import React from 'react';

const MessageBox = () =>
    <React.Fragment>
      <div className="row message" id="conversation">
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
    </React.Fragment>;

export default MessageBox;