import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./ErrorState-9MDqt4n6.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),r={title:`Error state/Error state`,component:n,parameters:{layout:`padded`}},i={args:{message:`Could not load the patient list.`}},a={args:{message:`Could not load the patient list.`,action:{label:`Try again`,onClick:()=>{}}}},o={args:{message:`Could not load the demographics.`,code:`demographics_fetch_failed`,action:{label:`Try again`,onClick:()=>{}}}},s={args:{title:`This letter could not be saved`,message:`Your text has not been lost. Try saving again in a moment.`,action:{label:`Try again`,onClick:()=>{}}}},c={args:{variant:`page`,message:`An unexpected error occurred. Please try reloading the page.`,action:{label:`Reload page`,onClick:()=>{}}}},l={args:{variant:`page`,message:`An unexpected error occurred. Please try reloading the page.`,action:{label:`Reload page`,onClick:()=>{}},secondaryAction:{label:`Tell us what happened`,icon:`feedback`,onClick:()=>{}}}},u={...o,globals:{colorScheme:`dark`}},d=[`Inline`,`InlineWithAction`,`InlineWithCode`,`CustomTitle`,`Page`,`PageWithSecondaryAction`,`DarkMode`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Could not load the patient list."
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Could not load the patient list.",
    action: {
      label: "Try again",
      onClick: () => {}
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Could not load the demographics.",
    code: "demographics_fetch_failed",
    action: {
      label: "Try again",
      onClick: () => {}
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "This letter could not be saved",
    message: "Your text has not been lost. Try saving again in a moment.",
    action: {
      label: "Try again",
      onClick: () => {}
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "page",
    message: "An unexpected error occurred. Please try reloading the page.",
    action: {
      label: "Reload page",
      onClick: () => {}
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "page",
    message: "An unexpected error occurred. Please try reloading the page.",
    action: {
      label: "Reload page",
      onClick: () => {}
    },
    secondaryAction: {
      label: "Tell us what happened",
      icon: "feedback",
      onClick: () => {}
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`A crash, with a way to report it as well as recover from it`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...InlineWithCode,
  globals: {
    colorScheme: "dark"
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{s as CustomTitle,u as DarkMode,i as Inline,a as InlineWithAction,o as InlineWithCode,c as Page,l as PageWithSecondaryAction,d as __namedExportsOrder,r as default};