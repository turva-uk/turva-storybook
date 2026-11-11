import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./BaseCard-C_VuKVYL.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{n as o,t as s}from"./TextAreaField-DDxRyQwA.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),n(),o(),c=t(),l={title:`Form/Text area field`,component:s,parameters:{layout:`padded`}},u={args:{label:`Message`,placeholder:`Type your message…`,minRows:3}},d={args:{label:`Clinical notes`,description:`Include relevant history and examination findings`,placeholder:`Type your notes…`,minRows:3}},f={args:{label:`Message`,value:`Dear Dr Fenwick, thank you for seeing this patient. They have been experiencing intermittent symptoms over the past three weeks.`,minRows:3}},p={args:{label:`Notes`,placeholder:`Add clinical notes…`,autosize:!0,minRows:3,value:`Patient attended for routine follow-up appointment. Reports intermittent headaches over the past three weeks, predominantly in the frontal region, occurring two to three times per week. Pain is described as a dull ache, rated 4/10 in severity, lasting approximately two to three hours each episode. No associated nausea, vomiting, visual disturbance, or photophobia.

On examination, blood pressure was 128/82 mmHg, pulse 72 bpm regular. Neurological examination was unremarkable with no focal deficits. Fundoscopy showed normal optic discs bilaterally.

Plan: Advised to maintain a headache diary for the next four weeks. Recommended adequate hydration and regular sleep pattern. Paracetamol 1g as required for symptomatic relief, no more than four times daily. Review in four weeks with headache diary. Consider referral to neurology if symptoms persist or worsen.`}},m={args:{label:`Reason for referral`,placeholder:`Describe the reason for this referral`,required:!0,minRows:4}},h={args:{label:`Previous notes`,value:`Patient presented with mild symptoms. Follow-up in two weeks.`,disabled:!0,minRows:3}},g={args:{label:`Clinical notes`,value:``,placeholder:`Type your notes…`,minRows:3,error:`Clinical notes are required before submitting`}},_={...d,globals:{colorScheme:`dark`},render:e=>(0,c.jsxs)(a,{gap:`xl`,children:[(0,c.jsx)(r,{children:(0,c.jsx)(s,{...e,required:!0})}),(0,c.jsx)(s,{...e,required:!0}),(0,c.jsx)(r,{children:(0,c.jsx)(s,{label:`Clinical notes - disabled`,value:`Patient presented with mild symptoms. Follow-up in two weeks.`,disabled:!0,minRows:3})}),(0,c.jsx)(r,{children:(0,c.jsx)(s,{label:`Clinical notes - error`,placeholder:`Type your notes\\u2026`,minRows:3,error:`Clinical notes are required before submitting`})})]})},v=[`Default`,`WithDescription`,`WithValue`,`Autosize`,`Required`,`Disabled`,`WithError`,`DarkMode`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message…",
    minRows: 3
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Clinical notes",
    description: "Include relevant history and examination findings",
    placeholder: "Type your notes…",
    minRows: 3
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    value: "Dear Dr Fenwick, thank you for seeing this patient. They have been experiencing intermittent symptoms over the past three weeks.",
    minRows: 3
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Notes",
    placeholder: "Add clinical notes…",
    autosize: true,
    minRows: 3,
    value: "Patient attended for routine follow-up appointment. Reports intermittent headaches over the past three weeks, predominantly in the frontal region, occurring two to three times per week. Pain is described as a dull ache, rated 4/10 in severity, lasting approximately two to three hours each episode. No associated nausea, vomiting, visual disturbance, or photophobia.\\n\\nOn examination, blood pressure was 128/82 mmHg, pulse 72 bpm regular. Neurological examination was unremarkable with no focal deficits. Fundoscopy showed normal optic discs bilaterally.\\n\\nPlan: Advised to maintain a headache diary for the next four weeks. Recommended adequate hydration and regular sleep pattern. Paracetamol 1g as required for symptomatic relief, no more than four times daily. Review in four weeks with headache diary. Consider referral to neurology if symptoms persist or worsen."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Reason for referral",
    placeholder: "Describe the reason for this referral",
    required: true,
    minRows: 4
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Previous notes",
    value: "Patient presented with mild symptoms. Follow-up in two weeks.",
    disabled: true,
    minRows: 3
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Clinical notes",
    value: "",
    placeholder: "Type your notes…",
    minRows: 3,
    error: "Clinical notes are required before submitting"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...WithDescription,
  globals: {
    colorScheme: "dark"
  },
  render: args => <Stack gap="xl">
      <BaseCard>
        <TextAreaField {...args} required />
      </BaseCard>
      <TextAreaField {...args} required />
      <BaseCard>
        <TextAreaField label="Clinical notes - disabled" value="Patient presented with mild symptoms. Follow-up in two weeks." disabled minRows={3} />
      </BaseCard>
      <BaseCard>
        <TextAreaField label="Clinical notes - error" placeholder="Type your notes\\u2026" minRows={3} error="Clinical notes are required before submitting" />
      </BaseCard>
    </Stack>
}`,..._.parameters?.docs?.source}}}})))()}y();export{p as Autosize,_ as DarkMode,u as Default,h as Disabled,m as Required,d as WithDescription,g as WithError,f as WithValue,v as __namedExportsOrder,l as default};