let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Factory/QrCodeDetails/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };