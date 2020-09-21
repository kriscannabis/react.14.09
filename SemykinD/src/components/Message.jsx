import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Message extends Component {
  // static propTypes = {
  //   text: PropTypes.object.isRequired,
  // };

  render() {
    return (
      <li>{ this.props.text } -> Send: {this.props.author}</li>
    );
  }
}

export default Message;