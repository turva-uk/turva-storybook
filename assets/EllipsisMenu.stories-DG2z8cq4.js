import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./BaseCard-C_VuKVYL.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{Y as o,_ as s,n as c}from"./appIcons-BpiHpu4d.js";import{a as l,n as u}from"./variants-US1Dcm7T.js";import{n as d,t as f}from"./EllipsisMenu-hBkojH2-.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{i(),c(),n(),l(),d(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Button/Ellipsis menu`,component:f,parameters:{layout:`padded`}},g={args:{"aria-label":`Actions`,items:[{label:`Edit`,icon:(0,p.jsx)(o,{}),onClick:m()},{label:`Delete`,icon:(0,p.jsx)(s,{}),color:`var(--alert-color)`,onClick:m()}]},render:e=>(0,p.jsxs)(a,{gap:`md`,children:[(0,p.jsx)(f,{...e}),(0,p.jsx)(u,{children:`Click on button to open up menu`})]})},_={...g,globals:{colorScheme:`dark`},render:e=>(0,p.jsxs)(a,{gap:`xl`,children:[(0,p.jsx)(r,{children:(0,p.jsxs)(a,{gap:`md`,children:[(0,p.jsx)(u,{children:`Inside card`}),(0,p.jsx)(f,{...e})]})}),(0,p.jsx)(f,{...e})]})},v=[`Default`,`DarkMode`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Actions",
    items: [{
      label: "Edit",
      icon: <IconPencil />,
      onClick: fn()
    }, {
      label: "Delete",
      icon: <IconTrash />,
      color: "var(--alert-color)",
      onClick: fn()
    }]
  },
  render: args => <Stack gap="md">
      <EllipsisMenu {...args} />
      <StoryNote>Click on button to open up menu</StoryNote>
    </Stack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  },
  render: args => <Stack gap="xl">
      <BaseCard>
        <Stack gap="md">
          <StoryNote>Inside card</StoryNote>
          <EllipsisMenu {...args} />
        </Stack>
      </BaseCard>
      <EllipsisMenu {...args} />
    </Stack>
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as DarkMode,g as Default,v as __namedExportsOrder,h as default};