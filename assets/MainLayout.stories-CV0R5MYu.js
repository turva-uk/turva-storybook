import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{a as n,n as r}from"./variants-US1Dcm7T.js";import{n as i,t as a}from"./MainLayout-fD7qd5_7.js";import{n as o,t as s}from"./demoPatients-yuLmcz57.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),n(),i(),c=t(),l=()=>(0,c.jsx)(r,{children:`Desktop content area.`}),u={title:`Layouts/Main layout`,component:a,parameters:{layout:`fullscreen`},render:e=>(0,c.jsx)(a,{...e,children:(0,c.jsx)(l,{})})},d={args:{patient:null,isLoading:!1}},f={tags:[`!dev`],args:{patient:s[0],isLoading:!1,patientNav:[{label:s[0].name,href:`/patients/${s[0].id}`}]}},p={...d,globals:{colorScheme:`dark`}},m=[`NoPatient`,`WithPatient`,`DarkMode`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    patient: null,
    isLoading: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  // Hidden from the sidebar locally and on the published Storybook:
  // patients are not part of Turva. Still run by \`just sbt\`.
  tags: ["!dev"],
  args: {
    patient: demoPatientsList[0],
    isLoading: false,
    patientNav: [{
      label: demoPatientsList[0].name,
      href: \`/patients/\${demoPatientsList[0].id}\`
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...NoPatient,
  globals: {
    colorScheme: "dark"
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as DarkMode,d as NoPatient,f as WithPatient,m as __namedExportsOrder,u as default};