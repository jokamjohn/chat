import React from 'react';
import PropTypes from 'prop-types';
import {sendChatMessageEvent} from "../../io/events";

class ReplyBox extends React.Component {

  state = {
    message: ''
  };

  handleChange = event => this.setState({message: event.target.value});

  /**
   * Send a message to the recipient only if they are valid and
   * their socket Id available plus the message.
   */
  handleClick = () => {
    const {recipientId, socketId} = this.props;
    const {message} = this.state;
    if (recipientId <= 0) return;
    if (!socketId) return;
    sendChatMessageEvent(message, recipientId, socketId);
    this.setState({message: ''})
  };

  render() {
    return (
        <div className="row reply">
          <div className="col-sm-9 col-xs-9 ">
            <textarea
                className="form-control"
                rows="1"
                id="comment"
                value={this.state.message}
                onChange={this.handleChange}>
            </textarea>
          </div>

          <div className="col-sm-1 col-xs-1 reply-send">
            <button onClick={this.handleClick}>
              <i className="fa fa-send fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
    );
  }
}

ReplyBox.propTypes = {
  recipientId: PropTypes.number,
  socketId: PropTypes.string,
};

export default ReplyBox;