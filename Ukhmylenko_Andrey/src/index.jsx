import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import FormMessage from "./components/FormMessage/FormMessage";

class HelloMessage extends Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        number: Math.floor(Math.random() * 100 + 1),
        author: "Bot",
        message: "Привет. Я бот. Напиши команду, и я выполню ее.",
      },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (messages.length % 2 == 0) {
      setTimeout(() => {
        this.addMessage({
          author: "Bot",
          message: "Неизвестная команда. Попробуй еще раз!",
        });
      }, 500);
    }
  }

  addMessage = (message) => {
    const { messages } = this.state;

    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  render() {
    const { messages } = this.state;

    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>from GeekBrains</p>
        <FormMessage messages={messages} addMessage={this.addMessage} />
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById("root"));
