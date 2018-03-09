import React from 'react';
import PropTypes from 'prop-types';
import {getReadableDate} from "../../utils/helper";

const CurrentUserMessageTab = ({message}) => (
    <div className="row message-body">
      <div className="col-sm-12 message-main-sender">
        <div className="sender">
          <div className="message-text">
            {message.message}
          </div>
          <span className="message-time pull-right">{getReadableDate(message.updatedAt)}</span>
        </div>
      </div>
    </div>
);

CurrentUserMessageTab.propTypes = {
  message: PropTypes.object.isRequired,
};

export default CurrentUserMessageTab;