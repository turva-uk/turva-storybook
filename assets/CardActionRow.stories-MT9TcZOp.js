import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./BaseCard-C_VuKVYL.js";import{n as a,t as o}from"./Container-DJA6w9O_.js";import{Y as s,n as c}from"./appIcons-BpiHpu4d.js";import{t as l}from"./BodyText-Vl4rxmG1.js";import{t as u}from"./BodyTextBold-CxqNt9uz.js";import{a as d,n as f}from"./variants-US1Dcm7T.js";import{n as p,t as m}from"./CardActionRow-B_5keuKE.js";import{n as h,t as g}from"./IconButton-B0JQpNZj.js";var _,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{a(),r(),p(),h(),c(),t(),d(),_=n(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Cards/Card action row`,component:m,parameters:{layout:`padded`}},b=(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u,{children:`Clinical safety officer`}),(0,_.jsx)(l,{children:`Dr Hannah Okafor`}),(0,_.jsx)(l,{c:`dimmed`,children:`hannah.okafor@example.org`})]}),x=(0,_.jsx)(g,{icon:(0,_.jsx)(s,{}),variant:`subtle`,color:`primary`,"aria-label":`Edit clinical safety officer`,onClick:v()}),S={render:()=>(0,_.jsx)(i,{children:(0,_.jsx)(m,{action:x,children:b})})},C={render:()=>(0,_.jsx)(i,{children:(0,_.jsx)(m,{children:b})})},w={render:()=>(0,_.jsxs)(`div`,{children:[(0,_.jsx)(o,{size:288,px:0,children:(0,_.jsx)(i,{children:(0,_.jsx)(m,{action:x,children:b})})}),(0,_.jsx)(f,{mt:`xs`,children:`Constrained to 18rem width`})]})},T={...S,globals:{colorScheme:`dark`}},E=[`Default`,`WithoutAnAction`,`Narrow`,`DarkMode`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <BaseCard>
      <CardActionRow action={edit}>{text}</CardActionRow>
    </BaseCard>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <BaseCard>
      <CardActionRow>{text}</CardActionRow>
    </BaseCard>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Container size={18 * 16} px={0}>
        <BaseCard>
          <CardActionRow action={edit}>{text}</CardActionRow>
        </BaseCard>
      </Container>
      <StoryNote mt="xs">Constrained to 18rem width</StoryNote>
    </div>
}`,...w.parameters?.docs?.source},description:{story:`A card about 18rem wide, as one of two sharing a 40rem row. The
email breaks rather than pushing the icon out of the card.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as DarkMode,S as Default,w as Narrow,C as WithoutAnAction,E as __namedExportsOrder,y as default};