import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{T as n,w as r}from"./Box-BssAA6js.js";import{n as i,t as a}from"./use-media-query-DGueX9ZJ.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./ThemeIcon-CMkkVvBI.js";function l({icon:e,size:t=`md`,colour:r,className:a,container:o,containerVariant:s=`light`,fixed:l=!1}){let m=n(),h=(i(`(max-width: ${m.breakpoints.sm})`,!1,{getInitialValueInEffect:!1})&&!l?p:f)[t],g=e,_=(0,u.cloneElement)(g,{size:h,...r?{color:r}:{},className:a});if(o){let e=Math.round(h*1.3),t=(0,u.cloneElement)(g,{size:e,stroke:2.5,...r?{color:r}:{},className:a});return(0,d.jsx)(c,{color:o,variant:s,size:h+16,radius:`50%`,children:t})}return _}var u,d,f,p;function m(){return(m=e((()=>{u=t(),s(),r(),a(),d=o(),f={sm:20,md:28,mlg:36,lg:48,xl:72},p={sm:16,md:20,mlg:36,lg:32,xl:48},l.__docgenInfo={description:`Icon component that wraps Tabler icons with consistent sizing.
Automatically scales down on mobile devices.
Optionally wraps in a circular ThemeIcon container.

@param props - Component props
@returns Cloned icon element with size applied

@example
\`\`\`tsx
<Icon icon={<IconPencil />} size="sm" />
<Icon icon={<IconUserPlus />} size="lg" />
<Icon icon={<IconCheck />} container="var(--success-color)" />
<Icon icon={<IconX />} container="var(--alert-color)" containerVariant="filled" />
\`\`\``,methods:[],displayName:`Icon`,props:{icon:{required:!0,tsType:{name:`ReactElement`},description:`Icon element from @tabler/icons-react`},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "mlg" | "lg" | "xl"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"mlg"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:`Size variant - defaults to md`,defaultValue:{value:`"md"`,computed:!1}},colour:{required:!1,tsType:{name:`string`},description:`Icon colour - any valid CSS colour value`},className:{required:!1,tsType:{name:`string`},description:`Optional class name for additional styling`},container:{required:!1,tsType:{name:`MantineColor`},description:`Wrap the icon in a circular ThemeIcon container with this colour`},containerVariant:{required:!1,tsType:{name:`union`,raw:`"light" | "filled" | "outline"`,elements:[{name:`literal`,value:`"light"`},{name:`literal`,value:`"filled"`},{name:`literal`,value:`"outline"`}]},description:`ThemeIcon variant when container is set (default: "light")`,defaultValue:{value:`"light"`,computed:!1}},fixed:{required:!1,tsType:{name:`boolean`},description:`Keep the wide-screen size at every width, rather than shrinking on
a phone. For an icon sitting inside a control whose own height does
not shrink, where a smaller icon looked like the control changing
as the window narrowed.`,defaultValue:{value:`false`,computed:!1}}}}})))()}export{m as n,l as t};