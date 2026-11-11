import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,x as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";import{n as c,t as l}from"./ActionCardButton-DnJjeR9q.js";import{t as u}from"./BodyTextInline-BBHINRw1.js";function d({title:e,body:n,onViewResults:r,disabled:i=!1}){return(0,f.jsxs)(s,{gap:`lg`,children:[(0,f.jsx)(t,{title:e}),(0,f.jsx)(a,{children:(0,f.jsx)(u,{children:n})}),(0,f.jsx)(l,{label:`View results`,onClick:r,disabled:i})]})}var f;function p(){return(p=e((()=>{o(),n(),i(),c(),f=r(),d.__docgenInfo={description:``,methods:[],displayName:`AssessmentClosing`,props:{title:{required:!0,tsType:{name:`string`},description:`Closing page title from config`},body:{required:!0,tsType:{name:`string`},description:`Closing page body (markdown) from config`},onViewResults:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when "View results" is clicked`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the button is disabled (e.g. completing)`,defaultValue:{value:`false`,computed:!1}}}}})))()}var m,h,g,_,v;function y(){return(y=e((()=>{p(),m={title:`Teaching/Assessment closing`,tags:[`!dev`],component:d},h={args:{title:`Assessment complete`,body:`Thank you for completing the assessment. Click below to view your results.`,onViewResults:()=>{}}},g={args:{title:`Assessment complete`,body:`Calculating your results...`,onViewResults:()=>{},disabled:!0}},_={...h,globals:{colorScheme:`dark`}},v=[`Default`,`Disabled`,`DarkMode`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Assessment complete",
    body: "Thank you for completing the assessment. Click below to view your results.",
    onViewResults: () => {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Assessment complete",
    body: "Calculating your results...",
    onViewResults: () => {},
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as DarkMode,h as Default,g as Disabled,v as __namedExportsOrder,m as default};