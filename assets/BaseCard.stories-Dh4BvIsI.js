import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Group-DSt3d3i4.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{t as l}from"./BodyText-Vl4rxmG1.js";import{t as u}from"./Heading-CiSQlEyi.js";import{t as d}from"./BodyTextBold-CxqNt9uz.js";import{t as f}from"./BodyTextInline-BBHINRw1.js";import{a as p,i as m,r as h}from"./variants-US1Dcm7T.js";function g({wrapLongWords:e}){return(0,_.jsx)(o,{w:280,wrapLongWords:e,children:(0,_.jsxs)(c,{gap:`sm`,children:[(0,_.jsx)(u,{children:`Sent from`}),(0,_.jsx)(l,{children:x}),(0,_.jsxs)(i,{gap:`xs`,children:[(0,_.jsx)(d,{children:`Page:`}),(0,_.jsx)(f,{children:x})]})]})})}var _,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{r(),s(),t(),p(),a(),_=n(),v={title:`Cards/Base card`,component:o,parameters:{layout:`padded`}},y={render:()=>(0,_.jsx)(o,{children:(0,_.jsxs)(c,{gap:`sm`,children:[(0,_.jsx)(u,{children:`Base card`}),(0,_.jsx)(l,{children:`Standard shadow, radius, border, and lg padding applied automatically.`})]})})},b={render:()=>(0,_.jsx)(o,{bg:`var(--success-color)`,children:(0,_.jsxs)(c,{gap:`sm`,children:[(0,_.jsx)(u,{c:`white`,children:`Coloured card`}),(0,_.jsx)(l,{c:`white`,children:`Pass a bg prop and the border disappears. Text is set to white automatically.`})]})})},x=`/teaching/assessments/12345/questions/67890/review/8ed08fd0c2b48463456cb1a88add2739f5fcd5a7`,S={render:()=>(0,_.jsxs)(m,{children:[(0,_.jsx)(h,{label:`default`,horizontal:!1,children:(0,_.jsx)(g,{})}),(0,_.jsx)(h,{label:`wrapLongWords={false}`,horizontal:!1,children:(0,_.jsx)(g,{wrapLongWords:!1})})]})},C={...y,globals:{colorScheme:`dark`}},w={...b,globals:{colorScheme:`dark`}},T=[`Default`,`WithBackground`,`LongWord`,`DarkMode`,`DarkModeColoured`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <BaseCard>
      <Stack gap="sm">
        <Heading>Base card</Heading>
        <BodyText>
          Standard shadow, radius, border, and lg padding applied automatically.
        </BodyText>
      </Stack>
    </BaseCard>
}`,...y.parameters?.docs?.source},description:{story:`Default card with fixed styling`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <BaseCard bg="var(--success-color)">
      <Stack gap="sm">
        <Heading c="white">Coloured card</Heading>
        <BodyText c="white">
          Pass a bg prop and the border disappears. Text is set to white
          automatically.
        </BodyText>
      </Stack>
    </BaseCard>
}`,...b.parameters?.docs?.source},description:{story:`Coloured card - border removed, white text`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="default" horizontal={false}>
        <LongWordCard />
      </VariantRow>
      <VariantRow label="wrapLongWords={false}" horizontal={false}>
        <LongWordCard wrapLongWords={false} />
      </VariantRow>
    </VariantStack>
}`,...S.parameters?.docs?.source},description:{story:"A word longer than the card, such as an address or a release id,\nbreaks inside itself. With `wrapLongWords` off it runs out of the side.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...WithBackground,
  globals: {
    colorScheme: "dark"
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as DarkMode,w as DarkModeColoured,y as Default,S as LongWord,b as WithBackground,T as __namedExportsOrder,v as default};