import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{m as t,p as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),i(),t(),c=r(),l={title:`Form/Text field`,component:n,parameters:{layout:`padded`}},u={args:{label:`Subject`,placeholder:`e.g. Prescription renewal`}},d={args:{label:`Email address`,description:`Receives certificate copies when students pass`,placeholder:`coordinator@example.com`}},f={args:{label:`Full name`,placeholder:`Enter your full name`,required:!0}},p={args:{label:`Username`,value:`imogen.fenwick`,disabled:!0}},m={args:{label:`Email address`,value:`imogen@@example.com`,error:`Please enter a valid email address`}},h={...d,globals:{colorScheme:`dark`},render:e=>(0,c.jsxs)(s,{gap:`xl`,children:[(0,c.jsx)(a,{children:(0,c.jsx)(n,{...e,required:!0})}),(0,c.jsx)(n,{...e,required:!0}),(0,c.jsx)(a,{children:(0,c.jsx)(n,{label:`Email address - disabled`,value:`imogen@example.com`,disabled:!0})}),(0,c.jsx)(a,{children:(0,c.jsx)(n,{label:`Email address - error`,value:`imogen@@example.com`,error:`Please enter a valid email address`})})]})},g=[`Default`,`WithDescription`,`Required`,`Disabled`,`WithError`,`DarkMode`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Subject",
    placeholder: "e.g. Prescription renewal"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    description: "Receives certificate copies when students pass",
    placeholder: "coordinator@example.com"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full name",
    placeholder: "Enter your full name",
    required: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    value: "imogen.fenwick",
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    value: "imogen@@example.com",
    error: "Please enter a valid email address"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...WithDescription,
  globals: {
    colorScheme: "dark"
  },
  render: args => <Stack gap="xl">
      <BaseCard>
        <TextField {...args} required />
      </BaseCard>
      <TextField {...args} required />
      <BaseCard>
        <TextField label="Email address - disabled" value="imogen@example.com" disabled />
      </BaseCard>
      <BaseCard>
        <TextField label="Email address - error" value="imogen@@example.com" error="Please enter a valid email address" />
      </BaseCard>
    </Stack>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as DarkMode,u as Default,p as Disabled,f as Required,d as WithDescription,m as WithError,g as __namedExportsOrder,l as default};