import React from 'react';
import ReactDOM from "react-dom";
import Message from './components/Message.jsx'

class App extends React.Component {


  render() {
    return (
    <div>
        hello
        <Message count="2" />
    </div>
    )
  }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
  );