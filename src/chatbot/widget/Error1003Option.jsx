const appealsLink = "https://zoom.us/appeals";

const Error1003Option = (props) => {
  const appealClickHandle = (message) => {
    window.open(appealsLink, "_blank", "noreferrer");
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleRequestAppeal(message);
  };

  return (
    <div>
      <button onClick={() => appealClickHandle("Request an Appeal")}>
        Request an Appeal
      </button>
    </div>
  );
};

export default Error1003Option;
