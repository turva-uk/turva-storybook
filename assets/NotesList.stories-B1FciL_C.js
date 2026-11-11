import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Group-DSt3d3i4.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Skeleton-MhOxmKho.js";import{n as l,t as u}from"./Stack-D_d3SZwt.js";import{Y as d,n as f}from"./appIcons-BpiHpu4d.js";import{t as p}from"./Heading-CiSQlEyi.js";import{t as m}from"./BodyTextBold-CxqNt9uz.js";import{t as h}from"./BodyTextInline-BBHINRw1.js";import{n as g,t as _}from"./StateMessage-BtkL8y7a.js";import{t as v}from"./NoteCategoryBadge-DW_AM34K.js";import{n as y,t as b}from"./Date-BfRC-G4a.js";import{t as x}from"./badge-9yvUQwfl.js";function S({notes:e,onNoteClick:t,isLoading:n}){return n?(0,C.jsx)(u,{gap:`lg`,children:[1,2,3].map(e=>(0,C.jsx)(o,{children:(0,C.jsxs)(u,{gap:`sm`,children:[(0,C.jsxs)(i,{justify:`space-between`,children:[(0,C.jsx)(c,{height:24,width:`60%`}),(0,C.jsx)(c,{height:24,width:80,radius:`xl`})]}),(0,C.jsx)(c,{height:16,width:`50%`}),(0,C.jsx)(c,{height:16,width:`100%`}),(0,C.jsx)(c,{height:16,width:`100%`}),(0,C.jsx)(c,{height:16,width:`80%`})]})},e))}):e.length===0?(0,C.jsx)(_,{icon:(0,C.jsx)(d,{}),title:`No notes to show`,description:`There are no clinical notes for this patient yet.`,colour:`warning`}):(0,C.jsx)(u,{gap:`lg`,children:e.map(e=>(0,C.jsx)(o,{style:t?{cursor:`pointer`}:void 0,onClick:t?()=>t(e):void 0,children:(0,C.jsxs)(u,{gap:`sm`,children:[(0,C.jsxs)(i,{justify:`space-between`,children:[(0,C.jsx)(p,{children:e.title}),(0,C.jsx)(v,{category:e.category})]}),(0,C.jsxs)(i,{gap:`lg`,children:[(0,C.jsx)(m,{children:(0,C.jsx)(b,{date:e.date,format:`long`})}),(0,C.jsxs)(m,{children:[e.author,` - `,e.authorRole]})]}),(0,C.jsx)(h,{children:e.content})]})},e.id))})}var C;function w(){return(w=e((()=>{r(),s(),l(),a(),g(),f(),x(),y(),t(),C=n(),S.__docgenInfo={description:``,methods:[],displayName:`NotesList`,props:{notes:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  title: string;
  date: string;
  author: string;
  authorRole: string;
  category: NoteCategoryType;
  content: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`date`,value:{name:`string`,required:!0}},{key:`author`,value:{name:`string`,required:!0}},{key:`authorRole`,value:{name:`string`,required:!0}},{key:`category`,value:{name:`NoteCategoryType`,required:!0}},{key:`content`,value:{name:`string`,required:!0}}]}}],raw:`ClinicalNote[]`},description:``},onNoteClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(note: ClinicalNote) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  title: string;
  date: string;
  author: string;
  authorRole: string;
  category: NoteCategoryType;
  content: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`date`,value:{name:`string`,required:!0}},{key:`author`,value:{name:`string`,required:!0}},{key:`authorRole`,value:{name:`string`,required:!0}},{key:`category`,value:{name:`NoteCategoryType`,required:!0}},{key:`content`,value:{name:`string`,required:!0}}]}},name:`note`}],return:{name:`void`}}},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}var T;function E(){return(E=e((()=>{T=[{id:`note-1`,title:`Gastro clinic consultation`,date:`2026-03-19`,author:`Dr Rowan Fenwick`,authorRole:`Consultant Gastroenterologist`,category:`consultation`,content:`S: Patient attends for initial gastro assessment. Reports 4-month history of intermittent epigastric discomfort, worse after eating, with associated bloating. Denies dysphagia, weight loss, haematemesis, melaena. No FHx of GI malignancy. Non-smoker, moderate alcohol intake (8 units/week).

O: Abdo exam: soft, non-tender. No organomegaly. No masses palpable. Bowel sounds normal.

A: Functional dyspepsia - likely dietary trigger component.

P: 1. Omeprazole 20mg OD, 30 mins before breakfast. 2. Dietary modification - avoid known triggers (detailed guidance to follow via messaging). 3. Food diary for 14 days. 4. Review in 3 weeks. 5. If red flag symptoms develop, patient to contact clinic urgently.`},{id:`note-2`,title:`Telephone consultation - dietary guidance follow-up`,date:`2026-03-20`,author:`Dr Rowan Fenwick`,authorRole:`Consultant Gastroenterologist`,category:`telephone`,content:`Patient messaged requesting dietary guidance following yesterday's clinic appointment. Personalised dietary guide provided via secure messaging. Advised to avoid: high-fat/fried foods, heavily spiced dishes, citrus, tomato-based sauces, raw onions, garlic, chocolate, peppermint, cruciferous vegetables if bloating occurs. Limit caffeine, alcohol (especially red wine), carbonated drinks. Keep structured food diary for 14 days. Continue omeprazole as prescribed. Charged £70 for additional consultation time - patient consented and paid via app.`},{id:`note-3`,title:`GP review - epigastric symptoms`,date:`2026-02-25`,author:`Dr Emily Williams`,authorRole:`General Practitioner`,category:`consultation`,content:`Patient presents with 4-month history of recurrent epigastric pain. Worse post-prandially. Tried over-the-counter antacids with partial relief. No red flag symptoms elicited. Examination: abdomen soft, non-tender, no masses. Decision: refer to gastroenterology for specialist opinion. Referral letter sent to Dr Fenwick's clinic at Riverside Health Centre.`},{id:`note-4`,title:`Annual health review`,date:`2026-01-10`,author:`Dr Emily Williams`,authorRole:`General Practitioner`,category:`consultation`,content:`Routine annual review. Patient reports feeling generally well aside from intermittent indigestion (discussed separately). No new medications. Exercise: walks 30 mins x 4/week. Diet: balanced, though notes discomfort after certain meals.

Observations: BP 124/78, HR 72 regular, BMI 26.2, SpO2 98%.

Bloods reviewed: FBC normal, U&E normal, LFTs normal, HbA1c 38 mmol/mol (normal), Total cholesterol 4.8 mmol/L (acceptable). No action required on bloods. Next review 12 months.`},{id:`note-5`,title:`BP and weight check`,date:`2025-10-15`,author:`Nurse Sarah Mitchell`,authorRole:`Practice Nurse`,category:`observation`,content:`Routine BP and weight monitoring. BP: 126/80 (within target). Weight: 82.4kg. BMI: 26.2. Patient reports no concerns. Advised to maintain current lifestyle. No further action required.`}]})))()}var D,O,k,A,j,M;function N(){return(N=e((()=>{w(),E(),D={title:`Notes/Notes list`,component:S},O={args:{notes:T}},k={args:{notes:[],isLoading:!0}},A={args:{notes:[]}},j={...O,globals:{colorScheme:`dark`}},M=[`Default`,`Loading`,`Empty`,`DarkMode`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    notes: fakeNotes
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    notes: [],
    isLoading: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    notes: []
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...j.parameters?.docs?.source}}}})))()}N();export{j as DarkMode,O as Default,A as Empty,k as Loading,M as __namedExportsOrder,D as default};