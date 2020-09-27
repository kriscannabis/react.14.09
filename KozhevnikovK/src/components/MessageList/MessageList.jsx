import react from 'react'
import Message from "../Message";
import React from "react";
import PropTypes from "prop-types";

const MessageList = ({message}) => {
  return (
    <ul className="list">
      {messages.map(({ id, author, message }) => (
        <Message key={id} author={author} message={message} />
      ))}
    </ul>
  )
}

MessageList.prototypes = {
  message: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    message: PropTypes.string,
  })).isRequired
}

export default MessageList;
