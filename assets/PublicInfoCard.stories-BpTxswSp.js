import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Box-BssAA6js.js";import{n as r,t as i}from"./SimpleGrid-Cw3N2DUw.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as o,t as s}from"./Text-DPHIKpQi.js";import{n as c,t as l}from"./Title-DpW_-BRP.js";import{n as u,t as d}from"./PublicBodyText-xob1Wxrd.js";var f,p,m,h;function g(){return(g=e((()=>{f=`_card_1rgn2_1`,p=`_label_1rgn2_7`,m=`_heading_1rgn2_11`,h={card:f,label:p,heading:m}})))()}function _({label:e,heading:t,description:r}){return(0,v.jsxs)(n,{"data-testid":`public-info-card`,p:`xl`,className:h.card,children:[(0,v.jsx)(s,{fz:`1.4rem`,fw:500,className:h.label,mb:`xs`,tt:`uppercase`,children:e}),(0,v.jsx)(l,{order:2,c:`white`,className:h.heading,fw:700,fz:`4rem`,lh:1.1,mb:`xs`,children:t}),(0,v.jsx)(d,{children:r})]})}var v;function y(){return(y=e((()=>{u(),t(),o(),c(),g(),v=a(),_.__docgenInfo={description:``,methods:[],displayName:`PublicInfoCard`,props:{label:{required:!0,tsType:{name:`string`},description:`Top label text (amber, medium)`},heading:{required:!0,tsType:{name:`string`},description:`Large heading text (white, Cormorant Garamond)`},description:{required:!0,tsType:{name:`ReactNode`},description:`Description content`}}}})))()}var b,x,S,C,w,T;function E(){return(E=e((()=>{y(),t(),r(),b=a(),x={title:`Public/Info card/Public info card`,component:_,parameters:{layout:`fullscreen`},decorators:[e=>(0,b.jsx)(`div`,{style:{background:`var(--brand-primary)`,minHeight:`100vh`,padding:`var(--mantine-spacing-xl)`},children:(0,b.jsx)(e,{})})]},S={decorators:[e=>(0,b.jsx)(n,{maw:400,children:(0,b.jsx)(e,{})})],args:{label:`Clinical letters`,heading:`42`,description:`Letters generated this month across all departments and specialties.`}},C={decorators:[e=>(0,b.jsx)(n,{maw:400,children:(0,b.jsx)(e,{})})],args:{label:`Average response time`,heading:`2.4 hours`,description:`Mean time from message receipt to clinician response, measured across all active organisations in the last 30 days.`}},w={args:{label:``,heading:``,description:``},render:()=>(0,b.jsxs)(i,{cols:{base:1,sm:3},spacing:`md`,children:[(0,b.jsx)(_,{label:`Clinical letters`,heading:`42`,description:`Letters generated this month across all departments.`}),(0,b.jsx)(_,{label:`Response time`,heading:`2.4 hrs`,description:`Mean clinician response time in the last 30 days.`}),(0,b.jsx)(_,{label:`Active users`,heading:`128`,description:`Clinicians and staff using the platform daily.`})]})},T=[`Default`,`LongContent`,`MultipleCards`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Box maw={400}>
        <Story />
      </Box>],
  args: {
    label: "Clinical letters",
    heading: "42",
    description: "Letters generated this month across all departments and specialties."
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Box maw={400}>
        <Story />
      </Box>],
  args: {
    label: "Average response time",
    heading: "2.4 hours",
    description: "Mean time from message receipt to clinician response, measured across all active organisations in the last 30 days."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: "",
    heading: "",
    description: ""
  },
  render: () => <SimpleGrid cols={{
    base: 1,
    sm: 3
  }} spacing="md">
      <PublicInfoCard label="Clinical letters" heading="42" description="Letters generated this month across all departments." />
      <PublicInfoCard label="Response time" heading="2.4 hrs" description="Mean clinician response time in the last 30 days." />
      <PublicInfoCard label="Active users" heading="128" description="Clinicians and staff using the platform daily." />
    </SimpleGrid>
}`,...w.parameters?.docs?.source}}}})))()}E();export{S as Default,C as LongContent,w as MultipleCards,T as __namedExportsOrder,x as default};