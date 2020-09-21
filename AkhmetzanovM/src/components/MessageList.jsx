import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  /**
   * Проверяет, чьё сообщение было последним и если это не бот, то запускает родительский метод автоответа
   */
  componentDidUpdate() {
    const { messageList, answerToMessage } = this.props;
    if (messageList[messageList.length - 1].author != 'BOT') {
      answerToMessage(messageList[messageList.length - 1].author);
    }
  }

  render() {
    const { messageList, userName } = this.props;
    return (
      <div>
        {messageList.map((message) => (
          <Message key={message.id} message={message} userName={userName} />
        ))}
      </div>
    );
  }
}

export default MessageList;
