import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Skeleton-MhOxmKho.js";import{n as i,t as a}from"./BodyText-Vl4rxmG1.js";import{n as o,t as s}from"./Heading-CiSQlEyi.js";import{n as c,t as l}from"./Date-BfRC-G4a.js";import{n as u}from"./Gender-De3Gs4IT.js";import{n as d,t as f}from"./NationalNumber-CKeZRrt_.js";function p(){return(p=e((()=>{c(),u(),d()})))()}function m({patient:e,isLoading:t=!1}){return t?(0,h.jsxs)(`div`,{style:{flex:1},children:[(0,h.jsx)(r,{height:33,width:`23rem`,mt:10,mb:15}),(0,h.jsx)(r,{height:20,width:`20rem`})]}):e?(0,h.jsxs)(`div`,{style:{flex:1},children:[(0,h.jsx)(s,{children:e.name}),(0,h.jsxs)(a,{children:[e.dob&&(0,h.jsx)(l,{date:e.dob}),e.age===void 0?``:`    ${e.age}`,e.sex?` ${e.sex}`:``,e.nationalNumber?(0,h.jsxs)(h.Fragment,{children:[`      `,(0,h.jsx)(f,{nationalNumber:e.nationalNumber,nationalNumberSystem:e.nationalNumberSystem})]}):``]})]}):null}var h;function g(){return(g=e((()=>{d(),p(),n(),i(),o(),h=t(),m.__docgenInfo={description:`Demographics

Renders compact patient demographics with:
- Patient name (bold, large)
- Age, gender, DOB (formatted)
- National number (NHS format)
- Loading skeleton state
- Returns null if no patient data

@param props - Component props
@returns Demographics summary or skeleton/null`,methods:[],displayName:`Demographics`,props:{patient:{required:!1,tsType:{name:`Patient`},description:`Patient data to display (undefined if not loaded)`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether patient data is currently loading`,defaultValue:{value:`false`,computed:!1}}}}})))()}export{g as n,m as t};