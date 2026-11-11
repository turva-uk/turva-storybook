import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./MediaDropzone-CriDO-nk.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{a as o,n as s}from"./variants-US1Dcm7T.js";import{n as c,t as l}from"./DataTable-CrqFwTVv.js";function u({args:e,note:t}){let r=[{header:`Lecture`,render:e=>e.title},{header:`Video`,render:()=>(0,d.jsx)(n,{...e})}];return(0,d.jsxs)(a,{gap:`lg`,children:[(0,d.jsxs)(a,{gap:`sm`,children:[(0,d.jsx)(s,{children:`Neat drop zone button`}),(0,d.jsx)(n,{...e}),t&&(0,d.jsx)(s,{children:t})]}),(0,d.jsxs)(a,{gap:`sm`,children:[(0,d.jsx)(s,{children:`Drop zone inside a table`}),(0,d.jsx)(l,{data:p,columns:r,getRowKey:e=>e.id})]})]})}var d,f,p,m,h,g,_;function v(){return(v=e((()=>{i(),c(),t(),o(),d=r(),f={title:`Form/Media dropzone`,component:n,parameters:{layout:`padded`},args:{onDrop:()=>{},accept:[`video/mp4`,`video/webm`,`video/quicktime`],label:`Drop a video or click to browse`}},p=[{id:`intro`,title:`Introduction to optical diagnosis`},{id:`polyps`,title:`Classifying small polyps`},{id:`resect`,title:`Resect and discard in practice`}],m={render:e=>(0,d.jsx)(u,{args:e})},h={args:{disabled:!0},render:e=>(0,d.jsx)(u,{args:e,note:`While another upload is in flight.`})},g={...m,globals:{colorScheme:`dark`}},_=[`Default`,`Disabled`,`DarkMode`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <OnItsOwnAndInATable args={args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <OnItsOwnAndInATable args={args} note="While another upload is in flight." />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...g.parameters?.docs?.source},description:{story:`On the dark theme: a lighter blue fill, so it shows on striped rows.`,...g.parameters?.docs?.description}}}})))()}v();export{g as DarkMode,m as Default,h as Disabled,_ as __namedExportsOrder,f as default};