let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    let jVarLocalVoucherRef = getUrlQueryParams({ inGetKey: "VoucherRef" });
    let jVarLocalFactoryName = localStorage.getItem("FactoryName");

    if (jVarLocalVoucherRef === '' || jVarLocalVoucherRef === null) swal.fire({ title: "No VoucherRef in Params", icon: "error" })
    let LocalVoucherFilterData = jVarLocalDataToShow.filter(e => e.VoucherRef == jVarLocalVoucherRef && e.DCFactory == jVarLocalFactoryName);
    if (LocalVoucherFilterData.length === 0 || jVarLocalVoucherRef === null) swal.fire({ title: "No Data", icon: "error" })

    jFLocalHideSpinner();

    var $table = $('#table');
    $table.bootstrapTable("load", LocalVoucherFilterData);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc }