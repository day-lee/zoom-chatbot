import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
import Header from "./Header.jsx";
import AccountBlockedOption from "./widget/AccountBlockedOption";
import AccountDisabledOption from "./widget/AccountDisabledOption";
import AccountLockedOptions from "./widget/AccountLockedOptions";
import BlockedResetPasswordOption from "./widget/BlockedResetPasswordOption";
import Error1030Option from "./widget/Error1003Option";
import InitialButtonOptions from "./widget/InitialButtonOptions";
import ResetPasswordDepth1Options from "./widget/ResetPasswordDepth1Options";
import ResetPasswordDepth2Options from "./widget/ResetPasswordDepth2Options";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Zoom may retain your chat transcript to use for quality, training, and analysis purposes.`
    ),
    createChatBotMessage(
      "Hi, I'm Zoe 🤖. Zoom's Virtual Agent for technical Support and Billing.",
      {
        withAvatar: false,
        delay: 100,
      }
    ),
    createChatBotMessage(
      "It looks like you need help accessing your Zoom account. I'm here to help! How can I assist you?",
      {
        widget: "initialButtonOptions",
        withAvatar: false,
      }
    ),
  ],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: "initialButtonOptions",
      widgetFunc: (props) => <InitialButtonOptions {...props} />,
    },
    {
      widgetName: "resetPasswordDepth1Options",
      widgetFunc: (props) => <ResetPasswordDepth1Options {...props} />,
    },
    {
      widgetName: "blockedResetPasswordOption",
      widgetFunc: (props) => <BlockedResetPasswordOption {...props} />,
    },
    {
      widgetName: "accountLockedOptions",
      widgetFunc: (props) => <AccountLockedOptions {...props} />,
    },
    {
      widgetName: "error1003Option",
      widgetFunc: (props) => <Error1030Option {...props} />,
    },
    {
      widgetName: "resetPasswordDepth2Options",
      widgetFunc: (props) => <ResetPasswordDepth2Options {...props} />,
    },
    {
      widgetName: "accountDisabledOption",
      widgetFunc: (props) => <AccountDisabledOption {...props} />,
    },
    {
      widgetName: "accountBlockedOption",
      widgetFunc: (props) => <AccountBlockedOption {...props} />,
    },
  ],
  // Defines an object of custom components that will replace the stock chatbot components.
  customComponents: {
    // Replaces the default header
    // header: (props) => (
    //   <div
    //     style={{ backgroundColor: "red", padding: "5px", borderRadius: "3px" }}
    //   >
    //     This is the header
    //   </div>
    // ),
    header: (props) => <Header {...props} />,
    // // Replaces the default bot avatar
    // botAvatar: (props) => <FlightBotAvatar {...props} />,
    // // Replaces the default bot chat message container
    //botChatMessage: (props) => <CustomChatMessage {...props} />,
    // // Replaces the default user icon
    // userAvatar: (props) => <MyUserAvatar {...props} />,
    // // Replaces the default user chat message
    // userChatMessage: (props) => <MyUserChatMessage {...props} />,
  },
  // Register your own set of components as custom message types
  // customMessages: {
  //   custom: (props) => <MyCustomMessage {...props} />,
  // },
  // Defines an object of custom styles if you want to override styles
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      //backgroundColor: "#376B7E",
      width: "349px",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
