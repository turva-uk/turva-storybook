import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{a as i,n as a}from"./variants-US1Dcm7T.js";import{D as o,M as s,d as c,f as l,o as u,p as d}from"./fixtures-DDuwM3Po.js";import{n as f,t as p}from"./LogbookTable-DPpAml0W.js";var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),f(),l(),i(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Passport/Logbook table`,tags:[`!dev`],component:p,parameters:{layout:`padded`}},_={args:{logbook:d,competencyName:`Perform bronchoscopy`,onSelect:h()}},v={args:{logbook:s,competencyName:`Perform thoracic ultrasound`}},y={args:{logbook:c,competencyName:`Prescribe systemic anti-cancer therapy`}},b={render:e=>(0,m.jsxs)(r,{gap:`sm`,children:[(0,m.jsx)(p,{...e}),(0,m.jsx)(a,{children:`Thirty-eight entries, and nothing saying whether that is enough. Two hundred bronchoscopies prove activity, not competence - the sign-off is what turns evidence into a conclusion, and a progress bar here would appear to have decided that already.`})]}),args:{logbook:d,competencyName:`Perform bronchoscopy`}},x={args:{logbook:c,competencyName:`Perform bronchoscopy`,isLoading:!0}},S={args:{logbook:o,competencyName:`Review and prescribe systemic anti-cancer therapy`,onSelect:h()}},C={args:{logbook:u,competencyName:`Review and prescribe systemic anti-cancer therapy`,onSelect:h()}},w=[`Default`,`SingleEntry`,`Empty`,`CountsNeverTargets`,`Loading`,`WithScopes`,`WithConfirmations`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    logbook,
    competencyName: "Perform bronchoscopy",
    onSelect: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    logbook: singleEntryLogbook,
    competencyName: "Perform thoracic ultrasound"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    logbook: emptyLogbook,
    competencyName: "Prescribe systemic anti-cancer therapy"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <LogbookTable {...args} />
      <StoryNote>
        Thirty-eight entries, and nothing saying whether that is enough. Two
        hundred bronchoscopies prove activity, not competence - the sign-off is
        what turns evidence into a conclusion, and a progress bar here would
        appear to have decided that already.
      </StoryNote>
    </Stack>,
  args: {
    logbook,
    competencyName: "Perform bronchoscopy"
  }
}`,...b.parameters?.docs?.source},description:{story:`A count and no target - the reason this table looks plainer than it
might.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    logbook: emptyLogbook,
    competencyName: "Perform bronchoscopy",
    isLoading: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    logbook: scopedLogbook,
    competencyName: "Review and prescribe systemic anti-cancer therapy",
    onSelect: fn()
  }
}`,...S.parameters?.docs?.source},description:{story:`A competency signed off scope by scope. The extra column appears only
because some entry here says what it counts towards.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    logbook: confirmedLogbook,
    competencyName: "Review and prescribe systemic anti-cancer therapy",
    onSelect: fn()
  }
}`,...C.parameters?.docs?.source},description:{story:`One entry confirmed by a supervisor and one still waiting on them. The
column appears only because some entry here has one or the other.`,...C.parameters?.docs?.description}}}})))()}T();export{b as CountsNeverTargets,_ as Default,y as Empty,x as Loading,v as SingleEntry,C as WithConfirmations,S as WithScopes,w as __namedExportsOrder,g as default};