import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Messaging-C-CKVL3X.js";import{n as a,t as o}from"./demoMessages-lbUYFAs1.js";function s(){let[e,t]=(0,c.useState)(o);return(0,l.jsx)(i,{messages:e,currentUserId:`me`,onSend:e=>t(t=>[...t,{id:String(t.length+1),senderId:`me`,text:e,timestamp:new Date().toISOString()}])})}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{a(),c=t(),r(),l=n(),u={title:`Messaging/Messaging`,component:i,parameters:{layout:`fullscreen`},decorators:[e=>(0,l.jsx)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:(0,l.jsx)(e,{})})]},d={render:()=>(0,l.jsx)(s,{})},f={render:()=>(0,l.jsx)(i,{messages:[],currentUserId:`me`,isLoading:!0})},p={...d,globals:{colorScheme:`dark`}},m=[`Default`,`Loading`,`DarkMode`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper />
}`,...d.parameters?.docs?.source},description:{story:`Default messaging view with demo conversation.
Shows a thread of messages with send functionality.
Type a message and click send to add it to the conversation.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Messaging messages={[]} currentUserId="me" isLoading={true} />
}`,...f.parameters?.docs?.source},description:{story:`Loading state while fetching messages.
Shows skeleton loaders where messages would appear.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as DarkMode,d as Default,f as Loading,m as __namedExportsOrder,u as default};