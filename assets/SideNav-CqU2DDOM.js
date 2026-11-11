import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Divider-BkZfNhmn.js";import{n as i,t as a}from"./Stack-D_d3SZwt.js";import{n as o,t as s}from"./TextInput-D9JxOkCP.js";import{j as c,n as l}from"./appIcons-BpiHpu4d.js";import{n as u,t as d}from"./SideNavContent-BTGSvyXa.js";import{r as f,t as p}from"./search-Yj5vaVVI.js";function m({showSearch:e,onNavigate:t,showIcons:n,patientNav:i}){let o=f();return(0,h.jsx)(`nav`,{role:`navigation`,"aria-label":`Primary`,style:{minWidth:`6.25rem`,height:`100%`},children:(0,h.jsxs)(a,{p:`sm`,gap:`xs`,children:[e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{"aria-label":`Search`,placeholder:`Search…`,value:o.query,onChange:e=>o.setQuery(e.currentTarget.value),rightSectionPointerEvents:`none`,rightSection:(0,h.jsx)(c,{size:16}),style:{paddingRight:`0.9375rem`}}),(0,h.jsx)(r,{my:`xs`})]}),(0,h.jsx)(d,{onNavigate:t,showIcons:n,patientNav:i})]})})}var h;function g(){return(g=e((()=>{i(),o(),p(),n(),l(),u(),h=t(),m.__docgenInfo={description:`Side Navigation

Renders navigation menu with optional search field and navigation items.
Provides aria-label for accessibility.

@param props - Component props
@returns Side navigation panel`,methods:[],displayName:`SideNav`,props:{showSearch:{required:!0,tsType:{name:`boolean`},description:`Whether to show the search input field at the top`},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called after a nav item is chosen (use to close mobile overlay)`},showIcons:{required:!1,tsType:{name:`boolean`},description:`Whether to show icons next to navigation labels`},patientNav:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
something does: two entries then claim to be where you are.`}]}}],raw:`NavItem[]`},description:`Patient navigation breadcrumbs (flat array)`}}}})))()}export{g as n,m as t};