import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{n as i,t as a}from"./SolidSwitch-B5z1COCw.js";import{Z as o,n as s}from"./appIcons-BpiHpu4d.js";import{n as c,t as l}from"./ActionCard-DZ7xcBoc.js";import{a as u,i as d,r as f}from"./variants-US1Dcm7T.js";var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),u(),s(),c(),i(),p=t(),m={title:`Form/Solid switch`,component:a,parameters:{layout:`padded`},argTypes:{checked:{control:`boolean`,description:`Whether the switch is on`},label:{control:`text`,description:`Label above the switch`},description:{control:`text`,description:`Helper text below the switch`},disabled:{control:`boolean`,description:`Whether the switch is disabled`},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`],description:`Switch size`}}},h={args:{label:`Enable feature`}},g={args:{label:`Patient as participant`,description:`Allow the patient to reply to this conversation`}},_={render:()=>(0,p.jsxs)(d,{children:[(0,p.jsx)(f,{label:`Disabled off`,children:(0,p.jsx)(a,{label:`Disabled`,disabled:!0})}),(0,p.jsx)(f,{label:`Disabled on`,children:(0,p.jsx)(a,{label:`Disabled`,disabled:!0,checked:!0})})]})},v={render:()=>(0,p.jsx)(d,{children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,p.jsxs)(f,{label:e===`md`?`md (desktop default)`:e===`xl`?`xl (phone default, 44px tap target)`:e,children:[(0,p.jsx)(a,{label:`Toggle`,size:e}),(0,p.jsx)(a,{label:`Toggle`,size:e,checked:!0})]},e))})},y={args:{label:`Accept terms`,error:`You must accept the terms to continue`}},b={render:()=>(0,p.jsxs)(r,{gap:`xl`,children:[(0,p.jsx)(l,{icon:(0,p.jsx)(o,{}),title:`Dark mode`,subtitle:`Switch between light and dark themes`,action:(0,p.jsx)(a,{label:`Enable dark mode`,description:`Toggle the colour scheme`})}),(0,p.jsx)(a,{label:`Enable dark mode`,description:`Toggle the colour scheme`})]}),globals:{colorScheme:`dark`}},x=[`Default`,`WithDescription`,`Disabled`,`AllSizes`,`WithError`,`DarkMode`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Enable feature"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Patient as participant",
    description: "Allow the patient to reply to this conversation"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="Disabled off">
        <SolidSwitch label="Disabled" disabled />
      </VariantRow>
      <VariantRow label="Disabled on">
        <SolidSwitch label="Disabled" disabled checked />
      </VariantRow>
    </VariantStack>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <VariantRow key={size} label={size === "md" ? "md (desktop default)" : size === "xl" ? "xl (phone default, 44px tap target)" : size}>
          <SolidSwitch label="Toggle" size={size} />
          <SolidSwitch label="Toggle" size={size} checked />
        </VariantRow>)}
    </VariantStack>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept terms",
    error: "You must accept the terms to continue"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="xl">
      <ActionCard icon={<IconMoon />} title="Dark mode" subtitle="Switch between light and dark themes" action={<SolidSwitch label="Enable dark mode" description="Toggle the colour scheme" />} />
      <SolidSwitch label="Enable dark mode" description="Toggle the colour scheme" />
    </Stack>,
  globals: {
    colorScheme: "dark"
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{v as AllSizes,b as DarkMode,h as Default,_ as Disabled,g as WithDescription,y as WithError,x as __namedExportsOrder,m as default};