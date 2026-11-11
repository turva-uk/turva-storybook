import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./UnstyledButton-C_uKSGwS.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Group-DSt3d3i4.js";import{n as o,t as s}from"./ProfilePic-DcD8jf1h.js";import{n as c,t as l}from"./BaseCard-C_VuKVYL.js";import{n as u,t as d}from"./Skeleton-MhOxmKho.js";import{n as f,t as p}from"./Stack-D_d3SZwt.js";import{$ as m,n as h}from"./appIcons-BpiHpu4d.js";import{n as g,t as _}from"./BodyText-Vl4rxmG1.js";import{n as v,t as y}from"./Heading-CiSQlEyi.js";import{n as b,t as x}from"./BodyTextClamp-RY2Wml5x.js";import{n as S,t as C}from"./StateMessage-BtkL8y7a.js";import{n as w,t as T}from"./UnreadBadge-DQ0hOkvo.js";import{t as E}from"./StackedProfilePics-kCQREsj7.js";import{t as D}from"./profile-pic-VhXCM8eB.js";function O(e){try{let t=new Date(e),n=new Date().getTime()-t.getTime(),r=Math.floor(n/6e4),i=Math.floor(r/60),a=Math.floor(i/24);return r<1?`just now`:r<60?`${r} min ago`:i<24?`${i} hour${i>1?`s`:``} ago`:a<7?`${a} day${a>1?`s`:``} ago`:t.toLocaleDateString()}catch{return e}}function k({threads:e,onThreadClick:t,isLoading:r}){return r?(0,A.jsx)(p,{gap:`sm`,children:[1,2,3].map(e=>(0,A.jsx)(l,{children:(0,A.jsxs)(a,{wrap:`nowrap`,align:`flex-start`,children:[(0,A.jsx)(d,{height:64,circle:!0}),(0,A.jsxs)(`div`,{style:{flex:1},children:[(0,A.jsx)(d,{height:20,width:`60%`,mb:`xs`}),(0,A.jsx)(d,{height:16,width:`100%`,mb:`xs`}),(0,A.jsx)(d,{height:14,width:`40%`})]})]})},e))}):(0,A.jsxs)(p,{gap:`sm`,children:[e.length===0&&(0,A.jsx)(C,{icon:(0,A.jsx)(m,{}),title:`No messages to show`,description:`Messages from your care team will appear here.`,colour:`warning`}),e.map(e=>(0,A.jsx)(n,{onClick:()=>t(e),w:`100%`,ta:`left`,children:(0,A.jsx)(l,{children:(0,A.jsxs)(a,{wrap:`nowrap`,align:`flex-start`,children:[e.profiles.length>1?(0,A.jsx)(E,{participants:e.profiles,size:`lg`}):(0,A.jsx)(s,{givenName:e.profiles[0]?.givenName,familyName:e.profiles[0]?.familyName,gradientIndex:e.profiles[0]?.gradientIndex,size:`lg`}),(0,A.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,A.jsxs)(a,{justify:`space-between`,mb:`xs`,children:[(0,A.jsxs)(a,{gap:`xs`,children:[(0,A.jsx)(y,{children:e.displayName}),(0,A.jsx)(T,{count:e.unreadCount})]}),(0,A.jsx)(_,{children:O(e.lastMessageTime)})]}),(0,A.jsx)(x,{lineClamp:2,children:e.lastMessage})]})]})})},e.id))]})}var A;function j(){return(j=e((()=>{D(),o(),w(),v(),g(),b(),c(),S(),h(),i(),u(),f(),t(),A=r(),k.__docgenInfo={description:``,methods:[],displayName:`MessagesList`,props:{threads:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Unique thread identifier */
  id: string;
  /** Display name shown as the card heading */
  displayName: string;
  /** Participants for profile icon display */
  profiles: StackedParticipant[];
  /** Last message preview */
  lastMessage: string;
  /** Last message timestamp (ISO 8601) */
  lastMessageTime: string;
  /** Number of unread messages */
  unreadCount: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0},description:`Unique thread identifier`},{key:`displayName`,value:{name:`string`,required:!0},description:`Display name shown as the card heading`},{key:`profiles`,value:{name:`Array`,elements:[{name:`StackedParticipant`}],raw:`StackedParticipant[]`,required:!0},description:`Participants for profile icon display`},{key:`lastMessage`,value:{name:`string`,required:!0},description:`Last message preview`},{key:`lastMessageTime`,value:{name:`string`,required:!0},description:`Last message timestamp (ISO 8601)`},{key:`unreadCount`,value:{name:`number`,required:!0},description:`Number of unread messages`}]}}],raw:`MessageThread[]`},description:``},onThreadClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(thread: MessageThread) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  /** Unique thread identifier */
  id: string;
  /** Display name shown as the card heading */
  displayName: string;
  /** Participants for profile icon display */
  profiles: StackedParticipant[];
  /** Last message preview */
  lastMessage: string;
  /** Last message timestamp (ISO 8601) */
  lastMessageTime: string;
  /** Number of unread messages */
  unreadCount: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0},description:`Unique thread identifier`},{key:`displayName`,value:{name:`string`,required:!0},description:`Display name shown as the card heading`},{key:`profiles`,value:{name:`Array`,elements:[{name:`StackedParticipant`}],raw:`StackedParticipant[]`,required:!0},description:`Participants for profile icon display`},{key:`lastMessage`,value:{name:`string`,required:!0},description:`Last message preview`},{key:`lastMessageTime`,value:{name:`string`,required:!0},description:`Last message timestamp (ISO 8601)`},{key:`unreadCount`,value:{name:`number`,required:!0},description:`Number of unread messages`}]}},name:`thread`}],return:{name:`void`}}},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}export{j as n,k as t};