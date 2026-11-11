import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,w as n}from"./Box-BssAA6js.js";import{n as r,t as i}from"./SimpleGrid-Cw3N2DUw.js";import{n as a,t as o}from"./use-media-query-DGueX9ZJ.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./BaseCard-C_VuKVYL.js";import{n as u,t as d}from"./Image-BzsrZ6Dz.js";import{n as f,t as p}from"./Stack-D_d3SZwt.js";import{n as m,t as h}from"./ActionCardButton-DnJjeR9q.js";import{n as g,t as _}from"./BodyText-Vl4rxmG1.js";import{n as v,t as y}from"./Heading-CiSQlEyi.js";import{n as b,t as x}from"./publicAsset-HJc8QrwY.js";function S({title:e,description:n,imageSrc:r,imageAlt:i,imageFocus:o,buttonLabel:s,buttonUrl:c,onClick:u}){let f=t(),m=a(`(max-width: ${f.breakpoints.sm})`);return(0,C.jsx)(l,{maw:`50rem`,h:`100%`,children:(0,C.jsxs)(p,{gap:`md`,h:`100%`,children:[(0,C.jsx)(y,{children:e}),r&&(0,C.jsx)(d,{src:r,alt:i||e,radius:`md`,w:`100%`,h:m?180:200,fit:`cover`,style:{objectPosition:`50% ${o??50}%`}}),(0,C.jsx)(_,{children:n}),(0,C.jsx)(`div`,{style:{marginTop:`auto`,marginBottom:`calc(var(--mantine-spacing-md) * -0.5)`}}),(0,C.jsx)(h,{label:s,url:c,onClick:u})]})})}var C;function w(){return(w=e((()=>{u(),f(),n(),o(),m(),g(),v(),c(),C=s(),S.__docgenInfo={description:``,methods:[],displayName:`PictureActionCard`,props:{title:{required:!0,tsType:{name:`string`},description:`Card title`},imageSrc:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`Cover image URL (null hides the image)`},imageAlt:{required:!1,tsType:{name:`string`},description:`Image alt text`},imageFocus:{required:!1,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:`Focal point for vertical image cropping (0 = top, 50 = centre, 100 = bottom)`},description:{required:!0,tsType:{name:`string`},description:`Card description`},buttonLabel:{required:!0,tsType:{name:`string`},description:`Button label text`},buttonUrl:{required:!0,tsType:{name:`string`},description:`Button destination URL`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Optional onClick handler (overrides URL navigation if provided)`}}}})))()}var T,E,D,O,k;function A(){return(A=e((()=>{r(),w(),x(),T=s(),E={title:`Action card/Picture action card`,component:S,parameters:{layout:`padded`}},D={args:{title:`Colorectal Polyps`,description:`Morphology categories of superficial lesions, clinical implications, and standardised reporting using the Paris classification.`,imageSrc:b(`/storybook/paris-classification.png`),imageAlt:`Paris classification of superficial neoplasms`,buttonLabel:`View module`,buttonUrl:`/teaching/colorectal-polyps`}},O={args:{title:`Colorectal Polyps`,description:`Morphology categories of superficial lesions.`,imageSrc:b(`/storybook/paris-classification.png`),imageAlt:`Paris classification of superficial neoplasms`,buttonLabel:`View module`,buttonUrl:`/teaching/colorectal-polyps`},render:()=>(0,T.jsxs)(i,{cols:{base:1,sm:2},spacing:`md`,children:[(0,T.jsx)(S,{title:`Colorectal Polyps`,description:`Morphology categories of superficial lesions, clinical implications, and standardised reporting using the Paris classification.`,imageSrc:b(`/storybook/paris-classification.png`),imageAlt:`Paris classification of superficial neoplasms`,buttonLabel:`View module`,buttonUrl:`/teaching/colorectal-polyps`}),(0,T.jsx)(S,{title:`Chest X-ray Interpretation`,description:`Systematic approach to interpreting chest radiographs, common pathologies, and structured reporting.`,imageSrc:b(`/storybook/chest-xray-pneumothorax.png`),imageAlt:`Chest X-ray showing pneumothorax`,buttonLabel:`View module`,buttonUrl:`/teaching/chest-xray-interpretation`})]})},k=[`Default`,`Grid`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Colorectal Polyps",
    description: "Morphology categories of superficial lesions, clinical implications, and standardised reporting using the Paris classification.",
    imageSrc: publicAsset("/storybook/paris-classification.png"),
    imageAlt: "Paris classification of superficial neoplasms",
    buttonLabel: "View module",
    buttonUrl: "/teaching/colorectal-polyps"
  }
}`,...D.parameters?.docs?.source},description:{story:`Default

Module card with a cover image, title, description, and button.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Colorectal Polyps",
    description: "Morphology categories of superficial lesions.",
    imageSrc: publicAsset("/storybook/paris-classification.png"),
    imageAlt: "Paris classification of superficial neoplasms",
    buttonLabel: "View module",
    buttonUrl: "/teaching/colorectal-polyps"
  },
  render: () => <SimpleGrid cols={{
    base: 1,
    sm: 2
  }} spacing="md">
      <PictureActionCard title="Colorectal Polyps" description="Morphology categories of superficial lesions, clinical implications, and standardised reporting using the Paris classification." imageSrc={publicAsset("/storybook/paris-classification.png")} imageAlt="Paris classification of superficial neoplasms" buttonLabel="View module" buttonUrl="/teaching/colorectal-polyps" />
      <PictureActionCard title="Chest X-ray Interpretation" description="Systematic approach to interpreting chest radiographs, common pathologies, and structured reporting." imageSrc={publicAsset("/storybook/chest-xray-pneumothorax.png")} imageAlt="Chest X-ray showing pneumothorax" buttonLabel="View module" buttonUrl="/teaching/chest-xray-interpretation" />
    </SimpleGrid>
}`,...O.parameters?.docs?.source},description:{story:`Grid

Two module cards side-by-side in a responsive grid, matching the
teaching dashboard layout.`,...O.parameters?.docs?.description}}}})))()}A();export{D as Default,O as Grid,k as __namedExportsOrder,E as default};