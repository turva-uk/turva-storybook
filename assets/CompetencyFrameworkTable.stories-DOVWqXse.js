import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Box-BssAA6js.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{n as o,r as s}from"./iframe-gh_IKeZo.js";import{a as c,n as l}from"./variants-US1Dcm7T.js";import{S as u,_ as d,f,g as p,h as m,r as h}from"./fixtures-DDuwM3Po.js";import{n as g,t as _}from"./CompetencyFrameworkTable-aJWG_ZU-.js";var v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{t(),i(),g(),f(),c(),s(),v=r(),{fn:y}=__STORYBOOK_MODULE_TEST__,[b,x]=d,S={title:`Passport/Competency framework table`,tags:[`!dev`],component:_,parameters:{layout:`padded`},args:{catalogue:o,framework:b,competencies:p,onSelect:y()}},C={render:e=>(0,v.jsxs)(a,{gap:`sm`,children:[(0,v.jsx)(_,{...e}),(0,v.jsx)(l,{children:`Signed off, requested (waiting on an assessor) and not asked. Refer for radical radiotherapy has logbook entries and no sign-off, so it is not asked with a count.`})]})},w={args:{competencies:[{...u,name:`Refer for palliative radiotherapy`,framework_version:1}]},render:e=>(0,v.jsxs)(a,{gap:`sm`,children:[(0,v.jsx)(_,{...e}),(0,v.jsx)(l,{children:`The record keeps the words it was signed under, so the row shows today's words, then what the sign-off recorded.`})]})},T={args:{framework:x}},E={args:{competencies:[]}},D={render:e=>(0,v.jsxs)(a,{gap:`sm`,children:[(0,v.jsx)(n,{maw:`23.4375rem`,children:(0,v.jsx)(_,{...e})}),(0,v.jsx)(l,{children:`Constrained to a 375 pixel phone width.`})]})},O={args:{framework:x,competencies:[m,{...h,status:`requested`,signed_on:null},{...m,scope:{id:`colorectal`,name:`Colorectal`},status:`requested`,sign_off:null,logbook_entries:4}]},render:e=>(0,v.jsxs)(a,{gap:`sm`,children:[(0,v.jsx)(_,{...e}),(0,v.jsx)(l,{children:`Review and prescribe systemic anti-cancer therapy is signed off for lung and requested for breast. Colorectal has logbook entries and no sign-off, so it has no row.`})]})},k=[`Default`,`Reworded`,`LongFramework`,`NothingRecorded`,`Phone`,`ScopedCompetency`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <CompetencyFrameworkTable {...args} />
      <StoryNote>
        Signed off, requested (waiting on an assessor) and not asked. Refer for
        radical radiotherapy has logbook entries and no sign-off, so it is not
        asked with a count.
      </StoryNote>
    </Stack>
}`,...C.parameters?.docs?.source},description:{story:`Every state a row can be in, in the Gloucestershire radiotherapy record.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    competencies: [{
      ...referPalliativeCompetency,
      name: "Refer for palliative radiotherapy",
      framework_version: 1
    }]
  },
  render: args => <Stack gap="sm">
      <CompetencyFrameworkTable {...args} />
      <StoryNote>
        The record keeps the words it was signed under, so the row shows
        today&apos;s words, then what the sign-off recorded.
      </StoryNote>
    </Stack>
}`,...w.parameters?.docs?.source},description:{story:`A long framework: the SACT prescriber competencies, mostly not started.
A row the framework reworded after it was signed off.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    framework: sact
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    competencies: []
  }
}`,...E.parameters?.docs?.source},description:{story:`A holder with nothing recorded yet sees every item as not asked.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <Box maw="23.4375rem">
        <CompetencyFrameworkTable {...args} />
      </Box>
      <StoryNote>Constrained to a 375 pixel phone width.</StoryNote>
    </Stack>
}`,...D.parameters?.docs?.source},description:{story:`On a phone each row becomes a card.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    framework: sact,
    competencies: [lungCompetency, {
      ...breastCompetency,
      status: "requested",
      signed_on: null
    }, {
      ...lungCompetency,
      scope: {
        id: "colorectal",
        name: "Colorectal"
      },
      status: "requested",
      sign_off: null,
      logbook_entries: 4
    }]
  },
  render: args => <Stack gap="sm">
      <CompetencyFrameworkTable {...args} />
      <StoryNote>
        Review and prescribe systemic anti-cancer therapy is signed off for lung
        and requested for breast. Colorectal has logbook entries and no
        sign-off, so it has no row.
      </StoryNote>
    </Stack>
}`,...O.parameters?.docs?.source},description:{story:`A competency signed off one tumour site at a time: a row for each site
that is signed off or requested, and none for a site with nothing asked.`,...O.parameters?.docs?.description}}}})))()}A();export{C as Default,T as LongFramework,E as NothingRecorded,D as Phone,w as Reworded,O as ScopedCompetency,k as __namedExportsOrder,S as default};