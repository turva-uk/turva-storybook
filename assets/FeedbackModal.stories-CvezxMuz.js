import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./FeedbackModal-BATGmxgi.js";var r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),{expect:r,userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o=e=>new Promise(t=>setTimeout(t,e)),s={title:`Feedback/Feedback modal`,component:n,parameters:{layout:`fullscreen`},args:{opened:!0,onClose:()=>{},onSubmit:async()=>{await o(800)}}},c={},l={play:async()=>{let e=a(document.body);await i.type(e.getByRole(`textbox`,{name:/message/i}),`The captions on slide 3 are a sentence behind the video.`),await i.click(e.getByTestId(`submit-button`)),await r(await e.findByText(`Feedback sent`)).toBeInTheDocument()}},u={args:{onSubmit:async()=>{throw await o(500),Error(`HTTP 500`)}},play:async()=>{let e=a(document.body);await i.type(e.getByRole(`textbox`,{name:/message/i}),`The dose in case 4 looks wrong.`),await i.click(e.getByTestId(`submit-button`)),await r(await e.findByText(`Your feedback was not sent`)).toBeInTheDocument()}},d={...c,globals:{colorScheme:`dark`}},f=[`Default`,`Sent`,`WithError`,`DarkMode`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`The empty form`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async () => {
    // The modal renders in a portal, so query from document.body
    const body = within(document.body);
    await userEvent.type(body.getByRole("textbox", {
      name: /message/i
    }), "The captions on slide 3 are a sentence behind the video.");
    await userEvent.click(body.getByTestId("submit-button"));
    await expect(await body.findByText("Feedback sent")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source},description:{story:`Sent - the confirmation replaces the form`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async () => {
      await delay(500);
      throw new Error("HTTP 500");
    }
  },
  play: async () => {
    const body = within(document.body);
    await userEvent.type(body.getByRole("textbox", {
      name: /message/i
    }), "The dose in case 4 looks wrong.");
    await userEvent.click(body.getByTestId("submit-button"));
    await expect(await body.findByText("Your feedback was not sent")).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source},description:{story:`The send failed - the message stays so it can be tried again`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as DarkMode,c as Default,l as Sent,u as WithError,f as __namedExportsOrder,s as default};