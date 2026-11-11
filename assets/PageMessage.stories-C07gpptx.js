import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{i as n,l as r,o as i}from"./theme-B7Ll1jCm.js";import{D as a,E as o,O as s,T as c,k as l}from"./Form-BQWpUpVW.js";import{t as u}from"./jsx-runtime-MKhVqBIO.js";import{b as d,c as f,f as p,l as m,p as h,y as g}from"./iframe-gh_IKeZo.js";import{a as _,i as v,r as y}from"./variants-US1Dcm7T.js";function b({messages:e}){let{showMessage:t}=l();return(0,S.useEffect)(()=>{e.forEach(e=>t(e))},[]),null}function x(e){function t(){return(0,C.jsxs)(a,{children:[(0,C.jsx)(c,{}),(0,C.jsx)(b,{messages:e})]})}let i=p([{path:`*`,element:(0,C.jsx)(t,{})}],{initialEntries:[`/`]});return(0,C.jsx)(g,{theme:r,cssVariablesResolver:n,children:(0,C.jsx)(f,{router:i})})}var S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{h(),m(),d(),i(),s(),o(),S=t(),_(),C=u(),w={title:`Page message/Page message`,parameters:{layout:`padded`,disableDefaultRouter:!0}},T={render:()=>x([{variant:`success`,title:`Organisation deleted`,description:`North Norfolk Medical Centre has been removed.`}])},E={render:()=>x([{variant:`error`,title:`Failed to delete organisation`,description:`The server returned an error. Please try again.`}])},D={render:()=>x([{variant:`partial_success`,title:`Site partially updated`,description:`Name was saved but address update failed.`}])},O={render:()=>x([{variant:`success`,title:`Staff member added`,description:`Dr Smith has been added to the organisation.`},{variant:`error`,title:`Failed to send notification`,description:`Email delivery failed. The user has still been added.`}])},k={render:()=>x([{variant:`success`,title:`Site removed`}])},A={render:()=>{function e(){return(0,C.jsx)(g,{theme:r,cssVariablesResolver:n,children:(0,C.jsxs)(v,{children:[(0,C.jsx)(y,{label:`success`,children:x([{variant:`success`,title:`Action completed successfully`}])}),(0,C.jsx)(y,{label:`partial_success`,children:x([{variant:`partial_success`,title:`Partially completed`,description:`Some items were not processed.`}])}),(0,C.jsx)(y,{label:`error`,children:x([{variant:`error`,title:`Operation failed`,description:`Please try again or contact support.`}])})]})})}return(0,C.jsx)(e,{})}},j=[`SingleSuccess`,`SingleError`,`PartialSuccess`,`MultipleMessages`,`NoDescription`,`AllVariants`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => renderStory([{
    variant: "success",
    title: "Organisation deleted",
    description: "North Norfolk Medical Centre has been removed."
  }])
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => renderStory([{
    variant: "error",
    title: "Failed to delete organisation",
    description: "The server returned an error. Please try again."
  }])
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => renderStory([{
    variant: "partial_success",
    title: "Site partially updated",
    description: "Name was saved but address update failed."
  }])
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => renderStory([{
    variant: "success",
    title: "Staff member added",
    description: "Dr Smith has been added to the organisation."
  }, {
    variant: "error",
    title: "Failed to send notification",
    description: "Email delivery failed. The user has still been added."
  }])
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => renderStory([{
    variant: "success",
    title: "Site removed"
  }])
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    function AllVariantsPage() {
      return <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
          <VariantStack>
            <VariantRow label="success">
              {renderStory([{
              variant: "success",
              title: "Action completed successfully"
            }])}
            </VariantRow>
            <VariantRow label="partial_success">
              {renderStory([{
              variant: "partial_success",
              title: "Partially completed",
              description: "Some items were not processed."
            }])}
            </VariantRow>
            <VariantRow label="error">
              {renderStory([{
              variant: "error",
              title: "Operation failed",
              description: "Please try again or contact support."
            }])}
            </VariantRow>
          </VariantStack>
        </MantineProvider>;
    }
    return <AllVariantsPage />;
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{A as AllVariants,O as MultipleMessages,k as NoDescription,D as PartialSuccess,E as SingleError,T as SingleSuccess,j as __namedExportsOrder,w as default};