import React from 'react';
import ReactDom from 'react-dom';
import Message from './components/Messages';

const button = document.querySelector('#add-message');
let messages = ['Привет!', 'Как дела?'];

const MessageField = (props) => {
  return props.messages.map((message, index) => <Message key={ index } text={ message }/>)
};

const render = () => {
  ReactDom.render(
    <MessageField messages={ messages } />,
    document.getElementById('root'),
  );
};

render();

button.addEventListener('click', () => {
  messages.push('Нормально');
  render();
});