import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{F as n,M as r,N as i,P as a,m as o,n as s,o as c,p as l,t as u}from"./Form-BQWpUpVW.js";import{t as d}from"./jsx-runtime-MKhVqBIO.js";import{n as f,t as p}from"./MultiSelectField-Dn62m3xs.js";import{n as m,t as h}from"./Stack-D_d3SZwt.js";import{n as g,t as _}from"./SolidSwitch-B5z1COCw.js";import{n as v,r as y}from"./api-9BtBfbLR.js";import{o as b,s as x}from"./iframe-gh_IKeZo.js";import{n as S,t as C}from"./Heading-CiSQlEyi.js";import{a as w,t as T}from"./FormStatusNarrow-CFbV3b2J.js";import{n as E,t as D}from"./BodyTextBold-CxqNt9uz.js";import{n as O,t as k}from"./SelectField-CfDE1WBv.js";import{n as A,t as j}from"./TextAreaField-DDxRyQwA.js";function M({patients:e,users:t,loadingPatients:n,loadingUsers:i,lockedPatientId:a,lockedPatientName:o,isPatientUser:c,onClose:u}){let{methods:d}=w(),{watch:f,setValue:m,register:g,control:v}=d,y=f(`includePatient`);return(0,F.jsxs)(h,{gap:`md`,children:[c?null:a?(0,F.jsxs)(D,{children:[`Patient: `,o??a]}):(0,F.jsx)(r,{name:`patientId`,control:v,rules:{required:!0},render:({field:t})=>(0,F.jsx)(k,{label:`Patient`,placeholder:`Select a patient`,data:e,value:t.value,onChange:t.onChange,searchable:!0,required:!0,disabled:n,nothingFoundMessage:n?`Loading patients…`:`No patients found`})}),!c&&(0,F.jsx)(`div`,{children:(0,F.jsx)(_,{label:`Patient as participant`,description:`Allow the patient to reply to this conversation`,checked:y,onChange:e=>m(`includePatient`,e.currentTarget.checked,{shouldDirty:!0})})}),(0,F.jsx)(r,{name:`participantIds`,control:v,render:({field:e})=>(0,F.jsx)(p,{label:`Participants`,placeholder:`Add staff to this conversation`,data:t,value:e.value,onChange:e.onChange,searchable:!0,disabled:i,nothingFoundMessage:i?`Loading users…`:`No users found`})}),(0,F.jsx)(l,{label:`Subject`,placeholder:`e.g. Prescription renewal`,required:!0,...g(`subject`,{required:!0})}),(0,F.jsx)(j,{label:`Message`,placeholder:`Type your message…`,minRows:3,autosize:!0,maxRows:8,required:!0,...g(`initialMessage`,{required:!0})}),(0,F.jsx)(T,{}),(0,F.jsx)(s,{onCancel:u,cancelLabel:`Cancel`})]})}function N({opened:e,onClose:t,onSubmit:n,patientId:r,patientName:i,isPatientView:o}){let{state:s}=x(),l=o??(s.status===`authenticated`&&s.user.fhir_patient_id!=null),[u,d]=(0,P.useState)([]),[f,p]=(0,P.useState)([]),[m,h]=(0,P.useState)(!1),[g,_]=(0,P.useState)(!1);return(0,P.useEffect)(()=>{e&&(r||(h(!0),v.get(`/patients`).then(e=>{d(e.patients.map(e=>{let t=e.name?.[0],n=t?.given?.[0]??``,r=t?.family??``;return{value:e.id,label:`${n} ${r}`.trim()||e.id}}))}).catch(()=>{}).finally(()=>h(!1))),_(!0),v.get(`/users`).then(e=>{p(e.users.map(e=>({value:String(e.id),label:e.username})))}).catch(()=>{}).finally(()=>_(!1)))},[e,r]),e?(0,F.jsx)(a,{opened:e,onClose:t,title:(0,F.jsx)(C,{children:`New message`}),size:`lg`,centered:!0,children:(0,F.jsx)(c,{defaultValues:{patientId:r??null,participantIds:[],subject:``,initialMessage:``,includePatient:!1},onSubmit:async e=>{let t=r??e.patientId;return t?n({patient_id:t,subject:e.subject.trim(),participant_ids:e.participantIds.map(Number),initial_message:e.initialMessage.trim(),include_patient_as_participant:l?!0:e.includePatient}):{state:`validation_error`,message:{title:`Please select a patient`}}},submitLabel:`Start conversation`,submittingLabel:`Creating…`,children:(0,F.jsx)(M,{patients:u,users:f,loadingPatients:m,loadingUsers:g,lockedPatientId:r,lockedPatientName:i,isPatientUser:l,onClose:t})})}):null}var P,F;function I(){return(I=e((()=>{y(),b(),u(),f(),O(),A(),o(),g(),E(),S(),n(),m(),P=t(),i(),F=d(),N.__docgenInfo={description:``,methods:[],displayName:`NewMessageModal`,props:{opened:{required:!0,tsType:{name:`boolean`},description:`Whether the modal is open`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the modal is closed`},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(data: NewConversationData) => Promise<FormSubmitResult>`,signature:{arguments:[{type:{name:`NewConversationData`},name:`data`}],return:{name:`Promise`,elements:[{name:`FormSubmitResult`}],raw:`Promise<FormSubmitResult>`}}},description:`Called when the user submits the form - should return a FormSubmitResult`},patientId:{required:!1,tsType:{name:`string`},description:`Pre-selected patient ID (locks the patient selector)`},patientName:{required:!1,tsType:{name:`string`},description:`Patient name to display when patientId is locked`},isPatientView:{required:!1,tsType:{name:`boolean`},description:`Override patient-view mode (hides patient field and toggle). Defaults to auth context.`}}}})))()}var L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{I(),{userEvent:L,within:R}=__STORYBOOK_MODULE_TEST__,z=e=>new Promise(t=>setTimeout(t,e)),B=async()=>(await z(1e3),{state:`success`,message:{title:`Conversation started`}}),V={title:`Messaging/New message modal`,component:N,parameters:{layout:`fullscreen`},args:{opened:!0,onClose:()=>{},onSubmit:B}},H={},U={args:{patientId:`p-1`,patientName:`James Green`}},W={args:{isPatientView:!0,patientId:`p-1`,patientName:`James Green`}},G={args:{isPatientView:!0,patientId:`p-1`,patientName:`James Green`,onSubmit:async()=>(await z(500),{state:`error`,message:{title:`Failed to create conversation. Please try again.`}})},play:async()=>{let e=R(document.body),t=e.getByPlaceholderText(`Add staff to this conversation`);await L.type(t,`Dr`),await L.keyboard(`{Escape}`),await L.type(e.getByLabelText(`Subject *`),`Prescription renewal`),await L.type(e.getByLabelText(`Message *`),`Hello, I need to renew my prescription.`),await L.click(e.getByTestId(`submit-button`))}},K={...H,globals:{colorScheme:`dark`}},q=[`Default`,`WithLockedPatient`,`PatientView`,`WithError`,`DarkMode`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{}`,...H.parameters?.docs?.source},description:{story:`Default modal with patient selector visible`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    patientId: "p-1",
    patientName: "James Green"
  }
}`,...U.parameters?.docs?.source},description:{story:`Patient pre-selected - shows patient name, selector hidden`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isPatientView: true,
    patientId: "p-1",
    patientName: "James Green"
  }
}`,...W.parameters?.docs?.source},description:{story:`Patient user view - patient field and toggle hidden`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    isPatientView: true,
    patientId: "p-1",
    patientName: "James Green",
    onSubmit: async () => {
      await delay(500);
      return {
        state: "error",
        message: {
          title: "Failed to create conversation. Please try again."
        }
      } satisfies FormSubmitResult;
    }
  },
  play: async () => {
    // Modal renders in a portal, so query from document.body
    const body = within(document.body);
    // Click into Participants and type to show we tried
    const participantsInput = body.getByPlaceholderText("Add staff to this conversation");
    await userEvent.type(participantsInput, "Dr");
    // Close the dropdown by pressing Escape
    await userEvent.keyboard("{Escape}");
    await userEvent.type(body.getByLabelText("Subject *"), "Prescription renewal");
    await userEvent.type(body.getByLabelText("Message *"), "Hello, I need to renew my prescription.");
    await userEvent.click(body.getByTestId("submit-button"));
  }
}`,...G.parameters?.docs?.source},description:{story:`Error state - submits and shows inline error via FormStatusNarrow`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...K.parameters?.docs?.source}}}})))()}J();export{K as DarkMode,H as Default,W as PatientView,G as WithError,U as WithLockedPatient,q as __namedExportsOrder,V as default};