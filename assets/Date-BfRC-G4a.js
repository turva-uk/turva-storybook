import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";function n({date:e,locale:t=`en-GB`,format:n=`short`}){if(!e)return null;try{let i=new globalThis.Date(e);if(Number.isNaN(i.getTime()))return(0,r.jsx)(r.Fragment,{children:`Invalid date`});let a=n===`short`?{year:`numeric`,month:`2-digit`,day:`2-digit`}:n===`medium`?{year:`numeric`,month:`short`,day:`numeric`}:n===`long`?{year:`numeric`,month:`long`,day:`numeric`}:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`},o=new Intl.DateTimeFormat(t,a).format(i);return(0,r.jsx)(r.Fragment,{children:o})}catch(e){return console.error(`Error formatting date:`,e),(0,r.jsx)(r.Fragment,{children:`Invalid date`})}}var r;function i(){return(i=e((()=>{r=t(),n.__docgenInfo={description:`FormattedDate

Displays a formatted date with locale-specific formatting.

@example
// British format: 12/05/1980
<FormattedDate date="1980-05-12" />

@example
// American format: 5/12/1980
<FormattedDate date="1980-05-12" locale="en-US" />

@example
// Long format: 12 May 1980
<FormattedDate date="1980-05-12" format="long" />`,methods:[],displayName:`FormattedDate`,props:{date:{required:!0,tsType:{name:`string`},description:`ISO 8601 date string (YYYY-MM-DD) from backend`},locale:{required:!1,tsType:{name:`union`,raw:`"en-GB" | "en-US"`,elements:[{name:`literal`,value:`"en-GB"`},{name:`literal`,value:`"en-US"`}]},description:`Locale for date formatting. Defaults to 'en-GB' (British English)`,defaultValue:{value:`"en-GB"`,computed:!1}},format:{required:!1,tsType:{name:`union`,raw:`"short" | "medium" | "long" | "full"`,elements:[{name:`literal`,value:`"short"`},{name:`literal`,value:`"medium"`},{name:`literal`,value:`"long"`},{name:`literal`,value:`"full"`}]},description:`Date format style`,defaultValue:{value:`"short"`,computed:!1}}}}})))()}export{i as n,n as t};