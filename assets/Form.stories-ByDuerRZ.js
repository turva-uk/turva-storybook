import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{b as n,i as r,m as i,n as a,o,p as s,t as c,y as l}from"./Form-BQWpUpVW.js";import{t as ee}from"./jsx-runtime-MKhVqBIO.js";import{n as u,t as d}from"./MultiSelectField-Dn62m3xs.js";import{n as te,t as ne}from"./RadioField-DfsmsToJ.js";import{n as f,t as p}from"./Stack-D_d3SZwt.js";import{n as m,t as h}from"./SolidSwitch-B5z1COCw.js";import{Cn as g,n as re}from"./appIcons-BpiHpu4d.js";import{a as _}from"./FormStatusNarrow-CFbV3b2J.js";import{n as v,t as y}from"./SelectField-CfDE1WBv.js";import{n as b,t as x}from"./TextAreaField-DDxRyQwA.js";import{a as S,n as C}from"./variants-US1Dcm7T.js";function w(e){return new Promise(t=>setTimeout(t,e))}function T({flash:e}){return e?(0,B.jsx)(r,{variant:e.variant??`success`,title:e.title,description:e.description}):null}function E(){let{methods:e}=_(),{register:t}=e;return(0,B.jsx)(s,{label:`Name`,...t(`name`)})}function D(){let{methods:e}=_(),{watch:t,setValue:n}=e,r=t(`isStaff`);return(0,B.jsx)(h,{label:`Staff`,checked:r,onChange:e=>n(`isStaff`,e.currentTarget.checked,{shouldDirty:!0})})}function O(){let{methods:e}=_(),{watch:t,setValue:n}=e,r=t(`role`);return(0,B.jsx)(y,{label:`Role`,value:r,onChange:e=>n(`role`,e,{shouldDirty:!0}),data:[{value:`clinician`,label:`Clinician`},{value:`admin`,label:`Admin`},{value:`staff`,label:`Staff`}]})}function ie(){let{methods:e}=_(),{register:t}=e;return(0,B.jsx)(l,{label:`Password`,...t(`password`)})}function k(){let{methods:e}=_(),{register:t}=e;return(0,B.jsx)(x,{label:`Notes`,...t(`notes`)})}function ae(){let{methods:e}=_(),{register:t}=e;return(0,B.jsx)(s,{label:`Patient name`,...t(`patientName`)})}function A(){let{methods:e}=_(),{register:t}=e;return(0,B.jsx)(s,{label:`Hospital number`,...t(`hospitalNumber`)})}function j(){let{methods:e}=_(),{register:t}=e;return(0,B.jsx)(s,{label:`Date of birth`,...t(`dateOfBirth`)})}function M(){let{methods:e}=_(),{register:t}=e;return(0,B.jsx)(x,{label:`Letter contents`,...t(`letterContents`),minRows:6})}function N(){let{methods:e}=_(),{watch:t,setValue:n}=e,r=t(`user`);return(0,B.jsx)(y,{label:`User`,value:r,onChange:e=>n(`user`,e,{shouldDirty:!0}),data:[{value:`Dr Smith`,label:`Dr Smith`},{value:`Dr Jones`,label:`Dr Jones`},{value:`Dr Patel`,label:`Dr Patel`}]})}function P(){let{methods:e}=_(),{watch:t,setValue:n}=e,r=t(`level`);return(0,B.jsx)(y,{label:`Permission level`,value:r,onChange:e=>n(`level`,e,{shouldDirty:!0}),data:[{value:`staff`,label:`Staff`},{value:`clinician`,label:`Clinician`},{value:`admin`,label:`Admin`},{value:`superadmin`,label:`Superadmin`}]})}function F(){let{methods:e}=_(),{watch:t,setValue:n}=e,r=t(`username`);return(0,B.jsx)(y,{label:`User`,value:r,onChange:e=>n(`username`,e,{shouldDirty:!0}),data:[{value:`Dr Smith`,label:`Dr Smith`},{value:`Dr Jones`,label:`Dr Jones`},{value:`Dr Patel`,label:`Dr Patel`}]})}function I(){let{methods:e}=_(),{watch:t,setValue:n}=e,r=t(`priority`);return(0,B.jsx)(ne,{label:`Priority`,value:r,onChange:e=>n(`priority`,e,{shouldDirty:!0}),options:[{value:`low`,label:`Low`},{value:`normal`,label:`Normal`},{value:`high`,label:`High`}]})}function L(){let{methods:e}=_(),{watch:t,setValue:n}=e,r=t(`tags`);return(0,B.jsx)(d,{label:`Tags`,value:r,onChange:e=>n(`tags`,e,{shouldDirty:!0}),data:[{value:`urgent`,label:`Urgent`},{value:`follow-up`,label:`Follow-up`},{value:`review`,label:`Review`}]})}function R(){let{methods:e}=_(),{register:t,formState:{errors:n}}=e;return(0,B.jsx)(s,{label:`Email`,...t(`name`,{required:`Email is required`,pattern:{value:/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/,message:`Please enter a valid email address`}}),error:n.name?.message})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{f(),S(),c(),i(),b(),n(),v(),u(),m(),te(),re(),z=t(),B=ee(),V={title:`Form/Form`,component:o,parameters:{layout:`padded`}},H={render:function(){return(0,B.jsx)(o,{defaultValues:{name:`Dr Smith`,isStaff:!1,role:`clinician`},onSubmit:async()=>(await w(1e3),{state:`success`,message:{title:`Settings saved`,description:`Your changes have been applied.`}}),submitLabel:`Save`,submittingLabel:`Saving…`,disableWhenClean:!0,children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Change a value, then press submit`}),(0,B.jsx)(r,{}),(0,B.jsx)(E,{}),(0,B.jsx)(D,{}),(0,B.jsx)(O,{}),(0,B.jsx)(a,{onCancel:()=>{}})]})})}},U={render:function(){return(0,B.jsx)(o,{defaultValues:{name:`Dr Smith`,isStaff:!1,role:`clinician`},onSubmit:async()=>(await w(1e3),{state:`error`,message:{title:`Failed to save`,description:`The server returned an error.`}}),submitLabel:`Save`,submittingLabel:`Saving…`,disableWhenClean:!0,children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Change a value, then press submit`}),(0,B.jsx)(r,{}),(0,B.jsx)(E,{}),(0,B.jsx)(D,{}),(0,B.jsx)(O,{}),(0,B.jsx)(a,{onCancel:()=>{}})]})})}},W={render:function(){return(0,B.jsx)(o,{defaultValues:{name:`Dr Smith`,isStaff:!1,role:`clinician`},onSubmit:async()=>{throw await w(1e3),Error(`Network failure`)},submitLabel:`Save`,submittingLabel:`Saving…`,disableWhenClean:!0,children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Change a value, then press submit`}),(0,B.jsx)(r,{}),(0,B.jsx)(E,{}),(0,B.jsx)(D,{}),(0,B.jsx)(O,{}),(0,B.jsx)(a,{onCancel:()=>{}})]})})}},G={render:function(){return(0,B.jsx)(o,{defaultValues:{name:`Dr Smith`,isStaff:!1,role:`clinician`},onSubmit:async()=>(await w(1e3),{state:`partial_success`,message:{title:`Partially saved`,description:`Letter saved to patient record. Delivery to GP is still pending.`}}),submitLabel:`Send`,submittingLabel:`Sending…`,disableWhenClean:!0,children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Change a value, then press submit`}),(0,B.jsx)(r,{}),(0,B.jsx)(E,{}),(0,B.jsx)(D,{}),(0,B.jsx)(O,{}),(0,B.jsx)(a,{onCancel:()=>{}})]})})}},K={render:function(){return(0,B.jsx)(o,{defaultValues:{name:`Dr Smith`,isStaff:!1,role:`clinician`},onSubmit:async()=>(await w(6e4),{state:`success`,message:{title:`Saved`}}),submitLabel:`Save`,submittingLabel:`Saving…`,disableWhenClean:!0,timeoutMs:2e3,children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Change a value, then press submit`}),(0,B.jsx)(r,{}),(0,B.jsx)(E,{}),(0,B.jsx)(D,{}),(0,B.jsx)(O,{}),(0,B.jsx)(a,{onCancel:()=>{}})]})})}},q={render:function(){return(0,B.jsx)(o,{defaultValues:{name:`not-an-email`,isStaff:!1,role:`clinician`},onSubmit:async()=>(await w(500),{state:`success`,message:{title:`Saved`}}),submitLabel:`Save`,submittingLabel:`Saving…`,disableWhenClean:!0,children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Change a value, then press submit to see the validation warning`}),(0,B.jsx)(r,{}),(0,B.jsx)(R,{}),(0,B.jsx)(D,{}),(0,B.jsx)(O,{}),(0,B.jsx)(a,{onCancel:()=>{}})]})})}},J={render:function(){return(0,B.jsx)(o,{defaultValues:{name:`Dr Smith`,password:``,notes:``,isStaff:!1,role:`clinician`,priority:`normal`,tags:[]},onSubmit:async()=>(await w(1e3),{state:`success`,message:{title:`Saved`,description:`Your changes have been applied.`}}),submitLabel:`Save`,submittingLabel:`Saving…`,disableWhenClean:!0,children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Change any field - Save should enable. Revert all - Save should disable.`}),(0,B.jsx)(r,{}),(0,B.jsx)(E,{}),(0,B.jsx)(ie,{}),(0,B.jsx)(k,{}),(0,B.jsx)(D,{}),(0,B.jsx)(O,{}),(0,B.jsx)(I,{}),(0,B.jsx)(L,{}),(0,B.jsx)(a,{onCancel:()=>{}})]})})}},Y={render:function(){let e={admin:`Admin`,staff:`Staff`,clinician:`Clinician`,superadmin:`Superadmin`};return(0,B.jsx)(o,{defaultValues:{user:`Dr Smith`,level:`admin`},onSubmit:async t=>(await w(1500),{state:`success`,message:{title:`Permission deleted`,description:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`strong`,{children:e[t.level]||t.level}),` `,`permission for `,(0,B.jsx)(`strong`,{children:t.user}),` has been removed.`]})}}),submitLabel:`Delete permissions`,submittingLabel:`Deleting…`,confirm:{title:`Delete system permissions`,children:`This will permanently delete the selected permissions. This action cannot be undone.`,acceptLabel:`Delete`,submittingLabel:`Deleting…`,icon:(0,B.jsx)(g,{})},children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Press "Delete permissions". A confirmation modal will appear. Confirming stays on this page with a success message.`}),(0,B.jsx)(r,{}),(0,B.jsx)(N,{}),(0,B.jsx)(P,{}),(0,B.jsx)(a,{onCancel:()=>{}})]})})}},X={render:function(){let[e,t]=(0,z.useState)(`form`),[n,i]=(0,z.useState)(null);return e===`destination`?(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(T,{flash:n}),(0,B.jsx)(C,{children:`Staff members list (destination page)`}),(0,B.jsx)(C,{children:`The flash message above was passed via React Router navigation state and rendered by the centralised PageMessage system.`})]}):(0,B.jsx)(o,{defaultValues:{username:`Dr Smith`},onSubmit:async e=>(await w(1500),i({title:`Staff member removed`,description:`${e.username} has been removed from the organisation.`}),t(`destination`),{state:`success`,message:{title:``}}),submitLabel:`Remove staff member`,submittingLabel:`Removing…`,confirm:{title:`Remove staff member`,children:`Are you sure you want to remove this member from the organisation? This action cannot be undone.`,acceptLabel:`Remove`,submittingLabel:`Removing…`,icon:(0,B.jsx)(g,{})},children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Press "Remove staff member". A confirmation modal appears, then navigates to a destination page with a flash message.`}),(0,B.jsx)(r,{}),(0,B.jsx)(F,{}),(0,B.jsx)(a,{onCancel:()=>{}})]})})}},Z={render:function(){let[e,t]=(0,z.useState)(`form`),[n,i]=(0,z.useState)(null);return e===`destination`?(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(T,{flash:n}),(0,B.jsx)(C,{children:`Patient letters list (destination page)`}),(0,B.jsx)(C,{children:`The flash message above was passed via React Router navigation state and rendered by the centralised PageMessage system.`})]}):(0,B.jsx)(o,{defaultValues:{patientName:`Jane Smith`,hospitalNumber:`H-2847193`,dateOfBirth:`12/03/1985`,letterContents:`Your thyroid function tests are normal.`},onSubmit:async()=>(await w(1500),i({title:`Letter sent`,description:`Discharge letter has been sent to the GP.`}),t(`destination`),{state:`success`,message:{title:``}}),submitLabel:`Send letter`,submittingLabel:`Sending…`,children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(C,{children:`Press "Send letter". The form will navigate to a new page with a flash message.`}),(0,B.jsx)(r,{}),(0,B.jsx)(ae,{}),(0,B.jsx)(A,{}),(0,B.jsx)(j,{}),(0,B.jsx)(M,{}),(0,B.jsx)(a,{onCancel:()=>{},cancelLabel:`Back`})]})})}},Q=[`SuccessSubmission`,`ErrorSubmission`,`UnexpectedError`,`PartialSuccessSubmission`,`TimeoutSubmission`,`ValidationError`,`DirtyStatePlayground`,`ConfirmAndStay`,`ConfirmThenNavigate`,`SubmitAndNavigate`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function SuccessStory() {
    const handleSubmit = async (): Promise<FormSubmitResult> => {
      await delay(1000);
      return {
        state: "success",
        message: {
          title: "Settings saved",
          description: "Your changes have been applied."
        }
      };
    };
    return <Form<DemoFormValues> defaultValues={{
      name: "Dr Smith",
      isStaff: false,
      role: "clinician"
    }} onSubmit={handleSubmit} submitLabel="Save" submittingLabel="Saving…" disableWhenClean>
        <Stack gap="md">
          <StoryNote>Change a value, then press submit</StoryNote>
          <FormStatus />
          <RegisteredName />
          <RegisteredStaff />
          <RegisteredRole />
          <SubmitButton onCancel={() => {}} />
        </Stack>
      </Form>;
  }
}`,...H.parameters?.docs?.source},description:{story:`Success - form submits and shows a success status card`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function ErrorStory() {
    const handleSubmit = async (): Promise<FormSubmitResult> => {
      await delay(1000);
      return {
        state: "error",
        message: {
          title: "Failed to save",
          description: "The server returned an error."
        }
      };
    };
    return <Form<DemoFormValues> defaultValues={{
      name: "Dr Smith",
      isStaff: false,
      role: "clinician"
    }} onSubmit={handleSubmit} submitLabel="Save" submittingLabel="Saving…" disableWhenClean>
        <Stack gap="md">
          <StoryNote>Change a value, then press submit</StoryNote>
          <FormStatus />
          <RegisteredName />
          <RegisteredStaff />
          <RegisteredRole />
          <SubmitButton onCancel={() => {}} />
        </Stack>
      </Form>;
  }
}`,...U.parameters?.docs?.source},description:{story:`Error - form submits and shows an error status card`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function UnexpectedErrorStory() {
    const handleSubmit = async (): Promise<FormSubmitResult> => {
      await delay(1000);
      throw new Error("Network failure");
    };
    return <Form<DemoFormValues> defaultValues={{
      name: "Dr Smith",
      isStaff: false,
      role: "clinician"
    }} onSubmit={handleSubmit} submitLabel="Save" submittingLabel="Saving…" disableWhenClean>
        <Stack gap="md">
          <StoryNote>Change a value, then press submit</StoryNote>
          <FormStatus />
          <RegisteredName />
          <RegisteredStaff />
          <RegisteredRole />
          <SubmitButton onCancel={() => {}} />
        </Stack>
      </Form>;
  }
}`,...W.parameters?.docs?.source},description:{story:`Unexpected error - handler throws instead of returning a result.
Form catches it and shows the generic fallback message.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function PartialStory() {
    const handleSubmit = async (): Promise<FormSubmitResult> => {
      await delay(1000);
      return {
        state: "partial_success",
        message: {
          title: "Partially saved",
          description: "Letter saved to patient record. Delivery to GP is still pending."
        }
      };
    };
    return <Form<DemoFormValues> defaultValues={{
      name: "Dr Smith",
      isStaff: false,
      role: "clinician"
    }} onSubmit={handleSubmit} submitLabel="Send" submittingLabel="Sending…" disableWhenClean>
        <Stack gap="md">
          <StoryNote>Change a value, then press submit</StoryNote>
          <FormStatus />
          <RegisteredName />
          <RegisteredStaff />
          <RegisteredRole />
          <SubmitButton onCancel={() => {}} />
        </Stack>
      </Form>;
  }
}`,...G.parameters?.docs?.source},description:{story:`Partial success - composite write with mixed outcomes`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function TimeoutStory() {
    const handleSubmit = async (): Promise<FormSubmitResult> => {
      // This will be aborted by the 2s timeout
      await delay(60_000);
      return {
        state: "success",
        message: {
          title: "Saved"
        }
      };
    };
    return <Form<DemoFormValues> defaultValues={{
      name: "Dr Smith",
      isStaff: false,
      role: "clinician"
    }} onSubmit={handleSubmit} submitLabel="Save" submittingLabel="Saving…" disableWhenClean timeoutMs={2000}>
        <Stack gap="md">
          <StoryNote>Change a value, then press submit</StoryNote>
          <FormStatus />
          <RegisteredName />
          <RegisteredStaff />
          <RegisteredRole />
          <SubmitButton onCancel={() => {}} />
        </Stack>
      </Form>;
  }
}`,...K.parameters?.docs?.source},description:{story:`Timeout - form submission exceeds timeout`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function ValidationErrorStory() {
    const handleSubmit = async (): Promise<FormSubmitResult> => {
      await delay(500);
      return {
        state: "success",
        message: {
          title: "Saved"
        }
      };
    };
    return <Form<DemoFormValues> defaultValues={{
      name: "not-an-email",
      isStaff: false,
      role: "clinician"
    }} onSubmit={handleSubmit} submitLabel="Save" submittingLabel="Saving…" disableWhenClean>
        <Stack gap="md">
          <StoryNote>
            Change a value, then press submit to see the validation warning
          </StoryNote>
          <FormStatus />
          <ValidatedEmail />
          <RegisteredStaff />
          <RegisteredRole />
          <SubmitButton onCancel={() => {}} />
        </Stack>
      </Form>;
  }
}`,...q.parameters?.docs?.source},description:{story:`Validation error - press submit with an invalid email to see the warning card
and inline field errors. Uses RHF validation so the onInvalid handler
triggers the validation_error state with amber styling.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function DirtyStateStory() {
    const handleSubmit = async (): Promise<FormSubmitResult> => {
      await delay(1000);
      return {
        state: "success",
        message: {
          title: "Saved",
          description: "Your changes have been applied."
        }
      };
    };
    return <Form<PlaygroundFormValues> defaultValues={{
      name: "Dr Smith",
      password: "",
      notes: "",
      isStaff: false,
      role: "clinician",
      priority: "normal",
      tags: []
    }} onSubmit={handleSubmit} submitLabel="Save" submittingLabel="Saving…" disableWhenClean>
        <Stack gap="md">
          <StoryNote>
            Change any field - Save should enable. Revert all - Save should
            disable.
          </StoryNote>
          <FormStatus />
          <RegisteredName />
          <RegisteredPassword />
          <RegisteredNotes />
          <RegisteredStaff />
          <RegisteredRole />
          <RegisteredPriority />
          <RegisteredTags />
          <SubmitButton onCancel={() => {}} />
        </Stack>
      </Form>;
  }
}`,...J.parameters?.docs?.source},description:{story:`Dirty state playground - every atomic form field with disableWhenClean.
Toggle each field to verify the Save button enables/disables correctly.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function ConfirmAndStayStory() {
    const permissionLabels: Record<string, string> = {
      admin: "Admin",
      staff: "Staff",
      clinician: "Clinician",
      superadmin: "Superadmin"
    };
    const handleSubmit = async (data: PermissionFormValues): Promise<FormSubmitResult> => {
      await delay(1500);
      return {
        state: "success",
        message: {
          title: "Permission deleted",
          description: <>
              <strong>{permissionLabels[data.level] || data.level}</strong>{" "}
              permission for <strong>{data.user}</strong> has been removed.
            </>
        }
      };
    };
    return <Form<PermissionFormValues> defaultValues={{
      user: "Dr Smith",
      level: "admin"
    }} onSubmit={handleSubmit} submitLabel="Delete permissions" submittingLabel="Deleting…" confirm={{
      title: "Delete system permissions",
      children: "This will permanently delete the selected permissions. This action cannot be undone.",
      acceptLabel: "Delete",
      submittingLabel: "Deleting…",
      icon: <IconAlertTriangle />
    }}>
        <Stack gap="md">
          <StoryNote>
            Press "Delete permissions". A confirmation modal will appear.
            Confirming stays on this page with a success message.
          </StoryNote>
          <FormStatus />
          <RegisteredUser />
          <RegisteredPermissionLevel />
          <SubmitButton onCancel={() => {}} />
        </Stack>
      </Form>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Pattern 2 - Form with confirm prop, stays on page.
Validation passes → confirm modal opens → user confirms → onSubmit fires.
Success is shown via FormStatus on the same page.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function ConfirmThenNavigateStory() {
    const [page, setPage] = useState<"form" | "destination">("form");
    const [flash, setFlash] = useState<FlashPayload | null>(null);
    if (page === "destination") {
      return <Stack gap="md">
          <InjectFlash flash={flash} />
          <StoryNote>Staff members list (destination page)</StoryNote>
          <StoryNote>
            The flash message above was passed via React Router navigation state
            and rendered by the centralised PageMessage system.
          </StoryNote>
        </Stack>;
    }
    const handleSubmit = async (data: StaffRemovalFormValues): Promise<FormSubmitResult> => {
      await delay(1500);
      setFlash({
        title: "Staff member removed",
        description: \`\${data.username} has been removed from the organisation.\`
      });
      setPage("destination");
      return {
        state: "success",
        message: {
          title: ""
        }
      };
    };
    return <Form<StaffRemovalFormValues> defaultValues={{
      username: "Dr Smith"
    }} onSubmit={handleSubmit} submitLabel="Remove staff member" submittingLabel="Removing…" confirm={{
      title: "Remove staff member",
      children: "Are you sure you want to remove this member from the organisation? This action cannot be undone.",
      acceptLabel: "Remove",
      submittingLabel: "Removing…",
      icon: <IconAlertTriangle />
    }}>
        <Stack gap="md">
          <StoryNote>
            Press "Remove staff member". A confirmation modal appears, then
            navigates to a destination page with a flash message.
          </StoryNote>
          <FormStatus />
          <RegisteredUsername />
          <SubmitButton onCancel={() => {}} />
        </Stack>
      </Form>;
  }
}`,...X.parameters?.docs?.source},description:{story:`§4 Form with confirm prop + navigate - destructive action confirmed
via modal, then navigates to a destination page with a flash message.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function SubmitAndNavigateStory() {
    const [page, setPage] = useState<"form" | "destination">("form");
    const [flash, setFlash] = useState<FlashPayload | null>(null);
    if (page === "destination") {
      return <Stack gap="md">
          <InjectFlash flash={flash} />
          <StoryNote>Patient letters list (destination page)</StoryNote>
          <StoryNote>
            The flash message above was passed via React Router navigation state
            and rendered by the centralised PageMessage system.
          </StoryNote>
        </Stack>;
    }
    const handleSubmit = async (): Promise<FormSubmitResult> => {
      await delay(1500);
      setFlash({
        title: "Letter sent",
        description: "Discharge letter has been sent to the GP."
      });
      setPage("destination");
      return {
        state: "success",
        message: {
          title: ""
        }
      };
    };
    return <Form<LetterFormValues> defaultValues={{
      patientName: "Jane Smith",
      hospitalNumber: "H-2847193",
      dateOfBirth: "12/03/1985",
      letterContents: "Your thyroid function tests are normal."
    }} onSubmit={handleSubmit} submitLabel="Send letter" submittingLabel="Sending…">
        <Stack gap="md">
          <StoryNote>
            Press "Send letter". The form will navigate to a new page with a
            flash message.
          </StoryNote>
          <FormStatus />
          <RegisteredPatientName />
          <RegisteredHospitalNumber />
          <RegisteredDateOfBirth />
          <RegisteredLetterContents />
          <SubmitButton onCancel={() => {}} cancelLabel="Back" />
        </Stack>
      </Form>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`§3 Submit and navigate - no confirm modal, the form submits and
navigates to a destination page that picks up a flash message.`,...Z.parameters?.docs?.description}}}})))()}$();export{Y as ConfirmAndStay,X as ConfirmThenNavigate,J as DirtyStatePlayground,U as ErrorSubmission,G as PartialSuccessSubmission,Z as SubmitAndNavigate,H as SuccessSubmission,K as TimeoutSubmission,W as UnexpectedError,q as ValidationError,Q as __namedExportsOrder,V as default};