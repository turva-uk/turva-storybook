import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{M as n,N as r,i,n as a,o,t as s,x as c}from"./Form-BQWpUpVW.js";import{t as l}from"./jsx-runtime-MKhVqBIO.js";import{n as u,t as d}from"./Stack-D_d3SZwt.js";import{t as f}from"./Heading-CiSQlEyi.js";import{a as p}from"./FormStatusNarrow-CFbV3b2J.js";import{n as m,t as h}from"./ModuleEnrolmentEditor-BScRCXcA.js";function g(){return(g=e((()=>{m()})))()}function _(e){let t={};for(let n of e)n.missing.includes(`enrolment`)||(t[n.question_bank_id]=n.enrolment_ends_on?n.enrolment_ends_on.slice(0,10):null);return t}function v(e,t){let n=[],r=[];for(let[i,a]of Object.entries(e))i in t?t[i]!==a&&(r.push(i),n.push({moduleId:i,endsOn:a})):n.push({moduleId:i,endsOn:a});for(let n of Object.keys(t))n in e||r.push(n);return{enrol:n,unenrol:r}}function y({organisation:e,note:t}){let{methods:r,formState:i}=p();return(0,C.jsx)(n,{name:`enrolments`,control:r.control,render:({field:n})=>(0,C.jsx)(h,{organisations:[e],value:{[e.id]:n.value??{}},onChange:t=>n.onChange(t[e.id]??{}),note:t,disabled:i===`submitting`})})}function b({saved:e}){let{methods:t}=p();return(0,S.useEffect)(()=>{t.reset({enrolments:e},{keepDirtyValues:!0})},[t,e]),null}function x({organisation:e,access:t,onSave:n}){let r=(0,S.useMemo)(()=>_(t),[t]),s=(0,S.useMemo)(()=>new Map(t.map(e=>[e.question_bank_id,e])),[t]);function c(e,t){let n=s.get(t);if(n&&!n.missing.includes(`enrolment`))return n.may_enter?`Can enter this module.`:`Enrolled, but cannot enter yet: ${n.missing.map(e=>w[e]).join(`, `)}.`}async function l(e){try{return await n(v(e.enrolments,r)),{state:`success`,message:{title:`Enrolment updated`}}}catch(e){return{state:`error`,message:{title:`Failed to update enrolment`,description:e instanceof Error?e.message:`An unexpected error occurred`}}}}return(0,C.jsxs)(d,{gap:`md`,children:[(0,C.jsx)(f,{children:`Teaching`}),(0,C.jsxs)(o,{defaultValues:{enrolments:r},onSubmit:l,submitLabel:`Save enrolment`,submittingLabel:`Saving…`,disableWhenClean:!0,children:[(0,C.jsx)(b,{saved:r}),(0,C.jsxs)(d,{gap:`md`,children:[(0,C.jsx)(i,{}),(0,C.jsx)(y,{organisation:e,note:c}),(0,C.jsx)(a,{})]})]})]})}var S,C,w;function T(){return(T=e((()=>{S=t(),u(),r(),s(),c(),g(),C=l(),w={competency:`may not take modules`,place:`no place at this centre`,enrolment:`not enrolled`},x.__docgenInfo={description:``,methods:[],displayName:`MemberTeachingPanel`,props:{organisation:{required:!0,tsType:{name:`EnrolmentOrganisation`},description:`The organisation above this org_unit, and the modules it serves`},access:{required:!0,tsType:{name:`Array`,elements:[{name:`ModuleAccess`}],raw:`ModuleAccess[]`},description:`Their way into each module, as the API answered`},onSave:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(changes: EnrolmentChanges) => Promise<void>`,signature:{arguments:[{type:{name:`EnrolmentChanges`},name:`changes`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:`Save the ticks that moved. Rejects, naming what failed, if any did.`}}}})))()}var E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{T(),E={id:3,name:`East of England Endoscopy Training Academy`,modules:[{id:`colonoscopy-optical-diagnosis`,title:`Colonoscopy optical diagnosis`},{id:`chest-xray-interpretation`,title:`Chest X-ray interpretation`}]},D={title:`Teaching/MemberTeachingPanel`,tags:[`!dev`],component:x,args:{organisation:E,onSave:async()=>{},access:[{question_bank_id:`colonoscopy-optical-diagnosis`,title:`Colonoscopy optical diagnosis`,may_enter:!0,missing:[],enrolment_ends_on:null},{question_bank_id:`chest-xray-interpretation`,title:`Chest X-ray interpretation`,may_enter:!1,missing:[`enrolment`],enrolment_ends_on:null}]}},O={},k={args:{access:[{question_bank_id:`colonoscopy-optical-diagnosis`,title:`Colonoscopy optical diagnosis`,may_enter:!1,missing:[`place`],enrolment_ends_on:null},{question_bank_id:`chest-xray-interpretation`,title:`Chest X-ray interpretation`,may_enter:!1,missing:[`place`,`enrolment`],enrolment_ends_on:null}]}},A={args:{access:E.modules.map(e=>({question_bank_id:e.id,title:e.title,may_enter:!1,missing:[`competency`,`place`,`enrolment`],enrolment_ends_on:null}))}},j={args:{access:[{question_bank_id:`colonoscopy-optical-diagnosis`,title:`Colonoscopy optical diagnosis`,may_enter:!0,missing:[],enrolment_ends_on:`2027-10-05T23:59:59Z`},{question_bank_id:`chest-xray-interpretation`,title:`Chest X-ray interpretation`,may_enter:!1,missing:[`enrolment`],enrolment_ends_on:null}]}},M={globals:{colorScheme:`dark`}},N=[`Default`,`EnrolledWithoutAPlace`,`NothingYet`,`WithAnEndDate`,`Dark`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source},description:{story:`Enrolled on one module and able to enter it; not on the other.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    access: [{
      question_bank_id: "colonoscopy-optical-diagnosis",
      title: "Colonoscopy optical diagnosis",
      may_enter: false,
      missing: ["place"],
      enrolment_ends_on: null
    }, {
      question_bank_id: "chest-xray-interpretation",
      title: "Chest X-ray interpretation",
      may_enter: false,
      missing: ["place", "enrolment"],
      enrolment_ends_on: null
    }]
  }
}`,...k.parameters?.docs?.source},description:{story:`Enrolled, with no place at this centre.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    access: organisation.modules.map(module => ({
      question_bank_id: module.id,
      title: module.title,
      may_enter: false,
      missing: ["competency", "place", "enrolment"],
      enrolment_ends_on: null
    }))
  }
}`,...A.parameters?.docs?.source},description:{story:`Somebody with nothing from teaching yet.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    access: [{
      question_bank_id: "colonoscopy-optical-diagnosis",
      title: "Colonoscopy optical diagnosis",
      may_enter: true,
      missing: [],
      enrolment_ends_on: "2027-10-05T23:59:59Z"
    }, {
      question_bank_id: "chest-xray-interpretation",
      title: "Chest X-ray interpretation",
      may_enter: false,
      missing: ["enrolment"],
      enrolment_ends_on: null
    }]
  }
}`,...j.parameters?.docs?.source},description:{story:`An enrolment with an end date.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  globals: {
    colorScheme: "dark"
  }
}`,...M.parameters?.docs?.source},description:{story:`In dark mode.`,...M.parameters?.docs?.description}}}})))()}P();export{M as Dark,O as Default,k as EnrolledWithoutAPlace,A as NothingYet,j as WithAnEndDate,N as __namedExportsOrder,D as default};