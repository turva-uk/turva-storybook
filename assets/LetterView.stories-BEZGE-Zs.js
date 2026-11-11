import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,x as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Group-DSt3d3i4.js";import{n as o,t as s}from"./Divider-BkZfNhmn.js";import{n as c,t as l}from"./Skeleton-MhOxmKho.js";import{n as u,t as d}from"./Stack-D_d3SZwt.js";import{n as f,xn as p}from"./appIcons-BpiHpu4d.js";import{t as m}from"./BodyTextInline-BBHINRw1.js";import{t as h}from"./MarkdownView-C0VWo7qu.js";import{t as g}from"./page-header-DDmZahL6.js";import{n as _,t as v}from"./IconButton-B0JQpNZj.js";var y;function b(){return(b=e((()=>{y={id:`l1`,subject:`Outpatient clinic letter: chronic cough`,from:`Respiratory Medicine`,date:new Date().toISOString(),body:`## Diagnosis

1. Chronic persistent cough - likely **post-nasal drip syndrome**
2. Possible mild asthma (to confirm with spirometry)

## Plan

1. Trial of nasal corticosteroid spray (fluticasone 50mcg, two sprays each nostril daily) for **eight weeks**
2. Salbutamol inhaler 100mcg as required for wheeze or breathlessness
3. Chest X-ray - requested to exclude underlying pathology
4. Spirometry with reversibility testing at next visit
5. Review in respiratory clinic in **eight weeks** with results

Dear Dr Gallagher,

Thank you for referring this 42-year-old non-smoking gentleman who presents with a persistent dry cough of approximately three months' duration. He reports the cough is worse at night and on waking, with occasional clear post-nasal drip. There is no haemoptysis, weight loss, or significant dyspnoea. He has no known drug allergies.

On examination, he appeared well. Respiratory rate was 14 breaths per minute. Oxygen saturations were 98% on room air. Chest auscultation revealed good bilateral air entry with no wheeze, crackles, or pleural rub. Throat examination showed mild cobblestoning of the posterior pharynx consistent with post-nasal drip.

Peak expiratory flow was 520 L/min (92% predicted). There was no significant diurnal variation on the two-week peak flow diary he had completed prior to his appointment.

I have arranged the investigations outlined above and will review him with the results. Should his symptoms deteriorate in the interim, please do not hesitate to contact our department.

Kind regards,
**Dr A. Mahmood**
*Consultant Respiratory Physician*`}})))()}function x({letter:e,isLoading:n=!1,onBack:r,actions:i}){if(n)return(0,S.jsxs)(d,{gap:`md`,p:`md`,children:[(0,S.jsxs)(a,{gap:`md`,align:`center`,wrap:`nowrap`,children:[(0,S.jsx)(l,{width:42,height:42,radius:`md`}),(0,S.jsxs)(d,{gap:`xs`,style:{flex:1},children:[(0,S.jsx)(l,{height:20,width:`60%`}),(0,S.jsx)(l,{height:14,width:`35%`})]})]}),(0,S.jsx)(s,{}),(0,S.jsxs)(d,{gap:`sm`,children:[(0,S.jsx)(l,{height:14,width:`90%`}),(0,S.jsx)(l,{height:14,width:`100%`}),(0,S.jsx)(l,{height:14,width:`75%`}),(0,S.jsx)(l,{height:14,width:`85%`}),(0,S.jsx)(l,{height:14,width:`40%`})]})]});if(!e)return null;let o=e.date?new Date(e.date).toLocaleDateString():null;return(0,S.jsxs)(d,{gap:`md`,p:`md`,children:[(0,S.jsxs)(a,{justify:`space-between`,align:`flex-start`,wrap:`nowrap`,children:[(0,S.jsxs)(a,{gap:`md`,align:`center`,wrap:`nowrap`,style:{minWidth:0},children:[(0,S.jsx)(v,{icon:(0,S.jsx)(p,{}),variant:`light`,onClick:r,"aria-label":`Back`}),(0,S.jsxs)(d,{gap:2,style:{minWidth:0},children:[(0,S.jsx)(t,{title:e.subject}),(0,S.jsxs)(m,{children:[e.from,o?` · ${o}`:``]})]})]}),i&&(0,S.jsx)(a,{gap:`xs`,style:{flexShrink:0},children:i})]}),(0,S.jsx)(s,{}),(0,S.jsx)(h,{source:e.body??`(No content)`})]})}var S;function C(){return(C=e((()=>{i(),c(),u(),g(),o(),f(),_(),n(),S=r(),x.__docgenInfo={description:`Letter View

Renders full clinical letter detail with:
- Back navigation button
- Sender avatar and metadata
- Letter subject and date
- Complete letter body
- Optional action buttons (download, print, etc.)
- Loading skeleton state

@param props - Component props
@returns Letter detail view component`,methods:[],displayName:`LetterView`,props:{letter:{required:!1,tsType:{name:`union`,raw:`Letter | null`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Unique letter identifier */
  id: string;
  /** Letter subject/title */
  subject: string;
  /** Letter date (ISO string or display format) */
  date?: string;
  /** Sender name or department */
  from?: string;
  /** Full letter body content (markdown or plain text) */
  body?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0},description:`Unique letter identifier`},{key:`subject`,value:{name:`string`,required:!0},description:`Letter subject/title`},{key:`date`,value:{name:`string`,required:!1},description:`Letter date (ISO string or display format)`},{key:`from`,value:{name:`string`,required:!1},description:`Sender name or department`},{key:`body`,value:{name:`string`,required:!1},description:`Full letter body content (markdown or plain text)`}]}},{name:`null`}]},description:`Letter to display (null if not loaded)`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether letter is currently loading`,defaultValue:{value:`false`,computed:!1}},onBack:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when back arrow is clicked`},actions:{required:!1,tsType:{name:`ReactNode`},description:`Optional action buttons (e.g., download, print)`}}}})))()}var w,T,E,D,O;function k(){return(k=e((()=>{b(),C(),w={title:`Letters/Letter view`,component:x,parameters:{layout:`padded`}},T={args:{letter:y,onBack:()=>alert(`back`)}},E={args:{isLoading:!0}},D={...T,globals:{colorScheme:`dark`}},O=[`Default`,`Loading`,`DarkMode`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    letter: sampleLetter,
    onBack: () => alert("back")
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as DarkMode,T as Default,E as Loading,O as __namedExportsOrder,w as default};