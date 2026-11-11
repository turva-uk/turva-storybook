import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{F as n,P as r,x as i}from"./Form-BQWpUpVW.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as o,t as s}from"./Textarea-GP1rCg2C.js";import{n as c,t as l}from"./Stack-D_d3SZwt.js";import{Cn as u,n as d}from"./appIcons-BpiHpu4d.js";import{t as f}from"./BodyText-Vl4rxmG1.js";import{t as p}from"./Heading-CiSQlEyi.js";import{n as m,t as h}from"./ButtonPair-C-HV7e6O.js";import{t as g}from"./StateMessage-BtkL8y7a.js";import{t as _}from"./message-cards-Dy98AG8B.js";var v,y;function b(){return(b=e((()=>{v=`_editor_1bmkc_4`,y={editor:v}})))()}function x({opened:e,onClose:t,filename:n,webvtt:i=null,loading:a=!1,onSave:o,error:c=null}){let[d,m]=(0,S.useState)(null),[_,v]=(0,S.useState)(!1),b=d??i??``;return(0,C.jsx)(r,{opened:e,onClose:t,size:`xl`,title:`Edit captions`,children:(0,C.jsxs)(l,{gap:`md`,children:[n&&(0,C.jsx)(p,{children:n}),c&&(0,C.jsx)(g,{icon:(0,C.jsx)(u,{}),colour:`alert`,title:`Something went wrong`,description:c}),!a&&i===null&&(0,C.jsx)(g,{icon:(0,C.jsx)(u,{}),colour:`warning`,title:`No captions yet`,description:`The caption job has not produced a transcript for this video. You can write one here, starting with the line WEBVTT.`}),(0,C.jsx)(f,{children:`Machine transcription mishears clinical terms. Correct the words, not the timings - each block begins with the time it appears.`}),(0,C.jsx)(s,{value:b,onChange:e=>m(e.currentTarget.value),minRows:16,maxRows:28,autosize:!0,disabled:a,"aria-label":`WebVTT captions`,placeholder:a?`Loading…`:`WEBVTT`,classNames:{input:y.editor}}),(0,C.jsx)(h,{acceptLabel:`Save captions`,onAccept:async()=>{v(!0);try{await o(b)&&t()}finally{v(!1)}},onCancel:t,acceptLoading:_,acceptDisabled:a||_})]})})}var S,C;function w(){return(w=e((()=>{S=t(),n(),c(),o(),m(),i(),b(),_(),d(),C=a(),x.__docgenInfo={description:``,methods:[],displayName:`CaptionEditorModal`,props:{opened:{required:!0,tsType:{name:`boolean`},description:`Controls modal visibility.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called on Cancel or Escape.`},filename:{required:!1,tsType:{name:`string`},description:`The file this editor is for, shown so the admin knows which.`},webvtt:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`The WebVTT as loaded.

Null means the caption job has not run - a different thing from an
empty file, and shown as such rather than as a blank box the admin
might save over nothing.`,defaultValue:{value:`null`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`True while the file is being fetched.`,defaultValue:{value:`false`,computed:!1}},onSave:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(webvtt: string) => Promise<boolean>`,signature:{arguments:[{type:{name:`string`},name:`webvtt`}],return:{name:`Promise`,elements:[{name:`boolean`}],raw:`Promise<boolean>`}}},description:`Called with the edited text. Returns true when it saved.`},error:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`What went wrong loading or saving, shown rather than swallowed.`,defaultValue:{value:`null`,computed:!1}}}}})))()}var T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{w(),T={title:`Teaching/Caption editor modal`,tags:[`!dev`],component:x,parameters:{layout:`padded`},args:{opened:!0,onClose:()=>{},onSave:async()=>!0}},E=`WEBVTT

00:00:01.000 --> 00:00:04.500
The dye is a stole pressure is measured first

00:00:04.500 --> 00:00:08.000
and the a fib is rate controlled`,D={args:{filename:`atrial-fibrillation-intro.mp4`,webvtt:E}},O={args:{filename:`atrial-fibrillation-intro.mp4`,webvtt:null}},k={args:{filename:`atrial-fibrillation-intro.mp4`,webvtt:E,error:`Captions must be WebVTT, beginning with the line WEBVTT`}},A={args:{filename:`atrial-fibrillation-intro.mp4`,loading:!0}},j={...D,globals:{colorScheme:`dark`}},M=[`Unreviewed`,`NoCaptionsYet`,`SaveRejected`,`Loading`,`DarkMode`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "atrial-fibrillation-intro.mp4",
    webvtt: WHISPER_OUTPUT
  }
}`,...D.parameters?.docs?.source},description:{story:`What Whisper produces before anyone has corrected it.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "atrial-fibrillation-intro.mp4",
    webvtt: null
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "atrial-fibrillation-intro.mp4",
    webvtt: WHISPER_OUTPUT,
    error: "Captions must be WebVTT, beginning with the line WEBVTT"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "atrial-fibrillation-intro.mp4",
    loading: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...Unreviewed,
  globals: {
    colorScheme: "dark"
  }
}`,...j.parameters?.docs?.source}}}})))()}N();export{j as DarkMode,A as Loading,O as NoCaptionsYet,k as SaveRejected,D as Unreviewed,M as __namedExportsOrder,T as default};