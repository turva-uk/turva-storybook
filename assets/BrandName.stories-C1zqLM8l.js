import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{C as t,w as n}from"./Box-BssAA6js.js";import{c as r,d as i,f as a,o}from"./theme-B7Ll1jCm.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./publicAsset-HJc8QrwY.js";import{n as u,t as d}from"./Image-SdxK9Tny.js";import{n as f,t as p}from"./BrandName-BBaSYQgI.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{n(),a(),o(),f(),u(),l(),m=s(),h={title:`Images/Brand name`,component:p,parameters:{layout:`padded`},argTypes:{height:{control:`number`},alt:{control:`text`}}},g={args:{height:5,alt:`Brand`},decorators:[e=>(0,m.jsx)(`div`,{style:{background:`var(--brand-primary)`,padding:`2rem`,display:`inline-flex`},children:(0,m.jsx)(e,{})})]},_={tags:[`!dev`],decorators:[e=>(0,m.jsx)(`div`,{style:{background:`white`,padding:`2rem`,display:`inline-flex`},children:(0,m.jsx)(e,{})})],render:()=>(0,m.jsx)(d,{src:c(`/quill-name.png`),alt:`Brand`,height:5,style:{marginRight:`0.5rem`}})},v={args:{height:5},decorators:[e=>(0,m.jsx)(t,{theme:r(`turva`).theme,children:(0,m.jsx)(`div`,{style:{background:i.app_themes.turva?.brand.primary,padding:`2rem`,display:`inline-flex`},children:(0,m.jsx)(e,{})})})]},y=[`Default`,`DarkFont`,`TurvaBrand`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    height: 5,
    alt: "Brand"
  },
  decorators: [Story => <div style={{
    background: "var(--brand-primary)",
    padding: "2rem",
    display: "inline-flex"
  }}>
        <Story />
      </div>]
}`,...g.parameters?.docs?.source},description:{story:`Default Brand text logo.
Standard height (5px) suitable for Storybook display.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  // Hidden from the sidebar locally and on the published Storybook: it
  // draws Quill's own dark wordmark, whatever the brand. Still run by
  // \`just sbt\`.
  tags: ["!dev"],
  decorators: [Story => <div style={{
    background: "white",
    padding: "2rem",
    display: "inline-flex"
  }}>
        <Story />
      </div>],
  render: () => <Image src={publicAsset("/quill-name.png")} alt="Brand" height={5} style={{
    marginRight: "0.5rem"
  }} />
}`,..._.parameters?.docs?.source},description:{story:`Dark font variant for light backgrounds.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    height: 5
  },
  decorators: [Story => <MantineThemeProvider theme={makeTheme("turva").theme}>
        <div style={{
      // The page's variables are still the default brand's here, so the lavender
      // is read from the brand file rather than --brand-primary.
      background: brand.app_themes["turva"]?.brand.primary,
      padding: "2rem",
      display: "inline-flex"
    }}>
          <Story />
        </div>
      </MantineThemeProvider>]
}`,...v.parameters?.docs?.source},description:{story:`Under the Turva theme, the wordmark is Turva's: the name in Finlandica
Headline 700, drawn as an SVG, on Turva's lavender as the ribbon shows
it.`,...v.parameters?.docs?.description}}}})))()}b();export{_ as DarkFont,g as Default,v as TurvaBrand,y as __namedExportsOrder,h as default};