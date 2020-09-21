import React, {Component} from 'react';
import { v4 as uuid } from 'uuid';

import Message from './Message';
import MessageForm from './MessageForm';

class Messages extends Component {
  state = {
    messagesList: [{_id: uuid(), author: 'Bot', message: 'Hello!'}],
  }

  addMessage = ({ author, message }) => {
    const newMessage = { _id: uuid(), author: author, message: message };

    this.setState(({ messagesList }) => ({
      messagesList: [...messagesList, newMessage],
    }));
  }

  componentDidUpdate() {
    const { messagesList } = this.state;

    if (messagesList[messagesList.length - 1].author !== 'Bot') {
      setTimeout(() => this.addMessage({ author: 'Bot', message: 'Ok!' }), 300);
    }
  }

  render() {
    return <>
      <MessageForm addMessage={this.addMessage} />
      <ul>
        {
          this.state.messagesList.map(({ _id, author, message }) => {
            return <Message key={_id} message={message} author={author} />
          })
        }
      </ul>
    </>
  }
}

export default Messages;
