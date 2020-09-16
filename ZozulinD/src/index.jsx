import React from 'react';
import ReactDOM from 'react-dom';

import Message from './components/Message';

class HelloMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      messages: [],
    };

    this.onClick = this.onClick.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  onClick() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  addMessage() {
    const { messages } = this.state;
    this.setState({ messages: [...messages, 'New message'] });
  }

  render() {
    const { count, messages } = this.state;

    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>from GeekBrains</p>
        <p>{count}</p>
        <button onClick={this.onClick}>increment</button>
        <button onClick={this.addMessage}>Add message</button>
        <ul>
          {messages.map((message, index) => {
            return <Message key={index} message={message} />;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage name='Taylor' />, document.querySelector('#app'));
