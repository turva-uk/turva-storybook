import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./BaseCard-C_VuKVYL.js";import{n as a,t as o}from"./Stack-D_d3SZwt.js";import{t as s}from"./Heading-CiSQlEyi.js";import{n as c,t as l}from"./Date-BfRC-G4a.js";import{n as u,t as d}from"./DataTable-CrqFwTVv.js";import{C as f,f as p}from"./fixtures-DDuwM3Po.js";function m({reflections:e,onSelect:t,isLoading:n=!1}){let r=[...e].sort((e,t)=>t.written_on.localeCompare(e.written_on));return(0,h.jsx)(i,{"data-testid":`reflection-table`,children:(0,h.jsxs)(o,{gap:`md`,children:[(0,h.jsx)(s,{children:`Reflections`}),(0,h.jsx)(d,{data:r,columns:g,getRowKey:e=>e.name,onRowClick:t,loading:n,emptyMessage:`No reflections written`})]})})}var h,g;function _(){return(_=e((()=>{a(),r(),u(),c(),t(),h=n(),g=[{header:`Written on`,render:e=>(0,h.jsx)(l,{date:e.written_on,format:`medium`}),accessor:e=>e.written_on},{header:`Title`,render:e=>e.title,accessor:e=>e.title}],m.__docgenInfo={description:``,methods:[],displayName:`ReflectionTable`,props:{reflections:{required:!0,tsType:{name:`Array`,elements:[{name:`Reflection`}],raw:`Reflection[]`},description:`The reflections, in any order`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(reflection: Reflection) => void`,signature:{arguments:[{type:{name:`Reflection`},name:`reflection`}],return:{name:`void`}}},description:`Called when a reflection is chosen`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show the table's loading state`,defaultValue:{value:`false`,computed:!1}}}}})))()}var v,y,b,x,S,C;function w(){return(w=e((()=>{_(),p(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Passport/Reflection table`,tags:[`!dev`],component:m,parameters:{layout:`padded`}},b={args:{reflections:f,onSelect:v()}},x={args:{reflections:[],onSelect:v()}},S={args:{reflections:[],isLoading:!0,onSelect:v()}},C=[`Default`,`Empty`,`Loading`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    reflections,
    onSelect: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    reflections: [],
    onSelect: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    reflections: [],
    isLoading: true,
    onSelect: fn()
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{b as Default,x as Empty,S as Loading,C as __namedExportsOrder,y as default};