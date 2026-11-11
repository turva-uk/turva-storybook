import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./BaseCard-C_VuKVYL.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{n as o,t as s}from"./EmailField-Dl8PWmM7.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),n(),o(),c=t(),l={title:`Form/Email field`,component:s,parameters:{layout:`padded`}},u={args:{label:`Email address`,placeholder:`name@example.com`}},d={args:{label:`Email address`,description:`We will send a confirmation link to this address`,placeholder:`name@example.com`}},f={args:{label:`Email address`,placeholder:`name@example.com`,required:!0}},p={args:{label:`Email address`,value:`imogen.fenwick@example.com`,disabled:!0}},m={args:{label:`Email address`,value:`imogen@@example.com`,error:`Please enter a valid email address`}},h={...d,globals:{colorScheme:`dark`},render:e=>(0,c.jsxs)(a,{gap:`xl`,children:[(0,c.jsx)(r,{children:(0,c.jsx)(s,{...e,required:!0})}),(0,c.jsx)(s,{...e,required:!0}),(0,c.jsx)(r,{children:(0,c.jsx)(s,{label:`Email address - disabled`,value:`imogen.fenwick@example.com`,disabled:!0})}),(0,c.jsx)(r,{children:(0,c.jsx)(s,{...e,value:`imogen@@example.com`,error:`Please enter a valid email address`})})]})},g=[`Default`,`WithDescription`,`Required`,`Disabled`,`WithError`,`DarkMode`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "name@example.com"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    description: "We will send a confirmation link to this address",
    placeholder: "name@example.com"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "name@example.com",
    required: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    value: "imogen.fenwick@example.com",
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
        <EmailField {...args} required />
      </BaseCard>
      <EmailField {...args} required />
      <BaseCard>
        <EmailField label="Email address - disabled" value="imogen.fenwick@example.com" disabled />
      </BaseCard>
      <BaseCard>
        <EmailField {...args} value="imogen@@example.com" error="Please enter a valid email address" />
      </BaseCard>
    </Stack>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as DarkMode,u as Default,p as Disabled,f as Required,d as WithDescription,m as WithError,g as __namedExportsOrder,l as default};