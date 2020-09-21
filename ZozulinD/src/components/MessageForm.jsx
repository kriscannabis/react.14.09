import React from 'react'

export default class MessageForm extends React.Component {
  addMessage = this.props.addMessage;

  state = {
      authorInput: '',
      messageInput: '',
  }

  clearInputs = () => {
    this.setState({
      authorInput: '',
      messageInput: '',
    });
  }

  testInputs = () => {
    const { authorInput, messageInput } = this.state;

    return authorInput.length > 0 && messageInput.length > 0;
  }

  onChange = ({target}) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  onSubmit = (e) => {
    const { authorInput, messageInput } = this.state;

    e.preventDefault();

    this.testInputs() && this.addMessage({author: authorInput, message: messageInput});

    this.clearInputs();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          type="text"
          value={this.state.authorInput}
          name="authorInput"
          placeholder="Author" />
        <input
          onChange={this.onChange}
          type="text"
          value={this.state.messageInput}
          name="messageInput"
          placeholder="Message"/>
        <button type="submit">Add message</button>
      </form>
    )
  }
}
