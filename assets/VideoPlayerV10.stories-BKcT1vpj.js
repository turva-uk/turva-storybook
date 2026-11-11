import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./VideoPlayer-sBrWG1rb.js";import{x as r}from"./Form-BQWpUpVW.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./Stack-D_d3SZwt.js";import{t as s}from"./Heading-CiSQlEyi.js";import{a as c,n as l}from"./variants-US1Dcm7T.js";import{n as u,t as d}from"./VideoPlayerV10-C4uiTUWL.js";import{n as f,t as p}from"./storyA11y-Cj8khv1l.js";var m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{a(),u(),t(),r(),c(),f(),m=i(),h=`/teaching/sample/ltd-transition.mp4`,g=`/teaching/sample/ltd-transition.vtt`,_={title:`Teaching/Video player v10`,tags:[`!dev`],component:d,parameters:{layout:`padded`,a11y:p}},v={args:{youtubeId:`2OTbDQh3MxM`},render:e=>(0,m.jsxs)(o,{gap:`sm`,children:[(0,m.jsx)(d,{...e}),(0,m.jsx)(l,{children:`Teaching slides carry both YouTube and hosted video through one component. YouTube plays in its own frame, under the same control bar as a hosted video.`})]})},y={args:{src:h,resumeAt:8},render:e=>(0,m.jsxs)(o,{gap:`sm`,children:[(0,m.jsx)(d,{...e}),(0,m.jsx)(l,{children:`Opens eight seconds in, where a returning learner left off, and does not jump back there when they seek.`})]})},b={args:{src:h,src1080p:`${h}?rendition=1080p`},render:e=>(0,m.jsxs)(o,{gap:`sm`,children:[(0,m.jsx)(d,{...e}),(0,m.jsx)(l,{children:`The control appears only because a 1080p rendition exists. Switching keeps the playback position, so changing quality part-way through a lecture does not start it again. Both sources are the same clip here - the switch is what is being shown, not the difference in picture.`})]})},x={args:{src:h},render:e=>(0,m.jsxs)(o,{gap:`sm`,children:[(0,m.jsx)(d,{...e}),(0,m.jsx)(l,{children:`No quality control at all, rather than one with a single option. The controls in the bar are ordinary elements with class names, so colours, shapes and order are ours to change.`})]})},S={args:{src:h,posterUrl:`/teaching/sample/ltd-transition-poster.jpg`},render:e=>(0,m.jsxs)(o,{gap:`sm`,children:[(0,m.jsx)(d,{...e}),(0,m.jsx)(l,{children:`The still shown before playback begins: a frame from halfway through the clip.`})]})},C={args:{src:h,captionsUrl:g},render:e=>(0,m.jsxs)(o,{gap:`sm`,children:[(0,m.jsx)(d,{...e}),(0,m.jsx)(l,{children:`Captions start switched off and are turned on with the captions button in the bar. The second cue runs over two lines, which is the case the cue background has to get right.`})]})},w={render:()=>(0,m.jsxs)(o,{gap:`lg`,children:[(0,m.jsxs)(o,{gap:`xs`,children:[(0,m.jsx)(s,{children:`Video.js v10`}),(0,m.jsx)(d,{src:h,captionsUrl:g})]}),(0,m.jsxs)(o,{gap:`xs`,children:[(0,m.jsx)(s,{children:`react-player`}),(0,m.jsx)(n,{src:h,captionsUrl:g})]}),(0,m.jsx)(l,{children:`The same clip in the same frame, so any difference is the player's doing. The lower one delegates to the browser, which is why its controls look different in Chrome, Safari and Firefox - and why they cannot be restyled.`})]})},T={...x,globals:{colorScheme:`dark`}},E=[`YouTube`,`WithResumePosition`,`HostedWithQualitySwitch`,`HostedSingleRendition`,`WithPoster`,`WithCaptions`,`SideBySideWithReactPlayer`,`DarkMode`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    youtubeId: "2OTbDQh3MxM"
  },
  render: args => <Stack gap="sm">
      <VideoPlayerV10 {...args} />
      <StoryNote>
        Teaching slides carry both YouTube and hosted video through one
        component. YouTube plays in its own frame, under the same control bar as
        a hosted video.
      </StoryNote>
    </Stack>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    src: SAMPLE,
    resumeAt: 8
  },
  render: args => <Stack gap="sm">
      <VideoPlayerV10 {...args} />
      <StoryNote>
        Opens eight seconds in, where a returning learner left off, and does not
        jump back there when they seek.
      </StoryNote>
    </Stack>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // The query string makes the second source a different address, so
  // the switch reloads the video as it does between two real files.
  args: {
    src: SAMPLE,
    src1080p: \`\${SAMPLE}?rendition=1080p\`
  },
  render: args => <Stack gap="sm">
      <VideoPlayerV10 {...args} />
      <StoryNote>
        The control appears only because a 1080p rendition exists. Switching
        keeps the playback position, so changing quality part-way through a
        lecture does not start it again. Both sources are the same clip here -
        the switch is what is being shown, not the difference in picture.
      </StoryNote>
    </Stack>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    src: SAMPLE
  },
  render: args => <Stack gap="sm">
      <VideoPlayerV10 {...args} />
      <StoryNote>
        No quality control at all, rather than one with a single option. The
        controls in the bar are ordinary elements with class names, so colours,
        shapes and order are ours to change.
      </StoryNote>
    </Stack>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    src: SAMPLE,
    posterUrl: "/teaching/sample/ltd-transition-poster.jpg"
  },
  render: args => <Stack gap="sm">
      <VideoPlayerV10 {...args} />
      <StoryNote>
        The still shown before playback begins: a frame from halfway through the
        clip.
      </StoryNote>
    </Stack>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    src: SAMPLE,
    captionsUrl: SAMPLE_CAPTIONS
  },
  render: args => <Stack gap="sm">
      <VideoPlayerV10 {...args} />
      <StoryNote>
        Captions start switched off and are turned on with the captions button
        in the bar. The second cue runs over two lines, which is the case the
        cue background has to get right.
      </StoryNote>
    </Stack>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="lg">
      <Stack gap="xs">
        <Heading>Video.js v10</Heading>
        <VideoPlayerV10 src={SAMPLE} captionsUrl={SAMPLE_CAPTIONS} />
      </Stack>
      <Stack gap="xs">
        <Heading>react-player</Heading>
        <VideoPlayer src={SAMPLE} captionsUrl={SAMPLE_CAPTIONS} />
      </Stack>
      <StoryNote>
        The same clip in the same frame, so any difference is the player's
        doing. The lower one delegates to the browser, which is why its controls
        look different in Chrome, Safari and Firefox - and why they cannot be
        restyled.
      </StoryNote>
    </Stack>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...HostedSingleRendition,
  globals: {
    colorScheme: "dark"
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as DarkMode,x as HostedSingleRendition,b as HostedWithQualitySwitch,w as SideBySideWithReactPlayer,C as WithCaptions,S as WithPoster,y as WithResumePosition,v as YouTube,E as __namedExportsOrder,_ as default};