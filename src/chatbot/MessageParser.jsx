import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("reset")) {
      actions.handleResetPassword();
    }
    // how to add multiple keyword?
    if (message.includes("lock")) {
      actions.handleAccountLocked();
    }

    if (message.includes("dog")) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
