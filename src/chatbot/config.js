import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
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
    // {
    //   widgetName: "reactivateAccountOption",
    //   widgetFunc: (props) => <ReactivateAccountOption {...props} />,
    // },
  ],
  customComponents: {
    header: () => (
      <div
        style={{ backgroundColor: "red", padding: "5px", borderRadius: "3px" }}
      >
        This is the header
      </div>
    ),
    // // Replaces the default bot avatar
    // botAvatar: (props) => <MyAvatar {...props} />,
    // // Replaces the default bot chat message container
    // botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // // Replaces the default user icon
    // userAvatar: (props) => <MyCustomAvatar {...props} />,
    // // Replaces the default user chat message
    // userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
};

export default config;
