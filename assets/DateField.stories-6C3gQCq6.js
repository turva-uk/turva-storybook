import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{n as i,t as a}from"./DateField-DawPXDse.js";import{a as o,n as s}from"./variants-US1Dcm7T.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),o(),c=t(),l={title:`Form/Date field`,component:a,parameters:{layout:`padded`}},u={args:{label:`Observed on`}},d={args:{label:`Observed on`,defaultValue:`2026-03-12`}},f={args:{label:`Performed on`,description:`The day the procedure happened, not the day you logged it`}},p={args:{label:`Observed on`,required:!0}},m={render:()=>(0,c.jsxs)(r,{gap:`sm`,children:[(0,c.jsx)(a,{label:`Performed on`,maxDate:new Date,description:`Future dates cannot be chosen`}),(0,c.jsx)(s,{children:"A logbook entry records something that already happened, so the form that uses this passes `maxDate`. The field itself imposes no such rule - a certificate expiry is legitimately in the future."})]})},h={args:{label:`Observed on`,error:`Enter the date you observed this`}},g={args:{label:`Expires on`,defaultValue:`2027-03-14`,clearable:!0}},_={args:{label:`Signed on`,defaultValue:`2026-03-14`,disabled:!0}},v=[`Default`,`WithValue`,`WithDescription`,`Required`,`NoFutureDates`,`WithError`,`Clearable`,`Disabled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Observed on"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Observed on",
    defaultValue: "2026-03-12"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Performed on",
    description: "The day the procedure happened, not the day you logged it"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Observed on",
    required: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="sm">
      <DateField label="Performed on" maxDate={new Date()} description="Future dates cannot be chosen" />
      <StoryNote>
        A logbook entry records something that already happened, so the form
        that uses this passes \`maxDate\`. The field itself imposes no such rule -
        a certificate expiry is legitimately in the future.
      </StoryNote>
    </Stack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Observed on",
    error: "Enter the date you observed this"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Expires on",
    defaultValue: "2027-03-14",
    clearable: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Signed on",
    defaultValue: "2026-03-14",
    disabled: true
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as Clearable,u as Default,_ as Disabled,m as NoFutureDates,p as Required,f as WithDescription,h as WithError,d as WithValue,v as __namedExportsOrder,l as default};