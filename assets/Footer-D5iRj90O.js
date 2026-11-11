import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Box-BssAA6js.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Skeleton-MhOxmKho.js";import{n as o,t as s}from"./BodyText-Vl4rxmG1.js";function c({text:e,loading:t=!1}){return!e&&!t?null:(0,l.jsx)(n,{component:`footer`,pos:`sticky`,bottom:0,bg:`var(--mantine-color-body)`,style:{zIndex:100,borderTop:`1px solid var(--card-border, var(--mantine-color-gray-2))`,flexShrink:0,padding:`0.5rem 1rem`},children:(0,l.jsx)(n,{style:{display:`flex`,justifyContent:`flex-end`},children:t?(0,l.jsx)(a,{height:`1.5rem`,width:`12rem`,radius:`sm`,my:`0.25rem`}):(0,l.jsx)(s,{children:e})})})}var l;function u(){return(u=e((()=>{t(),i(),o(),l=r(),c.__docgenInfo={description:`Footer

Renders a sticky footer bar displaying the provided text or loading indicator.
Hidden when no text is provided and not loading.

@param text - Text to display in footer
@param loading - Whether to show loading indicator
@param size - Size variant (sm, md, lg)
@returns Footer component or null if no text and not loading`,methods:[],displayName:`Footer`,props:{text:{required:!1,tsType:{name:`string`},description:`Text to display in the footer`},loading:{required:!1,tsType:{name:`boolean`},description:`Whether footer is in loading state`,defaultValue:{value:`false`,computed:!1}}}}})))()}export{u as n,c as t};