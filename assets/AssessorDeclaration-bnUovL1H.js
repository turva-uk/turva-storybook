import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./BaseCard-C_VuKVYL.js";import{n as a,t as o}from"./Stack-D_d3SZwt.js";import{t as s}from"./BodyText-Vl4rxmG1.js";import{t as c}from"./BodyTextBold-CxqNt9uz.js";function l({title:e=`Declaration`,children:t}){return(0,u.jsx)(i,{"data-testid":`assessor-declaration`,children:(0,u.jsxs)(o,{gap:`xs`,children:[(0,u.jsx)(c,{children:e}),(0,u.jsx)(s,{children:d}),t]})})}var u,d;function f(){return(f=e((()=>{a(),r(),t(),u=n(),d=`I confirm that I have assessed this person against this competency, that the record above reflects what I observed or reviewed, and that I accept professional accountability for this judgement.`,l.__docgenInfo={description:`AssessorDeclaration

Renders the fixed declaration an assessor confirms. Carries no
checkbox of its own: the confirmation control belongs to the form that
submits it, so the same words can be shown where no signing happens.`,methods:[],displayName:`AssessorDeclaration`,props:{title:{required:!1,tsType:{name:`string`},description:`Optional heading above the declaration`,defaultValue:{value:`"Declaration"`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`The control that confirms it, shown inside the card.

Passed in rather than built here, because the component is also
shown where no signing happens and the confirmation belongs to the
form that submits it. Inside the card so the statement and the act
of agreeing to it read as one thing.`}}}})))()}export{f as n,l as t};