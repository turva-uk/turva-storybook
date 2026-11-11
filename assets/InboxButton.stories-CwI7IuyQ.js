import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{a as i,i as a,n as o,r as s}from"./variants-US1Dcm7T.js";import{n as c,t as l}from"./InboxButton-1He4Qc7A.js";function u({children:e}){return(0,d.jsx)(`div`,{style:{background:`var(--brand-primary)`,padding:`0.5rem 1rem`},children:e})}var d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),c(),d=t(),f={title:`Inbox/Inbox button`,component:l,parameters:{layout:`padded`},args:{label:`Waiting on me`,onClick:()=>{}}},p={args:{count:3},decorators:[e=>(0,d.jsxs)(r,{gap:`md`,children:[(0,d.jsx)(o,{children:`An envelope with how many things are waiting behind it. The passport page uses it for sign-off requests, and the top ribbon for everything waiting on the person signed in`}),(0,d.jsx)(e,{})]})]},m={render:()=>(0,d.jsxs)(a,{children:[(0,d.jsx)(s,{label:`nothing waiting - no badge`,children:(0,d.jsx)(l,{label:`Waiting on me`,count:0,onClick:()=>{}})}),(0,d.jsx)(s,{label:`one`,children:(0,d.jsx)(l,{label:`Waiting on me`,count:1,onClick:()=>{}})}),(0,d.jsx)(s,{label:`nine`,children:(0,d.jsx)(l,{label:`Waiting on me`,count:9,onClick:()=>{}})}),(0,d.jsx)(s,{label:`ten and above - capped`,children:(0,d.jsx)(l,{label:`Waiting on me`,count:42,onClick:()=>{}})})]})},h={render:()=>(0,d.jsxs)(a,{children:[(0,d.jsx)(s,{label:`nothing waiting`,children:(0,d.jsx)(u,{children:(0,d.jsx)(l,{label:`Waiting on me`,count:0,onDark:!0})})}),(0,d.jsx)(s,{label:`three waiting`,children:(0,d.jsx)(u,{children:(0,d.jsx)(l,{label:`Waiting on me`,count:3,onDark:!0})})})]})},g={...m,globals:{colorScheme:`dark`}},_=[`Default`,`Counts`,`OnDark`,`DarkMode`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3
  },
  decorators: [Story => <Stack gap="md">
        <StoryNote>
          An envelope with how many things are waiting behind it. The passport
          page uses it for sign-off requests, and the top ribbon for everything
          waiting on the person signed in
        </StoryNote>
        <Story />
      </Stack>]
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="nothing waiting - no badge">
        <InboxButton label="Waiting on me" count={0} onClick={() => {}} />
      </VariantRow>
      <VariantRow label="one">
        <InboxButton label="Waiting on me" count={1} onClick={() => {}} />
      </VariantRow>
      <VariantRow label="nine">
        <InboxButton label="Waiting on me" count={9} onClick={() => {}} />
      </VariantRow>
      <VariantRow label="ten and above - capped">
        <InboxButton label="Waiting on me" count={42} onClick={() => {}} />
      </VariantRow>
    </VariantStack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="nothing waiting">
        <OnRibbon>
          <InboxButton label="Waiting on me" count={0} onDark />
        </OnRibbon>
      </VariantRow>
      <VariantRow label="three waiting">
        <OnRibbon>
          <InboxButton label="Waiting on me" count={3} onDark />
        </OnRibbon>
      </VariantRow>
    </VariantStack>
}`,...h.parameters?.docs?.source},description:{story:`As the top ribbon shows it: a mid grey when idle, amber when waiting.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Counts,
  globals: {
    colorScheme: "dark"
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as Counts,g as DarkMode,p as Default,h as OnDark,_ as __namedExportsOrder,f as default};