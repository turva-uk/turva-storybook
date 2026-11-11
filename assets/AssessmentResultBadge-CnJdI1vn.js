import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Badge-IMN-_Qpu.js";import{n as i,r as a,t as o}from"./badgeColours-CRm1OntK.js";import{n as s,t as c}from"./BadgeSkeleton-WHJAvNZj.js";function l({result:e,isLoading:t=!1}){if(t)return(0,u.jsx)(c,{});let{label:n,colour:i}=d[e];return(0,u.jsx)(r,{color:i.bg,c:i.text,variant:o,children:n})}var u,d;function f(){return(f=e((()=>{n(),a(),s(),u=t(),d={pass:{label:`Pass`,colour:i.success},fail:{label:`Fail`,colour:i.alert},incomplete:{label:`Incomplete`,colour:i.accent}},l.__docgenInfo={description:`AssessmentResultBadge

Shows a coloured badge for teaching assessment results.

@example
\`\`\`tsx
<AssessmentResultBadge result="pass" />       // Green "Pass"
<AssessmentResultBadge result="fail" />        // Red "Fail"
<AssessmentResultBadge result="incomplete" />  // Violet "Incomplete"
\`\`\``,methods:[],displayName:`AssessmentResultBadge`,props:{result:{required:!0,tsType:{name:`union`,raw:`"pass" | "fail" | "incomplete"`,elements:[{name:`literal`,value:`"pass"`},{name:`literal`,value:`"fail"`},{name:`literal`,value:`"incomplete"`}]},description:`Assessment result`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show loading skeleton instead of badge`,defaultValue:{value:`false`,computed:!1}}}}})))()}export{f as n,l as t};