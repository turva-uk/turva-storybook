import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./AssessmentResult--k5POzP8.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i=[{name:`High confidence rate`,value:.78,threshold:.7,passed:!0},{name:`Accuracy of high-confidence answers`,value:.91,threshold:.85,passed:!0}],a=[{name:`High confidence rate`,value:.65,threshold:.7,passed:!1},{name:`Accuracy of high-confidence answers`,value:.91,threshold:.85,passed:!0}],o={title:`Teaching/Assessment result`,tags:[`!dev`],component:n,parameters:{docs:{description:{component:`Displays pass/fail result with score breakdown, certificate download button, and retry option.`}},layout:`padded`}},s={args:{isPassed:!0,bankTitle:`Optical diagnosis of diminutive colorectal polyps`,criteria:i,assessmentId:42,questionResultsHref:`/teaching/assessment/42/question-results`,showCertificate:!0,showBackToDashboard:!0,onBackToDashboard:r()}},c={args:{isPassed:!1,bankTitle:`Optical diagnosis of diminutive colorectal polyps`,criteria:a,questionResultsHref:`/teaching/assessment/43/question-results`,showTryAgain:!0,showBackToDashboard:!0,onTryAgain:r(),onBackToDashboard:r()}},l={args:{isPassed:!0,bankTitle:`Optical diagnosis of diminutive colorectal polyps`,criteria:i}},u={...s,globals:{colorScheme:`dark`}},d=[`Passed`,`Failed`,`PassedFromDashboard`,`DarkMode`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isPassed: true,
    bankTitle: "Optical diagnosis of diminutive colorectal polyps",
    criteria: passCriteria,
    assessmentId: 42,
    questionResultsHref: "/teaching/assessment/42/question-results",
    showCertificate: true,
    showBackToDashboard: true,
    onBackToDashboard: fn()
  }
}`,...s.parameters?.docs?.source},description:{story:`Passed result with certificate download and back-to-dashboard button.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isPassed: false,
    bankTitle: "Optical diagnosis of diminutive colorectal polyps",
    criteria: failCriteria,
    questionResultsHref: "/teaching/assessment/43/question-results",
    showTryAgain: true,
    showBackToDashboard: true,
    onTryAgain: fn(),
    onBackToDashboard: fn()
  }
}`,...c.parameters?.docs?.source},description:{story:`Failed result with try-again and back-to-dashboard buttons.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isPassed: true,
    bankTitle: "Optical diagnosis of diminutive colorectal polyps",
    criteria: passCriteria
  }
}`,...l.parameters?.docs?.source},description:{story:`Passed result without certificate (viewed from dashboard history).`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Passed,
  globals: {
    colorScheme: "dark"
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as DarkMode,c as Failed,s as Passed,l as PassedFromDashboard,d as __namedExportsOrder,o as default};