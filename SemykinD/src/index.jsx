import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Message from './components/Message';

let messages = ['Привет!', 'Как дела?'];

class MessageComponent extends Component {
  constructor() {
    super();

    this.state = {
      messages: messages,
    }
  }

  onClick = () => {
    const { messages } = this.state;
    this.setState({messages: [...messages, 'Нормально']});
  };

  render() {
    const { messages } = this.state;
    return (
      <div>
        <button onClick={this.onClick}>Add message</button>
        <ul>
          {messages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <MessageComponent/>,
  document.getElementById('root'),
);