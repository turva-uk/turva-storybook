import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./RegistrationForm-B7s7OBFf.js";async function r(e){let t=a(e),n=a(document.body);await i.type(t.getByLabelText(`Username *`),`testuser`),await i.type(t.getByLabelText(`Email *`),`test@example.com`),await i.click(t.getByPlaceholderText(`Select your organisation`)),await i.click(n.getByRole(`option`,{name:`NHS Highland`})),await i.type(t.getByLabelText(/^Password/),`SecurePass1!`),await i.type(t.getByLabelText(/Confirm password/),`SecurePass1!`),await new Promise(e=>setTimeout(e,100)),await i.click(t.getByTestId(`submit-button`))}var i,a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),{userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o=[{value:`nhs-highland`,label:`NHS Highland`},{value:`nhs-grampian`,label:`NHS Grampian`},{value:`nhs-lothian`,label:`NHS Lothian`},{value:`nhs-greater-glasgow`,label:`NHS Greater Glasgow and Clyde`},{value:`nhs-tayside`,label:`NHS Tayside`}],s={state:`error`,message:{title:`A user with that email address already exists`}},c={title:`Registration/Registration form`,component:n,parameters:{layout:`padded`},args:{organisations:o,onSubmit:()=>new Promise(()=>{})}},l={},u={args:{onSubmit:()=>new Promise(()=>{})},play:async({canvasElement:e})=>r(e)},d={args:{onSubmit:async()=>s},play:async({canvasElement:e})=>r(e)},f={args:{organisations:[]}},p={args:{guidePath:`/guides/join-a-course`}},m={args:{guidePath:`/guides/join-a-course`,siteName:`Addenbrooke's Hospital`,onBack:()=>{}}},h={...l,globals:{colorScheme:`dark`}},g=[`Default`,`Submitting`,`WithError`,`NoOrganisations`,`WithGuideLink`,`JoiningASite`,`DarkMode`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: () => new Promise(() => {})
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement)
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async () => errorResult
  },
  play: async ({
    canvasElement
  }) => fillAndSubmit(canvasElement)
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    organisations: []
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    guidePath: "/guides/join-a-course"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    guidePath: "/guides/join-a-course",
    siteName: "Addenbrooke's Hospital",
    onBack: () => {}
  }
}`,...m.parameters?.docs?.source},description:{story:`As the registration page draws it: the site named, and a way back.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as DarkMode,l as Default,m as JoiningASite,f as NoOrganisations,u as Submitting,d as WithError,p as WithGuideLink,g as __namedExportsOrder,c as default};