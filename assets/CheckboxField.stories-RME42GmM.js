import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Stack-D_d3SZwt.js";import{n as a,t as o}from"./CheckboxField-FbO59Hvh.js";import{a as s,n as c}from"./variants-US1Dcm7T.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),l=t(),a(),s(),u=n(),d={title:`Form/Checkbox field`,component:o,parameters:{layout:`padded`}},f=`I confirm that I have assessed this person against this competency, that the record above reflects what I observed or reviewed, and that I accept professional accountability for this judgement.`,p={args:{label:`I confirm this declaration`}},m={args:{label:`I confirm this declaration`,description:`The wording being agreed to belongs on screen, in full.`}},h={args:{label:`I confirm this declaration`,required:!0}},g={args:{label:`I confirm this declaration`,error:`You must confirm the declaration before signing`,required:!0}},_={args:{label:`I confirm this declaration`,checked:!0,disabled:!0}},v={render:function(){let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(i,{gap:`sm`,maw:`40rem`,children:[(0,u.jsx)(o,{label:`I confirm this declaration`,description:f,checked:e,onChange:e=>t(e.currentTarget.checked),required:!0}),(0,u.jsx)(c,{children:`Unticked by default and never pre-ticked: the deliberate act is the whole point, and the API refuses a sign-off without it. This is what NES Turas, Kaizen and the RCP ePortfolio do for workplace-based assessment - a drawn signature would look more official and prove less, since anyone can draw anyone’s name.`})]})}},y=[`Default`,`WithDescription`,`Required`,`WithError`,`Disabled`,`AsAnAttestation`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I confirm this declaration"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I confirm this declaration",
    description: "The wording being agreed to belongs on screen, in full."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I confirm this declaration",
    required: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I confirm this declaration",
    error: "You must confirm the declaration before signing",
    required: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I confirm this declaration",
    checked: true,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function AsAnAttestationStory() {
    const [confirmed, setConfirmed] = useState(false);
    return <Stack gap="sm" maw="40rem">
        <CheckboxField label="I confirm this declaration" description={DECLARATION} checked={confirmed} onChange={event => setConfirmed(event.currentTarget.checked)} required />
        <StoryNote>
          Unticked by default and never pre-ticked: the deliberate act is the
          whole point, and the API refuses a sign-off without it. This is what
          NES Turas, Kaizen and the RCP ePortfolio do for workplace-based
          assessment - a drawn signature would look more official and prove
          less, since anyone can draw anyone&rsquo;s name.
        </StoryNote>
      </Stack>;
  }
}`,...v.parameters?.docs?.source},description:{story:`How an assessor confirms a sign-off - the reason this component exists.`,...v.parameters?.docs?.description}}}})))()}b();export{v as AsAnAttestation,p as Default,_ as Disabled,h as Required,m as WithDescription,g as WithError,y as __namedExportsOrder,d as default};