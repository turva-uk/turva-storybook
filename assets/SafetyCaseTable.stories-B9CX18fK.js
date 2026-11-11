import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Date-BfRC-G4a.js";import{n as i}from"./DataTable-CrqFwTVv.js";import{n as a,t as o}from"./DataTableControlled-DHBUj558.js";import{f as s,u as c}from"./safetyFile-BP682nbe.js";import{n as l,t as u}from"./SafetyStatusBadge-BwOmkKXb.js";function d({action:e,cases:t,onSelect:n}){return(0,f.jsx)(o,{action:e,searchFields:e=>[e.name,e.org_unit_name,e.standard],data:[...t],columns:p,getRowKey:e=>e.id,onRowClick:n,emptyMessage:`No safety files yet`})}var f,p;function m(){return(m=e((()=>{i(),a(),n(),l(),f=t(),p=[{header:`Safety file`,render:e=>e.name,accessor:e=>e.name},{header:`Organisation`,render:e=>e.org_unit_name,accessor:e=>e.org_unit_name},{header:`Standard`,render:e=>e.standard,accessor:e=>e.standard},{header:`Visibility`,render:e=>e.visibility===`public`?`Public`:`Private`,accessor:e=>e.visibility},{header:`Status`,render:e=>(0,f.jsx)(u,{status:e.status}),accessor:e=>e.status},{header:`Created`,render:e=>(0,f.jsx)(r,{date:e.created_at,format:`medium`}),accessor:e=>e.created_at}],d.__docgenInfo={description:``,methods:[],displayName:`SafetyCaseTable`,props:{action:{required:!1,tsType:{name:`ReactNode`},description:"The table\\'s own action, such as an add icon, shown in the row with\nsearch and filter. See `DataTableControlled`."},cases:{required:!0,tsType:{name:`unknown`},description:`The cases, in the order to show them`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(file: SafetyFileSummary) => void`,signature:{arguments:[{type:{name:`SafetyFileSummary`},name:`file`}],return:{name:`void`}}},description:`Called when a case is chosen`}}}})))()}var h,g,_,v,y,b;function x(){return(x=e((()=>{m(),s(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Safety/Safety case table`,component:d,parameters:{layout:`padded`}},_={args:{cases:c,onSelect:h()}},v={args:{cases:[],onSelect:h()}},y={..._,globals:{colorScheme:`dark`}},b=[`Default`,`Empty`,`DarkMode`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    cases: SAMPLE_SUMMARIES,
    onSelect: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    cases: [],
    onSelect: fn()
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as DarkMode,_ as Default,v as Empty,b as __namedExportsOrder,g as default};