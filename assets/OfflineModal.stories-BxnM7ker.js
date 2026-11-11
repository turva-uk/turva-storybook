import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{a as i,n as a}from"./variants-US1Dcm7T.js";import{n as o,t as s}from"./OfflineModal-BPvofaIc.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Overlays/Offline modal`,component:s,parameters:{layout:`padded`}},d={args:{opened:!0,onClose:l()},decorators:[e=>(0,c.jsxs)(r,{gap:`md`,children:[(0,c.jsx)(a,{children:`Shown when a user attempts a navigation or API mutation while offline. Single “OK” button dismisses the modal.`}),(0,c.jsx)(e,{})]})]},f={...d,globals:{colorScheme:`dark`}},p=[`Default`,`DarkMode`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true,
    onClose: fn()
  },
  decorators: [Story => <Stack gap="md">
        <StoryNote>
          Shown when a user attempts a navigation or API mutation while offline.
          Single &ldquo;OK&rdquo; button dismisses the modal.
        </StoryNote>
        <Story />
      </Stack>]
}`,...d.parameters?.docs?.source},description:{story:`Default - modal open with offline message`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...f.parameters?.docs?.source},description:{story:`Dark mode`,...f.parameters?.docs?.description}}}})))()}m();export{f as DarkMode,d as Default,p as __namedExportsOrder,u as default};