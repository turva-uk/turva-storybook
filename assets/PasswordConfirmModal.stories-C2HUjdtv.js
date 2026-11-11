import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,v as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{Cn as i,n as a}from"./appIcons-BpiHpu4d.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{a(),n(),o=r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Confirm modal/Password confirm modal`,component:t,parameters:{layout:`padded`},args:{opened:!0,onClose:s(),onConfirm:s(),title:`Turn off two-factor authentication`,acceptLabel:`Turn off`,submittingLabel:`Turning off…`,children:`Signing in will ask for your password only. Enter your password to turn it off.`}},l={args:{icon:(0,o.jsx)(i,{})}},u={args:{icon:(0,o.jsx)(i,{}),onConfirm:()=>Promise.reject(Error(`Incorrect password`))}},d={args:{title:`Confirm it is you`,acceptLabel:`Continue`,destructive:!1,children:`Enter your password to continue.`}},f=[`Default`,`WrongPassword`,`NotDestructive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconAlertTriangle />
  }
}`,...l.parameters?.docs?.source},description:{story:`Asking for the password before turning two-factor off`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconAlertTriangle />,
    onConfirm: () => Promise.reject(new Error("Incorrect password"))
  }
}`,...u.parameters?.docs?.source},description:{story:`A wrong password: the reason shows under the field, and it stays open`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Confirm it is you",
    acceptLabel: "Continue",
    destructive: false,
    children: "Enter your password to continue."
  }
}`,...d.parameters?.docs?.source},description:{story:`Without an icon, for a change that is not a warning`,...d.parameters?.docs?.description}}}})))()}p();export{l as Default,d as NotDestructive,u as WrongPassword,f as __namedExportsOrder,c as default};