import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{a as o,n as s}from"./variants-US1Dcm7T.js";import{n as c,t as l}from"./NavIcon-Cuud3MpV.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{i(),n(),c(),o(),u=t(),d=[`home`,`settings`,`logout`,`user`,`bell`,`message`,`file`,`adjustments`,`building-community`,`feedback`,`safety`],f=[`xs`,`sm`,`md`,`lg`,`xl`],p={title:`Icons/Nav icon`,component:l,parameters:{layout:`padded`},argTypes:{name:{description:`The name of the icon to display`,control:`select`,options:[...d]},size:{description:`The size preset for the icon`,control:`select`,options:[...f]}}},m={args:{name:`home`},render:()=>(0,u.jsx)(r,{gap:`md`,children:d.map(e=>(0,u.jsx)(l,{name:e},e))})},h={args:{name:`home`},render:()=>(0,u.jsx)(a,{gap:`lg`,children:f.map(e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(r,{gap:`md`,children:d.map(t=>(0,u.jsx)(l,{name:t,size:e},t))}),(0,u.jsx)(s,{mt:`xs`,children:e===`lg`?`${e} (default)`:e})]},e))})},g={...m,globals:{colorScheme:`dark`}},_=[`Default`,`AllSizes`,`DarkMode`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: "home"
  },
  render: () => <Group gap="md">
      {iconNames.map(name => <NavIcon key={name} name={name} />)}
    </Group>
}`,...m.parameters?.docs?.source},description:{story:`All available navigation icons at default size.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "home"
  },
  render: () => <Stack gap="lg">
      {sizes.map(size => <div key={size}>
          <Group gap="md">
            {iconNames.map(name => <NavIcon key={name} name={name} size={size} />)}
          </Group>
          <StoryNote mt="xs">
            {size === "lg" ? \`\${size} (default)\` : size}
          </StoryNote>
        </div>)}
    </Stack>
}`,...h.parameters?.docs?.source},description:{story:`All sizes with all icons per row.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{h as AllSizes,g as DarkMode,m as Default,_ as __namedExportsOrder,p as default};