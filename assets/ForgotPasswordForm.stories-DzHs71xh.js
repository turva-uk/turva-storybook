import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./ForgotPasswordForm-DmpkrkKo.js";async function r(e){let t=a(e);await i.type(t.getByLabelText(`Email *`),`user@example.com`),await i.click(t.getByTestId(`submit-button`))}var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),{userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o={state:`success`,message:{title:`Check your inbox`,description:`If an account with that email exists, we've sent a reset link. Please check your inbox.`}},s={state:`error`,message:{title:`Something went wrong`,description:`Please try again.`}},c={title:`Registration/Forgot password form`,component:n,parameters:{layout:`padded`},args:{onSubmit:()=>new Promise(()=>{})}},l={},u={args:{onSubmit:async()=>s},play:async({canvasElement:e})=>r(e)},d={args:{onSubmit:async()=>o},play:async({canvasElement:e})=>r(e)},f={args:{onSubmit:()=>new Promise(()=>{})},play:async({canvasElement:e})=>r(e)},p={...l,globals:{colorScheme:`dark`}},m=[`Default`,`WithError`,`WithSuccess`,`Submitting`,`DarkMode`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async () => errorResult
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement)
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async () => successResult
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement)
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: () => new Promise(() => {})
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as DarkMode,l as Default,f as Submitting,u as WithError,d as WithSuccess,m as __namedExportsOrder,c as default};