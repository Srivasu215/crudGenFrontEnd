import { StartFunc as StartFuncAfterFetch } from "./FetchFuncs/AfterFetch/EntryFile.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncVoucherDetails(), StartFuncItemDetails()]);

    if (a.KTF && b.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalItemsData = b.JsonData;
        // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
        let jVarLocalBranchName = localStorage.getItem("BranchName");


        let LocalBranchFilterData = jVarLocalDcData.filter(e => e.BranchName == jVarLocalBranchName)
        let LocalReversedBranchData = LocalBranchFilterData.slice().reverse();
        let LocalScanedFilterData = jVarLocalItemsData.filter(e => e.BranchName == jVarLocalBranchName)
        let LocalReverseScannedData = LocalScanedFilterData.slice().reverse();

        let jVarLocalData = jFLocalItemsData({
            inDcData: LocalReversedBranchData,
            inItemsData: LocalReverseScannedData,

        });

        StartFuncAfterFetch({ inDataToShow: jVarLocalData });
    };
};

let jFLocalItemsData = ({ inDcData, inItemsData }) => {
    let jVarLocalDcData = inDcData;
    let jVarLocalItemsData = inItemsData;

    let localArrayObj = jVarLocalDcData;

    let jVarLocalReturnArray = localArrayObj.map((element) => {

        let LocalFilterdata = jVarLocalItemsData.filter(e => e.VoucherRef == element.pk)

        element.ItemDetails = jVarLocalItemsData.length > 0 ? LocalFilterdata.length : 0;

        return element;
    });

    return jVarLocalReturnArray;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc }