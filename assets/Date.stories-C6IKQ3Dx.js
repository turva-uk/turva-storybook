import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Divider-BkZfNhmn.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{n as o,t as s}from"./BodyText-Vl4rxmG1.js";import{a as c,n as l}from"./variants-US1Dcm7T.js";import{n as u,t as d}from"./Date-BfRC-G4a.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{i(),n(),u(),o(),c(),f=t(),p=[e=>(0,f.jsx)(s,{children:(0,f.jsx)(e,{})})],m={title:`Data/Date`,component:d,argTypes:{date:{control:`text`,description:`ISO 8601 date string (YYYY-MM-DD)`},locale:{control:`select`,options:[`en-GB`,`en-US`],description:`Locale for date formatting`},format:{control:`select`,options:[`short`,`medium`,`long`,`full`],description:`Date format style`}}},h={decorators:p,args:{date:`1980-09-15`,locale:`en-GB`}},g={decorators:p,args:{date:`1980-09-15`,locale:`en-US`}},_={decorators:p,args:{date:`1980-09-15`,locale:`en-GB`,format:`medium`}},v={decorators:p,args:{date:`1980-09-15`,locale:`en-GB`,format:`long`}},y={decorators:p,args:{date:`1980-09-15`,locale:`en-GB`,format:`full`}},b={render:()=>{let e=`1980-09-15`;return(0,f.jsxs)(a,{gap:`xl`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{children:`British English (en-GB)`}),(0,f.jsxs)(a,{gap:`xs`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{mt:0,children:`Short:`}),(0,f.jsx)(s,{children:(0,f.jsx)(d,{date:e,locale:`en-GB`,format:`short`})})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{mt:0,children:`Medium:`}),(0,f.jsx)(s,{children:(0,f.jsx)(d,{date:e,locale:`en-GB`,format:`medium`})})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{mt:0,children:`Long:`}),(0,f.jsx)(s,{children:(0,f.jsx)(d,{date:e,locale:`en-GB`,format:`long`})})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{mt:0,children:`Full:`}),(0,f.jsx)(s,{children:(0,f.jsx)(d,{date:e,locale:`en-GB`,format:`full`})})]})]})]}),(0,f.jsx)(r,{}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{children:`American English (en-US)`}),(0,f.jsxs)(a,{gap:`xs`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{mt:0,children:`Short:`}),(0,f.jsx)(s,{children:(0,f.jsx)(d,{date:e,locale:`en-US`,format:`short`})})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{mt:0,children:`Medium:`}),(0,f.jsx)(s,{children:(0,f.jsx)(d,{date:e,locale:`en-US`,format:`medium`})})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{mt:0,children:`Long:`}),(0,f.jsx)(s,{children:(0,f.jsx)(d,{date:e,locale:`en-US`,format:`long`})})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{mt:0,children:`Full:`}),(0,f.jsx)(s,{children:(0,f.jsx)(d,{date:e,locale:`en-US`,format:`full`})})]})]})]})]})}},x=[`BritishShort`,`AmericanShort`,`Medium`,`Long`,`Full`,`Comparison`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: bodyTextDecorator,
  args: {
    date: "1980-09-15",
    locale: "en-GB"
  }
}`,...h.parameters?.docs?.source},description:{story:`Default British format (en-GB, short)
Displays as DD/MM/YYYY (e.g., 15/09/1980)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: bodyTextDecorator,
  args: {
    date: "1980-09-15",
    locale: "en-US"
  }
}`,...g.parameters?.docs?.source},description:{story:`American format (en-US, short)
Displays as MM/DD/YYYY (e.g., 09/15/1980)`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: bodyTextDecorator,
  args: {
    date: "1980-09-15",
    locale: "en-GB",
    format: "medium"
  }
}`,..._.parameters?.docs?.source},description:{story:`Medium format with abbreviated month`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: bodyTextDecorator,
  args: {
    date: "1980-09-15",
    locale: "en-GB",
    format: "long"
  }
}`,...v.parameters?.docs?.source},description:{story:`Long format with full month name`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: bodyTextDecorator,
  args: {
    date: "1980-09-15",
    locale: "en-GB",
    format: "full"
  }
}`,...y.parameters?.docs?.source},description:{story:`Full format with weekday and full month name`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const testDate = "1980-09-15";
    return <Stack gap="xl">
        <div>
          <StoryNote>British English (en-GB)</StoryNote>
          <Stack gap="xs">
            <div>
              <StoryNote mt={0}>Short:</StoryNote>
              <BodyText>
                <FormattedDate date={testDate} locale="en-GB" format="short" />
              </BodyText>
            </div>
            <div>
              <StoryNote mt={0}>Medium:</StoryNote>
              <BodyText>
                <FormattedDate date={testDate} locale="en-GB" format="medium" />
              </BodyText>
            </div>
            <div>
              <StoryNote mt={0}>Long:</StoryNote>
              <BodyText>
                <FormattedDate date={testDate} locale="en-GB" format="long" />
              </BodyText>
            </div>
            <div>
              <StoryNote mt={0}>Full:</StoryNote>
              <BodyText>
                <FormattedDate date={testDate} locale="en-GB" format="full" />
              </BodyText>
            </div>
          </Stack>
        </div>

        <Divider />

        <div>
          <StoryNote>American English (en-US)</StoryNote>
          <Stack gap="xs">
            <div>
              <StoryNote mt={0}>Short:</StoryNote>
              <BodyText>
                <FormattedDate date={testDate} locale="en-US" format="short" />
              </BodyText>
            </div>
            <div>
              <StoryNote mt={0}>Medium:</StoryNote>
              <BodyText>
                <FormattedDate date={testDate} locale="en-US" format="medium" />
              </BodyText>
            </div>
            <div>
              <StoryNote mt={0}>Long:</StoryNote>
              <BodyText>
                <FormattedDate date={testDate} locale="en-US" format="long" />
              </BodyText>
            </div>
            <div>
              <StoryNote mt={0}>Full:</StoryNote>
              <BodyText>
                <FormattedDate date={testDate} locale="en-US" format="full" />
              </BodyText>
            </div>
          </Stack>
        </div>
      </Stack>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Comparison of British vs American formats across all styles`,...b.parameters?.docs?.description}}}})))()}S();export{g as AmericanShort,h as BritishShort,b as Comparison,y as Full,v as Long,_ as Medium,x as __namedExportsOrder,m as default};