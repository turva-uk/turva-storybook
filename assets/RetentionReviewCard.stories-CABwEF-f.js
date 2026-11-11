import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,i,r as a}from"./variants-US1Dcm7T.js";import{n as o,t as s}from"./RetentionReviewCard-6OEHzPPP.js";function c({start:e,about:t=d}){let[n,r]=(0,l.useState)(e),[i,a]=(0,l.useState)(``),[o,c]=(0,l.useState)(null);return(0,u.jsx)(s,{review:t,choice:n,note:i,askAgainOn:o,onChoiceChange:r,onNoteChange:a,onAskAgainOnChange:c})}var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l=t(),r(),o(),u=n(),d={id:1,user_id:42,full_name:`Alex Example`,email:`alex.example@example.nhs.uk`,org_unit_id:3,organisation:`Example Training Academy`,closed_at:`2027-01-14T09:00:00Z`,due_on:`2030-07-14T09:00:00Z`,attempts:3,enrolments:1,listed_at:`2030-07-15T03:30:00Z`},f={id:9,user_id:44,full_name:`Cat Example`,email:`cat.example@example.nhs.uk`,closed_at:`2028-01-14T09:00:00Z`,due_on:`2030-01-14T09:00:00Z`,listed_at:`2030-01-15T03:30:00Z`},p={title:`Retention/Retention review card`,component:s,parameters:{layout:`padded`}},m={render:()=>(0,u.jsx)(c,{start:`undecided`})},h={render:()=>(0,u.jsxs)(i,{children:[(0,u.jsx)(a,{label:`leave for later (default)`,horizontal:!1,children:(0,u.jsx)(c,{start:`undecided`})}),(0,u.jsx)(a,{label:`delete`,horizontal:!1,children:(0,u.jsx)(c,{start:`delete`})}),(0,u.jsx)(a,{label:`keep, with no reason yet`,horizontal:!1,children:(0,u.jsx)(c,{start:`keep`})}),(0,u.jsx)(a,{label:`refused`,horizontal:!1,children:(0,u.jsx)(s,{review:d,choice:`delete`,note:``,askAgainOn:`2031-07-15`,onChoiceChange:()=>void 0,onNoteChange:()=>void 0,onAskAgainOnChange:()=>void 0,refusal:`This account is no longer past its period: it has been opened again, or the period has changed. Nothing was deleted.`})}),(0,u.jsx)(a,{label:`while sending`,horizontal:!1,children:(0,u.jsx)(s,{review:d,choice:`keep`,note:`The sponsor asked us to hold these.`,askAgainOn:`2031-07-15`,onChoiceChange:()=>void 0,onNoteChange:()=>void 0,onAskAgainOnChange:()=>void 0,disabled:!0})})]})},g={render:()=>(0,u.jsxs)(i,{children:[(0,u.jsx)(a,{label:`leave for later (default)`,horizontal:!1,children:(0,u.jsx)(c,{start:`undecided`,about:f})}),(0,u.jsx)(a,{label:`empty`,horizontal:!1,children:(0,u.jsx)(c,{start:`delete`,about:f})}),(0,u.jsx)(a,{label:`keep, with no reason yet`,horizontal:!1,children:(0,u.jsx)(c,{start:`keep`,about:f})})]})},_=[`Default`,`AllStates`,`AnAccount`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Interactive start="undecided" />
}`,...m.parameters?.docs?.source},description:{story:`Where every card starts. Nothing is sent for it.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="leave for later (default)" horizontal={false}>
        <Interactive start="undecided" />
      </VariantRow>
      <VariantRow label="delete" horizontal={false}>
        <Interactive start="delete" />
      </VariantRow>
      <VariantRow label="keep, with no reason yet" horizontal={false}>
        <Interactive start="keep" />
      </VariantRow>
      <VariantRow label="refused" horizontal={false}>
        <RetentionReviewCard review={review} choice="delete" note="" askAgainOn="2031-07-15" onChoiceChange={() => undefined} onNoteChange={() => undefined} onAskAgainOnChange={() => undefined} refusal="This account is no longer past its period: it has been opened again, or the period has changed. Nothing was deleted." />
      </VariantRow>
      <VariantRow label="while sending" horizontal={false}>
        <RetentionReviewCard review={review} choice="keep" note="The sponsor asked us to hold these." askAgainOn="2031-07-15" onChoiceChange={() => undefined} onNoteChange={() => undefined} onAskAgainOnChange={() => undefined} disabled />
      </VariantRow>
    </VariantStack>
}`,...h.parameters?.docs?.source},description:{story:`Each choice, and a decision the server refused.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="leave for later (default)" horizontal={false}>
        <Interactive start="undecided" about={account} />
      </VariantRow>
      <VariantRow label="empty" horizontal={false}>
        <Interactive start="delete" about={account} />
      </VariantRow>
      <VariantRow label="keep, with no reason yet" horizontal={false}>
        <Interactive start="keep" about={account} />
      </VariantRow>
    </VariantStack>
}`,...g.parameters?.docs?.source},description:{story:`The account itself, closed two years with no records left. Choosing
to empty it marks it for the next nightly run.`,...g.parameters?.docs?.description}}}})))()}v();export{h as AllStates,g as AnAccount,m as Default,_ as __namedExportsOrder,p as default};