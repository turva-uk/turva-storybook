import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,o as n}from"./blocks-Ddv-SCPv.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,r as a}from"./react-DITjJg24.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Form/Form/Guide`}),`
`,(0,c.jsx)(n.h1,{id:`form`,children:`Form`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`<Form>`}),` component is the `,(0,c.jsx)(n.strong,{children:`standard wrapper for all single-page forms`}),` in the application. It owns the submission lifecycle - loading state, success/error feedback, timeout handling - so individual pages don't need to reimplement this boilerplate.`]}),`
`,(0,c.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,c.jsxs)(n.p,{children:[`Use `,(0,c.jsx)(n.code,{children:`<Form>`}),` by default for any page or modal that collects data and submits it to an API.`]}),`
`,(0,c.jsx)(n.p,{children:`This includes:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Admin settings pages`}),`
`,(0,c.jsx)(n.li,{children:`User profile / account forms`}),`
`,(0,c.jsx)(n.li,{children:`Login, registration, forgot password`}),`
`,(0,c.jsx)(n.li,{children:`Patient data entry`}),`
`,(0,c.jsx)(n.li,{children:`Messaging compose flows`}),`
`,(0,c.jsx)(n.li,{children:`Any single-page save/send workflow`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`when-not-to-use`,children:`When NOT to use`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Multi-step forms`}),` - use `,(0,c.jsx)(n.code,{children:`MultiStepForm`}),` instead. It has its own step navigation, per-step validation, and confirmation step pattern that don't fit the `,(0,c.jsx)(n.code,{children:`<Form>`}),` model.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Teaching assessments`}),` - these have timer-driven flows, multi-question navigation, and scoring logic that require custom state management.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Inline toggles`}),` - single-field saves (e.g. a live status switch) where a full FormStatus card would be overkill.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`four-submission-patterns`,children:`Four submission patterns`}),`
`,(0,c.jsx)(n.p,{children:`Form supports four submission patterns - confirm is orthogonal to stay/navigate:`}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`#`}),(0,c.jsx)(n.th,{children:`Pattern`}),(0,c.jsx)(n.th,{children:`Components`}),(0,c.jsx)(n.th,{children:`Feedback location`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`1`}),(0,c.jsx)(n.td,{children:`Submit, stay on page`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`<Form>`}),` + `,(0,c.jsx)(n.code,{children:`<FormStatus>`})]}),(0,c.jsx)(n.td,{children:`Status card on same page`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`2`}),(0,c.jsx)(n.td,{children:`Submit + confirm, stay`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`<Form>`}),` + `,(0,c.jsx)(n.code,{children:`<ConfirmModal>`}),` + `,(0,c.jsx)(n.code,{children:`<FormStatus>`})]}),(0,c.jsx)(n.td,{children:`Status card on same page`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`3`}),(0,c.jsx)(n.td,{children:`Submit, navigate away`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`<Form>`}),` + `,(0,c.jsx)(n.code,{children:`PageMessage`}),` (centralised)`]}),(0,c.jsx)(n.td,{children:`Status card on destination page`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`4`}),(0,c.jsx)(n.td,{children:`Submit + confirm, navigate`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`<Form>`}),` + `,(0,c.jsx)(n.code,{children:`<ConfirmModal>`}),` + `,(0,c.jsx)(n.code,{children:`PageMessage`})]}),(0,c.jsx)(n.td,{children:`Status card on destination page`})]})]})]}),`
`,(0,c.jsx)(n.h2,{id:`architecture`,children:`Architecture`}),`
`,(0,c.jsx)(n.p,{children:`Form manages a state machine with seven states:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`idle → submitting → success
                  → partial_success
                  → error
                  → timeout
     → validation_error (client-side validation failed)
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`idle`}),` - no submission attempted`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`submitting`}),` - request in flight (button shows spinner + submitting label)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`success`}),` - full success`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`partial_success`}),` - composite write where some layers succeeded (e.g. letter saved but GP delivery pending)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`error`}),` - server rejected or handler threw`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`validation_error`}),` - client-side validation failed; uses amber/warning severity to avoid alert fatigue. Shows "Please check the highlighted fields" with a count of fields needing attention`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`timeout`}),` - request exceeded the configured timeout (default 30 seconds)`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`The state is exposed to child components via React context. `,(0,c.jsx)(n.code,{children:`FormStatus`}),` and `,(0,c.jsx)(n.code,{children:`SubmitButton`}),` subscribe to this context automatically - no prop threading needed.`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-usage-2---stay-on-form`,children:`Basic usage (§2 - stay on form)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { Form, FormStatus, SubmitButton } from "@components/form/Form";
import { TextField, SelectField } from "@components/form";

function SettingsPage() {
  const handleSubmit = async (data) => {
    await api.put("/api/settings", data);
    return {
      state: "success",
      message: { title: "Settings saved" },
    };
  };

  return (
    <Form
      defaultValues={{ name: "", role: "staff" }}
      onSubmit={handleSubmit}
      submitLabel="Save"
      submittingLabel="Saving…"
    >
      <Stack gap="md">
        <FormStatus />
        <TextField label="Name" />
        <SelectField label="Role" data={["staff", "admin"]} />
        <SubmitButton />
      </Stack>
    </Form>
  );
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`destructive-actions-1---confirm-modal`,children:`Destructive actions (§1 - confirm modal)`}),`
`,(0,c.jsxs)(n.p,{children:[`For destructive or irreversible actions, use the `,(0,c.jsx)(n.code,{children:`confirm`}),` prop on `,(0,c.jsx)(n.code,{children:`<Form>`}),` to gate submission behind a confirmation modal. The modal manages its own async loading state - the form stays idle until the user confirms.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { IconAlertTriangle } from "@tabler/icons-react";

function PermissionsPage() {
  const handleSubmit = async () => {
    await api.delete("/api/permissions/123");
    return {
      state: "success",
      message: { title: "Permissions deleted" },
    };
  };

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel="Delete permissions"
      submittingLabel="Deleting…"
      confirm={{
        title: "Delete system permissions",
        acceptLabel: "Delete",
        submittingLabel: "Deleting…",
        icon: <IconAlertTriangle />,
        children:
          "This will permanently delete all permissions. This action cannot be undone.",
      }}
    >
      <Stack gap="md">
        <FormStatus />
        {/* ... fields ... */}
        <SubmitButton />
      </Stack>
    </Form>
  );
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`confirmmodal-features`,children:`ConfirmModal features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`onAccept`}),` can be sync or async - spinner shows on the accept button while the promise is pending`]}),`
`,(0,c.jsx)(n.li,{children:`Both buttons disabled during loading (prevents double-submit)`}),`
`,(0,c.jsx)(n.li,{children:`Button width is locked during loading to prevent layout shift`}),`
`,(0,c.jsxs)(n.li,{children:[`On success: calls `,(0,c.jsx)(n.code,{children:`onClose`}),` automatically, loading state persists through the close animation (no flash)`]}),`
`,(0,c.jsx)(n.li,{children:`On error: stays open, caller handles error display`}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`closeOnClickOutside={false}`}),` - prevents accidental dismissal`]}),`
`,(0,c.jsx)(n.li,{children:`No close button - forces conscious dismissal via Cancel or confirm`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`navigate-away-on-success-3`,children:`Navigate away on success (§3)`}),`
`,(0,c.jsxs)(n.p,{children:[`For forms that navigate to a different page on success, pass a flash payload via React Router state. The centralised `,(0,c.jsx)(n.code,{children:`PageMessageProvider`}),` (in `,(0,c.jsx)(n.code,{children:`MainLayout`}),`) picks it up automatically and displays the message on the destination page - no per-page component needed.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { useNavigate } from "react-router";

function SendLetterPage() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const result = await api.post("/api/letters", data);
    navigate("/patients/123/letters", {
      state: {
        flash: {
          title: "Letter sent",
          description: \`ID #\${result.id}\`,
        },
      },
    });
    return { state: "success", message: { title: "" } };
  };

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel="Send letter"
      submittingLabel="Sending…"
    >
      <Stack gap="md">
        <FormStatus />
        {/* ... fields ... */}
        <SubmitButton />
      </Stack>
    </Form>
  );
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`On the destination page, the message appears automatically - no extra component needed.
The `,(0,c.jsx)(n.code,{children:`PageMessageProvider`}),` reads `,(0,c.jsx)(n.code,{children:`location.state.flash`}),` and renders it above the page content.`]}),`
`,(0,c.jsxs)(n.p,{children:[`For imperative page-level messages (e.g. after a delete action outside a `,(0,c.jsx)(n.code,{children:`<Form>`}),`), use
the `,(0,c.jsx)(n.code,{children:`usePageMessage`}),` hook:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { usePageMessage } from "@components/page-message";

function OrganisationsPage() {
  const { showMessage } = usePageMessage();

  async function handleDelete(org) {
    await api.del(\`/organizations/\${org.id}\`);
    showMessage({
      variant: "success",
      title: "Organisation removed",
      description: \`\${org.name} has been removed\`,
    });
  }

  return (
    <Container size="lg" py="xl">
      {/* PageMessageDisplay is rendered by MainLayout - no import needed */}
      <OrgList onDelete={handleDelete} />
    </Container>
  );
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`components`,children:`Components`}),`
`,(0,c.jsx)(n.h3,{id:`form-1`,children:(0,c.jsx)(n.code,{children:`<Form>`})}),`
`,(0,c.jsxs)(n.p,{children:[`The outer wrapper. Accepts `,(0,c.jsx)(n.code,{children:`defaultValues`}),`, an async `,(0,c.jsx)(n.code,{children:`onSubmit`}),` handler that returns a
`,(0,c.jsx)(n.code,{children:`FormSubmitResult`}),`, and optional `,(0,c.jsx)(n.code,{children:`submitLabel`}),`, `,(0,c.jsx)(n.code,{children:`submittingLabel`}),`, `,(0,c.jsx)(n.code,{children:`timeoutMs`}),`,
`,(0,c.jsx)(n.code,{children:`disableWhenClean`}),`, and `,(0,c.jsx)(n.code,{children:`confirm`}),` props.`]}),`
`,(0,c.jsxs)(n.p,{children:[`When `,(0,c.jsx)(n.code,{children:`disableWhenClean`}),` is true, the submit button is disabled until the user changes a field value.`]}),`
`,(0,c.jsxs)(n.p,{children:[`When `,(0,c.jsx)(n.code,{children:`confirm`}),` is provided, a `,(0,c.jsx)(n.code,{children:`<ConfirmModal>`}),` gates submission - the form validates first, then shows the modal. On confirm, the `,(0,c.jsx)(n.code,{children:`onSubmit`}),` handler runs.`]}),`
`,(0,c.jsx)(n.h3,{id:`formstatus-`,children:(0,c.jsx)(n.code,{children:`<FormStatus />`})}),`
`,(0,c.jsx)(n.p,{children:`Displays a status card when the form is in a result state (success, error, partial_success, timeout, validation_error).
Renders nothing during idle/submitting. Place it at the top of your form layout.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Uses `,(0,c.jsx)(n.code,{children:`role="status"`}),` for success/partial success, `,(0,c.jsx)(n.code,{children:`role="alert"`}),` for errors/timeout/validation`]}),`
`,(0,c.jsx)(n.li,{children:`Scrolls the page to the top when it appears`}),`
`,(0,c.jsx)(n.li,{children:`Dismissible by the user, never auto-dismissed`}),`
`,(0,c.jsxs)(n.li,{children:[`Can also be used standalone with manual props: `,(0,c.jsx)(n.code,{children:`<FormStatus variant="success" title="Done" />`})]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`submitbutton-`,children:(0,c.jsx)(n.code,{children:`<SubmitButton />`})}),`
`,(0,c.jsxs)(n.p,{children:[`Subscribes to form context for label and loading state. Uses `,(0,c.jsx)(n.code,{children:`aria-disabled`}),` (not `,(0,c.jsx)(n.code,{children:`disabled`}),`)
so it remains focusable for screen readers during submission. Shows a spinner alongside the
submitting label during submission, with the button width locked to prevent layout shift.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Optional `,(0,c.jsx)(n.code,{children:`onCancel`}),` prop adds a cancel button in a ButtonPair-style layout.`]}),`
`,(0,c.jsx)(n.h3,{id:`confirmmodal-`,children:(0,c.jsx)(n.code,{children:`<ConfirmModal />`})}),`
`,(0,c.jsxs)(n.p,{children:[`A standalone confirmation modal for destructive or irreversible actions. Lives in
`,(0,c.jsx)(n.code,{children:`components/confirm-modal/`}),` and can be used both inside and outside `,(0,c.jsx)(n.code,{children:`<Form>`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Props: `,(0,c.jsx)(n.code,{children:`opened`}),`, `,(0,c.jsx)(n.code,{children:`onClose`}),`, `,(0,c.jsx)(n.code,{children:`onAccept`}),` (async-aware), `,(0,c.jsx)(n.code,{children:`children`}),`, `,(0,c.jsx)(n.code,{children:`title?`}),`, `,(0,c.jsx)(n.code,{children:`acceptLabel?`}),`,
`,(0,c.jsx)(n.code,{children:`submittingLabel?`}),`, `,(0,c.jsx)(n.code,{children:`cancelLabel?`}),`, `,(0,c.jsx)(n.code,{children:`icon?`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`handling-errors`,children:`Handling errors`}),`
`,(0,c.jsxs)(n.p,{children:[`Your `,(0,c.jsx)(n.code,{children:`onSubmit`}),` handler should return a `,(0,c.jsx)(n.code,{children:`FormSubmitResult`}),` for both success and expected errors:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`const handleSubmit = async (data) => {
  const res = await api.put("/api/settings", data);
  if (!res.ok) {
    return {
      state: "error",
      message: {
        title: "Failed to save",
        description: "The server returned an error. Please try again.",
      },
    };
  }
  return {
    state: "success",
    message: { title: "Settings saved" },
  };
};
`})}),`
`,(0,c.jsxs)(n.p,{children:[`If your handler throws an unexpected error, Form catches it and shows a generic error message.
If the request exceeds `,(0,c.jsx)(n.code,{children:`timeoutMs`}),`, Form aborts and shows a timeout message automatically.`]}),`
`,(0,c.jsx)(n.h2,{id:`partial-success`,children:`Partial success`}),`
`,(0,c.jsxs)(n.p,{children:[`For composite writes (e.g. saving a letter and sending to a GP), use `,(0,c.jsx)(n.code,{children:`partial_success`}),`
when some operations succeeded but others failed:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`return {
  state: "partial_success",
  message: {
    title: "Partially saved",
    description:
      "Letter saved to patient record. Delivery to GP is still pending.",
  },
};
`})}),`
`,(0,c.jsx)(n.h2,{id:`field-components`,children:`Field components`}),`
`,(0,c.jsxs)(n.p,{children:[`All existing form field components work inside `,(0,c.jsx)(n.code,{children:`<Form>`}),` as children:
`,(0,c.jsx)(n.code,{children:`TextField`}),`, `,(0,c.jsx)(n.code,{children:`SelectField`}),`, `,(0,c.jsx)(n.code,{children:`TextAreaField`}),`, `,(0,c.jsx)(n.code,{children:`MultiSelectField`}),`, `,(0,c.jsx)(n.code,{children:`PasswordField`}),`,
`,(0,c.jsx)(n.code,{children:`SolidSwitch`}),`, `,(0,c.jsx)(n.code,{children:`RadioField`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,c.jsx)(n.p,{children:`The Form stories demonstrate all four submission patterns:`}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`Story`}),(0,c.jsx)(n.th,{children:`Pattern`}),(0,c.jsx)(n.th,{children:`Description`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Success submission`}),(0,c.jsx)(n.td,{children:`1`}),(0,c.jsx)(n.td,{children:`Standard save with success card`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Error submission`}),(0,c.jsx)(n.td,{children:`1`}),(0,c.jsx)(n.td,{children:`Server error with error card`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Unexpected error`}),(0,c.jsx)(n.td,{children:`1`}),(0,c.jsx)(n.td,{children:`Handler throws, generic fallback`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Partial success`}),(0,c.jsx)(n.td,{children:`1`}),(0,c.jsx)(n.td,{children:`Composite write with mixed outcomes`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Timeout`}),(0,c.jsx)(n.td,{children:`1`}),(0,c.jsx)(n.td,{children:`Request exceeds timeout`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Validation error`}),(0,c.jsx)(n.td,{children:`1`}),(0,c.jsx)(n.td,{children:`Client-side validation with field errors`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Confirm and stay`}),(0,c.jsx)(n.td,{children:`2`}),(0,c.jsx)(n.td,{children:`Destructive action with ConfirmModal, stays on page`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Confirm and navigate`}),(0,c.jsx)(n.td,{children:`4`}),(0,c.jsx)(n.td,{children:`ConfirmModal then navigates to destination with flash`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Submit and navigate`}),(0,c.jsx)(n.td,{children:`3`}),(0,c.jsx)(n.td,{children:`Direct submit then navigates with flash`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`Dirty state playground`}),(0,c.jsx)(n.td,{children:`1`}),(0,c.jsx)(n.td,{children:`All field types with disableWhenClean`})]})]})]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),n()})))()}l();export{s as default};