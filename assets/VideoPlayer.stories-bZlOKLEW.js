import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./VideoPlayer-sBrWG1rb.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{a as o,n as s}from"./variants-US1Dcm7T.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),t(),o(),c=r(),l=`/teaching/sample/ltd-transition.mp4`,u={title:`Teaching/Video player`,tags:[`!dev`],component:n,parameters:{layout:`padded`}},d={args:{youtubeId:`2OTbDQh3MxM`}},f={args:{youtubeId:`2OTbDQh3MxM`,resumeAt:30}},p={args:{src:l,src1080p:l},render:e=>(0,c.jsxs)(a,{gap:`sm`,children:[(0,c.jsx)(n,{...e}),(0,c.jsx)(s,{children:`The control appears only because a 1080p rendition exists. Switching keeps the playback position, so changing quality part-way through a lecture does not start it again. Both sources are the same file here - the switch is what is being shown, not the difference in picture.`})]})},m={args:{src:l},render:e=>(0,c.jsxs)(a,{gap:`sm`,children:[(0,c.jsx)(n,{...e}),(0,c.jsx)(s,{children:`No control at all, rather than one with a single option. A source shorter than 1080p never gets a second rendition, so there is nothing to choose between.`})]})},h={...d,globals:{colorScheme:`dark`}},g=[`YouTube`,`WithResumePosition`,`HostedWithQualitySwitch`,`HostedSingleRendition`,`DarkMode`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    youtubeId: "2OTbDQh3MxM"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    youtubeId: "2OTbDQh3MxM",
    resumeAt: 30
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: SAMPLE,
    src1080p: SAMPLE
  },
  render: args => <Stack gap="sm">
      <VideoPlayer {...args} />
      <StoryNote>
        The control appears only because a 1080p rendition exists. Switching
        keeps the playback position, so changing quality part-way through a
        lecture does not start it again. Both sources are the same file here -
        the switch is what is being shown, not the difference in picture.
      </StoryNote>
    </Stack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: SAMPLE
  },
  render: args => <Stack gap="sm">
      <VideoPlayer {...args} />
      <StoryNote>
        No control at all, rather than one with a single option. A source
        shorter than 1080p never gets a second rendition, so there is nothing to
        choose between.
      </StoryNote>
    </Stack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...YouTube,
  globals: {
    colorScheme: "dark"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as DarkMode,m as HostedSingleRendition,p as HostedWithQualitySwitch,f as WithResumePosition,d as YouTube,g as __namedExportsOrder,u as default};