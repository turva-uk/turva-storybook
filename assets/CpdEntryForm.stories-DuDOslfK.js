import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{p as n,x as r}from"./Form-BQWpUpVW.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{t as l}from"./Heading-CiSQlEyi.js";import{n as u,t as d}from"./ButtonPair-C-HV7e6O.js";import{t as f}from"./SelectField-CfDE1WBv.js";import{t as p}from"./DateField-DawPXDse.js";import{t as m}from"./form-T0M4Wlbx.js";import{t as h}from"./TextAreaField-DDxRyQwA.js";import{a as g,n as _}from"./variants-US1Dcm7T.js";function v({onSubmit:e,onCancel:t,isSubmitting:r=!1,initial:i}){let[a,s]=(0,y.useState)(i?.activity_on??null),[u,m]=(0,y.useState)(i?.title??``),[g,_]=(0,y.useState)(i?.activity_type??null),[v,S]=(0,y.useState)(i?.points==null?``:String(i.points)),[C,w]=(0,y.useState)(i?.notes??``),T=a!==null&&u.trim().length>0&&g!==null&&!r;function E(){if(!T||a===null||g===null)return;let t=Number.parseFloat(v);e({activity_on:a,title:u.trim(),activity_type:g,points:Number.isFinite(t)?t:null,notes:C.trim()||null})}return(0,b.jsx)(o,{"data-testid":`cpd-entry-form`,children:(0,b.jsxs)(c,{gap:`md`,children:[(0,b.jsx)(l,{children:i?`Edit this CPD activity`:`Record a CPD activity`}),(0,b.jsx)(p,{label:`Date`,description:`The day it happened. This decides the appraisal year it is filed under.`,value:a,onChange:s,maxDate:new Date,maxLevel:`year`,required:!0}),(0,b.jsx)(n,{label:`What was it?`,description:`How you would describe it to an appraiser.`,value:u,onChange:e=>m(e.currentTarget.value),required:!0}),(0,b.jsx)(f,{label:`Type`,placeholder:`Choose one`,data:x,value:g,onChange:e=>_(e),required:!0}),(0,b.jsx)(n,{label:`Points`,description:`One point is one hour. Optional - not every activity is claimed.`,type:`number`,min:0,step:.5,value:v,onChange:e=>S(e.currentTarget.value)}),(0,b.jsx)(h,{label:`Notes`,description:`Optional. Write about the activity, not about a patient.`,value:C,onChange:e=>w(e.currentTarget.value),autosize:!0,minRows:2}),(0,b.jsx)(d,{acceptLabel:i?`Save changes`:`Record activity`,acceptDisabled:!T,acceptLoading:r,onAccept:E,onCancel:t})]})})}var y,b,x;function S(){return(S=e((()=>{y=t(),s(),a(),m(),r(),u(),b=i(),x=[{value:`conference`,label:`Conference`},{value:`grand round`,label:`Grand round`},{value:`teaching day`,label:`Teaching day`},{value:`course`,label:`Course`},{value:`other`,label:`Other`}],v.__docgenInfo={description:``,methods:[],displayName:`CpdEntryForm`,props:{onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(data: CpdEntryInput) => void`,signature:{arguments:[{type:{name:`CpdEntryInput`},name:`data`}],return:{name:`void`}}},description:`Called with the completed activity`},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the holder backs out`},isSubmitting:{required:!1,tsType:{name:`boolean`},description:`Disables submission while a request is in flight`,defaultValue:{value:`false`,computed:!1}},initial:{required:!1,tsType:{name:`CpdEntry`},description:`An activity to correct. The form starts filled in from it, and says
so in its heading and button; without it the form records a new one.`}}}})))()}var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{s(),S(),g(),C=i(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={title:`Passport/CPD entry form`,tags:[`!dev`],component:v,parameters:{layout:`padded`}},E={args:{onSubmit:w(),onCancel:w()}},D={args:{initial:{filename:`2026-09-28-062503`,year:2026,activity_on:`2026-09-12`,title:`Advanced life support`,activity_type:`course`,points:6,competencies:[],certificate:null,notes:`Recertification.`,attachments:[]},onSubmit:w(),onCancel:w()}},O={args:{onSubmit:w(),onCancel:w(),isSubmitting:!0}},k={render:e=>(0,C.jsxs)(c,{gap:`sm`,children:[(0,C.jsx)(v,{...e}),(0,C.jsx)(_,{children:`A form records one activity. What a period adds up to belongs to the table, which states the appraisal range it covers - a running total here would pre-empt that. One point is one hour, and points are optional because not every activity is claimed.`})]}),args:{onSubmit:w(),onCancel:w()}},A=[`Default`,`Editing`,`Submitting`,`PointsAreNotTotalled`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      filename: "2026-09-28-062503",
      year: 2026,
      activity_on: "2026-09-12",
      title: "Advanced life support",
      activity_type: "course",
      points: 6,
      competencies: [],
      certificate: null,
      notes: "Recertification.",
      attachments: []
    },
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...D.parameters?.docs?.source},description:{story:`Correcting an activity: filled in from it, saving rather than recording.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: fn(),
    onCancel: fn(),
    isSubmitting: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <CpdEntryForm {...args} />
      <StoryNote>
        A form records one activity. What a period adds up to belongs to the
        table, which states the appraisal range it covers - a running total here
        would pre-empt that. One point is one hour, and points are optional
        because not every activity is claimed.
      </StoryNote>
    </Stack>,
  args: {
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...k.parameters?.docs?.source},description:{story:`Points are recorded but never totalled on the form.`,...k.parameters?.docs?.description}}}})))()}j();export{E as Default,D as Editing,k as PointsAreNotTotalled,O as Submitting,A as __namedExportsOrder,T as default};