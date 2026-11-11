import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Group-DSt3d3i4.js";import{n as a,t as o}from"./publicAsset-HJc8QrwY.js";import{n as s,t as c}from"./TeachingLayout-hJ9K48SW.js";import{n as l,t as u}from"./AssessmentTimer-z9Iwt7Pz.js";import{n as d,t as f}from"./ExamCloseButton-ChvdSPA1.js";import{n as p,t as m}from"./AssessmentIntro-B3cnkkq7.js";import{n as h,t as g}from"./QuestionView-0Xgvmg2x.js";import{n as _,t as v}from"./AssessmentResult--k5POzP8.js";function y(e){return(0,x.jsxs)(i,{gap:`sm`,wrap:`nowrap`,children:[e!==null&&e>0&&(0,x.jsx)(u,{secondsLeft:e*60,onExpire:()=>{}}),(0,x.jsx)(f,{onConfirm:()=>{}})]})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{b=t(),r(),s(),p(),h(),_(),l(),d(),o(),x=n(),S={title:`Teaching/Layouts/Running the assessment`,tags:[`!dev`],parameters:{layout:`fullscreen`}},C=`You will be shown 120 polyp images, each displayed as a pair:
white light (WLI) and narrow band imaging (NBI).

For each image pair, select the single best answer from the four options.

**Time limit**: 75 minutes. The timer starts when you click "Begin".

**Marking criteria**:
- ≥70% of your answers must be **high confidence**
- ≥85% of your high-confidence answers must be **correct**

You must meet **both** criteria to pass.`,w={answer_id:1,display_order:1,question_type:`single`,images:[{key:`image_1`,label:`White light (WLI)`,url:a(`/storybook/white-light-polyp.png`)},{key:`image_2`,label:`Narrow band imaging (NBI)`,url:a(`/storybook/nbi-polyp.png`)}],options:[{id:`high_confidence_adenoma`,label:`High confidence adenoma`},{id:`low_confidence_adenoma`,label:`Low confidence adenoma`},{id:`high_confidence_serrated`,label:`High confidence serrated polyp`},{id:`low_confidence_serrated`,label:`Low confidence serrated polyp`}]},T=[{name:`High confidence rate`,value:.78,threshold:.7,passed:!0},{name:`Accuracy of high-confidence answers`,value:.91,threshold:.85,passed:!0}],E=[{name:`High confidence rate`,value:.65,threshold:.7,passed:!1},{name:`Accuracy of high-confidence answers`,value:.91,threshold:.85,passed:!0}],D={answer_id:1,display_order:1,question_type:`single`,text:`A 28-year-old man presents to A&E with sudden onset right-sided pleuritic chest pain and breathlessness. He is tall and thin. Observations: RR 24, SpO₂ 94% on air, HR 110, BP 120/78. His PA chest X-ray is shown.`,images:[{key:`image_1`,label:`PA chest X-ray`,url:a(`/storybook/chest-xray-pneumothorax.png`)}],options:[{id:`pneumothorax`,label:`Right-sided pneumothorax`},{id:`pleural_effusion`,label:`Right-sided pleural effusion`},{id:`pneumonia`,label:`Right lower lobe pneumonia`},{id:`normal`,label:`Normal chest X-ray`}]},O={tags:[`!test`],render:()=>(0,x.jsx)(c,{fluid:!0,footerText:`Logged in: dr.jones`,children:(0,x.jsx)(m,{title:`Before you begin`,body:C,onBegin:()=>{}})})},k={tags:[`!test`],render:()=>{let[e,t]=(0,b.useState)(null);return(0,x.jsx)(c,{fluid:!0,footerText:`Logged in: dr.jones`,ribbonRight:y(75),children:(0,x.jsx)(g,{item:w,selectedOption:e,onSelectOption:t,currentQuestion:3,totalQuestions:120,onPrevious:()=>{},onNext:()=>{},isLastQuestion:!1})})}},A={tags:[`!test`],render:()=>{let[e,t]=(0,b.useState)(null);return(0,x.jsx)(c,{fluid:!0,footerText:`Logged in: dr.jones`,ribbonRight:y(10),children:(0,x.jsx)(g,{item:D,selectedOption:e,onSelectOption:t,currentQuestion:1,totalQuestions:4,onNext:()=>{},isLastQuestion:!1})})}},j={tags:[`!test`],render:()=>{let[e,t]=(0,b.useState)(null);return(0,x.jsx)(c,{fluid:!0,footerText:`Logged in: dr.jones`,ribbonRight:y(0),children:(0,x.jsx)(g,{item:D,selectedOption:e,onSelectOption:t,currentQuestion:1,totalQuestions:4,onNext:()=>{},isLastQuestion:!1})})}},M={tags:[`!test`],render:()=>(0,x.jsx)(c,{footerText:`Logged in: dr.jones`,children:(0,x.jsx)(v,{isPassed:!0,bankTitle:`Optical diagnosis of diminutive colorectal polyps`,criteria:T,assessmentId:42,showCertificate:!0,showBackToDashboard:!0,onBackToDashboard:()=>{}})})},N={tags:[`!test`],render:()=>(0,x.jsx)(c,{footerText:`Logged in: dr.jones`,children:(0,x.jsx)(v,{isPassed:!1,bankTitle:`Optical diagnosis of diminutive colorectal polyps`,criteria:E,showTryAgain:!0,showBackToDashboard:!0,onTryAgain:()=>{},onBackToDashboard:()=>{}})})},P={...A,globals:{colorScheme:`dark`}},F=[`Intro`,`ColonoscopyPolyps`,`ChestXray`,`UntimedAttempt`,`ResultPassed`,`ResultFailed`,`DarkModeQuestion`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <TeachingLayout fluid footerText="Logged in: dr.jones">
      <AssessmentIntro title="Before you begin" body={introBody} onBegin={() => {}} />
    </TeachingLayout>
}`,...O.parameters?.docs?.source},description:{story:`Intro screen shown before the assessment begins.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return <TeachingLayout fluid footerText="Logged in: dr.jones" ribbonRight={examControls(75)}>
        <QuestionView item={demoItem} selectedOption={selected} onSelectOption={setSelected} currentQuestion={3} totalQuestions={120} onPrevious={() => {}} onNext={() => {}} isLastQuestion={false} />
      </TeachingLayout>;
  }
}`,...k.parameters?.docs?.source},description:{story:`A question during the assessment with image pair and options.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return <TeachingLayout fluid footerText="Logged in: dr.jones" ribbonRight={examControls(10)}>
        <QuestionView item={chestXrayItem} selectedOption={selected} onSelectOption={setSelected} currentQuestion={1} totalQuestions={4} onNext={() => {}} isLastQuestion={false} />
      </TeachingLayout>;
  }
}`,...A.parameters?.docs?.source},description:{story:`Chest X-ray question - single large image with clinical scenario (variable format).`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return <TeachingLayout fluid footerText="Logged in: dr.jones" ribbonRight={examControls(0)}>
        <QuestionView item={chestXrayItem} selectedOption={selected} onSelectOption={setSelected} currentQuestion={1} totalQuestions={4} onNext={() => {}} isLastQuestion={false} />
      </TeachingLayout>;
  }
}`,...j.parameters?.docs?.source},description:{story:`An untimed attempt: no timer in the ribbon, and "End exam" still there.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <TeachingLayout footerText="Logged in: dr.jones">
      <AssessmentResult isPassed bankTitle="Optical diagnosis of diminutive colorectal polyps" criteria={passCriteria} assessmentId={42} showCertificate showBackToDashboard onBackToDashboard={() => {}} />
    </TeachingLayout>
}`,...M.parameters?.docs?.source},description:{story:`Result screen after passing the assessment.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <TeachingLayout footerText="Logged in: dr.jones">
      <AssessmentResult isPassed={false} bankTitle="Optical diagnosis of diminutive colorectal polyps" criteria={failCriteria} showTryAgain showBackToDashboard onTryAgain={() => {}} onBackToDashboard={() => {}} />
    </TeachingLayout>
}`,...N.parameters?.docs?.source},description:{story:`Result screen after failing the assessment.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...ChestXray,
  globals: {
    colorScheme: "dark"
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{A as ChestXray,k as ColonoscopyPolyps,P as DarkModeQuestion,O as Intro,N as ResultFailed,M as ResultPassed,j as UntimedAttempt,F as __namedExportsOrder,S as default};