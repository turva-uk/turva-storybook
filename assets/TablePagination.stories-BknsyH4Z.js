import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,t as r}from"./TablePagination-BhhWxGia.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{a,i as o,r as s}from"./variants-US1Dcm7T.js";function c(){let[e,t]=(0,l.useState)(1),[n,i]=(0,l.useState)(10),a=Math.ceil(95/n);return(0,u.jsxs)(r,{children:[(0,u.jsx)(r.Nav,{total:a,value:e,onChange:t}),(0,u.jsx)(r.PageSize,{value:n,onChange:e=>{i(e),t(1)}})]})}var l,u,d,f,p,m,h;function g(){return(g=e((()=>{l=t(),a(),n(),u=i(),d={title:`Tables/Table pagination`,component:r,parameters:{layout:`padded`}},f={render:()=>(0,u.jsx)(c,{})},p={render:()=>(0,u.jsxs)(o,{children:[(0,u.jsx)(s,{label:`Nav + PageSize`,horizontal:!1,children:(0,u.jsxs)(r,{children:[(0,u.jsx)(r.Nav,{total:10,value:3,onChange:()=>{}}),(0,u.jsx)(r.PageSize,{value:10,onChange:()=>{}})]})}),(0,u.jsx)(s,{label:`Nav only`,horizontal:!1,children:(0,u.jsx)(r,{children:(0,u.jsx)(r.Nav,{total:5,value:1,onChange:()=>{}})})}),(0,u.jsx)(s,{label:`PageSize only`,horizontal:!1,children:(0,u.jsx)(r,{children:(0,u.jsx)(r.PageSize,{value:20,onChange:()=>{}})})}),(0,u.jsx)(s,{label:`Nav hidden (1 page)`,horizontal:!1,children:(0,u.jsxs)(r,{children:[(0,u.jsx)(r.Nav,{total:1,value:1,onChange:()=>{}}),(0,u.jsx)(r.PageSize,{value:10,onChange:()=>{}})]})})]})},m={render:()=>(0,u.jsxs)(o,{children:[(0,u.jsx)(s,{label:`Nav + PageSize`,horizontal:!1,children:(0,u.jsxs)(r,{children:[(0,u.jsx)(r.Nav,{total:10,value:5,onChange:()=>{}}),(0,u.jsx)(r.PageSize,{value:10,onChange:()=>{}})]})}),(0,u.jsx)(s,{label:`Nav only`,horizontal:!1,children:(0,u.jsx)(r,{children:(0,u.jsx)(r.Nav,{total:5,value:1,onChange:()=>{}})})})]}),globals:{colorScheme:`dark`}},h=[`Default`,`AllStates`,`DarkMode`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="Nav + PageSize" horizontal={false}>
        <TablePagination>
          <TablePagination.Nav total={10} value={3} onChange={() => {}} />
          <TablePagination.PageSize value={10} onChange={() => {}} />
        </TablePagination>
      </VariantRow>
      <VariantRow label="Nav only" horizontal={false}>
        <TablePagination>
          <TablePagination.Nav total={5} value={1} onChange={() => {}} />
        </TablePagination>
      </VariantRow>
      <VariantRow label="PageSize only" horizontal={false}>
        <TablePagination>
          <TablePagination.PageSize value={20} onChange={() => {}} />
        </TablePagination>
      </VariantRow>
      <VariantRow label="Nav hidden (1 page)" horizontal={false}>
        <TablePagination>
          <TablePagination.Nav total={1} value={1} onChange={() => {}} />
          <TablePagination.PageSize value={10} onChange={() => {}} />
        </TablePagination>
      </VariantRow>
    </VariantStack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <VariantStack>
      <VariantRow label="Nav + PageSize" horizontal={false}>
        <TablePagination>
          <TablePagination.Nav total={10} value={5} onChange={() => {}} />
          <TablePagination.PageSize value={10} onChange={() => {}} />
        </TablePagination>
      </VariantRow>
      <VariantRow label="Nav only" horizontal={false}>
        <TablePagination>
          <TablePagination.Nav total={5} value={1} onChange={() => {}} />
        </TablePagination>
      </VariantRow>
    </VariantStack>,
  globals: {
    colorScheme: "dark"
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as AllStates,m as DarkMode,f as Default,h as __namedExportsOrder,d as default};