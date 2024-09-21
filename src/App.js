import Chatbot from "react-chatbot-kit";
// import "./App.css";
import { useEffect } from "react";

import ActionProvider from "./chatbot/ActionProvider";
import "./chatbot/ChatbotOverride.css";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";

import fileUpload from "./assets/document-svgrepo-com.svg";
import emojiIcon from "./assets/smile-circle-svgrepo-com.svg";

function App() {
  useEffect(() => {
    const inputElement = document.querySelector(
      ".react-chatbot-kit-chat-input"
    );

    if (inputElement) {
      inputElement.placeholder = "Write a message";
      inputElement.blur();
    }

    const formElement = document.querySelector(
      ".react-chatbot-kit-chat-input-form"
    );

    if (formElement) {
      const iconsContainer = document.createElement("div");
      iconsContainer.style.display = "flex";
      iconsContainer.style.alignItems = "center";

      const fileButton = document.createElement("button");
      fileButton.style.background = "none";
      fileButton.style.border = "none";
      fileButton.style.cursor = "not-allowed";
      fileButton.disabled = true;

      const fileIconElement = document.createElement("img");
      fileIconElement.src = `${fileUpload}`;
      fileIconElement.alt = "file upload";
      fileIconElement.style.marginLeft = "14px";
      fileIconElement.style.marginTop = "14px";
      fileIconElement.style.width = "22px";
      fileIconElement.style.padding = "3px";

      fileIconElement.addEventListener("mouseover", () => {
        fileIconElement.style.backgroundColor = "#52528017";
        fileIconElement.style.borderRadius = "2px";
      });

      fileIconElement.addEventListener("mouseout", () => {
        fileIconElement.style.backgroundColor = "";
        fileIconElement.style.border = "none";
      });

      fileButton.appendChild(fileIconElement);
      iconsContainer.appendChild(fileButton);

      const emojiButton = document.createElement("button");
      emojiButton.style.background = "none";
      emojiButton.style.border = "none";
      emojiButton.style.cursor = "not-allowed";
      emojiButton.style.width = "22px";
      emojiButton.disabled = true;

      const emojiIconElement = document.createElement("img");
      emojiIconElement.src = `${emojiIcon}`;
      emojiIconElement.alt = "emoji icon";
      emojiIconElement.style.marginLeft = "2px";
      emojiIconElement.style.marginTop = "14px";
      emojiIconElement.style.padding = "3px";

      emojiIconElement.addEventListener("mouseover", () => {
        emojiIconElement.style.backgroundColor = "#52528017";
        emojiIconElement.style.borderRadius = "2px";
      });

      emojiIconElement.addEventListener("mouseout", () => {
        emojiIconElement.style.backgroundColor = "";
        emojiIconElement.style.border = "none";
      });

      emojiButton.appendChild(emojiIconElement);
      iconsContainer.appendChild(emojiButton);

      formElement.appendChild(iconsContainer);

      return () => {
        if (iconsContainer) {
          formElement.removeChild(iconsContainer);
        }
      };
    }
  }, []);

  const validateInput = (message) => {
    if (!message.trim()) {
      return false;
    }
    return true;
  };

  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        validator={validateInput}
      />
    </div>
  );
}

export default App;
