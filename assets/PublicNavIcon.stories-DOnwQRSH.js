import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{a as i,i as a,r as o}from"./variants-US1Dcm7T.js";import{n as s,t as c}from"./backdrops-B3vzMRuF.js";import{n as l,t as u}from"./PublicNavIcon-BQQbhoaR.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),l(),i(),s(),d=t(),f=[`home`,`teaching`,`learning`,`assessments`,`educators`,`book`,`pricing`,`database`,`mail`],p=[`xs`,`sm`,`md`,`lg`,`xl`],m={title:`Public/Icons/Public nav icon`,component:u,parameters:{layout:`fullscreen`},decorators:[e=>(0,d.jsx)(`div`,{style:{...c,minHeight:`100vh`,padding:`var(--mantine-spacing-xl)`},children:(0,d.jsx)(e,{})})],argTypes:{name:{description:`The name of the icon to display`,control:`select`,options:f},size:{description:`The size preset for the icon`,control:`select`,options:[...p]}}},h={args:{name:`home`},render:()=>(0,d.jsx)(r,{gap:`md`,children:f.map(e=>(0,d.jsx)(u,{name:e},e))})},g={args:{name:`home`},render:()=>(0,d.jsx)(a,{children:p.map(e=>(0,d.jsx)(o,{label:e===`lg`?`${e} (default)`:e,children:f.map(t=>(0,d.jsx)(u,{name:t,size:e},t))},e))})},_=[`Default`,`AllSizes`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "home"
  },
  render: () => <Group gap="md">
      {iconNames.map(name => <PublicNavIcon key={name} name={name} />)}
    </Group>
}`,...h.parameters?.docs?.source},description:{story:`All available public navigation icons at default size.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: "home"
  },
  render: () => <VariantStack>
      {sizes.map(size => <VariantRow key={size} label={size === "lg" ? \`\${size} (default)\` : size}>
          {iconNames.map(name => <PublicNavIcon key={name} name={name} size={size} />)}
        </VariantRow>)}
    </VariantStack>
}`,...g.parameters?.docs?.source},description:{story:`All sizes with all icons per row.`,...g.parameters?.docs?.description}}}})))()}v();export{g as AllSizes,h as Default,_ as __namedExportsOrder,m as default};