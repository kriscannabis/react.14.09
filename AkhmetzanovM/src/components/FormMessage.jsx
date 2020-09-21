import React, { Component } from 'react';

class FormMessage extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }

  state = {
    messageText: '',
  };

  /**
   * Сохраняет в state значение введённое в текстовое поле
   * @param inputEl
   */
  onInputChange = (inputEl) => {
    const { messageText } = this.state;
    this.setState({ messageText: inputEl.target.value });
  };

  /**
   * Ставит фокус на поле для ввода сообщения. Нужно чтобы постоянно не приходилось кликать на текстовое поле.
   */
  inputFocus() {
    this.textInput.current.focus();
  }

  /**
   * Передаёт автора и текст сообщения в родительский компонент и очищает текстовое поле
   * @param event событие отправки данных формы
   */
  onSubmit = (event) => {
    event.preventDefault();
    const { addMessage, userName } = this.props;
    addMessage({ author: userName, messageText: this.state.messageText });
    this.setState({
      messageText: '',
    });
    this.inputFocus();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="textbox"
          ref={this.textInput}
          type="text"
          autoFocus={true}
          name="messageText"
          value={this.state.messageText}
          onChange={this.onInputChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default FormMessage;
