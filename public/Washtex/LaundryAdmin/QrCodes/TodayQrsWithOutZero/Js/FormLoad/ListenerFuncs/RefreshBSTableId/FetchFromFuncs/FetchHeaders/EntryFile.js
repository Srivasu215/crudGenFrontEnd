import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys.FindKey = "inRow.BookingData.OrderData.BranchName";

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

export { StartFunc }