import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./BaseCard-C_VuKVYL.js";import{n as a,t as o}from"./Stack-D_d3SZwt.js";import{t as s}from"./Heading-CiSQlEyi.js";import{n as c,t as l}from"./SignOffStatusBadge-39MYNaPs.js";import{n as u,t as d}from"./Date-BfRC-G4a.js";import{n as f,t as p}from"./DataTable-CrqFwTVv.js";import{t as m}from"./passport-BN7maONT.js";import{t as h}from"./recordList-DhbiVGzX.js";import{f as g,v as _}from"./fixtures-DDuwM3Po.js";function v({records:e,onSelect:t,isLoading:n=!1}){return(0,y.jsx)(i,{"data-testid":`passport-record-table`,children:(0,y.jsxs)(o,{gap:`md`,children:[(0,y.jsx)(s,{children:`Records`}),(0,y.jsx)(p,{data:e,columns:b,getRowKey:e=>e.key,onRowClick:t,loading:n,pageSize:20,emptyMessage:`Nothing recorded yet`})]})})}var y,b;function x(){return(x=e((()=>{a(),r(),c(),f(),u(),t(),m(),y=n(),b=[{header:`Date`,render:e=>(0,y.jsx)(d,{date:e.on,format:`medium`}),accessor:e=>e.on},{header:`Type`,render:e=>h[e.kind],accessor:e=>h[e.kind]},{header:`Title`,render:e=>e.title,accessor:e=>e.title},{header:`Status`,render:e=>e.status?(0,y.jsx)(l,{status:e.status}):`-`}],v.__docgenInfo={description:``,methods:[],displayName:`PassportRecordTable`,props:{records:{required:!0,tsType:{name:`Array`,elements:[{name:`PassportRecord`}],raw:`PassportRecord[]`},description:`The records, newest first`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(record: PassportRecord) => void`,signature:{arguments:[{type:{name:`PassportRecord`},name:`record`}],return:{name:`void`}}},description:`Called when a record is chosen`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show the table's loading state`,defaultValue:{value:`false`,computed:!1}}}}})))()}var S,C,w,T,E,D,O;function k(){return(k=e((()=>{x(),g(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Passport/Passport record table`,tags:[`!dev`],component:v,parameters:{layout:`padded`}},w={args:{records:_,onSelect:S()}},T={args:{records:Array.from({length:3},(e,t)=>_.map(e=>({...e,key:`${e.key}:${t}`}))).flat(),onSelect:S()}},E={args:{records:[],onSelect:S()}},D={args:{records:[],isLoading:!0,onSelect:S()}},O=[`Default`,`ManyRecords`,`Empty`,`Loading`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    records: passportRecords,
    onSelect: fn()
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    records: Array.from({
      length: 3
    }, (_, round) => passportRecords.map(record => ({
      ...record,
      key: \`\${record.key}:\${round}\`
    }))).flat(),
    onSelect: fn()
  }
}`,...T.parameters?.docs?.source},description:{story:`A career's worth: more than a page, so the pagination shows.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    records: [],
    onSelect: fn()
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    records: [],
    isLoading: true,
    onSelect: fn()
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{w as Default,E as Empty,D as Loading,T as ManyRecords,O as __namedExportsOrder,C as default};