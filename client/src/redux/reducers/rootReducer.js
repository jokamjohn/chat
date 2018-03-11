import auth from './authReducer';
import messages from './chatReducer';
import onlineUsers from './eventsReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  auth,
  messages,
  onlineUsers,
});
