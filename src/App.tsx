import React from 'react';
import './App.sass';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
// import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer } from './components';

const apiKey = 'qgtk9ttyha7j';

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app">
      <h1>Chatty</h1>
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
