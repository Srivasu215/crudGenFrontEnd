import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let [a, b] = await Promise.all([StartFuncFetchFuncs(), StartFuncGetFetch()]);

        let jVarLocalQrCode = a;
        let jVarLocalScanedQrCode = b;
        StartFuncAfterFetch({ inQrCodeData: jVarLocalQrCode, ScanedQrCodeData: jVarLocalScanedQrCode });
    };

export { StartFunc }