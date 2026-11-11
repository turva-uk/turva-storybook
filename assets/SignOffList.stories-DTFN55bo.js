import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{A as t,f as n,k as r,l as i}from"./fixtures-DDuwM3Po.js";import{n as a,t as o}from"./SignOffList-Dkwf9yE6.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{a(),n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Passport/Sign-off list`,tags:[`!dev`],component:o,parameters:{layout:`padded`}},l={args:{title:`Sign-offs`,signOffs:r,onSelect:s()}},u={args:{title:`Perform bronchoscopy`,signOffs:[t,i],onSelect:s()}},d={args:{title:`Sign-offs`,signOffs:r,onSelect:void 0}},f={args:{title:`Sign-offs`,signOffs:[],isLoading:!0}},p=[`Default`,`OneCompetencyTwice`,`ReadOnly`,`Loading`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Sign-offs",
    signOffs,
    onSelect: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Perform bronchoscopy",
    signOffs: [signedOff, declined],
    onSelect: fn()
  }
}`,...u.parameters?.docs?.source},description:{story:`One competency declined and then signed off: two rows, where the
competency list would show one.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Sign-offs",
    signOffs,
    onSelect: undefined
  }
}`,...d.parameters?.docs?.source},description:{story:`Read-only: rows are plain blocks with no hover.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Sign-offs",
    signOffs: [],
    isLoading: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Placeholder rows, while the sign-offs are being fetched.`,...f.parameters?.docs?.description}}}})))()}m();export{l as Default,f as Loading,u as OneCompetencyTwice,d as ReadOnly,p as __namedExportsOrder,c as default};