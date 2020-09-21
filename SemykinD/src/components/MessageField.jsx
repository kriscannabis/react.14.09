import React, { Component } from 'react';
import Message from './Message';
import { v4 as uuidv4 } from 'uuid';

class MessageField extends Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        author: 'Bot',
        message: 'Я бот, чего ты от меня хочешь, кожаный мешок?'
      },
    ],
  };

  onClick = () => {
    const { messages } = this.state;
    this.setState({messages: [...messages, {
      id: uuidv4(),
      author: 'User',
      message: 'Привет!'
    }]});
  };


  componentDidUpdate(prevProps ,prevState) {
    if (prevState.messages[prevState.messages.length - 1].author === 'Bot') {
      setTimeout(() =>
        this.setState({
          messages: [...this.state.messages, {
            id: uuidv4(),
            author: 'Bot',
            message: 'Не приставай ко мне, я бот!'
          }]
        }), 2000
      )
    }
  }


  render () {
    const { messages } = this.state;
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.onClick}>Add message</button>
        <ul>
          {messages.map((message) => (
            <Message key={message.id} text={message.message} id={message.id} author={message.author}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default MessageField;