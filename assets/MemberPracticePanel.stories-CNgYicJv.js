import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{A as n,M as r,N as i,i as a,n as ee,o as te,t as o,u as s,x as c}from"./Form-BQWpUpVW.js";import{t as l}from"./jsx-runtime-MKhVqBIO.js";import{n as u,t as d}from"./BaseCard-C_VuKVYL.js";import{n as f,t as p}from"./Stack-D_d3SZwt.js";import{t as m}from"./SolidSwitch-B5z1COCw.js";import{n as h,t as ne}from"./Icon-DG7U5iIm.js";import{_ as re,l as ie,n as g,y as _}from"./appIcons-BpiHpu4d.js";import{t as v}from"./BodyText-Vl4rxmG1.js";import{t as y}from"./Heading-CiSQlEyi.js";import{a as b}from"./FormStatusNarrow-CFbV3b2J.js";import{t as ae}from"./BodyTextInline-BBHINRw1.js";import{t as x}from"./ErrorMessage-CAYmr-1H.js";import{t as S}from"./form-T0M4Wlbx.js";import{i as C,t as oe}from"./cbac-D-24IP1p.js";import{a as w,n as T}from"./variants-US1Dcm7T.js";import{n as E,t as se}from"./IconButton-B0JQpNZj.js";import{n as D,t as O}from"./AddButton-1Vzsn66L.js";import{n as k,t as A}from"./ExtraButton-CPPABtIP.js";import{n as j,t as M}from"./GrantCompetencyModal-CFrkOigR.js";import{n as N,t as P}from"./DataTableControlled-DHBUj558.js";import{n as F,r as I,t as L}from"./competencyRows-hYwfL8SM.js";function R(e,t){let n=Object.keys(t).filter(n=>e[n]!==t[n]);return{authorise:n.filter(t=>e[t]),withdraw:n.filter(t=>!e[t])}}function ce({saved:e}){let{methods:t}=b();return(0,B.useEffect)(()=>{t.reset(e,{keepDirtyValues:!0})},[t,e]),null}function le({saved:e,username:t,orgUnitName:n}){let{methods:r}=b(),{authorise:i,withdraw:a}=R(r.getValues(),e);return(0,V.jsxs)(V.Fragment,{children:[`You are about to change what `,(0,V.jsx)(`strong`,{children:t}),` may practise at`,` `,(0,V.jsx)(`strong`,{children:n}),`:`,(0,V.jsxs)(p,{gap:4,mt:`xs`,align:`center`,children:[i.map(e=>(0,V.jsxs)(v,{children:[(0,V.jsx)(`strong`,{children:L(e)}),` - authorise`]},e)),a.map(e=>(0,V.jsxs)(v,{children:[(0,V.jsx)(`strong`,{children:L(e)}),` - withdraw`]},e))]}),a.length>0&&(0,V.jsx)(x,{children:`Withdrawing stops them practising it here straight away. They stay qualified, and stay authorised anywhere else.`})]})}function ue({row:e,disabled:t}){let{methods:n,formState:i}=b();return(0,V.jsx)(r,{name:e.id,control:n.control,render:({field:n})=>(0,V.jsx)(m,{checked:n.value===!0,onChange:n.onChange,disabled:t||i===`submitting`,"aria-label":`${e.name}: may practise here`})})}function z({practice:e,onSave:t,onWithdraw:r,onCancel:i,onGrantAndAuthorise:o,onOpenUserAccount:s}){let[c,l]=(0,B.useState)(null),[u,f]=(0,B.useState)(void 0),m=e.full_name||e.username,h=(0,B.useMemo)(()=>{let t=e.may_change;return e=>t==null||t.includes(e)},[e.may_change]),g=(0,B.useMemo)(()=>new Set(e.authorised.map(e=>e.competency)),[e.authorised]),b=(0,B.useMemo)(()=>new Set(e.qualified),[e.qualified]),x=(0,B.useMemo)(()=>I(e.qualified),[e.qualified]),S=(0,B.useMemo)(()=>I([...g].filter(e=>!b.has(e))),[g,b]),C=(0,B.useMemo)(()=>I(oe.map(e=>e.id).filter(e=>!b.has(e)&&h(e))),[b,h]),w=(0,B.useMemo)(()=>{let t={};for(let n of e.qualified)t[n]=g.has(n);return t},[e.qualified,g]);async function T(e){let n=R(e,w),r=[...n.authorise.map(e=>`${L(e)} authorised`),...n.withdraw.map(e=>`${L(e)} withdrawn`)].join(`, `);try{return await t(n),{state:`success`,message:{title:`Practice updated`,description:r}}}catch(e){return{state:`error`,message:{title:`Failed to update practice`,description:e instanceof Error?e.message:`An unexpected error occurred`}}}}let E=[{header:`Competency`,render:e=>e.name,accessor:e=>e.name},{header:`May practise here`,width:`200px`,render:e=>(0,V.jsx)(ue,{row:e,disabled:!h(e.id)})}],D=[{header:`Competency`,render:e=>e.name,accessor:e=>e.name},{header:``,width:e.may_grant?`180px`:`50px`,render:t=>h(t.id)&&(0,V.jsxs)(p,{gap:`xs`,align:`flex-end`,children:[e.may_grant&&(0,V.jsx)(O,{label:`Grant`,onClick:()=>f(t.id)}),(0,V.jsx)(se,{icon:(0,V.jsx)(ne,{icon:(0,V.jsx)(re,{})}),onClick:()=>l(t),"aria-label":`Withdraw ${t.name}`})]})}];return(0,V.jsxs)(p,{gap:`lg`,children:[(0,V.jsxs)(te,{defaultValues:w,onSubmit:T,submitLabel:`Save changes`,submittingLabel:`Saving…`,disableWhenClean:!0,confirm:{title:`Confirm practice changes`,acceptLabel:`Confirm`,cancelLabel:`Go back`,children:(0,V.jsx)(le,{saved:w,username:e.username,orgUnitName:e.org_unit_name})},children:[(0,V.jsx)(ce,{saved:w}),(0,V.jsxs)(p,{gap:`md`,children:[(0,V.jsx)(a,{}),(0,V.jsx)(d,{children:(0,V.jsxs)(p,{gap:`md`,children:[(0,V.jsxs)(ae,{children:[`Switch on what `,m,` may practise here. You will need to press “Save changes” below for these changes to take effect.`]}),(0,V.jsx)(P,{data:x,columns:E,getRowKey:e=>e.id,emptyMessage:`They hold no competencies yet`,searchFields:e=>[e.name],action:(0,V.jsxs)(V.Fragment,{children:[e.may_grant&&(0,V.jsx)(A,{"aria-label":`Grant competency`,icon:(0,V.jsx)(_,{}),onClick:()=>f(null)}),s&&(0,V.jsx)(A,{"aria-label":`Their user account`,icon:(0,V.jsx)(ie,{}),onClick:s})]})})]})}),(0,V.jsx)(ee,{onCancel:i})]})]}),S.length>0&&(0,V.jsx)(d,{children:(0,V.jsxs)(p,{gap:`md`,children:[(0,V.jsx)(y,{children:`Authorised here but not held`}),(0,V.jsxs)(v,{children:[`These have no effect until `,m,` holds the competency again.`]}),(0,V.jsx)(P,{data:S,columns:D,getRowKey:e=>e.id,searchFields:e=>[e.name]})]})}),(0,V.jsxs)(n,{opened:c!==null,onClose:()=>l(null),onAccept:async()=>{c&&(await r(c.id),l(null))},title:`Withdraw authorisation`,acceptLabel:`Withdraw`,submittingLabel:`Withdrawing…`,children:[`Are you sure you want to stop `,(0,V.jsx)(`strong`,{children:e.username}),` `,`practising `,(0,V.jsx)(`strong`,{children:c?.name}),` at`,` `,e.org_unit_name,`? They stay qualified, and stay authorised anywhere else.`]}),u!==void 0&&(0,V.jsx)(M,{opened:!0,onClose:()=>f(void 0),options:C,username:e.username,orgUnitName:e.org_unit_name,initial:u,onGrant:o})]})}var B,V;function H(){return(H=e((()=>{B=t(),f(),i(),u(),c(),s(),D(),k(),E(),h(),g(),S(),o(),N(),C(),F(),j(),V=l(),z.__docgenInfo={description:`Switch practice here on and off for each competency somebody holds.

@param props - Component props
@returns The panel`,methods:[],displayName:`MemberPracticePanel`,props:{practice:{required:!0,tsType:{name:`MemberPractice`},description:`The member, their ceiling and what is authorised for them here.`},onSave:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(changes: PracticeChanges) => Promise<void>`,signature:{arguments:[{type:{name:`PracticeChanges`},name:`changes`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:`Save the switches: authorise and withdraw at this org_unit in one go.
Rejects, with a message to show, when any of it could not be saved.`},onWithdraw:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(competency: string) => Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`competency`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:`Stop them practising a competency at this org_unit straight away:
the "Authorised here but not held" table, which has no switches.`},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Leave without saving. The form asks first if a switch has moved.`},onGrantAndAuthorise:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(competency: string) => Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`competency`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:`Give them a competency and authorise it here.`},onOpenUserAccount:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Open their user account. Shown as an icon beside the table's search
and filter when given, so every action on them sits in one place.`}}}})))()}var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{w(),H(),U=l(),W={user_id:4,username:`a.patel`,full_name:`Anita Patel`,org_unit_id:3,org_unit_name:`Ward A`,qualified:[`take_informed_consent`,`certify_death`,`prescribe_controlled_schedule_2`],authorised:[{competency:`take_informed_consent`,authorised_at:`2026-09-01T09:00:00Z`,authorised_by:`Admin User`}],may_grant:!0},G=async()=>{},K={title:`Cards/Member practice`,component:z,parameters:{layout:`padded`},args:{practice:W,onSave:G,onWithdraw:G,onGrantAndAuthorise:G}},q={},J={args:{practice:{...W,may_grant:!1}},render:e=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(z,{...e}),(0,U.jsx)(T,{children:"Without `manage_users`, or looking at their own record, the viewer sees only the switches."})]})},Y={args:{practice:{...W,qualified:[...W.qualified,`take_teaching_modules`],may_change:[`manage_teaching`,`view_teaching_analytics`,`take_teaching_modules`]}},render:e=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(z,{...e}),(0,U.jsx)(T,{children:"Through `manage_teaching` alone, the viewer sees every competency held and may switch only the teaching ones. Grant competency offers only what they may grant."})]})},X={args:{practice:{...W,authorised:[...W.authorised,{competency:`manage_users`,authorised_at:`2026-08-01T09:00:00Z`,authorised_by:null}]}},render:e=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(z,{...e}),(0,U.jsx)(T,{children:`The row authorises nothing until they hold the competency again. It is shown rather than hidden, so a lapsed qualification is seen.`})]})},Z={args:{practice:{...W,qualified:[],authorised:[]}}},Q=[`Default`,`MayNotGrant`,`TeachingAdminView`,`AuthorisedButNotHeld`,`HoldsNothing`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source},description:{story:`A user manager's view: switches, and the rest of the catalogue.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    practice: {
      ...practice,
      may_grant: false
    }
  },
  render: args => <>
      <MemberPracticePanel {...args} />
      <StoryNote>
        Without \`manage_users\`, or looking at their own record, the viewer sees
        only the switches.
      </StoryNote>
    </>
}`,...J.parameters?.docs?.source},description:{story:`Somebody who may authorise practice but not change competencies.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    practice: {
      ...practice,
      qualified: [...practice.qualified, "take_teaching_modules"],
      may_change: ["manage_teaching", "view_teaching_analytics", "take_teaching_modules"]
    }
  },
  render: args => <>
      <MemberPracticePanel {...args} />
      <StoryNote>
        Through \`manage_teaching\` alone, the viewer sees every competency held
        and may switch only the teaching ones. Grant competency offers only what
        they may grant.
      </StoryNote>
    </>
}`,...Y.parameters?.docs?.source},description:{story:`A teaching admin's view of a clinician who also sits teaching.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    practice: {
      ...practice,
      authorised: [...practice.authorised, {
        competency: "manage_users",
        authorised_at: "2026-08-01T09:00:00Z",
        authorised_by: null
      }]
    }
  },
  render: args => <>
      <MemberPracticePanel {...args} />
      <StoryNote>
        The row authorises nothing until they hold the competency again. It is
        shown rather than hidden, so a lapsed qualification is seen.
      </StoryNote>
    </>
}`,...X.parameters?.docs?.source},description:{story:`A row here for something they no longer hold.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    practice: {
      ...practice,
      qualified: [],
      authorised: []
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Somebody new, holding nothing yet.`,...Z.parameters?.docs?.description}}}})))()}$();export{X as AuthorisedButNotHeld,q as Default,Z as HoldsNothing,J as MayNotGrant,Y as TeachingAdminView,Q as __namedExportsOrder,K as default};