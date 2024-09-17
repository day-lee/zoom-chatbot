const ResetPasswordDepth2Options = (props) => {
  const handleYes = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
  };

  return (
    <div>
      <button onClick={() => handleYes("Yes")}>Yes</button>
      <button title="NOT IMPLEMENTED" onClick={() => alert("NOT IMPLEMENTED")}>
        No
      </button>
      <button title="NOT IMPLEMENTED" onClick={() => alert("NOT IMPLEMENTED")}>
        Go back to previous menu
      </button>
    </div>
  );
};

export default ResetPasswordDepth2Options;
