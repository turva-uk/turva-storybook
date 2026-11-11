import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./publicAsset-HJc8QrwY.js";import{r,t as i}from"./PdfPages-oOAIvND7.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{r(),n(),a={title:`Documents/PDF pages`,component:i,parameters:{layout:`padded`}},o={args:{name:`Example letter`,url:t(`/mock-documents/6_three_page_letter.pdf`)}},s={args:{name:`External clinical letter`,url:t(`/mock-documents/1_external_clinical_letter.pdf`)}},c={args:{name:`Broken file`,url:t(`/mock-documents/thumbnails/1_external_clinical_letter.pdf.png`)}},l={...o,globals:{colorScheme:`dark`}},u=[`ThreePages`,`ClinicLetter`,`CannotBeShown`,`DarkMode`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Example letter",
    url: publicAsset("/mock-documents/6_three_page_letter.pdf")
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "External clinical letter",
    url: publicAsset("/mock-documents/1_external_clinical_letter.pdf")
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Broken file",
    url: publicAsset("/mock-documents/thumbnails/1_external_clinical_letter.pdf.png")
  }
}`,...c.parameters?.docs?.source},description:{story:`A file that is not a PDF at all, which pdf.js refuses to open.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...ThreePages,
  globals: {
    colorScheme: "dark"
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as CannotBeShown,s as ClinicLetter,l as DarkMode,o as ThreePages,u as __namedExportsOrder,a as default};