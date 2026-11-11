import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Container-DJA6w9O_.js";import{t as i}from"./ActiveStatusBadge-DKNgalCF.js";import{n as a,t as o}from"./EllipsisMenu-hBkojH2-.js";import{t as s}from"./badge-9yvUQwfl.js";import{n as c,r as l,t as u}from"./DataCard-xU-NoYiM.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),s(),l(),a(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Tables/Data card`,component:u,parameters:{layout:`padded`},decorators:[e=>(0,d.jsx)(r,{size:`sm`,ml:0,children:(0,d.jsx)(e,{})})]},m=[{header:`Username`,render:e=>e.username},{header:`Email`,render:e=>e.email},{header:`User ID`,render:e=>String(e.id)}],h={args:{row:{id:1,username:`alice.smith`,email:`alice@example.com`},columns:m,onClick:f()}},g={args:{row:{id:`p-001`,name:`John Doe`,birthDate:`1985-03-15`,gender:`Male`,status:`active`},columns:[{header:`Name`,render:e=>e.name},{header:`Birth date`,render:e=>e.birthDate},{header:`Gender`,render:e=>e.gender},{header:`Patient ID`,render:e=>e.id},{header:`Status`,render:e=>(0,d.jsx)(i,{active:e.status===`active`})}],onClick:f()}},_={args:{row:{id:1,username:`alice.smith`,email:`alice.very-long-email-address-that-goes-on-and-on-and-on-and-keeps-going@extremely-long-domain-name-example.co.uk`},columns:[{header:`Username`,render:e=>e.username},{header:`Email`,render:e=>e.email},{header:`Notes`,render:()=>`This is a very long piece of text that might appear in a cell. It keeps going and going to test how the card layout handles overflow and wrapping behaviour when the content is much longer than expected.`},{header:`Reference`,render:()=>`Pneumonoultramicroscopicsilicovolcanoconiosis-with-additional-hyphenated-words-that-make-it-even-longer`}],onClick:f()}},v={args:{...h.args,footer:`Version mismatch: the module was built for an older schema.`}},y={args:{row:{id:1,username:`alice.smith`,email:`alice@example.com`},columns:[...m,{header:``,render:()=>(0,d.jsx)(o,{"aria-label":`Actions for alice.smith`,items:[{label:`Remove`,onClick:f()}]})}],onClick:f()}},b={args:{row:{id:0,username:``,email:``},columns:m,onClick:f(),loading:!0}},x={render:()=>(0,d.jsx)(c,{})},S={...h,globals:{colorScheme:`dark`}},C={...b,globals:{colorScheme:`dark`}},w=[`Default`,`WithPatientData`,`LongText`,`WithFooter`,`WithRowAction`,`Loading`,`Skeleton`,`DarkMode`,`DarkModeLoading`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    row: {
      id: 1,
      username: "alice.smith",
      email: "alice@example.com"
    },
    columns: userColumns,
    onClick: fn()
  }
}`,...h.parameters?.docs?.source},description:{story:`Default DataCard

Shows a single card with user data.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    row: {
      id: "p-001",
      name: "John Doe",
      birthDate: "1985-03-15",
      gender: "Male",
      status: "active"
    },
    columns: [{
      header: "Name",
      render: patient => patient.name
    }, {
      header: "Birth date",
      render: patient => patient.birthDate
    }, {
      header: "Gender",
      render: patient => patient.gender
    }, {
      header: "Patient ID",
      render: patient => patient.id
    }, {
      header: "Status",
      render: patient => <ActiveStatusBadge active={patient.status === "active"} />
    }],
    onClick: fn()
  }
}`,...g.parameters?.docs?.source},description:{story:`With patient data

Demonstrates the card with patient data including a status badge.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    row: {
      id: 1,
      username: "alice.smith",
      email: "alice.very-long-email-address-that-goes-on-and-on-and-on-and-keeps-going@extremely-long-domain-name-example.co.uk"
    },
    columns: [{
      header: "Username",
      render: user => user.username
    }, {
      header: "Email",
      render: user => user.email
    }, {
      header: "Notes",
      render: () => "This is a very long piece of text that might appear in a cell. It keeps going and going to test how the card layout handles overflow and wrapping behaviour when the content is much longer than expected."
    }, {
      header: "Reference",
      render: () => "Pneumonoultramicroscopicsilicovolcanoconiosis-with-additional-hyphenated-words-that-make-it-even-longer"
    }],
    onClick: fn()
  }
}`,..._.parameters?.docs?.source},description:{story:`Long text

Shows how the card handles very long content in a cell.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    footer: "Version mismatch: the module was built for an older schema."
  }
}`,...v.parameters?.docs?.source},description:{story:`Loading

Shows skeleton placeholders while data is being fetched.
A footer beneath the fields: how \`DataTableWithResults\` shows a
row's result detail on a phone.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    row: {
      id: 1,
      username: "alice.smith",
      email: "alice@example.com"
    },
    columns: [...userColumns, {
      header: "",
      render: () => <EllipsisMenu aria-label="Actions for alice.smith" items={[{
        label: "Remove",
        onClick: fn()
      }]} />
    }],
    onClick: fn()
  }
}`,...y.parameters?.docs?.source},description:{story:`A last column with an empty header, as tables give their row menu,
drawn as the card's action at its top right with no label.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    row: {
      id: 0,
      username: "",
      email: ""
    },
    columns: userColumns,
    onClick: fn(),
    loading: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <DataCardSkeleton />
}`,...x.parameters?.docs?.source},description:{story:`The skeleton alone, as the tables show it while their rows load.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Loading,
  globals: {
    colorScheme: "dark"
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{S as DarkMode,C as DarkModeLoading,h as Default,b as Loading,_ as LongText,x as Skeleton,v as WithFooter,g as WithPatientData,y as WithRowAction,w as __namedExportsOrder,p as default};