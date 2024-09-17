import Chatbot from "react-chatbot-kit";
// import "./App.css";
import ActionProvider from "./chatbot/ActionProvider";
import "./chatbot/ChatbotOverride.css";
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
