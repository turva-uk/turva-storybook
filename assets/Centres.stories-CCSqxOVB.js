import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{C as t,S as n}from"./Form-BQWpUpVW.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Group-DSt3d3i4.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";import{n as c,t as l}from"./AddButton-1Vzsn66L.js";import{n as u,t as d}from"./TeachingLayout-hJ9K48SW.js";import{n as f,t as p}from"./DataTable-CrqFwTVv.js";import{n as m,t as h}from"./TeachingMainNav-DBpNgUD7.js";function g(){return(0,_.jsx)(d,{sidebar:(0,_.jsx)(h,{}),footerText:`Logged in: prof.morton`,children:(0,_.jsxs)(s,{gap:`lg`,children:[(0,_.jsx)(n,{title:`Centres`}),(0,_.jsx)(a,{justify:`flex-end`,children:(0,_.jsx)(l,{label:`Add centre`})}),(0,_.jsx)(p,{data:v,columns:y,getRowKey:e=>e.id,emptyMessage:`No centres have been added yet`})]})})}var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{i(),o(),u(),m(),t(),f(),c(),_=r(),v=[{id:1,name:`Leeds General Infirmary Endoscopy Unit`,clinicalLead:`Prof James Morton`,clinicalLeadEmail:`j.morton@nhs.net`,delegateCount:24},{id:2,name:`St James's University Hospital Endoscopy Suite`,clinicalLead:`Dr Rachel Singh`,clinicalLeadEmail:`r.singh@nhs.net`,delegateCount:18},{id:3,name:`Bradford Royal Infirmary Endoscopy Centre`,clinicalLead:`Dr Fiona Clarke`,clinicalLeadEmail:`f.clarke@nhs.net`,delegateCount:12},{id:4,name:`Airedale General Hospital Endoscopy Unit`,clinicalLead:`Dr Tom Henderson`,clinicalLeadEmail:`t.henderson@nhs.net`,delegateCount:6},{id:5,name:`Harrogate District Hospital Endoscopy Suite`,clinicalLead:`Dr Anika Patel`,clinicalLeadEmail:`a.patel@nhs.net`,delegateCount:9}],y=[{header:`Centre`,render:e=>e.name},{header:`Clinical lead`,render:e=>e.clinicalLead},{header:`Clinical lead email`,render:e=>e.clinicalLeadEmail},{header:`Number of delegates`,render:e=>e.delegateCount}],b={title:`Teaching/Layouts/Centres`,tags:[`!dev`],parameters:{layout:`fullscreen`}},x={tags:[`!test`],render:()=>(0,_.jsx)(g,{})},S={tags:[`!test`],render:()=>(0,_.jsx)(d,{sidebar:(0,_.jsx)(h,{}),footerText:`Logged in: prof.morton`,children:(0,_.jsxs)(s,{gap:`lg`,children:[(0,_.jsx)(n,{title:`Centres`}),(0,_.jsx)(a,{justify:`flex-end`,children:(0,_.jsx)(l,{label:`Add centre`})}),(0,_.jsx)(p,{data:[],columns:y,getRowKey:e=>e.id,emptyMessage:`No centres have been added yet`})]})})},C={...x,globals:{colorScheme:`dark`}},w=[`Default`,`Empty`,`DarkMode`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <CentresPage />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <TeachingLayout sidebar={<TeachingMainNav />} footerText="Logged in: prof.morton">
      <Stack gap="lg">
        <PageHeader title="Centres" />

        <Group justify="flex-end">
          <AddButton label="Add centre" />
        </Group>

        <DataTable data={[]} columns={columns} getRowKey={(c: Centre) => c.id} emptyMessage="No centres have been added yet" />
      </Stack>
    </TeachingLayout>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as DarkMode,x as Default,S as Empty,w as __namedExportsOrder,b as default};