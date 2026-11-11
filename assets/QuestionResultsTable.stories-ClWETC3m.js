import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./AssessmentResultBadge-CnJdI1vn.js";import{n as i,t as a}from"./DataTable-CrqFwTVv.js";function o(e){return e.question_number===null?e.question_ref:`Question ${e.question_number}`}function s({questions:e,loading:t=!1,error:n=null}){return(0,c.jsx)(a,{data:e,columns:l,loading:t,error:n,getRowKey:e=>e.question_ref,emptyMessage:`No questions in this assessment`})}var c,l;function u(){return(u=e((()=>{n(),i(),c=t(),l=[{header:`Question`,render:o},{header:`Answer given`,render:e=>e.selected_answer??`Not answered`},{header:`Result`,render:e=>!e.answered||e.is_correct===null?`Not answered`:(0,c.jsx)(r,{result:e.is_correct?`pass`:`fail`})}],s.__docgenInfo={description:``,methods:[],displayName:`QuestionResultsTable`,props:{questions:{required:!0,tsType:{name:`Array`,elements:[{name:`AssessmentQuestionResult`}],raw:`AssessmentQuestionResult[]`},description:`The attempt's questions, already in question bank order`},loading:{required:!1,tsType:{name:`boolean`},description:`Show loading skeleton rows`,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`Error message shown in place of the rows`,defaultValue:{value:`null`,computed:!1}}}}})))()}function d(e,t,n){return{question_number:e,question_ref:`question_${String(e).padStart(3,`0`)}`,display_order:t,answered:n!==`unanswered`,selected_answer:n===`unanswered`?null:n===`pass`?`High confidence adenoma`:`Low confidence serrated`,is_correct:n===`unanswered`?null:n===`pass`,answered_at:n===`unanswered`?null:`2026-09-27T10:00:00Z`}}var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{u(),f={title:`Teaching/Question results table`,tags:[`!dev`],component:s},p={args:{questions:[d(1,4,`pass`),d(2,1,`fail`),d(3,5,`pass`),d(4,2,`pass`),d(5,3,`fail`)]}},m={args:{questions:[d(1,2,`pass`),d(2,3,`pass`),d(3,1,`pass`)]}},h={args:{questions:[d(1,3,`pass`),d(2,1,`unanswered`),d(3,2,`unanswered`)]}},g={args:{questions:[{...d(1,2,`pass`),question_number:null,question_ref:`intro_case`},{...d(2,1,`fail`),question_number:null,question_ref:`follow_up`}]}},_={args:{questions:[],loading:!0}},v={args:{questions:[]}},y={...p,globals:{colorScheme:`dark`}},b=[`Mixed`,`AllPassed`,`SomeNotAnswered`,`WithoutQuestionNumbers`,`Loading`,`Empty`,`DarkMode`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    questions: [question(1, 4, "pass"), question(2, 1, "fail"), question(3, 5, "pass"), question(4, 2, "pass"), question(5, 3, "fail")]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    questions: [question(1, 2, "pass"), question(2, 3, "pass"), question(3, 1, "pass")]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    questions: [question(1, 3, "pass"), question(2, 1, "unanswered"), question(3, 2, "unanswered")]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    questions: [{
      ...question(1, 2, "pass"),
      question_number: null,
      question_ref: "intro_case"
    }, {
      ...question(2, 1, "fail"),
      question_number: null,
      question_ref: "follow_up"
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    questions: [],
    loading: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    questions: []
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Mixed,
  globals: {
    colorScheme: "dark"
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{m as AllPassed,y as DarkMode,v as Empty,_ as Loading,p as Mixed,h as SomeNotAnswered,g as WithoutQuestionNumbers,b as __namedExportsOrder,f as default};