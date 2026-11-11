import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./Skeleton-MhOxmKho.js";import{n as c,t as l}from"./Stack-D_d3SZwt.js";import{n as u,sn as d}from"./appIcons-BpiHpu4d.js";import{n as f,t as p}from"./BodyText-Vl4rxmG1.js";import{n as m,t as h}from"./Heading-CiSQlEyi.js";import{n as g,t as _}from"./BodyTextBold-CxqNt9uz.js";import{n as v,t as y}from"./AppointmentStatusBadge-DwOMexcu.js";import{n as b,t as x}from"./StateMessage-BtkL8y7a.js";function S(e){return new Date(e).toLocaleDateString(`en-GB`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`})}function C({appointment:e,onClick:t}){return(0,T.jsx)(a,{style:{...t&&{cursor:`pointer`}},onClick:t?()=>t(e):void 0,children:(0,T.jsxs)(l,{gap:`sm`,children:[(0,T.jsxs)(r,{justify:`space-between`,children:[(0,T.jsx)(h,{children:e.title}),(0,T.jsx)(y,{status:e.status})]}),(0,T.jsxs)(_,{children:[S(e.date),` at `,e.time]}),(0,T.jsx)(p,{children:e.location}),(0,T.jsxs)(p,{children:[e.clinician,` - `,e.clinicianRole]}),e.notes&&(0,T.jsx)(p,{children:e.notes})]})})}function w({appointments:e,onAppointmentClick:t,isLoading:n}){if(n)return(0,T.jsx)(l,{gap:`lg`,children:[1,2,3].map(e=>(0,T.jsx)(a,{children:(0,T.jsxs)(l,{gap:`sm`,children:[(0,T.jsxs)(r,{justify:`space-between`,children:[(0,T.jsx)(s,{height:24,width:`60%`}),(0,T.jsx)(s,{height:24,width:80,radius:`xl`})]}),(0,T.jsx)(s,{height:16,width:`70%`}),(0,T.jsx)(s,{height:16,width:`40%`}),(0,T.jsx)(s,{height:16,width:`100%`})]})},e))});let i=e.filter(e=>e.status===`upcoming`),o=e.filter(e=>e.status!==`upcoming`);return e.length===0?(0,T.jsx)(x,{icon:(0,T.jsx)(d,{}),title:`No appointments to show`,description:`There are no appointments scheduled for this patient.`,colour:`warning`}):(0,T.jsxs)(l,{gap:`lg`,children:[i.length>0&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h,{children:`Upcoming`}),i.map(e=>(0,T.jsx)(C,{appointment:e,onClick:t},e.id))]}),o.length>0&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h,{children:`Past appointments`}),o.map(e=>(0,T.jsx)(C,{appointment:e,onClick:t},e.id))]})]})}var T;function E(){return(E=e((()=>{n(),o(),c(),v(),i(),b(),u(),f(),g(),m(),T=t(),w.__docgenInfo={description:``,methods:[],displayName:`AppointmentsList`,props:{appointments:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  clinician: string;
  clinicianRole: string;
  status: "upcoming" | "completed" | "cancelled" | "no-show";
  notes?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`date`,value:{name:`string`,required:!0}},{key:`time`,value:{name:`string`,required:!0}},{key:`location`,value:{name:`string`,required:!0}},{key:`clinician`,value:{name:`string`,required:!0}},{key:`clinicianRole`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`"upcoming" | "completed" | "cancelled" | "no-show"`,elements:[{name:`literal`,value:`"upcoming"`},{name:`literal`,value:`"completed"`},{name:`literal`,value:`"cancelled"`},{name:`literal`,value:`"no-show"`}],required:!0}},{key:`notes`,value:{name:`string`,required:!1}}]}}],raw:`Appointment[]`},description:``},onAppointmentClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(appointment: Appointment) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  clinician: string;
  clinicianRole: string;
  status: "upcoming" | "completed" | "cancelled" | "no-show";
  notes?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`date`,value:{name:`string`,required:!0}},{key:`time`,value:{name:`string`,required:!0}},{key:`location`,value:{name:`string`,required:!0}},{key:`clinician`,value:{name:`string`,required:!0}},{key:`clinicianRole`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`"upcoming" | "completed" | "cancelled" | "no-show"`,elements:[{name:`literal`,value:`"upcoming"`},{name:`literal`,value:`"completed"`},{name:`literal`,value:`"cancelled"`},{name:`literal`,value:`"no-show"`}],required:!0}},{key:`notes`,value:{name:`string`,required:!1}}]}},name:`appointment`}],return:{name:`void`}}},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}var D;function O(){return(O=e((()=>{D=[{id:`appt-1`,title:`Gastro clinic follow-up review`,date:`2026-04-09`,time:`10:00`,location:`Riverside Health Centre, Room 4`,clinician:`Dr Rowan Fenwick`,clinicianRole:`Consultant Gastroenterologist`,status:`upcoming`,notes:`3-week follow-up to review dietary modifications and food diary. Assess symptom response to omeprazole.`},{id:`appt-2`,title:`Gastro clinic - initial assessment`,date:`2026-03-19`,time:`10:30`,location:`Riverside Health Centre, Room 4`,clinician:`Dr Rowan Fenwick`,clinicianRole:`Consultant Gastroenterologist`,status:`completed`,notes:`Initial assessment for functional dyspepsia. Commenced omeprazole 20mg OD. Dietary advice provided. Food diary requested.`},{id:`appt-3`,title:`GP consultation - gastro referral`,date:`2026-02-25`,time:`09:15`,location:`Meadowbrook Surgery, Room 2`,clinician:`Dr Emily Williams`,clinicianRole:`General Practitioner`,status:`completed`,notes:`Assessment of epigastric symptoms. Referral to gastroenterology arranged.`},{id:`appt-4`,title:`Annual health review`,date:`2026-01-10`,time:`14:30`,location:`Meadowbrook Surgery, Room 2`,clinician:`Dr Emily Williams`,clinicianRole:`General Practitioner`,status:`completed`,notes:`Routine annual review. Bloods normal. BP within target. No concerns.`},{id:`appt-5`,title:`Practice nurse - BP and weight check`,date:`2025-10-15`,time:`11:00`,location:`Meadowbrook Surgery, Treatment Room`,clinician:`Nurse Sarah Mitchell`,clinicianRole:`Practice Nurse`,status:`completed`,notes:`Routine monitoring. BP 126/80, weight 82.4kg. No action required.`}]})))()}var k,A,j,M,N,P,F;function I(){return(I=e((()=>{E(),O(),k={title:`Appointments/Appointments list`,tags:[`!dev`],component:w},A={args:{appointments:D}},j={args:{appointments:[]}},M={args:{appointments:[],isLoading:!0}},N={...A,globals:{colorScheme:`dark`}},P={...M,globals:{colorScheme:`dark`}},F=[`Default`,`Empty`,`Loading`,`DarkMode`,`DarkModeLoading`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    appointments: fakeAppointments
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    appointments: []
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    appointments: [],
    isLoading: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...Loading,
  globals: {
    colorScheme: "dark"
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as DarkMode,P as DarkModeLoading,A as Default,j as Empty,M as Loading,F as __namedExportsOrder,k as default};