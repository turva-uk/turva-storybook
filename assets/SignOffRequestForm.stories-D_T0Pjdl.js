import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{A as n,j as r,x as i}from"./Form-BQWpUpVW.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as o,t as s}from"./BaseCard-C_VuKVYL.js";import{n as c,t as l}from"./Stack-D_d3SZwt.js";import{Ct as u,n as d}from"./appIcons-BpiHpu4d.js";import{t as f}from"./BodyText-Vl4rxmG1.js";import{t as p}from"./Heading-CiSQlEyi.js";import{n as m,t as h}from"./ButtonPair-C-HV7e6O.js";import{t as g}from"./SelectField-CfDE1WBv.js";import{t as _}from"./DateField-DawPXDse.js";import{t as v}from"./EmailField-Dl8PWmM7.js";import{n as y,t as b}from"./form-T0M4Wlbx.js";import{t as x}from"./TextAreaField-DDxRyQwA.js";import{a as S,n as C}from"./variants-US1Dcm7T.js";import{d as w,t as T}from"./passport-BN7maONT.js";import{T as E,f as D,j as O}from"./fixtures-DDuwM3Po.js";function k(e,t,n={leading:!1}){let[r,i]=(0,A.useState)(e),a=(0,A.useRef)(!1),o=(0,A.useRef)(null),s=(0,A.useRef)(!1),c=(0,A.useRef)(e);c.current=e;let l=(0,A.useCallback)(()=>{window.clearTimeout(o.current),o.current=null},[]),u=(0,A.useCallback)(()=>{l(),s.current=!1},[]),d=(0,A.useCallback)(()=>{o.current&&(u(),s.current=!1,i(c.current))},[]);return(0,A.useEffect)(()=>{a.current&&(l(),!s.current&&n.leading?(s.current=!0,i(e),o.current=window.setTimeout(()=>{s.current=!1},t)):o.current=window.setTimeout(()=>{s.current=!1,i(e)},t))},[e,n.leading,t]),(0,A.useEffect)(()=>(a.current=!0,u),[]),[r,u,{cancel:u,flush:d}]}var A;function j(){return(j=e((()=>{A=t()})))()}function M({competency:e,levels:t,scopes:r,holderEmail:i,holderUsername:a,onSubmit:o,onCancel:c,isSubmitting:d=!1}){let[m,b]=(0,N.useState)(``),[S,C]=(0,N.useState)(null),[T,E]=(0,N.useState)(null),[D,O]=(0,N.useState)(null),[A,j]=(0,N.useState)(``),[M,F]=(0,N.useState)(``),I=m.trim(),L=y.value.test(I),[R]=k(I,400),[z,B]=(0,N.useState)(null);(0,N.useEffect)(()=>{if(R.length<3)return;let e=!1;return w(R).then(({matches:t})=>{if(e)return;let n=R.toLowerCase(),r=t.find(e=>e.email.toLowerCase()===n),i=t.length===1?t[0]:null;B({email:R,match:r??i})}).catch(()=>{e||B({email:R,match:null})}),()=>{e=!0}},[R]);let V=z?.email===R?z:null,H=V?.match??null,U=I.toLowerCase(),W=[i,a].some(e=>e!==void 0&&e.trim()!==``&&U===e.trim().toLowerCase()),G=!W&&(H!==null||L),K=(t?.length??0)>0,q=(r?.length??0)>0,J=G&&S!==null&&(!K||T!==null)&&(!q||D!==null)&&!d,[Y,X]=(0,N.useState)(!1);function Z(){J&&S!==null&&o({assessor_email:(H?.email??I).toLowerCase(),observed_on:S,level_id:T,scope_id:D,comments:A.trim()||null,reflection:M.trim()||null})}return(0,P.jsx)(s,{"data-testid":`sign-off-request-form`,children:(0,P.jsxs)(l,{gap:`md`,children:[(0,P.jsxs)(p,{children:[`Request sign-off for `,e.name]}),(0,P.jsx)(v,{label:`Who should assess this?`,description:`Username or email address`,placeholder:`assessor@example.nhs.uk`,value:m,onChange:e=>b(e.currentTarget.value),error:W?`You cannot sign off yourself`:void 0,required:!0}),V!==null&&!W&&(0,P.jsx)(f,{children:H?`${H.full_name??H.username} already uses Quill. They will be emailed and can sign in to sign this off.`:G?`Nobody on Quill uses that address. They will be emailed an invitation, and can register to sign this off.`:`No match yet. Keep typing, or use their email address if they do not use Quill.`}),(0,P.jsx)(_,{label:`Observed on`,description:`The day the work happened, not the day you are asking.`,value:S,onChange:C,maxDate:new Date,maxLevel:`year`,required:!0}),r&&r.length>0&&(0,P.jsx)(g,{label:`What this sign-off covers`,description:`Each one is signed off on its own. Choose Other if yours is not listed, and say which in the box below.`,placeholder:`Choose one`,required:!0,data:r.map(e=>({value:e.id,label:e.name})),value:D,onChange:O}),t&&t.length>0&&(0,P.jsx)(g,{label:`Level you are asking to be signed off at`,description:`Your assessor decides, and may sign off a different level.`,placeholder:`Choose a level`,required:!0,data:t.map(e=>({value:e.id,label:e.name})),value:T,onChange:E}),(0,P.jsx)(x,{label:`Anything the assessor should know`,description:`Optional.`,value:A,onChange:e=>j(e.currentTarget.value),autosize:!0,minRows:2}),(0,P.jsx)(x,{label:`Your reflection`,description:`Optional, and kept with the record. Write about the work, not about a patient.`,value:M,onChange:e=>F(e.currentTarget.value),autosize:!0,minRows:3}),(0,P.jsx)(h,{acceptLabel:`Request sign-off`,acceptDisabled:!J,acceptLoading:d,onAccept:()=>X(!0),onCancel:c}),(0,P.jsx)(n,{opened:Y,onClose:()=>X(!1),onAccept:Z,title:`Ask for this sign-off?`,acceptLabel:`Send request`,destructive:!1,icon:(0,P.jsx)(u,{}),children:(0,P.jsx)(l,{gap:`xs`,children:H?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(f,{children:[H.full_name??H.username,` will be asked to sign off`,` `,e.name,`.`]}),(0,P.jsx)(f,{children:H.email}),H.registrations.map(e=>(0,P.jsxs)(f,{children:[e.body,` `,e.number,` - stated by them, not checked by Quill.`]},`${e.body}-${e.number}`))]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(f,{children:[I,` will be asked to sign off `,e.name,`.`]}),(0,P.jsx)(f,{children:`Nobody on Quill uses that address, so they will be emailed an invitation and can register to sign.`})]})})})]})})}var N,P;function F(){return(F=e((()=>{N=t(),c(),j(),o(),b(),i(),m(),r(),d(),T(),P=a(),M.__docgenInfo={description:`SignOffRequestForm

Renders the request. Submission is refused until an assessor is named,
an observed date given, a level chosen where the competency has a scale
and a scope chosen where it declares scopes.`,methods:[],displayName:`SignOffRequestForm`,props:{competency:{required:!0,tsType:{name:`CompetencyState`},description:`The competency being requested`},levels:{required:!1,tsType:{name:`Array`,elements:[{name:`LevelOption`}],raw:`LevelOption[]`},description:`Levels this competency declares, if it has any`},scopes:{required:!1,tsType:{name:`Array`,elements:[{name:`ScopeOption`}],raw:`ScopeOption[]`},description:`What a sign-off for this competency may cover, if it declares scopes`},holderEmail:{required:!1,tsType:{name:`string`},description:`The holder's own email address, so the form can refuse it.

The server refuses a self-request too, but only once the whole form
has been filled in and sent. Catching it here says so while the
address is still being typed. Passed in rather than read from auth
so the component stays presentational.`},holderUsername:{required:!1,tsType:{name:`string`},description:`The holder's own username, refused for the same reason.

Needed separately because the search leaves the caller out of its
results, so a holder typing their own username finds nobody and
would be told to keep typing rather than that they had named
themselves.`},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(data: SignOffRequestInput) => void`,signature:{arguments:[{type:{name:`SignOffRequestInput`},name:`data`}],return:{name:`void`}}},description:`Called with the completed request`},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the holder backs out`},isSubmitting:{required:!1,tsType:{name:`boolean`},description:`Disables submission while a request is in flight`,defaultValue:{value:`false`,computed:!1}}}}})))()}var I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{c(),F(),D(),S(),I=a(),{fn:L}=__STORYBOOK_MODULE_TEST__,R=[{id:`supervised`,name:`Can perform with supervision available`},{id:`unsupervised`,name:`Can perform independently`}],z=[{id:`breast`,name:`Breast`},{id:`lung`,name:`Lung`},{id:`other`,name:`Other`}],B={title:`Passport/Sign-off request form`,tags:[`!dev`],component:M,parameters:{layout:`padded`}},V={args:{competency:E,onSubmit:L(),onCancel:L()}},H={args:{competency:O,levels:R,onSubmit:L(),onCancel:L()}},U={args:{competency:O,levels:R,scopes:z,onSubmit:L(),onCancel:L()}},W={args:{competency:E,onSubmit:L(),onCancel:L(),isSubmitting:!0}},G={render:e=>(0,I.jsxs)(l,{gap:`sm`,children:[(0,I.jsx)(M,{...e}),(0,I.jsx)(C,{children:`The consultant who observed the work is often at another trust, or not on Quill at all - which is the case this feature exists for. A list of existing users had no row for them, so the holder could not ask. They are emailed, and sign in or register to sign.`})]}),args:{competency:E,onSubmit:L(),onCancel:L()}},K={render:e=>(0,I.jsxs)(l,{gap:`sm`,children:[(0,I.jsx)(M,{...e}),(0,I.jsx)(C,{children:`Fill in an address and a date, then ask: the form confirms who it found before anything is sent. A registration number is hard evidence that this is the right person - two consultants may share a name, and an address says only that somebody controls a mailbox. It says the number is stated by them rather than checked by Quill, because nobody here has checked a register.`})]}),args:{competency:E,onSubmit:L(),onCancel:L()}},q=[`Default`,`WithLevels`,`WithScopes`,`Submitting`,`AnAssessorFromAnywhere`,`ConfirmsBeforeSending`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    competency: requestedCompetency,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    competency: signedOffCompetency,
    levels,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    competency: signedOffCompetency,
    levels,
    scopes,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...U.parameters?.docs?.source},description:{story:`A competency signed off one scope at a time, such as a tumour site.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    competency: requestedCompetency,
    onSubmit: fn(),
    onCancel: fn(),
    isSubmitting: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <SignOffRequestForm {...args} />
      <StoryNote>
        The consultant who observed the work is often at another trust, or not
        on Quill at all - which is the case this feature exists for. A list of
        existing users had no row for them, so the holder could not ask. They
        are emailed, and sign in or register to sign.
      </StoryNote>
    </Stack>,
  args: {
    competency: requestedCompetency,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...G.parameters?.docs?.source},description:{story:`The assessor is named by email, so somebody with no Quill account can
still be asked.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <SignOffRequestForm {...args} />
      <StoryNote>
        Fill in an address and a date, then ask: the form confirms who it found
        before anything is sent. A registration number is hard evidence that
        this is the right person - two consultants may share a name, and an
        address says only that somebody controls a mailbox. It says the number
        is stated by them rather than checked by Quill, because nobody here has
        checked a register.
      </StoryNote>
    </Stack>,
  args: {
    competency: requestedCompetency,
    onSubmit: fn(),
    onCancel: fn()
  }
}`,...K.parameters?.docs?.source},description:{story:`Asking stops for confirmation, and a known assessor is shown by name
and registration number.`,...K.parameters?.docs?.description}}}})))()}J();export{G as AnAssessorFromAnywhere,K as ConfirmsBeforeSending,V as Default,W as Submitting,H as WithLevels,U as WithScopes,q as __namedExportsOrder,B as default};