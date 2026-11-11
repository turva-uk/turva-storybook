import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,t as r}from"./Box-BssAA6js.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./Container-DJA6w9O_.js";import{n as s,t as c}from"./publicAsset-HJc8QrwY.js";import{n as l,t as u}from"./TopRibbon-CgzIu8pt.js";import{n as d,t as f}from"./QuestionView-0Xgvmg2x.js";var p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),a(),p=t(),d(),l(),c(),m=i(),h={answer_id:1,display_order:1,question_type:`single`,images:[{key:`image_1`,label:`White light (WLI)`,url:s(`/storybook/white-light-polyp.png`)},{key:`image_2`,label:`Narrow band imaging (NBI)`,url:s(`/storybook/nbi-polyp.png`)}],options:[{id:`high_confidence_adenoma`,label:`High confidence adenoma`},{id:`low_confidence_adenoma`,label:`Low confidence adenoma`},{id:`high_confidence_serrated`,label:`High confidence serrated polyp`},{id:`low_confidence_serrated`,label:`Low confidence serrated polyp`}]},g={answer_id:2,display_order:5,question_type:`single`,images:[{key:`lesion`,url:s(`/storybook/chest-xray-pneumothorax.png`)}],text:`A 65-year-old patient presents with a 3mm sessile polyp in the sigmoid colon.`,options:[{id:`a`,label:`Hyperplastic polyp`},{id:`b`,label:`Tubular adenoma`},{id:`c`,label:`Sessile serrated lesion`},{id:`d`,label:`Inflammatory polyp`}]},_={title:`Teaching/Question view`,tags:[`!dev`],component:f,parameters:{docs:{description:{component:`Displays a teaching assessment question with images, options, and progress bar. Supports uniform (shared options) and variable (per-item options) question types.`}},layout:`fullscreen`},decorators:[e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{style:{borderBottom:`1px solid var(--card-border, var(--mantine-color-gray-2))`},children:(0,m.jsx)(u,{examMode:!0,patient:null,isLoading:!1,onBurgerClick:()=>{}})}),(0,m.jsx)(o,{size:`lg`,py:`xl`,children:(0,m.jsx)(e,{})})]})]},v={render:e=>{let[t,n]=(0,p.useState)(null);return(0,m.jsx)(f,{...e,selectedOption:t,onSelectOption:n})},args:{item:h,selectedOption:null,onSelectOption:()=>{},currentQuestion:1,totalQuestions:20,onNext:()=>{},isLastQuestion:!1}},y={render:e=>{let[t,n]=(0,p.useState)(`high_confidence_adenoma`);return(0,m.jsx)(f,{...e,selectedOption:t,onSelectOption:n})},args:{item:{...h,display_order:3},selectedOption:`high_confidence_adenoma`,onSelectOption:()=>{},currentQuestion:3,totalQuestions:20,onPrevious:()=>{},onNext:()=>{},isLastQuestion:!1}},b={render:e=>{let[t,n]=(0,p.useState)(null);return(0,m.jsx)(f,{...e,selectedOption:t,onSelectOption:n})},args:{item:{...g,display_order:5},selectedOption:null,onSelectOption:()=>{},currentQuestion:5,totalQuestions:20,onPrevious:()=>{},onNext:()=>{},isLastQuestion:!1}},x={render:e=>{let[t,n]=(0,p.useState)(`low_confidence_adenoma`);return(0,m.jsx)(f,{...e,selectedOption:t,onSelectOption:n})},args:{item:{...h,display_order:20},selectedOption:`low_confidence_adenoma`,onSelectOption:()=>{},currentQuestion:20,totalQuestions:20,onPrevious:()=>{},onSubmit:()=>{},isLastQuestion:!0}},S={args:{item:{...h,display_order:20},selectedOption:`low_confidence_adenoma`,onSelectOption:()=>{},disabled:!0,currentQuestion:20,totalQuestions:20,onPrevious:()=>{},onSubmit:()=>{},isLastQuestion:!0}},C={...v,globals:{colorScheme:`dark`}},w=[`UniformType`,`UniformWithSelection`,`VariableType`,`LastQuestion`,`Review`,`DarkMode`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string | null>(null);
    return <QuestionView {...args} selectedOption={selected} onSelectOption={setSelected} />;
  },
  args: {
    item: uniformItem,
    selectedOption: null,
    onSelectOption: () => {},
    currentQuestion: 1,
    totalQuestions: 20,
    onNext: () => {},
    isLastQuestion: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string | null>("high_confidence_adenoma");
    return <QuestionView {...args} selectedOption={selected} onSelectOption={setSelected} />;
  },
  args: {
    item: {
      ...uniformItem,
      display_order: 3
    },
    selectedOption: "high_confidence_adenoma",
    onSelectOption: () => {},
    currentQuestion: 3,
    totalQuestions: 20,
    onPrevious: () => {},
    onNext: () => {},
    isLastQuestion: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string | null>(null);
    return <QuestionView {...args} selectedOption={selected} onSelectOption={setSelected} />;
  },
  args: {
    item: {
      ...variableItem,
      display_order: 5
    },
    selectedOption: null,
    onSelectOption: () => {},
    currentQuestion: 5,
    totalQuestions: 20,
    onPrevious: () => {},
    onNext: () => {},
    isLastQuestion: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string | null>("low_confidence_adenoma");
    return <QuestionView {...args} selectedOption={selected} onSelectOption={setSelected} />;
  },
  args: {
    item: {
      ...uniformItem,
      display_order: 20
    },
    selectedOption: "low_confidence_adenoma",
    onSelectOption: () => {},
    currentQuestion: 20,
    totalQuestions: 20,
    onPrevious: () => {},
    onSubmit: () => {},
    isLastQuestion: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    item: {
      ...uniformItem,
      display_order: 20
    },
    selectedOption: "low_confidence_adenoma",
    onSelectOption: () => {},
    disabled: true,
    currentQuestion: 20,
    totalQuestions: 20,
    onPrevious: () => {},
    onSubmit: () => {},
    isLastQuestion: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...UniformType,
  globals: {
    colorScheme: "dark"
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as DarkMode,x as LastQuestion,S as Review,v as UniformType,y as UniformWithSelection,b as VariableType,w as __namedExportsOrder,_ as default};