import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./SimpleGrid-Cw3N2DUw.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{$ as i,at as a,d as o,hn as s,ln as c,n as l}from"./appIcons-BpiHpu4d.js";import{n as u,t as d}from"./ActionCard-DZ7xcBoc.js";var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{u(),l(),t(),f=r(),p={title:`Action card/Action card`,component:d,parameters:{layout:`padded`},argTypes:{icon:{control:!1,description:`Icon element from @tabler/icons-react`}}},m={args:{icon:(0,f.jsx)(o,{}),title:`Add User`,subtitle:`Create a new user account with competencies and permissions`,buttonLabel:`Add New User`,buttonUrl:`/admin/users/new`}},h={args:{icon:(0,f.jsx)(o,{}),title:`Deactivate site`,subtitle:`Stop this site taking part. It takes no more registrations and nobody can be added to it. Results are kept.`,buttonLabel:`Deactivate site`,buttonDestructive:!0,onClick:()=>void 0}},g={args:{icon:(0,f.jsx)(o,{}),title:`Deactivate user`,subtitle:`Disable this user account`,buttonLabel:`Deactivate`,onClick:()=>void 0,disabled:!0,disabledReason:`This account holds access you cannot grant, such as a clinician passport the person pays for themselves, so you cannot deactivate or reactivate it.`}},_={args:{icon:(0,f.jsx)(o,{}),title:`Add User`,buttonLabel:`Add New User`,buttonUrl:`/admin/users/new`}},v={args:{icon:(0,f.jsx)(o,{}),title:`Add User Account with Extended Permissions`,subtitle:`Create a new user account with customizable competencies, system permissions, and role-based access control settings for your organisation`,buttonLabel:`Create New User Account`,buttonUrl:`/admin/users/new`}},y={args:{title:`Certificate`,subtitle:`You have passed this assessment. Download your certificate below as a PDF to keep for your records.`,buttonLabel:`Download certificate`,fullWidth:!0,buttonVariant:`filled`}},b={args:{icon:(0,f.jsx)(a,{}),title:`Clinical letters`,subtitle:`View referral letters, clinic letters, and discharge summaries`,buttonLabel:`View letters`,buttonUrl:`/patients/1/letters`},render:()=>(0,f.jsxs)(n,{cols:{base:1,sm:2},spacing:`lg`,children:[(0,f.jsx)(d,{icon:(0,f.jsx)(a,{}),title:`Clinical letters`,subtitle:`View referral letters, clinic letters, and discharge summaries`,buttonLabel:`View letters`,buttonUrl:`/patients/1/letters`}),(0,f.jsx)(d,{icon:(0,f.jsx)(i,{}),title:`Messaging`,subtitle:`Send and receive secure messages with the care team`,buttonLabel:`Open messages`,buttonUrl:`/patients/1/messages`}),(0,f.jsx)(d,{icon:(0,f.jsx)(s,{}),title:`Clinical notes`,subtitle:`View consultation notes, observations, and clinical records`,buttonLabel:`View notes`,buttonUrl:`/patients/1/notes`}),(0,f.jsx)(d,{icon:(0,f.jsx)(c,{}),title:`Appointments`,subtitle:`View upcoming and past appointment history`,buttonLabel:`View appointments`,buttonUrl:`/patients/1/appointments`})]})},x={...m,globals:{colorScheme:`dark`}},S=[`Default`,`Destructive`,`DisabledWithReason`,`WithoutSubtitle`,`LongContent`,`FullWidth`,`PatientPage`,`DarkMode`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconUserPlus />,
    title: "Add User",
    subtitle: "Create a new user account with competencies and permissions",
    buttonLabel: "Add New User",
    buttonUrl: "/admin/users/new"
  }
}`,...m.parameters?.docs?.source},description:{story:`Default ActionCard

Basic action card with icon, title, subtitle, and button.
Icons default to "lg" size (48px desktop, 32px mobile).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconUserPlus />,
    title: "Deactivate site",
    subtitle: "Stop this site taking part. It takes no more registrations and nobody can be added to it. Results are kept.",
    buttonLabel: "Deactivate site",
    buttonDestructive: true,
    onClick: () => undefined
  }
}`,...h.parameters?.docs?.source},description:{story:`Destructive: the button is red, for an action that takes something
away, as the edit site page's "Deactivate site" card is.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconUserPlus />,
    title: "Deactivate user",
    subtitle: "Disable this user account",
    buttonLabel: "Deactivate",
    onClick: () => undefined,
    disabled: true,
    disabledReason: "This account holds access you cannot grant, such as a clinician passport the person pays for themselves, so you cannot deactivate or reactivate it."
  }
}`,...g.parameters?.docs?.source},description:{story:`Disabled, with the reason

A button greyed out with nothing said reads as broken, so the reason
sits beneath it, as on a user's page where the viewer may not
deactivate the account.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconUserPlus />,
    title: "Add User",
    buttonLabel: "Add New User",
    buttonUrl: "/admin/users/new"
  }
}`,..._.parameters?.docs?.source},description:{story:`Without subtitle

The title and the action say enough, as on the passport specialty card,
whose field carries its own helper text.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconUserPlus />,
    title: "Add User Account with Extended Permissions",
    subtitle: "Create a new user account with customizable competencies, system permissions, and role-based access control settings for your organisation",
    buttonLabel: "Create New User Account",
    buttonUrl: "/admin/users/new"
  }
}`,...v.parameters?.docs?.source},description:{story:`Long Content

ActionCard with longer title and subtitle text.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Certificate",
    subtitle: "You have passed this assessment. Download your certificate below as a PDF to keep for your records.",
    buttonLabel: "Download certificate",
    fullWidth: true,
    buttonVariant: "filled"
  }
}`,...y.parameters?.docs?.source},description:{story:`Full width

ActionCard without max-width, filling the available container width.
Useful for standalone call-to-action sections like certificate downloads.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconMail />,
    title: "Clinical letters",
    subtitle: "View referral letters, clinic letters, and discharge summaries",
    buttonLabel: "View letters",
    buttonUrl: "/patients/1/letters"
  },
  render: () => <SimpleGrid cols={{
    base: 1,
    sm: 2
  }} spacing="lg">
      <ActionCard icon={<IconMail />} title="Clinical letters" subtitle="View referral letters, clinic letters, and discharge summaries" buttonLabel="View letters" buttonUrl="/patients/1/letters" />
      <ActionCard icon={<IconMessage />} title="Messaging" subtitle="Send and receive secure messages with the care team" buttonLabel="Open messages" buttonUrl="/patients/1/messages" />
      <ActionCard icon={<IconBook />} title="Clinical notes" subtitle="View consultation notes, observations, and clinical records" buttonLabel="View notes" buttonUrl="/patients/1/notes" />
      <ActionCard icon={<IconCalendarWeek />} title="Appointments" subtitle="View upcoming and past appointment history" buttonLabel="View appointments" buttonUrl="/patients/1/appointments" />
    </SimpleGrid>
}`,...b.parameters?.docs?.source},description:{story:`Patient page

The four action cards shown on the patient detail page, arranged
in a responsive 2-column grid matching the live layout.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as DarkMode,m as Default,h as Destructive,g as DisabledWithReason,y as FullWidth,v as LongContent,b as PatientPage,_ as WithoutSubtitle,S as __namedExportsOrder,p as default};