import React, { Component } from 'react';

class MessageField extends Component {
  state = {
    author: '',
    message: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addMessage } = this.props;
    addMessage(this.state);
    this.setState({
      author: '',
      message: ''
    })
  };

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  render () {
    const { author, message } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            <span>Author: </span>
            <input
              type="text"
              name="author"
              onChange={this.onChange}
              value={author}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Text: </span>
            <input
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default MessageField;