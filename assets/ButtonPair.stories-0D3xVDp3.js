import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Loader-BFzep6Au.js";import{n as i,t as a}from"./ButtonPair-C-HV7e6O.js";import{a as o,n as s}from"./variants-US1Dcm7T.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),o(),i(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Button/Button pair`,component:a,parameters:{layout:`padded`},args:{onAccept:l(),onCancel:l()}},d={},f={args:{acceptDisabled:!0}},p={args:{acceptDisabled:!0,acceptChildren:(0,c.jsxs)(`span`,{style:{display:`grid`,placeItems:`center`},children:[(0,c.jsx)(`span`,{style:{gridArea:`1/1`,visibility:`hidden`},children:`Accept`}),(0,c.jsxs)(`span`,{style:{gridArea:`1/1`,visibility:`visible`,display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,c.jsx)(r,{size:`xs`,color:`white`,"aria-hidden":`true`}),`Saving…`]})]})}},m={args:{acceptLabel:`Save document`,sticky:!0},decorators:[e=>(0,c.jsxs)(c.Fragment,{children:[Array.from({length:40},(e,t)=>(0,c.jsxs)(s,{children:[`Line `,t+1,` of a long page, scrolling under the buttons.`]},t)),(0,c.jsx)(e,{})]})]},h={...d,globals:{colorScheme:`dark`}},g={args:{fullWidth:!0}},_=[`Default`,`AcceptDisabled`,`Submitting`,`Sticky`,`DarkMode`,`FullWidth`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source},description:{story:`Default button pair`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    acceptDisabled: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Accept button disabled`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    acceptDisabled: true,
    acceptChildren: <span style={{
      display: "grid",
      placeItems: "center"
    }}>
        <span style={{
        gridArea: "1/1",
        visibility: "hidden"
      }}>Accept</span>
        <span style={{
        gridArea: "1/1",
        visibility: "visible",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
      }}>
          <Loader size="xs" color="white" aria-hidden="true" />
          Saving…
        </span>
      </span>
  }
}`,...p.parameters?.docs?.source},description:{story:`Accept button in submitting state`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    acceptLabel: "Save document",
    sticky: true
  },
  decorators: [Story => <>
        {Array.from({
      length: 40
    }, (_, line) => <StoryNote key={line}>
            Line {line + 1} of a long page, scrolling under the buttons.
          </StoryNote>)}
        <Story />
      </>]
}`,...m.parameters?.docs?.source},description:{story:`At the foot of a page longer than the screen: the pair stays in view
while the page scrolls under it.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...g.parameters?.docs?.source},description:{story:`Full-width buttons at all screen sizes`,...g.parameters?.docs?.description}}}})))()}v();export{f as AcceptDisabled,h as DarkMode,d as Default,g as FullWidth,m as Sticky,p as Submitting,_ as __namedExportsOrder,u as default};