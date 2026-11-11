import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./MessagesList-B6elsW-S.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r={title:`Messaging/Messages list`,component:n},i=[{id:`1`,displayName:`Sarah Johnson`,profiles:[{givenName:`Sarah`,familyName:`Johnson`,gradientIndex:0}],lastMessage:`Thank you for the letter, I've received it and will review with my GP.`,lastMessageTime:new Date(Date.now()-72e5).toISOString(),unreadCount:2},{id:`2`,displayName:`Dr Fenwick, Imogen Fenwick`,profiles:[{givenName:`Rowan`,familyName:`Fenwick`,gradientIndex:5},{givenName:`Imogen`,familyName:`Fenwick`,gradientIndex:12}],lastMessage:`I've reviewed your case notes and endoscopy findings. Everything looks good.`,lastMessageTime:new Date(Date.now()-18e6).toISOString(),unreadCount:0},{id:`3`,displayName:`Emily Wilson`,profiles:[{givenName:`Emily`,familyName:`Wilson`,gradientIndex:6}],lastMessage:`Could you send me a copy of my recent consultation notes?`,lastMessageTime:new Date(Date.now()-864e5).toISOString(),unreadCount:1},{id:`4`,displayName:`Dr Patel`,profiles:[{givenName:`Raj`,familyName:`Patel`,gradientIndex:9}],lastMessage:`Your referral to the gastroenterology clinic has been processed.`,lastMessageTime:new Date(Date.now()-2592e5).toISOString(),unreadCount:0},{id:`5`,displayName:`Pharmacy, Dr Fenwick`,profiles:[{givenName:`Pharmacy`},{givenName:`Rowan`,familyName:`Fenwick`,gradientIndex:5}],lastMessage:`Your repeat prescription has been sent to your nominated pharmacy.`,lastMessageTime:new Date(Date.now()-6048e5).toISOString(),unreadCount:0}],a={args:{threads:i,onThreadClick:e=>{console.log(`Clicked thread:`,e)}}},o={args:{threads:[],isLoading:!0,onThreadClick:e=>{console.log(`Clicked thread:`,e)}}},s={args:{threads:[],onThreadClick:e=>{console.log(`Clicked thread:`,e)}}},c={...a,globals:{colorScheme:`dark`}},l=[`Default`,`Loading`,`Empty`,`DarkMode`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    threads: mockThreads,
    onThreadClick: thread => {
      console.log("Clicked thread:", thread);
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    threads: [],
    isLoading: true,
    onThreadClick: thread => {
      console.log("Clicked thread:", thread);
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    threads: [],
    onThreadClick: thread => {
      console.log("Clicked thread:", thread);
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as DarkMode,a as Default,s as Empty,o as Loading,l as __namedExportsOrder,r as default};