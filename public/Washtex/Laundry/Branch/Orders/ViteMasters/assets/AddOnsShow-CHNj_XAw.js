import"./style-CWPg30Uh.js";import"./EntryFile-BS4wfFeh.js";let l=async()=>{document.getElementById("RefreshBSTableId").click()};const n="binSecured",r={routePath:n};let s=async()=>{let t=jVarGlobalTableName,a=`/${r.routePath}/${t}/DataOnly`;return await await fetch(a)},c=t=>{let e=t;var a=$("#table");a.bootstrapTable("load",e)},d=async()=>{let t=await s();t.status===200&&c(await t.json())},i=()=>{let t=document.getElementById("RefreshBSTableId");t!==null&&t.addEventListener("click",d)},u=()=>{i()};const m={"data-toolbar":"#toolbar","data-search":"true","data-searchable":"true","data-id-field":"pk"},L={tableAttributes:m},f=()=>{var t=$("#table");t.attr(L.tableAttributes)},j=()=>{f(),I().then()},I=async()=>{var t=$("#table");t.bootstrapTable({data:[]})},b=()=>{j(),u()},y=()=>F("KSToken")!=="",F=t=>document.cookie.split("; ").reduce((e,a)=>a.startsWith(t+"=")?a.split("=")[1]:e,""),h=()=>{const t=document.getElementById("LoginModalId");t.addEventListener("shown.bs.modal",function(){document.getElementById("UsernameId").focus()}),new bootstrap.Modal(t,{focus:!0}).show()};let S=()=>!(V()===!1||g()===!1);const V=()=>{let t=document.getElementById("UsernameId");return t.value===""?(t.classList.add("is-invalid"),t.focus(),!1):(t.value!==""&&t.classList.remove("is-invalid"),!0)},g=()=>{let t=document.getElementById("PasswordId");return t.value===""?(t.classList.add("is-invalid"),t.focus(),!1):(t.value!==""&&t.classList.remove("is-invalid"),!0)},B="POST",v={Accept:"application/json","Content-Type":"application/json"},p="",o={method:B,headers:v,body:p};let w=()=>{let t={},e=document.getElementById("UsernameId").value,a=document.getElementById("PasswordId").value;return t.UserName=e,t.Password=a,t},E=()=>(o.body=JSON.stringify(w()),o),k=async()=>{let t=E();return await await fetch("/Login/bin/CreateToken/UsingJwt",t)},T=async({Status:t,inSuccessFunc:e})=>{let a=t;a.status===200&&(P(),e(),console.log("inSuccessFunc",e)),a.status===401&&A()},P=()=>{const t=document.getElementById("LoginModalId"),e=bootstrap.Modal.getInstance(t);e&&e.hide()},A=()=>{let t=document.getElementById("UsernameId"),e=document.getElementById("PasswordId");t.classList.add("is-invalid"),e.classList.add("is-invalid")},C=async({inSuccessFunc:t})=>{if(S()){let e=await k();T({Status:e,inSuccessFunc:t})}},M=({inSuccessFunc:t})=>{document.getElementById("LoginButtonId").addEventListener("click",async()=>{await C({inSuccessFunc:t})})},U=({inSuccessFunc:t})=>{M({inSuccessFunc:t})};const N=({inSuccessFunc:t})=>{if(y()===!0)return!0;h(),U({inSuccessFunc:t})},R=async()=>{b(),await N({inSuccessFunc:l})&&l().then()};R();
