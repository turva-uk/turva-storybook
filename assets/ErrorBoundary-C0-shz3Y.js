import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,o as n}from"./blocks-Ddv-SCPv.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,r as a}from"./react-DITjJg24.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Error boundary/Error fallback/Guide`}),`
`,(0,c.jsx)(n.h1,{id:`error-boundary`,children:`Error boundary`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorBoundary`}),` catches unhandled React errors and shows `,(0,c.jsx)(n.code,{children:`ErrorFallback`}),` in
place of the crashed tree, instead of leaving the user at a white screen. It
also reports the error, so a crash reaches somebody who is not sitting with the
console open.`]}),`
`,(0,c.jsx)(n.h2,{id:`what-reaches-the-boundary-and-what-does-not`,children:`What reaches the boundary, and what does not`}),`
`,(0,c.jsxs)(n.p,{children:[`A boundary catches only what is thrown `,(0,c.jsx)(n.strong,{children:`while React renders`}),`. That is a
narrower set than it first appears, so errors are picked up in two places
rather than one.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`React render errors`}),` - caught here. Reported with React's component stack,
which names the failing part of the interface rather than a line of the
minified bundle. This is the only place that stack exists.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Rejected promises`}),` - never reach a boundary at all. Picked up by the
window listeners in `,(0,c.jsx)(n.code,{children:`lib/error-reporting/globalHandlers.ts`}),`. In an
application built on API calls, this is the most common failure of the lot.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Errors from timers and event listeners`}),` - thrown outside a render, so also
the window listeners.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Errors before the tree mounts`}),` - the listeners are installed in `,(0,c.jsx)(n.code,{children:`main.tsx`}),`
ahead of the first render, so a failure during it is reported rather than
lost.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Resource load failures`}),` - a broken image, or a stylesheet that 404s.
Deliberately ignored: they carry no error object, so a stack trace would say
nothing anybody could act on, and there would be a great many of them.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`reporting`,children:`Reporting`}),`
`,(0,c.jsxs)(n.p,{children:[`Reports go to `,(0,c.jsx)(n.code,{children:`POST /api/analytics/client-errors`}),` via `,(0,c.jsx)(n.code,{children:`navigator.sendBeacon`}),`,
and reach Cloud Error Reporting grouped as `,(0,c.jsx)(n.code,{children:`quill-frontend`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Two things are true of that path by design. Nothing it does can throw, because
the user is already looking at a broken page and a failed report must not make
that worse. And nothing sensitive leaves the browser: every field is sanitised
first, and the server sanitises again, since the endpoint is public.`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`console.error`}),` call stays alongside the report. They serve different
people - the console is what a developer with the tools open actually reads,
and the report is what reaches somebody who is not watching.`]}),`
`,(0,c.jsx)(n.h2,{id:`fallback-copy`,children:`Fallback copy`}),`
`,(0,c.jsx)(n.p,{children:`The fallback says "Something went wrong" and offers a reload. It deliberately
shows no technical detail: the user cannot act on a stack trace, and anything
shown on screen is visible to whoever else is in the room.`}),`
`,(0,c.jsx)(n.h2,{id:`telling-us-what-happened`,children:`Telling us what happened`}),`
`,(0,c.jsxs)(n.p,{children:[`Beside the reload, `,(0,c.jsx)(n.code,{children:`Tell us what happened`}),` opens the same feedback modal the
sidebar's `,(0,c.jsx)(n.code,{children:`Feedback`}),` link does. This is the moment somebody is most
likely to explain a fault, because they have certainly just hit one. What
they send carries the caught error's name and code, so a submission can be
matched to its report.`]}),`
`,(0,c.jsx)(n.p,{children:`Two things differ from the sidebar's modal. It is rendered from the fallback
itself, and nothing on its send path needs the router, since the tree below
has already failed. And it offers no link to the sender's own feedback: the
boundary stays in its failed state whatever the address, so the link would
lead straight back here.`})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),n()})))()}l();export{s as default};