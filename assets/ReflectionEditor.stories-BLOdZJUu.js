import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{p as n,x as r}from"./Form-BQWpUpVW.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{t as l}from"./Heading-CiSQlEyi.js";import{n as u,t as d}from"./ButtonPair-C-HV7e6O.js";import{t as f}from"./CheckboxField-FbO59Hvh.js";import{t as p}from"./DateField-DawPXDse.js";import{t as m}from"./form-T0M4Wlbx.js";import{t as h}from"./TextAreaField-DDxRyQwA.js";import{a as g,n as _}from"./variants-US1Dcm7T.js";function v({onSubmit:e,onCancel:t,isSubmitting:r=!1,initial:i}){let[a,s]=(0,y.useState)(i?.title??``),[u,m]=(0,y.useState)(i?.written_on??null),[g,_]=(0,y.useState)(i?.body??``),[v,S]=(0,y.useState)(!1),C=a.trim().length>0&&u!==null&&g.trim().length>0&&v&&!r;function w(){C&&u!==null&&e({title:a.trim(),written_on:u,body:g.trim(),anonymised_confirmed:v})}return(0,b.jsx)(o,{"data-testid":`reflection-editor`,children:(0,b.jsxs)(c,{gap:`md`,children:[(0,b.jsx)(l,{children:i?`Edit this reflection`:`Write a reflection`}),(0,b.jsx)(n,{label:`Title`,description:`How you would find this again.`,value:a,onChange:e=>s(e.currentTarget.value),required:!0}),(0,b.jsx)(p,{label:`Written on`,value:u,onChange:m,maxDate:new Date,maxLevel:`year`,required:!0}),(0,b.jsx)(h,{label:`Your reflection`,description:`What happened, what you took from it, and what you would do differently.`,value:g,onChange:e=>_(e.currentTarget.value),autosize:!0,minRows:8,required:!0}),(0,b.jsx)(f,{label:`I confirm this reflection is anonymised`,description:x,checked:v,onChange:e=>S(e.currentTarget.checked),required:!0}),(0,b.jsx)(d,{acceptLabel:i?`Save changes`:`Save reflection`,acceptDisabled:!C,acceptLoading:r,onAccept:w,onCancel:t})]})})}var y,b,x;function S(){return(S=e((()=>{y=t(),s(),a(),m(),r(),u(),b=i(),x=`I confirm this reflection contains nothing that could identify a patient - no name, no date of birth, no NHS number, no hospital number, and no detail so unusual that it would single somebody out.`,v.__docgenInfo={description:``,methods:[],displayName:`ReflectionEditor`,props:{onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(data: ReflectionInput) => void`,signature:{arguments:[{type:{name:`ReflectionInput`},name:`data`}],return:{name:`void`}}},description:`Called with the completed reflection`},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the holder backs out`},isSubmitting:{required:!1,tsType:{name:`boolean`},description:`Disables submission while a request is in flight`,defaultValue:{value:`false`,computed:!1}},initial:{required:!1,tsType:{name:`Reflection`},description:`A reflection already written, to rewrite. The editor starts filled
in from it. The anonymisation tick does not: it is a declaration
about the words being saved, so it is made again for the new ones.`}}}})))()}var C,w,T,E,D,O,k;function A(){return(A=e((()=>{s(),S(),g(),C=i(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={title:`Passport/Reflection editor`,tags:[`!dev`],component:v,parameters:{layout:`padded`}},E={args:{onSubmit:w(),onCancel:w()}},D={args:{onSubmit:w(),onCancel:w(),isSubmitting:!0}},O={render:e=>(0,C.jsxs)(c,{gap:`sm`,children:[(0,C.jsx)(v,{...e}),(0,C.jsx)(_,{children:`The anonymisation declaration is firmer than the logbook’s passive note and must be ticked: a reflection is written about a real person, and the API refuses the write without it.`})]}),args:{onSubmit:w(),onCancel:w()}},k=[`Default`,`Submitting`,`Anonymised`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: fn(),
    onCancel: fn(),
    isSubmitting: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <ReflectionEditor {...args} />
      <StoryNote>
        The anonymisation declaration is firmer than the logbook&rsquo;s passive
        note and must be ticked: a reflection is written about a real person,
        and the API refuses the write without it.
      </StoryNote>
    </Stack>,
  args: {
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...O.parameters?.docs?.source},description:{story:`The anonymisation tick is required rather than suggested.`,...O.parameters?.docs?.description}}}})))()}A();export{O as Anonymised,E as Default,D as Submitting,k as __namedExportsOrder,T as default};