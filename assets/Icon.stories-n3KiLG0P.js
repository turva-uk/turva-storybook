import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./SimpleGrid-Cw3N2DUw.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Group-DSt3d3i4.js";import{n as o,t as s}from"./BaseCard-C_VuKVYL.js";import{n as c,t as l}from"./Stack-D_d3SZwt.js";import{n as u,t as d}from"./Icon-DG7U5iIm.js";import{$t as f,Y as p,n as m,r as h,t as g}from"./appIcons-BpiHpu4d.js";import{r as _,t as v}from"./semanticColours-DE-wy9oZ.js";import{a as y,i as b,n as x,r as S}from"./variants-US1Dcm7T.js";var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{i(),t(),c(),m(),u(),o(),v(),y(),C=r(),w={title:`Icons/Icon`,component:d,parameters:{layout:`padded`,docs:{description:{component:`Icon component provides consistent sizing for Tabler icons.

**Size Variants (Desktop ≥640px):**
- \`sm\` (20px): Inputs, small buttons, inline text
- \`md\` (28px): Default size, general UI elements
- \`lg\` (48px): Action cards, prominent features

**Size Variants (Mobile <640px):**
- \`sm\` (16px): Inputs, small buttons, inline text
- \`md\` (20px): Default size, general UI elements
- \`lg\` (32px): Action cards, prominent features

Icons automatically scale down on mobile for better touch targets and visual balance.`}}}},T={args:{icon:(0,C.jsx)(p,{}),size:`md`},render:()=>(0,C.jsx)(n,{cols:5,spacing:`lg`,style:{maxWidth:700},children:Object.entries(g).map(([e,t])=>(0,C.jsx)(s,{style:{textAlign:`center`},children:(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(t,{}),size:`lg`}),(0,C.jsx)(x,{mt:0,children:e.replace(/([A-Z])/g,` $1`).trim()})]})},e))})},E={args:{icon:(0,C.jsx)(p,{}),size:`md`},render:()=>(0,C.jsx)(b,{children:[`sm`,`md`,`mlg`,`lg`,`xl`].map(e=>(0,C.jsx)(S,{label:e===`md`?`md (default)`:e,children:(0,C.jsx)(d,{icon:(0,C.jsx)(p,{}),size:e})},e))})},D={parameters:{layout:`padded`},args:{icon:(0,C.jsx)(p,{}),size:`lg`},render:()=>(0,C.jsxs)(a,{gap:`lg`,children:[(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(f,{}),size:`lg`,colour:`var(--mantine-color-teal-filled)`}),(0,C.jsx)(x,{mt:0,children:`Success`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(p,{}),size:`lg`,colour:`var(--mantine-color-blue-filled)`}),(0,C.jsx)(x,{mt:0,children:`Info`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(h,{}),size:`lg`,colour:`var(--mantine-color-red-filled)`}),(0,C.jsx)(x,{mt:0,children:`Alert`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(p,{}),size:`lg`,colour:`var(--mantine-color-cyan-6)`}),(0,C.jsx)(x,{mt:0,children:`Warning`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(p,{}),size:`lg`,colour:`var(--mantine-color-violet-filled)`}),(0,C.jsx)(x,{mt:0,children:`Accent`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(p,{}),size:`lg`}),(0,C.jsx)(x,{mt:0,children:`Default`})]})]})},O={parameters:{layout:`padded`},args:{icon:(0,C.jsx)(p,{}),size:`md`},render:()=>(0,C.jsxs)(a,{gap:`lg`,children:[(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(f,{}),container:_.success.bg}),(0,C.jsx)(x,{mt:0,children:`Light success`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(h,{}),container:_.alert.bg}),(0,C.jsx)(x,{mt:0,children:`Light alert`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(f,{}),container:_.success.bg,containerVariant:`filled`}),(0,C.jsx)(x,{mt:0,children:`Filled success`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(h,{}),container:_.alert.bg,containerVariant:`filled`}),(0,C.jsx)(x,{mt:0,children:`Filled alert`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(p,{}),container:_.info.bg}),(0,C.jsx)(x,{mt:0,children:`Light info`})]}),(0,C.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,C.jsx)(d,{icon:(0,C.jsx)(p,{}),container:_.accent.bg,containerVariant:`filled`}),(0,C.jsx)(x,{mt:0,children:`Filled accent`})]})]})},k={...T,globals:{colorScheme:`dark`}},A=[`Default`,`AllSizes`,`WithColour`,`WithContainer`,`DarkMode`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconPencil />,
    size: "md"
  },
  render: () => <SimpleGrid cols={5} spacing="lg" style={{
    maxWidth: 700
  }}>
      {Object.entries(iconCatalogue).map(([name, IconComponent]) => <BaseCard key={name} style={{
      textAlign: "center"
    }}>
          <Stack gap="xs" align="center">
            <Icon icon={<IconComponent />} size="lg" />
            <StoryNote mt={0}>
              {name.replace(/([A-Z])/g, " $1").trim()}
            </StoryNote>
          </Stack>
        </BaseCard>)}
    </SimpleGrid>
}`,...T.parameters?.docs?.source},description:{story:`All available icons used in the application, displayed in a 5-column grid.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconPencil />,
    size: "md"
  },
  render: () => <VariantStack>
      {(["sm", "md", "mlg", "lg", "xl"] as const).map(size => <VariantRow key={size} label={size === "md" ? "md (default)" : size}>
          <Icon icon={<IconPencil />} size={size} />
        </VariantRow>)}
    </VariantStack>
}`,...E.parameters?.docs?.source},description:{story:`All sizes comparison - sm, md, lg, and xl with a single icon.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  args: {
    icon: <IconPencil />,
    size: "lg"
  },
  render: () => <Group gap="lg">
      <Stack gap="xs" align="center">
        <Icon icon={<IconCheck />} size="lg" colour="var(--mantine-color-teal-filled)" />
        <StoryNote mt={0}>Success</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconPencil />} size="lg" colour="var(--mantine-color-blue-filled)" />
        <StoryNote mt={0}>Info</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconX />} size="lg" colour="var(--mantine-color-red-filled)" />
        <StoryNote mt={0}>Alert</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconPencil />} size="lg" colour="var(--mantine-color-cyan-6)" />
        <StoryNote mt={0}>Warning</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconPencil />} size="lg" colour="var(--mantine-color-violet-filled)" />
        <StoryNote mt={0}>Accent</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconPencil />} size="lg" />
        <StoryNote mt={0}>Default</StoryNote>
      </Stack>
    </Group>
}`,...D.parameters?.docs?.source},description:{story:`Icons with status colours from the design system.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  args: {
    icon: <IconPencil />,
    size: "md"
  },
  render: () => <Group gap="lg">
      <Stack gap="xs" align="center">
        <Icon icon={<IconCheck />} container={statusColours.success.bg} />
        <StoryNote mt={0}>Light success</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconX />} container={statusColours.alert.bg} />
        <StoryNote mt={0}>Light alert</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconCheck />} container={statusColours.success.bg} containerVariant="filled" />
        <StoryNote mt={0}>Filled success</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconX />} container={statusColours.alert.bg} containerVariant="filled" />
        <StoryNote mt={0}>Filled alert</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconPencil />} container={statusColours.info.bg} />
        <StoryNote mt={0}>Light info</StoryNote>
      </Stack>
      <Stack gap="xs" align="center">
        <Icon icon={<IconPencil />} container={statusColours.accent.bg} containerVariant="filled" />
        <StoryNote mt={0}>Filled accent</StoryNote>
      </Stack>
    </Group>
}`,...O.parameters?.docs?.source},description:{story:`Icons with a circular container background using status colours.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{E as AllSizes,k as DarkMode,T as Default,D as WithColour,O as WithContainer,A as __namedExportsOrder,w as default};