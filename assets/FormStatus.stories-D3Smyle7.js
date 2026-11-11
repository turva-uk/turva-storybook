import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,i as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{a as o,n as s}from"./variants-US1Dcm7T.js";var c,l,u,d,f;function p(){return(p=e((()=>{i(),o(),t(),c=r(),l={title:`Form/Form status`,component:n,parameters:{layout:`padded`}},u={render:()=>(0,c.jsxs)(a,{gap:`lg`,children:[(0,c.jsxs)(a,{gap:`xs`,children:[(0,c.jsx)(s,{children:`success`}),(0,c.jsx)(n,{variant:`success`,title:`Settings saved`,description:`Your changes have been applied.`})]}),(0,c.jsxs)(a,{gap:`xs`,children:[(0,c.jsx)(s,{children:`error`}),(0,c.jsx)(n,{variant:`error`,title:`Failed to save`,description:`The server returned an error. Please try again.`})]}),(0,c.jsxs)(a,{gap:`xs`,children:[(0,c.jsx)(s,{children:`partial_success`}),(0,c.jsx)(n,{variant:`partial_success`,title:`Partially saved`,description:`Letter saved to patient record. Delivery to GP is still pending.`})]}),(0,c.jsxs)(a,{gap:`xs`,children:[(0,c.jsx)(s,{children:`timeout`}),(0,c.jsx)(n,{variant:`timeout`,title:`Request timed out`,description:`The server did not respond in time. Your changes may not have been saved.`})]}),(0,c.jsxs)(a,{gap:`xs`,children:[(0,c.jsx)(s,{children:`validation_error`}),(0,c.jsx)(n,{variant:`validation_error`,title:`Please check the highlighted fields`,description:`2 fields need attention.`})]})]})},d={...u,globals:{colorScheme:`dark`}},f=[`AllVariants`,`DarkMode`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="lg">
      <Stack gap="xs">
        <StoryNote>success</StoryNote>
        <FormStatus variant="success" title="Settings saved" description="Your changes have been applied." />
      </Stack>
      <Stack gap="xs">
        <StoryNote>error</StoryNote>
        <FormStatus variant="error" title="Failed to save" description="The server returned an error. Please try again." />
      </Stack>
      <Stack gap="xs">
        <StoryNote>partial_success</StoryNote>
        <FormStatus variant="partial_success" title="Partially saved" description="Letter saved to patient record. Delivery to GP is still pending." />
      </Stack>
      <Stack gap="xs">
        <StoryNote>timeout</StoryNote>
        <FormStatus variant="timeout" title="Request timed out" description="The server did not respond in time. Your changes may not have been saved." />
      </Stack>
      <Stack gap="xs">
        <StoryNote>validation_error</StoryNote>
        <FormStatus variant="validation_error" title="Please check the highlighted fields" description="2 fields need attention." />
      </Stack>
    </Stack>
}`,...u.parameters?.docs?.source},description:{story:`All variants side by side`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...AllVariants,
  globals: {
    colorScheme: "dark"
  }
}`,...d.parameters?.docs?.source},description:{story:`Dark mode`,...d.parameters?.docs?.description}}}})))()}p();export{u as AllVariants,d as DarkMode,f as __namedExportsOrder,l as default};