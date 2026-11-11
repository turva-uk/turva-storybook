import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{c as n,l as r}from"./Form-BQWpUpVW.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./ActionCardButton-DnJjeR9q.js";import{a as s,n as c}from"./variants-US1Dcm7T.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{l=t(),a(),s(),r(),u=i(),d={pathname:`/admin/users/new`,search:``,hash:``,state:null,key:`default`},f={title:`Warnings/Dirty form navigation`,component:n,parameters:{layout:`fullscreen`,docs:{description:{component:`Modal that warns users when attempting to navigate away from a page with unsaved form changes. Uses React Router's useBlocker functionality.`}}}},p={render:()=>{let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,u.jsx)(c,{children:`Click the button below to simulate attempting to navigate away from a form with unsaved changes.`}),(0,u.jsx)(`div`,{style:{width:300},children:(0,u.jsx)(o,{label:`Leave dirty form`,onClick:()=>t(!0)})}),(0,u.jsx)(n,{blocker:e?{state:`blocked`,reset:()=>t(!1),proceed:()=>t(!1),location:d}:{state:`unblocked`,reset:void 0,proceed:void 0,location:void 0}})]})},args:{}},m={render:()=>{let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,u.jsx)(c,{children:`The same modal, blocking on an upload in flight rather than an unsaved form.`}),(0,u.jsx)(`div`,{style:{width:300},children:(0,u.jsx)(o,{label:`Leave during upload`,onClick:()=>t(!0)})}),(0,u.jsx)(n,{blocker:e?{state:`blocked`,reset:()=>t(!1),proceed:()=>t(!1),location:d}:{state:`unblocked`,reset:void 0,proceed:void 0,location:void 0},message:`A video is still uploading. If you leave this page you will not see whether it finishes.`,acceptLabel:`Leave anyway`})]})},args:{}},h={...p,globals:{colorScheme:`dark`}},g=[`Interactive`,`CustomMessage`,`DarkMode`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isBlocked, setIsBlocked] = useState(false);
    const blocker = isBlocked ? {
      state: "blocked" as const,
      reset: () => setIsBlocked(false),
      proceed: () => setIsBlocked(false),
      location: mockLocation
    } : {
      state: "unblocked" as const,
      reset: undefined,
      proceed: undefined,
      location: undefined
    };
    return <div style={{
      padding: "2rem"
    }}>
        <StoryNote>
          Click the button below to simulate attempting to navigate away from a
          form with unsaved changes.
        </StoryNote>
        <div style={{
        width: 300
      }}>
          <ActionCardButton label="Leave dirty form" onClick={() => setIsBlocked(true)} />
        </div>
        <DirtyFormNavigation blocker={blocker} />
      </div>;
  },
  // @ts-expect-error: Custom render function doesn't use args
  args: {}
}`,...p.parameters?.docs?.source},description:{story:`Interactive story showing the modal when navigation is blocked.
Click "Leave dirty form" to trigger the modal.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isBlocked, setIsBlocked] = useState(false);
    const blocker = isBlocked ? {
      state: "blocked" as const,
      reset: () => setIsBlocked(false),
      proceed: () => setIsBlocked(false),
      location: mockLocation
    } : {
      state: "unblocked" as const,
      reset: undefined,
      proceed: undefined,
      location: undefined
    };
    return <div style={{
      padding: "2rem"
    }}>
        <StoryNote>
          The same modal, blocking on an upload in flight rather than an unsaved
          form.
        </StoryNote>
        <div style={{
        width: 300
      }}>
          <ActionCardButton label="Leave during upload" onClick={() => setIsBlocked(true)} />
        </div>
        <DirtyFormNavigation blocker={blocker} message="A video is still uploading. If you leave this page you will not see whether it finishes." acceptLabel="Leave anyway" />
      </div>;
  },
  // @ts-expect-error: Custom render function doesn't use args
  args: {}
}`,...m.parameters?.docs?.source},description:{story:`A caller blocking on something other than a form supplies its own
wording. The admin media card blocks on a video still going up,
where "unsaved changes" would send the admin looking for a save
button that does not exist.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Interactive,
  globals: {
    colorScheme: "dark"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as CustomMessage,h as DarkMode,p as Interactive,g as __namedExportsOrder,f as default};