import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./BaseCard-C_VuKVYL.js";import{n as a,t as o}from"./Stack-D_d3SZwt.js";import{Y as s,_ as c,n as l}from"./appIcons-BpiHpu4d.js";import{t as u}from"./Heading-CiSQlEyi.js";import{n as d,t as f}from"./Date-BfRC-G4a.js";import{n as p,t as m}from"./EllipsisMenu-hBkojH2-.js";import{n as h,t as g}from"./DataTable-CrqFwTVv.js";import{a as _,n as v,r as y,t as b}from"./passport-BN7maONT.js";import{f as x,n as S}from"./fixtures-DDuwM3Po.js";function C({periods:e,onEdit:t,onRemove:n,isLoading:r=!1}){let a=[{header:`From`,render:e=>(0,w.jsx)(f,{date:e.starts_on,format:`medium`}),accessor:e=>e.starts_on},{header:`To`,render:e=>(0,w.jsx)(f,{date:e.ends_on,format:`medium`}),accessor:e=>e.ends_on},{header:`Length`,render:e=>v(e)}];return t&&n&&a.push({header:``,render:e=>(0,w.jsx)(m,{"aria-label":`Actions for the date range from ${y(e.starts_on)}`,items:[{label:`Edit`,icon:(0,w.jsx)(s,{}),onClick:()=>t(e)},{label:`Remove`,icon:(0,w.jsx)(c,{}),color:`var(--alert-color)`,onClick:()=>n(e)}]})}),(0,w.jsx)(i,{"data-testid":`appraisal-period-table`,children:(0,w.jsxs)(o,{gap:`md`,children:[(0,w.jsx)(u,{children:`Date ranges`}),(0,w.jsx)(g,{data:_(e),columns:a,getRowKey:e=>`${e.starts_on}-${e.ends_on}`,loading:r,emptyMessage:`No date ranges added`})]})})}var w;function T(){return(T=e((()=>{a(),r(),h(),p(),d(),t(),l(),b(),w=n(),C.__docgenInfo={description:``,methods:[],displayName:`AppraisalPeriodTable`,props:{periods:{required:!0,tsType:{name:`Array`,elements:[{name:`AppraisalPeriod`}],raw:`AppraisalPeriod[]`},description:`The ranges, in any order`},onEdit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(period: AppraisalPeriod) => void`,signature:{arguments:[{type:{name:`AppraisalPeriod`},name:`period`}],return:{name:`void`}}},description:`Called when the holder chooses to correct a range`},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(period: AppraisalPeriod) => void`,signature:{arguments:[{type:{name:`AppraisalPeriod`},name:`period`}],return:{name:`void`}}},description:`Called when the holder chooses to remove a range`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show the table's loading state`,defaultValue:{value:`false`,computed:!1}}}}})))()}var E,D,O,k,A,j,M;function N(){return(N=e((()=>{T(),x(),{fn:E}=__STORYBOOK_MODULE_TEST__,D={title:`Passport/Appraisal period table`,tags:[`!dev`],component:C,parameters:{layout:`padded`}},O={args:{periods:S,onEdit:E(),onRemove:E()}},k={args:{periods:S,onEdit:void 0,onRemove:void 0}},A={args:{periods:[],onEdit:E(),onRemove:E()}},j={args:{periods:[],isLoading:!0,onEdit:E(),onRemove:E()}},M=[`Default`,`ReadOnly`,`Empty`,`Loading`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    periods: appraisalPeriods,
    onEdit: fn(),
    onRemove: fn()
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    periods: appraisalPeriods,
    onEdit: undefined,
    onRemove: undefined
  }
}`,...k.parameters?.docs?.source},description:{story:`A read-only passport: the ranges, with nothing to press.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    periods: [],
    onEdit: fn(),
    onRemove: fn()
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    periods: [],
    isLoading: true,
    onEdit: fn(),
    onRemove: fn()
  }
}`,...j.parameters?.docs?.source}}}})))()}N();export{O as Default,A as Empty,j as Loading,k as ReadOnly,M as __namedExportsOrder,D as default};