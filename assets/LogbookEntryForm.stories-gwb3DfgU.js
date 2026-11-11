import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{p as n,x as r}from"./Form-BQWpUpVW.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{t as l}from"./BodyText-Vl4rxmG1.js";import{t as u}from"./Heading-CiSQlEyi.js";import{n as d,t as f}from"./ButtonPair-C-HV7e6O.js";import{t as p}from"./SelectField-CfDE1WBv.js";import{t as m}from"./DateField-DawPXDse.js";import{t as h}from"./EmailField-Dl8PWmM7.js";import{n as g,t as _}from"./form-T0M4Wlbx.js";import{t as v}from"./TextAreaField-DDxRyQwA.js";import{a as y,n as b}from"./variants-US1Dcm7T.js";import{f as x,j as S}from"./fixtures-DDuwM3Po.js";function C({competency:e,scopes:t,onSubmit:r,onCancel:i,isSubmitting:a=!1,initial:s}){let[d,_]=(0,w.useState)(s?.scope?.id??null),[y,b]=(0,w.useState)(s?.performed_on??null),[x,S]=(0,w.useState)(s?.setting??``),[C,D]=(0,w.useState)(s?.supervision??null),[O,k]=(0,w.useState)(s?.supervisor??``),[A,j]=(0,w.useState)(s?.indication??``),[M,N]=(0,w.useState)(s?.outcome??``),[P,F]=(0,w.useState)(s?.notes??``),[I,L]=(0,w.useState)(``),R=I.trim(),z=R===``||g.value.test(R),B=(t?.length??0)>0,V=y!==null&&(!B||d!==null)&&z&&!a;function H(){V&&y!==null&&r({performed_on:y,scope_id:d,setting:x.trim()||null,supervision:C,supervisor:O.trim()||null,indication:A.trim()||null,outcome:M.trim()||null,notes:P.trim()||null,confirmer_email:R===``?null:R.toLowerCase()})}return(0,T.jsx)(o,{"data-testid":`logbook-entry-form`,children:(0,T.jsxs)(c,{gap:`md`,children:[(0,T.jsx)(u,{children:s?`Edit this ${e.name} entry`:`Add a ${e.name} entry`}),(0,T.jsx)(m,{label:`Performed on`,description:`The day the procedure happened, not the day you are logging it.`,value:y,onChange:b,maxDate:new Date,maxLevel:`year`,required:!0}),t&&t.length>0&&(0,T.jsx)(p,{label:`What it counts towards`,description:`A sign-off counts the entries for what it covers. Choose Other if yours is not listed.`,placeholder:`Choose one`,required:!0,data:t.map(e=>({value:e.id,label:e.name})),value:d,onChange:_}),(0,T.jsx)(n,{label:`Setting`,description:`Where it happened. Optional.`,value:x,onChange:e=>S(e.currentTarget.value)}),(0,T.jsx)(p,{label:`Supervision`,description:`Recorded as a fact, not judged. Optional.`,placeholder:`Choose one`,data:E,value:C,onChange:e=>D(e)}),(0,T.jsx)(n,{label:`Supervisor`,description:`Who was supervising, where somebody was. Optional.`,value:O,onChange:e=>k(e.currentTarget.value)}),(0,T.jsx)(n,{label:`Indication`,description:`Why it was done. Optional, and never a patient identifier.`,value:A,onChange:e=>j(e.currentTarget.value)}),(0,T.jsx)(n,{label:`Outcome`,description:`What happened, including where it did not go to plan. Never anything that could identify a patient.`,value:M,onChange:e=>N(e.currentTarget.value)}),(0,T.jsx)(v,{label:`Notes`,description:`Optional. Write about the procedure, not about a patient.`,value:P,onChange:e=>F(e.currentTarget.value),autosize:!0,minRows:2}),(0,T.jsx)(h,{label:`Ask a supervisor to confirm this entry`,description:`Optional. They are emailed, and their name is recorded beside the entry once they confirm it.`,placeholder:`supervisor@example.nhs.uk`,value:I,onChange:e=>L(e.currentTarget.value),error:z?void 0:`Enter a full email address`}),s?.confirmed_by&&(0,T.jsxs)(l,{children:[s.confirmed_by.name,` confirmed this entry. Saving changes removes their confirmation, and you can ask for it again above.`]}),(0,T.jsx)(f,{acceptLabel:s?`Save changes`:`Add entry`,acceptDisabled:!V,acceptLoading:a,onAccept:H,onCancel:i})]})})}var w,T,E;function D(){return(D=e((()=>{w=t(),s(),a(),_(),r(),d(),T=i(),E=[{value:`supervised`,label:`Supervised`},{value:`independent`,label:`Independent`}],C.__docgenInfo={description:`LogbookEntryForm

Renders the entry. Only the date is required, and what it counts
towards where the competency declares scopes - the rest is detail the
holder adds where it is worth adding.`,methods:[],displayName:`LogbookEntryForm`,props:{competency:{required:!0,tsType:{name:`CompetencyState`},description:`The competency this entry counts towards`},scopes:{required:!1,tsType:{name:`Array`,elements:[{name:`ScopeOption`}],raw:`ScopeOption[]`},description:`What an entry for this competency may count towards, if it declares
scopes. The field is offered only then, and must be answered, as on
a sign-off: a scope decides which sign-off an entry counts towards.`},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(data: LogbookEntryInput) => void`,signature:{arguments:[{type:{name:`LogbookEntryInput`},name:`data`}],return:{name:`void`}}},description:`Called with the completed entry`},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the holder backs out`},isSubmitting:{required:!1,tsType:{name:`boolean`},description:`Disables submission while a request is in flight`,defaultValue:{value:`false`,computed:!1}},initial:{required:!1,tsType:{name:`LogbookEntry`},description:`An entry to correct. The form starts filled in from it, and says so
in its heading and button; without it the form adds a new entry.`}}}})))()}var O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{s(),D(),x(),y(),O=i(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Passport/Logbook entry form`,tags:[`!dev`],component:C,parameters:{layout:`padded`}},j={args:{competency:S,onSubmit:k(),onCancel:k()}},M={args:{competency:S,initial:{filename:`20260314T1432`,competency:S.id,performed_on:`2026-03-14`,setting:`Bronchoscopy suite`,supervision:`supervised`,supervisor:`Dr Okonkwo`,indication:`Suspected lung cancer`,outcome:`Biopsies taken`,notes:null,also_counts_towards:[],attachments:[]},onSubmit:k(),onCancel:k()}},N={args:{competency:S,onSubmit:k(),onCancel:k(),isSubmitting:!0}},P={render:e=>(0,O.jsxs)(c,{gap:`sm`,children:[(0,O.jsx)(C,{...e}),(0,O.jsx)(b,{children:`No declaration, no assessor and no target. A logbook proves activity, not competence - it is the sign-off that turns evidence into a conclusion. Only the date is required; failures and abandoned attempts belong in the record as much as successes do.`})]}),args:{competency:S,onSubmit:k(),onCancel:k()}},F={args:{competency:S,scopes:[{id:`breast`,name:`Breast`},{id:`lung`,name:`Lung`},{id:`other`,name:`Other`}],onSubmit:k(),onCancel:k()}},I=[`Default`,`Editing`,`Submitting`,`NobodyCountersignsThis`,`WithScopes`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    competency: signedOffCompetency,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    competency: signedOffCompetency,
    initial: {
      filename: "20260314T1432",
      competency: signedOffCompetency.id,
      performed_on: "2026-03-14",
      setting: "Bronchoscopy suite",
      supervision: "supervised",
      supervisor: "Dr Okonkwo",
      indication: "Suspected lung cancer",
      outcome: "Biopsies taken",
      notes: null,
      also_counts_towards: [],
      attachments: []
    },
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...M.parameters?.docs?.source},description:{story:`Correcting an entry: filled in from it, saving rather than adding.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    competency: signedOffCompetency,
    onSubmit: fn(),
    onCancel: fn(),
    isSubmitting: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <LogbookEntryForm {...args} />
      <StoryNote>
        No declaration, no assessor and no target. A logbook proves activity,
        not competence - it is the sign-off that turns evidence into a
        conclusion. Only the date is required; failures and abandoned attempts
        belong in the record as much as successes do.
      </StoryNote>
    </Stack>,
  args: {
    competency: signedOffCompetency,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...P.parameters?.docs?.source},description:{story:`Self-declared, and nothing here pretends otherwise.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    competency: signedOffCompetency,
    scopes: [{
      id: "breast",
      name: "Breast"
    }, {
      id: "lung",
      name: "Lung"
    }, {
      id: "other",
      name: "Other"
    }],
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...F.parameters?.docs?.source},description:{story:`A competency signed off scope by scope asks for the scope here too,
and the entry cannot be added without it, exactly as on a sign-off.`,...F.parameters?.docs?.description}}}})))()}L();export{j as Default,M as Editing,P as NobodyCountersignsThis,N as Submitting,F as WithScopes,I as __namedExportsOrder,A as default};