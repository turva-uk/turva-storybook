import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{p as n,x as r}from"./Form-BQWpUpVW.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{n as l,r as u}from"./iframe-gh_IKeZo.js";import{t as d}from"./Heading-CiSQlEyi.js";import{n as f,t as p}from"./ButtonPair-C-HV7e6O.js";import{t as m}from"./SelectField-CfDE1WBv.js";import{t as h}from"./CheckboxField-FbO59Hvh.js";import{t as g}from"./form-T0M4Wlbx.js";import{t as _}from"./TextAreaField-DDxRyQwA.js";import{a as v,n as y}from"./variants-US1Dcm7T.js";import{a as b}from"./recordList-DhbiVGzX.js";import{E as x,f as S,w as C}from"./fixtures-DDuwM3Po.js";import{n as w,t as T}from"./AssessorDeclaration-bnUovL1H.js";function E(e,t){return(e?.competency(t))?.levels?.map(({id:e,name:t})=>({id:e,name:t}))??[]}function D({catalogue:e,signOff:t,onSubmit:r,onCancel:i,isSubmitting:a=!1}){let[s,l]=(0,O.useState)(null),u=t.requested_level??t.level??null,f=E(e,t.competency.id),[g,v]=(0,O.useState)(u?.id??null),[y,x]=(0,O.useState)(``),[S,C]=(0,O.useState)(``),[w,D]=(0,O.useState)(!1),j=u!==null&&g!==null&&g!==u.id,M=j&&y.trim()===``,N=s!==null&&w&&(f.length===0||g!==null)&&!M&&!a;function P(){N&&s!==null&&r({meaning:s,declaration_confirmed:w,level_id:g,comments:y.trim()||null,assessment:S.trim()||null})}return(0,k.jsx)(o,{"data-testid":`sign-off-form`,children:(0,k.jsxs)(c,{gap:`md`,children:[(0,k.jsxs)(d,{children:[`Sign off `,b(t.competency.name,t.scope)]}),t.scope&&(0,k.jsx)(n,{label:`What this sign-off covers`,value:t.scope.name,readOnly:!0,description:`Chosen by the holder. Decline if it is not what you assessed.`}),(0,k.jsx)(m,{label:`What did you do?`,description:`Directly observing, reviewing evidence and countersigning are different acts, and the record says which.`,placeholder:`Choose one`,data:A,value:s,onChange:e=>l(e),required:!0}),f.length>0?(0,k.jsx)(m,{label:`Level`,description:u?`Asked for: ${u.name}. Choose another level if that is your judgement.`:`The level you are signing off.`,placeholder:`Choose a level`,data:f.map(e=>({value:e.id,label:e.name})),value:g,onChange:v,required:!0}):t.level&&(0,k.jsx)(n,{label:`Level`,value:t.level.name,readOnly:!0,description:`Requested by the holder.`}),(0,k.jsx)(_,{label:j?`Why a different level?`:`Caveats`,description:j?`Required when you sign off a different level from the one asked for. The holder sees this beside both levels.`:`Anything qualifying this sign-off. Optional.`,required:j,value:y,onChange:e=>x(e.currentTarget.value),autosize:!0,minRows:2}),(0,k.jsx)(_,{label:`Assessment notes`,description:`Your own narrative, kept with the record. Optional.`,value:S,onChange:e=>C(e.currentTarget.value),autosize:!0,minRows:3}),(0,k.jsx)(T,{children:(0,k.jsx)(h,{label:`I confirm this declaration`,checked:w,onChange:e=>D(e.currentTarget.checked),required:!0})}),(0,k.jsx)(p,{acceptLabel:`Sign off competency`,acceptDisabled:!N,acceptLoading:a,onAccept:P,onCancel:i})]})})}var O,k,A;function j(){return(j=e((()=>{O=t(),s(),a(),g(),r(),f(),w(),k=i(),A=[{value:`directly observed`,label:`Directly observed`},{value:`reviewed evidence`,label:`Reviewed evidence`},{value:`countersigned`,label:`Countersigned`}],D.__docgenInfo={description:`SignOffForm

Renders the assessor's side of a sign-off. Submission is refused until
a basis is chosen and the declaration is confirmed.`,methods:[],displayName:`SignOffForm`,props:{catalogue:{required:!0,tsType:{name:`union`,raw:`FrameworkCatalogue | null`,elements:[{name:`FrameworkCatalogue`},{name:`null`}]},description:"The frameworks Quill holds, from `useFrameworkCatalogue`, for the\ncompetency's levels. Null while they load, when no level is offered."},signOff:{required:!0,tsType:{name:`SignOff`},description:`The requested sign-off being signed`},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(data: SignOffInput) => void`,signature:{arguments:[{type:{name:`SignOffInput`},name:`data`}],return:{name:`void`}}},description:`Called with the completed input when the assessor submits`},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the assessor backs out without signing`},isSubmitting:{required:!1,tsType:{name:`boolean`},description:`Disables submission while a request is in flight`,defaultValue:{value:`false`,computed:!1}}}}})))()}var M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{s(),j(),S(),v(),u(),M=i(),{fn:N}=__STORYBOOK_MODULE_TEST__,P={title:`Passport/Sign-off form`,tags:[`!dev`],component:D,parameters:{layout:`padded`}},F={args:{catalogue:l,signOff:C,onSubmit:N(),onCancel:N()}},I={args:{signOff:{...C,competency:{id:`ruh_sact_passport_prescribe_sact`,name:`Prescribe SACT`},level:{id:`independent`,name:`Considered competent to prescribe SACT independently (consultant level)`},requested_level:{id:`independent`,name:`Considered competent to prescribe SACT independently (consultant level)`}},onSubmit:N(),onCancel:N()}},L={args:{signOff:C,onSubmit:N(),onCancel:N(),isSubmitting:!0}},R={render:e=>(0,M.jsxs)(c,{gap:`sm`,children:[(0,M.jsx)(D,{...e}),(0,M.jsx)(y,{children:`Submission stays disabled until a basis is chosen and the box is ticked. No drawn or uploaded signature: a scribble looks more official and proves less, since anyone can draw anyone’s name and no reference specimens exist to check one against. What carries the weight is the named account, the timestamp, the frozen registrations and the content hash.`})]}),args:{signOff:C,onSubmit:N(),onCancel:N()}},z={args:{signOff:x,onSubmit:N(),onCancel:N()}},B=[`Default`,`OnAScale`,`Submitting`,`TheDeclarationIsTheSignature`,`WithAScope`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    catalogue: TEST_FRAMEWORK_CATALOGUE,
    signOff: requested,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: {
      ...requested,
      competency: {
        id: "ruh_sact_passport_prescribe_sact",
        name: "Prescribe SACT"
      },
      level: {
        id: "independent",
        name: "Considered competent to prescribe SACT independently (consultant level)"
      },
      requested_level: {
        id: "independent",
        name: "Considered competent to prescribe SACT independently (consultant level)"
      }
    },
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...I.parameters?.docs?.source},description:{story:`A request for a competency on a scale of levels. The level
asked for is chosen to start with; choosing another turns the caveats
field into a required "Why a different level?".`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: requested,
    onSubmit: fn(),
    onCancel: fn(),
    isSubmitting: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <SignOffForm {...args} />
      <StoryNote>
        Submission stays disabled until a basis is chosen and the box is ticked.
        No drawn or uploaded signature: a scribble looks more official and
        proves less, since anyone can draw anyone&rsquo;s name and no reference
        specimens exist to check one against. What carries the weight is the
        named account, the timestamp, the frozen registrations and the content
        hash.
      </StoryNote>
    </Stack>,
  args: {
    signOff: requested,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...R.parameters?.docs?.source},description:{story:`The declaration is the signature - the reason there is no drawing
canvas here.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: requestedForLung,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...z.parameters?.docs?.source},description:{story:`A request that says what it covers. The assessor sees it and cannot
change it: one who assessed something else declines.`,...z.parameters?.docs?.description}}}})))()}V();export{F as Default,I as OnAScale,L as Submitting,R as TheDeclarationIsTheSignature,z as WithAScope,B as __namedExportsOrder,P as default};