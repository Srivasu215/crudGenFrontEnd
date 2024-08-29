let StartFunc = ({ inDataToShow, inQrCodeData }) => {
    jFLocalHideSpinner();
    let LocalinDataToShow = inDataToShow;
    var $table = $('#table');
    let jVarLocalTransformedData = jFLocalInsertAggValues({ inData: LocalinDataToShow });
    let jVarWithQrCodeData = jFLocalInsertQrCodeData({ inData: jVarLocalTransformedData, inQrCodeData: inQrCodeData });
    let LocalArrayReverseData = jVarWithQrCodeData.slice().reverse();

    $table.bootstrapTable("load", LocalArrayReverseData);
};
let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = Object.entries(inData).map(element => {
        element[1].AggValues = {};
        element[1].AggValues.ItemDetails = `${Object.keys(element[1].ItemsInOrder).length} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + parseInt(val), 0)}`;

        element[1].AggValues.SettlementAmount = ""
        if (Object.values(element[1].CheckOutData)[0]) {
            element[1].AggValues.SettlementAmount = Object.values(element[1].CheckOutData)[0].CardAmount + Object.values(element[1].CheckOutData)[0].CashAmount + Object.values(element[1].CheckOutData)[0].UPIAmount;
            element[1].IsSettled = false;
        };
        if (Object.keys(element[1].CheckOutData).length > 0) {
            element[1].IsSettled = true;
        };

        return element[1];
    });

    return jVarLocalReturnObject;
};

let jFLocalInsertQrCodeData = ({ inData, inQrCodeData }) => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalReturnArray = [];
    inData.forEach(element => {
        element.IsQrCodesRaised = false;
        element.TotalItems = 0;
        let FilterCheck = inQrCodeData.filter(ele => ele.OrderNumber == element.pk && ele.BookingData.OrderData.BranchName == jVarLocalBranchName);
        if (FilterCheck.length > 0) {
            element.TotalItems = FilterCheck.length
            element.IsQrCodesRaised = true;
        };
        jVarLocalReturnArray.push(element)
    });

    return jVarLocalReturnArray;
};

export { StartFunc }