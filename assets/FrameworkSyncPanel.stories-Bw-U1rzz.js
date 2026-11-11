import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,x as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Skeleton-MhOxmKho.js";import{n as c,t as l}from"./Stack-D_d3SZwt.js";import{t as u}from"./BodyText-Vl4rxmG1.js";import{t as d}from"./Heading-CiSQlEyi.js";import{n as f,t as p}from"./IconTextButton-Dujo5R-j.js";import{t as m}from"./page-header-DDmZahL6.js";import{n as h,t as g}from"./ResultMessage-_al_-JbK.js";function _(e){return new Date(e).toLocaleString(`en-GB`,{dateStyle:`medium`,timeStyle:`short`})}function v(e){return e.status===`failed`?`It failed, and nothing was stored.`:e.versions_written===0?`Every framework was up to date.`:e.versions_written===1?`It stored 1 new framework version.`:`It stored ${e.versions_written} new framework versions.`}function y({run:e}){return e===null?(0,x.jsx)(u,{children:`The frameworks have not been synced yet.`}):(0,x.jsxs)(l,{gap:`xs`,children:[(0,x.jsxs)(u,{children:[`Started `,_(e.started_at),`.`]}),e.finished_at!==null&&(0,x.jsxs)(u,{children:[`Finished `,_(e.finished_at),`.`]}),(0,x.jsx)(u,{children:v(e)}),e.error!==null&&(0,x.jsx)(u,{children:e.error})]})}function b({status:e,loading:n=!1,starting:r=!1,started:i=!1,refusal:o=null,onSync:c}){return(0,x.jsxs)(l,{gap:`lg`,children:[(0,x.jsx)(t,{title:`Passport`,subtitle:`Sync the frameworks from their repositories`,action:(0,x.jsx)(p,{icon:`refresh`,label:`Sync frameworks`,onClick:c,loading:r,disabled:r})}),o!==null&&(0,x.jsx)(g,{variant:`warning`,title:o}),i&&(0,x.jsx)(g,{variant:`success`,title:`The framework sync has started`,subtitle:`It takes up to ten minutes. How it went appears below once it finishes.`}),(0,x.jsx)(a,{children:(0,x.jsxs)(l,{gap:`sm`,children:[(0,x.jsx)(d,{children:`Last sync`}),n||e===null?(0,x.jsx)(s,{height:60}):(0,x.jsx)(y,{run:e.last_run})]})})]})}var x;function S(){return(S=e((()=>{o(),c(),i(),f(),h(),m(),n(),x=r(),b.__docgenInfo={description:``,methods:[],displayName:`FrameworkSyncPanel`,props:{status:{required:!0,tsType:{name:`union`,raw:`FrameworkSyncStatus | null`,elements:[{name:`FrameworkSyncStatus`},{name:`null`}]},description:`Whether the sync is set up here, and its last run. Null until loaded.`},loading:{required:!1,tsType:{name:`boolean`},description:`The status is still loading.`,defaultValue:{value:`false`,computed:!1}},starting:{required:!1,tsType:{name:`boolean`},description:`A start has been asked for and has not answered yet.`,defaultValue:{value:`false`,computed:!1}},started:{required:!1,tsType:{name:`boolean`},description:`The job was started by this page and has not reported back yet.`,defaultValue:{value:`false`,computed:!1}},refusal:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`Why the last start was refused, in the server's words.`,defaultValue:{value:`null`,computed:!1}},onSync:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when "Sync frameworks" is pressed.`}}}})))()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{S(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Passport/Framework sync panel`,tags:[`!dev`],component:b,parameters:{layout:`padded`},args:{onSync:C()}},T={started_at:`2026-11-04T15:20:00Z`,finished_at:`2026-11-04T15:21:30Z`,status:`succeeded`,versions_written:2,error:null},E={configured:!0,last_run:T},D={args:{status:E}},O={args:{status:{configured:!0,last_run:{...T,versions_written:0}}}},k={args:{status:{configured:!0,last_run:{...T,status:`failed`,versions_written:0,error:`Framework 'clinical' skipped version 2, so no version was stored.`}}}},A={args:{status:{configured:!0,last_run:null}}},j={args:{status:E,started:!0}},M={args:{status:{configured:!1,last_run:null},refusal:`The framework sync is not set up here.`}},N={args:{status:E,starting:!0}},P={args:{status:null,loading:!0}},F={...D,globals:{colorScheme:`dark`}},I={...k,globals:{colorScheme:`dark`}},L={...P,globals:{colorScheme:`dark`}},R=[`Default`,`UpToDate`,`Failed`,`NeverSynced`,`Started`,`NotSetUpHere`,`Starting`,`Loading`,`DarkMode`,`DarkModeFailed`,`DarkModeLoading`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    status: succeeded
  }
}`,...D.parameters?.docs?.source},description:{story:`The last run stored two new versions.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      configured: true,
      last_run: {
        ...lastRun,
        versions_written: 0
      }
    }
  }
}`,...O.parameters?.docs?.source},description:{story:`The last run found nothing new.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      configured: true,
      last_run: {
        ...lastRun,
        status: "failed",
        versions_written: 0,
        error: "Framework 'clinical' skipped version 2, so no version was stored."
      }
    }
  }
}`,...k.parameters?.docs?.source},description:{story:`The last run failed, and says why.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      configured: true,
      last_run: null
    }
  }
}`,...A.parameters?.docs?.source},description:{story:`No run yet.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    status: succeeded,
    started: true
  }
}`,...j.parameters?.docs?.source},description:{story:`The button was pressed and the job has started.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      configured: false,
      last_run: null
    },
    refusal: "The framework sync is not set up here."
  }
}`,...M.parameters?.docs?.source},description:{story:`Pressed where no job is set up: a laptop or the end-to-end stack.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    status: succeeded,
    starting: true
  }
}`,...N.parameters?.docs?.source},description:{story:`The start is on its way.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    status: null,
    loading: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...Failed,
  globals: {
    colorScheme: "dark"
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...Loading,
  globals: {
    colorScheme: "dark"
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{F as DarkMode,I as DarkModeFailed,L as DarkModeLoading,D as Default,k as Failed,P as Loading,A as NeverSynced,M as NotSetUpHere,j as Started,N as Starting,O as UpToDate,R as __namedExportsOrder,w as default};