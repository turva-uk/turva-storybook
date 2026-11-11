import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./ResetPasswordForm-BaVCqXyr.js";async function r(e){let t=a(e);await i.type(t.getByLabelText(`New password *`),`SecurePass123!`),await i.type(t.getByLabelText(`Confirm password *`),`SecurePass123!`),await i.click(t.getByTestId(`submit-button`))}var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),{userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o={state:`error`,message:{title:`Invalid or expired reset link`}},s={title:`Registration/Reset password form`,component:n,parameters:{layout:`padded`},args:{onSubmit:()=>new Promise(()=>{})}},c={},l={args:{onSubmit:()=>new Promise(()=>{})},play:async({canvasElement:e})=>r(e)},u={args:{onSubmit:async()=>o},play:async({canvasElement:e})=>r(e)},d={args:{isInvite:!0}},f={args:{isConfirming:!0}},p={...c,globals:{colorScheme:`dark`}},m=[`Default`,`Submitting`,`WithError`,`FromAnInvite`,`ConfirmingTheAddress`,`DarkMode`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: () => new Promise(() => {})
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement)
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async () => errorResult
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement)
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isInvite: true
  }
}`,...d.parameters?.docs?.source},description:{story:`Setting a first password from an invite. The account was made for this
person, so the marketing question a registration form would have asked
is asked here, unticked, and the legal notice is shown above the button.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isConfirming: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Setting a password from a forgot password link, for somebody whose
email address was not confirmed yet. The same link confirms it, so the
page says "Set your password".`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as ConfirmingTheAddress,p as DarkMode,c as Default,d as FromAnInvite,l as Submitting,u as WithError,m as __namedExportsOrder,s as default};