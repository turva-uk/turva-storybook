import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./SafetyDocumentSheet-DEknQ0ZH.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r=`# Clinical Safety Case Report

## 1. System

**BP@Home remote blood pressure monitoring**, deployed by Riverbank Health
Federation.

## 2. Clinical Safety Officer

|                           |                                  |
| ------------------------- | -------------------------------- |
| Name                      | Dr Anita Patel                   |
| Professional registration | GMC 7654321                      |
| Contact                   | a.patel@riverbank.example.nhs.uk |

## 5. Residual risk

Six hazards were identified. Four have been reduced to a derived residual
risk level of 2.
`,i={title:`Safety/Safety document sheet`,component:n,parameters:{layout:`padded`}},a={args:{system:`BP@Home remote blood pressure monitoring`,status:`draft`,commit:`a`.repeat(40),text:r}},o={args:{...a.args,status:`accepted`}},s={...a,globals:{colorScheme:`dark`}},c=[`Draft`,`Accepted`,`DarkMode`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    system: "BP@Home remote blood pressure monitoring",
    status: "draft",
    commit: "a".repeat(40),
    text: TEXT
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Draft.args,
    status: "accepted"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Draft,
  globals: {
    colorScheme: "dark"
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Accepted,s as DarkMode,a as Draft,c as __namedExportsOrder,i as default};