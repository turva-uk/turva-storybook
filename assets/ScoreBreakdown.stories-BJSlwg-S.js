import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./ScoreBreakdown-CC8XoXDg.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r={title:`Teaching/Score breakdown`,tags:[`!dev`],component:n,parameters:{docs:{description:{component:`Detailed breakdown of pass criteria results showing each criterion's value, threshold, and pass/fail status.`}},layout:`padded`}},i={args:{criteria:[{name:`High confidence rate`,value:.78,threshold:.7,passed:!0},{name:`Accuracy of high-confidence answers`,value:.91,threshold:.85,passed:!0}]}},a={args:{criteria:[{name:`Chest X-ray results`,value:.78,threshold:.7,passed:!0}]}},o={args:{criteria:[{name:`High confidence rate`,value:.65,threshold:.7,passed:!1},{name:`Accuracy of high-confidence answers`,value:.91,threshold:.85,passed:!0}]}},s={args:{criteria:[{name:`High confidence rate`,value:.55,threshold:.7,passed:!1},{name:`Accuracy of high-confidence answers`,value:.72,threshold:.85,passed:!1}]}},c={...i,globals:{colorScheme:`dark`}},l=[`AllPassed`,`SingleCriterion`,`OneFailed`,`AllFailed`,`DarkMode`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    criteria: [{
      name: "High confidence rate",
      value: 0.78,
      threshold: 0.7,
      passed: true
    }, {
      name: "Accuracy of high-confidence answers",
      value: 0.91,
      threshold: 0.85,
      passed: true
    }]
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    criteria: [{
      name: "Chest X-ray results",
      value: 0.78,
      threshold: 0.7,
      passed: true
    }]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    criteria: [{
      name: "High confidence rate",
      value: 0.65,
      threshold: 0.7,
      passed: false
    }, {
      name: "Accuracy of high-confidence answers",
      value: 0.91,
      threshold: 0.85,
      passed: true
    }]
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    criteria: [{
      name: "High confidence rate",
      value: 0.55,
      threshold: 0.7,
      passed: false
    }, {
      name: "Accuracy of high-confidence answers",
      value: 0.72,
      threshold: 0.85,
      passed: false
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...AllPassed,
  globals: {
    colorScheme: "dark"
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as AllFailed,i as AllPassed,c as DarkMode,o as OneFailed,a as SingleCriterion,l as __namedExportsOrder,r as default};