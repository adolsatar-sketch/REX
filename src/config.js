// ─────────────────────────────────────────────────────────────
// REX Group — central site settings.
// Every world (REX, ADOL, SLASH, APERIO, REX Campaigns) reads its
// phone, email, Instagram and form delivery from here. Edit only here.
// ─────────────────────────────────────────────────────────────
const REX_CONFIG = Object.freeze({
  contact: Object.freeze({
    phone: "07754513600",
    phoneIntl: "+9647754513600", // used for tel: and WhatsApp links
    email: "rexgroup44@gmail.com",
    instagram: "https://www.instagram.com/rexgroupx?psln=YzFwZHI2aDVmcm1y",
  }),
  form: Object.freeze({
    // Delivery service for every contact form and the "draw your idea" sheet.
    // FormSubmit (https://formsubmit.co) forwards submissions to `to` by email,
    // attachments included. The FIRST submission sends an activation email to
    // that inbox; click "Activate" there once and later submissions arrive.
    // Set endpoint to "" to disable sending (the forms then say so honestly).
    endpoint: "https://formsubmit.co/ajax/rexgroup44@gmail.com",
    to: "rexgroup44@gmail.com",
    maxFileMB: 10,
  }),
});
