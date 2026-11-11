import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{A as n,j as r}from"./Form-BQWpUpVW.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./Stack-D_d3SZwt.js";import{Cn as s,wn as c}from"./appIcons-BpiHpu4d.js";import{n as l,t as u}from"./ButtonPair-C-HV7e6O.js";import{n as d,t as f}from"./SelectField-CfDE1WBv.js";import{a as p,n as m}from"./variants-US1Dcm7T.js";var h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{c(),h=t(),a(),r(),p(),l(),d(),g=i(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Confirm modal/Confirm modal`,component:n,parameters:{layout:`padded`},args:{opened:!0,onClose:_(),onAccept:_()}},y={args:{title:`Delete patient record`,icon:(0,g.jsx)(s,{}),acceptLabel:`Delete`,submittingLabel:`Deleting…`,children:`This will permanently delete the patient record. This action cannot be undone.`}},b={args:{title:`Remove member`,acceptLabel:`Remove`,children:`Are you sure you want to remove this member? This action cannot be undone.`}},x={args:{icon:(0,g.jsx)(s,{}),acceptLabel:`Leave`,cancelLabel:`Stay`,children:`You have unsaved changes that will be lost.`}},S={args:{opened:!1},render:function(){let[e,t]=(0,h.useState)(!1),[r,i]=(0,h.useState)(`bka`),[a,c]=(0,h.useState)(`left`);return(0,g.jsxs)(o,{children:[(0,g.jsx)(m,{children:`Press Submit to see the confirmation modal.`}),(0,g.jsx)(f,{label:`Procedure`,placeholder:`Select procedure`,required:!0,value:r,onChange:i,data:[{value:`tka`,label:`Total knee arthroplasty`},{value:`uka`,label:`Unicompartmental knee arthroplasty`},{value:`aka`,label:`Above-knee amputation`},{value:`bka`,label:`Below-knee amputation`}]}),(0,g.jsx)(f,{label:`Laterality`,placeholder:`Select side`,required:!0,value:a,onChange:c,data:[{value:`left`,label:`Left`},{value:`right`,label:`Right`}]}),(0,g.jsx)(u,{acceptLabel:`Submit`,onAccept:()=>t(!0),onCancel:()=>{}}),(0,g.jsxs)(n,{opened:e,onClose:()=>t(!1),onAccept:async()=>{await new Promise(e=>setTimeout(e,1500))},title:`Confirm procedure booking`,acceptLabel:`Confirm booking`,submittingLabel:`Booking…`,icon:(0,g.jsx)(s,{}),children:[`Booking`,` `,(0,g.jsxs)(`strong`,{children:[(0,g.jsx)(`span`,{style:{color:`var(--alert-color)`},children:a?.toUpperCase()}),` `,r?{tka:`Total knee arthroplasty`,uka:`Unicompartmental knee arthroplasty`,aka:`Above-knee amputation`,bka:`Below-knee amputation`}[r]:``]}),`. Confirm?`]})]})}},C={...y,globals:{colorScheme:`dark`}},w=[`Default`,`TitleOnly`,`IconOnly`,`Interactive`,`DarkMode`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Delete patient record",
    icon: <IconAlertTriangle />,
    acceptLabel: "Delete",
    submittingLabel: "Deleting…",
    children: "This will permanently delete the patient record. This action cannot be undone."
  }
}`,...y.parameters?.docs?.source},description:{story:`Default - modal with icon, title, and message`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Remove member",
    acceptLabel: "Remove",
    children: "Are you sure you want to remove this member? This action cannot be undone."
  }
}`,...b.parameters?.docs?.source},description:{story:`Title and message only (no icon)`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconAlertTriangle />,
    acceptLabel: "Leave",
    cancelLabel: "Stay",
    children: "You have unsaved changes that will be lost."
  }
}`,...x.parameters?.docs?.source},description:{story:`Icon and message only (no title)`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false
  },
  render: function InteractiveDemo() {
    const [opened, setOpened] = useState(false);
    const [procedure, setProcedure] = useState<string | null>("bka");
    const [side, setSide] = useState<string | null>("left");
    const procedureLabels: Record<string, string> = {
      tka: "Total knee arthroplasty",
      uka: "Unicompartmental knee arthroplasty",
      aka: "Above-knee amputation",
      bka: "Below-knee amputation"
    };
    const handleAccept = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
    };
    return <Stack>
        <StoryNote>Press Submit to see the confirmation modal.</StoryNote>
        <SelectField label="Procedure" placeholder="Select procedure" required value={procedure} onChange={setProcedure} data={[{
        value: "tka",
        label: "Total knee arthroplasty"
      }, {
        value: "uka",
        label: "Unicompartmental knee arthroplasty"
      }, {
        value: "aka",
        label: "Above-knee amputation"
      }, {
        value: "bka",
        label: "Below-knee amputation"
      }]} />
        <SelectField label="Laterality" placeholder="Select side" required value={side} onChange={setSide} data={[{
        value: "left",
        label: "Left"
      }, {
        value: "right",
        label: "Right"
      }]} />
        <ButtonPair acceptLabel="Submit" onAccept={() => setOpened(true)} onCancel={() => {}} />
        <ConfirmModal opened={opened} onClose={() => setOpened(false)} onAccept={handleAccept} title="Confirm procedure booking" acceptLabel="Confirm booking" submittingLabel="Booking…" icon={<IconAlertTriangle />}>
          Booking{" "}
          <strong>
            <span style={{
            color: "var(--alert-color)"
          }}>
              {side?.toUpperCase()}
            </span>{" "}
            {procedure ? procedureLabels[procedure] : ""}
          </strong>
          . Confirm?
        </ConfirmModal>
      </Stack>;
  }
}`,...S.parameters?.docs?.source},description:{story:`Interactive demo - click the trigger button to open, confirm to close`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...C.parameters?.docs?.source},description:{story:`Dark mode variant`,...C.parameters?.docs?.description}}}})))()}T();export{C as DarkMode,y as Default,x as IconOnly,S as Interactive,b as TitleOnly,w as __namedExportsOrder,v as default};