import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./ModuleEnrolmentEditor-BScRCXcA.js";function a(e){let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(i,{...e,value:t,onChange:n})}var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o=t(),r(),s=n(),c=[{id:3,name:`East of England Endoscopy Training Academy`,modules:[{id:`colonoscopy-optical-diagnosis`,title:`Colonoscopy optical diagnosis`},{id:`chest-xray-interpretation`,title:`Chest X-ray interpretation`}]}],l={title:`Teaching/ModuleEnrolmentEditor`,tags:[`!dev`],component:i,render:e=>(0,s.jsx)(a,{...e}),args:{organisations:c,value:{3:{"colonoscopy-optical-diagnosis":null}},onChange:void 0,note:void 0}},u={},d={args:{value:{}}},f={args:{value:{3:{"colonoscopy-optical-diagnosis":`2027-10-05`}}}},p={args:{note:(e,t)=>t===`colonoscopy-optical-diagnosis`?`Cannot enter yet: no place at this centre.`:void 0}},m={args:{organisations:[...c,{id:7,name:`Respiratory Teaching Centre`,modules:[{id:`spirometry-basics`,title:`Spirometry basics`}]}]}},h={args:{disabled:!0}},g={globals:{colorScheme:`dark`}},_=[`Default`,`NothingTicked`,`WithAnEndDate`,`WithNotes`,`TwoOrganisations`,`Disabled`,`Dark`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source},description:{story:`One module ticked with no end, one not ticked.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: {}
  }
}`,...d.parameters?.docs?.source},description:{story:`Nothing ticked: no end date is offered until a module is.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      3: {
        "colonoscopy-optical-diagnosis": "2027-10-05"
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`An enrolment with an end date.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    note: (_organisationId, moduleId) => moduleId === "colonoscopy-optical-diagnosis" ? "Cannot enter yet: no place at this centre." : undefined
  }
}`,...p.parameters?.docs?.source},description:{story:`A line under a module, as the member page shows what is missing.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    organisations: [...organisations, {
      id: 7,
      name: "Respiratory Teaching Centre",
      modules: [{
        id: "spirometry-basics",
        title: "Spirometry basics"
      }]
    }]
  }
}`,...m.parameters?.docs?.source},description:{story:`Two organisations, a card for each.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source},description:{story:`Held still while a save is being sent.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    colorScheme: "dark"
  }
}`,...g.parameters?.docs?.source},description:{story:`In dark mode.`,...g.parameters?.docs?.description}}}})))()}v();export{g as Dark,u as Default,h as Disabled,d as NothingTicked,m as TwoOrganisations,f as WithAnEndDate,p as WithNotes,_ as __namedExportsOrder,l as default};