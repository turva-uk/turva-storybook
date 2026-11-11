import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Group-DSt3d3i4.js";import{t as a}from"./BodyTextInline-BBHINRw1.js";import{a as o,i as s,r as c}from"./variants-US1Dcm7T.js";import{i as l,n as u,r as d,t as f}from"./FailIcon-VQ1jqyls.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{r(),l(),u(),t(),o(),p=n(),m={title:`Icons/Pass fail icon`,parameters:{layout:`padded`}},h={render:()=>(0,p.jsxs)(i,{gap:`lg`,children:[(0,p.jsxs)(i,{gap:`xs`,children:[(0,p.jsx)(d,{}),(0,p.jsx)(a,{children:`Pass`})]}),(0,p.jsxs)(i,{gap:`xs`,children:[(0,p.jsx)(f,{}),(0,p.jsx)(a,{children:`Fail`})]})]})},g={render:()=>(0,p.jsx)(s,{children:[`sm`,`md`,`lg`,`xl`].map(e=>(0,p.jsxs)(c,{label:e===`sm`?`sm (default)`:e,children:[(0,p.jsx)(d,{size:e}),(0,p.jsx)(f,{size:e})]},e))})},_={...h,globals:{colorScheme:`dark`}},v=[`Default`,`AllSizes`,`DarkMode`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="lg">
      <Group gap="xs">
        <PassIcon />
        <BodyTextInline>Pass</BodyTextInline>
      </Group>
      <Group gap="xs">
        <FailIcon />
        <BodyTextInline>Fail</BodyTextInline>
      </Group>
    </Group>
}`,...h.parameters?.docs?.source},description:{story:`Default pass and fail icons side by side.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      {(["sm", "md", "lg", "xl"] as const).map(size => <VariantRow key={size} label={size === "sm" ? "sm (default)" : size}>
          <PassIcon size={size} />
          <FailIcon size={size} />
        </VariantRow>)}
    </VariantStack>
}`,...g.parameters?.docs?.source},description:{story:`All size variants for both icons.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as AllSizes,_ as DarkMode,h as Default,v as __namedExportsOrder,m as default};