import zoomsupport from "../../assets/zoomsupport.png";
export const InitialCustomMsg1 = () => {
  const now = new Date();
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(now);
  return (
    <>
      <div className="relative flex items-baseline gap-3">
        <img
          className="w-11 h-11 absolute bottom-[-44px]"
          src={zoomsupport}
          alt="zoomsupport"
        />
        <div className="flex">
          <div style={{ fontSize: "11px" }} className="pb-2 pl-16 text-xs ">
            Bot{" "}
            <span
              style={{ fontSize: "10px" }}
              className="inline-block bg-gray-100 text-[#02021c99] px-1 mx-1 font-bold"
            >
              BOT
            </span>{" "}
            <span style={{ fontSize: "11px" }} className="text-[#0404138f]">
              {formattedTime}
            </span>
          </div>
        </div>
      </div>
      <div className="react-chatbot-kit-chat-bot-message-container">
        <div className="react-chatbot-kit-chat-bot-message">
          <span className="italic">
            Zoom may retain your chat transcript to use for quality, training,
            and analysis purposes.
          </span>
        </div>
      </div>
    </>
  );
};

export const InitialCustomMsg2 = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-message-container">
      <div className="react-chatbot-kit-chat-bot-message">
        Hi, I'm Zoe 🤖. Zoom's Virtual Agent for technical <b>Support</b> and{" "}
        <b>Billing</b>.
      </div>
    </div>
  );
};
