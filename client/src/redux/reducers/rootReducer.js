import auth from './authReducer';
import messages from './chatReducer';
import onlineUsers from './usersReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  auth,
  messages,
  onlineUsers,
});
