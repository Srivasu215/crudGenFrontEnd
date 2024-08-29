import { StartFunc as StartFuncAddListeners } from "../../../../../AddListeners/StartFunc.js";

let StartFunc = ({ inDataToShow }) => {
    console.log("inDataToShow : ", inDataToShow);
   
    let LocalDataToShow = inDataToShow;

    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    // jFLocalHideSpinner();

    var $table = $('#table');
    console.log("table : ", table);
    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalDataToShow,
    });
    StartFuncAddListeners();
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }