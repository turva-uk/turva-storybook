import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{Y as n,n as r}from"./appIcons-BpiHpu4d.js";import{a as i,i as a,r as o,t as s}from"./variants-US1Dcm7T.js";import{n as c,t as l}from"./IconButton-B0JQpNZj.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{c(),r(),i(),u=t(),d={title:`Button/Icon button`,component:l,parameters:{layout:`padded`}},f={args:{icon:(0,u.jsx)(n,{}),"aria-label":`Edit`}},p=[`filled`,`light`,`outline`,`subtle`,`transparent`],m={args:{icon:(0,u.jsx)(n,{}),"aria-label":`Edit`},render:()=>(0,u.jsx)(a,{children:p.map(e=>(0,u.jsxs)(o,{label:e===`filled`?`filled (actual default)`:e,children:[(0,u.jsx)(s,{label:`default`,children:(0,u.jsx)(l,{icon:(0,u.jsx)(n,{}),variant:e,"aria-label":`default`})}),(0,u.jsx)(s,{label:`hover`,state:`hover`,children:(0,u.jsx)(l,{icon:(0,u.jsx)(n,{}),variant:e,"aria-label":`hover`})}),(0,u.jsx)(s,{label:`active`,state:[`hover`,`active`],children:(0,u.jsx)(l,{icon:(0,u.jsx)(n,{}),variant:e,"aria-label":`active`})}),(0,u.jsx)(s,{label:`focus-visible`,state:`focus-visible`,children:(0,u.jsx)(l,{icon:(0,u.jsx)(n,{}),variant:e,"aria-label":`focus`})}),(0,u.jsx)(s,{label:`disabled`,children:(0,u.jsx)(l,{icon:(0,u.jsx)(n,{}),variant:e,"aria-label":`disabled`,disabled:!0})})]},e))})},h={...f,globals:{colorScheme:`dark`}},g=[`Default`,`Variants`,`DarkMode`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconPencil />,
    "aria-label": "Edit"
  }
}`,...f.parameters?.docs?.source},description:{story:`Default IconButton with all Mantine style variants.`,...f.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconPencil />,
    "aria-label": "Edit"
  },
  render: () => <VariantStack>
      {VARIANTS.map(variant => <VariantRow key={variant} label={variant === "filled" ? "filled (actual default)" : variant}>
          <StateRow label="default">
            <IconButton icon={<IconPencil />} variant={variant} aria-label="default" />
          </StateRow>
          <StateRow label="hover" state="hover">
            <IconButton icon={<IconPencil />} variant={variant} aria-label="hover" />
          </StateRow>
          <StateRow label="active" state={["hover", "active"]}>
            <IconButton icon={<IconPencil />} variant={variant} aria-label="active" />
          </StateRow>
          <StateRow label="focus-visible" state="focus-visible">
            <IconButton icon={<IconPencil />} variant={variant} aria-label="focus" />
          </StateRow>
          <StateRow label="disabled">
            <IconButton icon={<IconPencil />} variant={variant} aria-label="disabled" disabled />
          </StateRow>
        </VariantRow>)}
    </VariantStack>
}`,...m.parameters?.docs?.source},description:{story:`All Mantine variants with interaction states.
Each row is a variant, columns show default → hover → active → focus → disabled.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as DarkMode,f as Default,m as Variants,g as __namedExportsOrder,d as default};