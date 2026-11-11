import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{x as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";import{t as c}from"./SolidSwitch-B5z1COCw.js";import{t as l}from"./BodyText-Vl4rxmG1.js";import{t as u}from"./Heading-CiSQlEyi.js";import{t as d}from"./form-T0M4Wlbx.js";import{a as f,n as p}from"./variants-US1Dcm7T.js";import{r as m,t as h}from"./orgUnit-D_fcGJNm.js";import{n as g,t as _}from"./DataTableControlled-DHBUj558.js";import{n as v,r as y}from"./competencyRows-hYwfL8SM.js";function b({places:e,competencies:t,value:n,onChange:r,mayChange:i,disabled:o=!1}){let d=(0,x.useMemo)(()=>y(t),[t]);if(e.length===0)return(0,S.jsx)(l,{children:`They are not at an organisation or site yet. Practice is set where somebody belongs, so choose one first.`});if(d.length===0)return(0,S.jsx)(l,{children:`They will hold no competencies, so there is nothing to authorise.`});function f(e){let t=new Set(n[e.id]??[]);return[{header:`Competency`,render:e=>e.name,accessor:e=>e.name},{header:`May practise here`,width:`200px`,render:a=>(0,S.jsx)(c,{checked:t.has(a.id),disabled:o||(i?!i(a.id):!1),onChange:i=>{let o=new Set(t);i.currentTarget.checked?o.add(a.id):o.delete(a.id),r({...n,[e.id]:[...o].sort()})},"aria-label":`${a.name} at ${e.name}: may practise here`})}]}return(0,S.jsx)(s,{gap:`lg`,children:e.map(e=>(0,S.jsx)(a,{children:(0,S.jsxs)(s,{gap:`md`,children:[(0,S.jsx)(u,{children:e.name}),m(e.type)?(0,S.jsx)(_,{data:d,columns:f(e),getRowKey:e=>e.id,searchFields:e=>[e.name]}):(0,S.jsx)(l,{children:`Nobody is authorised to practise at this kind of place, so there is nothing to set here.`})]})},e.id))})}var x,S;function C(){return(C=e((()=>{x=t(),o(),i(),d(),g(),n(),h(),v(),S=r(),b.__docgenInfo={description:`A card of "may practise here" switches for each org_unit.

@param props - Component props
@returns The editor`,methods:[],displayName:`PracticeByPlaceEditor`,props:{places:{required:!0,tsType:{name:`Array`,elements:[{name:`PracticePlace`}],raw:`PracticePlace[]`},description:`The org_units the person belongs to, or is being put at`},competencies:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`The competencies they hold, or will once the form is saved`},value:{required:!0,tsType:{name:`Record`,elements:[{name:`number`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}],raw:`Record<number, string[]>`},description:`What is switched on at each org_unit`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: PracticeByPlace) => void`,signature:{arguments:[{type:{name:`Record`,elements:[{name:`number`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}],raw:`Record<number, string[]>`},name:`value`}],return:{name:`void`}}},description:"Called with the whole of `value`, one switch having moved"},mayChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(competency: string) => boolean`,signature:{arguments:[{type:{name:`string`},name:`competency`}],return:{name:`boolean`}}},description:`Whether the viewer may switch a competency. A switch they may not
move is shown disabled, never hidden: a teaching admin who saw only
the teaching competencies would take a clinician to hold nothing
else. Omitted, every switch can be moved.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Holds every switch still, while the form is being sent`,defaultValue:{value:`false`,computed:!1}}}}})))()}function w(e){let[t,n]=(0,T.useState)(e.value);return(0,E.jsx)(b,{...e,value:t,onChange:n})}var T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{T=t(),f(),C(),E=r(),D=[{id:3,name:`Gloucestershire Hospitals`,type:`organisation`},{id:4,name:`Oncology`,type:`hospital`}],O=[`take_informed_consent`,`certify_death`,`prescribe_controlled_schedule_2`],k={title:`Cards/Member practice/Practice by place editor`,component:b,parameters:{layout:`padded`},args:{places:D,competencies:O,value:{3:[`take_informed_consent`],4:[]},onChange:()=>{}},render:e=>(0,E.jsx)(w,{...e})},A={},j={args:{competencies:[...O,`take_teaching_modules`],mayChange:e=>e===`take_teaching_modules`},render:e=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(p,{children:`Every competency the person holds is listed. The viewer may switch only the teaching one; the rest are disabled, not hidden.`})]})},M={args:{places:[...D,{id:9,name:`Room 4`,type:`room`}]}},N={args:{places:[],value:{}}},P={args:{competencies:[]}},F={args:{disabled:!0}},I={...A,globals:{colorScheme:`dark`}},L=[`Default`,`SomeSwitchesNotTheirs`,`PlaceThatHoldsNoPractice`,`NoPlaces`,`NoCompetencies`,`Disabled`,`DarkMode`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source},description:{story:`Somebody at a trust and at one of its sites.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    competencies: [...competencies, "take_teaching_modules"],
    mayChange: competency => competency === "take_teaching_modules"
  },
  render: args => <>
      <Editor {...args} />
      <StoryNote>
        Every competency the person holds is listed. The viewer may switch only
        the teaching one; the rest are disabled, not hidden.
      </StoryNote>
    </>
}`,...j.parameters?.docs?.source},description:{story:`A teaching admin's view of a clinician who also sits teaching.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    places: [...places, {
      id: 9,
      name: "Room 4",
      type: "room"
    }]
  }
}`,...M.parameters?.docs?.source},description:{story:`One of their org_units is of a type nobody practises at.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    places: [],
    value: {}
  }
}`,...N.parameters?.docs?.source},description:{story:`No organisation or site has been chosen for them yet.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    competencies: []
  }
}`,...P.parameters?.docs?.source},description:{story:`They will hold no competencies at all.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...F.parameters?.docs?.source},description:{story:`Every switch held still, while the form is being sent.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as DarkMode,A as Default,F as Disabled,P as NoCompetencies,N as NoPlaces,M as PlaceThatHoldsNoPractice,j as SomeSwitchesNotTheirs,L as __namedExportsOrder,k as default};