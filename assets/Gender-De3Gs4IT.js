import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";function n({gender:e,format:t=`full`}){if(!e||e===`unspecified`)return(0,r.jsx)(r.Fragment,{children:`Unspecified`});let n=e.toLowerCase();if(t===`abbreviated`)return(0,r.jsx)(r.Fragment,{children:{male:`M`,female:`F`}[n]||`U`});let i=n.charAt(0).toUpperCase()+n.slice(1);return(0,r.jsx)(r.Fragment,{children:i})}var r;function i(){return(i=e((()=>{r=t(),n.__docgenInfo={description:`Gender

Displays gender with optional abbreviation.

@example
// Full format: "Male"
<Gender gender="male" />

@example
// Abbreviated format: "M"
<Gender gender="male" format="abbreviated" />

@example
// Unspecified: "Unspecified"
<Gender gender="unspecified" />`,methods:[],displayName:`Gender`,props:{gender:{required:!0,tsType:{name:`union`,raw:`GenderValue | undefined | null`,elements:[{name:`union`,raw:`"male" | "female" | "unspecified"`,elements:[{name:`literal`,value:`"male"`},{name:`literal`,value:`"female"`},{name:`literal`,value:`"unspecified"`}]},{name:`undefined`},{name:`null`}]},description:`Gender value (male, female, unspecified)`},format:{required:!1,tsType:{name:`union`,raw:`"full" | "abbreviated"`,elements:[{name:`literal`,value:`"full"`},{name:`literal`,value:`"abbreviated"`}]},description:`Display format`,defaultValue:{value:`"full"`,computed:!1}}}}})))()}export{i as n,n as t};