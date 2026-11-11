import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./SimpleGrid-Cw3N2DUw.js";import{S as r}from"./Form-BQWpUpVW.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./Stack-D_d3SZwt.js";import{n as s,t as c}from"./StatCard-DwwpHa8s.js";import{t as l}from"./page-header-DDmZahL6.js";import{n as u,t as d}from"./PlatformRoleBadge-Cb-UfXPa.js";function f(){return(f=e((()=>{s()})))()}function p({platformRole:e,clinicalServicesEnabled:t=!0,showPatients:i=!0,usersLoading:a=!1,patientsLoading:s=!1,organisationsLoading:l=!1,existingUsers:u=[],patientCount:f=0,organisationCount:p=0}){return(0,m.jsxs)(o,{gap:`lg`,children:[(0,m.jsx)(r,{title:`Administration`,action:(0,m.jsx)(d,{platformRole:e}),actionAlign:`center`}),(0,m.jsxs)(n,{cols:{base:1,sm:2},children:[(0,m.jsx)(c,{title:`Total users`,value:u.length,loading:a}),t&&i&&(0,m.jsx)(c,{title:`Total patients`,value:f,loading:s}),(0,m.jsx)(c,{title:`Total organisations`,value:p,loading:l})]})]})}var m;function h(){return(h=e((()=>{t(),a(),f(),l(),u(),m=i(),p.__docgenInfo={description:``,methods:[],displayName:`Admin`,props:{platformRole:{required:!0,tsType:{name:`union`,raw:`PlatformRole | undefined`,elements:[{name:`PlatformRole`},{name:`undefined`}]},description:`Whether the current user operates Quill itself`},clinicalServicesEnabled:{required:!1,tsType:{name:`boolean`},description:`Whether clinical services (FHIR/EHRbase) are enabled`,defaultValue:{value:`true`,computed:!1}},showPatients:{required:!1,tsType:{name:`boolean`},description:`Whether the viewer administers patients. A teaching admin reaches
this page through \`manage_teaching\` and has no patient pages, so the
patient count is not theirs to see.`,defaultValue:{value:`true`,computed:!1}},usersLoading:{required:!1,tsType:{name:`boolean`},description:`Loading state for users statistics`,defaultValue:{value:`false`,computed:!1}},patientsLoading:{required:!1,tsType:{name:`boolean`},description:`Loading state for patients statistics`,defaultValue:{value:`false`,computed:!1}},organisationsLoading:{required:!1,tsType:{name:`boolean`},description:`Loading state for organisations statistics`,defaultValue:{value:`false`,computed:!1}},existingUsers:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; username: string; email: string }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`username`,value:{name:`string`,required:!0}},{key:`email`,value:{name:`string`,required:!0}}]}}],raw:`Array<{ id: string; username: string; email: string }>`},description:`Existing users for statistics`,defaultValue:{value:`[]`,computed:!1}},patientCount:{required:!1,tsType:{name:`number`},description:`How many patients the viewer may see. A number, not the patients:
the page has no use for their names, so it never holds them.`,defaultValue:{value:`0`,computed:!1}},organisationCount:{required:!1,tsType:{name:`number`},description:`Number of organisations`,defaultValue:{value:`0`,computed:!1}}}}})))()}var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{h(),g={title:`Admin/Admin`,component:p,parameters:{layout:`padded`}},_=[{id:`1`,username:`johndoe`,email:`john.doe@hospital.com`},{id:`2`,username:`janedoe`,email:`jane.doe@hospital.com`},{id:`3`,username:`drsmith`,email:`dr.smith@hospital.com`},{id:`4`,username:`nursejones`,email:`nurse.jones@hospital.com`},{id:`5`,username:`adminuser`,email:`admin.user@hospital.com`}],v={args:{platformRole:`superadmin`,existingUsers:_,patientCount:5}},y={args:{platformRole:`superadmin`,usersLoading:!0,patientsLoading:!0,organisationsLoading:!0,existingUsers:_,patientCount:5}},b={args:{platformRole:`superadmin`,usersLoading:!1,patientsLoading:!0,existingUsers:_,patientCount:0}},x={args:{platformRole:`standard`,showPatients:!1,existingUsers:_,patientCount:5,organisationCount:1}},S={args:{...v.args,patientsLoading:!0},globals:{colorScheme:`dark`}},C=[`SuperAdminView`,`LoadingState`,`PatientsLoadingState`,`TeachingAdminView`,`DarkMode`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    platformRole: "superadmin",
    existingUsers: sampleUsers,
    patientCount: 5
  }
}`,...v.parameters?.docs?.source},description:{story:`Super Admin View

Shows the admin interface with full superadmin permissions.
Superadmins can see and access the "Change System Permissions" section.
Displays statistics for 5 users and 5 patients.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    platformRole: "superadmin",
    usersLoading: true,
    patientsLoading: true,
    organisationsLoading: true,
    existingUsers: sampleUsers,
    patientCount: 5
  }
}`,...y.parameters?.docs?.source},description:{story:`Loading State

Shows the admin interface while statistics are loading.
The Total Users, Total Patients, and Total Organisations counts show skeleton loaders.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    platformRole: "superadmin",
    usersLoading: false,
    patientsLoading: true,
    existingUsers: sampleUsers,
    patientCount: 0
  }
}`,...b.parameters?.docs?.source},description:{story:`Patients Loading State

Shows the admin interface while FHIR is initializing.
Users loaded immediately, but patients still loading.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    platformRole: "standard",
    showPatients: false,
    existingUsers: sampleUsers,
    patientCount: 5,
    organisationCount: 1
  }
}`,...x.parameters?.docs?.source},description:{story:`Teaching Admin View

A teaching admin reaches Admin through \`manage_teaching\` and has no
patient pages, so the patient count is left out.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...SuperAdminView.args,
    patientsLoading: true
  },
  globals: {
    colorScheme: "dark"
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as DarkMode,y as LoadingState,b as PatientsLoadingState,v as SuperAdminView,x as TeachingAdminView,C as __namedExportsOrder,g as default};