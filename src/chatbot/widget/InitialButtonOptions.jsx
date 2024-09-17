const InitialButtonOptions = (props) => {
  const handleAccountLockedClick = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleAccountLocked(message);
  };
  const handlePasswordLockedClick = (message) => {
    props.actionProvider.handleResetPasswordDepth1(message);
  };

  return (
    <div>
      <button onClick={() => handleAccountLockedClick("My Account is Locked")}>
        My Account is Locked
      </button>
      <button onClick={() => handlePasswordLockedClick("Reset Password")}>
        Reset Password
      </button>
      <button title="NOT IMPLEMENTED" onClick={() => alert("NOT IMPLEMENTED")}>
        Not Receiving Emails from Zoom
      </button>
      <button title="NOT IMPLEMENTED" onClick={() => alert("NOT IMPLEMENTED")}>
        Zoom Account Does Not Exist
      </button>
    </div>
  );
};
export default InitialButtonOptions;
