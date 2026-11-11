import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{C as n,w as r}from"./Box-BssAA6js.js";import{c as i,o as a}from"./theme-B7Ll1jCm.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{a as s,n as c}from"./variants-US1Dcm7T.js";import{n as l,t as u}from"./PageSpinner-BSxFD2IG.js";function d(){let[e,t]=(0,f.useState)(0);return(0,f.useEffect)(()=>{let e=setInterval(()=>t(e=>e+1),m);return()=>clearInterval(e)},[]),(0,p.jsx)(u,{},e)}var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{f=t(),r(),a(),s(),l(),p=o(),m=700,h={title:`Feedback/Page spinner`,component:u,parameters:{layout:`padded`}},g={},_={render:()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{mt:0,children:`A new spinner replaces the old one every 0.7 seconds, as happens when one part of Brand hands a wait over to the next. The spinner should keep turning without restarting.`}),(0,p.jsx)(d,{})]})},v={globals:{colorScheme:`dark`}},y={decorators:[e=>(0,p.jsx)(n,{theme:i(`turva`).theme,children:(0,p.jsx)(e,{})})]},b={...y,name:`Turva brand dark mode`,globals:{colorScheme:`dark`}},x=[`Default`,`HandingOver`,`DarkMode`,`TurvaBrand`,`TurvaBrandDarkMode`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source},description:{story:`The quill in the middle of the page, at the one size a page wait uses.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  // The note goes above here, not below: it is the page's height that the
  // spinner centres in, and a note beneath would sit off the screen.
  render: () => <>
      <StoryNote mt={0}>
        A new spinner replaces the old one every 0.7 seconds, as happens when
        one part of Brand hands a wait over to the next. The spinner should keep
        turning without restarting.
      </StoryNote>
      <HandOverLoop />
    </>
}`,..._.parameters?.docs?.source},description:{story:`The spinner is taken away and a new one put in its place several times
a turn. Each new one starts at the angle the last had reached, so the
quill should turn smoothly with no snap back to face on.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  globals: {
    colorScheme: "dark"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MantineThemeProvider theme={makeTheme("turva").theme}>
        <Story />
      </MantineThemeProvider>]
}`,...y.parameters?.docs?.source},description:{story:`Under the Turva theme the spinner is Turva's own: the belt from its
logo folding in on itself and out again. With "reduce motion" on it is
the first frame, still, fading in and out. Shown here inside the Turva
theme, so it can be seen without starting Storybook as Turva
(\`just sb turva\`).`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...TurvaBrand,
  name: "Turva brand dark mode",
  globals: {
    colorScheme: "dark"
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{v as DarkMode,g as Default,_ as HandingOver,y as TurvaBrand,b as TurvaBrandDarkMode,x as __namedExportsOrder,h as default};