import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Group-DSt3d3i4.js";import{n as a,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{t as l}from"./Icon-DG7U5iIm.js";import{Ct as u,n as d}from"./appIcons-BpiHpu4d.js";import{t as f}from"./icons-ClIZ42AL.js";import{t as p}from"./BodyText-Vl4rxmG1.js";import{t as m}from"./Heading-CiSQlEyi.js";import{t as h}from"./BodyTextBold-CxqNt9uz.js";import{t as g}from"./BodyTextInline-BBHINRw1.js";import{a as _,n as v}from"./variants-US1Dcm7T.js";import{n as y,t as b}from"./SignOffStatusBadge-39MYNaPs.js";import{n as x,t as S}from"./Date-BfRC-G4a.js";import{a as C}from"./recordList-DhbiVGzX.js";import{A as w,E as T,f as E,w as D}from"./fixtures-DDuwM3Po.js";import{n as O,t as k}from"./RegistrationBadge-D_VNxJsi.js";var A,j;function M(){return(M=e((()=>{A=`_badgeOnBaseline_1rytm_11`,j={badgeOnBaseline:A}})))()}function N({label:e,children:t}){return(0,F.jsxs)(c,{gap:2,children:[(0,F.jsx)(h,{children:e}),(0,F.jsx)(p,{children:t})]})}function P({signOff:e}){let{competency:t,status:n,kind:r,scope:a,level:s,requested_level:d,observed_on:f,signed_at:_,expires_on:v,signed_off_by:y,meaning:x,comments:w,attachments:T,assessor_email:E,fingerprint_matches:D}=e;return(0,F.jsx)(o,{"data-testid":`sign-off-card`,children:(0,F.jsxs)(c,{gap:`md`,children:[(0,F.jsxs)(i,{justify:`space-between`,wrap:`nowrap`,align:`baseline`,children:[(0,F.jsxs)(c,{gap:2,children:[(0,F.jsx)(m,{children:C(t.name,a)}),s&&(0,F.jsx)(g,{children:s.name}),s&&d&&d.id!==s.id&&(0,F.jsxs)(p,{c:`dimmed`,children:[`Asked for: `,d.name]})]}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`span`,{className:j.badgeOnBaseline,children:(0,F.jsx)(b,{status:n})})})]}),(0,F.jsxs)(i,{gap:`xl`,wrap:`wrap`,align:`flex-start`,children:[(0,F.jsx)(N,{label:`Observed on`,children:(0,F.jsx)(S,{date:f,format:`medium`})}),_&&(0,F.jsx)(N,{label:`Signed`,children:(0,F.jsx)(S,{date:_.slice(0,10),format:`medium`})}),v&&(0,F.jsx)(N,{label:`Review due`,children:(0,F.jsx)(S,{date:v,format:`medium`})})]}),E&&(0,F.jsx)(N,{label:`Sent to`,children:E}),x&&(0,F.jsx)(N,{label:`Basis`,children:x}),r!==`initial`&&(0,F.jsx)(N,{label:`Kind`,children:r}),y&&(0,F.jsxs)(c,{gap:`xs`,children:[(0,F.jsx)(h,{children:`Signed off by`}),(0,F.jsxs)(p,{children:[y.name,` - `,y.role]}),y.care_location&&(0,F.jsx)(p,{c:`dimmed`,children:y.care_location}),y.registrations.map(e=>(0,F.jsx)(k,{registration:e},`${e.body}-${e.number}`))]}),w&&(0,F.jsx)(N,{label:`Comments`,children:w}),T.length>0&&(0,F.jsxs)(c,{gap:`xs`,children:[(0,F.jsx)(h,{children:`Attachments`}),T.map(e=>(0,F.jsxs)(i,{gap:`xs`,wrap:`nowrap`,children:[(0,F.jsx)(l,{icon:(0,F.jsx)(u,{}),size:`sm`}),(0,F.jsx)(g,{children:e.filename})]},e.hash))]}),D===!0&&(0,F.jsx)(N,{label:`Fingerprint`,children:`Matches. Nothing in this sign-off has changed since it was signed.`}),D===!1&&(0,F.jsxs)(c,{gap:2,children:[(0,F.jsx)(h,{children:`Fingerprint`}),(0,F.jsx)(h,{children:`Does not match. Something in this sign-off has changed since it was signed, so it cannot be relied on.`})]})]})})}var F;function I(){return(I=e((()=>{r(),s(),a(),y(),x(),f(),d(),t(),O(),M(),F=n(),P.__docgenInfo={description:`SignOffCard

Renders the sign-off and its assessor snapshot.`,methods:[],displayName:`SignOffCard`,props:{signOff:{required:!0,tsType:{name:`SignOff`},description:`The sign-off to render`}}}})))()}var L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{s(),I(),E(),_(),L=n(),R={title:`Passport/Sign-off card`,tags:[`!dev`],component:P,parameters:{layout:`padded`}},z={args:{signOff:w}},B={args:{signOff:{...D,assessor_email:`a.okonkwo@nhs.net`}}},V={args:{signOff:{...w,requested_level:{id:`teach`,name:`Can teach others`},comments:`Not yet teaching it; independent, yes.`}}},H={args:{signOff:{...w,fingerprint_matches:!1}}},U={render:()=>(0,L.jsxs)(c,{gap:`sm`,children:[(0,L.jsx)(P,{signOff:w}),(0,L.jsx)(v,{children:`Observed on 12 March, signed on 14 March. Consultants often sign days or weeks after watching, so the gap is ordinary. The card shows both and draws no conclusion from the distance between them.`})]})},W={args:{signOff:T}},G=[`SignedOff`,`Requested`,`SignedAtADifferentLevel`,`FingerprintDoesNotMatch`,`ThreeClocks`,`WithAScope`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: signedOff
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: {
      ...requested,
      assessor_email: "a.okonkwo@nhs.net"
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`The holder's view of an open request, naming who it was sent to.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: {
      ...signedOff,
      requested_level: {
        id: "teach",
        name: "Can teach others"
      },
      comments: "Not yet teaching it; independent, yes."
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`Signed off at a different level from the one asked for.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: {
      ...signedOff,
      fingerprint_matches: false
    }
  }
}`,...H.parameters?.docs?.source},description:{story:`A record changed since it was signed, which Quill finds on reading it.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="sm">
      <SignOffCard signOff={signedOff} />
      <StoryNote>
        Observed on 12 March, signed on 14 March. Consultants often sign days or
        weeks after watching, so the gap is ordinary. The card shows both and
        draws no conclusion from the distance between them.
      </StoryNote>
    </Stack>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    signOff: requestedForLung
  }
}`,...W.parameters?.docs?.source},description:{story:`A sign-off for one scope of a competency, named after the competency.`,...W.parameters?.docs?.description}}}})))()}K();export{H as FingerprintDoesNotMatch,B as Requested,V as SignedAtADifferentLevel,z as SignedOff,U as ThreeClocks,W as WithAScope,G as __namedExportsOrder,R as default};