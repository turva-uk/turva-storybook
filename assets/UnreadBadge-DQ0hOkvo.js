import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Skeleton-MhOxmKho.js";var i,a;function o(){return(o=e((()=>{i=`_badge_14dsz_1`,a={badge:i}})))()}function s({count:e,isLoading:t=!1}){if(t)return(0,c.jsx)(r,{width:32,height:32,circle:!0});if(e<=0)return null;let n=e>9?`9+`:String(e);return(0,c.jsx)(`span`,{className:a.badge,"aria-label":`${e} unread`,children:n})}var c;function l(){return(l=e((()=>{n(),o(),c=t(),s.__docgenInfo={description:`Unread Badge

Shows a filled circular badge with the unread count.
Returns null when there are no unread messages.

@example
\`\`\`tsx
<UnreadBadge count={3} />       // Shows blue circle with "3"
<UnreadBadge count={0} />       // Renders nothing
<UnreadBadge count={12} />      // Shows "9+"
\`\`\``,methods:[],displayName:`UnreadBadge`,props:{count:{required:!0,tsType:{name:`number`},description:`Number of unread messages`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show loading skeleton instead of badge`,defaultValue:{value:`false`,computed:!1}}}}})))()}export{l as n,s as t};