import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./BaseCard-C_VuKVYL.js";import{n as a,t as o}from"./Stack-D_d3SZwt.js";import{t as s}from"./Heading-CiSQlEyi.js";import{n as c,t as l}from"./Date-BfRC-G4a.js";import{n as u,t as d}from"./DataTable-CrqFwTVv.js";import{f,i as p}from"./fixtures-DDuwM3Po.js";function m({certificates:e,onSelect:t,isLoading:n=!1}){let r=[...e].sort((e,t)=>t.awarded_on.localeCompare(e.awarded_on));return(0,h.jsx)(i,{"data-testid":`certificate-table`,children:(0,h.jsxs)(o,{gap:`md`,children:[(0,h.jsx)(s,{children:`Certificates`}),(0,h.jsx)(d,{data:r,columns:g,getRowKey:e=>e.name,onRowClick:t,loading:n,emptyMessage:`No certificates recorded`})]})})}var h,g;function _(){return(_=e((()=>{a(),r(),u(),c(),t(),h=n(),g=[{header:`Awarded on`,render:e=>(0,h.jsx)(l,{date:e.awarded_on,format:`medium`}),accessor:e=>e.awarded_on},{header:`Certificate`,render:e=>e.title,accessor:e=>e.title},{header:`Issued by`,render:e=>e.issuer,accessor:e=>e.issuer},{header:`Expires on`,render:e=>e.expires_on?(0,h.jsx)(l,{date:e.expires_on,format:`medium`}):`-`,accessor:e=>e.expires_on}],m.__docgenInfo={description:``,methods:[],displayName:`CertificateTable`,props:{certificates:{required:!0,tsType:{name:`Array`,elements:[{name:`Certificate`}],raw:`Certificate[]`},description:`The certificates, in any order`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(certificate: Certificate) => void`,signature:{arguments:[{type:{name:`Certificate`},name:`certificate`}],return:{name:`void`}}},description:`Called when a certificate is chosen`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show the table's loading state`,defaultValue:{value:`false`,computed:!1}}}}})))()}var v,y,b,x,S,C;function w(){return(w=e((()=>{_(),f(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Passport/Certificate table`,tags:[`!dev`],component:m,parameters:{layout:`padded`}},b={args:{certificates:p,onSelect:v()}},x={args:{certificates:[],onSelect:v()}},S={args:{certificates:[],isLoading:!0,onSelect:v()}},C=[`Default`,`Empty`,`Loading`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    certificates,
    onSelect: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    certificates: [],
    onSelect: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    certificates: [],
    isLoading: true,
    onSelect: fn()
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{b as Default,x as Empty,S as Loading,C as __namedExportsOrder,y as default};