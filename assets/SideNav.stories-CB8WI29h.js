import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,t as r}from"./search-Yj5vaVVI.js";import{n as i,t as a}from"./SideNav-CqU2DDOM.js";import{n as o,t as s}from"./demoPatients-yuLmcz57.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),i(),o(),c=t(),l={title:`Navigation/Side nav`,component:a,decorators:[e=>(0,c.jsx)(n,{children:(0,c.jsx)(e,{})})]},u=s[0],d=`/patients/${u.id}`,f={args:{showSearch:!1,showIcons:!0}},p={args:{showSearch:!0,showIcons:!0}},m={args:{showSearch:!1,showIcons:!0,patientNav:[{label:u.name,href:d},{label:`Messages`,href:`${d}/messages`},{label:`Dr Fenwick, Imogen`,href:`${d}/messages/gastro-clinic`}]},parameters:{routerPath:`${d}/messages/gastro-clinic`}},h={args:{showSearch:!0,showIcons:!0,patientNav:[{label:u.name,href:d},{label:`Messages`,href:`${d}/messages`},{label:`Dr Fenwick, Imogen`,href:`${d}/messages/gastro-clinic`}]},parameters:{routerPath:`${d}/messages/gastro-clinic`}},g={...f,globals:{colorScheme:`dark`}},_=[`Default`,`WithSearch`,`PatientMessageThread`,`PatientMessageThreadWithSearch`,`DarkMode`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    showSearch: false,
    showIcons: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Default navigation with icons.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showSearch: true,
    showIcons: true
  }
}`,...p.parameters?.docs?.source},description:{story:`Navigation with search field and icons (mobile drawer style).`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showSearch: false,
    showIcons: true,
    patientNav: [{
      label: patient.name,
      href: patientHref
    }, {
      label: "Messages",
      href: \`\${patientHref}/messages\`
    }, {
      label: "Dr Fenwick, Imogen",
      href: \`\${patientHref}/messages/gastro-clinic\`
    }]
  },
  parameters: {
    routerPath: \`\${patientHref}/messages/gastro-clinic\`
  }
}`,...m.parameters?.docs?.source},description:{story:`Patient message thread - three-level nesting: patient → Messages → thread.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    showSearch: true,
    showIcons: true,
    patientNav: [{
      label: patient.name,
      href: patientHref
    }, {
      label: "Messages",
      href: \`\${patientHref}/messages\`
    }, {
      label: "Dr Fenwick, Imogen",
      href: \`\${patientHref}/messages/gastro-clinic\`
    }]
  },
  parameters: {
    routerPath: \`\${patientHref}/messages/gastro-clinic\`
  }
}`,...h.parameters?.docs?.source},description:{story:`Patient message thread - three-level nesting: patient → Messages → thread.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as DarkMode,f as Default,m as PatientMessageThread,h as PatientMessageThreadWithSearch,p as WithSearch,_ as __namedExportsOrder,l as default};