const BlockedResetPasswordOption = (props) => {
  const clickHandle = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleResetPassword(message);
  };

  return (
    <div>
      <button onClick={() => clickHandle("Reset Password")}>
        Reset Password
      </button>
    </div>
  );
};

export default BlockedResetPasswordOption;
