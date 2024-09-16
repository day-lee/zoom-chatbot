import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleResetPassword = () => {
    const botMessage = createChatBotMessage("Would you like to reset pw?");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage("here's a nice dog pics for you.", {
      widget: "dogPicture",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleResetPassword,
            handleDog,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
