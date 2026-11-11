import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./SimpleGrid-Cw3N2DUw.js";import{S as r,x as i}from"./Form-BQWpUpVW.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";import{Cn as c,Ct as l,T as u,l as d,n as f}from"./appIcons-BpiHpu4d.js";import{t as p}from"./BodyText-Vl4rxmG1.js";import{t as m}from"./ActionCard-DZ7xcBoc.js";import{t as h}from"./page-header-DDmZahL6.js";import{n as g,t as _}from"./MainLayout-fD7qd5_7.js";import{t as v}from"./action-card-BJZdQL-2.js";import{f as y,r as b}from"./safetyFile-BP682nbe.js";import{n as x,t as S}from"./DocumentTable-DQlLW3sl.js";import{n as C,t as w}from"./HazardDetail-BxYNaPCK.js";import{n as T,t as E}from"./HazardTable-BCAd-yxh.js";import{n as D,t as O}from"./OfficerList-BtRi7XDx.js";import{n as k,t as A}from"./SafetyStatusBadge-BwOmkKXb.js";import{n as j,t as M}from"./SafetyDocumentSheet-DEknQ0ZH.js";function N({title:e,action:t,children:n}){return(0,P.jsxs)(s,{gap:`lg`,children:[(0,P.jsx)(r,{title:e,action:t,actionAlign:`center`}),(0,P.jsx)(p,{c:`dimmed`,children:I.name}),n]})}var P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{t(),o(),v(),f(),g(),h(),i(),y(),x(),C(),T(),D(),j(),k(),P=a(),{fn:F}=__STORYBOOK_MODULE_TEST__,I=b,L=`/safety/${I.id}`,R={title:`Safety/Page layout`,component:_,parameters:{layout:`fullscreen`,mockUser:{enabled_features:[`safety`],competencies:[`view_safety_cases`,`write_safety_cases`]}},args:{patient:null,isLoading:!1}},z=[{icon:(0,P.jsx)(l,{}),title:`Documentation`,subtitle:`${I.documents.length} documents in the file.`,label:`Open documentation`},{icon:(0,P.jsx)(c,{}),title:`Hazards`,subtitle:`${I.hazards.length} hazards, ${I.blockers.length} blocking go-live.`,label:`Open hazard log`},{icon:(0,P.jsx)(d,{}),title:`Officers`,subtitle:`Clinical Safety Officer: Dr Anita Patel.`,label:`Open officers`},{icon:(0,P.jsx)(u,{}),title:`Sign-off`,subtitle:`Not yet approved.`,label:`Open sign-off`}],B={parameters:{routerPath:L},render:e=>(0,P.jsx)(_,{...e,children:(0,P.jsxs)(s,{gap:`lg`,children:[(0,P.jsx)(r,{title:I.name,action:(0,P.jsx)(A,{status:I.status}),actionAlign:`center`}),(0,P.jsxs)(p,{c:`dimmed`,children:[I.org_unit_name,`, assessed against `,I.standard,`.`]}),(0,P.jsx)(n,{cols:{base:1,md:2},children:z.map(e=>(0,P.jsx)(m,{icon:e.icon,title:e.title,subtitle:e.subtitle,buttonLabel:e.label,onClick:F()},e.title))})]})})},V={parameters:{routerPath:`${L}/hazards`},render:e=>(0,P.jsx)(_,{...e,children:(0,P.jsx)(N,{title:`Hazards`,children:(0,P.jsx)(E,{hazards:I.hazards,onSelect:F()})})})},H={name:`Hazard detail`,parameters:{routerPath:`${L}/hazards/HAZ-002`},render:e=>(0,P.jsx)(_,{...e,children:(0,P.jsx)(N,{title:`HAZ-002`,children:(0,P.jsx)(w,{hazard:I.hazards[1],mitigations:I.mitigations})})})},U={parameters:{routerPath:`${L}/documentation`},render:e=>(0,P.jsx)(_,{...e,children:(0,P.jsx)(N,{title:`Documentation`,children:(0,P.jsx)(S,{documents:I.documents,onSelect:F()})})})},W={parameters:{routerPath:`${L}/documentation/clinical-safety-case-report`},render:e=>(0,P.jsx)(_,{...e,children:(0,P.jsx)(N,{title:`Clinical Safety Case Report`,children:(0,P.jsx)(M,{system:I.name,status:I.status,commit:I.head_commit,text:`# Clinical Safety Case Report

## 1. System

BP@Home.`})})})},G={parameters:{routerPath:`${L}/officers`},render:e=>(0,P.jsx)(_,{...e,children:(0,P.jsx)(N,{title:`Officers`,children:(0,P.jsx)(O,{posts:I.posts})})})},K={...B,globals:{colorScheme:`dark`}},q=[`FileOverview`,`HazardLog`,`HazardDetails`,`Documentation`,`Document`,`Officers`,`DarkMode`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    routerPath: fileHref
  },
  render: args => <MainLayout {...args}>
      <Stack gap="lg">
        <PageHeader title={file.name} action={<SafetyStatusBadge status={file.status} />} actionAlign="center" />
        <BodyText c="dimmed">
          {file.org_unit_name}, assessed against {file.standard}.
        </BodyText>
        <SimpleGrid cols={{
        base: 1,
        md: 2
      }}>
          {fileSections.map(section => <ActionCard key={section.title} icon={section.icon} title={section.title} subtitle={section.subtitle} buttonLabel={section.label} onClick={fn()} />)}
        </SimpleGrid>
      </Stack>
    </MainLayout>
}`,...B.parameters?.docs?.source},description:{story:`The file page: its name and status, then a card for each part.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    routerPath: \`\${fileHref}/hazards\`
  },
  render: args => <MainLayout {...args}>
      <SafetyPage title="Hazards">
        <HazardTable hazards={file.hazards} onSelect={fn()} />
      </SafetyPage>
    </MainLayout>
}`,...V.parameters?.docs?.source},description:{story:`The hazard log, each hazard with its derived levels.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Hazard detail",
  parameters: {
    routerPath: \`\${fileHref}/hazards/HAZ-002\`
  },
  render: args => <MainLayout {...args}>
      <SafetyPage title="HAZ-002">
        <HazardDetail hazard={file.hazards[1]} mitigations={file.mitigations} />
      </SafetyPage>
    </MainLayout>
}`,...H.parameters?.docs?.source},description:{story:`A hazard whose residual level blocks go-live.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    routerPath: \`\${fileHref}/documentation\`
  },
  render: args => <MainLayout {...args}>
      <SafetyPage title="Documentation">
        <DocumentTable documents={file.documents} onSelect={fn()} />
      </SafetyPage>
    </MainLayout>
}`,...U.parameters?.docs?.source},description:{story:`The documents the file holds.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    routerPath: \`\${fileHref}/documentation/clinical-safety-case-report\`
  },
  render: args => <MainLayout {...args}>
      <SafetyPage title="Clinical Safety Case Report">
        <SafetyDocumentSheet system={file.name} status={file.status} commit={file.head_commit} text={"# Clinical Safety Case Report\\n\\n## 1. System\\n\\nBP@Home."} />
      </SafetyPage>
    </MainLayout>
}`,...W.parameters?.docs?.source},description:{story:`One document, as its page shows it.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    routerPath: \`\${fileHref}/officers\`
  },
  render: args => <MainLayout {...args}>
      <SafetyPage title="Officers">
        <OfficerList posts={file.posts} />
      </SafetyPage>
    </MainLayout>
}`,...G.parameters?.docs?.source},description:{story:`The two posts at the file's organisation.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...FileOverview,
  globals: {
    colorScheme: "dark"
  }
}`,...K.parameters?.docs?.source},description:{story:`The file page in dark mode.`,...K.parameters?.docs?.description}}}})))()}J();export{K as DarkMode,W as Document,U as Documentation,B as FileOverview,H as HazardDetails,V as HazardLog,G as Officers,q as __namedExportsOrder,R as default};