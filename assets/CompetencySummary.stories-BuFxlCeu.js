import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{x as t}from"./Form-BQWpUpVW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./BaseCard-C_VuKVYL.js";import{n as a,t as o}from"./Divider-BkZfNhmn.js";import{n as s,t as c}from"./Stack-D_d3SZwt.js";import{n as l,r as u}from"./iframe-gh_IKeZo.js";import{Ct as d,n as f}from"./appIcons-BpiHpu4d.js";import{t as p}from"./Heading-CiSQlEyi.js";import{t as m}from"./BodyTextBold-CxqNt9uz.js";import{n as h,t as g}from"./StateMessage-BtkL8y7a.js";import{a as _,n as v}from"./variants-US1Dcm7T.js";import{a as y,f as b,h as x,r as S}from"./fixtures-DDuwM3Po.js";import{n as C,t as w}from"./CompetencyRow-DGxT0vnK.js";function T(e,t){let n=new Map;for(let r of t){let t=e?.frameworkOf(r.id)?.name??`Other records`;n.set(t,[...n.get(t)??[],r])}return[...n].map(([e,t])=>({name:e,competencies:t}))}function E({catalogue:e,competencies:t,onSelect:n,title:r=`Competencies`,showLogbookCount:a=!0}){if(t.length===0)return(0,D.jsx)(g,{colour:`update`,icon:(0,D.jsx)(d,{}),title:`No competencies yet`,description:`Competencies appear here once you have a sign-off, a logbook entry or a certificate against one.`});let s=T(e,t);return(0,D.jsx)(i,{"data-testid":`competency-summary`,children:(0,D.jsxs)(c,{gap:`md`,children:[(0,D.jsx)(p,{children:r}),s.map(e=>(0,D.jsxs)(c,{gap:`xs`,children:[(0,D.jsx)(m,{children:e.name}),e.competencies.map((e,t)=>(0,D.jsxs)(c,{gap:`xs`,children:[t>0&&(0,D.jsx)(o,{}),(0,D.jsx)(w,{competency:e,onSelect:n,showLogbookCount:a})]},`${e.id}:${e.scope?.id??``}`))]},e.name))]})})}var D;function O(){return(O=e((()=>{s(),r(),h(),f(),t(),a(),C(),D=n(),E.__docgenInfo={description:`CompetencySummary

Renders the competency rows in a card, or an empty state when the
passport holds nothing yet.`,methods:[],displayName:`CompetencySummary`,props:{catalogue:{required:!0,tsType:{name:`union`,raw:`FrameworkCatalogue | null`,elements:[{name:`FrameworkCatalogue`},{name:`null`}]},description:"The frameworks Quill holds, from `useFrameworkCatalogue`, to group\nthe rows by. Null while they load, when every row is under\n`NO_FRAMEWORK_GROUP`."},competencies:{required:!0,tsType:{name:`Array`,elements:[{name:`CompetencyState`}],raw:`CompetencyState[]`},description:`Every competency the passport holds evidence for`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(competencyId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`competencyId`}],return:{name:`void`}}},description:`Called when a competency is chosen`},title:{required:!1,tsType:{name:`string`},description:`Optional card heading`,defaultValue:{value:`"Competencies"`,computed:!1}},showLogbookCount:{required:!1,tsType:{name:`boolean`},description:"Whether each row reports its logbook entry count. Off where the\nlist is about sign-offs - see `CompetencyRow`.",defaultValue:{value:`true`,computed:!1}}}}})))()}var k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{s(),O(),b(),_(),u(),k=n(),{fn:A}=__STORYBOOK_MODULE_TEST__,j={title:`Passport/Competency summary`,tags:[`!dev`],component:E,parameters:{layout:`padded`}},M={args:{competencies:y,onSelect:void 0},render:e=>(0,k.jsxs)(c,{gap:`sm`,children:[(0,k.jsx)(E,{...e}),(0,k.jsx)(v,{children:`Read-only. Rows have no hover state, because nothing happens if you click one.`})]})},N={args:{catalogue:l,competencies:y,onSelect:A()},render:e=>(0,k.jsxs)(c,{gap:`sm`,children:[(0,k.jsx)(E,{...e}),(0,k.jsx)(v,{children:`Rows open the competency. Hover one to see it respond; clicks appear in the Actions panel.`})]})},P={args:{competencies:[]}},F={args:{competencies:[S,x],onSelect:void 0}},I=[`Default`,`Selectable`,`Empty`,`TwoScopesOfOneCompetency`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    competencies,
    onSelect: undefined
  },
  render: args => <Stack gap="sm">
      <CompetencySummary {...args} />
      <StoryNote>
        Read-only. Rows have no hover state, because nothing happens if you
        click one.
      </StoryNote>
    </Stack>
}`,...M.parameters?.docs?.source},description:{story:'Without `onSelect` the rows are inert: plain blocks with no hover, no\npointer cursor and nothing to click.\n\n`onSelect` is set to `undefined` explicitly rather than omitted.\n`argTypesRegex: "^on[A-Z].*"` in `.storybook/preview.tsx` auto-fills\nevery unset `on*` prop with a spy, so omitting it would hand the\ncomponent a function and render every row as a button - making this\nstory indistinguishable from `Selectable`.',...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    catalogue: TEST_FRAMEWORK_CATALOGUE,
    competencies,
    onSelect: fn()
  },
  render: args => <Stack gap="sm">
      <CompetencySummary {...args} />
      <StoryNote>
        Rows open the competency. Hover one to see it respond; clicks appear in
        the Actions panel.
      </StoryNote>
    </Stack>
}`,...N.parameters?.docs?.source},description:{story:"With `onSelect` each row becomes a button that opens the competency.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    competencies: []
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    competencies: [breastCompetency, lungCompetency],
    onSelect: undefined
  }
}`,...F.parameters?.docs?.source},description:{story:`A competency signed off one scope at a time has a row for each scope,
at its own level. Neither replaces the other.`,...F.parameters?.docs?.description}}}})))()}L();export{M as Default,P as Empty,N as Selectable,F as TwoScopesOfOneCompetency,I as __namedExportsOrder,j as default};