import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Box-BssAA6js.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./BaseCard-C_VuKVYL.js";import{n as o,t as s}from"./MemberLookup-CzFRXsns.js";import{a as c,n as l}from"./variants-US1Dcm7T.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),i(),c(),o(),u=r(),d={id:9,username:`a.patel`,full_name:`Anita Patel`,competencies:[`assess_clinician_passport`]},f=e=>async()=>e,p={title:`Form/Member lookup`,component:s,parameters:{layout:`padded`},args:{placeName:`Oncology`,onLookUp:f({status:`found`,user:d}),onFound:()=>{},onCreate:()=>{}},decorators:[e=>(0,u.jsx)(n,{maw:640,children:(0,u.jsx)(a,{children:(0,u.jsx)(e,{})})})]},m={render:e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{...e}),(0,u.jsx)(l,{children:`Type a whole username or address and press Find.`})]})},h={args:{onLookUp:f({status:`already_member`,user:d})}},g={args:{onLookUp:f({status:`not_addable`,user:null})}},_={args:{onLookUp:f({status:`not_found`,user:null})}},v={args:{onLookUp:f({status:`not_found`,user:null}),onCreate:void 0}},y={..._,globals:{colorScheme:`dark`}},b=[`Found`,`AlreadyAMember`,`NotAddable`,`NotFound`,`NotFoundWithoutCreate`,`DarkMode`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <MemberLookup {...args} />
      <StoryNote>Type a whole username or address and press Find.</StoryNote>
    </>
}`,...m.parameters?.docs?.source},description:{story:`Somebody with an account elsewhere, who may be added.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onLookUp: answering({
      status: "already_member",
      user: person
    })
  }
}`,...h.parameters?.docs?.source},description:{story:`Somebody who is here already.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onLookUp: answering({
      status: "not_addable",
      user: null
    })
  }
}`,...g.parameters?.docs?.source},description:{story:`An account the viewer may not add: nothing about it is named.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    onLookUp: answering({
      status: "not_found",
      user: null
    })
  }
}`,..._.parameters?.docs?.source},description:{story:`Nobody has the address, so creating them is offered.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onLookUp: answering({
      status: "not_found",
      user: null
    }),
    // Set rather than left out: Storybook fills an unset \`on*\` prop
    // with a spy, which would bring the button back.
    onCreate: undefined
  }
}`,...v.parameters?.docs?.source},description:{story:`Nobody has the address, and the viewer may not create accounts.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...NotFound,
  globals: {
    colorScheme: "dark"
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{h as AlreadyAMember,y as DarkMode,m as Found,g as NotAddable,_ as NotFound,v as NotFoundWithoutCreate,b as __namedExportsOrder,p as default};