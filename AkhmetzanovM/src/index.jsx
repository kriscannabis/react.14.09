import React from 'react';
import ReactDOM from 'react-dom';
import { v4 } from 'uuid';
import MessageList from './components/MessageList';
import FormMessage from './components/FormMessage';

class MessageHistory extends React.Component {
  state = {
    messagesList: [],
  };

  /**
   * Добавляет сообщение в общий список
   * @param {Object} message
   */
  addMessage = (message) => {
    const { messagesList } = this.state;
    this.setState({
      messagesList: [...messagesList, { id: v4(), ...message }],
    });
  };

  /**
   * Автоответ бота
   */
  answerToMessage = () => {
    this.addMessage({
      author: 'BOT',
      messageText: `${this.props.userName}, в чате больше никого нет. Кому ты пишешь?`,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.userName}</h1>
        <MessageList
          messageList={this.state.messagesList}
          answerToMessage={this.answerToMessage}
          userName={this.props.userName}
        />
        <FormMessage
          addMessage={this.addMessage}
          userName={this.props.userName}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <MessageHistory userName="Bob" />,
  document.getElementById('hello-ex'),
);
