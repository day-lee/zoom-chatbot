const AccountLockedOptions = (props) => {
  const handleError1003 = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleError1003(message);
  };

  const handleAccountDisabled = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleAccountDisabled(message);
  };

  const handleAccountBlocked = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleAccountBlocked(message);
  };

  return (
    <div>
      <button onClick={() => handleError1003("Error 1003")}>Error 1003</button>
      <button onClick={() => handleAccountDisabled("Account is Disabled")}>
        Account is Disabled
      </button>
      <button onClick={() => handleAccountBlocked("Account is Blocked")}>
        Account is Blocked
      </button>
    </div>
  );
};

export default AccountLockedOptions;
