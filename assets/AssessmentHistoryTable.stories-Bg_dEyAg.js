import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./AssessmentResultBadge-CnJdI1vn.js";import{n as i,t as a}from"./DataTable-CrqFwTVv.js";function o(e){return new Date(e).toLocaleDateString(`en-GB`,{day:`numeric`,month:`short`,year:`numeric`})}function s({assessments:e,onSelect:t}){return(0,c.jsx)(a,{data:e,columns:l,onRowClick:e=>t?.(e.id),getRowKey:e=>e.id,emptyMessage:`No assessments yet`})}var c,l;function u(){return(u=e((()=>{n(),i(),c=t(),l=[{header:`Date`,render:e=>o(e.started_at)},{header:`Question bank`,render:e=>e.bank_title},{header:`Result`,render:e=>(0,c.jsx)(r,{result:e.is_passed===null?`incomplete`:e.is_passed?`pass`:`fail`})}],s.__docgenInfo={description:``,methods:[],displayName:`AssessmentHistoryTable`,props:{assessments:{required:!0,tsType:{name:`Array`,elements:[{name:`AssessmentHistory`}],raw:`AssessmentHistory[]`},description:`List of assessment history records`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: number) => void`,signature:{arguments:[{type:{name:`number`},name:`id`}],return:{name:`void`}}},description:`Called when a row is clicked`}}}})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Teaching/Assessment history table`,tags:[`!dev`],component:s,args:{onSelect:d()}},p={args:{assessments:[{id:1,question_bank_id:`echocardiography-interpretation`,bank_title:`Echocardiography interpretation`,bank_version:1,started_at:`2024-12-01T10:00:00Z`,completed_at:`2024-12-01T11:10:00Z`,is_passed:!0,score_breakdown:null,total_items:120},{id:2,question_bank_id:`echocardiography-interpretation`,bank_title:`Echocardiography interpretation`,bank_version:1,started_at:`2024-11-15T14:00:00Z`,completed_at:`2024-11-15T15:05:00Z`,is_passed:!1,score_breakdown:null,total_items:120},{id:3,question_bank_id:`medication-safety`,bank_title:`Medication safety`,bank_version:2,started_at:`2024-12-05T09:00:00Z`,completed_at:null,is_passed:null,score_breakdown:null,total_items:50}]}},m={args:{assessments:[]}},h={...p,globals:{colorScheme:`dark`}},g=[`WithAttempts`,`Empty`,`DarkMode`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    assessments: [{
      id: 1,
      question_bank_id: "echocardiography-interpretation",
      bank_title: "Echocardiography interpretation",
      bank_version: 1,
      started_at: "2024-12-01T10:00:00Z",
      completed_at: "2024-12-01T11:10:00Z",
      is_passed: true,
      score_breakdown: null,
      total_items: 120
    }, {
      id: 2,
      question_bank_id: "echocardiography-interpretation",
      bank_title: "Echocardiography interpretation",
      bank_version: 1,
      started_at: "2024-11-15T14:00:00Z",
      completed_at: "2024-11-15T15:05:00Z",
      is_passed: false,
      score_breakdown: null,
      total_items: 120
    }, {
      id: 3,
      question_bank_id: "medication-safety",
      bank_title: "Medication safety",
      bank_version: 2,
      started_at: "2024-12-05T09:00:00Z",
      completed_at: null,
      is_passed: null,
      score_breakdown: null,
      total_items: 50
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    assessments: []
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...WithAttempts,
  globals: {
    colorScheme: "dark"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as DarkMode,m as Empty,p as WithAttempts,g as __namedExportsOrder,f as default};