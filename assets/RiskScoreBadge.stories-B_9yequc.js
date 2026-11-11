import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{a as n,i as r,r as i}from"./variants-US1Dcm7T.js";import{d as a,f as o}from"./safetyFile-BP682nbe.js";import{n as s,t as c}from"./RiskScoreBadge-CT8fmrLD.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s(),n(),o(),l=t(),u={title:`Safety/Risk score badge`,component:c,parameters:{layout:`padded`}},d={args:{assessment:a(4,3)}},f={render:()=>(0,l.jsxs)(r,{children:[(0,l.jsxs)(i,{label:`1 and 2: acceptable`,children:[(0,l.jsx)(c,{assessment:a(1,1)}),(0,l.jsx)(c,{assessment:a(4,1)})]}),(0,l.jsx)(i,{label:`3: undesirable`,children:(0,l.jsx)(c,{assessment:a(3,3)})}),(0,l.jsxs)(i,{label:`4 and 5: reduce before go-live`,children:[(0,l.jsx)(c,{assessment:a(4,3)}),(0,l.jsx)(c,{assessment:a(5,5)})]})]})},p={render:()=>(0,l.jsx)(r,{children:(0,l.jsxs)(i,{label:`Compact: 1, 3 and 5`,children:[(0,l.jsx)(c,{assessment:a(1,1),compact:!0}),(0,l.jsx)(c,{assessment:a(3,3),compact:!0}),(0,l.jsx)(c,{assessment:a(5,5),compact:!0})]})})},m={...f,globals:{colorScheme:`dark`}},h={...p,globals:{colorScheme:`dark`}},g=[`Default`,`AllLevels`,`Compact`,`DarkMode`,`CompactDarkMode`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    assessment: assessment(4, 3)
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="1 and 2: acceptable">
        <RiskScoreBadge assessment={assessment(1, 1)} />
        <RiskScoreBadge assessment={assessment(4, 1)} />
      </VariantRow>
      <VariantRow label="3: undesirable">
        <RiskScoreBadge assessment={assessment(3, 3)} />
      </VariantRow>
      <VariantRow label="4 and 5: reduce before go-live">
        <RiskScoreBadge assessment={assessment(4, 3)} />
        <RiskScoreBadge assessment={assessment(5, 5)} />
      </VariantRow>
    </VariantStack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="Compact: 1, 3 and 5">
        <RiskScoreBadge assessment={assessment(1, 1)} compact />
        <RiskScoreBadge assessment={assessment(3, 3)} compact />
        <RiskScoreBadge assessment={assessment(5, 5)} compact />
      </VariantRow>
    </VariantStack>
}`,...p.parameters?.docs?.source},description:{story:`The number alone, as the hazard log shows it; hover for the words.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...AllLevels,
  globals: {
    colorScheme: "dark"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Compact,
  globals: {
    colorScheme: "dark"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as AllLevels,p as Compact,h as CompactDarkMode,m as DarkMode,d as Default,g as __namedExportsOrder,u as default};