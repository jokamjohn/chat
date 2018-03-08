import React from 'react';
import './style.css';
import UserAvatar from "./userAvator";
import Sidebar from "./sidebar";
import MessageBoxHeading from "./messageBoxHeading";
import MessageBox from "./messageBox";
import ReplyBox from "./replyBox";

const ChatPage = () =>
    <div className="container app">
      <div className="row app-one">
        <div className="col-sm-4 side">
          <div className="side-one">
            <UserAvatar/>
            <Sidebar/>
          </div>
        </div>
        <div className="col-sm-8 conversation">
          <MessageBoxHeading/>
          <MessageBox/>
          <ReplyBox/>
        </div>
      </div>
    </div>;

export default ChatPage;