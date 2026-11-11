import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Container-DJA6w9O_.js";import{t as i}from"./MainLayout-fD7qd5_7.js";import{n as a,t as o}from"./demoPatients-yuLmcz57.js";import{t as s}from"./PatientsList-BwwzClUB.js";import{n as c,t as l}from"./layouts-BiA8U9cw.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{c(),l(),a(),n(),u=t(),d={title:`Layouts/Patient list dark`,tags:[`!dev`],component:i,parameters:{layout:`fullscreen`},globals:{colorScheme:`dark`}},f={args:{patient:null,isLoading:!1},render:e=>(0,u.jsx)(i,{...e,children:(0,u.jsx)(r,{size:`lg`,py:`xl`,children:(0,u.jsx)(s,{patients:o})})})},p={args:{patient:null,isLoading:!1},render:e=>(0,u.jsx)(i,{...e,children:(0,u.jsx)(r,{size:`lg`,py:`xl`,children:(0,u.jsx)(s,{patients:[],fhirAvailable:!1})})})},m={args:{patient:null,isLoading:!1},render:e=>(0,u.jsx)(i,{...e,children:(0,u.jsx)(r,{size:`lg`,py:`xl`,children:(0,u.jsx)(s,{patients:[],fhirAvailable:!0})})})},h={args:{patient:null,isLoading:!1},render:e=>(0,u.jsx)(i,{...e,children:(0,u.jsx)(r,{size:`lg`,py:`xl`,children:(0,u.jsx)(s,{patients:[],isLoading:!0})})})},g=[`WithPatientList`,`DatabaseInitialising`,`NoPatients`,`PatientListLoading`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    patient: null,
    isLoading: false
  },
  render: args => <MainLayout {...args}>
      <Container size="lg" py="xl">
        <PatientsList patients={demoPatientsList} />
      </Container>
    </MainLayout>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    patient: null,
    isLoading: false
  },
  render: args => <MainLayout {...args}>
      <Container size="lg" py="xl">
        <PatientsList patients={[]} fhirAvailable={false} />
      </Container>
    </MainLayout>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    patient: null,
    isLoading: false
  },
  render: args => <MainLayout {...args}>
      <Container size="lg" py="xl">
        <PatientsList patients={[]} fhirAvailable={true} />
      </Container>
    </MainLayout>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    patient: null,
    isLoading: false
  },
  render: args => <MainLayout {...args}>
      <Container size="lg" py="xl">
        <PatientsList patients={[]} isLoading={true} />
      </Container>
    </MainLayout>
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as DatabaseInitialising,m as NoPatients,h as PatientListLoading,f as WithPatientList,g as __namedExportsOrder,d as default};