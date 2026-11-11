import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./BaseCard-C_VuKVYL.js";import{n as i,t as a}from"./Container-DJA6w9O_.js";import{t as o}from"./ActiveStatusBadge-DKNgalCF.js";import{a as s,n as c}from"./variants-US1Dcm7T.js";import{t as l}from"./badge-9yvUQwfl.js";import{n as u,t as d}from"./DataTable-CrqFwTVv.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{i(),l(),n(),s(),u(),f=t(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Tables/Data table`,component:d,parameters:{layout:`padded`},decorators:[e=>(0,f.jsx)(a,{size:`lg`,children:(0,f.jsx)(e,{})})]},h=[{id:1,username:`alice.smith`,email:`alice@example.com`},{id:2,username:`bob.jones`,email:`bob@example.com`},{id:3,username:`charlie.brown`,email:`charlie@example.com`},{id:4,username:`diana.prince`,email:`diana@example.com`}],g=[{header:`Username`,render:e=>e.username},{header:`Email`,render:e=>e.email},{header:`User ID`,render:e=>String(e.id)}],_={args:{data:h,columns:g,onRowClick:p(),getRowKey:e=>e.id}},v={args:{data:[{id:`p-001`,name:`John Doe`,birthDate:`1985-03-15`,gender:`Male`,status:`active`},{id:`p-002`,name:`Jane Smith`,birthDate:`1992-07-22`,gender:`Female`,status:`active`},{id:`p-003`,name:`Robert Johnson`,birthDate:`1978-11-30`,gender:`Male`,status:`inactive`}],columns:[{header:`Name`,render:e=>e.name},{header:`Birth date`,render:e=>e.birthDate},{header:`Gender`,render:e=>e.gender},{header:`Patient ID`,render:e=>e.id},{header:`Status`,render:e=>(0,f.jsx)(o,{active:e.status===`active`})}],onRowClick:p(),getRowKey:e=>e.id}},y={args:{data:Array.from({length:20},(e,t)=>({id:t+1,username:`user${t+1}`,email:`user${t+1}@example.com`})),columns:g,onRowClick:p(),getRowKey:e=>e.id}},b={args:{data:[{id:1,username:`superlongusernamethatjustkeepsgoingandgoingwithoutanybreaks`,email:`a.very.long.email.address.that.goes.on.and.on@extremely-long-domain-name-example.co.uk`},{id:2,username:`normaluser`,email:`normal@example.com`},{id:3,username:`Dr. Bartholomew Featherstonehaugh-Worthington III`,email:`bartholomew.featherstonehaugh-worthington@prestigious-medical-institution.nhs.uk`}],columns:g,onRowClick:p(),getRowKey:e=>e.id}},x={args:{data:h,columns:[{header:`Username`,render:e=>e.username,accessor:e=>e.username},{header:`Email`,render:e=>e.email,accessor:e=>e.email},{header:`Authorised here`,width:`140px`,render:e=>String(e.id),accessor:e=>e.id}],getRowKey:e=>e.id},render:e=>(0,f.jsx)(r,{children:(0,f.jsx)(d,{...e})})},S=[{id:1,name:`Alice Smith`,nhsNumber:`943 476 5919`,ward:`Ward 12`,consultant:`Dr Okafor`,admitted:`2026-09-28`,expectedDischarge:`2026-10-04`,status:`active`},{id:2,name:`Bob Jones`,nhsNumber:`943 476 5920`,ward:`Ward 7`,consultant:`Dr Reilly`,admitted:`2026-09-30`,expectedDischarge:`2026-10-02`,status:`inactive`},{id:3,name:`Charlie Brown`,nhsNumber:`943 476 5921`,ward:`Ward 12`,consultant:`Dr Diallo`,admitted:`2026-10-01`,expectedDischarge:`2026-10-06`,status:`active`}],C=[{header:`Name`,render:e=>e.name,accessor:e=>e.name},{header:`NHS number`,render:e=>e.nhsNumber},{header:`Ward`,render:e=>e.ward,accessor:e=>e.ward},{header:`Consultant`,render:e=>e.consultant},{header:`Admitted`,render:e=>e.admitted,accessor:e=>e.admitted},{header:`Expected discharge`,render:e=>e.expectedDischarge},{header:`Status`,render:e=>(0,f.jsx)(o,{active:e.status===`active`})}],w=C.filter(e=>[`Name`,`Ward`,`Status`].includes(e.header)),T={render:()=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(a,{size:640,px:0,children:(0,f.jsx)(d,{data:S,columns:C,onRowClick:p(),getRowKey:e=>e.id})}),(0,f.jsx)(c,{mt:`xs`,children:`Container constrained to 40rem: seven columns do not fit, so cards`})]})},E={render:()=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(a,{size:640,px:0,children:(0,f.jsx)(d,{data:S,columns:w,onRowClick:p(),getRowKey:e=>e.id})}),(0,f.jsx)(c,{mt:`xs`,children:`The same 40rem: three columns fit, so still a table`})]})},D={render:()=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(d,{data:S,columns:C,onRowClick:p(),getRowKey:e=>e.id}),(0,f.jsx)(c,{mt:`xs`,children:`Shrink the canvas below about 56rem to see the switch to cards`})]})},O={args:{data:[],columns:g,onRowClick:p(),getRowKey:e=>e.id,error:`Failed to load users from the server`}},k={args:{data:[],columns:g,onRowClick:p(),getRowKey:e=>e.id,loading:!0}},A={..._,globals:{colorScheme:`dark`}},j={...k,globals:{colorScheme:`dark`}},M=[`Default`,`WithPatientData`,`ManyRows`,`LongText`,`NarrowHeaderInACard`,`SevenColumnsInANarrowSpace`,`ThreeColumnsInANarrowSpace`,`SevenColumnsAtFullWidth`,`Error`,`Loading`,`DarkMode`,`DarkModeLoading`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    onRowClick: fn(),
    getRowKey: user => user.id
  }
}`,..._.parameters?.docs?.source},description:{story:`Default DataTable

Shows the table with user data and basic columns.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "p-001",
      name: "John Doe",
      birthDate: "1985-03-15",
      gender: "Male",
      status: "active"
    }, {
      id: "p-002",
      name: "Jane Smith",
      birthDate: "1992-07-22",
      gender: "Female",
      status: "active"
    }, {
      id: "p-003",
      name: "Robert Johnson",
      birthDate: "1978-11-30",
      gender: "Male",
      status: "inactive"
    }],
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
    onRowClick: fn(),
    getRowKey: patient => patient.id
  }
}`,...v.parameters?.docs?.source},description:{story:`With Patient Data

Demonstrates the table with patient data including a status badge column.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: Array.from({
      length: 20
    }, (_, i) => ({
      id: i + 1,
      username: \`user\${i + 1}\`,
      email: \`user\${i + 1}@example.com\`
    })),
    columns: userColumns,
    onRowClick: fn(),
    getRowKey: user => user.id
  }
}`,...y.parameters?.docs?.source},description:{story:`Many Rows

Shows the table with more data to demonstrate scrolling behavior.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: 1,
      username: "superlongusernamethatjustkeepsgoingandgoingwithoutanybreaks",
      email: "a.very.long.email.address.that.goes.on.and.on@extremely-long-domain-name-example.co.uk"
    }, {
      id: 2,
      username: "normaluser",
      email: "normal@example.com"
    }, {
      id: 3,
      username: "Dr. Bartholomew Featherstonehaugh-Worthington III",
      email: "bartholomew.featherstonehaugh-worthington@prestigious-medical-institution.nhs.uk"
    }],
    columns: userColumns,
    onRowClick: fn(),
    getRowKey: user => user.id
  }
}`,...b.parameters?.docs?.source},description:{story:`Long Text

Tests how the table handles cells with very long text content.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: [{
      header: "Username",
      render: user => user.username,
      accessor: user => user.username
    }, {
      header: "Email",
      render: user => user.email,
      accessor: user => user.email
    }, {
      header: "Authorised here",
      width: "140px",
      render: user => String(user.id),
      accessor: user => user.id
    }],
    getRowKey: user => user.id
  },
  render: args => <BaseCard>
      <DataTable {...args} />
    </BaseCard>
}`,...x.parameters?.docs?.source},description:{story:`Narrow header in a card

A table in a BaseCard inherits the card's "break anywhere" wrapping. A
header in a column narrower than its words wraps between them and
never inside one: the column grows to fit its longest word.`,...x.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div>
        <Container size={40 * 16} px={0}>
          <DataTable data={admissions} columns={sevenColumns} onRowClick={fn()} getRowKey={a => a.id} />
        </Container>
        <StoryNote mt="xs">
          Container constrained to 40rem: seven columns do not fit, so cards
        </StoryNote>
      </div>
}`,...T.parameters?.docs?.source},description:{story:`Seven columns in a 40rem space. Seven columns need 56rem at the
default 8rem each, so the table draws cards. Widen the Storybook
canvas and nothing changes: the container, not the screen, is what is
measured.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div>
        <Container size={40 * 16} px={0}>
          <DataTable data={admissions} columns={threeColumns} onRowClick={fn()} getRowKey={a => a.id} />
        </Container>
        <StoryNote mt="xs">
          The same 40rem: three columns fit, so still a table
        </StoryNote>
      </div>
}`,...E.parameters?.docs?.source},description:{story:`Three columns in the same 40rem space. Three columns need 24rem, which
fits, so this stays a table where the one above became cards.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <DataTable data={admissions} columns={sevenColumns} onRowClick={fn()} getRowKey={a => a.id} />
      <StoryNote mt="xs">
        Shrink the canvas below about 56rem to see the switch to cards
      </StoryNote>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Seven columns at the full width of the page container. Drag the
Storybook canvas narrower than about 56rem and it switches to cards;
widen it past 58rem and it comes back, the 2rem margin stopping it
flickering at the edge.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns,
    onRowClick: fn(),
    getRowKey: user => user.id,
    error: "Failed to load users from the server"
  }
}`,...O.parameters?.docs?.source},description:{story:`Error State

Shows an error alert when data fails to load.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns,
    onRowClick: fn(),
    getRowKey: user => user.id,
    loading: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Loading State

Shows skeleton loaders while data is being fetched.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...Loading,
  globals: {
    colorScheme: "dark"
  }
}`,...j.parameters?.docs?.source}}}})))()}N();export{A as DarkMode,j as DarkModeLoading,_ as Default,O as Error,k as Loading,b as LongText,y as ManyRows,x as NarrowHeaderInACard,D as SevenColumnsAtFullWidth,T as SevenColumnsInANarrowSpace,E as ThreeColumnsInANarrowSpace,v as WithPatientData,M as __namedExportsOrder,m as default};