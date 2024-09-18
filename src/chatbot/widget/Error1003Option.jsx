const appealsLink = "https://zoom.us/appeals";

const Error1003Option = (props) => {
  const appealClickHandle = (message) => {
    window.open(appealsLink, "_blank", "noreferrer");
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleRequestAppeal(message);
  };

  return (
    <div className="text-zoomchatblue ml-12 font-extrabold text-[14px]">
      <button
        className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
        onClick={() => appealClickHandle("Request an Appeal")}
      >
        Request an Appeal
      </button>
    </div>
  );
};

export default Error1003Option;
