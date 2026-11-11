import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{n as i,t as a}from"./Demographics-C2rlnKUb.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o=t(),s={title:`Demographics/Demographics`,component:a,parameters:{layout:`padded`}},c={id:`1`,name:`John Smith`,givenName:`John`,familyName:`Smith`,dob:`1985-03-15`,age:38,sex:`Male`,nationalNumber:`1234567890`,nationalNumberSystem:`https://fhir.nhs.uk/Id/nhs-number`},l={args:{patient:c}},u={args:{patient:{id:`5`,name:`Alexander Christopher Montgomery-Wellington III`,dob:`1965-12-25`,age:60,sex:`Male`,nationalNumber:`1111222233`,nationalNumberSystem:`http://example.org/national-health-id`}}},d={args:{isLoading:!0}},f={args:{patient:c},globals:{colorScheme:`dark`},render:()=>(0,o.jsxs)(r,{gap:`xl`,children:[(0,o.jsx)(a,{patient:c}),(0,o.jsx)(a,{isLoading:!0})]})},p=[`Default`,`LongName`,`Loading`,`DarkMode`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    patient: basePatient
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    patient: {
      id: "5",
      name: "Alexander Christopher Montgomery-Wellington III",
      dob: "1965-12-25",
      age: 60,
      sex: "Male",
      nationalNumber: "1111222233",
      nationalNumberSystem: "http://example.org/national-health-id"
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    patient: basePatient
  },
  globals: {
    colorScheme: "dark"
  },
  render: () => <Stack gap="xl">
      <Demographics patient={basePatient} />
      <Demographics isLoading />
    </Stack>
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as DarkMode,l as Default,d as Loading,u as LongName,p as __namedExportsOrder,s as default};