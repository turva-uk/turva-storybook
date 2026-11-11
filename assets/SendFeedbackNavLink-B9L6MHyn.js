import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{m as n,p as r}from"./theme-B7Ll1jCm.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{_ as a,d as o,g as s,p as c}from"./iframe-gh_IKeZo.js";import{n as l,r as u}from"./sendFeedback-CTBT0DhY.js";import{n as d,t as f}from"./NavIcon-Cuud3MpV.js";import{n as p,t as m}from"./useNavCollapsed-tuCJJHHT.js";import{n as h,r as g}from"./navStyles-0jIDbcj_.js";import{i as _,n as v,r as y,t as b}from"./FeedbackModal-BATGmxgi.js";function x(e){return typeof e==`object`&&!!e&&`navDrawerOpen`in e&&e.navDrawerOpen===!0}var S;function C(){return(C=e((()=>{S={navDrawerOpen:!0}})))()}function w(e,t){return e.href&&t===e.href||e.href&&t.startsWith(e.href+`/`)?!0:e.children?e.children.some(e=>w(e,t)):!1}function T({item:e,onNavigate:t,showIcons:n=!1,level:i=0}){let c=s(),l=a(),u=e.href?c.pathname===e.href||!e.exact&&!e.children?.length&&c.pathname.startsWith(e.href+`/`):!1,d=w(e,c.pathname),m=e.children&&e.children.length>0,h=e.href!==void 0&&c.pathname===e.href,_=e.keepsDrawerOpen&&!h?void 0:t,v=p(),y=e.keepsDrawerOpen&&v?S:void 0,b=()=>{e.href?l(e.href):m&&e.children[0].href&&l(e.children[0].href),_?.()},x=n&&!!e.icon,C;C=i===0?void 0:x?i===1?1.9:i*1.5:.6+i*.75;let D={root:{...g.root,paddingLeft:C?`${C}rem`:void 0},label:g.label};return(0,E.jsxs)(E.Fragment,{children:[e.href?(0,E.jsx)(r,{component:o,to:e.href,state:y,label:e.label,styles:D,active:u,onClick:()=>_?.(),leftSection:n&&e.icon?(0,E.jsx)(f,{name:e.icon}):void 0}):(0,E.jsx)(r,{label:e.label,styles:D,active:u,onClick:b,leftSection:n&&e.icon?(0,E.jsx)(f,{name:e.icon}):void 0}),m&&d&&(0,E.jsx)(E.Fragment,{children:e.children.map(e=>(0,E.jsx)(T,{item:e,onNavigate:t,showIcons:n,level:i+1},e.href??e.label))})]})}var E;function D(){return(D=e((()=>{n(),c(),d(),m(),C(),h(),E=i(),T.__docgenInfo={description:`Recursive Navigation Link Item

Renders a navigation link that:
- Highlights when active (exact match)
- Highlights when parent of active route
- Expands to show children when active path matches
- Supports unlimited nesting levels with visual indentation

Child items are:
- Indented by 1.5rem per level (plus 2.5rem when icons are shown)
- Font size reduced by 12.5% (0.875 multiplier)
- Aligned with parent text (accounts for icon space)

@param props - Component props
@returns Navigation link with optional nested children`,methods:[],displayName:`NestedNavLink`,props:{item:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  /** Display label */
  label: string;
  /** Route path (optional for parent-only group headers) */
  href?: string;
  /** Optional icon name (uses NavIcon) */
  icon?: IconName;
  /** Optional child navigation items */
  children?: NavItem[];
  /**
   * Leave the mobile drawer open when this item is pressed. For a
   * heading such as Admin, whose page is mostly a way to its children:
   * pressing it reveals them, and closing the drawer at that moment
   * hides them again, so reaching one took a second trip to the
   * hamburger.
   */
  keepsDrawerOpen?: boolean;
  /**
   * Highlight on this item's own address only. An item with no children
   * otherwise stays highlighted on every page beneath it, which is right
   * when nothing else in the menu names that page and wrong when
   * something does: two entries then claim to be where you are.
   */
  exact?: boolean;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0},description:`Display label`},{key:`href`,value:{name:`string`,required:!1},description:`Route path (optional for parent-only group headers)`},{key:`icon`,value:{name:`union`,raw:`| "home"
| "settings"
| "logout"
| "user"
| "bell"
| "message"
| "file"
| "adjustments"
| "building-community"
| "building-hospital"
| "teaching"
| "passport"
| "book"
| "pricing"
| "database"
| "mail"
| "feedback"
| "safety"`,elements:[{name:`literal`,value:`"home"`},{name:`literal`,value:`"settings"`},{name:`literal`,value:`"logout"`},{name:`literal`,value:`"user"`},{name:`literal`,value:`"bell"`},{name:`literal`,value:`"message"`},{name:`literal`,value:`"file"`},{name:`literal`,value:`"adjustments"`},{name:`literal`,value:`"building-community"`},{name:`literal`,value:`"building-hospital"`},{name:`literal`,value:`"teaching"`},{name:`literal`,value:`"passport"`},{name:`literal`,value:`"book"`},{name:`literal`,value:`"pricing"`},{name:`literal`,value:`"database"`},{name:`literal`,value:`"mail"`},{name:`literal`,value:`"feedback"`},{name:`literal`,value:`"safety"`}],required:!1},description:`Optional icon name (uses NavIcon)`},{key:`children`,value:{name:`Array`,elements:[{name:`NavItem`}],raw:`NavItem[]`,required:!1},description:`Optional child navigation items`},{key:`keepsDrawerOpen`,value:{name:`boolean`,required:!1},description:`Leave the mobile drawer open when this item is pressed. For a
heading such as Admin, whose page is mostly a way to its children:
pressing it reveals them, and closing the drawer at that moment
hides them again, so reaching one took a second trip to the
hamburger.`},{key:`exact`,value:{name:`boolean`,required:!1},description:`Highlight on this item's own address only. An item with no children
otherwise stays highlighted on every page beneath it, which is right
when nothing else in the menu names that page and wrong when
something does: two entries then claim to be where you are.`}]}},description:`Navigation item configuration`},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called after navigation (to close mobile drawer)`},showIcons:{required:!1,tsType:{name:`boolean`},description:`Whether to show icons`,defaultValue:{value:`false`,computed:!1}},level:{required:!1,tsType:{name:`number`},description:`Nesting level for indentation (internal use)`,defaultValue:{value:`0`,computed:!1}}}}})))()}function O({showIcons:e=!0,onNavigate:t}){let[n,i]=(0,k.useState)(!1),a=s().pathname===y;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(r,{label:`Feedback`,styles:g,onClick:()=>i(!0),leftSection:e?(0,A.jsx)(f,{name:`feedback`}):void 0}),a&&(0,A.jsx)(T,{item:{label:`Your feedback`,href:`/feedback`},onNavigate:t,showIcons:e,level:1}),(0,A.jsx)(b,{opened:n,onClose:()=>i(!1),onSubmit:u,onFollowYourFeedback:t})]})}var k,A;function j(){return(j=e((()=>{n(),k=t(),c(),d(),D(),h(),_(),l(),v(),A=i(),O.__docgenInfo={description:``,methods:[],displayName:`SendFeedbackNavLink`,props:{showIcons:{required:!1,tsType:{name:`boolean`},description:`Whether to show the icon beside the label (defaults to true)`,defaultValue:{value:`true`,computed:!1}},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called after following a `Your feedback` link, the sidebar child or\nthe one in the modal (to close the drawer)"}}}})))()}export{x as a,D as i,j as n,C as o,T as r,O as t};