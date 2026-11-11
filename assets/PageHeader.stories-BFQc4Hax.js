import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Box-BssAA6js.js";import{C as r,S as i}from"./Form-BQWpUpVW.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";import{n as c,t as l}from"./BodyText-Vl4rxmG1.js";import{n as u,t as d}from"./IconTextButton-Dujo5R-j.js";import{a as f,n as p}from"./variants-US1Dcm7T.js";import{n as m,t as h}from"./AddButton-1Vzsn66L.js";var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{r(),c(),t(),o(),m(),u(),f(),g=a(),_={title:`Foundations/Typography/Page header`,component:i,parameters:{layout:`padded`},decorators:[e=>(0,g.jsx)(n,{maw:800,children:(0,g.jsxs)(s,{gap:`sm`,children:[(0,g.jsx)(e,{}),(0,g.jsx)(l,{children:`This is body text underneath the page header to show relative sizing.`})]})})]},v={args:{title:`Administration`}},y={args:{title:`Users`,action:(0,g.jsx)(h,{label:`Add user`})}},b={args:{title:`Patient management`,action:(0,g.jsx)(d,{icon:`user`,label:`Their user account`})},render:e=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{maw:320,children:(0,g.jsx)(i,{...e})}),(0,g.jsx)(p,{children:`Constrained to 320px, as on a phone.`})]})},x={args:{title:`Administration`,action:(0,g.jsx)(d,{icon:`settings`,label:`Settings`}),actionAlign:`center`}},S={args:{title:`Dr Jane Smith`,subtitle:`At Oncology`,action:(0,g.jsx)(d,{icon:`user`,label:`Their user account`})}},C={...S,globals:{colorScheme:`dark`}},w=[`Default`,`WithAction`,`WithActionWrapped`,`WithCentredAction`,`WithSubtitle`,`DarkMode`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Administration"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Users",
    action: <AddButton label="Add user" />
  }
}`,...y.parameters?.docs?.source},description:{story:`An "Add" button, the most common header action.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Patient management",
    action: <IconTextButton icon="user" label="Their user account" />
  },
  render: args => <>
      <Box maw={320}>
        <PageHeader {...args} />
      </Box>
      <StoryNote>Constrained to 320px, as on a phone.</StoryNote>
    </>
}`,...b.parameters?.docs?.source},description:{story:`Too narrow for both on one line: the action wraps under the title and
stays on the right.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Administration",
    action: <IconTextButton icon="settings" label="Settings" />,
    actionAlign: "center"
  }
}`,...x.parameters?.docs?.source},description:{story:`Something shorter than the title, such as a badge, centred against it.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dr Jane Smith",
    subtitle: "At Oncology",
    action: <IconTextButton icon="user" label="Their user account" />
  }
}`,...S.parameters?.docs?.source},description:{story:`A line qualifying the title, such as the place the page is about.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...WithSubtitle,
  globals: {
    colorScheme: "dark"
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as DarkMode,v as Default,y as WithAction,b as WithActionWrapped,x as WithCentredAction,S as WithSubtitle,w as __namedExportsOrder,_ as default};