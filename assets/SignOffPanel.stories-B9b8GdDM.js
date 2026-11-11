import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{d as n,f as r,x as i}from"./Form-BQWpUpVW.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as o,t as s}from"./Group-DSt3d3i4.js";import{n as c,t as l}from"./BaseCard-C_VuKVYL.js";import{n as u,t as d}from"./Stack-D_d3SZwt.js";import{t as f}from"./BodyText-Vl4rxmG1.js";import{t as p}from"./Heading-CiSQlEyi.js";import{t as m}from"./FieldDescription-DuhvzLg0.js";import{n as h,t as g}from"./IconTextButton-Dujo5R-j.js";import{f as _,i as v,r as y}from"./safetyFile-BP682nbe.js";import{n as b,t as x}from"./SafetyStatusBadge-BwOmkKXb.js";function S(e,t){return e.filter(e=>e.startsWith(`${t}/`)).sort().at(-1)??null}function C({file:e,onSign:t}){let[r,i]=(0,w.useState)(null),a=e.sign_offs,o=a?.tags??[];function c(t){let{title:n,post:r,action:c}=E[t],u=e.posts.find(e=>e.kind===r),h=t===`approved`?a?.can_approve:a?.can_accept,_=S(o,t),v=t===`approved`&&(e.status===`approved`||e.status===`accepted`)||t===`accepted`&&e.status===`accepted`;return(0,T.jsx)(l,{"data-testid":`sign-off-${t}`,children:(0,T.jsxs)(d,{gap:`sm`,children:[(0,T.jsx)(p,{children:n}),(0,T.jsx)(f,{children:u?.holder_name?`Post holder: ${u.holder_name}`:`Nobody holds this post yet.`}),(0,T.jsx)(m,{children:v&&_?`Signed for the file as it stands (${_}).`:_?`Last signed as ${_}; the file has changed since.`:`Not yet signed.`}),h&&!a?.two_factor_enabled&&(0,T.jsx)(f,{children:`Set up two-factor authentication in your account settings before signing.`}),h&&a?.two_factor_enabled&&(0,T.jsx)(s,{justify:`flex-end`,children:(0,T.jsx)(g,{icon:`check`,label:c,onClick:()=>i(t)})})]})},t)}return(0,T.jsxs)(d,{gap:`lg`,children:[(0,T.jsx)(s,{children:(0,T.jsx)(x,{status:e.status})}),c(`approved`),c(`accepted`),(0,T.jsx)(n,{opened:r!==null,onClose:()=>i(null),onConfirm:e=>r?t(r,e):void 0,title:r?E[r].action:``,acceptLabel:r===`accepted`?`Accept`:`Approve`,submittingLabel:`Signing…`,children:r?E[r].explanation:``})]})}var w,T,E;function D(){return(D=e((()=>{w=t(),o(),u(),c(),h(),r(),i(),b(),T=a(),E={approved:{title:`Approval by the Clinical Safety Officer`,post:`clinical_safety_officer`,action:`Approve the safety case`,explanation:`You are approving the safety case as it stands now. The file is tagged at this commit, so what you approved can always be read back.`},accepted:{title:`Acceptance by Top Management`,post:`top_management`,action:`Accept the residual risk`,explanation:`You are accepting the residual risk of this deployment on the organisation's behalf, and authorising go-live.`}},C.__docgenInfo={description:``,methods:[],displayName:`SignOffPanel`,props:{file:{required:!0,tsType:{name:`SafetyFile`},description:`The file, with its posts and what the caller may sign`},onSign:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(kind: Kind, code: string) => Promise<void>`,signature:{arguments:[{type:{name:`union`,raw:`"approved" | "accepted"`,elements:[{name:`literal`,value:`"approved"`},{name:`literal`,value:`"accepted"`}]},name:`kind`},{type:{name:`string`},name:`code`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:`Sign, with the code typed. Throw to keep the dialog open.`}}}})))()}var O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{D(),_(),{fn:O}=__STORYBOOK_MODULE_TEST__,k={title:`Safety/Sign-off panel`,component:C,parameters:{layout:`padded`},args:{file:v,onSign:O()}},A={},j={args:{file:{...v,status:`approved`,sign_offs:{can_approve:!1,can_accept:!1,two_factor_enabled:!0,tags:[`approved/2026-11-07`]}}}},M={args:{file:{...v,sign_offs:{can_approve:!0,can_accept:!1,two_factor_enabled:!1,tags:[]}}}},N={args:{file:{...y,sign_offs:null}}},P={globals:{colorScheme:`dark`}},F=[`ForTheCso`,`Approved`,`NoTwoFactor`,`ForAReader`,`DarkMode`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      ...SAMPLE_FILE_FOR_CSO,
      status: "approved",
      sign_offs: {
        can_approve: false,
        can_accept: false,
        two_factor_enabled: true,
        tags: ["approved/2026-11-07"]
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      ...SAMPLE_FILE_FOR_CSO,
      sign_offs: {
        can_approve: true,
        can_accept: false,
        two_factor_enabled: false,
        tags: []
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      ...SAMPLE_FILE,
      sign_offs: null
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  globals: {
    colorScheme: "dark"
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{j as Approved,P as DarkMode,N as ForAReader,A as ForTheCso,M as NoTwoFactor,F as __namedExportsOrder,k as default};