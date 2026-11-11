import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{o as n,u as r}from"./theme-B7Ll1jCm.js";import{C as i,S as a}from"./Form-BQWpUpVW.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./Container-DJA6w9O_.js";import{n as l,t as u}from"./List-BAe9Z2n-.js";import{n as d,t as f}from"./Stack-D_d3SZwt.js";import{n as p,t as m}from"./BodyText-Vl4rxmG1.js";import{n as h,t as g}from"./Heading-CiSQlEyi.js";import{t as _}from"./MarkdownView-C0VWo7qu.js";import{n as v,t as y}from"./messaging-DoW14WhY.js";import{t as b}from"./MessagesList-B6elsW-S.js";import{t as x}from"./Messaging-C-CKVL3X.js";import{n as S,t as C}from"./demoMessages-lbUYFAs1.js";import{n as w,t as T}from"./MainLayout-fD7qd5_7.js";import{n as E,t as D}from"./demoPatients-yuLmcz57.js";var O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{v(),p(),h(),i(),n(),y(),S(),s(),d(),l(),O=t(),w(),E(),k=o(),A={title:`Layouts/Layout complete`,tags:[`!dev`],component:T,parameters:{layout:`fullscreen`}},j=[{id:`1`,displayName:`Dr Williams`,profiles:[{givenName:`David`,familyName:`Williams`,gradientIndex:5}],lastMessage:`Thank you for the letter, I've received it and will review with my GP.`,lastMessageTime:new Date(Date.now()-72e5).toISOString(),unreadCount:2},{id:`2`,displayName:`Dr Smith`,profiles:[{givenName:`James`,familyName:`Smith`,gradientIndex:9}],lastMessage:`I need a medical letter for my insurance claim. Can you help?`,lastMessageTime:new Date(Date.now()-18e6).toISOString(),unreadCount:0},{id:`3`,displayName:`Dr Jones`,profiles:[{givenName:`Eleanor`,familyName:`Jones`,gradientIndex:12}],lastMessage:`Could you send me a copy of my recent consultation notes?`,lastMessageTime:new Date(Date.now()-864e5).toISOString(),unreadCount:1}],M={tags:[`!test`],args:{patient:D[0],isLoading:!1,patientNav:[{label:D[0].name,href:`/patients/${D[0].id}`},{label:`Messages`,href:`/patients/${D[0].id}/messages`}]},parameters:{routerPath:`/patients/${D[0].id}/messages`},render:e=>(0,k.jsx)(T,{...e,children:(0,k.jsx)(`div`,{style:{padding:16},children:(0,k.jsx)(b,{threads:j,onThreadClick:e=>console.log(`Clicked:`,e.id)})})})},N={tags:[`!test`],args:{patient:D[0],isLoading:!1,patientNav:[{label:D[0].name,href:`/patients/${D[0].id}`},{label:`Messages`,href:`/patients/${D[0].id}/messages`},{label:`Dr Fenwick, Imogen`,href:`/patients/${D[0].id}/messages/gastro-clinic`}]},parameters:{routerPath:`/patients/${D[0].id}/messages/gastro-clinic`},render:e=>{function t(){let[e,t]=(0,O.useState)(C);return(0,k.jsx)(x,{messages:e,currentUserId:`me`,onSend:e=>t(t=>[...t,{id:String(t.length+1),senderId:`me`,text:e,timestamp:new Date().toISOString()}])})}return(0,k.jsx)(T,{...e,children:(0,k.jsx)(t,{})})}},P=`# Consultation summary

This is a short example of a clinical letter. It includes **bold** and *italic* text, a link to [example](https://example.com), and a code block:

\`\`\`
print('hello world')
\`\`\`

- Follow up: bloods
- Action: review results`,F={tags:[`!test`],args:{patient:D[0],isLoading:!1},render:e=>(0,k.jsx)(T,{...e,children:(0,k.jsx)(`div`,{style:{padding:16},children:(0,k.jsx)(_,{source:P})})})},I=()=>(0,k.jsx)(c,{size:`lg`,py:`xl`,children:(0,k.jsxs)(f,{gap:`lg`,children:[(0,k.jsx)(a,{title:`An extremely long read`}),Array.from({length:12},(e,t)=>(0,k.jsxs)(f,{gap:`sm`,children:[(0,k.jsxs)(g,{children:[`Section `,t+1,`: Responsive layout considerations`]}),(0,k.jsx)(m,{children:`In wider viewports we expect the search bar to remain visible alongside patient details. When space becomes constrained, the layout should gracefully collapse. Container queries let components adapt to the width they actually have, rather than guessing via the viewport.`}),(0,k.jsx)(m,{children:`Real-world interfaces need to cope with split views, drawers, and odd aspect ratios. That’s why component-level responsiveness is such a reliable default. It avoids brittle assumptions and keeps components portable.`}),(0,k.jsxs)(u,{size:`md`,fw:r.fontWeights.body,children:[(0,k.jsx)(u.Item,{children:`Use container queries for visual changes.`}),(0,k.jsx)(u.Item,{children:`Use a ResizeObserver-based hook for JS behaviour tied to component width.`}),(0,k.jsx)(u.Item,{children:`Reserve global breakpoint context for app-shell decisions.`})]}),(0,k.jsx)(m,{children:`As the section continues, imagine a stream of clinical notes, letters, tasks, and audit trails - enough content to ensure the page scrolls and your ribbon remains pinned to the top if sticky is enabled.`})]},t)),(0,k.jsx)(g,{children:`Summary`}),(0,k.jsx)(m,{children:`If you can scroll comfortably and the header stays put, your sticky handling works. If the search hides on narrow widths and reappears when there’s room, your container queries are doing their job.`})]})}),L={tags:[`!test`],args:{patient:D[0],isLoading:!1},render:e=>(0,k.jsx)(T,{...e,children:(0,k.jsx)(I,{})})},R=[`WithPatientMessageList`,`WithMessaging`,`WithMarkdown`,`LongRead`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  args: {
    patient: demoPatientsList[0],
    isLoading: false,
    patientNav: [{
      label: demoPatientsList[0].name,
      href: \`/patients/\${demoPatientsList[0].id}\`
    }, {
      label: "Messages",
      href: \`/patients/\${demoPatientsList[0].id}/messages\`
    }]
  },
  parameters: {
    routerPath: \`/patients/\${demoPatientsList[0].id}/messages\`
  },
  render: args => <MainLayout {...args}>
      <div style={{
      padding: 16
    }}>
        <MessagesList threads={mockThreads} onThreadClick={thread => console.log("Clicked:", thread.id)} />
      </div>
    </MainLayout>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  args: {
    patient: demoPatientsList[0],
    isLoading: false,
    patientNav: [{
      label: demoPatientsList[0].name,
      href: \`/patients/\${demoPatientsList[0].id}\`
    }, {
      label: "Messages",
      href: \`/patients/\${demoPatientsList[0].id}/messages\`
    }, {
      label: "Dr Fenwick, Imogen",
      href: \`/patients/\${demoPatientsList[0].id}/messages/gastro-clinic\`
    }]
  },
  parameters: {
    routerPath: \`/patients/\${demoPatientsList[0].id}/messages/gastro-clinic\`
  },
  render: args => {
    function MessagingContent() {
      const [messages, setMessages] = useState<Message[]>(demoMessages);
      return <Messaging messages={messages} currentUserId="me" onSend={(text: string) => setMessages(m => [...m, {
        id: String(m.length + 1),
        senderId: "me",
        text,
        timestamp: new Date().toISOString()
      }])} />;
    }
    return <MainLayout {...args}>
        <MessagingContent />
      </MainLayout>;
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  args: {
    patient: demoPatientsList[0],
    isLoading: false
  },
  render: args => <MainLayout {...args}>
      <div style={{
      padding: 16
    }}>
        <MarkdownView source={mdSampleLines} />
      </div>
    </MainLayout>
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  args: {
    patient: demoPatientsList[0],
    isLoading: false
  },
  render: args => <MainLayout {...args}>
      <LongContent />
    </MainLayout>
}`,...L.parameters?.docs?.source}}}})))()}z();export{L as LongRead,F as WithMarkdown,N as WithMessaging,M as WithPatientMessageList,R as __namedExportsOrder,A as default};