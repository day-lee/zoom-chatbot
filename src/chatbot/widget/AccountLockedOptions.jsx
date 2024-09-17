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
    <div className="text-zoomchatblue ml-11 font-extrabold text-[14px]">
      <button
        className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
        onClick={() => handleError1003("Error 1003")}
      >
        Error 1003
      </button>
      <button
        className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
        onClick={() => handleAccountDisabled("Account is Disabled")}
      >
        Account is Disabled
      </button>
      <button
        className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
        onClick={() => handleAccountBlocked("Account is Blocked")}
      >
        Account is Blocked
      </button>
    </div>
  );
};

export default AccountLockedOptions;
