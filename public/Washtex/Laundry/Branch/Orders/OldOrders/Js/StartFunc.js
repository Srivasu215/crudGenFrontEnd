// import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncShowToDom } from "./ShowToDom/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        await StartFuncFormLoad();

        StartFuncShowToDom();
    };
};

StartFunc().then();