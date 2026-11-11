import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{T as n,w as r}from"./Box-BssAA6js.js";import{n as i,t as a}from"./use-media-query-DGueX9ZJ.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./ActionIcon-Cg0XfxPW.js";import{t as l}from"./Icon-DG7U5iIm.js";import{t as u}from"./icons-ClIZ42AL.js";var d,f,p;function m(){return(m=e((()=>{d=t(),s(),r(),a(),u(),f=o(),p=(0,d.forwardRef)(function({icon:e,...t},r){let a=n(),o=i(`(max-width: ${a.breakpoints.sm})`,!1,{getInitialValueInEffect:!1});return(0,f.jsx)(c,{ref:r,...t,size:o?48:42,children:(0,f.jsx)(l,{icon:e,size:o?`lg`:`md`})})}),p.__docgenInfo={description:`IconButton component that wraps ActionIcon with automatic sizing.

Forwards its ref, so a tooltip or popover can wrap it: both attach
to the element the ref lands on.

@param props - Component props
@returns ActionIcon with Icon inside

@example
\`\`\`tsx
<IconButton
  icon={<IconPencil />}
  variant="subtle"
  color="primary"
  onClick={handleClick}
  aria-label="Edit"
/>
\`\`\``,methods:[],displayName:`IconButton`,props:{icon:{required:!0,tsType:{name:`ReactElement`},description:`Icon element from @tabler/icons-react`},variant:{required:!1,tsType:{name:`union`,raw:`| "filled"
| "light"
| "outline"
| "subtle"
| "transparent"
| "default"
| "white"
| "gradient"`,elements:[{name:`literal`,value:`"filled"`},{name:`literal`,value:`"light"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"subtle"`},{name:`literal`,value:`"transparent"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"white"`},{name:`literal`,value:`"gradient"`}]},description:`Mantine variant`},color:{required:!1,tsType:{name:`MantineColor`},description:`Color from Mantine theme`},onClick:{required:!1,tsType:{name:`MouseEventHandler`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEventHandler<HTMLButtonElement>`},description:`Click handler`},"aria-label":{required:!0,tsType:{name:`string`},description:`What the button does, read out by screen readers. Required: the
button shows only an icon, so without it a screen reader announces
just "button" (WCAG 4.1.2).`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled state`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})))()}export{m as n,p as t};