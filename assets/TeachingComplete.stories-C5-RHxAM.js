import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Box-BssAA6js.js";import{n as r,t as i}from"./VideoPlayer-sBrWG1rb.js";import{C as a,S as o}from"./Form-BQWpUpVW.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./PreviousNextButton-CEju2iCy.js";import{n as u,t as d}from"./TeachingLayout-hJ9K48SW.js";import{n as f,t as p}from"./TeachingLearningNav-u_h15NW5.js";import{c as m,i as h,o as g,s as _,t as v}from"./stubSlides-CcJHDzjh.js";import{a as y,c as b,i as x,n as S,o as C,r as w,s as T,t as E}from"./SlideLayoutDefault-CA9lcOtO.js";function D({slide:e,moduleId:t,onVideoProgress:n,videoResumeAt:r}){switch(e.layout){case`section-title`:return(0,O.jsx)(T,{slide:e});case`video-slide`:return(0,O.jsx)(y,{slide:e,moduleId:t,onVideoProgress:n,resumeAt:r});case`image-slide`:case`text-with-figure`:return(0,O.jsx)(w,{slide:e});default:return(0,O.jsx)(E,{slide:e})}}var O;function k(){return(k=e((()=>{b(),C(),x(),S(),O=s(),D.__docgenInfo={description:``,methods:[],displayName:`SlideViewer`,props:{slide:{required:!0,tsType:{name:`CompiledSlide`},description:`The compiled slide data to render`},moduleId:{required:!1,tsType:{name:`string`},description:`Module the slide belongs to.

Only hosted video needs it, to request an access grant - but it is
threaded from the page rather than derived here, because a
component that guessed its own module would be wrong the moment
slides were ever shown outside a module route.`},onVideoProgress:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(seconds: number) => void`,signature:{arguments:[{type:{name:`number`},name:`seconds`}],return:{name:`void`}}},description:`Called with playback position for video slides`},videoResumeAt:{required:!1,tsType:{name:`number`},description:`Resume position for video slides (seconds)`}}}})))()}function A(e,t){return(0,j.jsx)(p,{slides:g,currentIndex:e,onNavigate:t??(()=>{}),onExit:()=>{}})}var j,M,N,P,F,I,L;function R(){return(R=e((()=>{t(),u(),a(),f(),r(),k(),c(),h(),j=s(),M={title:`Teaching/Layouts/Learning complete`,tags:[`!dev`],parameters:{layout:`fullscreen`}},N={tags:[`!test`],render:()=>(0,j.jsxs)(d,{fluid:!0,sidebar:A(1),footerText:`Logged in: dr.jones`,children:[(0,j.jsx)(o,{title:`Recorded lecture`}),(0,j.jsx)(i,{youtubeId:`2OTbDQh3MxM`}),(0,j.jsx)(n,{hiddenFrom:`sm`,children:(0,j.jsx)(l,{onPrevious:()=>{},onNext:()=>{},nextLabel:`Next`})})]})},P={tags:[`!test`],render:()=>(0,j.jsxs)(d,{fluid:!0,sidebar:A(3),footerText:`Logged in: dr.jones`,children:[(0,j.jsx)(D,{slide:_}),(0,j.jsx)(n,{hiddenFrom:`sm`,children:(0,j.jsx)(l,{onPrevious:()=>{},onNext:()=>{},nextLabel:`Next`})})]})},F={tags:[`!test`],render:()=>(0,j.jsxs)(d,{fluid:!0,sidebar:A(5),footerText:`Logged in: dr.jones`,children:[(0,j.jsx)(D,{slide:v}),(0,j.jsx)(n,{hiddenFrom:`sm`,children:(0,j.jsx)(l,{onPrevious:()=>{},onNext:()=>{},nextLabel:`Next`})})]})},I={tags:[`!test`],globals:{colorScheme:`dark`},render:()=>(0,j.jsxs)(d,{fluid:!0,sidebar:A(1),footerText:`Logged in: dr.jones`,children:[(0,j.jsx)(D,{slide:m}),(0,j.jsx)(n,{hiddenFrom:`sm`,children:(0,j.jsx)(l,{onPrevious:()=>{},onNext:()=>{},nextLabel:`Next`})})]})},L=[`WithVideoPlayer`,`SlideWithTextAndFigure`,`SlideWithCallout`,`DarkModeVideo`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <TeachingLayout fluid sidebar={learningNav(1)} footerText="Logged in: dr.jones">
      <PageHeader title="Recorded lecture" />
      <VideoPlayer youtubeId="2OTbDQh3MxM" />
      <Box hiddenFrom="sm">
        <PreviousNextButton onPrevious={() => {}} onNext={() => {}} nextLabel="Next" />
      </Box>
    </TeachingLayout>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <TeachingLayout fluid sidebar={learningNav(3)} footerText="Logged in: dr.jones">
      <SlideViewer slide={textWithFigureSlide} />
      <Box hiddenFrom="sm">
        <PreviousNextButton onPrevious={() => {}} onNext={() => {}} nextLabel="Next" />
      </Box>
    </TeachingLayout>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <TeachingLayout fluid sidebar={learningNav(5)} footerText="Logged in: dr.jones">
      <SlideViewer slide={calloutSlide} />
      <Box hiddenFrom="sm">
        <PreviousNextButton onPrevious={() => {}} onNext={() => {}} nextLabel="Next" />
      </Box>
    </TeachingLayout>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  globals: {
    colorScheme: "dark"
  },
  render: () => <TeachingLayout fluid sidebar={learningNav(1)} footerText="Logged in: dr.jones">
      <SlideViewer slide={videoSlide} />
      <Box hiddenFrom="sm">
        <PreviousNextButton onPrevious={() => {}} onNext={() => {}} nextLabel="Next" />
      </Box>
    </TeachingLayout>
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as DarkModeVideo,F as SlideWithCallout,P as SlideWithTextAndFigure,N as WithVideoPlayer,L as __namedExportsOrder,M as default};