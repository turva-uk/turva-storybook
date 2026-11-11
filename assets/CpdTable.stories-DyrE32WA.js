import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Group-DSt3d3i4.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{t as l}from"./BodyText-Vl4rxmG1.js";import{t as u}from"./Heading-CiSQlEyi.js";import{t as d}from"./BodyTextBold-CxqNt9uz.js";import{a as f,n as p}from"./variants-US1Dcm7T.js";import{n as m,t as h}from"./Date-BfRC-G4a.js";import{n as g,t as _}from"./DataTable-CrqFwTVv.js";import{O as v,f as y,s as b,t as x}from"./fixtures-DDuwM3Po.js";function S({entries:e,period:t,convention:n=!1,onSelect:r,isLoading:a=!1}){let s=e.reduce((e,t)=>e+(t.points??0),0),f=[...e].sort((e,t)=>e.activity_on.localeCompare(t.activity_on));return(0,C.jsx)(o,{"data-testid":`cpd-table`,children:(0,C.jsxs)(c,{gap:`md`,children:[(0,C.jsx)(u,{children:`Continuing professional development`}),t?(0,C.jsxs)(l,{c:`dimmed`,children:[(0,C.jsx)(h,{date:t.starts_on,format:`medium`}),` to`,` `,(0,C.jsx)(h,{date:t.ends_on,format:`medium`}),n&&`. You have not set any CPD date ranges, so this runs June to June by convention rather than on your actual appraisal year.`]}):(0,C.jsx)(l,{c:`dimmed`,children:`Activities that fall in none of your CPD date ranges.`}),(0,C.jsxs)(i,{gap:`xs`,children:[(0,C.jsxs)(d,{children:[s,` `,s===1?`point`:`points`]}),(0,C.jsxs)(l,{c:`dimmed`,children:[`across `,e.length,` `,e.length===1?`activity`:`activities`]})]}),(0,C.jsx)(_,{data:f,columns:w,getRowKey:e=>e.filename,onRowClick:r?e=>r(e):void 0,loading:a,emptyMessage:`Nothing recorded for this period`})]})})}var C,w;function T(){return(T=e((()=>{r(),s(),a(),g(),m(),t(),C=n(),w=[{header:`Date`,render:e=>(0,C.jsx)(h,{date:e.activity_on,format:`medium`}),accessor:e=>e.activity_on},{header:`Activity`,render:e=>e.title,accessor:e=>e.title},{header:`Type`,render:e=>e.activity_type,accessor:e=>e.activity_type},{header:`Points`,render:e=>e.points===null?`-`:e.points,accessor:e=>e.points}],S.__docgenInfo={description:``,methods:[],displayName:`CpdTable`,props:{entries:{required:!0,tsType:{name:`Array`,elements:[{name:`CpdEntry`}],raw:`CpdEntry[]`},description:`The period's activities`},period:{required:!1,tsType:{name:`AppraisalPeriod`},description:`The range these fall in: one of the holder's declared
\`appraisal_periods\`, or a June to June year. Omitted for the
activities outside every declared range.`},convention:{required:!1,tsType:{name:`boolean`},description:"True when `period` is a June to June year, not one they declared",defaultValue:{value:`false`,computed:!1}},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(entry: CpdEntry) => void`,signature:{arguments:[{type:{name:`CpdEntry`},name:`entry`}],return:{name:`void`}}},description:`Called when an activity is chosen`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show the table's loading state`,defaultValue:{value:`false`,computed:!1}}}}})))()}var E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{s(),T(),y(),f(),E=n(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Passport/CPD table`,tags:[`!dev`],component:S,parameters:{layout:`padded`}},k={args:{entries:b,period:x,onSelect:D()}},A={render:e=>(0,E.jsxs)(c,{gap:`sm`,children:[(0,E.jsx)(S,{...e}),(0,E.jsx)(p,{children:"The same points across four months rather than twelve. Without the range stated, this would read as a poor year; with it, it reads as somebody who moved post and had their appraisal brought forward. That is why `appraisal_periods` is a history and not one current month."})]}),args:{entries:b,period:v}},j={args:{entries:b,period:{starts_on:`2025-06-01`,ends_on:`2026-05-31`},convention:!0}},M={args:{entries:b}},N={args:{entries:[],period:x}},P={args:{entries:[],period:x,isLoading:!0}},F=[`Default`,`AShortPeriodExplainsItself`,`NoPeriodDeclared`,`OutsideEveryRange`,`Empty`,`Loading`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    entries: cpdEntries,
    period: appraisalPeriod,
    onSelect: fn()
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <CpdTable {...args} />
      <StoryNote>
        The same points across four months rather than twelve. Without the range
        stated, this would read as a poor year; with it, it reads as somebody
        who moved post and had their appraisal brought forward. That is why
        \`appraisal_periods\` is a history and not one current month.
      </StoryNote>
    </Stack>,
  args: {
    entries: cpdEntries,
    period: shortAppraisalPeriod
  }
}`,...A.parameters?.docs?.source},description:{story:`The reason periods are a list rather than a single setting.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    entries: cpdEntries,
    period: {
      starts_on: "2025-06-01",
      ends_on: "2026-05-31"
    },
    convention: true
  }
}`,...j.parameters?.docs?.source},description:{story:`No period declared, so the fallback convention is named as one.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    entries: cpdEntries
  }
}`,...M.parameters?.docs?.source},description:{story:`The activities that fall in none of the holder's date ranges.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    entries: [],
    period: appraisalPeriod
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    entries: [],
    period: appraisalPeriod,
    isLoading: true
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{A as AShortPeriodExplainsItself,k as Default,N as Empty,P as Loading,j as NoPeriodDeclared,M as OutsideEveryRange,F as __namedExportsOrder,O as default};