import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./BaseCard-C_VuKVYL.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{n as o,t as s}from"./SelectField-CfDE1WBv.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),n(),o(),c=t(),l={title:`Form/Select field`,component:s,parameters:{layout:`padded`}},u=[{group:`Oncology`,items:[{value:`prescribe_sact`,label:`Prescribe SACT`},{value:`assess_sact_toxicity`,label:`Assess SACT toxicity`}]},{group:`Others`,items:[{value:`take_informed_consent`,label:`Take informed consent`},{value:`request_plain_xray`,label:`Request plain X-rays`}]}],d={args:{label:`Patient`,placeholder:`Select a patient`,data:[{value:`1`,label:`James Green`},{value:`2`,label:`Sarah Mitchell`},{value:`3`,label:`Robert Chen`}]}},f={args:{label:`Priority`,description:`Urgent cases are reviewed within 24 hours`,placeholder:`Select priority`,data:[`Low`,`Medium`,`High`,`Urgent`]}},p={args:{label:`Patient`,placeholder:`Search patients…`,data:[{value:`1`,label:`James Green`},{value:`2`,label:`Sarah Mitchell`},{value:`3`,label:`Robert Chen`}],searchable:!0}},m={args:{label:`Priority`,placeholder:`Select priority`,data:[`Low`,`Medium`,`High`,`Urgent`],required:!0}},h={args:{label:`Status`,value:`Active`,data:[`Active`,`Inactive`],disabled:!0}},g={args:{label:`Priority`,placeholder:`Select priority`,data:[`Low`,`Medium`,`High`,`Urgent`],error:`Please select a priority level`}},_={...f,globals:{colorScheme:`dark`},render:e=>(0,c.jsxs)(a,{gap:`xl`,children:[(0,c.jsx)(r,{children:(0,c.jsx)(s,{...e,required:!0})}),(0,c.jsx)(s,{...e,required:!0}),(0,c.jsx)(r,{children:(0,c.jsx)(s,{label:`Priority - disabled`,value:`High`,data:[`Low`,`Medium`,`High`,`Urgent`],disabled:!0})}),(0,c.jsx)(r,{children:(0,c.jsx)(s,{label:`Priority - error`,placeholder:`Select priority`,data:[`Low`,`Medium`,`High`,`Urgent`],error:`Please select a priority level`})})]})},v={args:{label:`Competency`,placeholder:`Search competencies`,data:u,defaultDropdownOpened:!0,maxDropdownHeight:400}},y={...v,globals:{colorScheme:`dark`}},b=[`Default`,`WithDescription`,`Searchable`,`Required`,`Disabled`,`WithError`,`DarkMode`,`Grouped`,`GroupedDarkMode`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Patient",
    placeholder: "Select a patient",
    data: [{
      value: "1",
      label: "James Green"
    }, {
      value: "2",
      label: "Sarah Mitchell"
    }, {
      value: "3",
      label: "Robert Chen"
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Priority",
    description: "Urgent cases are reviewed within 24 hours",
    placeholder: "Select priority",
    data: ["Low", "Medium", "High", "Urgent"]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Patient",
    placeholder: "Search patients…",
    data: [{
      value: "1",
      label: "James Green"
    }, {
      value: "2",
      label: "Sarah Mitchell"
    }, {
      value: "3",
      label: "Robert Chen"
    }],
    searchable: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Priority",
    placeholder: "Select priority",
    data: ["Low", "Medium", "High", "Urgent"],
    required: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Status",
    value: "Active",
    data: ["Active", "Inactive"],
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Priority",
    placeholder: "Select priority",
    data: ["Low", "Medium", "High", "Urgent"],
    error: "Please select a priority level"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...WithDescription,
  globals: {
    colorScheme: "dark"
  },
  render: args => <Stack gap="xl">
      <BaseCard>
        <SelectField {...args} required />
      </BaseCard>
      <SelectField {...args} required />
      <BaseCard>
        <SelectField label="Priority - disabled" value="High" data={["Low", "Medium", "High", "Urgent"]} disabled />
      </BaseCard>
      <BaseCard>
        <SelectField label="Priority - error" placeholder="Select priority" data={["Low", "Medium", "High", "Urgent"]} error="Please select a priority level" />
      </BaseCard>
    </Stack>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Competency",
    placeholder: "Search competencies",
    data: groupedData,
    defaultDropdownOpened: true,
    // Tall enough to show every group without scrolling. At Mantine's
    // default 250px the list scrolls, and axe flags a scroll region with
    // no focusable content (scrollable-region-focusable), though the
    // arrow keys drive it through the combobox.
    maxDropdownHeight: 400
  }
}`,...v.parameters?.docs?.source},description:{story:`Groups, with the dropdown open: each heading is a divider, centred and
navy between two rules at the options' own size, so it cannot be
mistaken for an option.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Grouped,
  globals: {
    colorScheme: "dark"
  }
}`,...y.parameters?.docs?.source},description:{story:`The same in dark mode, where the heading turns pale navy.`,...y.parameters?.docs?.description}}}})))()}x();export{_ as DarkMode,d as Default,h as Disabled,v as Grouped,y as GroupedDarkMode,m as Required,p as Searchable,f as WithDescription,g as WithError,b as __namedExportsOrder,l as default};