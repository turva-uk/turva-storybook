import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,n as i}from"./variants-US1Dcm7T.js";import{n as a,t as o}from"./demoPatients-yuLmcz57.js";import{n as s,t as c}from"./PatientsList-BwwzClUB.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l=t(),r(),s(),a(),u=n(),d={title:`Patients/Patients list`,component:c},f={args:{patients:o}},p={args:{patients:[],isLoading:!1,fhirAvailable:!1}},m={args:{patients:[],isLoading:!1,fhirAvailable:!0}},h={args:{patients:[],isLoading:!0,fhirAvailable:!1}},g={render:()=>{let[e,t]=(0,l.useState)(`health-check`);(0,l.useEffect)(()=>{let n,r=(e,r)=>{n=setTimeout(()=>{t(e)},r)};return e===`health-check`?r(`db-init`,5e3):e===`db-init`?r(`fetching`,5e3):e===`fetching`?r(`loaded`,5e3):e===`loaded`&&r(`health-check`,5e3),()=>clearTimeout(n)},[e]);let n={"health-check":`1/4 - Health check loading (5s)`,"db-init":`2/4 - Database initialising (5s)`,fetching:`3/4 - Fetching patients (5s)`,loaded:`4/4 - Patients loaded (5s)`};return e===`health-check`?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:n[e]}),(0,u.jsx)(c,{patients:[],isLoading:!0,fhirAvailable:!1})]}):e===`db-init`?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:n[e]}),(0,u.jsx)(c,{patients:[],isLoading:!1,fhirAvailable:!1})]}):e===`fetching`?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:n[e]}),(0,u.jsx)(c,{patients:[],isLoading:!0,fhirAvailable:!0})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:n[e]}),(0,u.jsx)(c,{patients:o,isLoading:!1,fhirAvailable:!0})]})}},_={...f,globals:{colorScheme:`dark`}},v=[`Default`,`DatabaseInitialising`,`NoPatients`,`Loading`,`AnimatedLoadingSequence`,`DarkMode`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    patients: demoPatientsList
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    patients: [],
    isLoading: false,
    fhirAvailable: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    patients: [],
    isLoading: false,
    fhirAvailable: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    patients: [],
    isLoading: true,
    fhirAvailable: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<"health-check" | "db-init" | "fetching" | "loaded">("health-check");
    useEffect(() => {
      let timeoutId: NodeJS.Timeout;
      const scheduleNextState = (nextState: typeof state, delay: number) => {
        timeoutId = setTimeout(() => {
          setState(nextState);
        }, delay);
      };

      // State machine timing
      if (state === "health-check") {
        scheduleNextState("db-init", 5000);
      } else if (state === "db-init") {
        scheduleNextState("fetching", 5000);
      } else if (state === "fetching") {
        scheduleNextState("loaded", 5000);
      } else if (state === "loaded") {
        scheduleNextState("health-check", 5000);
      }
      return () => clearTimeout(timeoutId);
    }, [state]);
    const labels: Record<typeof state, string> = {
      "health-check": "1/4 - Health check loading (5s)",
      "db-init": "2/4 - Database initialising (5s)",
      fetching: "3/4 - Fetching patients (5s)",
      loaded: "4/4 - Patients loaded (5s)"
    };

    // Render appropriate state
    if (state === "health-check") {
      return <>
          <StoryNote>{labels[state]}</StoryNote>
          <PatientsList patients={[]} isLoading={true} fhirAvailable={false} />
        </>;
    }
    if (state === "db-init") {
      return <>
          <StoryNote>{labels[state]}</StoryNote>
          <PatientsList patients={[]} isLoading={false} fhirAvailable={false} />
        </>;
    }
    if (state === "fetching") {
      return <>
          <StoryNote>{labels[state]}</StoryNote>
          <PatientsList patients={[]} isLoading={true} fhirAvailable={true} />
        </>;
    }

    // state === "loaded"
    return <>
        <StoryNote>{labels[state]}</StoryNote>
        <PatientsList patients={demoPatientsList} isLoading={false} fhirAvailable={true} />
      </>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Animated Loading Sequence

Demonstrates the complete FHIR initialization sequence:
1. Initial health check loading (5s)
2. Database initialising message (5s)
3. Fetching patients loading (5s)
4. Patient list displayed (15s)

Loops indefinitely to show the full startup flow.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as AnimatedLoadingSequence,_ as DarkMode,p as DatabaseInitialising,f as Default,h as Loading,m as NoPatients,v as __namedExportsOrder,d as default};