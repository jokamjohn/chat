import React from 'react';
import PropTypes from 'prop-types';
import CurrentUserMessageTab from "./currentUserMessageTab";
import RecipientMessageTab from "./recipientMessageTab";
import {getUserId} from "../../utils/authService";

const MessageBox = ({messages, recipientId}) => (
    <div className="row message" id="conversation">
      {messages.length
          ?
          messages.map(message => {
            if (message.senderId === getUserId()) {
              return <CurrentUserMessageTab key={message.id} message={message}/>
            }

            if (message.senderId === recipientId) {
              return <RecipientMessageTab message={message} key={message.id}/>
            }
          })
          :
          <div>No messages</div>
      }
    </div>
);

MessageBox.propTypes = {
  messages: PropTypes.array,
  recipientId: PropTypes.number,
};

export default MessageBox;