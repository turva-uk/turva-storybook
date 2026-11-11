import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./MediaDropzone-CriDO-nk.js";import{x as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";import{Cn as c,Tn as l,n as u}from"./appIcons-BpiHpu4d.js";import{t as d}from"./BodyText-Vl4rxmG1.js";import{t as f}from"./Heading-CiSQlEyi.js";import{t as p}from"./ButtonPair-C-HV7e6O.js";import{t as m}from"./StateMessage-BtkL8y7a.js";import{t as h}from"./ResultMessage-_al_-JbK.js";import{t as g}from"./message-cards-Dy98AG8B.js";import{t as _}from"./button-YyAqM_ZF.js";import{t as v}from"./media-dropzone-B9Gopwke.js";function y(e){return e===1?`1 person`:`${e} people`}function b(e,t){let n=t>e.length?` and more`:``;return e.length===1?`row ${e[0]}${n}`:`rows ${e.slice(0,-1).join(`, `)} and ${e[e.length-1]}${n}`}function x(e){let t=[];return e.no_address>0&&t.push(`No usable email address: ${b(e.no_address_rows,e.no_address)}.`),e.unreadable_answer>0&&t.push(`Opt in or out could not be read: ${b(e.unreadable_answer_rows,e.unreadable_answer)}.`),t.join(` `)}function S({summary:e}){let t=e.no_address+e.unreadable_answer;return(0,w.jsxs)(s,{gap:`xs`,children:[(0,w.jsxs)(d,{children:[e.imported?`Added`:`New to the mailing list`,`:`,` `,y(e.new),`.`]}),(0,w.jsxs)(d,{children:[`Already on it and left as they are: `,y(e.already_there),`.`]}),e.switched_off>0&&(0,w.jsxs)(d,{children:[`On it now, and unsubscribed by this file:`,` `,y(e.switched_off),`.`]}),(0,w.jsxs)(d,{children:[`Opted in: `,e.opted_in,`. Opted out: `,e.opted_out,`.`]}),e.have_accounts>0&&(0,w.jsxs)(d,{children:[y(e.have_accounts),` already`,` `,e.have_accounts===1?`has`:`have`,` a Quill account, and`,` `,e.have_accounts===1?`is`:`are`,` kept as that account and not on the mailing list.`]}),e.repeated>0&&(0,w.jsxs)(d,{children:[e.repeated,` `,e.repeated===1?`row names`:`rows name`,` an address an earlier row had. Each address is one person, and opted out wins.`]}),t>0&&(0,w.jsx)(m,{icon:(0,w.jsx)(c,{}),title:`${t} ${t===1?`row was`:`rows were`} left out`,colour:`warning`,description:x(e)})]})}function C({stage:e,summary:n,fileName:r,error:i,onFile:o,onReject:u,onImport:g,onStartAgain:_}){return(0,w.jsx)(a,{children:(0,w.jsxs)(s,{children:[(0,w.jsx)(f,{children:`Import a mailing list`}),(0,w.jsx)(d,{children:`Drop a CSV file with a column headed Email. A Name column and an Opt in column are read if they are there. Excel saves a spreadsheet as one with Save As, then CSV UTF-8.`}),(0,w.jsx)(d,{children:`Dropping a file only checks it. Nothing is added until you press import, and the file itself is never kept.`}),i&&(0,w.jsx)(m,{icon:(0,w.jsx)(l,{}),title:`That did not work`,description:i,colour:`alert`}),(e===`idle`||e===`checking`)&&(0,w.jsx)(t,{onDrop:o,onReject:u,disabled:e===`checking`||e===`importing`,accept:T,label:e===`checking`?`Checking the file…`:`Drop a CSV file`}),n&&(e===`checked`||e===`importing`)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{children:r?`What ${r} would do`:`What this file would do`}),!n.has_opt_column&&(0,w.jsx)(m,{icon:(0,w.jsx)(c,{}),title:`This file has no opt in column`,description:`Everybody in it is taken as opted in. If some of them have unsubscribed, add an Opt in column saying yes or no for each.`,colour:`warning`}),(0,w.jsx)(S,{summary:n}),(0,w.jsx)(p,{acceptLabel:`Import ${y(n.new)}`,cancelLabel:`Choose another file`,onAccept:g,onCancel:_,acceptLoading:e===`importing`})]}),n&&e===`imported`&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h,{variant:`success`,title:`Mailing list imported`}),(0,w.jsx)(S,{summary:n}),(0,w.jsx)(p,{acceptLabel:`Import another file`,onAccept:_})]})]})})}var w,T;function E(){return(E=e((()=>{o(),i(),_(),u(),g(),v(),n(),w=r(),T=[`text/csv`,`application/vnd.ms-excel`,`text/plain`],C.__docgenInfo={description:``,methods:[],displayName:`MailingListImport`,props:{stage:{required:!0,tsType:{name:`union`,raw:`"idle" | "checking" | "checked" | "importing" | "imported"`,elements:[{name:`literal`,value:`"idle"`},{name:`literal`,value:`"checking"`},{name:`literal`,value:`"checked"`},{name:`literal`,value:`"importing"`},{name:`literal`,value:`"imported"`}]},description:`Where the import has got to`},summary:{required:!1,tsType:{name:`MailingListSummary`},description:`What the file would do, once checked, or did, once imported`},fileName:{required:!1,tsType:{name:`string`},description:`The name of the file that was dropped`},error:{required:!1,tsType:{name:`string`},description:`Why the last check or import did not work`},onFile:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(file: File) => void`,signature:{arguments:[{type:{name:`File`},name:`file`}],return:{name:`void`}}},description:`Called with a file when one is dropped`},onReject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when a refused file is dropped, most often not a CSV`},onImport:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called to import the file that was checked`},onStartAgain:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called to put the file aside and start again`}}}})))()}var D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{E(),D={rows:876,new:870,already_there:4,switched_off:0,opted_in:874,opted_out:0,have_accounts:3,no_address:0,unreadable_answer:0,repeated:2,has_opt_column:!0,no_address_rows:[],unreadable_answer_rows:[],fingerprint:`0`.repeat(64),imported:!1},O={title:`Newsletter/Mailing list import`,component:C,parameters:{layout:`padded`},args:{stage:`idle`,onFile:()=>{},onReject:()=>{},onImport:()=>{},onStartAgain:()=>{}}},k={},A={args:{stage:`checked`,summary:D,fileName:`subscribers.csv`}},j={args:{stage:`checked`,summary:{...D,has_opt_column:!1},fileName:`subscribers.csv`}},M={args:{stage:`checked`,fileName:`subscribers.csv`,summary:{...D,new:865,opted_out:12,switched_off:5,no_address:3,unreadable_answer:2,no_address_rows:[14,201,640],unreadable_answer_rows:[77,78]}}},N={args:{error:`No column is headed "Email". The first row must name the columns.`}},P={args:{stage:`imported`,summary:{...D,imported:!0}}},F={args:{stage:`checking`}},I={args:{stage:`importing`,summary:D,fileName:`subscribers.csv`}},L={...A,globals:{colorScheme:`dark`}},R=[`Waiting`,`Checked`,`NoOptInColumn`,`RowsLeftOut`,`Refused`,`Imported`,`Checking`,`Importing`,`DarkMode`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source},description:{story:`Before a file is dropped.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    stage: "checked",
    summary,
    fileName: "subscribers.csv"
  }
}`,...A.parameters?.docs?.source},description:{story:`A file has been checked, and nothing has been added yet.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    stage: "checked",
    summary: {
      ...summary,
      has_opt_column: false
    },
    fileName: "subscribers.csv"
  }
}`,...j.parameters?.docs?.source},description:{story:`The file does not say who is opted in, so everybody is taken as in.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    stage: "checked",
    fileName: "subscribers.csv",
    summary: {
      ...summary,
      new: 865,
      opted_out: 12,
      switched_off: 5,
      no_address: 3,
      unreadable_answer: 2,
      no_address_rows: [14, 201, 640],
      unreadable_answer_rows: [77, 78]
    }
  }
}`,...M.parameters?.docs?.source},description:{story:`Some rows could not be read, and are named by number.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'No column is headed "Email". The first row must name the columns.'
  }
}`,...N.parameters?.docs?.source},description:{story:`The file was not a mailing list.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    stage: "imported",
    summary: {
      ...summary,
      imported: true
    }
  }
}`,...P.parameters?.docs?.source},description:{story:`After the import.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    stage: "checking"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    stage: "importing",
    summary,
    fileName: "subscribers.csv"
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...Checked,
  globals: {
    colorScheme: "dark"
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{A as Checked,F as Checking,L as DarkMode,P as Imported,I as Importing,j as NoOptInColumn,N as Refused,M as RowsLeftOut,k as Waiting,R as __namedExportsOrder,O as default};