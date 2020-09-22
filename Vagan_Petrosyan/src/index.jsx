import React, { Component } from "react";
import ReactDOM from "react-dom";
import Message from "./components/Message"
import { v4 as uuidv4 } from 'uuid';
import FormMessage from "./components/FormMessage";

class HelloMessage extends Component {
       state = {
           messages: [
               {
                   id: uuidv4(),
                   author: "Bot",
                   message: "Привет! я Bot",
               },
           ],
       };
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {messages} = this.state;
        if (messages.length % 2 === 0 ) {
            setTimeout(() => {
                this.addMessage({author: "Bot", message: `Привет я Бот`})
            }, 500);
        }
    }

    addMessage = ( message ) => {
        const { messages } = this.state;
        this.setState({ messages: [...messages, { ...message, id: uuidv4() }]});
    };

    render() {
        const { messages } = this.state;

        return (
            <div>
                <h2>Hi! {this.props.name}</h2>
                <ul>
                    {messages.map(( {id, author, message}) => (
                        <Message key={id} author={author} message={message} />
                    ))}
                </ul>
                <FormMessage addMessage={this.addMessage} />
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Taylor my friend!" />,
    document.getElementById("root")
);