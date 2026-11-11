import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{x as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";import{t as c}from"./Heading-CiSQlEyi.js";import{n as l,t as u}from"./ButtonPair-C-HV7e6O.js";import{t as d}from"./ErrorMessage-CAYmr-1H.js";import{t as f}from"./DateField-DawPXDse.js";import{t as p}from"./form-T0M4Wlbx.js";function m({onSubmit:e,onCancel:t,isSubmitting:n=!1,initial:r,error:i}){let[o,l]=(0,h.useState)(r?.starts_on??null),[p,m]=(0,h.useState)(r?.ends_on??null),_=o!==null&&p!==null&&p<o,v=o!==null&&p!==null&&!_&&!n;function y(){v&&o!==null&&p!==null&&e({starts_on:o,ends_on:p})}return(0,g.jsx)(a,{"data-testid":`appraisal-period-form`,children:(0,g.jsxs)(s,{gap:`md`,children:[(0,g.jsx)(c,{children:r?`Edit this date range`:`Add a date range`}),(0,g.jsx)(f,{label:`From`,description:`The first day of your appraisal year.`,value:o,onChange:l,maxLevel:`year`,required:!0}),(0,g.jsx)(f,{label:`To`,description:`The last day it covers.`,value:p,onChange:m,minDate:o??void 0,maxLevel:`year`,error:_?`A date range cannot end before it starts.`:void 0,required:!0}),i&&(0,g.jsx)(d,{children:i}),(0,g.jsx)(u,{acceptLabel:r?`Save changes`:`Add date range`,acceptDisabled:!v,acceptLoading:n,onAccept:y,onCancel:t})]})})}var h,g;function _(){return(_=e((()=>{h=t(),o(),i(),p(),n(),l(),g=r(),m.__docgenInfo={description:``,methods:[],displayName:`AppraisalPeriodForm`,props:{onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(period: AppraisalPeriod) => void`,signature:{arguments:[{type:{name:`AppraisalPeriod`},name:`period`}],return:{name:`void`}}},description:`Called with the completed range`},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the holder backs out`},isSubmitting:{required:!1,tsType:{name:`boolean`},description:`Disables submission while a request is in flight`,defaultValue:{value:`false`,computed:!1}},initial:{required:!1,tsType:{name:`AppraisalPeriod`},description:`A range to correct. The form starts filled in from it, and says so
in its heading and button; without it the form adds a new one.`},error:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`Why the server refused the last attempt, such as an overlap`}}}})))()}var v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{_(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Passport/Appraisal period form`,tags:[`!dev`],component:m,parameters:{layout:`padded`}},b={args:{onSubmit:v(),onCancel:v()}},x={args:{initial:{starts_on:`2025-10-01`,ends_on:`2026-09-30`},onSubmit:v(),onCancel:v()}},S={args:{initial:{starts_on:`2026-10-01`,ends_on:`2026-09-30`},onSubmit:v(),onCancel:v()}},C={args:{initial:{starts_on:`2026-06-01`,ends_on:`2027-05-31`},error:`The date range starting 2026-06-01 overlaps the one starting 2025-10-01. Each CPD activity can only count towards one range.`,onSubmit:v(),onCancel:v()}},w={args:{initial:{starts_on:`2025-10-01`,ends_on:`2026-09-30`},isSubmitting:!0,onSubmit:v(),onCancel:v()}},T=[`Default`,`Editing`,`EndsBeforeItStarts`,`OverlapRefused`,`Submitting`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      starts_on: "2025-10-01",
      ends_on: "2026-09-30"
    },
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...x.parameters?.docs?.source},description:{story:`Correcting a range: filled in from it, saving rather than adding.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      starts_on: "2026-10-01",
      ends_on: "2026-09-30"
    },
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...S.parameters?.docs?.source},description:{story:`Refused before sending: the button stays disabled.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      starts_on: "2026-06-01",
      ends_on: "2027-05-31"
    },
    error: "The date range starting 2026-06-01 overlaps the one starting 2025-10-01. Each CPD activity can only count towards one range.",
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...C.parameters?.docs?.source},description:{story:`Refused by the server, which alone sees the other ranges.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      starts_on: "2025-10-01",
      ends_on: "2026-09-30"
    },
    isSubmitting: true,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{b as Default,x as Editing,S as EndsBeforeItStarts,C as OverlapRefused,w as Submitting,T as __namedExportsOrder,y as default};