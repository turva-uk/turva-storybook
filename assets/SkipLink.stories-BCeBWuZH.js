import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{a as n,n as r}from"./variants-US1Dcm7T.js";import{n as i,r as a,t as o}from"./SkipLink-B2Gowb-B.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),s=t(),c={title:`Navigation/Skip link`,component:o,parameters:{layout:`padded`}},l={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{}),(0,s.jsx)(i,{children:(0,s.jsx)(r,{children:`Press Tab to show the skip link, then Enter to move focus here.`})})]})},u={parameters:{pseudo:{focus:!0,focusVisible:!0}},render:()=>(0,s.jsx)(o,{})},d={globals:{colorScheme:`dark`},parameters:{pseudo:{focus:!0,focusVisible:!0}},render:()=>(0,s.jsx)(o,{})},f=[`Default`,`Focused`,`DarkMode`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <SkipLink />
      <SkipLinkTarget>
        <StoryNote>
          Press Tab to show the skip link, then Enter to move focus here.
        </StoryNote>
      </SkipLinkTarget>
    </>
}`,...l.parameters?.docs?.source},description:{story:`Hidden until focused: press Tab in the canvas to reveal it.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  },
  render: () => <SkipLink />
}`,...u.parameters?.docs?.source},description:{story:`As it looks while focused.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    colorScheme: "dark"
  },
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  },
  render: () => <SkipLink />
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as DarkMode,l as Default,u as Focused,f as __namedExportsOrder,c as default};