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
      messageText: `${this.props.name}, в чате больше никого нет. Кому ты пишешь?`,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <MessageList
          messageList={this.state.messagesList}
          answerToMessage={this.answerToMessage}
        />
        <FormMessage addMessage={this.addMessage} />
      </div>
    );
  }
}

ReactDOM.render(
  <MessageHistory name="Bob" />,
  document.getElementById('hello-ex'),
);
