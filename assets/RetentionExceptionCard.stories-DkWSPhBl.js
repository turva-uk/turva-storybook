import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Group-DSt3d3i4.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{t as l}from"./BodyText-Vl4rxmG1.js";import{t as u}from"./Heading-CiSQlEyi.js";import{t as d}from"./BodyTextBold-CxqNt9uz.js";import{a as f,i as p,r as m}from"./variants-US1Dcm7T.js";import{n as h,t as g}from"./Date-BfRC-G4a.js";import{a as _,n as v}from"./retentionReviews-1w-Cjgz9.js";function y({exception:e}){return(0,b.jsx)(o,{children:(0,b.jsxs)(c,{gap:`md`,children:[(0,b.jsxs)(c,{gap:4,children:[(0,b.jsx)(u,{children:e.full_name||`No name recorded`}),(0,b.jsx)(l,{children:e.email})]}),(0,b.jsxs)(c,{gap:4,children:[(0,b.jsxs)(i,{gap:`xs`,children:[(0,b.jsx)(d,{children:`Account closed:`}),(0,b.jsx)(g,{date:e.closed_at})]}),(0,b.jsxs)(i,{gap:`xs`,children:[(0,b.jsx)(d,{children:`Due to be emptied:`}),(0,b.jsx)(g,{date:e.due_on})]}),(0,b.jsxs)(i,{gap:`xs`,children:[(0,b.jsx)(d,{children:`Last tried:`}),(0,b.jsx)(g,{date:e.noted_at})]})]}),(0,b.jsx)(l,{children:_(e)})]})})}var b;function x(){return(x=e((()=>{r(),s(),a(),h(),t(),v(),b=n(),y.__docgenInfo={description:``,methods:[],displayName:`RetentionExceptionCard`,props:{exception:{required:!0,tsType:{name:`RetentionException`},description:`The account, and why it was not emptied`}}}})))()}var S,C,w,T,E,D;function O(){return(O=e((()=>{f(),x(),S=n(),C={id:1,user_id:42,full_name:`Alex Example`,email:`alex.example@example.nhs.uk`,closed_at:`2028-01-14T09:00:00Z`,due_on:`2030-01-14T09:00:00Z`,reason:`failed`,detail:`The account has a passport and there is no archive to move it to.`,noted_at:`2030-02-03T03:30:00Z`},w={title:`Retention/Retention exception card`,component:y,parameters:{layout:`padded`}},T={args:{exception:C}},E={render:()=>(0,S.jsxs)(p,{children:[(0,S.jsx)(m,{label:`could not be emptied (default)`,horizontal:!1,children:(0,S.jsx)(y,{exception:C})}),(0,S.jsx)(m,{label:`opened again`,horizontal:!1,children:(0,S.jsx)(y,{exception:{...C,reason:`opened_again`,detail:null}})}),(0,S.jsx)(m,{label:`has training records again`,horizontal:!1,children:(0,S.jsx)(y,{exception:{...C,reason:`has_records`,detail:null}})})]})},D=[`Default`,`AllStates`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    exception
  }
}`,...T.parameters?.docs?.source},description:{story:`Could not be emptied, and tried again each night`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="could not be emptied (default)" horizontal={false}>
        <RetentionExceptionCard exception={exception} />
      </VariantRow>
      <VariantRow label="opened again" horizontal={false}>
        <RetentionExceptionCard exception={{
        ...exception,
        reason: "opened_again",
        detail: null
      }} />
      </VariantRow>
      <VariantRow label="has training records again" horizontal={false}>
        <RetentionExceptionCard exception={{
        ...exception,
        reason: "has_records",
        detail: null
      }} />
      </VariantRow>
    </VariantStack>
}`,...E.parameters?.docs?.source},description:{story:`Each way an account is not emptied`,...E.parameters?.docs?.description}}}})))()}O();export{E as AllStates,T as Default,D as __namedExportsOrder,w as default};