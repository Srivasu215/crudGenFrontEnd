import"./style-CWPg30Uh.js";import"./EntryFile-BS4wfFeh.js";let l=async()=>{document.getElementById("RefreshBSTableId").click()},r=async()=>{let a=`/bin/${jVarGlobalTableName}/DataOnly`;return await await fetch(a)},c=t=>{let a=t;var e=$("#table");e.bootstrapTable("load",a)},n=async()=>{let t=await r();t.status===200&&c(await t.json())},o=()=>{let t=document.getElementById("RefreshBSTableId");t!==null&&t.addEventListener("click",n)},s=()=>{o()};const b={"data-toolbar":"#toolbar","data-search":"true","data-searchable":"true","data-id-field":"pk"},d={tableAttributes:b},i=()=>{var t=$("#table");t.attr(d.tableAttributes)},u=()=>{i(),S().then()},S=async()=>{var t=$("#table");t.bootstrapTable({data:[]})},j=()=>{u(),s()},h=()=>{j(),l().then()};h();
