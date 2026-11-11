import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./TeachingProgressBar-CupZgmEN.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),r={title:`Teaching/Teaching progress bar`,tags:[`!dev`],component:n,args:{label:`Slide progress`}},i={args:{current:1,total:120}},a={args:{current:60,total:120}},o={args:{current:118,total:120}},s={args:{current:120,total:120}},c={args:{current:0,total:4,fill:.42}},l={args:{current:1,total:4,showCount:!1}},u={...a,globals:{colorScheme:`dark`}},d=[`Start`,`Midway`,`NearEnd`,`Complete`,`PartWayThroughAStage`,`WithoutTheCount`,`DarkMode`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    total: 120
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    current: 60,
    total: 120
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    current: 118,
    total: 120
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    current: 120,
    total: 120
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    current: 0,
    total: 4,
    fill: 0.42
  }
}`,...c.parameters?.docs?.source},description:{story:`\`fill\` moves the bar without moving the count.

Counting stages alone gives a bar that only jumps in whole steps,
which reads as stuck while one long stage runs. The video upload
card uses this to creep through its first stage as the bytes go up.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    total: 4,
    showCount: false
  }
}`,...l.parameters?.docs?.source},description:{story:`\`showCount={false}\` drops the "X of N" beside the bar.

For progress a person is watching rather than working through. The
video card uses this: its four stages are internal machinery, and
counting them only invites the question of what they are.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Midway,
  globals: {
    colorScheme: "dark"
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{s as Complete,u as DarkMode,a as Midway,o as NearEnd,c as PartWayThroughAStage,i as Start,l as WithoutTheCount,d as __namedExportsOrder,r as default};