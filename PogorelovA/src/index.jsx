import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Message from "./components/Message";

class HelloMessage extends Component {
  constructor() {
    super();
    console.log("I am from constructor");

    this.state = {
      count: 0,
      messages: ["Привет"],
      isVisible: false,
    };
  }

  componentDidMount() {
    console.log("I am from CDM самое место для запроса");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("I am from CDU");
  }

  onClick = ({ target }) => {
    const { type } = target.dataset;
    const { count } = this.state;
    this.setState({ count: type === "inc" ? count + 1 : count - 1 });
  };

  addMessage = () => {
    this.setState(({ messages, count }) => ({
      messages: [...messages, `новое сообщение ${count}`],
    }));
  };

  toggleVisible = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };

  render() {
    console.log("I am from Render");
    const { count, messages, isVisible } = this.state;

    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>from GeekBrains</p>
        <div>
          <button data-type="inc" onClick={this.onClick}>
            increment
          </button>
          {isVisible && <Counter count={count} />}
          <button data-type="dec" onClick={this.onClick}>
            decrement
          </button>
          <p>
            <button onClick={this.toggleVisible}>toggle visibility</button>
          </p>
        </div>
        <button onClick={this.addMessage}>add message</button>
        <ul>
          {messages.map((item, index) => (
            <Message key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("root")
);
