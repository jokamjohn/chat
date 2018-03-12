import React from 'react';
import PropTypes from 'prop-types';
import {onStopTypingEvent, onTypingEvent, sendChatMessageEvent, stopTypingEvent, typingEvent} from "../../io/events";
import {userStoppedTyping, userTyping} from "../../redux/actions/events";

class ReplyBox extends React.Component {

  state = {
    message: ''
  };

  componentDidMount() {
    const {dispatch} = this.props;
    onTypingEvent(email => dispatch(userTyping(email)));
    onStopTypingEvent(email => dispatch(userStoppedTyping(email)))
  }

  /**
   * Update state with the message as the user types.
   * @param event
   */
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

  /**
   * Handle typing events and their emission
   */
  handleInput = () => {
    const {typing} = this.state;
    const TYPING_TIMER_LENGTH = 400; // ms
    if (!typing) {
      this.setState({typing: true});
      typingEvent();
    }
    const lastTypingTime = (new Date()).getTime();

    setTimeout(() => {
      const typingTimer = (new Date()).getTime();
      const timeDiff = typingTimer - lastTypingTime;
      if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
        stopTypingEvent();
        this.setState({typing: false});
      }
    }, TYPING_TIMER_LENGTH);
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
                onChange={this.handleChange}
                onInput={this.handleInput}>
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
  dispatch: PropTypes.func.isRequired,
};

export default ReplyBox;