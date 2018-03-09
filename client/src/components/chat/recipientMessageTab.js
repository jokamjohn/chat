import React from 'react';
import PropTypes from 'prop-types';
import {getReadableDate} from "../../utils/helper";

const RecipientMessageTab = ({message}) => (
    <div className="row message-body">
      <div className="col-sm-12 message-main-receiver">
        <div className="receiver">
          <div className="message-text">
            {message.message}
          </div>
          <span className="message-time pull-right">{getReadableDate(message.updatedAt)}</span>
        </div>
      </div>
    </div>
);

RecipientMessageTab.propTypes = {
  message: PropTypes.object.isRequired,
};

export default RecipientMessageTab;
