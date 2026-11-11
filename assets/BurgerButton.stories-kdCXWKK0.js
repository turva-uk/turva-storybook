import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{a as i,t as a}from"./variants-US1Dcm7T.js";import{n as o,t as s}from"./BurgerButton-DcrlKRSj.js";import{n as c,t as l}from"./backdrops-B3vzMRuF.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{o(),i(),c(),n(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Button/Burger button`,component:s,parameters:{layout:`fullscreen`,backgrounds:{default:`primary`}},args:{navOpen:!1,onClick:d()},decorators:[e=>(0,u.jsx)(`div`,{style:{...l,padding:`1rem`,minHeight:`100vh`},children:(0,u.jsx)(e,{})})]},p={},m={render:()=>(0,u.jsxs)(r,{gap:`xl`,c:`white`,children:[(0,u.jsx)(a,{label:`default`,children:(0,u.jsx)(s,{navOpen:!1,onClick:d()})}),(0,u.jsx)(a,{label:`hover`,state:`hover`,children:(0,u.jsx)(s,{navOpen:!1,onClick:d()})}),(0,u.jsx)(a,{label:`active`,state:[`hover`,`active`],children:(0,u.jsx)(s,{navOpen:!1,onClick:d()})}),(0,u.jsx)(a,{label:`focus-visible`,state:`focus-visible`,children:(0,u.jsx)(s,{navOpen:!1,onClick:d()})})]})},h=[`Default`,`States`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source},description:{story:`Default closed state.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="xl" c="white">
      <StateRow label="default">
        <BurgerButton navOpen={false} onClick={fn()} />
      </StateRow>
      <StateRow label="hover" state="hover">
        <BurgerButton navOpen={false} onClick={fn()} />
      </StateRow>
      <StateRow label="active" state={["hover", "active"]}>
        <BurgerButton navOpen={false} onClick={fn()} />
      </StateRow>
      <StateRow label="focus-visible" state="focus-visible">
        <BurgerButton navOpen={false} onClick={fn()} />
      </StateRow>
    </Group>
}`,...m.parameters?.docs?.source},description:{story:`All interaction states side-by-side.`,...m.parameters?.docs?.description}}}})))()}g();export{p as Default,m as States,h as __namedExportsOrder,f as default};