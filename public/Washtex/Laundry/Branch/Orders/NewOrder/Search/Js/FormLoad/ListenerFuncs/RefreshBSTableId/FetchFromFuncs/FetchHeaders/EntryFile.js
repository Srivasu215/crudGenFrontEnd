import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalReferncePk = getUrlQueryParams({ inGetKey: "QrCodeId" });
    let jVarLocalBodyKeysJson = {};

    jVarLocalBodyKeysJson.FindKey = "e.QrCodeId"
    jVarLocalBodyKeysJson.FindValue = jVarLocalReferncePk;

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }