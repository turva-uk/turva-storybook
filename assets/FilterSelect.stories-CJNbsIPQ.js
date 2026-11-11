import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Group-DSt3d3i4.js";import{n as a,t as o}from"./FilterSelect-h9QRSt8A.js";function s({preselected:e=[]}){let[t,n]=(0,c.useState)(e);return(0,l.jsx)(i,{justify:`flex-end`,children:(0,l.jsx)(o,{data:d,value:t,onChange:n,label:`Filter delegates`,placeholder:`Select filters…`,"aria-label":`Filter delegates`})})}var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{c=t(),r(),a(),l=n(),u={title:`Tables/Filter select`,component:o,parameters:{layout:`padded`}},d=[{group:`Trust`,items:[{value:`trust:leeds`,label:`Leeds Teaching Hospitals`},{value:`trust:bradford`,label:`Bradford Teaching Hospitals`},{value:`trust:airedale`,label:`Airedale NHS Foundation Trust`}]},{group:`Clinical lead`,items:[{value:`lead:morton`,label:`Prof James Morton`},{value:`lead:singh`,label:`Dr Rachel Singh`}]},{group:`Other`,items:[{value:`first-pass-only`,label:`1st time passers only`}]}],f={render:()=>(0,l.jsx)(s,{})},p={render:()=>(0,l.jsx)(s,{preselected:[`trust:leeds`,`lead:morton`]})},m={render:()=>(0,l.jsx)(i,{gap:`lg`,children:[0,1,2,3,4,5,6,7,8,9,10].map(e=>(0,l.jsx)(o,{data:d,value:Array.from({length:e},(e,t)=>`item-${t}`),onChange:()=>{},"aria-label":`Filter (${e})`},e))})},h={render:()=>(0,l.jsxs)(i,{gap:`lg`,children:[(0,l.jsx)(s,{}),(0,l.jsx)(s,{preselected:[`trust:leeds`,`lead:morton`]})]}),globals:{colorScheme:`dark`}},g=[`Default`,`WithActiveFilters`,`CountIndicator`,`DarkMode`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveFilterSelect />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveFilterSelect preselected={["trust:leeds", "lead:morton"]} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const counts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return <Group gap="lg">
        {counts.map(n => <FilterSelect key={n} data={trustData} value={Array.from({
        length: n
      }, (_, i) => \`item-\${i}\`)} onChange={() => {}} aria-label={\`Filter (\${n})\`} />)}
      </Group>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Shows the count indicator at each value from 0 through 9+`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="lg">
      <InteractiveFilterSelect />
      <InteractiveFilterSelect preselected={["trust:leeds", "lead:morton"]} />
    </Group>,
  globals: {
    colorScheme: "dark"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as CountIndicator,h as DarkMode,f as Default,p as WithActiveFilters,g as __namedExportsOrder,u as default};