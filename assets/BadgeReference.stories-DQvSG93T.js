import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Box-BssAA6js.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Badge-IMN-_Qpu.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";import{n as c,r as l,t as u}from"./badgeColours-CRm1OntK.js";import{n as d,t as f}from"./BadgeSkeleton-WHJAvNZj.js";import{n as p,t as m}from"./ActiveStatusBadge-DKNgalCF.js";var h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{i(),t(),o(),l(),d(),p(),h=r(),g={title:`Badge/Reference`,parameters:{layout:`padded`}},_=Object.entries(c),v={render:()=>(0,h.jsxs)(s,{gap:`md`,align:`flex-start`,children:[_.map(([e,{bg:t,text:n}])=>(0,h.jsx)(a,{color:t,c:n,variant:u,children:e},e)),(0,h.jsx)(f,{})]})},y={render:()=>(0,h.jsx)(m,{active:!0,isLoading:!0})},b={render:()=>(0,h.jsx)(n,{w:160,children:(0,h.jsxs)(s,{gap:`md`,align:`flex-start`,children:[(0,h.jsx)(a,{color:c.warning.bg,c:c.warning.text,variant:u,radius:`xl`,children:`Awaiting supervisor sign-off`}),(0,h.jsx)(a,{color:c.info.bg,c:c.info.text,variant:u,radius:`xl`,children:`Electroencephalography`})]})})},x={...v,globals:{colorScheme:`dark`}},S=[`AllColours`,`Loading`,`NarrowContainer`,`DarkMode`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="md" align="flex-start">
      {allColours.map(([name, {
      bg,
      text
    }]) => <Badge key={name} color={bg} c={text} variant={BADGE_VARIANT}>
          {name}
        </Badge>)}
      <BadgeSkeleton />
    </Stack>
}`,...v.parameters?.docs?.source},description:{story:`All available badge colours displayed in a column.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ActiveStatusBadge active={true} isLoading />
}`,...y.parameters?.docs?.source},description:{story:`Loading skeleton.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Box w={160}>
      <Stack gap="md" align="flex-start">
        <Badge color={badgeColours.warning.bg} c={badgeColours.warning.text} variant={BADGE_VARIANT} radius="xl">
          Awaiting supervisor sign-off
        </Badge>
        <Badge color={badgeColours.info.bg} c={badgeColours.info.text} variant={BADGE_VARIANT} radius="xl">
          Electroencephalography
        </Badge>
      </Stack>
    </Box>
}`,...b.parameters?.docs?.source},description:{story:`A badge in a container narrower than its text stays whole: one line,
its usual size, no ellipsis. It runs past the container rather than
shrinking to fit it.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...AllColours,
  globals: {
    colorScheme: "dark"
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{v as AllColours,x as DarkMode,y as Loading,b as NarrowContainer,S as __namedExportsOrder,g as default};