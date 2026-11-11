import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{C as n,w as r}from"./Box-BssAA6js.js";import{c as i,o as a}from"./theme-B7Ll1jCm.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{a as s,i as c,n as l,r as u}from"./variants-US1Dcm7T.js";import{i as d,n as f,r as p,t as m}from"./PageSpinner-BSxFD2IG.js";import{n as h}from"./ChooseSiteForm-BMrMX9wz.js";import{n as g}from"./ForgotPasswordForm-DmpkrkKo.js";import{n as _}from"./LegalNotice-BE3hZixo.js";import{n as v,t as y}from"./LoginForm-Ck5Tj9G1.js";import{n as b}from"./RegistrationForm-B7s7OBFf.js";import{n as x}from"./ResetPasswordForm-BaVCqXyr.js";import{n as S}from"./Unsubscribe-Dveb29_R.js";import{n as C}from"./VerifyEmail-B2MztPqS.js";import{n as w}from"./VerifyEmailPending-C5U-YS2E.js";function T(){return(T=e((()=>{h(),g(),_(),v(),b(),x(),S(),C(),w()})))()}function E(){let[e,t]=(0,D.useState)(!0);return(0,D.useEffect)(()=>{let n=setTimeout(()=>t(!e),e?k:A);return()=>clearTimeout(n)},[e]),e?(0,O.jsx)(m,{}):(0,O.jsx)(y,{title:`Sign in to Brand`,registerPath:null,onSubmit:()=>new Promise(()=>{})})}var D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{D=t(),r(),a(),T(),s(),f(),d(),O=o(),k=3e3,A=1e4,j={title:`Feedback/Brand spinner`,component:p,parameters:{layout:`padded`}},M={render:e=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(p,{...e}),(0,O.jsx)(l,{children:`Screen readers hear "Loading". With "reduce motion" switched on in the device settings, the quill stays still and fades in and out.`})]})},N={render:()=>(0,O.jsxs)(c,{children:[(0,O.jsx)(u,{label:`2rem`,children:(0,O.jsx)(p,{size:`2rem`})}),(0,O.jsx)(u,{label:`4rem (default)`,children:(0,O.jsx)(p,{})}),(0,O.jsx)(u,{label:`8rem`,children:(0,O.jsx)(p,{size:`8rem`})})]})},P={name:`Loading Brand app`,globals:{colorScheme:`light`},render:()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(l,{mt:0,children:`What somebody sees when they open Brand. The spinner shows while the app starts, here for three seconds, then gives way to the sign-in screen. That stays for ten seconds and the loop starts again.`}),(0,O.jsx)(E,{})]})},F={globals:{colorScheme:`dark`}},I={decorators:[e=>(0,O.jsx)(n,{theme:i(`turva`).theme,children:(0,O.jsx)(e,{})})]},L={...I,name:`Turva brand dark mode`,globals:{colorScheme:`dark`}},R=[`Default`,`AllSizes`,`LoadingBrandApp`,`DarkMode`,`TurvaBrand`,`TurvaBrandDarkMode`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <BrandSpinner {...args} />
      <StoryNote>
        Screen readers hear &quot;Loading&quot;. With &quot;reduce motion&quot;
        switched on in the device settings, the quill stays still and fades in
        and out.
      </StoryNote>
    </>
}`,...M.parameters?.docs?.source},description:{story:`The quill turns about its shaft. A screen reader hears "Loading"; the
graphic itself is hidden from it.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="2rem">
        <BrandSpinner size="2rem" />
      </VariantRow>
      <VariantRow label="4rem (default)">
        <BrandSpinner />
      </VariantRow>
      <VariantRow label="8rem">
        <BrandSpinner size="8rem" />
      </VariantRow>
    </VariantStack>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Loading Brand app",
  globals: {
    colorScheme: "light"
  },
  // The note goes above here, not below: what is under it changes height
  // every few seconds, and a note beneath would jump about with it.
  render: () => <>
      <StoryNote mt={0}>
        What somebody sees when they open Brand. The spinner shows while the app
        starts, here for three seconds, then gives way to the sign-in screen.
        That stays for ten seconds and the loop starts again.
      </StoryNote>
      <StartUpLoop />
    </>
}`,...P.parameters?.docs?.source},description:{story:`How starting the app will look: the spinner for three seconds, then the
sign-in screen for ten, and round again.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  globals: {
    colorScheme: "dark"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MantineThemeProvider theme={makeTheme("turva").theme}>
        <Story />
      </MantineThemeProvider>]
}`,...I.parameters?.docs?.source},description:{story:`Under the Turva theme the spinner is Turva's own: the belt from its
logo folding in on itself and out again. With "reduce motion" on it is
the first frame, still, fading in and out. Shown here inside the Turva
theme, so it can be seen without starting Storybook as Turva
(\`just sb turva\`).`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...TurvaBrand,
  name: "Turva brand dark mode",
  globals: {
    colorScheme: "dark"
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{N as AllSizes,F as DarkMode,M as Default,P as LoadingBrandApp,I as TurvaBrand,L as TurvaBrandDarkMode,R as __namedExportsOrder,j as default};