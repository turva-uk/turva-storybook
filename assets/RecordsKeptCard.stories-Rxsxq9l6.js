import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Group-DSt3d3i4.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{Y as l,n as u}from"./appIcons-BpiHpu4d.js";import{t as d}from"./BodyText-Vl4rxmG1.js";import{t as f}from"./Heading-CiSQlEyi.js";import{t as p}from"./BodyTextBold-CxqNt9uz.js";import{t as m}from"./BodyTextInline-BBHINRw1.js";import{a as h,i as g,r as _}from"./variants-US1Dcm7T.js";import{n as v,t as y}from"./IconButton-B0JQpNZj.js";function b(e){return e===null?`Not set`:`${e} ${e===1?`month`:`months`}`}function x(){return(x=e((()=>{})))()}function S({months:e,onEdit:t}){return(0,C.jsx)(o,{children:(0,C.jsxs)(c,{gap:`md`,children:[(0,C.jsxs)(i,{justify:`space-between`,align:`center`,children:[(0,C.jsx)(f,{children:`Record retention`}),(0,C.jsx)(y,{icon:(0,C.jsx)(l,{}),onClick:t,"aria-label":`Edit record retention`})]}),(0,C.jsxs)(i,{gap:`xs`,children:[(0,C.jsx)(p,{children:`Kept after an account is closed:`}),(0,C.jsx)(m,{children:b(e)})]}),(0,C.jsx)(d,{children:e===null?`With no period set, this organisation's training records are never listed for deletion.`:`After that, a closed account's training records here are listed for a decision. Nothing is deleted without one.`})]})})}var C;function w(){return(w=e((()=>{r(),s(),a(),v(),u(),t(),x(),C=n(),S.__docgenInfo={description:``,methods:[],displayName:`RecordsKeptCard`,props:{months:{required:!0,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:`The months records are kept, or null when none is set`},onEdit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Opens the page where the period is changed`}}}})))()}var T,E,D,O,k,A;function j(){return(j=e((()=>{h(),w(),T=n(),E={title:`Admin/Records kept card`,component:S,parameters:{layout:`padded`},args:{onEdit:void 0}},D={args:{months:42}},O={args:{months:null}},k={render:()=>(0,T.jsxs)(g,{children:[(0,T.jsx)(_,{label:`not set (default)`,horizontal:!1,children:(0,T.jsx)(S,{months:null,onEdit:()=>void 0})}),(0,T.jsx)(_,{label:`one month`,horizontal:!1,children:(0,T.jsx)(S,{months:1,onEdit:()=>void 0})}),(0,T.jsx)(_,{label:`42 months`,horizontal:!1,children:(0,T.jsx)(S,{months:42,onEdit:()=>void 0})})]})},A=[`Default`,`NotSet`,`AllStates`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    months: 42
  }
}`,...D.parameters?.docs?.source},description:{story:`A sponsor that has given three and a half years`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    months: null
  }
}`,...O.parameters?.docs?.source},description:{story:`No period yet, which is how every organisation starts`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="not set (default)" horizontal={false}>
        <RecordsKeptCard months={null} onEdit={() => undefined} />
      </VariantRow>
      <VariantRow label="one month" horizontal={false}>
        <RecordsKeptCard months={1} onEdit={() => undefined} />
      </VariantRow>
      <VariantRow label="42 months" horizontal={false}>
        <RecordsKeptCard months={42} onEdit={() => undefined} />
      </VariantRow>
    </VariantStack>
}`,...k.parameters?.docs?.source},description:{story:`Every state side by side`,...k.parameters?.docs?.description}}}})))()}j();export{k as AllStates,D as Default,O as NotSet,A as __namedExportsOrder,E as default};