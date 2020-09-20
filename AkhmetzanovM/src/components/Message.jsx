import React from 'react';

const Message = ({ message }) => {
	return (
		<div>
			<p>{message.author}: {message.messageText}</p>
		</div>
	);
}

export default Message;