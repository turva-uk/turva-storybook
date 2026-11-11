import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./AssessmentTimer-z9Iwt7Pz.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),a={title:`Teaching/Assessment timer`,tags:[`!dev`],component:r,parameters:{docs:{description:{component:`Countdown timer for timed assessments. Shows remaining time and triggers an expiry callback when time runs out. Turns red in the final 5 minutes.`}},layout:`padded`}},o={render:()=>(0,i.jsx)(r,{secondsLeft:4500,onExpire:()=>{}})},s={render:()=>(0,i.jsx)(r,{secondsLeft:2537,onExpire:()=>{}})},c={render:()=>(0,i.jsx)(r,{secondsLeft:300,onExpire:()=>{}})},l={render:()=>(0,i.jsx)(r,{secondsLeft:60,onExpire:()=>{}})},u={render:()=>(0,i.jsx)(r,{secondsLeft:0,onExpire:()=>{}})},d={...o,globals:{colorScheme:`dark`}},f=[`PlentyOfTime`,`StartedPartWayThrough`,`FiveMinutesLeft`,`OneMinuteLeft`,`Expired`,`DarkMode`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <AssessmentTimer secondsLeft={75 * 60} onExpire={() => {}} />
}`,...o.parameters?.docs?.source},description:{story:`A new attempt, with its whole time ahead of it.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AssessmentTimer secondsLeft={42 * 60 + 17} onExpire={() => {}} />
}`,...s.parameters?.docs?.source},description:{story:`An attempt opened part way through: the countdown starts from the
seconds the server says are left, not from the attempt's whole time.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AssessmentTimer secondsLeft={5 * 60} onExpire={() => {}} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <AssessmentTimer secondsLeft={60} onExpire={() => {}} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <AssessmentTimer secondsLeft={0} onExpire={() => {}} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...PlentyOfTime,
  globals: {
    colorScheme: "dark"
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as DarkMode,u as Expired,c as FiveMinutesLeft,l as OneMinuteLeft,o as PlentyOfTime,s as StartedPartWayThrough,f as __namedExportsOrder,a as default};