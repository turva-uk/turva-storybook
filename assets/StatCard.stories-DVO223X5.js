import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./StatCard-DwwpHa8s.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),a={title:`Stat cards/Stat card`,component:r,parameters:{layout:`centered`}},o={args:{title:`Total Users`,value:42}},s={args:{title:`Total Patients`,value:1284}},c={args:{title:`Total Records`,value:0,loading:!0}},l={args:{title:`Total Records`,value:42},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,minWidth:`25rem`},children:[(0,i.jsx)(r,{title:`Total users`,value:42}),(0,i.jsx)(r,{title:`Total patients`,value:128})]})},u={args:{title:`Total Records`,value:42},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,minWidth:`25rem`},children:[(0,i.jsx)(r,{title:`Total users`,value:42,loading:!0}),(0,i.jsx)(r,{title:`Total patients`,value:128})]})},d={...o,globals:{colorScheme:`dark`}},f=[`Default`,`LargeNumber`,`Loading`,`MultipleCards`,`MixedLoading`,`DarkMode`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Users",
    value: 42
  }
}`,...o.parameters?.docs?.source},description:{story:`Default stat card showing total users`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Patients",
    value: 1284
  }
}`,...s.parameters?.docs?.source},description:{story:`Stat card with a large number`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Records",
    value: 0,
    loading: true
  }
}`,...c.parameters?.docs?.source},description:{story:`Stat card in loading state`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Records",
    value: 42
  },
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    minWidth: "25rem"
  }}>
      <StatCard title="Total users" value={42} />
      <StatCard title="Total patients" value={128} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:`Multiple stat cards in a group layout`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Records",
    value: 42
  },
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    minWidth: "25rem"
  }}>
      <StatCard title="Total users" value={42} loading />
      <StatCard title="Total patients" value={128} />
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Mixed loading states`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as DarkMode,o as Default,s as LargeNumber,c as Loading,u as MixedLoading,l as MultipleCards,f as __namedExportsOrder,a as default};