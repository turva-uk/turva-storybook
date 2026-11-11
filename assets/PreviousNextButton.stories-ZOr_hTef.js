import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{a as i,n as a}from"./variants-US1Dcm7T.js";import{n as o,t as s}from"./PreviousNextButton-CEju2iCy.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),o(),i(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Teaching/Previous next button`,tags:[`!dev`],component:s,parameters:{layout:`padded`},args:{onPrevious:l(),onNext:l()}},d={},f={args:{onPrevious:void 0}},p={args:{nextLabel:`Submit & finish`}},m={args:{nextDisabled:!0}},h={args:{nextLoading:!0}},g={render:e=>(0,c.jsxs)(r,{gap:`md`,children:[(0,c.jsx)(a,{children:`Shown on the last question when a user is reviewing their answers after the exam has been submitted. The "Finish" label replaces "Submit & finish".`}),(0,c.jsx)(s,{...e})]}),args:{nextLabel:`Finish`}},_={...d,globals:{colorScheme:`dark`}},v=[`Default`,`FirstStep`,`LastStep`,`NextDisabled`,`NextLoading`,`ReviewFinish`,`DarkMode`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source},description:{story:`Default with both buttons`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onPrevious: undefined
  }
}`,...f.parameters?.docs?.source},description:{story:`First step - no Previous button`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    nextLabel: "Submit & finish"
  }
}`,...p.parameters?.docs?.source},description:{story:`Last step with custom label`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    nextDisabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Forward button disabled`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    nextLoading: true
  }
}`,...h.parameters?.docs?.source},description:{story:`Forward button loading`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="md">
      <StoryNote>
        Shown on the last question when a user is reviewing their answers after
        the exam has been submitted. The "Finish" label replaces "Submit &
        finish".
      </StoryNote>
      <PreviousNextButton {...args} />
    </Stack>,
  args: {
    nextLabel: "Finish"
  }
}`,...g.parameters?.docs?.source},description:{story:`Finish button shown when reviewing results on the last question (disabled mode)`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as DarkMode,d as Default,f as FirstStep,p as LastStep,m as NextDisabled,h as NextLoading,g as ReviewFinish,v as __namedExportsOrder,u as default};