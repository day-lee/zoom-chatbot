import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";

const config = {
  initialMessages: [createChatBotMessage(`Hi`)],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customComponents: {
    header: () => (
      <div
        style={{ backgroundColor: "red", padding: "5px", borderRadius: "3px" }}
      >
        This is the header
      </div>
    ),
  },
};

export default config;
