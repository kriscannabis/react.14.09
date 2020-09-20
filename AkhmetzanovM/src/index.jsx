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
   * В зависимости от числа, возвращает слово в правильном падеже.
   * @param {number} amount число
   * @throws {Error} ошибка
   * @returns {string}
   */
  messageTextForm = (amount) => {
    if (/([5-9,0]$)|([1][0-4]$)/gm.test(amount)) {
      return 'сообщений';
    } else if (/[1]$/gm.test(amount)) {
      return 'сообщение';
    } else if (/[2-4]$/gm.test(amount)) {
      return 'сообщения';
    }
    throw new Error('Ошибка');
  };

  answerToMessage = (authorsName) => {
    const array = this.state.messagesList.filter((el) => {
      if (el.author == authorsName) {
        return true;
      }
    });
    console.log(array);
    const messageForm = this.messageTextForm(array.length);
    this.addMessage({
      author: 'BOT',
      messageText: `Вы отправили ${array.length} ${messageForm}`,
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
