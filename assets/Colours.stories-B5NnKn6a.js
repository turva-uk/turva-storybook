import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,n,t as r,w as i}from"./Box-BssAA6js.js";import{a,o}from"./theme-B7Ll1jCm.js";import{S as s,p as c}from"./Form-BQWpUpVW.js";import{t as l}from"./jsx-runtime-MKhVqBIO.js";import{n as u,t as d}from"./Group-DSt3d3i4.js";import{n as f,t as p}from"./Text-DPHIKpQi.js";import{n as m,t as h}from"./Badge-IMN-_Qpu.js";import{n as g,t as _}from"./Stack-D_d3SZwt.js";import{a as v,i as y,n as b,r as x,t as S}from"./semanticColours-DE-wy9oZ.js";import{t as C}from"./form-T0M4Wlbx.js";import{t as w}from"./page-header-DDmZahL6.js";import{a as T,n as E}from"./variants-US1Dcm7T.js";import{n as D,t as O}from"./publicAsset-HJc8QrwY.js";import{n as k,t as A}from"./Image-SdxK9Tny.js";function j({colour:e,label:t,description:n}){return(0,R.jsxs)(d,{gap:`md`,align:`center`,wrap:`nowrap`,children:[(0,R.jsx)(r,{style:{width:48,height:48,borderRadius:8,backgroundColor:e,border:`1px solid var(--mantine-color-gray-3)`,flexShrink:0}}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(E,{mt:0,children:t.toUpperCase()}),(0,R.jsx)(E,{mt:0,children:n})]})]})}function M({artwork:e,width:t=6,inset:n=.75,background:i,pageBackground:a,label:o,colours:s,usage:c}){let l=i===a;return(0,R.jsxs)(d,{gap:`md`,align:`center`,wrap:`nowrap`,children:[(0,R.jsx)(r,{style:{width:`${t}rem`,height:`6rem`,borderRadius:8,backgroundColor:i,border:l?`1px solid var(--mantine-color-gray-3)`:void 0,padding:`${n}rem`,flexShrink:0,display:`flex`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`},children:e}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(E,{mt:0,children:o.toUpperCase()}),(0,R.jsxs)(E,{mt:0,children:[s,` - `,c]})]})]})}function N({name:e,scale:t,primaryShade:n}){return(0,R.jsxs)(`div`,{children:[(0,R.jsx)(E,{mt:0,children:e.toUpperCase()}),(0,R.jsx)(d,{gap:`md`,align:`flex-start`,mt:`xs`,children:t.map((e,t)=>(0,R.jsxs)(_,{gap:4,align:`center`,children:[(0,R.jsx)(r,{style:{width:48,height:48,borderRadius:8,backgroundColor:e,border:`1px solid var(--mantine-color-gray-3)`}}),(0,R.jsx)(E,{mt:0,children:t}),(0,R.jsx)(E,{mt:0,children:e}),t===n&&(0,R.jsx)(E,{mt:0,children:`DEFAULT`})]},t))})]})}function P(){let{other:e}=t(),n=e.brand??`quill`;if(!Object.hasOwn(z,n)||e.colours===void 0)throw Error(`Foundations/Colours has no words for the brand "${n}". Add it to BRAND_WORDS in src/stories/BrandFoundations.tsx.`);return{words:z[n],colours:e.colours}}function F(){let{words:e,colours:t}=P();return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(j,{colour:t.primary,label:`Primary`,description:`${t.primary} - ${e.primary}`}),(0,R.jsx)(j,{colour:t.secondary,label:`Secondary`,description:`${t.secondary} - ${e.secondary}`}),(0,R.jsx)(j,{colour:t.background,label:`Background`,description:`${t.background} - ${e.background}`}),(0,R.jsx)(j,{colour:t.mark,label:`Mark`,description:`${t.mark} - ${e.mark}`})]})}function I(){let{words:e}=P(),n=t();return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(N,{name:e.primaryScale,scale:n.colors.primary,primaryShade:e.primaryDefaultShade}),(0,R.jsx)(N,{name:e.secondaryScale,scale:n.colors.secondary,primaryShade:5})]})}function L(){let{words:e,colours:t}=P();return(0,R.jsxs)(`div`,{children:[(0,R.jsx)(s,{title:e.logoTitle}),(0,R.jsx)(E,{children:e.logoNote}),(0,R.jsx)(_,{gap:`md`,mt:`xl`,children:e.logos(t).map(e=>(0,R.jsx)(M,{artwork:e.artwork,width:e.width,inset:e.inset,background:e.background,pageBackground:t.background,label:e.label,colours:e.colours,usage:e.usage},e.label))})]})}var R,z;function B(){return(B=e((()=>{n(),u(),g(),i(),T(),w(),k(),O(),R=l(),z={quill:{primary:`navigation, primary actions, brand identity`,secondary:`secondary buttons, accents, highlights`,background:`page backgrounds, card surfaces`,mark:`the quill on a navy tile: the email avatar and the installed app's icon. Light grey, not white, so the mark sits back from the navy`,primaryScale:`primary (navy)`,secondaryScale:`secondary (amber)`,primaryDefaultShade:8,logoTitle:`Quill logo`,logoNote:(0,R.jsxs)(R.Fragment,{children:[`The mark is the feather; the wordmark is the name. Each is a PNG in`,` `,(0,R.jsx)(`code`,{children:`frontend/public`}),`, drawn in one colour for one background, so the pairing is fixed: pick the file for the surface it sits on.`,` `,(0,R.jsx)(`code`,{children:`BrandLogo`}),` chooses navy or white by colour scheme;`,` `,(0,R.jsx)(`code`,{children:`BrandName`}),` is always the white wordmark, because the ribbon is always navy.`]}),logos:e=>[{artwork:(0,R.jsx)(A,{src:D(`/android-chrome-512x512.png`),alt:`Grey quill mark on a navy tile`,height:6}),inset:0,background:e.primary,label:`Mark on a navy tile`,colours:`${e.mark} on ${e.primary}`,usage:`the installed app's icon, and the email avatar (/email/quill-avatar.png, the same in a circle)`},{artwork:(0,R.jsx)(A,{src:D(`/quill-logo.png`),alt:`Navy quill mark`,height:4.5}),background:e.background,label:`Navy mark`,colours:`${e.primary} on white`,usage:`login, register and password pages in light mode (BrandLogo colour="default")`},{artwork:(0,R.jsx)(A,{src:D(`/quill-logo-white.png`),alt:`White quill mark`,height:4.5}),background:e.primary,label:`White mark`,colours:`#ffffff on navy`,usage:`the same pages in dark mode (BrandLogo colour="white")`},{artwork:(0,R.jsx)(A,{src:D(`/quill-logo-light-grey.png`),alt:`Light grey quill mark`,height:4.5}),background:e.background,label:`Light grey mark`,colours:`#939296 on white`,usage:`BrandLogo colour="light-grey"; no page uses it today`},{artwork:(0,R.jsx)(A,{src:D(`/quill-name-white.png`),alt:`White Quill Medical wordmark`,height:3}),width:10,background:e.primary,label:`White wordmark`,colours:`#ffffff on navy`,usage:`the app's top ribbon (BrandName)`},{artwork:(0,R.jsx)(A,{src:D(`/quill-name.png`),alt:`Navy Quill Medical wordmark`,height:3}),width:10,background:e.background,label:`Navy wordmark`,colours:`${e.primary} on white`,usage:`the file exists; no page uses it today`},{artwork:(0,R.jsx)(A,{src:D(`/quill-name-long-white-amber.png`),alt:`Quill Medical wordmark in white and amber`,height:3}),width:20,background:e.primary,label:`White and amber wordmark`,colours:`#ffffff and ${e.secondary} on navy`,usage:`the public site's ribbon and footer, and the header band of every Quill email (/email/quill-wordmark.png, the same at email size)`}]},turva:{primary:`the logo's lavender mark: the ribbon, filled buttons, links and body text`,secondary:`the logo's yellow tile: accents, highlights and the current navigation link`,background:`page backgrounds, card surfaces`,mark:`the yellow tile the logo's lavender mark is drawn on`,primaryScale:`primary (lavender)`,secondaryScale:`secondary (yellow)`,primaryDefaultShade:5,logoTitle:`Turva logo`,logoNote:(0,R.jsxs)(R.Fragment,{children:[`The mark is drawn on its own yellow tile, so one SVG,`,` `,(0,R.jsx)(`code`,{children:`frontend/public/brands/turva/logo.svg`}),`, serves every surface in light and dark. The wordmark is the name in Finlandica Headline 700, Finland's country-brand typeface, drawn as a white SVG,`,` `,(0,R.jsx)(`code`,{children:`wordmark-white.svg`}),`, for the lavender ribbon.`]}),logos:e=>[{artwork:(0,R.jsx)(A,{src:D(`/brands/turva/logo.svg`),alt:`Lavender Turva mark on a yellow tile`,height:6}),inset:0,background:e.mark,label:`Lavender mark on a yellow tile`,colours:`${e.primary} on ${e.mark}`,usage:`every BrandLogo under Turva, in light and dark`},{artwork:(0,R.jsx)(A,{src:D(`/brands/turva/wordmark-white.svg`),alt:`White Turva wordmark`,height:3}),width:10,background:e.primary,label:`White wordmark`,colours:`#ffffff on ${e.primary}`,usage:`the app's top ribbon (BrandName), set in Finlandica Headline 700 with each letter drawn as a path, so no font loads`}]}},j.__docgenInfo={description:`One named colour, with what it is for.`,methods:[],displayName:`ColourSwatch`,props:{colour:{required:!0,tsType:{name:`string`},description:``},label:{required:!0,tsType:{name:`string`},description:``},description:{required:!0,tsType:{name:`string`},description:``}}},N.__docgenInfo={description:`One 10-shade ramp, with the default shade marked.`,methods:[],displayName:`ScaleRow`,props:{name:{required:!0,tsType:{name:`string`},description:``},scale:{required:!0,tsType:{name:`unknown`},description:``},primaryShade:{required:!1,tsType:{name:`number`},description:``}}},F.__docgenInfo={description:`The brand's four colours, each with what it is for.`,methods:[],displayName:`BrandColourSwatches`},I.__docgenInfo={description:`The brand's primary and secondary ramps, as the theme holds them.`,methods:[],displayName:`BrandScales`},L.__docgenInfo={description:`The brand's logo files and wordmark, each on its own surface.`,methods:[],displayName:`BrandLogos`}})))()}function V({name:e,config:t}){return(0,U.jsxs)(d,{gap:`md`,align:`center`,wrap:`nowrap`,children:[(0,U.jsx)(h,{color:t.bg,c:y(e),variant:`filled`,size:`lg`,children:e}),(0,U.jsx)(p,{size:`lg`,fw:700,c:t.fg,miw:`8rem`,children:e}),(0,U.jsx)(E,{mt:0,children:t.usage})]})}function H({name:e,config:t}){let n=t.value===`inherit`,i=t.value.startsWith(`var(`);return(0,U.jsxs)(d,{gap:`md`,align:`center`,wrap:`nowrap`,children:[(0,U.jsx)(r,{style:{width:48,height:48,borderRadius:8,border:`1px solid var(--mantine-color-gray-3)`,flexShrink:0,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,U.jsx)(p,{size:`xl`,fw:700,c:!n&&!i?t.value:void 0,style:n?{color:`var(--mantine-color-text)`}:i?{color:t.value}:void 0,children:`Aa`})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(E,{mt:0,children:e.toUpperCase()}),(0,U.jsxs)(E,{mt:0,children:[t.value,` - `,t.usage]})]})]})}var U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{m(),n(),u(),g(),f(),S(),o(),B(),T(),w(),C(),U=l(),W={title:`Foundations/Colours`,parameters:{layout:`padded`}},G=Object.entries(x),K=Object.entries(v),q=Object.entries(b),J={render:()=>(0,U.jsxs)(_,{gap:`xl`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(s,{title:`Brand colours`}),(0,U.jsxs)(_,{gap:`md`,children:[(0,U.jsx)(F,{}),(0,U.jsx)(j,{colour:`#f8f9fa`,label:`Default grey`,description:`#f8f9fa - subtle backgrounds, input fills, hover states`})]})]}),(0,U.jsx)(L,{}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(s,{title:`Status colours`}),(0,U.jsxs)(E,{children:[`Used in badges, alerts, and form validation to communicate state. Each status has two colours. The fill (`,(0,U.jsx)(`code`,{children:`bg`}),`, left) is dark enough for white text and is the same in both schemes. The word, in the middle (`,(0,U.jsx)(`code`,{children:`fg`}),`), is for the status written as text with no fill behind it, and changes with the scheme: a darker shade in light mode, a pale one in dark. Never use `,(0,U.jsx)(`code`,{children:`bg`}),` for text.`]}),(0,U.jsx)(_,{gap:`sm`,mt:`xl`,children:G.map(([e,t])=>(0,U.jsx)(V,{name:e,config:t},e))})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(s,{title:`Text colours`}),(0,U.jsx)(E,{children:`Every text colour meets WCAG AA contrast (4.5:1) in both schemes. Muted, link and error change with the colour scheme; switch the toolbar to see the dark values.`}),(0,U.jsx)(_,{gap:`md`,mt:`xl`,children:K.map(([e,t])=>(0,U.jsx)(H,{name:e,config:t},e))})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(s,{title:`Placeholder colours`}),(0,U.jsx)(E,{children:`The hint in an empty field. Fainter than any text colour on purpose, so neither meets 4.5:1 and neither is ever used for content: they are shown here where they belong, in a field. A field in error keeps its placeholder softer than its red border, so an empty field does not look as if something wrong was typed into it.`}),(0,U.jsx)(_,{gap:`lg`,mt:`xl`,children:q.map(([e,t])=>(0,U.jsxs)(d,{gap:`md`,align:`center`,children:[(0,U.jsx)(r,{w:`20rem`,children:(0,U.jsx)(c,{label:e===`error`?`A field in error`:`An empty field`,placeholder:`Placeholder text`,error:e===`error`?`This field is required`:void 0,readOnly:!0})}),(0,U.jsxs)(r,{flex:1,miw:`14rem`,children:[(0,U.jsx)(E,{mt:0,children:e.toUpperCase()}),(0,U.jsxs)(E,{mt:0,children:[t.value,` - `,t.usage]})]})]},e))})]})]})},Y={render:()=>(0,U.jsx)(_,{gap:`xl`,children:(0,U.jsxs)(`div`,{children:[(0,U.jsx)(s,{title:`Colour scales`}),(0,U.jsxs)(E,{children:[`10-shade ramps registered in the Mantine theme. Components use these via `,(0,U.jsx)(`code`,{children:`color="primary"`}),` or`,` `,(0,U.jsx)(`code`,{children:`color="secondary"`}),`.`]}),(0,U.jsxs)(_,{gap:`lg`,mt:20,children:[(0,U.jsx)(I,{}),(0,U.jsx)(N,{name:`grey (neutral)`,scale:a,primaryShade:0}),(0,U.jsx)(E,{children:`Grey 7 is the only grey for text: it is the light-mode muted colour, 8.2:1 on white. Greys 4 to 6 fall below the 4.5:1 text minimum and are for icons, borders and placeholders only.`})]})]})})},X=[`Overview`,`Scales`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="xl">
      <div>
        <PageHeader title="Brand colours" />
        <Stack gap="md">
          <BrandColourSwatches />
          <ColourSwatch colour="#f8f9fa" label="Default grey" description="#f8f9fa - subtle backgrounds, input fills, hover states" />
        </Stack>
      </div>

      <BrandLogos />

      <div>
        <PageHeader title="Status colours" />
        <StoryNote>
          Used in badges, alerts, and form validation to communicate state. Each
          status has two colours. The fill (<code>bg</code>, left) is dark
          enough for white text and is the same in both schemes. The word, in
          the middle (<code>fg</code>), is for the status written as text with
          no fill behind it, and changes with the scheme: a darker shade in
          light mode, a pale one in dark. Never use <code>bg</code> for text.
        </StoryNote>
        <Stack gap="sm" mt="xl">
          {statusEntries.map(([name, config]) => <StatusSwatch key={name} name={name} config={config} />)}
        </Stack>
      </div>

      <div>
        <PageHeader title="Text colours" />
        <StoryNote>
          Every text colour meets WCAG AA contrast (4.5:1) in both schemes.
          Muted, link and error change with the colour scheme; switch the
          toolbar to see the dark values.
        </StoryNote>
        <Stack gap="md" mt="xl">
          {textEntries.map(([name, config]) => <TextSwatch key={name} name={name} config={config} />)}
        </Stack>
      </div>

      <div>
        <PageHeader title="Placeholder colours" />
        <StoryNote>
          The hint in an empty field. Fainter than any text colour on purpose,
          so neither meets 4.5:1 and neither is ever used for content: they are
          shown here where they belong, in a field. A field in error keeps its
          placeholder softer than its red border, so an empty field does not
          look as if something wrong was typed into it.
        </StoryNote>
        <Stack gap="lg" mt="xl">
          {placeholderEntries.map(([name, config]) =>
        // The field on the left and its notes on the right, as the
        // swatches above are laid out. Only on a screen too narrow
        // for both do the notes wrap beneath the field.
        <Group key={name} gap="md" align="center">
              <Box w="20rem">
                <TextField label={name === "error" ? "A field in error" : "An empty field"} placeholder="Placeholder text" error={name === "error" ? "This field is required" : undefined}
            // Nothing is typed here: the field is the sample
            readOnly />
              </Box>
              {/* Takes the rest of the row and wraps its own words, so a
                  long note stays beside its field. Left to its natural
                  width, the error note was too wide for the row and
                  dropped beneath the field. */}
              <Box flex={1} miw="14rem">
                <StoryNote mt={0}>{name.toUpperCase()}</StoryNote>
                <StoryNote mt={0}>
                  {config.value} - {config.usage}
                </StoryNote>
              </Box>
            </Group>)}
        </Stack>
      </div>
    </Stack>
}`,...J.parameters?.docs?.source},description:{story:`Full colour palette overview.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Stack gap="xl">
        <div>
          <PageHeader title="Colour scales" />
          <StoryNote>
            10-shade ramps registered in the Mantine theme. Components use these
            via <code>color=&quot;primary&quot;</code> or{" "}
            <code>color=&quot;secondary&quot;</code>.
          </StoryNote>
          <Stack gap="lg" mt={20}>
            <BrandScales />
            <ScaleRow name="grey (neutral)" scale={greyScale} primaryShade={0} />
            <StoryNote>
              Grey 7 is the only grey for text: it is the light-mode muted
              colour, 8.2:1 on white. Greys 4 to 6 fall below the 4.5:1 text
              minimum and are for icons, borders and placeholders only.
            </StoryNote>
          </Stack>
        </div>
      </Stack>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Brand and accent 10-shade colour scales. Bold label marks the primaryShade.`,...Y.parameters?.docs?.description}}}})))()}Z();export{J as Overview,Y as Scales,X as __namedExportsOrder,W as default};