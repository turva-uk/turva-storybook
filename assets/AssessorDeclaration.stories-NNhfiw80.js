import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{n as i,t as a}from"./CheckboxField-FbO59Hvh.js";import{a as o,n as s}from"./variants-US1Dcm7T.js";import{n as c,t as l}from"./AssessorDeclaration-bnUovL1H.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),c(),i(),o(),u=t(),d={title:`Passport/Assessor declaration`,tags:[`!dev`],component:l,parameters:{layout:`padded`}},f={},p={render:()=>(0,u.jsxs)(r,{gap:`sm`,children:[(0,u.jsx)(l,{}),(0,u.jsx)(s,{children:`The wording is fixed and cannot be passed in. Signing asks for no step-up authentication - what makes it deliberate is that somebody reads this statement and puts their name to it, which is what a wet signature has always been. The confirming checkbox belongs to the form that submits it, not to this component.`})]})},m={render:()=>(0,u.jsx)(l,{children:(0,u.jsx)(a,{label:`I confirm this declaration`,checked:!1,onChange:()=>{},required:!0})})},h=[`Default`,`WithContext`,`WithConfirmation`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="sm">
      <AssessorDeclaration />
      <StoryNote>
        The wording is fixed and cannot be passed in. Signing asks for no
        step-up authentication - what makes it deliberate is that somebody reads
        this statement and puts their name to it, which is what a wet signature
        has always been. The confirming checkbox belongs to the form that
        submits it, not to this component.
      </StoryNote>
    </Stack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <AssessorDeclaration>
      <CheckboxField label="I confirm this declaration" checked={false} onChange={() => {}} required />
    </AssessorDeclaration>
}`,...m.parameters?.docs?.source},description:{story:`With the confirmation inside it, as the sign-off form shows it. The
control is passed in rather than built here, because the same words
are also shown where no signing happens.`,...m.parameters?.docs?.description}}}})))()}g();export{f as Default,m as WithConfirmation,p as WithContext,h as __namedExportsOrder,d as default};