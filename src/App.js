import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
