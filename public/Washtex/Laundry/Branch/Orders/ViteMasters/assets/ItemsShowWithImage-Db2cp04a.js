import"./style-CWPg30Uh.js";import"./EntryFile-BS4wfFeh.js";let s=async()=>{document.getElementById("RefreshBSTableId").click()},i=async()=>{let a=`/bin/${jVarGlobalTableName}/DataOnly`;return await await fetch(a)},b=t=>{let a=t;var e=$("#table");e.bootstrapTable("load",a)},d=async()=>{let t=await i();t.status===200&&b(await t.json())},u=()=>{let t=document.getElementById("RefreshBSTableId");t!==null&&t.addEventListener("click",d)},m=()=>{u()};const S={"data-toolbar":"#toolbar","data-search":"true","data-searchable":"true","data-id-field":"pk"},h={tableAttributes:S},j=()=>{var t=$("#table");t.attr(h.tableAttributes)};let o=async({inRowPk:t})=>{let a=t,e=`/bin/${jVarGlobalTableName}/SingleImage/${a}`,l=await fetch(e);if(console.log(l),l.status===200){const n=await l.blob(),c=URL.createObjectURL(n),r=document.getElementById("ShowImageId");r.src=c,new bootstrap.Modal("#ShowImageModal",{keyboard:!1}).show()}else swal({title:"No data"})};const f=async(t,a,e)=>{e==="KS-ImageUploadButton"&&("id"in t&&o({inRowPk:t.id}),"pk"in t&&o({inRowPk:t.pk}))},F=()=>{j(),I().then()},I=async()=>{var t=$("#table");t.bootstrapTable({data:[],onClickRow:f})},L=()=>{F(),m()},g=()=>{L(),s().then()};g();
