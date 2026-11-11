import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./SignOffStatusBadge-39MYNaPs.js";var o,s,c,l;function u(){return(u=e((()=>{n(),i(),o=t(),s={title:`Badge/Sign-off status badge`,tags:[`!dev`],component:a,parameters:{layout:`padded`},argTypes:{status:{control:`select`,options:[`requested`,`signed_off`,`declined`,`superseded`],description:`Where the sign-off stands`}}},c={render:()=>(0,o.jsxs)(r,{gap:`md`,children:[(0,o.jsx)(a,{status:`requested`}),(0,o.jsx)(a,{status:`signed_off`}),(0,o.jsx)(a,{status:`declined`}),(0,o.jsx)(a,{status:`superseded`})]})},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="md">
      <SignOffStatusBadge status="requested" />
      <SignOffStatusBadge status="signed_off" />
      <SignOffStatusBadge status="declined" />
      <SignOffStatusBadge status="superseded" />
    </Group>
}`,...c.parameters?.docs?.source},description:{story:`Shows all four sign-off states.`,...c.parameters?.docs?.description}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};