import React from 'react';

const Message = ({ message, author }) => {
  return <li>{author ? `${author}: ${message}` : message}</li>;
};

export default Message;
