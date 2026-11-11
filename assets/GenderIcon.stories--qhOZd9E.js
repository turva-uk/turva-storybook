import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Group-DSt3d3i4.js";import{n as i,t as a}from"./Skeleton-MhOxmKho.js";import{n as o,t as s}from"./Stack-D_d3SZwt.js";import{_t as c,ht as l,n as u,yt as d}from"./appIcons-BpiHpu4d.js";function f({gender:e,size:t=`lg`,color:n=`var(--mantine-color-text)`,loading:r}){let i=m[t];if(r)return(0,p.jsx)(a,{circle:!0,height:i,width:i});if(!e||e===`unspecified`)return(0,p.jsx)(d,{size:i,color:n});let o=e.toLowerCase();return o===`male`?(0,p.jsx)(l,{size:i,color:n}):o===`female`?(0,p.jsx)(c,{size:i,color:n}):(0,p.jsx)(d,{size:i,color:n})}var p,m;function h(){return(h=e((()=>{u(),i(),p=t(),m={sm:24,md:29,lg:38},f.__docgenInfo={description:`GenderIcon

Displays appropriate icon for gender value.

@example
// Male icon
<GenderIcon gender="male" />

@example
// With custom size and colour
<GenderIcon gender="female" size="lg" color="primary" />

@example
// Unspecified
<GenderIcon gender="unspecified" />

@example
// Loading state
<GenderIcon gender="male" loading />`,methods:[],displayName:`GenderIcon`,props:{gender:{required:!0,tsType:{name:`union`,raw:`GenderValue | undefined | null`,elements:[{name:`GenderValue`},{name:`undefined`},{name:`null`}]},description:`Gender value (male, female, unspecified)`},size:{required:!1,tsType:{name:`union`,raw:`keyof typeof SIZES`,elements:[{name:`literal`,value:`sm`},{name:`literal`,value:`md`},{name:`literal`,value:`lg`}]},description:`Icon size`,defaultValue:{value:`"lg"`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:`Icon colour`,defaultValue:{value:`"var(--mantine-color-text)"`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Loading state`}}}})))()}var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),o(),h(),g=t(),_={title:`Gender/Gender icon`,component:f,parameters:{layout:`padded`},argTypes:{gender:{control:`select`,options:[`male`,`female`,`unspecified`,null],description:`Gender value`}}},v={args:{gender:`male`}},y={args:{gender:`female`}},b={args:{gender:`unspecified`}},x={render:()=>(0,g.jsx)(s,{gap:`lg`,children:[`sm`,`md`,`lg`].map(e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(r,{gap:`lg`,children:[`male`,`female`,`unspecified`].map(t=>(0,g.jsx)(f,{gender:t,size:e},t))}),(0,g.jsx)(`div`,{style:{fontSize:`0.875rem`,marginTop:`0.5rem`},children:e===`lg`?`${e} (default)`:e})]},e))})},S={args:{gender:`male`,loading:!0}},C={...v,globals:{colorScheme:`dark`}},w=[`Male`,`Female`,`Unspecified`,`Sizes`,`Loading`,`DarkMode`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    gender: "male"
  }
}`,...v.parameters?.docs?.source},description:{story:`Male icon`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    gender: "female"
  }
}`,...y.parameters?.docs?.source},description:{story:`Female icon`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    gender: "unspecified"
  }
}`,...b.parameters?.docs?.source},description:{story:`Unspecified icon`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="lg">
      {(["sm", "md", "lg"] as const).map(size => <div key={size}>
          <Group gap="lg">
            {(["male", "female", "unspecified"] as const).map(gender => <GenderIcon key={gender} gender={gender} size={size} />)}
          </Group>
          <div style={{
        fontSize: "0.875rem",
        marginTop: "0.5rem"
      }}>
            {size === "lg" ? \`\${size} (default)\` : size}
          </div>
        </div>)}
    </Stack>
}`,...x.parameters?.docs?.source},description:{story:`All icons at small, medium, and large sizes.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    gender: "male",
    loading: true
  }
}`,...S.parameters?.docs?.source},description:{story:`Loading state`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Male,
  globals: {
    colorScheme: "dark"
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as DarkMode,y as Female,S as Loading,v as Male,x as Sizes,b as Unspecified,w as __namedExportsOrder,_ as default};