import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./ActiveStatusBadge-DKNgalCF.js";var o,s,c,l;function u(){return(u=e((()=>{n(),i(),o=t(),s={title:`Badge/Active status badge`,component:a,parameters:{layout:`padded`},argTypes:{active:{control:`boolean`,description:`Whether the resource is active`}}},c={render:()=>(0,o.jsxs)(r,{gap:`md`,children:[(0,o.jsx)(a,{active:!0}),(0,o.jsx)(a,{active:!1}),(0,o.jsx)(a,{active:!1,inactiveLabel:`Deactivated`})]})},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="md">
      <ActiveStatusBadge active={true} />
      <ActiveStatusBadge active={false} />
      <ActiveStatusBadge active={false} inactiveLabel="Deactivated" />
    </Group>
}`,...c.parameters?.docs?.source},description:{story:`Shows both active and deactivated states.`,...c.parameters?.docs?.description}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};