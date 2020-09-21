import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField';
import {v4 as uuidv4} from "uuid";

class MessageComponent extends Component {

  addMessage = (message) => {
    const { messages } = this.state;

    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  render = () => {
    return (
      <div>
        <MessageField addMessage={this.addMessage} />
      </div>
    );
  }
}

ReactDOM.render(
  <MessageComponent/>,
  document.getElementById('root'),
);