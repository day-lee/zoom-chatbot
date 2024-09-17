const AccountBlockedOption = (props) => {
  const resetPasswordHandle = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleBlockedAccount(message);
  };

  return (
    <div>
      <button onClick={resetPasswordHandle("Reset Password")}>
        Reset Password
      </button>
    </div>
  );
};

export default AccountBlockedOption;
