import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./TopRibbon-CgzIu8pt.js";import{n as o,t as s}from"./demoPatients-yuLmcz57.js";import{n as c,t as l}from"./AssessmentTimer-z9Iwt7Pz.js";import{n as u,t as d}from"./ExamCloseButton-ChvdSPA1.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{o(),n(),c(),u(),i(),f=t(),p={title:`Ribbons/Top ribbon`,component:a,parameters:{layout:`fullscreen`,controls:{expanded:!0}},argTypes:{onBurgerClick:{action:`burger-clicked`}}},m={args:{patient:null,isLoading:!1,navOpen:!1},render:e=>(0,f.jsx)(a,{...e})},h={args:{patient:s[0],isLoading:!1,navOpen:!1,isNarrow:!1},render:e=>(0,f.jsx)(a,{...e})},g={args:{patient:s[0],isLoading:!1,navOpen:!1,isNarrow:!0},render:e=>(0,f.jsx)(a,{...e})},_={args:{onBurgerClick:()=>{},patient:null,isLoading:!1,navOpen:!1,isNarrow:!1,showSearch:!1,rightSection:(0,f.jsxs)(r,{gap:`sm`,wrap:`nowrap`,children:[(0,f.jsx)(l,{secondsLeft:4500,onExpire:()=>{}}),(0,f.jsx)(d,{onConfirm:()=>{}})]})}},v={args:{onBurgerClick:()=>{},patient:null,isLoading:!0,navOpen:!1,isNarrow:!0}},y={args:{onBurgerClick:()=>{},patient:null,isLoading:!0,navOpen:!1,isNarrow:!1}},b={args:{patient:null,isLoading:!1,navOpen:!1,isNarrow:!1,showSearch:!1},render:e=>(0,f.jsx)(a,{...e})},x=[`NoPatient`,`WithPatientWide`,`WithPatientNarrow`,`WithRightSection`,`LoadingNarrow`,`LoadingWide`,`NonClinical`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    patient: null,
    isLoading: false,
    navOpen: false
  },
  render: args => <TopRibbon {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    patient: demoPatientsList[0],
    isLoading: false,
    navOpen: false,
    isNarrow: false
  },
  render: args => <TopRibbon {...args} />
}`,...h.parameters?.docs?.source},description:{story:`Patient selected - wide container (search visible if your CQ allows)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    patient: demoPatientsList[0],
    isLoading: false,
    navOpen: false,
    isNarrow: true
  },
  render: args => <TopRibbon {...args} />
}`,...g.parameters?.docs?.source},description:{story:`Patient selected - narrow container (search should hide via @container)`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    onBurgerClick: () => {},
    patient: null,
    isLoading: false,
    navOpen: false,
    isNarrow: false,
    showSearch: false,
    rightSection: <Group gap="sm" wrap="nowrap">
        <AssessmentTimer secondsLeft={75 * 60} onExpire={() => {}} />
        <ExamCloseButton onConfirm={() => {}} />
      </Group>
  }
}`,..._.parameters?.docs?.source},description:{story:`A right section - the timer and "End exam" of a running assessment.
Below 26em the Brand name gives way to it.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onBurgerClick: () => {},
    patient: null,
    isLoading: true,
    navOpen: false,
    isNarrow: true
  }
}`,...v.parameters?.docs?.source},description:{story:`Loading state - shows skeleton + Brand mark (narrow screen)`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onBurgerClick: () => {},
    patient: null,
    isLoading: true,
    navOpen: false,
    isNarrow: false
  }
}`,...y.parameters?.docs?.source},description:{story:`Loading state - shows skeleton with ProfilePic + Brand mark (wide screen)`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    patient: null,
    isLoading: false,
    navOpen: false,
    isNarrow: false,
    showSearch: false
  },
  render: args => <TopRibbon {...args} />
}`,...b.parameters?.docs?.source},description:{story:`Non-clinical deployment - search field hidden`,...b.parameters?.docs?.description}}}})))()}S();export{v as LoadingNarrow,y as LoadingWide,m as NoPatient,b as NonClinical,g as WithPatientNarrow,h as WithPatientWide,_ as WithRightSection,x as __namedExportsOrder,p as default};