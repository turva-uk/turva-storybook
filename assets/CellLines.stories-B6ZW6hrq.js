import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{a as i,n as a}from"./variants-US1Dcm7T.js";import{i as o,r as s}from"./CellContent-Gf5rpY3_.js";import{n as c,t as l}from"./DataTable-CrqFwTVv.js";function u(){return(0,d.jsxs)(r,{gap:`sm`,children:[(0,d.jsx)(l,{data:h,columns:g,getRowKey:e=>e.id}),(0,d.jsx)(a,{children:`One, two and three sites, then none. Each clinical lead is on the line of its site; a site with no lead shows a dash.`})]})}var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),c(),o(),i(),d=t(),f={title:`Tables/Cell lines`,component:s,parameters:{layout:`padded`}},p={name:`Northfield General Hospital`,clinical_lead:`Dr Thomas Kowalski`},m={name:`Riverside Community Hospital`,clinical_lead:`Dr Priya Hughes`},h=[{id:1,name:`Aisha Rahman`,sites:[p]},{id:2,name:`Ben Carter`,sites:[p,m]},{id:3,name:`Chloe Evans`,sites:[p,m,{name:`St Anne's Day Unit`,clinical_lead:null}]},{id:4,name:`Daniel Osborne`,sites:[]}],g=[{header:`Name`,render:e=>e.name},{header:`Site`,render:e=>(0,d.jsx)(s,{lines:e.sites.map(e=>e.name)})},{header:`Clinical lead`,render:e=>(0,d.jsx)(s,{lines:e.sites.map(e=>e.clinical_lead??`-`)})}],_={render:()=>(0,d.jsx)(u,{})},v={render:()=>(0,d.jsxs)(r,{gap:`md`,children:[(0,d.jsx)(s,{lines:[`Northfield General Hospital`]}),(0,d.jsx)(a,{children:`One line`}),(0,d.jsx)(s,{lines:[`Northfield General Hospital`,`Riverside Community Hospital`,`St Anne's Day Unit`]}),(0,d.jsx)(a,{children:`Three lines`}),(0,d.jsx)(s,{lines:[]}),(0,d.jsx)(a,{children:`None, shown as a dash`})]})},y={render:()=>(0,d.jsx)(u,{}),globals:{colorScheme:`dark`}},b=[`SitesAndLeads`,`OnItsOwn`,`DarkMode`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <DelegatesTable />
}`,..._.parameters?.docs?.source},description:{story:`Delegates at one, two and three sites, and at none.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="md">
      <CellLines lines={["Northfield General Hospital"]} />
      <StoryNote>One line</StoryNote>
      <CellLines lines={["Northfield General Hospital", "Riverside Community Hospital", "St Anne's Day Unit"]} />
      <StoryNote>Three lines</StoryNote>
      <CellLines lines={[]} />
      <StoryNote>None, shown as a dash</StoryNote>
    </Stack>
}`,...v.parameters?.docs?.source},description:{story:`The component on its own: one line, three lines, and none.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DelegatesTable />,
  globals: {
    colorScheme: "dark"
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as DarkMode,v as OnItsOwn,_ as SitesAndLeads,b as __namedExportsOrder,f as default};