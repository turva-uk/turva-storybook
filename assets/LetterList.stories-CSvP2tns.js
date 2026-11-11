import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Skeleton-MhOxmKho.js";import{n as c,t as l}from"./Stack-D_d3SZwt.js";import{at as u,n as d}from"./appIcons-BpiHpu4d.js";import{n as f,t as p}from"./BodyText-Vl4rxmG1.js";import{n as m,t as h}from"./Heading-CiSQlEyi.js";import{n as g,t as _}from"./BodyTextInline-BBHINRw1.js";import{n as v,t as y}from"./StateMessage-BtkL8y7a.js";import{t as b}from"./LetterStatusBadge-gfGO-W6_.js";import{t as x}from"./badge-9yvUQwfl.js";function S(e){return new Date(e).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`})}function C({letters:e,onLetterClick:t,isLoading:n}){return n?(0,w.jsx)(l,{gap:`lg`,children:[1,2,3].map(e=>(0,w.jsx)(a,{children:(0,w.jsxs)(l,{gap:`sm`,children:[(0,w.jsxs)(r,{justify:`space-between`,children:[(0,w.jsx)(s,{height:24,width:`60%`}),(0,w.jsx)(s,{height:24,width:60,radius:`xl`})]}),(0,w.jsx)(s,{height:16,width:`50%`}),(0,w.jsx)(s,{height:16,width:`100%`}),(0,w.jsx)(s,{height:16,width:`80%`})]})},e))}):e.length===0?(0,w.jsx)(y,{icon:(0,w.jsx)(u,{}),title:`No letters to show`,description:`There are no clinical letters for this patient yet.`,colour:`warning`}):(0,w.jsx)(l,{gap:`lg`,children:e.map(e=>(0,w.jsx)(a,{style:{cursor:`pointer`},onClick:()=>t(e),children:(0,w.jsxs)(l,{gap:`sm`,children:[(0,w.jsxs)(r,{justify:`space-between`,children:[(0,w.jsx)(h,{children:e.title}),(0,w.jsx)(b,{status:e.status})]}),(0,w.jsxs)(r,{gap:`lg`,children:[(0,w.jsx)(p,{children:S(e.date)}),(0,w.jsxs)(p,{children:[e.author,` - `,e.authorRole]})]}),(0,w.jsx)(_,{children:e.summary})]})},e.id))})}var w;function T(){return(T=e((()=>{n(),o(),c(),i(),x(),v(),d(),m(),f(),g(),w=t(),C.__docgenInfo={description:``,methods:[],displayName:`LetterList`,props:{letters:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Unique letter identifier */
  id: string;
  /** Letter title */
  title: string;
  /** Letter date (ISO string) */
  date: string;
  /** Author name */
  author: string;
  /** Author role / specialty */
  authorRole: string;
  /** Letter status */
  status: "final" | "draft" | "amended";
  /** Summary / preview text */
  summary: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0},description:`Unique letter identifier`},{key:`title`,value:{name:`string`,required:!0},description:`Letter title`},{key:`date`,value:{name:`string`,required:!0},description:`Letter date (ISO string)`},{key:`author`,value:{name:`string`,required:!0},description:`Author name`},{key:`authorRole`,value:{name:`string`,required:!0},description:`Author role / specialty`},{key:`status`,value:{name:`union`,raw:`"final" | "draft" | "amended"`,elements:[{name:`literal`,value:`"final"`},{name:`literal`,value:`"draft"`},{name:`literal`,value:`"amended"`}],required:!0},description:`Letter status`},{key:`summary`,value:{name:`string`,required:!0},description:`Summary / preview text`}]}}],raw:`LetterSummary[]`},description:``},onLetterClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(letter: LetterSummary) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  /** Unique letter identifier */
  id: string;
  /** Letter title */
  title: string;
  /** Letter date (ISO string) */
  date: string;
  /** Author name */
  author: string;
  /** Author role / specialty */
  authorRole: string;
  /** Letter status */
  status: "final" | "draft" | "amended";
  /** Summary / preview text */
  summary: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0},description:`Unique letter identifier`},{key:`title`,value:{name:`string`,required:!0},description:`Letter title`},{key:`date`,value:{name:`string`,required:!0},description:`Letter date (ISO string)`},{key:`author`,value:{name:`string`,required:!0},description:`Author name`},{key:`authorRole`,value:{name:`string`,required:!0},description:`Author role / specialty`},{key:`status`,value:{name:`union`,raw:`"final" | "draft" | "amended"`,elements:[{name:`literal`,value:`"final"`},{name:`literal`,value:`"draft"`},{name:`literal`,value:`"amended"`}],required:!0},description:`Letter status`},{key:`summary`,value:{name:`string`,required:!0},description:`Summary / preview text`}]}},name:`letter`}],return:{name:`void`}}},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}var E;function D(){return(D=e((()=>{E=[{id:`letter-1`,title:`Gastroenterology outpatient clinic letter`,date:`2026-03-19`,author:`Dr Rowan Fenwick`,authorRole:`Consultant Gastroenterologist`,status:`final`,summary:`Dear Dr Williams, Thank you for referring this patient to the gastroenterology outpatient clinic. I saw them on 19 March 2026 at Riverside Health Centre. Presenting complaint: Recurrent epigastric discomfort and bloating over the past four months. Symptoms are worse after meals, particularly with spicy or fatty foods…`,body:`Dear Dr Williams,

Thank you for referring this patient to the gastroenterology outpatient clinic. I saw them on 19 March 2026 at Riverside Health Centre.

Presenting complaint:
Recurrent epigastric discomfort and bloating over the past four months. Symptoms are worse after meals, particularly with spicy or fatty foods. The patient describes a burning sensation in the upper abdomen with associated early satiety and occasional nausea. No dysphagia, odynophagia, haematemesis, melaena, or unintentional weight loss reported.

Past medical history:
Nil significant. No previous gastrointestinal investigations.

Medications:
Antacids (over-the-counter) - partial relief only.

Examination:
Abdomen soft, non-tender. No organomegaly or masses palpable. Bowel sounds normal. No signs of anaemia or jaundice.

Impression:
Functional dyspepsia - likely acid-related. No red flag symptoms to suggest serious pathology at this stage.

Plan:
1. Commence omeprazole 20mg once daily, taken 30 minutes before breakfast.
2. Dietary modification advice given - avoid known triggers (spicy foods, caffeine, alcohol, fatty meals). Patient to keep a food diary for 14 days.
3. Follow-up in 3 weeks to review response to PPI therapy.
4. If symptoms fail to improve, will arrange upper GI endoscopy (OGD) for further evaluation.

Kind regards,
Dr Rowan Fenwick
Consultant Gastroenterologist
Riverside Health Centre`},{id:`letter-2`,title:`GP referral letter - gastroenterology`,date:`2026-02-25`,author:`Dr Emily Williams`,authorRole:`General Practitioner`,status:`final`,summary:`Dear Dr Fenwick, I would be grateful if you could see this patient in your gastroenterology clinic at your earliest convenience. Reason for referral: Four-month history of intermittent epigastric pain, worse after meals, associated with bloating and early satiety. No weight loss, dysphagia, or gastrointestinal bleeding…`,body:`Dear Dr Fenwick,

I would be grateful if you could see this patient in your gastroenterology clinic at your earliest convenience.

Reason for referral:
Four-month history of intermittent epigastric pain, worse after meals, associated with bloating and early satiety. No weight loss, dysphagia, or gastrointestinal bleeding. The patient has tried over-the-counter antacids with partial relief only.

Relevant history:
No significant past medical history. No family history of gastrointestinal malignancy. Non-smoker. Alcohol intake within recommended limits. No NSAID use.

Investigations to date:
Full blood count - normal. No anaemia.
Liver function tests - within normal limits.
H. pylori stool antigen - awaiting result (will forward when available).

Current medications:
Nil regular. Over-the-counter antacids as required.

I would be grateful for your assessment and any further investigation you feel appropriate. The patient is aware of the referral and keen to attend promptly.

With best wishes,
Dr Emily Williams
General Practitioner
Riverside Medical Practice`},{id:`letter-3`,title:`Routine health review letter`,date:`2026-01-10`,author:`Dr Emily Williams`,authorRole:`General Practitioner`,status:`final`,summary:`Dear Patient, Thank you for attending your annual routine health review on 10 January 2026. Observations: Blood pressure: 124/78 mmHg (normal). BMI: 26.2 (slightly above normal range - healthy lifestyle advice discussed). Heart rate: 72 bpm, regular…`,body:`Dear Patient,

Thank you for attending your annual routine health review on 10 January 2026.

Results summary:

Observations:
- Blood pressure: 124/78 mmHg (normal)
- BMI: 26.2 (slightly above normal range - healthy lifestyle advice discussed)
- Heart rate: 72 bpm, regular

Blood tests:
- Full blood count (FBC): Within normal limits. No anaemia.
- Urea & electrolytes (U&E): Normal renal function.
- Liver function tests (LFTs): Within normal limits.
- HbA1c: 38 mmol/mol (normal - no evidence of diabetes)
- Total cholesterol: 4.8 mmol/L (within acceptable range)

Assessment:
No new health concerns identified. All investigations within normal limits. We discussed maintaining a balanced diet and regular physical activity to support long-term cardiovascular health.

Plan:
- Continue current management.
- No new medications required.
- Next routine health review in 12 months (January 2027).
- Please contact the surgery if any new symptoms develop in the interim.

Kind regards,
Dr Emily Williams
General Practitioner
Riverside Medical Practice`}]})))()}var O,k,A,j,M,N,P;function F(){return(F=e((()=>{T(),D(),O={title:`Letters/Letter list`,component:C},k={args:{letters:E,onLetterClick:e=>{console.log(`Clicked letter:`,e.id)}}},A={args:{letters:[],isLoading:!0,onLetterClick:e=>{console.log(`Clicked letter:`,e.id)}}},j={args:{letters:[],onLetterClick:e=>{console.log(`Clicked letter:`,e.id)}}},M={...k,globals:{colorScheme:`dark`}},N={...A,globals:{colorScheme:`dark`}},P=[`Default`,`Loading`,`Empty`,`DarkMode`,`DarkModeLoading`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    letters: fakeLetters,
    onLetterClick: letter => {
      console.log("Clicked letter:", letter.id);
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    letters: [],
    isLoading: true,
    onLetterClick: letter => {
      console.log("Clicked letter:", letter.id);
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    letters: [],
    onLetterClick: letter => {
      console.log("Clicked letter:", letter.id);
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...Loading,
  globals: {
    colorScheme: "dark"
  }
}`,...N.parameters?.docs?.source}}}})))()}F();export{M as DarkMode,N as DarkModeLoading,k as Default,j as Empty,A as Loading,P as __namedExportsOrder,O as default};