import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{a as i,n as a}from"./variants-US1Dcm7T.js";import{a as o,c as s,i as c,n as l,r as u,s as d,t as f}from"./stubSlides-CcJHDzjh.js";import{a as p,c as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./SlideLayoutDefault-CA9lcOtO.js";import{n as x,t as S}from"./storyA11y-Cj8khv1l.js";var C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{n(),i(),m(),_(),h(),g(),c(),x(),C=t(),w=`/teaching/sample`,T={title:`Teaching/Slide layouts`,tags:[`!dev`]},E={render:()=>(0,C.jsx)(y,{slide:o})},D={render:()=>(0,C.jsx)(b,{slide:l})},O={parameters:{a11y:S},render:()=>(0,C.jsx)(p,{slide:s})},k={parameters:{a11y:S},render:()=>(0,C.jsxs)(r,{gap:`sm`,children:[(0,C.jsx)(p,{slide:u,baseUrlOverride:w}),(0,C.jsx)(a,{children:`The base URL is supplied directly here: a grant is a network call, and Storybook has no backend to answer it.`})]})},A={render:()=>(0,C.jsxs)(r,{gap:`sm`,children:[(0,C.jsx)(p,{slide:u,forceLoading:!0}),(0,C.jsx)(a,{children:`While the access grant is in flight: a skeleton rather than an empty frame, so the slide does not look broken on a slow connection. Held open deliberately here - in the app it lasts one network call.`})]})},j={render:()=>(0,C.jsxs)(r,{gap:`sm`,children:[(0,C.jsx)(p,{slide:u,moduleId:`demo-module`}),(0,C.jsx)(a,{children:`What a refused or expired grant shows in place of the player. This is the component itself: Storybook has no backend, so the grant request genuinely fails and the real refusal is what you see.`})]})},M={render:()=>(0,C.jsx)(v,{slide:d})},N={render:()=>(0,C.jsx)(b,{slide:f})},P={render:()=>(0,C.jsx)(b,{slide:l}),globals:{colorScheme:`dark`}},F=[`NewSectionSlide`,`PlainTextSlide`,`YoutubeVideo`,`HostedVideo`,`HostedVideoLoading`,`HostedVideoAccessDenied`,`FigureWithText`,`DefaultWithCallout`,`DarkMode`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <SlideLayoutSectionTitle slide={sectionTitleSlide} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <SlideLayoutDefault slide={defaultSlide} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: VIDEOJS_STORY_A11Y
  },
  render: () => <SlideLayoutVideo slide={videoSlide} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: VIDEOJS_STORY_A11Y
  },
  render: () => <Stack gap="sm">
      <SlideLayoutVideo slide={hostedVideoSlide} baseUrlOverride={SAMPLE_VIDEO_BASE} />
      <StoryNote>
        The base URL is supplied directly here: a grant is a network call, and
        Storybook has no backend to answer it.
      </StoryNote>
    </Stack>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="sm">
      <SlideLayoutVideo slide={hostedVideoSlide} forceLoading />
      <StoryNote>
        While the access grant is in flight: a skeleton rather than an empty
        frame, so the slide does not look broken on a slow connection. Held open
        deliberately here - in the app it lasts one network call.
      </StoryNote>
    </Stack>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="sm">
      <SlideLayoutVideo slide={hostedVideoSlide} moduleId="demo-module" />
      <StoryNote>
        What a refused or expired grant shows in place of the player. This is
        the component itself: Storybook has no backend, so the grant request
        genuinely fails and the real refusal is what you see.
      </StoryNote>
    </Stack>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <SlideLayoutTextWithFigure slide={textWithFigureSlide} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <SlideLayoutDefault slide={calloutSlide} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <SlideLayoutDefault slide={defaultSlide} />,
  globals: {
    colorScheme: "dark"
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{P as DarkMode,N as DefaultWithCallout,M as FigureWithText,k as HostedVideo,j as HostedVideoAccessDenied,A as HostedVideoLoading,E as NewSectionSlide,D as PlainTextSlide,O as YoutubeVideo,F as __namedExportsOrder,T as default};