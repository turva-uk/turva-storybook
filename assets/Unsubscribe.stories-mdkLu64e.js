import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Unsubscribe-Dveb29_R.js";var r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),r={title:`Registration/Unsubscribe`,component:n,parameters:{layout:`padded`},args:{status:`ready`,email:`a***@e***.com`,wantsNews:!0,saving:!1,saved:!1,onChange:()=>{}}},i={},a={args:{wantsNews:!1,saved:!0}},o={args:{wantsNews:!0,saved:!0}},s={args:{wantsNews:!1}},c={args:{wantsNews:!0,error:`We could not save that. Please try again.`}},l={args:{status:`invalid`}},u={args:{status:`unavailable`}},d={args:{status:`loading`}},f={...i,globals:{colorScheme:`dark`}},p=[`Subscribed`,`JustUnsubscribed`,`JustResubscribed`,`AlreadyUnsubscribed`,`SaveFailed`,`InvalidLink`,`Unavailable`,`Loading`,`DarkMode`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source},description:{story:`As somebody arrives from a newsletter: news is on.`,...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    wantsNews: false,
    saved: true
  }
}`,...a.parameters?.docs?.source},description:{story:`Just after switching it off.`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    wantsNews: true,
    saved: true
  }
}`,...o.parameters?.docs?.source},description:{story:`Just after switching it back on.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    wantsNews: false
  }
}`,...s.parameters?.docs?.source},description:{story:`Somebody who had already said no opens an old email.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    wantsNews: true,
    error: "We could not save that. Please try again."
  }
}`,...c.parameters?.docs?.source},description:{story:`The change did not reach the server.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: "invalid"
  }
}`,...l.parameters?.docs?.source},description:{story:`The link is not a real one.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: "unavailable"
  }
}`,...u.parameters?.docs?.source},description:{story:`The link could not be checked at all.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: "loading"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Subscribed,
  globals: {
    colorScheme: "dark"
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{s as AlreadyUnsubscribed,f as DarkMode,l as InvalidLink,o as JustResubscribed,a as JustUnsubscribed,d as Loading,c as SaveFailed,i as Subscribed,u as Unavailable,p as __namedExportsOrder,r as default};