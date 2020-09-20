import React from 'react';

const Message = ({ message, userName }) => {
  return (
    <div>
      <p>
        {message.author == userName ? 'Вы' : message.author}:{' '}
        {message.messageText}
      </p>
    </div>
  );
};

export default Message;
