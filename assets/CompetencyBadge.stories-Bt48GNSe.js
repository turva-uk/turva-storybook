import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./CompetencyBadge-DVRW_eji.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),o=t(),s={title:`Badge/Competency badge`,component:a,parameters:{layout:`padded`}},c={render:()=>(0,o.jsxs)(r,{gap:`md`,children:[(0,o.jsx)(a,{label:`Take Teaching Modules`}),(0,o.jsx)(a,{label:`Manage Teaching Content`}),(0,o.jsx)(a,{label:`View Teaching Analytics`})]})},l={render:()=>(0,o.jsxs)(r,{gap:`md`,children:[(0,o.jsx)(a,{label:`Take Teaching Modules`,removed:!0}),(0,o.jsx)(a,{label:`Manage Teaching Content`,removed:!0})]})},u=[`Default`,`Removed`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="md">
      <CompetencyBadge label="Take Teaching Modules" />
      <CompetencyBadge label="Manage Teaching Content" />
      <CompetencyBadge label="View Teaching Analytics" />
    </Group>
}`,...c.parameters?.docs?.source},description:{story:`Default competency badges showing typical competency names`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="md">
      <CompetencyBadge label="Take Teaching Modules" removed />
      <CompetencyBadge label="Manage Teaching Content" removed />
    </Group>
}`,...l.parameters?.docs?.source},description:{story:`Removed competencies displayed in alert colour`,...l.parameters?.docs?.description}}}})))()}d();export{c as Default,l as Removed,u as __namedExportsOrder,s as default};