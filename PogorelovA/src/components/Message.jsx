import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Message = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("I am from useEffect Message");

    return () => {
      console.log("I am from RETURN useEffect Message");
    };
  }, [isVisible]);

  return (
    <Fragment>
      <li>{item}</li>
      <button onClick={() => setIsVisible((prev) => !prev)}>show</button>
      {isVisible && <span>I'm from show</span>}
    </Fragment>
  );
};

Message.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Message;
