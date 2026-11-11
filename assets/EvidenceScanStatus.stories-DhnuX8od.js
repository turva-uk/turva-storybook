import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{a as n,i as r,n as i,r as a}from"./variants-US1Dcm7T.js";import{n as o,t as s}from"./EvidenceScanStatus-6Hk3c1Gk.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),n(),c=t(),l={title:`Passport/EvidenceScanStatus`,tags:[`!dev`],component:s,parameters:{layout:`padded`},args:{status:`attached`,filename:`als-certificate.pdf`}},u={},d={args:{status:`malware`,filename:`eicar-in-a-pdf.pdf`,signature:`Eicar-Signature`}},f={args:{status:`failed`}},p={args:{status:`slow`}},m={render:()=>(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{label:`checking`,horizontal:!1,children:(0,c.jsx)(s,{status:`checking`,filename:`als-certificate.pdf`})}),(0,c.jsx)(a,{label:`attached`,horizontal:!1,children:(0,c.jsx)(s,{status:`attached`,filename:`als-certificate.pdf`})}),(0,c.jsx)(a,{label:`slow`,horizontal:!1,children:(0,c.jsx)(s,{status:`slow`,filename:`als-certificate.pdf`})}),(0,c.jsx)(a,{label:`malware`,horizontal:!1,children:(0,c.jsx)(s,{status:`malware`,filename:`eicar-in-a-pdf.pdf`,signature:`Eicar-Signature`})}),(0,c.jsx)(a,{label:`failed`,horizontal:!1,children:(0,c.jsx)(s,{status:`failed`,filename:`scan.pdf`})}),(0,c.jsx)(i,{children:"Every upload is scanned before it can be shown. Only `attached` and `slow` hand the file to the form; `slow` is a scan with no verdict after two minutes, still held back wherever it would be shown."})]})},h={args:{status:`checking`}},g=[`Attached`,`MalwareFound`,`CouldNotBeChecked`,`StillBeingChecked`,`AllStates`,`Checking`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: "malware",
    filename: "eicar-in-a-pdf.pdf",
    signature: "Eicar-Signature"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    status: "failed"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: "slow"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="checking" horizontal={false}>
        <EvidenceScanStatus status="checking" filename="als-certificate.pdf" />
      </VariantRow>
      <VariantRow label="attached" horizontal={false}>
        <EvidenceScanStatus status="attached" filename="als-certificate.pdf" />
      </VariantRow>
      <VariantRow label="slow" horizontal={false}>
        <EvidenceScanStatus status="slow" filename="als-certificate.pdf" />
      </VariantRow>
      <VariantRow label="malware" horizontal={false}>
        <EvidenceScanStatus status="malware" filename="eicar-in-a-pdf.pdf" signature="Eicar-Signature" />
      </VariantRow>
      <VariantRow label="failed" horizontal={false}>
        <EvidenceScanStatus status="failed" filename="scan.pdf" />
      </VariantRow>
      <StoryNote>
        Every upload is scanned before it can be shown. Only \`attached\` and
        \`slow\` hand the file to the form; \`slow\` is a scan with no verdict after
        two minutes, still held back wherever it would be shown.
      </StoryNote>
    </VariantStack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: "checking"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as AllStates,u as Attached,h as Checking,f as CouldNotBeChecked,d as MalwareFound,p as StillBeingChecked,g as __namedExportsOrder,l as default};