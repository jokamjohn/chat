import React from 'react';
import PropTypes from 'prop-types';
import CurrentUserMessageTab from "./currentUserMessageTab";
import RecipientMessageTab from "./recipientMessageTab";
import {getUserId} from "../../utils/authService";

class MessageBox extends React.Component {

  componentDidMount() {
    this.scrollToBottom();
  };

  componentDidUpdate() {
    this.scrollToBottom();
  };

  scrollToBottom = () => {
    this.el.scrollIntoView({behavior: "smooth"});
  };

  render() {
    const {messages, recipientId} = this.props;

    return (
        <div className="row message" id="conversation">
          {messages.length
              ?
              <React.Fragment>
                {
                  messages.map(message => {
                    if (message.senderId === getUserId()) {
                      return <CurrentUserMessageTab key={message.id} message={message}/>
                    }

                    if (message.senderId === recipientId) {
                      return <RecipientMessageTab message={message} key={message.id}/>
                    }
                  })
                }
              </React.Fragment>
              :
              <div>No messages</div>
          }
          <div ref={el => {
            this.el = el;
          }}/>
        </div>
    );
  }
}

MessageBox.propTypes = {
  messages: PropTypes.array,
  recipientId: PropTypes.number,
};

export default MessageBox;