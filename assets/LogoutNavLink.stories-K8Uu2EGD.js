import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Stack-D_d3SZwt.js";import{n as i,t as a}from"./LogoutNavLink-BoBV_pgM.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o=t(),{expect:s,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Navigation/Logout nav link`,component:a,parameters:{layout:`padded`},args:{onLogout:()=>Promise.resolve(),onNavigate:void 0},decorators:[e=>(0,o.jsx)(r,{gap:0,maw:`16rem`,children:(0,o.jsx)(e,{})})]},d={},f={args:{showIcons:!1}},p={args:{onLogout:()=>Promise.reject(Error(`offline`))},play:async({canvasElement:e})=>{let t=l(e);await c.click(t.getByText(`Logout`)),await s(await t.findAllByText(/could not sign you out/i)).not.toHaveLength(0)}},m=[`Default`,`WithoutIcon`,`Failed`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source},description:{story:`With the icon, as both sidebars show it`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    showIcons: false
  }
}`,...f.parameters?.docs?.source},description:{story:`Without the icon`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onLogout: () => Promise.reject(new Error("offline"))
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Logout"));
    await expect(await canvas.findAllByText(/could not sign you out/i)).not.toHaveLength(0);
  }
}`,...p.parameters?.docs?.source},description:{story:`Signing out could not be done, and the link says so`,...p.parameters?.docs?.description}}}})))()}h();export{d as Default,p as Failed,f as WithoutIcon,m as __namedExportsOrder,u as default};