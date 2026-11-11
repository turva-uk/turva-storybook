import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n}from"./Form-BQWpUpVW.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Confirm modal/Code confirm modal`,component:t,parameters:{layout:`padded`},args:{opened:!0,onClose:r(),onConfirm:r(),title:`Approve the safety case`,acceptLabel:`Approve`,submittingLabel:`Approving…`,children:`You are approving the file as it stands now, as its Clinical Safety Officer.`}},a={},o={args:{onConfirm:()=>Promise.reject(Error(`That code was not accepted`))}},s={globals:{colorScheme:`dark`}},c=[`Default`,`WrongCode`,`DarkMode`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source},description:{story:`Asking for the code before signing`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onConfirm: () => Promise.reject(new Error("That code was not accepted"))
  }
}`,...o.parameters?.docs?.source},description:{story:`A wrong code: the reason shows under the field, and it stays open`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    colorScheme: "dark"
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as DarkMode,a as Default,o as WrongCode,c as __namedExportsOrder,i as default};