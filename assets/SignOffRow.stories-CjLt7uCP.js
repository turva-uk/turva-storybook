import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{A as t,E as n,f as r,l as i,w as a}from"./fixtures-DDuwM3Po.js";import{n as o,t as s}from"./SignOffRow-DnWf6hEV.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),r(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Passport/Sign-off row`,tags:[`!dev`],component:s,parameters:{layout:`padded`}},u={args:{signOff:t,onSelect:void 0}},d={args:{signOff:{...a,assessor_email:`a.okonkwo@nhs.net`,requested_level:{id:`supervised`,name:`Can perform under supervision`}},onSelect:void 0}},f={args:{signOff:{...t,requested_level:{id:`teach`,name:`Can teach others`}},onSelect:void 0}},p={args:{signOff:i,onSelect:void 0}},m={args:{signOff:t,onSelect:c()}},h={args:{signOff:n,onSelect:void 0}},g=[`SignedOff`,`Requested`,`SignedAtADifferentLevel`,`Declined`,`Selectable`,`WithAScope`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: signedOff,
    onSelect: undefined
  }
}`,...u.parameters?.docs?.source},description:{story:"Read-only stories set `onSelect: undefined` explicitly. `argTypesRegex`\nin `.storybook/preview.tsx` fills any unset `on*` prop with a spy, which\nwould render the row as a button.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: {
      ...requested,
      assessor_email: "a.okonkwo@nhs.net",
      requested_level: {
        id: "supervised",
        name: "Can perform under supervision"
      }
    },
    onSelect: undefined
  }
}`,...d.parameters?.docs?.source},description:{story:`Awaiting the assessor, so it says what was asked for and of whom.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: {
      ...signedOff,
      requested_level: {
        id: "teach",
        name: "Can teach others"
      }
    },
    onSelect: undefined
  }
}`,...f.parameters?.docs?.source},description:{story:`Signed at a different level from the one asked for.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: declined,
    onSelect: undefined
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: signedOff,
    onSelect: fn()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: requestedForLung,
    onSelect: undefined
  }
}`,...h.parameters?.docs?.source},description:{story:`A sign-off for one scope of a competency.`,...h.parameters?.docs?.description}}}})))()}_();export{p as Declined,d as Requested,m as Selectable,f as SignedAtADifferentLevel,u as SignedOff,h as WithAScope,g as __namedExportsOrder,l as default};