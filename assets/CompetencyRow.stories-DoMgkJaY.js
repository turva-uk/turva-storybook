import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{a as i,i as a,n as o}from"./variants-US1Dcm7T.js";import{T as s,f as c,h as l,j as u,u as d}from"./fixtures-DDuwM3Po.js";import{n as f,t as p}from"./CompetencyRow-DGxT0vnK.js";var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),f(),c(),i(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Passport/Competency row`,tags:[`!dev`],component:p,parameters:{layout:`padded`}},_={args:{competency:u,onSelect:void 0}},v={args:{competency:s,onSelect:void 0}},y={args:{competency:{...u,requested_level:{id:`teach`,name:`Can teach others`},level_change_reason:`Not yet teaching it; independent, yes.`},onSelect:void 0}},b={args:{competency:d,onSelect:void 0}},x={args:{competency:u,onSelect:h()}},S={render:()=>(0,m.jsx)(a,{children:(0,m.jsxs)(r,{gap:`md`,children:[(0,m.jsx)(p,{competency:u}),(0,m.jsx)(p,{competency:s}),(0,m.jsx)(p,{competency:d}),(0,m.jsx)(o,{children:`The logbook count appears with no target beside it. How many is enough is the assessor’s judgement, and a progress bar would appear to have decided it already.`})]})})},C={args:{competency:l,onSelect:void 0}},w=[`SignedOff`,`Requested`,`SignedAtADifferentLevel`,`Declined`,`Selectable`,`AllStates`,`WithAScope`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    competency: signedOffCompetency,
    onSelect: undefined
  }
}`,..._.parameters?.docs?.source},description:{story:'Every read-only story sets `onSelect: undefined` explicitly rather than\nomitting it. `argTypesRegex: "^on[A-Z].*"` in `.storybook/preview.tsx`\nauto-fills any unset `on*` prop with a spy, so an omitted `onSelect`\nwould render the row as a button with a hover - exactly what these\nstories exist to show it is not.',..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    competency: requestedCompetency,
    onSelect: undefined
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    competency: {
      ...signedOffCompetency,
      requested_level: {
        id: "teach",
        name: "Can teach others"
      },
      level_change_reason: "Not yet teaching it; independent, yes."
    },
    onSelect: undefined
  }
}`,...y.parameters?.docs?.source},description:{story:`Signed off at a different level from the one asked for, with why.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    competency: declinedCompetency,
    onSelect: undefined
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    competency: signedOffCompetency,
    onSelect: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <Stack gap="md">
        <CompetencyRow competency={signedOffCompetency} />
        <CompetencyRow competency={requestedCompetency} />
        <CompetencyRow competency={declinedCompetency} />
        <StoryNote>
          The logbook count appears with no target beside it. How many is enough
          is the assessor&rsquo;s judgement, and a progress bar would appear to
          have decided it already.
        </StoryNote>
      </Stack>
    </VariantStack>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    competency: lungCompetency,
    onSelect: undefined
  }
}`,...C.parameters?.docs?.source},description:{story:`One scope of a competency signed off scope by scope.`,...C.parameters?.docs?.description}}}})))()}T();export{S as AllStates,b as Declined,v as Requested,x as Selectable,y as SignedAtADifferentLevel,_ as SignedOff,C as WithAScope,w as __namedExportsOrder,g as default};