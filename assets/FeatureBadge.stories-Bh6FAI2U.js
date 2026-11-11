import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./FeatureBadge-ChFD87Bk.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),o=t(),s={title:`Badge/Feature badge`,component:a,parameters:{layout:`padded`}},c={render:()=>(0,o.jsxs)(r,{gap:`md`,children:[(0,o.jsx)(a,{label:`Teaching`}),(0,o.jsx)(a,{label:`Messaging`}),(0,o.jsx)(a,{label:`Letters`})]})},l={render:()=>(0,o.jsxs)(r,{gap:`md`,children:[(0,o.jsx)(a,{label:`Teaching`,removed:!0}),(0,o.jsx)(a,{label:`Messaging`,removed:!0}),(0,o.jsx)(a,{label:`Letters`,removed:!0})]})},u=[`Default`,`Removed`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="md">
      <FeatureBadge label="Teaching" />
      <FeatureBadge label="Messaging" />
      <FeatureBadge label="Letters" />
    </Group>
}`,...c.parameters?.docs?.source},description:{story:`Default feature badges showing typical feature names`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="md">
      <FeatureBadge label="Teaching" removed />
      <FeatureBadge label="Messaging" removed />
      <FeatureBadge label="Letters" removed />
    </Group>
}`,...l.parameters?.docs?.source},description:{story:`Removed state - features that have been removed`,...l.parameters?.docs?.description}}}})))()}d();export{c as Default,l as Removed,u as __namedExportsOrder,s as default};