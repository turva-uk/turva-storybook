import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./RadioField-DfsmsToJ.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{n as o,r as s}from"./iframe-gh_IKeZo.js";import{Dt as c,n as l}from"./appIcons-BpiHpu4d.js";import{n as u,t as d}from"./ActionCardButton-DnJjeR9q.js";import{t as f}from"./ActionCard-DZ7xcBoc.js";import{n as p,t as m}from"./FrameworkField-BdIGnqQs.js";import{t as h}from"./action-card-BJZdQL-2.js";function g(e){return y.some(t=>t.value===e)}function _({options:e,value:t,onChange:n,disabled:i=!1,error:o,landingView:s,onLandingViewChange:l,landingViewError:u}){return(0,v.jsx)(f,{icon:(0,v.jsx)(c,{}),title:`Clinician passport`,action:(0,v.jsxs)(a,{gap:`md`,children:[(0,v.jsx)(m,{options:e,description:i?`Your passport is read-only at the moment, so this cannot be changed.`:`Your passport offers the competencies in these. Removing one keeps everything already recorded under it.`,value:t,onChange:n,error:o,disabled:i}),(0,v.jsx)(r,{label:`Passport home page`,description:`By competency shows a table for each framework. By record lists every record, newest first.`,options:y,value:s,onChange:e=>{g(e)&&l(e)},error:u}),(0,v.jsx)(d,{label:`CPD date ranges`,url:`/settings/cpd-date-ranges`})]})})}var v,y;function b(){return(b=e((()=>{i(),h(),u(),n(),l(),p(),v=t(),y=[{value:`by_competency`,label:`By competency`},{value:`by_record`,label:`By record`}],_.__docgenInfo={description:``,methods:[],displayName:`PassportFrameworksCard`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`FrameworkOption`}],raw:`FrameworkOption[]`},description:`The frameworks to offer, in the order to offer them`},value:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`The holder's framework ids`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`}],return:{name:`void`}}},description:`Called with the new list of ids`},disabled:{required:!1,tsType:{name:`boolean`},description:`True while the passport is read-only, as after an entitlement ends`,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:`Why the last change was not saved`},landingView:{required:!0,tsType:{name:`LandingView`},description:`How the passport home page lays out the record`},onLandingViewChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: LandingView) => void`,signature:{arguments:[{type:{name:`LandingView`},name:`value`}],return:{name:`void`}}},description:`Called with the view chosen`},landingViewError:{required:!1,tsType:{name:`string`},description:`Why the last change of view was not saved`}}}})))()}var x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{b(),s(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Passport/Passport frameworks card`,tags:[`!dev`],component:_,parameters:{layout:`padded`},args:{options:o.frameworks,onChange:x(),landingView:`by_competency`,onLandingViewChange:x()}},C={args:{value:[`clinical`]}},w={args:{value:[]}},T={args:{value:[`clinical`],landingView:`by_record`}},E={args:{value:[`clinical`],disabled:!0}},D={args:{value:[`clinical`],error:`Your frameworks could not be saved. Please try again.`}},O={args:{value:[`clinical`],landingViewError:`Your choice could not be saved. Please try again.`}},k=[`Default`,`NoneChosen`,`ByRecord`,`ReadOnly`,`SaveFailed`,`LandingViewSaveFailed`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: ["clinical"]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: []
  }
}`,...w.parameters?.docs?.source},description:{story:`A passport made before frameworks existed, or one with none chosen.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: ["clinical"],
    landingView: "by_record"
  }
}`,...T.parameters?.docs?.source},description:{story:`A holder who prefers every record, newest first.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: ["clinical"],
    disabled: true
  }
}`,...E.parameters?.docs?.source},description:{story:`After an entitlement ends: the frameworks are shown and not
changeable, and the home page choice still is.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: ["clinical"],
    error: "Your frameworks could not be saved. Please try again."
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: ["clinical"],
    landingViewError: "Your choice could not be saved. Please try again."
  }
}`,...O.parameters?.docs?.source}}}})))()}A();export{T as ByRecord,C as Default,O as LandingViewSaveFailed,w as NoneChosen,E as ReadOnly,D as SaveFailed,k as __namedExportsOrder,S as default};