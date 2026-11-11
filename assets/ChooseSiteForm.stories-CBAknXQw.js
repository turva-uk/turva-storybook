import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./ChooseSiteForm-BMrMX9wz.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),{userEvent:r,within:i}=__STORYBOOK_MODULE_TEST__,a=[{value:`1`,label:`Northfield General Hospital`},{value:`2`,label:`Riverside Community Hospital`}],o={title:`Registration/Choose site form`,component:n,parameters:{layout:`padded`},args:{sites:a,onSubmit:()=>new Promise(()=>{}),onBack:()=>{}}},s={},c={args:{sites:[...a,{value:`3`,label:`St Anne's Day Unit`}]}},l={play:async({canvasElement:e})=>{let t=i(e);await r.click(t.getByRole(`radio`,{name:`Riverside Community Hospital`}))}},u={...s,globals:{colorScheme:`dark`}},d=[`TwoSites`,`ThreeSites`,`SiteChosen`,`DarkMode`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`A clinical lead at two sites, as the join guide shows it.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sites: [...twoSites, {
      value: "3",
      label: "St Anne's Day Unit"
    }]
  }
}`,...c.parameters?.docs?.source},description:{story:`A clinical lead at three sites.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("radio", {
      name: "Riverside Community Hospital"
    }));
  }
}`,...l.parameters?.docs?.source},description:{story:`A site chosen, so Continue is ready to press.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...TwoSites,
  globals: {
    colorScheme: "dark"
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as DarkMode,l as SiteChosen,c as ThreeSites,s as TwoSites,d as __namedExportsOrder,o as default};