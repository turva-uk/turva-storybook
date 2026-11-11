import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./SimpleGrid-Cw3N2DUw.js";import{C as r,S as i}from"./Form-BQWpUpVW.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{hn as o,n as s,rn as c}from"./appIcons-BpiHpu4d.js";import{n as l,t as u}from"./ActionCard-DZ7xcBoc.js";import{n as d,t as f}from"./TeachingLayout-hJ9K48SW.js";import{n as p,t as m}from"./TeachingMainNav-DBpNgUD7.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{t(),d(),p(),r(),l(),s(),h=a(),g={title:`Teaching/Layouts/Module landing`,tags:[`!dev`],parameters:{layout:`fullscreen`}},_={tags:[`!test`],render:()=>(0,h.jsxs)(f,{sidebar:(0,h.jsx)(m,{}),footerText:`Logged in: dr.jones`,children:[(0,h.jsx)(i,{title:`Colorectal polyps`}),(0,h.jsxs)(n,{cols:{base:1,sm:2},spacing:`lg`,children:[(0,h.jsx)(u,{icon:(0,h.jsx)(o,{}),title:`Learning materials`,subtitle:`Work through the learning slides covering polyp morphology, the Paris classification, and clinical implications.`,buttonLabel:`Start learning`,buttonUrl:`/teaching/learn`}),(0,h.jsx)(u,{icon:(0,h.jsx)(c,{}),title:`Start assessment`,subtitle:`Test your knowledge with a timed multiple-choice assessment.`,buttonLabel:`Start assessment`,buttonUrl:`/teaching/assessment/new`})]})]})},v={tags:[`!test`],render:()=>(0,h.jsxs)(f,{sidebar:(0,h.jsx)(m,{}),footerText:`Logged in: dr.jones`,children:[(0,h.jsx)(i,{title:`Chest X-ray interpretation`}),(0,h.jsx)(u,{icon:(0,h.jsx)(c,{}),title:`Start assessment`,subtitle:`Test your knowledge with a timed multiple-choice assessment.`,buttonLabel:`Start assessment`,buttonUrl:`/teaching/assessment/new`})]})},y={..._,globals:{colorScheme:`dark`}},b=[`WithLearning`,`AssessmentOnly`,`DarkMode`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <TeachingLayout sidebar={<TeachingMainNav />} footerText="Logged in: dr.jones">
      <PageHeader title="Colorectal polyps" />
      <SimpleGrid cols={{
      base: 1,
      sm: 2
    }} spacing="lg">
        <ActionCard icon={<IconBook />} title="Learning materials" subtitle="Work through the learning slides covering polyp morphology, the Paris classification, and clinical implications." buttonLabel="Start learning" buttonUrl="/teaching/learn" />
        <ActionCard icon={<IconChalkboardTeacher />} title="Start assessment" subtitle="Test your knowledge with a timed multiple-choice assessment." buttonLabel="Start assessment" buttonUrl="/teaching/assessment/new" />
      </SimpleGrid>
    </TeachingLayout>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <TeachingLayout sidebar={<TeachingMainNav />} footerText="Logged in: dr.jones">
      <PageHeader title="Chest X-ray interpretation" />
      <ActionCard icon={<IconChalkboardTeacher />} title="Start assessment" subtitle="Test your knowledge with a timed multiple-choice assessment." buttonLabel="Start assessment" buttonUrl="/teaching/assessment/new" />
    </TeachingLayout>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...WithLearning,
  globals: {
    colorScheme: "dark"
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as AssessmentOnly,y as DarkMode,_ as WithLearning,b as __namedExportsOrder,g as default};