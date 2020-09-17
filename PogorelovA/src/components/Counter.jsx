import React, { useEffect } from "react";

let interval = null;

const Counter = ({ count }) => {
  useEffect(() => {
    interval = setInterval(() => {
      console.log("я паразитный clg");
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{count}</span>;
};

// class Counter extends PureComponent {
//   interval = null;

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       console.log("я паразитный clg");
//     }, 300);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     const { count } = this.props;
//     console.log("render Count: ", count);
//     return <span>{count}</span>;
//   }
// }

export default Counter;
