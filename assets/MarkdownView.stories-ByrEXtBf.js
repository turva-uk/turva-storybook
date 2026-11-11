import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{Y as n,d as r,n as i}from"./appIcons-BpiHpu4d.js";import{n as a,t as o}from"./MarkdownView-C0VWo7qu.js";var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),a(),s=t(),c={title:`Foundations/Typography/Markdown view`,component:o,parameters:{layout:`padded`}},l=`# Heading 1

This is a paragraph with **bold** and *italic* text, plus a [link](https://example.com).

- Item one
- Item two

1. First
2. Second

\`inline code\`

\`\`\`
code block
line 2
\`\`\``,u={args:{source:l}},d={args:{source:l,asPlainText:!0}},f={args:{source:l,isLoading:!0}},p={args:{source:`**The assessment** puts that into practice:

- Press **Finish** to go back to the module page, where the assessment
  starts.
- Each question shows a polyp twice: once under white light and once
  under narrow band imaging.
- When you pass, your certificate is emailed to you.`}},m={args:{imageBase:`.`,source:`## Find the logo

1. Look at the top of the page.
   ![The Brand logo](brands/turva/logo.svg)
2. Look for a picture that is not there.
   ![A screenshot that has not been taken yet](missing/shot.png)
3. Carry on.`}},h={args:{icons:{"user-plus":(0,s.jsx)(r,{})},source:`## Add somebody

1. Press the **Add user** button :icon-user-plus:, above the list.
2. Fill in their details and press **Save**.`}},g={args:{icons:{pencil:(0,s.jsx)(n,{})},source:`## Edit a site

1. Open the site from **Sites**.
2. Press the **Edit site** button :button-pencil:, beside its name.`}},_={...u,globals:{colorScheme:`dark`}},v=[`Default`,`PlainText`,`Loading`,`WrappedListItems`,`WithImages`,`WithIcons`,`WithButtonIcons`,`DarkMode`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    source: sample
  }
}`,...u.parameters?.docs?.source},description:{story:`Default

Renders formatted markdown with headings, bold, italic, lists,
links and code blocks.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    source: sample,
    asPlainText: true
  }
}`,...d.parameters?.docs?.source},description:{story:`Plain Text

Shows the raw markdown source as plain text with tags stripped.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    source: sample,
    isLoading: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Loading

Shows skeleton placeholders while markdown content is loading.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    source: ["**The assessment** puts that into practice:", "", "- Press **Finish** to go back to the module page, where the assessment", "  starts.", "- Each question shows a polyp twice: once under white light and once", "  under narrow band imaging.", "- When you pass, your certificate is emailed to you."].join("\\n")
  }
}`,...p.parameters?.docs?.source},description:{story:`Wrapped list items

Long items written over two lines, the second indented, as Markdown
allows. Each stays one bullet rather than ending the list.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    imageBase: ".",
    source: ["## Find the logo", "", "1. Look at the top of the page.", "   ![The Brand logo](brands/turva/logo.svg)", "2. Look for a picture that is not there.", "   ![A screenshot that has not been taken yet](missing/shot.png)", "3. Carry on."].join("\\n")
  }
}`,...m.parameters?.docs?.source},description:{story:`With images

Images are off unless the caller gives an \`imageBase\`, as a guide does.
The first step's image loads; the second's does not exist, so its alt
text is shown in its place.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icons: {
      "user-plus": <IconUserPlus />
    },
    source: ["## Add somebody", "", "1. Press the **Add user** button :icon-user-plus:, above the list.", "2. Fill in their details and press **Save**."].join("\\n")
  }
}`,...h.parameters?.docs?.source},description:{story:"Icons are off unless the caller gives them, as a guide does. A step\nnames one as `:icon-user-plus:`, and it is shown in the line.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icons: {
      pencil: <IconPencil />
    },
    source: ["## Edit a site", "", "1. Open the site from **Sites**.", "2. Press the **Edit site** button :button-pencil:, beside its name."].join("\\n")
  }
}`,...g.parameters?.docs?.source},description:{story:"`:button-pencil:` draws the icon in the filled square an icon-only\nbutton has on the page, for a step whose button looks like that.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    colorScheme: "dark"
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as DarkMode,u as Default,f as Loading,d as PlainText,g as WithButtonIcons,h as WithIcons,m as WithImages,p as WrappedListItems,v as __namedExportsOrder,c as default};