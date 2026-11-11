import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as ee}from"./MediaDropzone-CriDO-nk.js";import{A as n,j as r,x as i}from"./Form-BQWpUpVW.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as te,t as o}from"./BaseCard-C_VuKVYL.js";import{n as s,t as c}from"./TeachingProgressBar-CupZgmEN.js";import{n as l,t as u}from"./Stack-D_d3SZwt.js";import{Cn as d,Y as ne,_ as re,n as f,q as ie}from"./appIcons-BpiHpu4d.js";import{t as ae}from"./BodyText-Vl4rxmG1.js";import{t as oe}from"./Heading-CiSQlEyi.js";import{t as p}from"./BodyTextInline-BBHINRw1.js";import{t as m}from"./StateMessage-BtkL8y7a.js";import{a as h,n as g}from"./variants-US1Dcm7T.js";import{n as _,t as se}from"./EllipsisMenu-hBkojH2-.js";import{t as v}from"./message-cards-Dy98AG8B.js";import{n as y,t as ce}from"./DataTable-CrqFwTVv.js";import{t as b}from"./media-dropzone-B9Gopwke.js";function x(){return(x=e((()=>{s()})))()}var S;function C(){return(C=e((()=>{S=[`video/mp4`,`video/webm`,`video/quicktime`]})))()}function w({media:e,organisation:t,liveOrganisations:r=[],uploadProgress:i={},uploadNames:a={},uploadErrors:te={},uploadRetrying:s={},onUpload:l,onDelete:f,onEditCaptions:h,onChoosePoster:g,loading:_=!1,error:v=null}){let[y,b]=(0,le.useState)(null),x=[...e.references.map(e=>({key:e.key,asset:e.asset,unattached:!1})),...e.unattached.map(e=>({key:e.original_filename,asset:e,unattached:!0}))],C=e.references.filter(e=>e.asset===null).length;return(0,T.jsxs)(o,{children:[(0,T.jsxs)(u,{gap:`sm`,children:[(0,T.jsx)(oe,{children:t?`Videos for ${t}`:`Videos`}),!e.is_complete&&(0,T.jsx)(m,{icon:(0,T.jsx)(d,{}),colour:`warning`,title:C===1?`1 video is missing`:`${C} videos are missing`,description:r.length>0?`This module is not available to learners in ${r.join(`, `)} until every video is uploaded.`:`This module will not be available to learners until every video is uploaded.`}),v&&(0,T.jsx)(m,{icon:(0,T.jsx)(d,{}),colour:`alert`,title:`Something went wrong`,description:v}),(0,T.jsx)(ce,{data:x,loading:_,getRowKey:e=>`${e.unattached?`un:`:`ref:`}${e.key}`,emptyMessage:`This module references no videos`,columns:[{header:`Reference`,render:e=>e.unattached?`Not referenced`:e.key},{header:`File`,render:e=>{let t=i[e.key],n=te[e.key];if(!e.asset&&t===void 0)return(0,T.jsxs)(u,{gap:4,children:[n?(0,T.jsx)(p,{c:`var(--alert-text-color)`,children:n}):null,(0,T.jsx)(ee,{onDrop:t=>l?.(e.key,t),accept:S,label:`Drop a video or click to browse`})]});let r=e.asset?.progress?.is_final===!0||e.asset?.captions_reviewed_at!=null,o=e.asset?.progress;return(0,T.jsxs)(u,{gap:4,children:[(0,T.jsx)(p,{children:e.asset?.original_filename??a[e.key]??`Sending the file…`}),t===void 0?o&&r?(0,T.jsx)(p,{c:`dimmed`,children:o.label}):o?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(c,{label:`Processing progress`,current:o.stage,total:o.total_stages,showCount:!1}),(0,T.jsx)(p,{c:o.stalled?`var(--alert-text-color)`:void 0,children:o.label})]}):null:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(c,{label:`Upload progress`,current:0,total:4,fill:Math.min(t,100)/100,showCount:!1}),(0,T.jsx)(p,{c:s[e.key]?`var(--alert-text-color)`:void 0,children:s[e.key]?`Connection lost, retrying`:`Uploading`})]})]})}},{header:``,render:e=>{if(!e.asset)return null;let t=e.asset;return(0,T.jsx)(se,{"aria-label":`Actions for ${t.original_filename}`,items:[...t.has_poster?[{label:`Choose poster frame`,icon:(0,T.jsx)(ie,{}),onClick:()=>g?.(t)}]:[],...t.has_captions?[{label:`Edit captions`,icon:(0,T.jsx)(ne,{}),onClick:()=>h?.(t)}]:[],{label:`Delete`,icon:(0,T.jsx)(re,{}),color:`var(--alert-text-color)`,onClick:()=>b(t)}]})}}]}),e.unattached.length>0&&(0,T.jsx)(ae,{children:`Uploads shown as “Not referenced” no longer match any video in this module’s content, usually because a reference was renamed or removed.`})]}),(0,T.jsx)(n,{opened:y!==null,onClose:()=>b(null),onAccept:async()=>{y&&await f?.(y.asset_id)},title:`Delete this video?`,acceptLabel:`Delete`,submittingLabel:`Deleting…`,icon:(0,T.jsx)(d,{}),children:(0,T.jsxs)(T.Fragment,{children:[y?.original_filename,` will be removed permanently.`,r.length>0&&(0,T.jsxs)(T.Fragment,{children:[` `,`This will make the module unavailable to learners in`,` `,r.join(`, `),` until a replacement is uploaded.`]})]})})]})}var le,T;function ue(){return(ue=e((()=>{le=t(),l(),te(),r(),y(),_(),v(),f(),i(),x(),b(),C(),T=a(),w.__docgenInfo={description:``,methods:[],displayName:`ModuleMediaCard`,props:{media:{required:!0,tsType:{name:`ModuleMedia`},description:`References and uploads for one module, from the media endpoint.`},organisation:{required:!1,tsType:{name:`string`},description:`The organisation these videos are for, named in the heading.

A video is stored once for each organisation running the module, so
the module page shows one card for each, and the heading is what
tells them apart.`},liveOrganisations:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Organisations the module is live for.

Named in the delete confirmation, because deleting a file hides the
module from those learners and the admin cannot see that
consequence from this page.`,defaultValue:{value:`[]`,computed:!1}},uploadProgress:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`number`}],raw:`Record<string, number>`},description:`Upload progress 0-100 for one reference key, while in flight.`,defaultValue:{value:`{}`,computed:!1}},uploadNames:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:`Name of the file being uploaded, per reference key.

Comes from the dropped file, because the asset it will become does
not exist until the upload finishes. Without it the row can only
say something is on its way, not what.`,defaultValue:{value:`{}`,computed:!1}},uploadErrors:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:`Why the last upload against a reference key failed, if it did.

Per key rather than one message for the whole card, so the row
that failed is the row that says so. Without it a failed upload
silently returns the row to an empty dropzone, which looks
identical to never having tried.`,defaultValue:{value:`{}`,computed:!1}},uploadRetrying:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`boolean`}],raw:`Record<string, boolean>`},description:`Reference keys whose upload lost its connection and is trying
again.

Without it the bar simply stops moving, which looks the same as a
page that has hung. The upload resumes from where it stopped.`,defaultValue:{value:`{}`,computed:!1}},onUpload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string, file: File) => void`,signature:{arguments:[{type:{name:`string`},name:`key`},{type:{name:`File`},name:`file`}],return:{name:`void`}}},description:`Called with the file dropped against a reference key.`},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(assetId: string) => void | Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`assetId`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Called once the admin has confirmed removing an asset.`},onEditCaptions:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(asset: MediaAsset) => void`,signature:{arguments:[{type:{name:`MediaAsset`},name:`asset`}],return:{name:`void`}}},description:`Called to open the caption editor for one asset.

Handed upward like every other action here, so the card stays
presentational and can be driven from Storybook with no network.`},onChoosePoster:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(asset: MediaAsset) => void`,signature:{arguments:[{type:{name:`MediaAsset`},name:`asset`}],return:{name:`void`}}},description:`Called to choose the second one asset's poster is taken from.

Offered only where the transcode has produced a poster, because a
retaken poster is read from a rendition and there is none before.`},loading:{required:!1,tsType:{name:`boolean`},description:`Shows skeleton rows while the media list is in flight.`,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`What went wrong with the last delete or load.

Shown rather than swallowed: an action that fails silently is
indistinguishable from a button that does nothing, and the admin
has no other way to find out. A failed upload is not shown here:
it goes on its own row, through \`uploadErrors\`.`,defaultValue:{value:`null`,computed:!1}}}}})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,de;function fe(){return(fe=e((()=>{l(),ue(),h(),E=a(),D={title:`Teaching/Module media card`,tags:[`!dev`],component:w,parameters:{layout:`padded`}},O={asset_id:`a1b2c3`,original_filename:`Echocardiogram_overview.mp4`,content_type:`video/mp4`,size_bytes:943718400,uploaded_at:`2026-09-02T09:14:00Z`},k={asset_id:`d4e5f6`,original_filename:`Echocardiogram_panel_debrief.mp4`,content_type:`video/mp4`,size_bytes:412876800,uploaded_at:`2026-09-02T10:02:00Z`},A={asset_id:`z9y8x7`,original_filename:`Echocardiogram_old_intro_take2.mov`,content_type:`video/quicktime`,size_bytes:88080384,uploaded_at:`2026-08-19T16:40:00Z`},j={module_id:`echocardiography-interpretation`,references:[{key:`lecture-01`,asset:O},{key:`debrief`,asset:k}],unattached:[],is_complete:!0},M={module_id:`echocardiography-interpretation`,references:[{key:`lecture-01`,asset:O},{key:`debrief`,asset:null}],unattached:[],is_complete:!1},N={args:{media:j}},P={args:{media:M,liveOrganisations:[`East of England ETA`]},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`The warning is the point: without it a mistyped reference hides the module from every learner with no trace an admin would see.`})]})},F={args:{media:M,organisation:`East of England ETA`,liveOrganisations:[`East of England ETA`]},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`A video is stored once for each organisation running the module, so the module page shows one card for each, named in its heading.`})]})},I={args:{media:{module_id:`echocardiography-interpretation`,references:[{key:`lecture-01`,asset:null},{key:`debrief`,asset:null}],unattached:[],is_complete:!1}}},L={args:{media:{...M,unattached:[A]}},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`What a renamed or removed reference leaves behind. Without a row these are invisible bytes nobody can reach or remove.`})]})},R={args:{media:M,uploadProgress:{debrief:42},uploadNames:{debrief:`Echocardiogram_panel_debrief_take4.mp4`}},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`Uploading is the first of the same four stages the processing states below use, so one bar of one shape carries the whole job from the first byte to finished captions - and it sits under the file it is working on, rather than in a column of its own to read across to.`}),(0,E.jsx)(g,{children:`The bar tracks the bytes within that first stage, so it moves during a long upload. There is no "X of 4" beside it: the stages are our own machinery rather than something the admin is working through, and the words underneath say what is happening. See "Every progress state" for several points of an upload side by side.`})]})},z={args:{media:M,uploadProgress:{debrief:42},uploadNames:{debrief:`Echocardiogram_panel_debrief_take4.mp4`},uploadRetrying:{debrief:!0}},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`The connection dropped partway, perhaps because the computer slept. The bar holds where it was and the line beneath says so, because a bar that has simply stopped looks the same as a page that has hung. Once the connection is back the upload carries on from what storage already holds, and the line returns to "Uploading".`})]})},B={args:{media:{module_id:`echocardiography-interpretation`,references:[{key:`lecture-01`,asset:{...O,has_captions:!0,has_poster:!0}}],unattached:[],is_complete:!0}},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`Open the menu at the end of the row for edit and delete, as the site and organisation tables do. Editing captions only appears where there are captions, and choosing a poster frame only where there is a poster, so the menu never offers an action that does nothing.`})]})},V={args:{media:j,liveOrganisations:[`East of England ETA`,`Norfolk and Norwich`]},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`Open the menu at the end of a row and press delete to see the confirmation. It names the organisations the module is live for, because the admin cannot see that consequence from this page.`})]})},H={args:{media:{module_id:`pure-text-module`,references:[],unattached:[],is_complete:!0}},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`The page renders no card at all in this case - shown here only to pin the empty state.`})]})},U={args:{media:M,error:`Delete failed`},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`What a failed delete or load says. Shown rather than swallowed: an action that fails silently is indistinguishable from a button that does nothing. A failed upload is not shown here, but on its own row: see the next story.`})]})},W={args:{media:{module_id:`echocardiography-interpretation`,references:[{key:`lecture-01`,asset:null},{key:`debrief`,asset:null}],unattached:[],is_complete:!1},uploadErrors:{"lecture-01":`The connection was lost during the upload. Keep this tab open and the computer awake, then try again.`}},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`The row that failed is the row that says so, once, and the dropzone stays beneath it. The message names the cause and what to do: here the connection was lost, after the upload had already retried and given up. Nothing half-uploaded is linked, so trying again starts afresh. The second row is untouched, which is the point of keeping this per reference key rather than one message for the card.`})]})},G={args:{media:j,error:`Delete failed`},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`A complete module shows no missing-media warning, so the error stands alone. The two are independent: one says what is absent, the other says what just went wrong.`})]})},K={args:{media:j,loading:!0}},q=(e,t)=>({module_id:`echocardiography-interpretation`,references:[{key:e,asset:{...O,progress:t}}],unattached:[],is_complete:!0}),J={args:{media:{module_id:`echocardiography-interpretation`,references:[{key:`uploading-4`,asset:null},{key:`uploading-42`,asset:null},{key:`uploading-88`,asset:null},{key:`preparing`,asset:{...O,asset_id:`s1`,progress:{stage:1,total_stages:4,label:`Preparing the video`,in_progress:!0,stalled:!1}}},{key:`plays-without-processing`,asset:{...O,asset_id:`s1b`,progress:{stage:1,total_stages:4,label:`Uploaded - plays without processing`,in_progress:!1,stalled:!1,is_final:!0}}},{key:`not-started`,asset:{...O,asset_id:`s2`,progress:{stage:1,total_stages:4,label:`Uploaded - processing has not started`,in_progress:!1,stalled:!1}}},{key:`processing-failed`,asset:{...O,asset_id:`s3`,progress:{stage:1,total_stages:4,label:`Processing seems to have failed`,in_progress:!1,stalled:!0}}},{key:`writing-captions`,asset:{...O,asset_id:`s4`,progress:{stage:2,total_stages:4,label:`Writing captions`,in_progress:!0,stalled:!1}}},{key:`captions-not-started`,asset:{...O,asset_id:`s5`,progress:{stage:2,total_stages:4,label:`Video ready - captions have not started`,in_progress:!1,stalled:!1}}},{key:`captions-failed`,asset:{...O,asset_id:`s6`,progress:{stage:2,total_stages:4,label:`Video ready - captions seem to have failed`,in_progress:!1,stalled:!0}}},{key:`captions-need-checking`,asset:{...O,asset_id:`s7`,has_captions:!0,captions_reviewed_at:null,progress:{stage:3,total_stages:4,label:`Captions need checking - hidden from learners until then`,in_progress:!1,stalled:!1}}},{key:`captions-checked`,asset:{...O,asset_id:`s8`,has_captions:!0,captions_reviewed_at:`2026-09-16T11:20:00Z`,progress:{stage:4,total_stages:4,label:`Ready - captions checked`,in_progress:!1,stalled:!1}}},{key:`no-speech`,asset:{...O,asset_id:`s9`,progress:{stage:4,total_stages:4,label:`Ready - no speech, so no captions needed`,in_progress:!1,stalled:!1,is_final:!0}}}],unattached:[],is_complete:!1},uploadProgress:{"uploading-4":4,"uploading-42":42,"uploading-88":88},uploadNames:{"uploading-4":`Echocardiogram_overview.mp4`,"uploading-42":`Echocardiogram_overview.mp4`,"uploading-88":`Echocardiogram_overview.mp4`}}},Y={...J,render:e=>(0,E.jsxs)(u,{gap:`sm`,maw:`30rem`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`Every bar is the same width, whatever sits above it. The bars should all start and end in line, whether the row holds a long file name or a short one.`})]})},X={args:{media:q(`lecture-01`,{stage:1,total_stages:4,label:`Preparing the video`,in_progress:!0})},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`Straight after upload, while the video is being converted. The bar says how far along it is and the line says what is happening, so nobody has to guess whether anything is running.`})]})},Z={args:{media:q(`lecture-01`,{stage:2,total_stages:4,label:`Writing captions`,in_progress:!0})},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`The video already plays; only the captions are outstanding. This is the state that used to read "No captions", which is true and useless.`})]})},Q={args:{media:q(`lecture-01`,{stage:2,total_stages:4,label:`Video ready - captions have not started`,in_progress:!1})},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`Nothing is coming. This lasted two days once, while the captioning was switched off, and looked exactly like the state above. Saying so is the whole reason the start times are recorded.`})]})},$={args:{media:q(`lecture-01`,{stage:1,total_stages:4,label:`Processing seems to have failed`,in_progress:!1,stalled:!0})},render:e=>(0,E.jsxs)(u,{gap:`sm`,children:[(0,E.jsx)(w,{...e}),(0,E.jsx)(g,{children:`Started, and running far longer than it plausibly needs. Coloured as an alert, because waiting will not fix it.`})]})},de=[`AllLinked`,`SomethingMissing`,`ForOneOrganisation`,`NothingUploadedYet`,`UnattachedUploads`,`UploadInProgress`,`UploadRetrying`,`RowActions`,`DeleteWarnsAboutLiveOrganisations`,`NoMediaReferenced`,`DeleteFailed`,`OneRowsUploadFailed`,`DeleteFailedOnACompleteModule`,`Loading`,`EveryProgressState`,`NarrowScreen`,`PreparingTheVideo`,`WritingCaptions`,`CaptionsNeverStarted`,`ProcessingStalled`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    media: complete
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    media: incomplete,
    liveOrganisations: ["East of England ETA"]
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        The warning is the point: without it a mistyped reference hides the
        module from every learner with no trace an admin would see.
      </StoryNote>
    </Stack>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    media: incomplete,
    organisation: "East of England ETA",
    liveOrganisations: ["East of England ETA"]
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        A video is stored once for each organisation running the module, so the
        module page shows one card for each, named in its heading.
      </StoryNote>
    </Stack>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    media: {
      module_id: "echocardiography-interpretation",
      references: [{
        key: "lecture-01",
        asset: null
      }, {
        key: "debrief",
        asset: null
      }],
      unattached: [],
      is_complete: false
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    media: {
      ...incomplete,
      unattached: [orphan]
    }
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        What a renamed or removed reference leaves behind. Without a row these
        are invisible bytes nobody can reach or remove.
      </StoryNote>
    </Stack>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    media: incomplete,
    uploadProgress: {
      debrief: 42
    },
    uploadNames: {
      debrief: "Echocardiogram_panel_debrief_take4.mp4"
    }
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        Uploading is the first of the same four stages the processing states
        below use, so one bar of one shape carries the whole job from the first
        byte to finished captions - and it sits under the file it is working on,
        rather than in a column of its own to read across to.
      </StoryNote>
      <StoryNote>
        The bar tracks the bytes within that first stage, so it moves during a
        long upload. There is no "X of 4" beside it: the stages are our own
        machinery rather than something the admin is working through, and the
        words underneath say what is happening. See "Every progress state" for
        several points of an upload side by side.
      </StoryNote>
    </Stack>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    media: incomplete,
    uploadProgress: {
      debrief: 42
    },
    uploadNames: {
      debrief: "Echocardiogram_panel_debrief_take4.mp4"
    },
    uploadRetrying: {
      debrief: true
    }
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        The connection dropped partway, perhaps because the computer slept. The
        bar holds where it was and the line beneath says so, because a bar that
        has simply stopped looks the same as a page that has hung. Once the
        connection is back the upload carries on from what storage already
        holds, and the line returns to "Uploading".
      </StoryNote>
    </Stack>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    media: {
      module_id: "echocardiography-interpretation",
      references: [{
        key: "lecture-01",
        asset: {
          ...lecture,
          has_captions: true,
          has_poster: true
        }
      }],
      unattached: [],
      is_complete: true
    }
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        Open the menu at the end of the row for edit and delete, as the site and
        organisation tables do. Editing captions only appears where there are
        captions, and choosing a poster frame only where there is a poster, so
        the menu never offers an action that does nothing.
      </StoryNote>
    </Stack>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    media: complete,
    liveOrganisations: ["East of England ETA", "Norfolk and Norwich"]
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        Open the menu at the end of a row and press delete to see the
        confirmation. It names the organisations the module is live for, because
        the admin cannot see that consequence from this page.
      </StoryNote>
    </Stack>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    media: {
      module_id: "pure-text-module",
      references: [],
      unattached: [],
      is_complete: true
    }
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        The page renders no card at all in this case - shown here only to pin
        the empty state.
      </StoryNote>
    </Stack>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    media: incomplete,
    error: "Delete failed"
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        What a failed delete or load says. Shown rather than swallowed: an
        action that fails silently is indistinguishable from a button that does
        nothing. A failed upload is not shown here, but on its own row: see the
        next story.
      </StoryNote>
    </Stack>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    media: {
      module_id: "echocardiography-interpretation",
      references: [{
        key: "lecture-01",
        asset: null
      }, {
        key: "debrief",
        asset: null
      }],
      unattached: [],
      is_complete: false
    },
    uploadErrors: {
      "lecture-01": "The connection was lost during the upload. Keep this tab open and the computer awake, then try again."
    }
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        The row that failed is the row that says so, once, and the dropzone
        stays beneath it. The message names the cause and what to do: here the
        connection was lost, after the upload had already retried and given up.
        Nothing half-uploaded is linked, so trying again starts afresh. The
        second row is untouched, which is the point of keeping this per
        reference key rather than one message for the card.
      </StoryNote>
    </Stack>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    media: complete,
    error: "Delete failed"
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        A complete module shows no missing-media warning, so the error stands
        alone. The two are independent: one says what is absent, the other says
        what just went wrong.
      </StoryNote>
    </Stack>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    media: complete,
    loading: true
  }
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    media: {
      module_id: "echocardiography-interpretation",
      references: [{
        key: "uploading-4",
        asset: null
      }, {
        key: "uploading-42",
        asset: null
      }, {
        key: "uploading-88",
        asset: null
      }, {
        key: "preparing",
        asset: {
          ...lecture,
          asset_id: "s1",
          progress: {
            stage: 1,
            total_stages: 4,
            label: "Preparing the video",
            in_progress: true,
            stalled: false
          }
        }
      }, {
        key: "plays-without-processing",
        asset: {
          ...lecture,
          asset_id: "s1b",
          progress: {
            // Development, where no transcode job is configured. The
            // upload plays as it is and nothing further is coming, so
            // the row is finished and shows no bar.
            stage: 1,
            total_stages: 4,
            label: "Uploaded - plays without processing",
            in_progress: false,
            stalled: false,
            is_final: true
          }
        }
      }, {
        key: "not-started",
        asset: {
          ...lecture,
          asset_id: "s2",
          progress: {
            stage: 1,
            total_stages: 4,
            label: "Uploaded - processing has not started",
            in_progress: false,
            stalled: false
          }
        }
      }, {
        key: "processing-failed",
        asset: {
          ...lecture,
          asset_id: "s3",
          progress: {
            stage: 1,
            total_stages: 4,
            label: "Processing seems to have failed",
            in_progress: false,
            stalled: true
          }
        }
      }, {
        key: "writing-captions",
        asset: {
          ...lecture,
          asset_id: "s4",
          progress: {
            stage: 2,
            total_stages: 4,
            label: "Writing captions",
            in_progress: true,
            stalled: false
          }
        }
      }, {
        key: "captions-not-started",
        asset: {
          ...lecture,
          asset_id: "s5",
          progress: {
            stage: 2,
            total_stages: 4,
            label: "Video ready - captions have not started",
            in_progress: false,
            stalled: false
          }
        }
      }, {
        key: "captions-failed",
        asset: {
          ...lecture,
          asset_id: "s6",
          progress: {
            stage: 2,
            total_stages: 4,
            label: "Video ready - captions seem to have failed",
            in_progress: false,
            stalled: true
          }
        }
      }, {
        key: "captions-need-checking",
        asset: {
          ...lecture,
          asset_id: "s7",
          has_captions: true,
          captions_reviewed_at: null,
          progress: {
            stage: 3,
            total_stages: 4,
            label: "Captions need checking - hidden from learners until then",
            in_progress: false,
            stalled: false
          }
        }
      }, {
        key: "captions-checked",
        asset: {
          ...lecture,
          asset_id: "s8",
          has_captions: true,
          captions_reviewed_at: "2026-09-16T11:20:00Z",
          progress: {
            stage: 4,
            total_stages: 4,
            label: "Ready - captions checked",
            in_progress: false,
            stalled: false
          }
        }
      }, {
        key: "no-speech",
        asset: {
          ...lecture,
          asset_id: "s9",
          progress: {
            stage: 4,
            total_stages: 4,
            label: "Ready - no speech, so no captions needed",
            in_progress: false,
            stalled: false,
            is_final: true
          }
        }
      }],
      unattached: [],
      is_complete: false
    },
    uploadProgress: {
      "uploading-4": 4,
      "uploading-42": 42,
      "uploading-88": 88
    },
    /* The same name on every row, so nothing but the bar and the line
       beneath it differs down the column. This story exists to compare
       the states against each other, and varying the file names made
       the rows look like different videos rather than one video's
       progress shown eleven ways. */
    uploadNames: {
      "uploading-4": "Echocardiogram_overview.mp4",
      "uploading-42": "Echocardiogram_overview.mp4",
      "uploading-88": "Echocardiogram_overview.mp4"
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Every state the File column reaches, as one table.

The labels are copied verbatim from \`describe_progress\` in
\`backend/app/features/teaching/media.py\`, which is the only org_unit
that decides them - so if the wording here looks wrong, it is the
wording an admin actually sees.

Stacked in one table on purpose: the fault this column was built to
fix was a bar that changed shape and shifted sideways between
stages, and that is invisible in a story showing one row at a time.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  ...EveryProgressState,
  render: args => (
  /* Constrained here rather than through a viewport setting: this
     Storybook has no viewport addon configured, so one would type
     check, run, and change nothing at all. */
  <Stack gap="sm" maw="30rem">
      <ModuleMediaCard {...args} />
      <StoryNote>
        Every bar is the same width, whatever sits above it. The bars should all
        start and end in line, whether the row holds a long file name or a short
        one.
      </StoryNote>
    </Stack>)
}`,...Y.parameters?.docs?.source},description:{story:`The same states in a narrow viewport.

The bar used to size itself to whatever else was in the cell, so a
long file name gave a full-width bar and a short one a half-width
bar - two lengths in one column, neither meaning anything.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    media: processing("lecture-01", {
      stage: 1,
      total_stages: 4,
      label: "Preparing the video",
      in_progress: true
    })
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        Straight after upload, while the video is being converted. The bar says
        how far along it is and the line says what is happening, so nobody has
        to guess whether anything is running.
      </StoryNote>
    </Stack>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    media: processing("lecture-01", {
      stage: 2,
      total_stages: 4,
      label: "Writing captions",
      in_progress: true
    })
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        The video already plays; only the captions are outstanding. This is the
        state that used to read "No captions", which is true and useless.
      </StoryNote>
    </Stack>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    media: processing("lecture-01", {
      stage: 2,
      total_stages: 4,
      label: "Video ready - captions have not started",
      in_progress: false
    })
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        Nothing is coming. This lasted two days once, while the captioning was
        switched off, and looked exactly like the state above. Saying so is the
        whole reason the start times are recorded.
      </StoryNote>
    </Stack>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    media: processing("lecture-01", {
      stage: 1,
      total_stages: 4,
      label: "Processing seems to have failed",
      in_progress: false,
      stalled: true
    })
  },
  render: args => <Stack gap="sm">
      <ModuleMediaCard {...args} />
      <StoryNote>
        Started, and running far longer than it plausibly needs. Coloured as an
        alert, because waiting will not fix it.
      </StoryNote>
    </Stack>
}`,...$.parameters?.docs?.source}}}})))()}fe();export{N as AllLinked,Q as CaptionsNeverStarted,U as DeleteFailed,G as DeleteFailedOnACompleteModule,V as DeleteWarnsAboutLiveOrganisations,J as EveryProgressState,F as ForOneOrganisation,K as Loading,Y as NarrowScreen,H as NoMediaReferenced,I as NothingUploadedYet,W as OneRowsUploadFailed,X as PreparingTheVideo,$ as ProcessingStalled,B as RowActions,P as SomethingMissing,L as UnattachedUploads,R as UploadInProgress,z as UploadRetrying,Z as WritingCaptions,de as __namedExportsOrder,D as default};