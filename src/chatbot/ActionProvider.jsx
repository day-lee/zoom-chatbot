import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleButtonClickResponse = (message) => {
    const userMessage = createClientMessage(`${message}`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));
  };

  const handleNotFindAnswer = () => {
    const firstBotMessage = createChatBotMessage(
      "Hmm, I couldn't find an answer to that. Can you try asking it a different way?"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage],
    }));
  };

  const handleAccountLocked = () => {
    const firstBotMessage = createChatBotMessage(
      "Your Zoom account will be inaccessible if it is disabled, deactivated, or locked. I can help you recover your account."
    );
    const secondBotMessage = createChatBotMessage(
      "Click the account access issue you are having below ⬇️",
      {
        widget: "accountLockedOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage, secondBotMessage],
    }));
  };

  const handleAccountAccessIssue = () => {
    const firstBotMessage = createChatBotMessage(
      "Your Zoom account will be inaccessible...."
    );
    const secondBotMessage = createChatBotMessage(
      "Click the account access...",
      {
        widget: "accountAccessIssue",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage, secondBotMessage],
    }));
  };

  const handleError1003 = () => {
    const firstBotMessage = createChatBotMessage(
      "Accounts that don't follow Zoom's Terms of Service or Acceptable Use Guidelines may be disabled without warning. Click Request an Appeal below to submit an appeal to Zoom's Trust and Safety team.",
      { widget: "error1003Option" }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage],
    }));
  };

  const handleRequestAppeal = () => {
    const firstBotMessage = createChatBotMessage(
      "The Zoom Trust & Safety team will review your appeal and provide additional information."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage],
    }));
  };

  const handleResetPasswordDepth1 = () => {
    const firstBotMessage = createChatBotMessage(
      "Click the Reset Password button below to start resetting your password."
    );
    const secondBotMessage = createChatBotMessage(
      "Note: For SSO accounts please contact your IT admin for assistance.",
      {
        widget: "resetPasswordDepth1Options",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage, secondBotMessage],
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

  const handleAccountDisabled = () => {
    const firstBotMessage = createChatBotMessage(
      'If you sign in to your Zoom account and receive a message that says "Account is disabled. Please contact your account owner or administrator" this means your account owner or admins have deactivated your Zoom account.'
    );
    const secondBotMessage = createChatBotMessage(
      "You will need to contact your account owner or admins directly to reactivate your account."
    );
    const thirdBotMessage = createChatBotMessage(
      "Click Reactivate Account below ⬇️ for instructions to provide to your account owner or admins.",
      {
        widget: "accountDisabledOption",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        firstBotMessage,
        secondBotMessage,
        thirdBotMessage,
      ],
    }));
  };

  const handleReactivateAccount = () => {
    const firstBotMessage = createChatBotMessage(
      "Let me know if you need additional assistance."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage],
    }));
  };

  const handleDisabledAccount = () => {
    const firstBotMessage = createChatBotMessage(
      "Let me know if you need additional assistance."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage],
    }));
  };

  const handleAccountBlocked = () => {
    const firstBotMessage = createChatBotMessage(
      "When multiple sign-in attempts to your Zoom account have failed because of incorrect credentials, your Zoom account will be blocked and you will be locked out."
    );
    const secondBotMessage = createChatBotMessage(
      "Please wait 30 minutes and attempt to sign in to your Zoom account again. If you are not sure what your password is, select Reset Password below ⬇️",
      {
        widget: "blockedResetPasswordOption",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage, secondBotMessage],
    }));
  };

  const handleResetPasswordDepth2 = () => {
    const firstBotMessage = createChatBotMessage(
      `On the Reset Password page, follow these instructions:

      Note: To continue following instructions here, select the Help icon on the Reset Password page.
      
      
      Enter your registered email address in the Email Address field
      Click the I'm not a robot checkbox to complete the captcha verification
      Click Send
      
      Check your email inbox and spam folders. Did you receive a verification email?`,
      {
        widget: "resetPasswordDepth2Options",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleButtonClickResponse,
            handleNotFindAnswer,
            handleAccountLocked,
            handleAccountAccessIssue,
            handleError1003,
            handleRequestAppeal,
            handleResetPasswordDepth1,
            handleReactivateAccount,
            handleAccountDisabled,
            handleAccountBlocked,
            handleDisabledAccount,
            handleResetPasswordDepth2,
            handleDog,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
