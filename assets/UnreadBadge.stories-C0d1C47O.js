import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./UnreadBadge-DQ0hOkvo.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),s={title:`Badge/Unread badge`,component:a,parameters:{layout:`padded`}},c=[1,2,3,4,5,6,7,8,9,10],l={render:()=>(0,o.jsx)(r,{gap:`md`,children:c.map(e=>(0,o.jsx)(a,{count:e},e))})},u={render:()=>(0,o.jsx)(a,{count:1,isLoading:!0})},d={...l,globals:{colorScheme:`dark`}},f=[`Default`,`Loading`,`DarkMode`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="md">
      {counts.map(count => <UnreadBadge key={count} count={count} />)}
    </Group>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <UnreadBadge count={1} isLoading />
}`,...u.parameters?.docs?.source},description:{story:`Loading skeleton.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as DarkMode,l as Default,u as Loading,f as __namedExportsOrder,s as default};