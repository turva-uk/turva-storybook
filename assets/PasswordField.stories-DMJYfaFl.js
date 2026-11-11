import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{b as t,y as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),i(),t(),c=r(),l={title:`Form/Password field`,component:n,parameters:{layout:`padded`}},u={args:{label:`Password`,placeholder:`Enter your password`}},d={args:{label:`Password`,description:`Must be at least 8 characters with one uppercase letter`,placeholder:`Enter your password`}},f={args:{label:`Password`,placeholder:`Enter your password`,required:!0}},p={args:{label:`Password`,value:`secret123`,disabled:!0}},m={args:{label:`Password`,value:`pass`,error:`Password must be at least 8 characters`}},h={...d,globals:{colorScheme:`dark`},render:e=>(0,c.jsxs)(s,{gap:`xl`,children:[(0,c.jsx)(a,{children:(0,c.jsx)(n,{...e,required:!0})}),(0,c.jsx)(n,{...e,required:!0}),(0,c.jsx)(a,{children:(0,c.jsx)(n,{label:`Password - disabled`,value:`secret123`,disabled:!0})}),(0,c.jsx)(a,{children:(0,c.jsx)(n,{label:`Password - error`,value:`pass`,error:`Password must be at least 8 characters`})})]})},g=[`Default`,`WithDescription`,`Required`,`Disabled`,`WithError`,`DarkMode`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter your password"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    description: "Must be at least 8 characters with one uppercase letter",
    placeholder: "Enter your password"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter your password",
    required: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    value: "secret123",
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    value: "pass",
    error: "Password must be at least 8 characters"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...WithDescription,
  globals: {
    colorScheme: "dark"
  },
  render: args => <Stack gap="xl">
      <BaseCard>
        <PasswordField {...args} required />
      </BaseCard>
      <PasswordField {...args} required />
      <BaseCard>
        <PasswordField label="Password - disabled" value="secret123" disabled />
      </BaseCard>
      <BaseCard>
        <PasswordField label="Password - error" value="pass" error="Password must be at least 8 characters" />
      </BaseCard>
    </Stack>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as DarkMode,u as Default,p as Disabled,f as Required,d as WithDescription,m as WithError,g as __namedExportsOrder,l as default};