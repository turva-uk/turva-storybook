import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./MarkdownEditor-CMSu1CRN.js";var r,i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i=`## 5. Residual risk

Six hazards were identified. Four have been reduced to a derived residual
risk level of 2. Two remain at level 3:

- **HAZ-003**, inaccurate readings from an unsuitable monitor
- **HAZ-004**, patients unable to use the service
`,a={title:`Forms/Markdown editor`,component:n,parameters:{layout:`padded`},args:{label:`Residual risk statement`,value:i,onChange:r()}},o={},s={args:{value:``}},c={args:{readOnly:!0}},l=`## 6. Conclusion and sign-off

<!-- This section is completed by the Clinical Safety Officer at approval. -->

|                           |                |
| ------------------------- | -------------- |
| Clinical Safety Officer   | Dr Anita Patel |
| Professional registration | GMC 7654321    |
`,u={args:{label:`Clinical safety case report`,value:l}},d={args:{label:`Clinical safety case report`,value:Array.from({length:12},()=>i).join(`
`)+l}},f={globals:{colorScheme:`dark`}},p={...u,globals:{colorScheme:`dark`}},m=[`Default`,`Empty`,`ReadOnly`,`TableAndNote`,`LongDocument`,`DarkMode`,`TableAndNoteDarkMode`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: ""
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Clinical safety case report",
    value: SIGN_OFF
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Clinical safety case report",
    value: Array.from({
      length: 12
    }, () => TEXT).join("\\n") + SIGN_OFF
  }
}`,...d.parameters?.docs?.source},description:{story:`A document longer than the screen: scroll down, and the toolbar stays
at the top while the editor is in view.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  globals: {
    colorScheme: "dark"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...TableAndNote,
  globals: {
    colorScheme: "dark"
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as DarkMode,o as Default,s as Empty,d as LongDocument,c as ReadOnly,u as TableAndNote,p as TableAndNoteDarkMode,m as __namedExportsOrder,a as default};