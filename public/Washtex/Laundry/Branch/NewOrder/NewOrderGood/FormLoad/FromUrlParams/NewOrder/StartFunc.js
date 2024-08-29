let StartFunc = () => {
    // jFLocalBranchName();
    jFLocalShowBranchName();
    jFLocalShowCustomerMobile();
    jFLocalShowCustomerName();
};

let jFLocalShowBranchName = () => {
    let jVarLocalHtmlId = "BranchNameId";
    let jVarLocalHtmlBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalHtmlBranchNameId.value = localStorage.getItem("BranchName");
};

let jFLocalShowCustomerMobile = () => {
    let jVarLocalHtmlId = "OrderInfoCustomerMobileId";

    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "CustomerMobile" });

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.value = jFLocalBranchName;
};

let jFLocalShowCustomerName = () => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";

    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "CustomerName" });

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.value = jFLocalBranchName;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }