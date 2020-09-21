import React, {Component} from 'react';
import { v4 as uuid } from 'uuid';

import Message from './Message';

class Messages extends Component {
  state = {
    authorInput: '',
    messageInput: '',
    messagesList: [{_id: uuid(), author: 'Bot', message: 'Hello!'}],
  }

  clearFields = () => {
    this.setState({
      authorInput: '',
      messageInput: '',
    });
  }

  testFields = () => {
    const { authorInput, messageInput } = this.state;

    return authorInput.length > 0 && messageInput.length > 0;
  }

  addMessage = ({ author, message }) => {
    const newMessage = { _id: uuid(), author: author, message: message };

    this.setState(({ messagesList }) => ({
      messagesList: [...messagesList, newMessage],
    }));

    this.clearFields()
  }

  onChange = ({target}) => {
    this.setState({
      [target.dataset.type]: target.value,
    })
  }

  onSubmit = (e) => {
    const { authorInput, messageInput } = this.state;

    e.preventDefault();

    this.testFields() && this.addMessage({author: authorInput, message: messageInput});
  }

  componentDidUpdate() {
    const { messagesList } = this.state;

    if (messagesList[messagesList.length - 1].author !== 'Bot') {
      setTimeout(() => this.addMessage({ author: 'Bot', message: 'Ok!' }), 300);
    }
  }

  render() {
    return <>
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} type="text" value={this.state.authorInput} data-type="authorInput" placeholder="Author"/>
        <input onChange={this.onChange} type="text" value={this.state.messageInput} data-type="messageInput" placeholder="Message"/>
        <button type="submit">Add message</button>
      </form>
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
