import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{a as n,n as r}from"./variants-US1Dcm7T.js";import{n as i,r as a}from"./compat-generation-BmIXLXXj.js";import{n as o,t as s}from"./MainLayout-fD7qd5_7.js";import{n as c,t as l}from"./demoPatients-yuLmcz57.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{c(),n(),o(),a(),u=t(),d=`Only visible when more than one strip is showing at once: resize the browser narrower than the sm breakpoint (640px) to see these render as compact horizontal badges instead of full-width strips.`,f={title:`Overlays/Status strip`,component:i,parameters:{layout:`fullscreen`}},p={args:{variant:`offline`,lastSyncedAt:new Date},render:e=>(0,u.jsxs)(s,{patient:l[0],children:[(0,u.jsx)(i,{...e}),(0,u.jsx)(r,{children:`A lone strip always stays full-width, even on mobile - only switches to a badge when stacked alongside another strip.`})]})},m={args:{variant:`reconnected`},render:e=>(0,u.jsx)(s,{patient:l[0],children:(0,u.jsx)(i,{...e})})},h={args:{variant:`updating`},render:e=>(0,u.jsx)(s,{patient:l[0],children:(0,u.jsx)(i,{...e})})},g={args:{variant:`fallback`},render:e=>(0,u.jsx)(s,{patient:l[0],children:(0,u.jsx)(i,{...e})})},_={render:()=>(0,u.jsxs)(s,{patient:l[0],children:[(0,u.jsx)(i,{variant:`offline`,lastSyncedAt:new Date,multiple:!0}),(0,u.jsx)(i,{variant:`updating`,multiple:!0}),(0,u.jsx)(r,{children:d})]})},v={render:()=>(0,u.jsxs)(s,{patient:l[0],children:[(0,u.jsx)(i,{variant:`offline`,lastSyncedAt:new Date,multiple:!0}),(0,u.jsx)(i,{variant:`updating`,multiple:!0}),(0,u.jsx)(i,{variant:`fallback`,multiple:!0}),(0,u.jsx)(r,{children:d})]})},y={...p,globals:{colorScheme:`dark`}},b=[`Offline`,`Reconnected`,`Updating`,`Fallback`,`TwoStripsStacked`,`ThreeStripsStacked`,`DarkMode`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "offline",
    lastSyncedAt: new Date()
  },
  render: args => <MainLayout patient={demoPatientsList[0]}>
      <StatusStrip {...args} />
      <StoryNote>
        A lone strip always stays full-width, even on mobile - only switches to
        a badge when stacked alongside another strip.
      </StoryNote>
    </MainLayout>
}`,...p.parameters?.docs?.source},description:{story:`Offline - connectivity lost, shows the last successful sync time`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "reconnected"
  },
  render: args => <MainLayout patient={demoPatientsList[0]}>
      <StatusStrip {...args} />
    </MainLayout>
}`,...m.parameters?.docs?.source},description:{story:`Reconnected - brief confirmation after connectivity returns`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "updating"
  },
  render: args => <MainLayout patient={demoPatientsList[0]}>
      <StatusStrip {...args} />
    </MainLayout>
}`,...h.parameters?.docs?.source},description:{story:`Updating - a contract-step forced reload is imminent`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "fallback"
  },
  render: args => <MainLayout patient={demoPatientsList[0]}>
      <StatusStrip {...args} />
    </MainLayout>
}`,...g.parameters?.docs?.source},description:{story:`Fallback - the automatic forced reload didn't resolve the mismatch; keeps retrying in the background`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <MainLayout patient={demoPatientsList[0]}>
      <StatusStrip variant="offline" lastSyncedAt={new Date()} multiple />
      <StatusStrip variant="updating" multiple />
      <StoryNote>{RESIZE_NOTE}</StoryNote>
    </MainLayout>
}`,..._.parameters?.docs?.source},description:{story:`Two strips stacked - e.g. offline while a forced reload is also
pending. Each condition renders its own StatusStrip; they stack
vertically in mount order, with no priority given to either.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <MainLayout patient={demoPatientsList[0]}>
      <StatusStrip variant="offline" lastSyncedAt={new Date()} multiple />
      <StatusStrip variant="updating" multiple />
      <StatusStrip variant="fallback" multiple />
      <StoryNote>{RESIZE_NOTE}</StoryNote>
    </MainLayout>
}`,...v.parameters?.docs?.source},description:{story:`Three strips stacked - offline, an update that didn't apply
automatically, and (briefly) the updating notice. Demonstrates that
concurrent status conditions never overlap or compete for a single
slot - every condition gets its own strip.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Offline,
  globals: {
    colorScheme: "dark"
  }
}`,...y.parameters?.docs?.source},description:{story:`Dark mode`,...y.parameters?.docs?.description}}}})))()}x();export{y as DarkMode,g as Fallback,p as Offline,m as Reconnected,v as ThreeStripsStacked,_ as TwoStripsStacked,h as Updating,b as __namedExportsOrder,f as default};