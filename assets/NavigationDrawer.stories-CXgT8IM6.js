import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Text-DPHIKpQi.js";import{n as a,t as o}from"./Stack-D_d3SZwt.js";import{a as s,n as c}from"./variants-US1Dcm7T.js";import{n as l,t as u}from"./AddButton-1Vzsn66L.js";import{n as d,t as f}from"./SideNavContent-BTGSvyXa.js";import{n as p,t as m}from"./NavigationDrawer-CjKHzFdn.js";function h(){return(0,_.jsx)(f,{showIcons:!0})}var g,_,v,y,b,x;function S(){return(S=e((()=>{a(),r(),g=t(),s(),l(),d(),p(),_=n(),v={title:`Drawers/Navigation drawer`,component:m,parameters:{layout:`fullscreen`},decorators:[(e,t)=>{let n=t.args.topOffset??0;return(0,_.jsxs)(`div`,{style:{position:`relative`,height:`70dvh`,background:`repeating-linear-gradient(45deg, var(--mantine-color-body), var(--mantine-color-body) 10px, var(--mantine-color-primary-light) 10px, var(--mantine-color-primary-light) 20px)`},children:[n>0&&(0,_.jsx)(`div`,{style:{position:`absolute`,inset:`0 0 auto 0`,height:n,background:`var(--mantine-color-body)`,borderBottom:`1px solid var(--mantine-color-default-border)`,display:`flex`,alignItems:`center`,padding:`0 1rem`,zIndex:10},children:(0,_.jsxs)(i,{fw:600,children:[`Header (topOffset `,n,`px)`]})}),(0,_.jsx)(`div`,{style:{padding:24,paddingTop:n?n+16:24,color:`var(--mantine-color-text)`},children:(0,_.jsx)(e,{})})]})}],argTypes:{opened:{control:`boolean`},width:{control:`text`},topOffset:{control:`number`}},args:{opened:!1,width:`16.25rem`,topOffset:0}},y={render:e=>{let[t,n]=(0,g.useState)(!!e.opened);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(o,{gap:`md`,mb:`sm`,children:[(0,_.jsx)(c,{children:`Press the button to toggle the drawer.`}),(0,_.jsx)(`div`,{style:{maxWidth:80},children:(0,_.jsx)(u,{label:`Press`,onClick:()=>n(e=>!e)})})]}),(0,_.jsx)(m,{...e,opened:t,onClose:()=>n(!1),children:(0,_.jsx)(h,{})})]})}},b={...y,globals:{colorScheme:`dark`}},x=[`Interactive`,`DarkMode`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(!!args.opened);
    return <>
        <Stack gap="md" mb="sm">
          <StoryNote>Press the button to toggle the drawer.</StoryNote>
          <div style={{
          maxWidth: 80
        }}>
            <AddButton label="Press" onClick={() => setOpen(v => !v)} />
          </div>
        </Stack>

        <NavigationDrawer {...args} opened={open} onClose={() => setOpen(false)}>
          <DrawerContent />
        </NavigationDrawer>
      </>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Interactive,
  globals: {
    colorScheme: "dark"
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as DarkMode,y as Interactive,x as __namedExportsOrder,v as default};