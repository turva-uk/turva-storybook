import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./ActionCardButton-DnJjeR9q.js";import{a as o,n as s,t as c}from"./variants-US1Dcm7T.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{i(),o(),n(),l=t(),u=`Constrained to 18rem width for display. In practice, the button is full-width and adapts to its parent container.`,d=`18rem`,f={title:`Button/Action card button`,component:a,parameters:{layout:`padded`}},p={args:{label:`View details`,url:`/example`},decorators:[e=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{width:`18rem`},children:(0,l.jsx)(e,{})}),(0,l.jsx)(s,{children:u})]})]},m={args:{label:`Deactivate site`,onClick:()=>void 0,destructive:!0},decorators:p.decorators},h={args:{label:`View details`,url:`/example`},render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r,{gap:`xl`,children:[(0,l.jsx)(c,{label:`default`,style:{width:d},children:(0,l.jsx)(a,{label:`View details`,url:`/example`})}),(0,l.jsx)(c,{label:`hover`,state:`hover`,style:{width:d},children:(0,l.jsx)(a,{label:`View details`,url:`/example`})}),(0,l.jsx)(c,{label:`active`,state:[`hover`,`active`],style:{width:d},children:(0,l.jsx)(a,{label:`View details`,url:`/example`})}),(0,l.jsx)(c,{label:`focus-visible`,state:`focus-visible`,style:{width:d},children:(0,l.jsx)(a,{label:`View details`,url:`/example`})}),(0,l.jsx)(c,{label:`disabled`,style:{width:d},children:(0,l.jsx)(a,{label:`View details`,url:`/example`,disabled:!0})})]}),(0,l.jsx)(s,{children:u})]})},g={...p,globals:{colorScheme:`dark`}},_=[`Default`,`Destructive`,`States`,`DarkMode`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "View details",
    url: "/example"
  },
  decorators: [Story => <div>
        <div style={{
      width: "18rem"
    }}>
          <Story />
        </div>
        <StoryNote>{CONTAINER_NOTE}</StoryNote>
      </div>]
}`,...p.parameters?.docs?.source},description:{story:`Default ActionCardButton rendered as a link.

Constrained to 18rem here for display purposes.
In practice, the button is full-width and adapts to its parent container.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Deactivate site",
    onClick: () => undefined,
    destructive: true
  },
  decorators: Default.decorators
}`,...m.parameters?.docs?.source},description:{story:`Destructive: red, for an action that takes something away, such as
deactivating a site.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "View details",
    url: "/example"
  },
  render: () => <>
      <Group gap="xl">
        <StateRow label="default" style={{
        width: CONTAINER_WIDTH
      }}>
          <ActionCardButton label="View details" url="/example" />
        </StateRow>
        <StateRow label="hover" state="hover" style={{
        width: CONTAINER_WIDTH
      }}>
          <ActionCardButton label="View details" url="/example" />
        </StateRow>
        <StateRow label="active" state={["hover", "active"]} style={{
        width: CONTAINER_WIDTH
      }}>
          <ActionCardButton label="View details" url="/example" />
        </StateRow>
        <StateRow label="focus-visible" state="focus-visible" style={{
        width: CONTAINER_WIDTH
      }}>
          <ActionCardButton label="View details" url="/example" />
        </StateRow>
        <StateRow label="disabled" style={{
        width: CONTAINER_WIDTH
      }}>
          <ActionCardButton label="View details" url="/example" disabled />
        </StateRow>
      </Group>
      <StoryNote>{CONTAINER_NOTE}</StoryNote>
    </>
}`,...h.parameters?.docs?.source},description:{story:`All interaction states side-by-side.

Constrained to 18rem here for display purposes.
In practice, the button is full-width and adapts to its parent container.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as DarkMode,p as Default,m as Destructive,h as States,_ as __namedExportsOrder,f as default};