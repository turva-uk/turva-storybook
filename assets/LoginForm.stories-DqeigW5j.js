import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./LoginForm-Ck5Tj9G1.js";async function r(e,{totp:t}={}){let n=a(e);await i.type(n.getByLabelText(`Username *`),`testuser`),await i.type(n.getByLabelText(`Password *`),`password123`),t&&await i.type(n.getByLabelText(`Authenticator code *`),`123456`),await i.click(n.getByTestId(`submit-button`))}var i,a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),{userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o=e=>({state:`error`,message:{title:e}}),s={title:`Registration/Login form`,component:n,parameters:{layout:`padded`},args:{onSubmit:()=>new Promise(()=>{})}},c={},l={args:{onSubmit:async()=>o(`Invalid username or password`)},play:async({canvasElement:e})=>r(e)},u={args:{requireTotp:!0}},d={args:{requireTotp:!0,onSubmit:async()=>o(`Wrong code entered, please try entering your 6-digit authenticator code again`)},play:async({canvasElement:e})=>r(e,{totp:!0})},f={args:{onSubmit:()=>new Promise(()=>{})},play:async({canvasElement:e})=>r(e)},p={args:{registerPath:null}},m={args:{guidePath:`/guides/join-a-course`}},h={...c,globals:{colorScheme:`dark`}},g=[`Default`,`WithError`,`RequireTotp`,`TotpInvalidCode`,`Submitting`,`NoRegisterLink`,`WithGuideLink`,`DarkMode`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async () => errorResult("Invalid username or password")
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement)
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    requireTotp: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    requireTotp: true,
    onSubmit: async () => errorResult("Wrong code entered, please try entering your 6-digit authenticator code again")
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement, {
    totp: true
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: () => new Promise(() => {})
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    registerPath: null
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    guidePath: "/guides/join-a-course"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as DarkMode,c as Default,p as NoRegisterLink,u as RequireTotp,f as Submitting,d as TotpInvalidCode,l as WithError,m as WithGuideLink,g as __namedExportsOrder,s as default};