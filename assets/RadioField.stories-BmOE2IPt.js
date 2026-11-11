import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./BaseCard-C_VuKVYL.js";import{n as a,t as o}from"./RadioField-DfsmsToJ.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l=t(),s(),r(),a(),u=n(),d=[{value:`a`,label:`Option A - first choice`},{value:`b`,label:`Option B - second choice`},{value:`c`,label:`Option C - third choice`},{value:`d`,label:`Option D -  fourth choice`}],f={title:`Form/Radio field`,component:o,parameters:{layout:`padded`}},p={render:()=>{let[e,t]=(0,l.useState)(`b`);return(0,u.jsx)(o,{label:`Select an answer`,options:d,value:e,onChange:t})}},m={render:()=>{let[e,t]=(0,l.useState)(null);return(0,u.jsx)(o,{label:`Preferred contact method`,description:`Choose how you would like to be contacted`,options:[{value:`email`,label:`Email`},{value:`phone`,label:`Phone`},{value:`post`,label:`Post`}],value:e,onChange:t})}},h={render:()=>{let[e,t]=(0,l.useState)(null);return(0,u.jsx)(o,{label:`Select an answer`,options:d,value:e,onChange:t,required:!0})}},g={args:{label:`Select an answer`,options:d,value:`c`,onChange:()=>{},disabled:!0}},_={render:()=>{let[e,t]=(0,l.useState)(null);return(0,u.jsx)(o,{label:`Select an answer`,options:d,value:e,onChange:t,error:`Please select an option to continue`})}},v={globals:{colorScheme:`dark`},render:()=>{let[e,t]=(0,l.useState)(`b`),[n,r]=(0,l.useState)(`a`),[a,s]=(0,l.useState)(null);return(0,u.jsxs)(c,{gap:`xl`,children:[(0,u.jsx)(i,{children:(0,u.jsx)(o,{label:`Select an answer`,description:`Choose the most appropriate option`,options:d,value:e,onChange:t,required:!0})}),(0,u.jsx)(o,{label:`Select an answer`,description:`Choose the most appropriate option`,options:d,value:n,onChange:r,required:!0}),(0,u.jsx)(i,{children:(0,u.jsx)(o,{label:`Select an answer - disabled`,options:d,value:`c`,onChange:()=>{},disabled:!0})}),(0,u.jsx)(i,{children:(0,u.jsx)(o,{label:`Select an answer - error`,options:d,value:a,onChange:s,error:`Please select an option to continue`})})]})}},y=[`Default`,`WithDescription`,`Required`,`Disabled`,`WithError`,`DarkMode`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>("b");
    return <RadioField label="Select an answer" options={sampleOptions} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <RadioField label="Preferred contact method" description="Choose how you would like to be contacted" options={[{
      value: "email",
      label: "Email"
    }, {
      value: "phone",
      label: "Phone"
    }, {
      value: "post",
      label: "Post"
    }]} value={value} onChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <RadioField label="Select an answer" options={sampleOptions} value={value} onChange={setValue} required />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select an answer",
    options: sampleOptions,
    value: "c",
    onChange: () => {},
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <RadioField label="Select an answer" options={sampleOptions} value={value} onChange={setValue} error="Please select an option to continue" />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  globals: {
    colorScheme: "dark"
  },
  render: () => {
    const [value1, setValue1] = useState<string | null>("b");
    const [value2, setValue2] = useState<string | null>("a");
    const [value3, setValue3] = useState<string | null>(null);
    return <Stack gap="xl">
        <BaseCard>
          <RadioField label="Select an answer" description="Choose the most appropriate option" options={sampleOptions} value={value1} onChange={setValue1} required />
        </BaseCard>
        <RadioField label="Select an answer" description="Choose the most appropriate option" options={sampleOptions} value={value2} onChange={setValue2} required />
        <BaseCard>
          <RadioField label="Select an answer - disabled" options={sampleOptions} value="c" onChange={() => {}} disabled />
        </BaseCard>
        <BaseCard>
          <RadioField label="Select an answer - error" options={sampleOptions} value={value3} onChange={setValue3} error="Please select an option to continue" />
        </BaseCard>
      </Stack>;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as DarkMode,p as Default,g as Disabled,h as Required,m as WithDescription,_ as WithError,y as __namedExportsOrder,f as default};