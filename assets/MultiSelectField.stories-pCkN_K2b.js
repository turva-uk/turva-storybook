import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./MultiSelectField-Dn62m3xs.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{o(),i(),n(),c=t(),l={title:`Form/Multi select field`,component:r,parameters:{layout:`padded`}},u=[{group:`Oncology`,items:[{value:`prescribe_sact`,label:`Prescribe SACT`},{value:`assess_sact_toxicity`,label:`Assess SACT toxicity`}]},{group:`Others`,items:[{value:`take_informed_consent`,label:`Take informed consent`},{value:`request_plain_xray`,label:`Request plain X-rays`}]}],d=[{value:`1`,label:`Dr Fenwick`},{value:`2`,label:`Nurse Adams`},{value:`3`,label:`Dr Patel`},{value:`4`,label:`Dr Okonkwo`},{value:`5`,label:`Nurse Williams`},{value:`6`,label:`Dr Chen`},{value:`7`,label:`Dr Fernandez`},{value:`8`,label:`Nurse Taylor`},{value:`9`,label:`Dr Nowak`},{value:`10`,label:`Nurse Brown`},{value:`11`,label:`Dr Singh`},{value:`12`,label:`Nurse O'Brien`},{value:`13`,label:`Dr Takahashi`},{value:`14`,label:`Nurse Clarke`},{value:`15`,label:`Dr Abrams`},{value:`16`,label:`Nurse Kowalski`},{value:`17`,label:`Dr Mensah`},{value:`18`,label:`Nurse Reid`},{value:`19`,label:`Dr Johansson`},{value:`20`,label:`Nurse Kapoor`}],f={args:{label:`Participants`,placeholder:`Add staff to this conversation`,data:d}},p={args:{label:`Participants`,description:`Select staff members to include in this conversation`,placeholder:`Add staff to this conversation`,data:d}},m={args:{label:`Participants`,placeholder:`Add staff to this conversation`,data:d,required:!0}},h={args:{label:`Participants`,placeholder:`Search staff…`,data:d,searchable:!0}},g=[{value:`1`,label:`Dr Li`},{value:`2`,label:`Nurse Adams`},{value:`3`,label:`Dr Alexander Richardson-Pemberton`},{value:`4`,label:`Dr Wu`},{value:`5`,label:`Nurse Jacqueline Worthington-Smythe`},{value:`6`,label:`Dr Fernandez`},{value:`7`,label:`Nurse K`},{value:`8`,label:`Dr Christopher Montgomery-Hamilton`},{value:`9`,label:`Dr Ay`},{value:`10`,label:`Nurse Patricia Elizabeth Okonkwo-Robertson`},{value:`11`,label:`Dr Patel`},{value:`12`,label:`Nurse Brown`},{value:`13`,label:`Dr Bartholomew Henderson-Warner`},{value:`14`,label:`Dr Jo`},{value:`15`,label:`Nurse Williams`}],_={args:{label:`Participants`,placeholder:`Add staff to this conversation`,data:g,defaultValue:g.map(e=>e.value)}},v={args:{label:`Participants`,data:[{value:`1`,label:`Dr Fenwick`},{value:`2`,label:`Nurse Adams`},{value:`3`,label:`Dr Patel`}],value:[`1`,`2`,`3`],disabled:!0}},y={args:{label:`Participants`,placeholder:`Add staff to this conversation`,data:d,error:`At least one participant is required`}},b={...p,globals:{colorScheme:`dark`},render:e=>(0,c.jsxs)(s,{gap:`xl`,children:[(0,c.jsx)(a,{children:(0,c.jsx)(r,{...e,required:!0})}),(0,c.jsx)(r,{...e,required:!0}),(0,c.jsx)(a,{children:(0,c.jsx)(r,{label:`Participants - disabled`,data:[{value:`1`,label:`Dr Fenwick`},{value:`2`,label:`Nurse Adams`},{value:`3`,label:`Dr Patel`}],value:[`1`,`2`,`3`],disabled:!0})}),(0,c.jsx)(a,{children:(0,c.jsx)(r,{label:`Participants - error`,placeholder:`Add staff to this conversation`,data:d,error:`At least one participant is required`})})]})},x={args:{label:`Competency`,placeholder:`Search competencies`,data:u,defaultDropdownOpened:!0,maxDropdownHeight:400}},S={...x,globals:{colorScheme:`dark`}},C=[`Default`,`WithDescription`,`Required`,`Searchable`,`ManySelected`,`Disabled`,`WithError`,`DarkMode`,`Grouped`,`GroupedDarkMode`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Participants",
    placeholder: "Add staff to this conversation",
    data: staffData
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Participants",
    description: "Select staff members to include in this conversation",
    placeholder: "Add staff to this conversation",
    data: staffData
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Participants",
    placeholder: "Add staff to this conversation",
    data: staffData,
    required: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Participants",
    placeholder: "Search staff…",
    data: staffData,
    searchable: true
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Participants",
    placeholder: "Add staff to this conversation",
    data: mixedLengthData,
    defaultValue: mixedLengthData.map(s => s.value)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Participants",
    data: [{
      value: "1",
      label: "Dr Fenwick"
    }, {
      value: "2",
      label: "Nurse Adams"
    }, {
      value: "3",
      label: "Dr Patel"
    }],
    value: ["1", "2", "3"],
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Participants",
    placeholder: "Add staff to this conversation",
    data: staffData,
    error: "At least one participant is required"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...WithDescription,
  globals: {
    colorScheme: "dark"
  },
  render: args => <Stack gap="xl">
      <BaseCard>
        <MultiSelectField {...args} required />
      </BaseCard>
      <MultiSelectField {...args} required />
      <BaseCard>
        <MultiSelectField label="Participants - disabled" data={[{
        value: "1",
        label: "Dr Fenwick"
      }, {
        value: "2",
        label: "Nurse Adams"
      }, {
        value: "3",
        label: "Dr Patel"
      }]} value={["1", "2", "3"]} disabled />
      </BaseCard>
      <BaseCard>
        <MultiSelectField label="Participants - error" placeholder="Add staff to this conversation" data={staffData} error="At least one participant is required" />
      </BaseCard>
    </Stack>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Groups, with the dropdown open: each heading is a divider, centred and
navy between two rules at the options' own size, so it cannot be
mistaken for an option.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Grouped,
  globals: {
    colorScheme: "dark"
  }
}`,...S.parameters?.docs?.source},description:{story:`The same in dark mode, where the heading turns pale navy.`,...S.parameters?.docs?.description}}}})))()}w();export{b as DarkMode,f as Default,v as Disabled,x as Grouped,S as GroupedDarkMode,_ as ManySelected,m as Required,h as Searchable,p as WithDescription,y as WithError,C as __namedExportsOrder,l as default};