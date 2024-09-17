const disabledAccountLink =
  "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0066997#h_16319724-d120-4be6-af5d-31582d134ea0";

const AccountDisabledOption = (props) => {
  const appealClickHandle = (message) => {
    window.open(disabledAccountLink, "_blank", "noreferrer");
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleReactivateAccount(message);
  };

  return (
    <div>
      <button onClick={() => appealClickHandle("Reactivate Account")}>
        Reactivate Account
      </button>
    </div>
  );
};

export default AccountDisabledOption;
