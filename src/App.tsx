import './App.scss';
import React from 'react';
import Navbar from './containers/Navbar';
import MessageBox from './containers/MessageBox';
import MessagesListBox from './containers/MessagesListBox';
import ChatListBox from './containers/ChatListBox';
// import socketIOClient from "socket.io-client";

document.body.style.backgroundColor = "rgba(184, 178, 106, 0.452)";

const App: React.FC<{socket:SocketIOClient.Socket}> = (props) => {
  return (
    <div className="App">
      <Navbar/>
      <div className="row m-0 w-100 h-100">
      <div className="col-4 bg-light p-0 position-relative overflowBox">
        <div className="position-absolute w-100 h-100">
          <ChatListBox/>
        </div>
      </div>
      <div className = "col-8 position-relative p-0 overflowBox" id="messageContainer">
        <div className="position-absolute w-100 h-100" id="messageContainerWrapper">
          <MessagesListBox/>
          <MessageBox socket={props.socket}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
