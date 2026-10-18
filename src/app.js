const xd = [
  { path: "/", world: "rex", page: "home" },
  { path: "/about", world: "rex", page: "about" },
  { path: "/contact", world: "rex", page: "contact" },
  { path: "/adol", world: "adol", page: "home" },
  { path: "/adol/services", world: "adol", page: "services" },
  { path: "/adol/projects", world: "adol", page: "projects" },
  { path: "/adol/process", world: "adol", page: "process" },
  { path: "/adol/about", world: "adol", page: "about" },
  { path: "/adol/contact", world: "adol", page: "contact" },
  { path: "/slash", world: "slash", page: "home" },
  { path: "/slash/services", world: "slash", page: "services" },
  { path: "/slash/strategy", world: "slash", page: "strategy" },
  { path: "/slash/projects", world: "slash", page: "projects" },
  { path: "/slash/about", world: "slash", page: "about" },
  { path: "/slash/contact", world: "slash", page: "contact" },
  { path: "/aperio", world: "aperio", page: "home" },
  { path: "/aperio/services", world: "aperio", page: "services" },
  { path: "/aperio/projects", world: "aperio", page: "projects" },
  { path: "/aperio/process", world: "aperio", page: "process" },
  { path: "/aperio/about", world: "aperio", page: "about" },
  { path: "/aperio/contact", world: "aperio", page: "contact" },
  { path: "/rex-campaigns", world: "rexCampaigns", page: "home" },
  { path: "/rex-campaigns/services", world: "rexCampaigns", page: "services" },
  {
    path: "/rex-campaigns/campaigns",
    world: "rexCampaigns",
    page: "campaigns",
  },
  { path: "/rex-campaigns/process", world: "rexCampaigns", page: "process" },
  { path: "/rex-campaigns/about", world: "rexCampaigns", page: "about" },
  { path: "/rex-campaigns/contact", world: "rexCampaigns", page: "contact" },
];
function zi(e) {
  if (!e) return "/";
  let n = e.split("?")[0].split("#")[0];
  return (
    n.length > 1 && n.endsWith("/") && (n = n.slice(0, -1)),
    (n = n.replace(/\.html$/, "").replace(/\/index$/, "") || "/"),
    n
  );
}
function Ci(e) {
  const n = zi(e);
  return (
    xd.find((t) => t.path === n) || { path: n, world: "rex", page: "notFound" }
  );
}
function yd(e) {
  if (!e) return null;
  const n = e.replace(/^#/, ""),
    t = xd.find((r) => r.path.slice(1).replace(/\//g, "-") === n);
  return t ? t.path : null;
}
const Lm = "memory",
  kd = w.createContext(null);
function xm() {
  return yd(window.location.hash) || "/";
}
function ym({ children: e }) {
  const [n, t] = w.useState(xm),
    r = w.useRef(new Set()),
    s = w.useCallback((i, { replace: o = !1 } = {}) => {
      const u = zi(i);
      t(u), window.scrollTo(0, 0);
    }, []);
  w.useEffect(() => {
    const i = () => {
      const o = yd(window.location.hash);
      o && t(o);
    };
    return (
      window.addEventListener("hashchange", i),
      () => window.removeEventListener("hashchange", i)
    );
  }, []),
    w.useEffect(() => {}, []);
  const a = w.useMemo(
    () => ({ path: n, route: Ci(n), commit: s, mode: Lm, listeners: r }),
    [n, s],
  );
  return l.jsx(kd.Provider, { value: a, children: e });
}
const Ir = () => w.useContext(kd),
  km = {
    backToRex: { ar: "رجوع لـ REX Group", en: "Back to REX Group" },
    skipIntro: { ar: "تخطي", en: "Skip" },
    sound: { ar: "الصوت", en: "Sound" },
    soundOn: { ar: "تشغيل الصوت", en: "Turn sound on" },
    soundOff: { ar: "إيقاف الصوت", en: "Turn sound off" },
    switchLang: { ar: "English", en: "العربية" },
    switchLangLabel: { ar: "Switch to English", en: "التبديل إلى العربية" },
    skipToContent: { ar: "انتقل للمحتوى", en: "Skip to content" },
    menu: { ar: "القائمة", en: "Menu" },
    close: { ar: "إغلاق", en: "Close" },
    home: { ar: "الرئيسية", en: "Home" },
    about: { ar: "من نحن", en: "About" },
    contact: { ar: "تواصل", en: "Contact" },
    services: { ar: "الخدمات", en: "Services" },
    projects: { ar: "المشاريع", en: "Projects" },
    works: { ar: "الأعمال", en: "Work" },
    process: { ar: "طريقة العمل", en: "Process" },
    strategy: { ar: "الاستراتيجية", en: "Strategy" },
    campaigns: { ar: "الحملات", en: "Campaigns" },
    enter: { ar: "ادخل", en: "Enter" },
    loading: { ar: "نغوص بالعالم الجديد…", en: "Diving into a new world…" },
    notFoundTitle: {
      ar: "غصنا أعمق من اللازم.",
      en: "We dove a little too deep.",
    },
    notFoundText: {
      ar: "الصفحة اللي تدور عليها مو موجودة.",
      en: "The page you’re looking for isn’t here.",
    },
    goHub: { ar: "ارجع للـHub", en: "Back to the hub" },
    provisional: {
      ar: "هوية مؤقتة — بانتظار ملفات الهوية الرسمية.",
      en: "Provisional theme — awaiting the official identity files.",
    },
    fName: { ar: "الاسم", en: "Name" },
    fCompany: { ar: "اسم الشركة", en: "Company" },
    fPhone: { ar: "رقم الهاتف", en: "Phone" },
    fEmail: { ar: "البريد الإلكتروني", en: "Email" },
    fDivision: { ar: "القسم المطلوب", en: "Division" },
    fType: { ar: "نوع المشروع", en: "Project type" },
    fGoal: { ar: "الهدف", en: "Goal" },
    fBudget: { ar: "الميزانية التقريبية", en: "Approximate budget" },
    fDate: { ar: "الموعد المتوقع", en: "Expected timing" },
    fDetails: { ar: "تفاصيل المشروع", en: "Project details" },
    fFile: { ar: "ملف (اختياري)", en: "File (optional)" },
    fSend: { ar: "إرسال", en: "Send" },
    fRequired: { ar: "مطلوب", en: "Required" },
    fNotConnected: {
      ar: "النموذج جاهز بس بعده مو مربوط بخدمة إرسال. انسخ الرسالة وأرسلها لحين ربطه.",
      en: "The form is ready but not yet connected to a sending service. Copy your message and send it until it is connected.",
    },
    fCopy: { ar: "نسخ الرسالة", en: "Copy message" },
    fCopied: { ar: "انسخت", en: "Copied" },
    fEdit: { ar: "تعديل", en: "Edit" },
    contactPending: {
      ar: "معلومات التواصل الرسمية بانتظار التزويد.",
      en: "Official contact details to be provided.",
    },
    pending: { ar: "سيُضاف المحتوى قريباً.", en: "Content will be added." },
    projectsSoon: { ar: "المشاريع قريباً.", en: "Projects coming soon." },
    fullContact: { ar: "صفحة التواصل الكاملة", en: "Full contact page" },
  },
  Sm = "English copy coming soon.";
function Rr(e) {
  return {
    name: null,
    definition: null,
    vision: null,
    mission: null,
    story: null,
    value: null,
    audience: [],
    services: [],
    specialties: [],
    method: null,
    phases: [],
    team: [],
    lead: null,
    tools: [],
    sectors: [],
    projects: [],
    caseStudies: [],
    clients: [],
    achievements: [],
    numbers: [],
    stats: [],
    packages: [],
    pricing: null,
    faq: [],
    contact: {
      email: null,
      phone: null,
      whatsapp: null,
      address: null,
      hours: null,
    },
    social: [],
    cta: null,
    images: [],
    videos: [],
    bts: [],
    testimonials: [],
    partners: [],
    ...e,
  };
}
const tn = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ""),
  Sd = w.createContext(null),
  wd = "rex-lang";
function wm() {
  try {
    const e = localStorage.getItem(wd);
    if (e === "ar" || e === "en") return e;
  } catch {}
  return "ar";
}
function jm({ children: e }) {
  const [n, t] = w.useState(wm),
    r = w.useCallback((o) => {
      t(o);
      try {
        localStorage.setItem(wd, o);
      } catch {}
    }, []);
  w.useEffect(() => {
    (document.documentElement.lang = n),
      (document.documentElement.dir = n === "ar" ? "rtl" : "ltr");
  }, [n]);
  const s = w.useCallback(
      (o) => {
        var c;
        if (o == null) return "";
        if (typeof o == "string" || Array.isArray(o)) return o;
        const u = o[n];
        return u == null || u === ""
          ? n === "en"
            ? Sm
            : (c = o.en) != null
              ? c
              : ""
          : u;
      },
      [n],
    ),
    a = w.useCallback(
      (o) => {
        var c;
        const u = km[o];
        return u ? ((c = u[n]) != null ? c : u.en) : o;
      },
      [n],
    ),
    i = w.useMemo(
      () => ({
        lang: n,
        setLang: r,
        t: s,
        ui: a,
        dir: n === "ar" ? "rtl" : "ltr",
      }),
      [n, r, s, a],
    );
  return l.jsx(Sd.Provider, { value: i, children: e });
}
const R = () => w.useContext(Sd),
  jd = w.createContext({ on: !1, toggle: () => {}, cue: () => {} });
function Nm({ children: e }) {
  const [n, t] = w.useState(!1),
    r = w.useRef(null),
    s = w.useCallback(() => t((i) => !i), []),
    a = w.useCallback(
      (i) => {
        if (n)
          try {
            r.current =
              r.current ||
              new (window.AudioContext || window.webkitAudioContext)();
            const o = r.current,
              u = o.currentTime,
              c = o.createGain();
            c.connect(o.destination);
            const A = (h, g, y = 1) => {
                const k = o.createBuffer(1, o.sampleRate * h, o.sampleRate),
                  N = k.getChannelData(0);
                for (let p = 0; p < N.length; p++)
                  N[p] = (Math.random() * 2 - 1) * (1 - p / N.length);
                const f = o.createBufferSource();
                f.buffer = k;
                const d = o.createBiquadFilter();
                (d.type = "bandpass"),
                  (d.frequency.value = g),
                  (d.Q.value = y),
                  f.connect(d),
                  d.connect(c),
                  f.start(u);
              },
              m = (h, g, y, k = "sine") => {
                const N = o.createOscillator();
                (N.type = k),
                  N.frequency.setValueAtTime(h, u),
                  N.frequency.exponentialRampToValueAtTime(g, u + y),
                  N.connect(c),
                  N.start(u),
                  N.stop(u + y);
              };
            c.gain.setValueAtTime(0.18, u),
              c.gain.exponentialRampToValueAtTime(0.001, u + 0.5),
              i === "adol"
                ? A(0.06, 2400, 2)
                : i === "slash"
                  ? A(0.35, 900, 0.6)
                  : i === "aperio"
                    ? m(660, 990, 0.12)
                    : i === "rexCampaigns"
                      ? m(180, 60, 0.25, "triangle")
                      : A(0.25, 3200, 4);
          } catch {}
      },
      [n],
    );
  return l.jsx(jd.Provider, {
    value: { on: n, toggle: s, cue: a },
    children: e,
  });
}
const Nd = () => w.useContext(jd),
  Em = "modulepreload",
  zm = function (e, n) {
    return new URL(e, n).href;
  },
  Qo = {},
  Yt = function (n, t, r) {
    let s = Promise.resolve();
    if (t && t.length > 0) {
      const i = document.getElementsByTagName("link"),
        o = document.querySelector("meta[property=csp-nonce]"),
        u =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      s = Promise.allSettled(
        t.map((c) => {
          if (((c = zm(c, r)), c in Qo)) return;
          Qo[c] = !0;
          const A = c.endsWith(".css"),
            m = A ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let y = i.length - 1; y >= 0; y--) {
              const k = i[y];
              if (k.href === c && (!A || k.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${c}"]${m}`)) return;
          const g = document.createElement("link");
          if (
            ((g.rel = A ? "stylesheet" : Em),
            A || (g.as = "script"),
            (g.crossOrigin = ""),
            (g.href = c),
            u && g.setAttribute("nonce", u),
            document.head.appendChild(g),
            A)
          )
            return new Promise((y, k) => {
              g.addEventListener("load", y),
                g.addEventListener("error", () =>
                  k(new Error(`Unable to preload CSS for ${c}`)),
                );
            });
        }),
      );
    }
    function a(i) {
      const o = new Event("vite:preloadError", { cancelable: !0 });
      if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented))
        throw i;
    }
    return s.then((i) => {
      for (const o of i || []) o.status === "rejected" && a(o.reason);
      return n().catch(a);
    });
  },
  Ii = {
    rex: {
      id: "rex",
      base: "/",
      kind: "hub",
      load: () =>
        Yt(() => Promise.resolve().then(() => S1), void 0, import.meta.url),
      fonts: null,
    },
    adol: {
      id: "adol",
      base: "/adol",
      kind: "division",
      discipline: { ar: "إنتاج", en: "Production" },
      load: () =>
        Yt(() => Promise.resolve().then(() => Z1), void 0, import.meta.url),
      fonts:
        "https://fonts.googleapis.com/css2?family=Anton&family=Lalezar&family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap",
    },
    slash: {
      id: "slash",
      base: "/slash",
      kind: "division",
      discipline: { ar: "تسويق", en: "Marketing" },
      load: () =>
        Yt(() => Promise.resolve().then(() => F1), void 0, import.meta.url),
      fonts:
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap",
    },
    aperio: {
      id: "aperio",
      base: "/aperio",
      kind: "division",
      discipline: { ar: "مواقع", en: "Websites" },
      load: () =>
        Yt(() => Promise.resolve().then(() => ah), void 0, import.meta.url),
      fonts:
        "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Tajawal:wght@400;500;700;800&display=swap",
    },
    rexCampaigns: {
      id: "rexCampaigns",
      base: "/rex-campaigns",
      kind: "division",
      discipline: { ar: "حملات", en: "Campaigns" },
      load: () =>
        Yt(() => Promise.resolve().then(() => xh), void 0, import.meta.url),
      fonts: null,
    },
  },
  Ia = ["adol", "slash", "aperio", "rexCampaigns"],
  Go = new Set();
function Ri(e) {
  var r;
  const n = (r = Ii[e]) == null ? void 0 : r.fonts;
  if (!n || Go.has(n) || typeof document == "undefined") return;
  Go.add(n);
  const t = document.createElement("link");
  (t.rel = "stylesheet"), (t.href = n), document.head.appendChild(t);
}
function Ed(e) {
  var n;
  return Ri(e), (n = Ii[e]) == null ? void 0 : n.load();
}
const Cm = {
    viewBox: "-8.5 -32.4 254.4 167.0",
    strokes: [
      {
        id: "r-stem",
        d: "M-2.0 56.6 L-2.0 50.6 L-1.7 44.5 L-2.2 38.0 L-2.3 32.9 L-1.9 21.9 L-1.0 12.3 L-1.7 6.2 L-1.9 -1.5 L-1.1 -3.9 L0.7 -5.8 L3.1 -7.0 L6.1 -7.4 L9.2 -6.9 L12.2 -5.6 L14.8 -3.6 L16.7 -1.1 L17.8 1.7 L17.9 4.4 L17.7 7.4 L16.2 16.1 L16.0 18.5 L16.4 27.4 L16.1 33.0 L16.1 38.4 L16.0 40.9 L15.0 49.4 L15.1 55.7 L14.9 61.6 L15.4 71.4 L15.0 80.2 L15.6 89.2 L16.1 93.1 L17.5 99.5 L17.8 104.4 L17.0 106.8 L15.3 108.7 L12.8 109.9 L10.0 110.2 L6.9 109.7 L3.9 108.4 L1.4 106.4 L-0.5 104.0 L-1.6 101.3 L-1.8 96.4 L-1.2 90.3 L-1.1 87.3 L-1.6 78.2 L-2.4 70.4 L-2.5 66.0Z",
        cl: "M8.0 1.5 L7.9 4.5 L7.7 8.6 L7.6 13.5 L7.4 19.0 L7.2 24.6 L7.1 30.3 L6.9 35.7 L6.8 40.5 L6.7 44.8 L6.6 49.1 L6.5 53.1 L6.5 57.1 L6.4 61.0 L6.4 64.9 L6.4 68.7 L6.5 72.5 L6.6 76.5 L6.8 80.6 L7.0 84.9 L7.2 89.0 L7.5 92.9 L7.7 96.3 L7.9 99.3 L8.1 101.5",
      },
      {
        id: "r-bowl",
        d: "M27.1 -7.8 L32.8 -8.3 L38.4 -7.5 L43.0 -6.1 L51.4 -2.5 L55.5 0.0 L58.7 2.5 L60.7 4.6 L63.0 7.5 L64.2 9.6 L66.0 14.0 L66.6 16.6 L67.1 19.3 L67.4 24.1 L67.2 26.9 L66.8 29.7 L66.1 32.3 L64.7 36.5 L63.1 40.2 L61.8 42.7 L60.1 45.1 L57.8 47.7 L55.7 49.7 L53.2 51.6 L50.5 53.2 L47.4 54.7 L44.1 56.0 L40.2 57.0 L14.6 60.3 L12.1 60.0 L9.8 58.9 L7.7 57.3 L6.2 55.4 L5.4 53.2 L5.3 51.0 L5.9 49.1 L7.3 47.6 L9.3 46.7 L14.1 46.1 L23.9 45.9 L27.8 45.6 L35.3 44.3 L39.0 43.3 L40.2 42.8 L43.8 40.0 L47.4 35.9 L50.5 31.1 L51.7 28.7 L52.2 26.8 L52.8 22.6 L53.0 18.8 L52.6 16.3 L52.1 14.5 L51.3 13.2 L49.5 11.6 L46.3 9.4 L42.7 7.5 L39.6 6.5 L36.9 5.8 L34.2 5.7 L30.4 5.8 L26.8 6.4 L15.1 9.8 L10.6 10.6 L8.0 10.2 L5.6 9.1 L3.5 7.5 L2.0 5.5 L1.1 3.3 L1.0 1.0 L1.7 -0.9 L3.1 -2.5 L5.1 -3.4 L13.5 -5.4Z",
        cl: "M9.0 3.4 L11.1 3.0 L14.0 2.2 L17.4 1.3 L21.1 0.4 L25.1 -0.4 L29.0 -1.0 L32.7 -1.3 L35.9 -1.1 L39.0 -0.5 L42.1 0.4 L45.2 1.6 L48.1 3.0 L50.9 4.7 L53.4 6.5 L55.5 8.4 L57.2 10.4 L58.4 12.6 L59.3 15.1 L59.9 17.8 L60.1 20.5 L60.1 23.4 L59.9 26.2 L59.3 28.9 L58.6 31.4 L57.7 33.8 L56.5 36.3 L55.0 38.7 L53.3 41.1 L51.4 43.3 L49.2 45.4 L46.7 47.2 L44.0 48.7 L40.7 49.9 L36.7 50.9 L32.2 51.6 L27.6 52.1 L23.1 52.5 L19.0 52.8 L15.6 53.1 L13.1 53.4",
      },
      {
        id: "r-leg",
        d: "M20.3 50.9 L20.2 48.7 L20.9 46.8 L22.3 45.3 L24.2 44.3 L26.5 44.1 L29.0 44.5 L31.3 45.5 L33.4 47.1 L34.9 49.1 L38.2 52.7 L41.0 56.3 L46.1 61.5 L50.6 67.1 L53.1 70.5 L56.0 75.7 L60.2 81.6 L63.9 85.5 L73.1 97.4 L74.9 99.2 L76.8 101.7 L77.8 104.4 L77.9 107.1 L77.1 109.5 L75.4 111.4 L72.9 112.6 L70.0 113.0 L67.0 112.5 L64.0 111.2 L61.4 109.2 L59.5 106.7 L58.4 104.6 L54.9 100.2 L52.7 97.0 L49.3 92.6 L46.6 87.4 L44.1 83.7 L41.8 79.9 L38.0 74.9 L35.8 71.2 L30.8 63.7 L22.7 55.0 L21.2 53.0Z",
        cl: "M28.0 51.0 L29.0 52.2 L30.4 53.8 L32.0 55.6 L33.8 57.7 L35.8 59.9 L37.7 62.2 L39.6 64.5 L41.4 66.8 L43.0 69.1 L44.7 71.5 L46.4 74.0 L48.1 76.5 L49.7 79.1 L51.4 81.6 L53.1 84.1 L54.8 86.5 L56.5 88.9 L58.4 91.5 L60.4 94.1 L62.3 96.6 L64.1 99.0 L65.7 101.1 L67.1 102.9 L68.1 104.2",
      },
      {
        id: "e-spine",
        d: "M80.4 31.9 L81.2 26.3 L81.2 18.0 L81.7 13.3 L81.9 6.2 L82.9 4.0 L84.6 2.2 L87.0 1.2 L89.7 1.0 L92.6 1.6 L95.4 3.0 L97.8 5.0 L99.5 7.5 L100.3 10.1 L100.3 12.7 L98.9 24.2 L97.5 32.0 L97.4 37.9 L96.8 46.5 L96.7 52.4 L95.9 58.3 L95.9 69.8 L96.6 77.0 L96.1 101.4 L95.2 103.4 L93.6 105.0 L91.5 106.0 L88.9 106.1 L86.2 105.6 L83.7 104.3 L81.6 102.5 L80.0 100.2 L79.2 97.8 L78.6 73.2 L79.4 66.3 L79.7 54.8 L79.3 48.8 L79.3 46.3Z",
        cl: "M91.1 9.5 L90.9 12.5 L90.5 16.4 L90.1 21.1 L89.6 26.4 L89.1 32.0 L88.7 37.8 L88.3 43.7 L88.0 49.4 L87.8 55.4 L87.7 62.1 L87.7 69.3 L87.6 76.4 L87.6 83.2 L87.6 89.4 L87.6 94.6 L87.6 98.4",
      },
      {
        id: "e-top",
        d: "M104.1 -0.8 L112.4 -1.6 L115.7 -1.1 L122.0 -1.0 L127.1 -1.5 L130.0 -1.2 L134.1 -1.0 L136.5 -0.6 L138.7 0.5 L140.5 2.1 L141.9 4.1 L142.6 6.2 L142.6 8.3 L141.8 10.1 L140.5 11.4 L138.6 12.3 L129.4 12.9 L124.6 12.5 L120.2 12.7 L117.4 13.3 L106.4 13.9 L103.6 14.8 L98.0 15.7 L94.2 16.0 L91.4 15.8 L88.8 15.3 L86.4 14.1 L84.3 12.3 L82.9 10.2 L82.1 7.9 L82.1 5.6 L82.9 3.6 L84.4 2.1 L89.0 0.4 L98.5 -0.4 L101.2 -0.3Z",
        cl: "M90.2 8.4 L91.8 8.2 L94.1 8.0 L96.8 7.6 L99.8 7.3 L102.9 6.9 L106.1 6.6 L109.3 6.3 L112.2 6.0 L115.2 5.9 L118.5 5.8 L121.8 5.7 L125.1 5.7 L128.3 5.7 L131.1 5.7 L133.5 5.7 L135.2 5.7",
      },
      {
        id: "e-mid",
        d: "M106.8 44.9 L108.6 45.1 L111.4 44.8 L114.3 43.8 L122.0 43.0 L124.2 43.5 L126.3 44.5 L128.0 46.0 L129.3 47.9 L130.0 49.9 L130.0 51.8 L129.3 53.5 L128.0 54.8 L126.2 55.6 L123.6 56.1 L121.9 56.7 L121.0 56.9 L117.5 57.1 L113.4 58.0 L111.4 58.8 L110.4 59.0 L102.6 59.4 L100.3 60.1 L94.4 60.7 L93.4 60.7 L88.6 59.9 L86.4 58.7 L84.5 57.1 L83.1 55.1 L82.3 52.9 L82.4 50.8 L83.1 48.9 L84.5 47.5 L88.5 46.0 L95.5 45.6 L98.1 45.9Z",
        cl: "M89.9 53.4 L91.3 53.3 L93.2 53.2 L95.5 53.0 L98.0 52.9 L100.6 52.6 L103.2 52.4 L105.7 52.2 L107.9 51.9 L110.1 51.7 L112.3 51.3 L114.5 50.9 L116.6 50.6 L118.6 50.2 L120.4 49.9 L121.9 49.6 L123.0 49.4",
      },
      {
        id: "e-bot",
        d: "M80.0 97.8 L80.0 95.4 L80.9 93.3 L82.5 91.6 L84.7 90.7 L87.3 90.5 L89.9 90.8 L94.5 90.5 L101.2 91.0 L104.8 91.7 L105.7 91.7 L110.4 91.4 L113.5 90.8 L116.2 90.6 L119.1 90.7 L125.0 90.2 L128.8 89.3 L135.6 88.9 L138.0 89.4 L140.2 90.5 L142.1 92.1 L143.5 94.1 L144.2 96.3 L144.2 98.4 L143.5 100.2 L142.1 101.6 L140.1 102.5 L136.0 103.6 L131.4 104.1 L128.2 105.0 L124.7 105.6 L121.5 106.5 L112.4 106.9 L108.6 106.7 L103.9 107.2 L97.2 107.1 L92.8 106.3 L89.9 106.4 L87.2 105.8 L84.6 104.5 L82.4 102.6 L80.8 100.3Z",
        cl: "M88.6 98.4 L90.5 98.5 L92.9 98.6 L95.9 98.8 L99.1 99.0 L102.6 99.1 L106.1 99.2 L109.5 99.2 L112.6 99.1 L115.8 98.8 L119.2 98.5 L122.7 98.0 L126.2 97.5 L129.5 96.9 L132.4 96.5 L134.9 96.0 L136.7 95.8",
      },
      {
        id: "x-hand",
        d: "M151.5 3.0 L150.6 0.6 L150.5 -1.7 L151.3 -3.8 L152.9 -5.4 L155.0 -6.4 L157.5 -6.7 L160.2 -6.2 L162.7 -5.0 L164.9 -3.2 L169.4 3.0 L175.9 13.0 L182.3 22.4 L188.1 31.8 L194.7 41.0 L204.1 55.7 L207.0 60.5 L210.6 67.7 L213.1 72.1 L221.7 86.5 L227.8 95.7 L229.8 99.2 L232.1 105.0 L236.9 120.0 L239.0 125.2 L239.0 126.3 L238.7 127.3 L237.9 128.1 L236.9 128.5 L235.7 128.7 L234.4 128.4 L233.2 127.9 L232.2 127.0 L227.4 119.9 L218.2 108.8 L214.2 103.4 L206.8 90.5 L196.2 74.1 L187.9 62.9 L178.6 48.1 L171.9 36.2 L164.2 24.4 L160.1 17.3 L154.8 8.9Z",
        cl: "M159.0 1.0 L160.6 3.5 L162.7 6.8 L165.2 10.7 L168.0 15.1 L171.0 19.8 L174.0 24.6 L177.1 29.4 L180.0 34.0 L182.9 38.6 L185.9 43.3 L189.0 48.2 L192.1 53.1 L195.2 58.0 L198.3 62.9 L201.2 67.6 L204.0 72.0 L206.7 76.3 L209.3 80.5 L211.8 84.5 L214.2 88.5 L216.6 92.3 L218.9 96.0 L221.0 99.6 L223.0 103.0 L224.9 106.3 L226.8 109.6 L228.5 112.9 L230.2 115.9 L231.7 118.8 L233.0 121.3 L234.1 123.4 L235.0 125.0",
      },
      {
        id: "x-break",
        d: "M175.0 60.2 L180.4 49.9 L185.8 40.6 L190.7 31.1 L196.7 21.8 L201.4 14.2 L209.3 2.4 L212.9 -4.2 L214.8 -7.4 L218.7 -11.8 L226.5 -19.5 L231.5 -25.6 L232.7 -26.2 L234.2 -26.4 L235.7 -26.1 L237.1 -25.4 L238.4 -24.4 L239.3 -23.2 L239.8 -21.8 L239.8 -20.5 L236.7 -13.5 L233.2 -2.8 L230.9 2.7 L224.6 12.0 L222.7 15.2 L219.4 21.6 L213.3 32.2 L209.3 39.5 L203.4 48.5 L200.6 53.0 L192.9 67.8 L191.6 70.6 L187.8 80.1 L186.3 83.2 L181.5 92.0 L173.3 107.5 L171.8 109.1 L169.8 110.0 L167.4 110.2 L164.9 109.8 L162.5 108.7 L160.4 107.0 L158.9 104.9 L158.1 102.7 L158.0 100.4 L168.6 72.1 L171.6 65.9Z",
        cl: "M235.0 -22.0 L232.9 -18.6 L230.0 -14.0 L226.6 -8.5 L222.9 -2.4 L218.9 4.0 L215.0 10.4 L211.3 16.5 L208.0 22.0 L205.0 27.0 L202.1 31.8 L199.3 36.5 L196.6 41.1 L193.9 45.6 L191.2 50.3 L188.6 55.1 L186.0 60.0 L183.3 65.4 L180.4 71.4 L177.5 77.6 L174.6 83.9 L171.9 89.8 L169.5 95.2 L167.5 99.6 L166.0 103.0",
      },
    ],
  },
  Im = {
    rule: "M77.3 82.7 L17.3 22.7 L22.7 17.3 L82.7 77.3Z",
    exp: "M32.8 65.9 L39.1 58.3 L48.7 46.2 L55.3 36.6 L71.3 15.9 L73.7 13.3 L75.2 12.0 L80.8 7.9 L83.3 5.2 L84.6 4.9 L85.3 5.0 L86.7 5.8 L87.1 6.4 L87.4 7.8 L85.5 11.3 L83.7 17.4 L82.5 20.5 L81.6 22.4 L74.8 33.0 L67.4 44.1 L60.3 53.4 L47.3 72.7 L44.9 75.7 L30.2 91.6 L27.7 94.9 L24.4 99.7 L23.5 100.7 L22.3 101.2 L20.8 101.4 L19.3 101.1 L17.9 100.4 L16.6 99.4 L15.7 98.2 L15.2 96.8 L15.2 95.5 L15.6 94.3 L20.5 87.3 L25.6 77.9Z",
  },
  Rm = {
    star: "M1.5 -23.5 C2.8 -9.5 6.5 -5.2 21.8 -2.4 C8.2 0.6 3.9 5.1 2.6 21.9 C-0.9 7.4 -5.3 3.4 -20.6 2.2 C-6.4 -1.3 -2.6 -6.8 1.5 -23.5 Z",
    speed:
      "M253.7 -51.9 L258.9 -61.4 L262.4 -66.9 L262.6 -67.2 L263.5 -67.5 L264.5 -67.2 L265.2 -66.4 L265.3 -66.0 L265.2 -65.2 L261.7 -59.7 L253.0 -47.2 L250.7 -43.5 L250.4 -43.3 L249.9 -43.3 L249.3 -43.8 L249.3 -44.5ZM266.9 -57.3 L267.6 -57.8 L268.1 -57.9 L269.1 -57.6 L269.5 -57.2 L270.0 -56.4 L269.8 -55.5 L258.4 -38.8 L258.0 -38.5 L257.5 -38.6 L256.9 -39.0 L256.8 -39.5ZM271.5 -47.7 L272.2 -48.2 L272.7 -48.3 L273.7 -47.9 L274.1 -47.6 L274.6 -46.7 L274.4 -45.9 L273.8 -44.9 L268.7 -38.0 L266.0 -34.0 L265.6 -33.8 L265.2 -33.8 L264.7 -34.1 L264.5 -34.7Z",
    minix:
      "M289.8 39.3 L283.8 33.8 L283.5 33.4 L283.3 32.5 L283.8 31.7 L284.7 31.5 L285.7 31.8 L291.5 37.5 L295.0 34.1 L297.6 31.2 L298.1 31.1 L298.7 31.2 L299.3 32.0 L299.2 32.5 L296.7 35.3 L293.3 39.4 L300.5 46.5 L300.8 47.0 L300.7 47.6 L299.9 48.0 L299.2 47.8 L291.9 41.1 L289.7 43.9 L286.1 47.8 L285.3 48.1 L284.3 47.8 L283.6 47.0 L283.4 46.6 L283.6 45.8 L287.2 41.8Z",
    arrow:
      "M102.3 -52.6 L109.5 -54.3 L116.6 -55.2 L119.7 -55.3 L122.8 -55.1 L126.5 -54.6 L133.1 -53.0 L139.8 -50.7 L149.5 -46.7 L163.8 -40.1 L162.5 -41.9 L158.4 -46.4 L158.2 -47.3 L158.4 -47.7 L159.0 -48.2 L160.0 -48.1 L160.8 -47.6 L164.6 -43.3 L166.9 -40.3 L167.5 -37.5 L167.1 -36.9 L164.7 -35.6 L161.3 -34.8 L154.5 -34.1 L154.1 -34.2 L153.2 -34.7 L152.8 -35.5 L152.9 -36.3 L153.6 -36.7 L162.9 -38.0 L149.1 -44.3 L139.4 -48.3 L129.3 -51.4 L123.3 -52.5 L120.3 -52.7 L114.2 -52.3 L110.8 -51.8 L103.7 -50.1 L96.3 -48.0 L89.2 -45.7 L70.5 -39.1 L69.9 -39.1 L69.1 -39.7 L69.0 -40.6 L69.5 -40.9 L75.8 -43.1 L91.5 -49.1Z",
    under:
      "M62.3 124.7 L77.2 125.1 L88.6 125.7 L149.6 130.1 L150.3 130.2 L151.5 131.0 L151.9 131.5 L152.1 132.7 L151.5 133.6 L150.4 133.9 L101.3 130.6 L72.8 129.3 L53.4 129.1 L24.5 130.2 L8.5 130.0 L0.2 130.1 L-0.9 129.6 L-1.2 128.9 L-1.1 128.3 L-0.6 127.9 L7.8 127.3 L23.6 125.6 L37.7 124.9Z",
  },
  Wm = {
    star: "M1.5 -23.5 C2.8 -9.5 6.5 -5.2 21.8 -2.4 C8.2 0.6 3.9 5.1 2.6 21.9 C-0.9 7.4 -5.3 3.4 -20.6 2.2 C-6.4 -1.3 -2.6 -6.8 1.5 -23.5 Z",
    circle:
      "M-43.4 -31.9 L-40.4 -33.3 L-34.5 -35.5 L-24.9 -37.8 L-15.7 -39.2 L-5.9 -39.8 L13.2 -39.7 L19.7 -39.3 L22.9 -39.0 L26.6 -38.3 L32.5 -36.7 L38.3 -34.4 L41.6 -32.8 L46.7 -29.7 L49.4 -27.7 L51.2 -26.0 L53.1 -23.6 L54.4 -21.7 L55.4 -19.6 L57.0 -14.7 L58.4 -8.2 L59.0 -4.0 L59.3 0.6 L59.2 4.7 L58.6 8.8 L57.2 15.4 L55.6 20.2 L54.6 22.3 L53.3 24.3 L51.7 26.1 L49.5 28.1 L47.2 29.8 L42.1 32.8 L35.9 35.6 L30.1 37.5 L24.1 38.8 L20.3 39.2 L13.8 39.6 L-5.3 39.9 L-11.5 39.8 L-17.7 39.3 L-24.5 38.1 L-30.9 36.6 L-37.1 34.5 L-43.0 31.8 L-45.4 30.3 L-47.7 28.3 L-49.7 26.0 L-52.7 21.3 L-56.8 13.8 L-56.8 13.4 L-56.6 13.0 L-56.0 13.0 L-55.4 13.4 L-51.2 20.9 L-49.7 23.2 L-48.1 25.2 L-46.2 27.2 L-44.3 28.7 L-42.0 29.9 L-39.6 31.0 L-36.7 32.0 L-30.4 33.7 L-24.0 35.0 L-18.4 35.9 L-12.2 36.4 L-5.9 36.5 L13.2 36.0 L19.6 35.7 L25.3 34.9 L31.2 33.3 L37.0 31.1 L42.1 28.5 L46.8 25.4 L48.6 23.8 L49.9 22.2 L51.2 20.2 L52.2 18.1 L53.6 14.2 L55.4 5.6 L55.7 -0.3 L55.2 -6.2 L53.3 -14.8 L52.0 -18.7 L51.0 -20.7 L49.9 -22.4 L48.5 -24.0 L46.8 -25.6 L42.5 -28.6 L37.4 -31.3 L31.9 -33.5 L26.2 -35.1 L20.4 -35.9 L13.9 -36.2 L-5.2 -36.5 L-11.5 -36.3 L-17.2 -35.9 L-23.3 -34.9 L-29.8 -33.6 L-36.1 -31.9 L-39.1 -30.8 L-41.5 -29.8 L-43.9 -28.5 L-46.0 -26.8 L-47.7 -25.0 L-49.5 -22.8 L-51.0 -20.5 L-55.3 -13.0 L-56.2 -12.6 L-56.9 -12.9 L-57.5 -13.7 L-57.4 -14.3 L-51.7 -24.2 L-50.0 -26.5 L-47.9 -28.8 L-45.8 -30.5Z",
    arrow:
      "M38.3 -13.7 L38.9 -14.7 L40.1 -15.0 L40.8 -14.9 L46.1 -12.8 L49.7 -11.1 L50.3 -10.7 L51.9 -8.5 L52.1 -7.9 L51.9 -6.8 L50.2 -4.6 L47.5 -2.3 L41.7 1.4 L40.4 1.4 L39.2 0.6 L38.6 -0.5 L38.8 -1.6 L44.4 -5.5 L27.8 -3.5 L-5.7 1.2 L-21.5 4.2 L-33.0 6.9 L-49.3 11.3 L-49.7 11.3 L-50.7 11.0 L-51.0 10.7 L-51.5 9.9 L-51.3 9.2 L-50.7 8.7 L-29.1 2.5 L-14.1 -1.2 L-0.1 -3.6 L12.7 -5.4 L37.9 -8.2 L45.5 -9.2 L39.5 -11.5 L38.5 -12.5Z",
    under:
      "M-13.6 -3.9 L8.2 -3.3 L79.5 1.6 L81.2 2.1 L81.9 2.7 L82.6 4.1 L82.6 4.8 L82.4 5.5 L81.9 6.0 L81.3 6.3 L80.5 6.4 L64.3 5.4 L47.2 4.2 L28.2 3.1 L-2.2 1.9 L-23.0 1.7 L-48.9 2.7 L-58.5 2.7 L-70.9 2.3 L-79.7 2.4 L-80.2 2.3 L-81.1 1.8 L-81.6 0.9 L-81.4 0.1 L-80.7 -0.4 L-71.9 -1.0 L-54.9 -3.0 L-39.9 -3.7Z",
    x: "M-4.9 -2.3 L-16.7 -13.5 L-26.4 -22.3 L-27.0 -23.2 L-27.4 -24.1 L-27.4 -25.1 L-27.1 -25.9 L-26.5 -26.6 L-25.6 -27.0 L-24.6 -27.1 L-23.5 -26.9 L-22.5 -26.4 L-21.6 -25.7 L-12.4 -16.5 L-1.5 -6.1 L11.3 -19.3 L20.1 -29.1 L21.2 -29.4 L22.5 -29.0 L23.4 -28.1 L23.6 -27.5 L23.5 -26.4 L14.8 -17.0 L5.4 -5.7 L2.3 -2.2 L28.0 22.9 L28.6 24.1 L28.4 25.3 L28.0 25.7 L26.8 26.0 L26.1 25.9 L24.8 25.1 L-0.8 1.2 L-9.7 12.0 L-21.7 25.2 L-22.5 25.6 L-23.4 25.7 L-24.5 25.5 L-25.4 25.1 L-26.3 24.4 L-26.9 23.6 L-27.2 22.7 L-27.2 21.8 L-26.9 21.0 L-15.5 8.4Z",
    speed:
      "M-31.2 -12.4 L-30.9 -12.9 L-30.2 -13.1 L-21.9 -13.1 L7.1 -14.0 L19.6 -14.1 L21.0 -13.6 L21.6 -13.1 L22.3 -11.9 L22.3 -11.3 L22.1 -10.7 L21.7 -10.3 L20.4 -9.9 L7.9 -10.0 L-21.5 -10.9 L-29.8 -10.9 L-30.9 -11.4ZM-31.2 -0.0 L-30.8 -0.9 L-30.2 -1.1 L-26.9 -1.0 L-14.0 -1.4 L-7.6 -1.8 L8.6 -2.2 L9.3 -2.0 L10.7 -1.2 L11.4 0.1 L11.4 0.8 L11.2 1.3 L10.7 1.8 L10.1 2.1 L6.2 2.2 L-6.9 1.8 L-13.5 1.4 L-29.8 1.1 L-30.8 0.6ZM-31.1 11.6 L-30.8 11.1 L-30.2 11.0 L-20.9 10.7 L-14.0 10.2 L-2.4 9.9 L-1.7 10.0 L-0.3 10.8 L0.1 11.4 L0.4 12.8 L0.1 13.3 L-0.3 13.8 L-0.9 14.1 L-3.9 14.2 L-13.3 13.8 L-20.4 13.3 L-29.8 13.0 L-30.8 12.6Z",
    bracket:
      "M-53.5 -27.7 L-52.2 -30.4 L-51.8 -30.9 L-48.4 -32.4 L-43.8 -32.9 L-39.3 -32.9 L-28.4 -32.1 L-27.0 -31.6 L-26.0 -30.5 L-25.7 -29.9 L-25.9 -28.7 L-26.9 -28.0 L-30.2 -27.9 L-38.5 -28.7 L-42.8 -28.8 L-46.1 -28.3 L-48.0 -27.3 L-49.1 -25.4 L-49.6 -22.0 L-49.6 -18.3 L-48.8 -10.4 L-48.7 -7.3 L-48.9 -6.7 L-49.3 -6.3 L-50.6 -5.9 L-52.0 -6.4 L-52.6 -6.9 L-53.3 -8.1 L-53.9 -14.3 L-54.2 -23.4ZM43.0 28.7 L46.2 28.3 L48.1 27.4 L49.1 25.5 L49.5 21.9 L49.5 18.2 L48.6 7.2 L48.8 6.6 L49.3 6.2 L50.6 5.8 L51.3 6.0 L52.7 6.8 L53.4 8.1 L53.4 10.7 L54.2 18.5 L54.3 23.5 L53.7 27.2 L52.1 30.3 L51.6 30.7 L48.4 32.3 L43.8 33.0 L39.4 33.0 L27.7 32.0 L26.3 31.2 L25.6 29.9 L25.6 29.2 L25.9 28.7 L26.3 28.2 L27.6 27.9 L34.1 28.5Z",
    zig: "M-17.7 -0.3 L-15.1 -1.8 L-13.7 -2.1 L-12.3 -1.7 L-9.6 -0.2 L-9.0 0.3 L-6.3 3.7 L-3.3 8.3 L-1.2 11.1 L-0.4 11.5 L0.9 10.9 L3.3 7.8 L5.9 3.6 L8.6 0.2 L9.0 -0.3 L12.3 -2.0 L13.7 -1.9 L17.0 -0.2 L17.6 0.3 L20.8 4.4 L23.4 8.3 L25.5 11.1 L26.4 11.6 L27.9 10.9 L30.6 8.3 L38.4 -1.7 L39.6 -2.0 L41.0 -1.6 L42.0 -0.5 L42.2 0.7 L42.0 1.3 L37.7 7.2 L34.8 11.1 L31.2 14.5 L27.8 16.1 L26.3 16.0 L22.9 14.3 L22.3 13.7 L19.1 9.7 L16.6 5.5 L14.6 2.9 L13.8 2.4 L12.5 3.1 L10.1 6.2 L7.4 10.3 L4.7 13.8 L4.3 14.3 L1.1 16.1 L-0.3 16.0 L-3.7 14.3 L-4.4 13.8 L-7.5 9.7 L-10.0 5.6 L-12.1 2.9 L-12.9 2.5 L-14.2 3.2 L-16.6 6.2 L-19.3 10.3 L-22.3 14.3 L-25.0 15.8 L-26.3 16.1 L-27.0 16.0 L-30.6 14.4 L-34.3 10.9 L-42.2 0.6 L-42.4 -0.8 L-42.2 -1.4 L-41.8 -1.8 L-41.1 -2.1 L-39.7 -2.1 L-38.3 -1.2 L-31.0 8.6 L-28.4 11.1 L-27.2 11.6 L-25.8 10.9 L-23.3 7.8 L-20.7 3.6Z",
    dot: "M10.0 -4.2 L9.9 -3.1 L9.4 -2.3 L8.8 -1.7 L7.9 -1.3 L8.0 0.0 L7.8 1.6 L6.9 4.0 L5.3 6.0 L3.1 7.4 L1.6 7.8 L0.0 8.0 L-1.6 7.8 L-3.1 7.4 L-4.4 6.7 L-5.7 5.7 L-6.7 4.4 L-7.4 3.1 L-7.8 1.6 L-8.0 0.0 L-7.8 -1.6 L-7.4 -3.1 L-6.7 -4.4 L-5.7 -5.7 L-4.4 -6.7 L-3.1 -7.4 L-1.0 -7.9 L1.0 -7.9 L3.1 -7.4 L5.3 -6.0 L6.5 -6.7 L7.9 -6.7 L8.8 -6.3 L9.4 -5.7Z",
  },
  qe = { wordmark: Cm, xmark: Im, marks: Rm, extra: Wm },
  Pm = [
    "M 75.77 52.81 L 37.73 1.38 C 37.1 0.52 36.09 0.01 35.01 0.02 L 8.78 0.07 C 6.04 0.08 4.46 3.16 6.07 5.34 L 41.23 52.89 L 79.25 104.31 C 79.88 105.16 80.89 105.67 81.97 105.67 L 110.35 105.61 C 112.2 105.6 113.27 103.52 112.18 102.04Z M 75.77 52.81",
    "M 33.3 54.27 C 32.67 53.41 31.66 52.91 30.58 52.91 L 4.34 52.97 C 1.59 52.98 0.01 56.05 1.63 58.24 L 35.76 104.4 C 36.4 105.26 37.41 105.77 38.48 105.77 L 64.73 105.71 C 67.48 105.7 69.05 102.62 67.44 100.44Z M 33.3 54.27",
    "M 80.97 1.38 C 80.34 0.52 79.33 0.01 78.25 0.02 L 52.01 0.07 C 49.26 0.08 47.68 3.16 49.3 5.34 L 83.43 51.51 C 84.07 52.37 85.08 52.87 86.15 52.87 L 114.54 52.81 C 116.39 52.8 117.46 50.72 116.37 49.25Z M 80.97 1.38",
  ],
  Vm = [
    "M 164.7 91.27 C 159.26 91.27 154.06 90.5 149.09 88.96 C 144.12 87.43 140.17 85.45 137.25 83.03 L 141.73 73.11 C 144.51 75.27 147.96 77.07 152.07 78.51 C 156.18 79.95 160.39 80.67 164.7 80.67 C 168.34 80.67 171.29 80.28 173.55 79.49 C 175.8 78.71 177.46 77.64 178.52 76.3 C 179.58 74.96 180.11 73.44 180.11 71.74 C 180.11 69.64 179.35 67.96 177.82 66.68 C 176.3 65.41 174.32 64.39 171.91 63.64 C 169.48 62.89 166.8 62.18 163.85 61.53 C 160.9 60.88 157.95 60.11 155 59.22 C 152.05 58.34 149.37 57.2 146.95 55.79 C 144.53 54.38 142.56 52.5 141.04 50.14 C 139.51 47.79 138.75 44.78 138.75 41.11 C 138.75 37.38 139.76 33.96 141.78 30.86 C 143.8 27.75 146.88 25.26 151.03 23.39 C 155.17 21.53 160.42 20.59 166.79 20.59 C 170.96 20.59 175.11 21.12 179.21 22.16 C 183.32 23.21 186.9 24.72 189.95 26.68 L 185.88 36.59 C 182.76 34.77 179.55 33.41 176.23 32.52 C 172.92 31.64 169.73 31.2 166.69 31.2 C 163.11 31.2 160.21 31.62 157.98 32.47 C 155.77 33.32 154.14 34.44 153.11 35.81 C 152.09 37.18 151.57 38.75 151.57 40.52 C 151.57 42.62 152.32 44.3 153.81 45.58 C 155.3 46.86 157.25 47.85 159.68 48.57 C 162.09 49.29 164.8 50 167.78 50.68 C 170.76 51.37 173.73 52.14 176.68 52.99 C 179.63 53.84 182.31 54.95 184.73 56.33 C 187.15 57.7 189.11 59.57 190.6 61.92 C 192.09 64.28 192.84 67.26 192.84 70.86 C 192.84 74.52 191.82 77.91 189.8 81.02 C 187.78 84.12 184.68 86.61 180.51 88.48 C 176.33 90.34 171.06 91.27 164.7 91.27",
    "M 204.47 17.45 L 216.9 17.45 L 216.9 90.29 L 204.47 90.29Z M 204.47 17.45",
    "M 249.21 90.98 C 245.24 90.98 241.76 90.3 238.77 88.96 C 235.79 87.62 233.49 85.76 231.86 83.37 C 230.24 80.98 229.43 78.28 229.43 75.27 C 229.43 72.33 230.14 69.68 231.57 67.32 C 232.99 64.96 235.33 63.1 238.57 61.73 C 241.82 60.35 246.13 59.66 251.5 59.66 L 266.91 59.66 L 266.91 67.81 L 252.4 67.81 C 248.15 67.81 245.3 68.48 243.85 69.82 C 242.39 71.16 241.66 72.82 241.66 74.78 C 241.66 77.01 242.55 78.77 244.34 80.08 C 246.13 81.39 248.62 82.05 251.8 82.05 C 254.85 82.05 257.58 81.36 260 79.98 C 262.42 78.61 264.16 76.58 265.23 73.89 L 267.31 81.26 C 266.12 84.34 263.98 86.72 260.9 88.43 C 257.82 90.13 253.92 90.98 249.21 90.98 M 265.92 90.29 L 265.92 79.69 L 265.23 77.43 L 265.23 58.88 C 265.23 55.28 264.13 52.48 261.94 50.48 C 259.76 48.49 256.44 47.49 252 47.49 C 249.02 47.49 246.08 47.95 243.2 48.87 C 240.32 49.79 237.88 51.06 235.89 52.7 L 231.02 43.76 C 233.87 41.6 237.27 39.98 241.21 38.9 C 245.16 37.82 249.25 37.29 253.49 37.29 C 261.18 37.29 267.13 39.1 271.34 42.73 C 275.55 46.36 277.65 51.98 277.65 59.57 L 277.65 90.29Z M 265.92 90.29",
    "M 309.97 90.98 C 305.53 90.98 301.27 90.4 297.19 89.26 C 293.11 88.12 289.88 86.72 287.5 85.09 L 292.27 75.76 C 294.66 77.27 297.5 78.51 300.82 79.49 C 304.13 80.47 307.45 80.96 310.77 80.96 C 314.68 80.96 317.51 80.44 319.27 79.39 C 321.02 78.35 321.9 76.94 321.9 75.17 C 321.9 73.73 321.3 72.64 320.11 71.89 C 318.92 71.13 317.36 70.56 315.44 70.17 C 313.51 69.77 311.38 69.42 309.02 69.09 C 306.67 68.76 304.32 68.32 301.96 67.76 C 299.61 67.21 297.47 66.39 295.55 65.31 C 293.63 64.23 292.07 62.77 290.88 60.94 C 289.68 59.11 289.09 56.69 289.09 53.68 C 289.09 50.34 290.05 47.44 291.97 44.99 C 293.89 42.54 296.59 40.64 300.07 39.3 C 303.55 37.95 307.68 37.29 312.45 37.29 C 316.04 37.29 319.64 37.68 323.29 38.46 C 326.94 39.25 329.95 40.36 332.34 41.8 L 327.57 51.12 C 325.05 49.62 322.51 48.59 319.96 48.03 C 317.41 47.48 314.88 47.2 312.36 47.2 C 308.57 47.2 305.77 47.75 303.95 48.87 C 302.13 49.98 301.22 51.39 301.22 53.09 C 301.22 54.66 301.82 55.84 303.01 56.62 C 304.2 57.41 305.76 58.03 307.68 58.48 C 309.6 58.95 311.74 59.32 314.09 59.61 C 316.45 59.91 318.79 60.35 321.11 60.94 C 323.43 61.53 325.56 62.33 327.52 63.34 C 329.47 64.36 331.05 65.79 332.24 67.61 C 333.43 69.45 334.03 71.84 334.03 74.78 C 334.03 78.05 333.05 80.9 331.1 83.32 C 329.14 85.74 326.38 87.62 322.8 88.96 C 319.21 90.3 314.94 90.98 309.97 90.98",
    "M 374.9 37.29 C 379.14 37.29 382.93 38.1 386.29 39.74 C 389.63 41.38 392.27 43.88 394.19 47.25 C 396.11 50.62 397.07 54.95 397.07 60.25 L 397.07 90.29 L 384.64 90.29 L 384.64 61.82 C 384.64 57.18 383.53 53.71 381.31 51.42 C 379.09 49.13 375.99 47.98 372.02 47.98 C 369.1 47.98 366.51 48.57 364.26 49.75 C 362 50.93 360.27 52.68 359.04 55 C 357.81 57.32 357.2 60.25 357.2 63.79 L 357.2 90.29 L 344.77 90.29 L 344.77 17.45 L 357.2 17.45 L 357.2 52.01 L 354.52 47.69 C 356.37 44.35 359.07 41.78 362.62 39.98 C 366.16 38.18 370.26 37.29 374.9 37.29",
  ],
  Bm = "0 0 117.5 105.8",
  Zm = "0 0 397.1 105.8",
  Yn = { mark: Pm, word: Vm, markVB: Bm, lockupVB: Zm };
function Dm({ tx: e }) {
  return l.jsxs(l.Fragment, {
    children: [
      l.jsxs("div", {
        className: "a-sheet",
        children: [
          l.jsx("i", {}),
          l.jsx("i", {}),
          l.jsx("i", {}),
          l.jsx("i", {}),
        ],
      }),
      l.jsxs("div", {
        className: "a-slate",
        children: [
          l.jsx("span", {
            className: "a-name",
            "data-t": "ADOL’S",
            children: "ADOL’S",
          }),
          l.jsx("span", { className: "a-sub", children: "PRODUCTION" }),
          e.dir === "exit" &&
            l.jsx("span", { className: "a-cut", children: "→ REX GROUP" }),
        ],
      }),
    ],
  });
}
function Mm() {
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx("div", { className: "s-page" }),
      l.jsx("div", { className: "s-panel" }),
      l.jsx("svg", {
        className: "s-mark",
        viewBox: Yn.markVB,
        "aria-hidden": "true",
        children: Yn.mark.map((e, n) =>
          l.jsx("path", { d: e, style: { "--i": n } }, n),
        ),
      }),
    ],
  });
}
function Om() {
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx("div", { className: "p-iris" }),
      l.jsxs("svg", {
        className: "p-focus",
        viewBox: "-50 -50 100 100",
        "aria-hidden": "true",
        children: [
          l.jsx("path", { d: "M-30 -18 A35 35 0 0 1 18 -30" }),
          l.jsx("path", { d: "M30 18 A35 35 0 0 1 -18 30" }),
          l.jsx("circle", { r: "5" }),
        ],
      }),
      l.jsx("div", {
        className: "p-window",
        children: l.jsxs("div", {
          className: "p-chrome",
          children: [
            l.jsx("i", {}),
            l.jsx("i", {}),
            l.jsx("i", {}),
            l.jsx("span", {}),
          ],
        }),
      }),
    ],
  });
}
const bo = [
  "IDEA",
  "LAUNCH",
  "X",
  "CONTENT",
  "FILM",
  "WEB",
  "GO",
  "TEST",
  "فكرة",
  "إطلاق",
];
function Km() {
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx("div", { className: "c-flood" }),
      l.jsx("div", {
        className: "c-chips",
        children: bo.map((e, n) =>
          l.jsx(
            "span",
            {
              style: { "--i": n, "--a": `${(n / bo.length) * 360}deg` },
              children: e,
            },
            n,
          ),
        ),
      }),
      l.jsx("svg", {
        className: "c-x",
        viewBox: "140 -32 112 168",
        "aria-hidden": "true",
        children: qe.wordmark.strokes
          .filter((e) => e.id.startsWith("x"))
          .map((e) => l.jsx("path", { d: e.d }, e.id)),
      }),
    ],
  });
}
function qm() {
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx("div", { className: "r-sheet" }),
      l.jsx("svg", {
        className: "r-line",
        viewBox: "0 0 400 20",
        preserveAspectRatio: "none",
        "aria-hidden": "true",
        children: l.jsx("path", {
          d: qe.extra.under,
          transform: "translate(200 10) scale(2.4 1)",
        }),
      }),
    ],
  });
}
const tl = {
    adol: {
      Overlay: Dm,
      cover: 700,
      reveal: 720,
      pageCover: 320,
      pageReveal: 360,
    },
    slash: {
      Overlay: Mm,
      cover: 620,
      reveal: 560,
      pageCover: 260,
      pageReveal: 300,
    },
    aperio: {
      Overlay: Om,
      cover: 700,
      reveal: 700,
      pageCover: 300,
      pageReveal: 340,
    },
    rexCampaigns: {
      Overlay: Km,
      cover: 760,
      reveal: 700,
      pageCover: 320,
      pageReveal: 360,
    },
    rex: {
      Overlay: qm,
      cover: 520,
      reveal: 520,
      pageCover: 380,
      pageReveal: 420,
    },
  },
  zd = w.createContext(null),
  Hm = () =>
    typeof matchMedia != "undefined" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches,
  Zs = (e) => new Promise((n) => setTimeout(n, e));
function Um(e, n) {
  return e === n
    ? { kind: n, dir: "page" }
    : n === "rex"
      ? { kind: e, dir: "exit" }
      : { kind: n, dir: "enter" };
}
function Jm({ children: e }) {
  const { route: n, commit: t } = Ir(),
    [r, s] = w.useState(null),
    a = w.useRef(!1),
    i = w.useRef({ x: 0.5, y: 0.5 }),
    { cue: o } = Nd();
  w.useEffect(() => {
    const A = (m) => {
      i.current = {
        x: m.clientX / window.innerWidth,
        y: m.clientY / window.innerHeight,
      };
    };
    return (
      window.addEventListener("pointerdown", A, { passive: !0 }),
      () => window.removeEventListener("pointerdown", A)
    );
  }, []);
  const u = w.useCallback(
      async (A) => {
        const m = zi(A);
        if (a.current || m === n.path) return;
        const h = Ci(m),
          { kind: g, dir: y } = Um(n.world, h.world),
          k = tl[g] || tl.rex,
          N = y === "page",
          f = Hm(),
          d = f ? 160 : N ? k.pageCover : k.cover,
          p = f ? 160 : N ? k.pageReveal : k.reveal;
        (a.current = !0),
          o(g),
          s({
            kind: g,
            dir: y,
            phase: "cover",
            origin: i.current,
            to: m,
            rm: f,
            coverMs: d,
            revealMs: p,
          });
        const L = Ed(h.world === "rex" ? "rex" : h.world);
        await Promise.all([Zs(d), L == null ? void 0 : L.catch(() => null)]),
          t(m),
          await Zs(40),
          s((v) => v && { ...v, phase: "reveal" }),
          await Zs(p),
          s(null),
          (a.current = !1);
      },
      [n, t, o],
    ),
    c = r ? (tl[r.kind] || tl.rex).Overlay : null;
  return l.jsxs(zd.Provider, {
    value: { go: u, active: !!r },
    children: [
      e,
      r &&
        l.jsx("div", {
          className: `tx tx-${r.kind} ${r.rm ? "tx-reduced" : ""}`,
          "data-phase": r.phase,
          "data-dir": r.dir,
          style: {
            "--ox": `${r.origin.x * 100}%`,
            "--oy": `${r.origin.y * 100}%`,
            "--cover": `${r.coverMs}ms`,
            "--reveal": `${r.revealMs}ms`,
          },
          "aria-hidden": "true",
          children: r.rm
            ? l.jsx("div", { className: "tx-fade" })
            : l.jsx(c, { tx: r }),
        }),
    ],
  });
}
const Xm = () => w.useContext(zd),
  Ds = {},
  _o = ((Ds == null ? void 0 : Ds.VITE_SITE_URL) || "").replace(/\/$/, ""),
  Tm = {
    rex: { ar: "REX Group", en: "REX Group" },
    adol: { ar: "ADOL’S PRODUCTION — إنتاج", en: "ADOL’S PRODUCTION" },
    slash: { ar: "SLASH — تسويق", en: "SLASH — Marketing" },
    aperio: { ar: "APERIO — مواقع", en: "APERIO — Websites" },
    rexCampaigns: {
      ar: "REX Campaigns — حملات",
      en: "REX Campaigns — Campaigns",
    },
  },
  $o = {
    "/": {
      title: {
        ar: "REX Group — Rules End. Xperiments Begin.",
        en: "REX Group — Rules End. Xperiments Begin.",
      },
      description: {
        ar: "مجموعة إبداعية تجمع الإنتاج والتسويق والمواقع والحملات بمساحة وحدة.",
        en: "A creative group bringing production, marketing, websites and campaigns into one space.",
      },
      world: "rex",
    },
    "/about": {
      title: { ar: "من نحن — REX Group", en: "About — REX Group" },
      description: {
        ar: "قصة REX وفلسفتها وكيف تشتغل الأقسام سوا.",
        en: "The REX story, its philosophy, and how the divisions work together.",
      },
      world: "rex",
    },
    "/contact": {
      title: { ar: "تواصل — REX Group", en: "Contact — REX Group" },
      description: {
        ar: "اختار العالم اللي تحتاجه وخبرنا عن مشروعك.",
        en: "Pick the world you need and tell us about your project.",
      },
      world: "rex",
    },
  },
  Fm = {
    home: { ar: "", en: "" },
    services: { ar: "الخدمات", en: "Services" },
    projects: { ar: "المشاريع", en: "Projects" },
    process: { ar: "طريقة العمل", en: "Process" },
    strategy: { ar: "الاستراتيجية", en: "Strategy" },
    campaigns: { ar: "الحملات", en: "Campaigns" },
    about: { ar: "من نحن", en: "About" },
    contact: { ar: "تواصل", en: "Contact" },
  },
  Ym = {
    adol: {
      ar: "ADOL’S PRODUCTION — شركة إنتاج: إنتاج، إخراج، تصوير ومونتاج بفريق كامل. قسم الإنتاج في REX Group.",
      en: "ADOL’S PRODUCTION — a production house: production, direction, cinematography and editing with a full crew. The production division of REX Group.",
    },
    slash: {
      ar: "SLASH — قسم التسويق في REX Group: استراتيجية، محتوى، نشر وترويج.",
      en: "SLASH — the marketing division of REX Group: strategy, content, publishing and promotion.",
    },
    aperio: {
      ar: "APERIO — قسم المواقع في REX Group: تصميم وتطوير وإطلاق.",
      en: "APERIO — the websites division of REX Group: design, development and launch.",
    },
    rexCampaigns: {
      ar: "REX Campaigns — الحملات الإبداعية المتكاملة من الفكرة للإطلاق.",
      en: "REX Campaigns — integrated creative campaigns from concept to launch.",
    },
  };
function Qm(e) {
  if ($o[e.path]) return $o[e.path];
  if (e.page === "notFound")
    return {
      title: { ar: "غير موجودة — REX Group", en: "Not found — REX Group" },
      description: { ar: "الصفحة غير موجودة.", en: "Page not found." },
      world: "rex",
      noindex: !0,
    };
  const n = Tm[e.world],
    t = Fm[e.page];
  return {
    title: {
      ar: t.ar ? `${t.ar} — ${n.ar}` : `${n.ar} | REX Group`,
      en: t.en ? `${t.en} — ${n.en}` : `${n.en} | REX Group`,
    },
    description: Ym[e.world],
    world: e.world,
  };
}
function On(e, n, t) {
  let r = document.head.querySelector(`meta[${e}="${n}"]`);
  r ||
    ((r = document.createElement("meta")),
    r.setAttribute(e, n),
    document.head.appendChild(r)),
    r.setAttribute("content", t);
}
function Gm(e, n) {
  w.useEffect(() => {
    var a;
    const t = Qm(e),
      r = t.title[n] || t.title.en,
      s = ((a = t.description) == null ? void 0 : a[n]) || "";
    if (
      ((document.title = r),
      On("name", "description", s),
      On("property", "og:title", r),
      On("property", "og:description", s),
      On("property", "og:type", "website"),
      On("property", "og:locale", n === "ar" ? "ar_IQ" : "en_US"),
      On("name", "robots", t.noindex ? "noindex" : "index,follow"),
      _o)
    ) {
      const i = _o + (e.path === "/" ? "/" : e.path);
      On("property", "og:url", i);
      let o = document.head.querySelector('link[rel="canonical"]');
      o ||
        ((o = document.createElement("link")),
        (o.rel = "canonical"),
        document.head.appendChild(o)),
        (o.href = i);
    }
  }, [e, n]);
}
const bm =
    "./assets/rex/rex-youth-480.webp",
  eu =
    "./assets/rex/rex-youth-900.webp",
  _m =
    "./assets/rex/rex-formal-480.webp",
  nu =
    "./assets/rex/rex-formal-900.webp",
  $m =
    "./assets/rex/rex-dishdasha-480.webp",
  tu =
    "./assets/rex/rex-dishdasha-900.webp",
  e1 =
    "./assets/rex/rex-swim-480.webp",
  ru =
    "./assets/rex/rex-swim-900.webp",
  n1 = {
    youth: {
      src: eu,
      srcSet: `${bm} 480w, ${eu} 900w`,
      ratio: 1216 / 1278,
      alt: {
        ar: "ركس بتيشيرت أزرق وبنطرون كارگو",
        en: "REX in a blue tee and cargo pants",
      },
    },
    formal: {
      src: nu,
      srcSet: `${_m} 480w, ${nu} 900w`,
      ratio: 1171 / 1278,
      alt: {
        ar: "ركس بقاط رسمي وربطة برتقالية",
        en: "REX in a formal suit with an orange tie",
      },
    },
    dishdasha: {
      src: tu,
      srcSet: `${$m} 480w, ${tu} 900w`,
      ratio: 1177 / 1278,
      alt: {
        ar: "ركس بالدشداشة والسبحة",
        en: "REX in a dishdasha holding prayer beads",
      },
    },
    swim: {
      src: ru,
      srcSet: `${e1} 480w, ${ru} 900w`,
      ratio: 1230 / 1278,
      alt: {
        ar: "ركس بملابس السباحة والخاولي",
        en: "REX in swim shorts with a towel",
      },
    },
  },
  t1 = {
    hubWelcome: "youth",
    introReveal: "youth",
    transitions: "youth",
    groupAbout: "formal",
    partnerships: "formal",
    contact: "formal",
    localMessage: "dishdasha",
    loading: "swim",
    notFound: "swim",
    easterEgg: "swim",
  };
function Wn({
  use: e,
  variant: n,
  className: t = "",
  sizes: r = "(max-width: 700px) 70vw, 40vw",
  eager: s = !1,
  style: a,
}) {
  const { t: i } = R(),
    o = n || t1[e] || "youth",
    u = n1[o];
  return l.jsx("img", {
    className: `mascot ${t}`,
    src: u.src,
    srcSet: u.srcSet,
    sizes: r,
    alt: i(u.alt),
    width: 900,
    height: Math.round(900 / u.ratio),
    loading: s ? "eager" : "lazy",
    decoding: "async",
    draggable: "false",
    style: a,
  });
}
const lu = Object.fromEntries(
  Object.entries(Ii).map(([e, n]) => [e, w.lazy(n.load)]),
);
function r1() {
  const { ui: e } = R();
  return l.jsxs("div", {
    className: "world-loading",
    role: "status",
    children: [
      l.jsx(Wn, {
        use: "loading",
        className: "world-loading-mascot",
        sizes: "160px",
        eager: !0,
      }),
      l.jsx("p", { children: e("loading") }),
    ],
  });
}
function l1() {
  const { route: e } = Ir(),
    { lang: n } = R();
  Gm(e, n),
    w.useEffect(() => {
      Ri(e.world), (document.documentElement.dataset.world = e.world);
    }, [e.world]);
  const t = lu[e.world] || lu.rex;
  return l.jsx(w.Suspense, {
    fallback: l.jsx(r1, {}),
    children: l.jsx(t, { page: e.page }),
  });
}
Ld(document.getElementById("root")).render(
  l.jsx(w.StrictMode, {
    children: l.jsx(ym, {
      children: l.jsx(jm, {
        children: l.jsx(Nm, {
          children: l.jsx(Jm, { children: l.jsx(l1, {}) }),
        }),
      }),
    }),
  }),
);
function D({ to: e, children: n, className: t, prefetch: r = !0, ...s }) {
  const { mode: a, path: i } = Ir(),
    { go: o } = Xm(),
    u =
      a === "memory"
        ? `#${e === "/" ? "" : e.slice(1).replace(/\//g, "-")}`
        : e,
    c = (m) => {
      m.defaultPrevented ||
        m.button !== 0 ||
        m.metaKey ||
        m.ctrlKey ||
        m.shiftKey ||
        m.altKey ||
        (m.preventDefault(), o(e));
    },
    A = () => {
      r && Ed(Ci(e).world);
    };
  return l.jsx("a", {
    href: u,
    onClick: c,
    onPointerEnter: A,
    onFocus: A,
    className: t,
    "aria-current": i === e ? "page" : void 0,
    ...s,
    children: n,
  });
}
function Wr({ className: e = "" }) {
  const { lang: n, setLang: t, ui: r } = R();
  return l.jsx("button", {
    type: "button",
    className: `lang-toggle ${e}`,
    onClick: () => t(n === "ar" ? "en" : "ar"),
    "aria-label": r("switchLangLabel"),
    lang: n === "ar" ? "en" : "ar",
    children: l.jsx("span", {
      "aria-hidden": "true",
      children: n === "ar" ? "EN" : "ع",
    }),
  });
}
function Pr({ className: e = "" }) {
  const { on: n, toggle: t } = Nd(),
    { ui: r } = R();
  return l.jsx("button", {
    type: "button",
    className: `sound-toggle ${e}`,
    onClick: t,
    "aria-pressed": n,
    "aria-label": r(n ? "soundOff" : "soundOn"),
    children: l.jsxs("svg", {
      viewBox: "0 0 24 24",
      width: "18",
      height: "18",
      "aria-hidden": "true",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      children: [
        l.jsx("path", {
          d: "M4 9v6h4l5 4V5L8 9H4z",
          fill: "currentColor",
          stroke: "none",
        }),
        n
          ? l.jsx("path", {
              d: "M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12",
            })
          : l.jsx("path", { d: "M17 9l5 6M22 9l-5 6" }),
      ],
    }),
  });
}
function ts({ className: e = "" }) {
  const { ui: n } = R();
  return l.jsxs(D, {
    to: "/",
    className: `back-to-rex ${e}`,
    children: [
      l.jsxs("svg", {
        viewBox: "-2 -2 104 104",
        width: "16",
        height: "16",
        "aria-hidden": "true",
        children: [
          l.jsx("path", { d: qe.xmark.rule, fill: "currentColor" }),
          l.jsx("path", { d: qe.xmark.exp, fill: "currentColor" }),
        ],
      }),
      l.jsx("span", { children: n("backToRex") }),
    ],
  });
}
function Wi({ className: e = "", title: n = "REX", xColor: t }) {
  return l.jsx("svg", {
    className: e,
    viewBox: qe.wordmark.viewBox,
    role: "img",
    "aria-label": n,
    children: qe.wordmark.strokes.map((r) =>
      l.jsx(
        "path",
        { d: r.d, fill: r.id === "x-break" && t ? t : "currentColor" },
        r.id,
      ),
    ),
  });
}
function Pi({
  className: e = "",
  rule: n = "currentColor",
  exp: t = "currentColor",
  title: r = "REX",
}) {
  return l.jsxs("svg", {
    className: e,
    viewBox: "-4 0 108 104",
    role: "img",
    "aria-label": r,
    children: [
      l.jsx("path", { d: qe.xmark.rule, fill: n }),
      l.jsx("path", { d: qe.xmark.exp, fill: t }),
    ],
  });
}
function Te({ name: e, className: n = "", fill: t = "currentColor" }) {
  const r = qe.extra[e] || qe.marks[e],
    s =
      {
        star: "-26 -26 52 52",
        circle: "-68 -48 136 96",
        arrow: "-58 -22 116 40",
        under: "-86 -10 172 22",
        x: "-32 -32 64 64",
        speed: "-34 -18 90 50",
        bracket: "-56 -36 112 72",
        zig: "-44 -6 90 26",
        dot: "-10 -14 26 26",
      }[e] || "-60 -60 120 120";
  // The REX star: a hand-drawn four-point spark with a loose pen contour.
  if (e === "star")
    return l.jsxs("svg", {
      className: `mark mark-${e} ${n}`,
      viewBox: s,
      "aria-hidden": "true",
      children: [
        l.jsx("path", { d: r, fill: t }),
        l.jsx("path", {
          className: "mk-s",
          d: "M3.4 -20.6 C4.1 -8.4 8.1 -3.9 19.4 -0.9 C7.4 2.3 4.6 6.6 4.2 19.6 C0.4 7.1 -4.4 4.6 -18.2 3.9 C-5.2 0.4 -1.1 -5.6 2.1 -18.6 L2.8 -22.6",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.4",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        l.jsx("path", {
          className: "mk-s",
          d: "M13.6 -16.2 L17.4 -20.9 M16.8 -11.2 L22.2 -12.6",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
        }),
      ],
    });
  return l.jsx("svg", {
    className: `mark mark-${e} ${n}`,
    viewBox: s,
    "aria-hidden": "true",
    children: l.jsx("path", { d: r, fill: t }),
  });
}
function Vi({ className: e = "", gold: n = "#F2CC30", title: t = "Slash" }) {
  return l.jsx("svg", {
    className: e,
    viewBox: Yn.markVB,
    role: t ? "img" : void 0,
    "aria-label": t || void 0,
    "aria-hidden": t ? void 0 : "true",
    children: Yn.mark.map((r, s) => l.jsx("path", { d: r, fill: n }, s)),
  });
}
function Ra({
  className: e = "",
  gold: n = "#F2CC30",
  ink: t = "currentColor",
  title: r = "Slash",
}) {
  return l.jsxs("svg", {
    className: `slash-logo ${e}`,
    viewBox: Yn.lockupVB,
    role: "img",
    "aria-label": r,
    children: [
      Yn.mark.map((s, a) => l.jsx("path", { d: s, fill: n }, `m${a}`)),
      Yn.word.map((s, a) => l.jsx("path", { d: s, fill: t }, `w${a}`)),
    ],
  });
}
function Dt({
  className: e = "",
  stroke: n = "currentColor",
  dot: t = "#C1592F",
  title: r = "APERIO",
}) {
  return l.jsxs("svg", {
    className: e,
    viewBox: "-50 -50 100 100",
    role: "img",
    "aria-label": r,
    children: [
      l.jsxs("g", {
        fill: "none",
        stroke: n,
        strokeWidth: "7",
        strokeLinecap: "round",
        children: [
          l.jsx("path", { d: "M-34 -14 A37 37 0 0 1 14 -34" }),
          l.jsx("path", { d: "M34 14 A37 37 0 0 1 -14 34" }),
        ],
      }),
      l.jsx("circle", { r: "7", fill: t }),
    ],
  });
}
function Wa({
  className: e = "",
  color: n = "#2B4C93",
  accent: t = "#D1467A",
  title: r = "ADOL’S PRODUCTION",
  mono: s = !1,
}) {
  const a = s ? n : t,
    i = { font: '400 60px "Anton", "Impact", "Arial Narrow", sans-serif' };
  return l.jsxs("svg", {
    className: e,
    viewBox: "0 0 250 92",
    direction: "ltr",
    style: { direction: "ltr" },
    role: r ? "img" : void 0,
    "aria-label": r || void 0,
    "aria-hidden": r ? void 0 : "true",
    children: [
      !s &&
        l.jsx("text", {
          x: "4",
          y: "62",
          direction: "ltr",
          textLength: "196",
          lengthAdjust: "spacingAndGlyphs",
          fill: n,
          opacity: ".45",
          style: i,
          children: "ADOL’S",
        }),
      l.jsx("text", {
        x: "1",
        y: "59",
        direction: "ltr",
        textLength: "196",
        lengthAdjust: "spacingAndGlyphs",
        fill: a,
        style: i,
        children: "ADOL’S",
      }),
      l.jsx("circle", { cx: "228", cy: "38", r: "15", fill: n }),
      l.jsx("text", {
        x: "2",
        y: "88",
        direction: "ltr",
        textLength: "246",
        lengthAdjust: "spacing",
        fill: n,
        style: { font: '800 17px "Archivo", "Arial", sans-serif' },
        children: "PRODUCTION",
      }),
    ],
  });
}
const rl = "https://adol.art",
  // One phone + one email for every world — values live in src/config.js.
  rxKc = {
    email: REX_CONFIG.contact.email,
    phone: REX_CONFIG.contact.phone,
    whatsapp: REX_CONFIG.contact.phoneIntl,
    address: null,
    hours: null,
  },
  P = Rr({
    name: { ar: "ADOL’S PRODUCTION", en: "ADOL’S PRODUCTION" },
    discipline: { ar: "إنتاج", en: "Production" },
    short: {
      ar: "شركة إنتاج: إنتاج، إخراج، تصوير ومونتاج.",
      en: "A production house: production, direction, cinematography, editing.",
    },
    kind: { ar: "شركة إنتاج", en: "Production house" },
    meta: {
      ar: "بغداد · 24 fps · منذ 2020",
      en: "Baghdad · 24 fps · est. 2020",
    },
    roll: {
      ar: ["الإنتاج", "الإخراج", "التصوير", "المونتاج"],
      en: ["Production", "Direction", "Cinematography", "Editing"],
    },
    motto: {
      ar: ["أفلام،", "مو مجرد إعلانات."],
      en: ["Films,", "not just ads."],
    },
    poster: { ar: ["أفلام", "مو مجرد إعلانات"], en: ["FILMS", "NOT JUST ADS"] },
    quote: { ar: "كلّ كادرٍ، بقصد.", en: "Every frame, on purpose." },
    definition: {
      ar: "ADOL’S PRODUCTION شركة إنتاج متكاملة: إنتاج، إخراج، تصوير ومونتاج — بفريق كامل لكل مرحلة، من الفكرة الأولى إلى النسخة النهائية.",
      en: "ADOL’S PRODUCTION is a full production house: production, direction, cinematography and editing — a complete crew for every stage, from first idea to final cut.",
    },
    manifesto: {
      ar: "نصنع محتوى إعلانياً سينمائياً يُشاهَد كفيلم: قصص بصرية مبنيّة على المشاعر. لكل مرحلة فريقها: إنتاج، إخراج، تصوير، ومونتاج.",
      en: "We make cinematic advertising content that plays like a film: emotionally driven visual stories. Every stage has its own crew: production, direction, camera and post.",
    },
    marquee: {
      en: [
        "Production",
        "Direction",
        "Cinematography",
        "Art Direction",
        "Script Writing",
        "Editing",
        "Films · Not Just Ads",
        "Since 2020",
      ],
    },
    departments: [
      {
        id: "production",
        word: { ar: "إنتاج", en: "PRODUCTION" },
        title: { ar: "الإنتاج", en: "Production" },
        text: {
          ar: "تخطيط وإدارة الإنتاج كاملاً: الميزانية، الجدولة، المواقع، الفريق والمعدات.",
          en: "Planning and running the whole production: budget, scheduling, locations, crew and equipment.",
        },
        items: [
          { ar: "إدارة الإنتاج", en: "Production management" },
          { ar: "المواقع", en: "Locations" },
          { ar: "الفريق والمعدات", en: "Crew & equipment" },
        ],
      },
      {
        id: "direction",
        word: { ar: "إخراج", en: "DIRECTION" },
        title: { ar: "الإخراج", en: "Direction" },
        text: {
          ar: "بناء الهوية البصرية وإخراج الإنتاجات الإعلانية السينمائية.",
          en: "Building visual identity and directing cinematic commercial productions.",
        },
        items: [
          { ar: "الإخراج", en: "Directing" },
          { ar: "الإدارة الفنية", en: "Art direction" },
          { ar: "كتابة السيناريو", en: "Script writing" },
        ],
      },
      {
        id: "camera",
        word: { ar: "تصوير", en: "CAMERA" },
        title: { ar: "التصوير", en: "Cinematography" },
        text: {
          ar: "تصويرٌ سينمائيٌّ احترافي للعلامات التجارية والحملات والمحتوى القصصي.",
          en: "Professional cinematic shooting for brands, campaigns, and storytelling content.",
        },
        items: [
          { ar: "تصوير سينمائي", en: "Cinematography" },
          { ar: "الإضاءة", en: "Lighting" },
          { ar: "الكادر", en: "Framing" },
        ],
      },
      {
        id: "post",
        word: { ar: "مونتاج", en: "POST" },
        title: { ar: "المونتاج", en: "Editing & Post" },
        text: {
          ar: "مونتاجٌ راقٍ بإيقاعٍ سينمائي، وتصميم صوت، وإيقاعٍ سرديّ.",
          en: "High-end editing with cinematic pacing, sound design, and storytelling rhythm.",
        },
        items: [
          { ar: "المونتاج", en: "Editing" },
          { ar: "التلوين", en: "Color grading" },
          { ar: "تصميم الصوت", en: "Sound design" },
        ],
      },
    ],
    services: [
      {
        id: "production",
        title: { ar: "إدارة الإنتاج", en: "Production" },
        text: {
          ar: "من الميزانية والجدولة إلى المواقع والفريق والمعدات — كل يوم تصوير محسوب.",
          en: "From budget and scheduling to locations, crew and kit — every shoot day accounted for.",
        },
      },
      {
        id: "direction",
        title: { ar: "الإخراج", en: "Direction" },
        text: {
          ar: "بناء الهوية البصرية وإخراج الإنتاجات الإعلانية السينمائية.",
          en: "Building visual identity and directing cinematic commercial productions.",
        },
      },
      {
        id: "video",
        title: { ar: "التصوير", en: "Cinematography" },
        text: {
          ar: "تصويرٌ سينمائيٌّ احترافي للعلامات التجارية والحملات والمحتوى القصصي.",
          en: "Professional cinematic shooting for brands, campaigns, and storytelling content.",
        },
      },
      {
        id: "art",
        title: { ar: "الإدارة الفنية", en: "Art Direction" },
        text: {
          ar: "صياغة المزاج والتنسيق والكادر والإضاءة والأجواء البصرية.",
          en: "Crafting mood, styling, framing, lighting, and visual atmosphere.",
        },
      },
      {
        id: "script",
        title: { ar: "كتابة السيناريو", en: "Script Writing" },
        text: {
          ar: "كتابة مفاهيم إعلانية وسيناريوهات سينمائية مبنيّة على المشاعر.",
          en: "Writing emotionally driven ad concepts and cinematic scenarios.",
        },
      },
      {
        id: "edit",
        title: { ar: "المونتاج", en: "Editing" },
        text: {
          ar: "مونتاجٌ راقٍ بإيقاعٍ سينمائي، وتصميم صوت، وإيقاعٍ سرديّ.",
          en: "High-end editing with cinematic pacing, sound design, and storytelling rhythm.",
        },
      },
      {
        id: "color",
        title: { ar: "التلوين", en: "Color Grading" },
        text: {
          ar: "Grade يثبّت مزاج الفلم وهوية العلامة.",
          en: "A grade that locks the film’s mood and the brand.",
        },
      },
      {
        id: "sound",
        title: { ar: "تصميم الصوت", en: "Sound Design" },
        text: {
          ar: "صوت وموسيقى وإيقاع يكمّل الصورة.",
          en: "Sound, music and rhythm that complete the picture.",
        },
      },
    ],
    formats: [
      {
        id: "commercials",
        title: { ar: "إعلانات", en: "Commercials" },
        poster: `${rl}/posters/commercials/tofi-mj-door.jpg`,
      },
      { id: "brand", title: { ar: "أفلام علامات تجارية", en: "Brand films" } },
      {
        id: "food",
        title: { ar: "طعام ومقاهي", en: "Food & Coffee" },
        poster: `${rl}/posters/restaurants/the-story-doc.jpg`,
      },
      {
        id: "reels",
        title: { ar: "موشن وريلز", en: "Motion & Reels" },
        poster: `${rl}/posters/reels/noor-black-friday-edit-final.jpg`,
      },
      { id: "social", title: { ar: "إعلانات سوشال", en: "Social ads" } },
      { id: "events", title: { ar: "تغطية فعاليات", en: "Event coverage" } },
    ],
    showreel: `${rl}/showreel-wall.mp4`,
    // ADOL’S PRODUCTION films. Put files in assets/adol/ and list them:
    // { src: "./assets/adol/film.mp4", poster: "./assets/adol/film.jpg",
    //   w: 16, h: 9, title: { ar: "", en: "" } }
    videos: [],
    phases: [
      {
        id: "pre",
        title: { ar: "ما قبل الإنتاج", en: "Pre-production" },
        steps: [
          { ar: "الفكرة والمفهوم", en: "Idea & concept" },
          { ar: "كتابة السيناريو", en: "Script writing" },
          { ar: "الإدارة الفنية والمود", en: "Art direction & mood" },
          { ar: "المواقع والجدولة", en: "Locations & scheduling" },
        ],
      },
      {
        id: "prod",
        title: { ar: "الإنتاج", en: "Production" },
        steps: [
          { ar: "الإخراج", en: "Direction" },
          { ar: "التصوير والإضاءة", en: "Camera & lighting" },
          { ar: "إدارة الفريق والمعدات", en: "Crew & equipment" },
        ],
      },
      {
        id: "post",
        title: { ar: "ما بعد الإنتاج", en: "Post-production" },
        steps: [
          { ar: "المونتاج", en: "Editing" },
          { ar: "التلوين", en: "Color grading" },
          { ar: "تصميم الصوت", en: "Sound design" },
          { ar: "التسليم بكل الصيغ", en: "Delivery in every format" },
        ],
      },
    ],
    request: {
      types: [
        { ar: "فيلم علامة تجاريّة", en: "Brand film" },
        { ar: "مطعم / مقهى", en: "Restaurant / Cafe" },
        { ar: "ريل / إعلان سوشال", en: "Reel / social ad" },
        { ar: "تغطية فعاليّة", en: "Event coverage" },
        { ar: "أخرى", en: "Other" },
      ],
      budgets: [
        { ar: "غير محدّدة بعد", en: "Not sure yet" },
        { ar: "أقل من $1,000", en: "Under $1,000" },
        { ar: "$1,000 – $3,000", en: "$1,000 – $3,000" },
        { ar: "$3,000 – $7,000", en: "$3,000 – $7,000" },
        { ar: "$7,000+", en: "$7,000+" },
      ],
      reach: [
        { ar: "واتساب", en: "WhatsApp" },
        { ar: "إيميل", en: "Email" },
        { ar: "مكالمة", en: "Phone call" },
      ],
    },
    team: [],
    projects: [],
    contact: { ...rxKc, address: { ar: "بغداد، العراق", en: "Baghdad, Iraq" } },
    social: [
      {
        label: "Instagram",
        handle: "@adolbad",
        url: "https://www.instagram.com/adolbad",
      },
    ],
    cta: {
      label: { ar: "ابدأ مشروعك", en: "Start your project" },
      to: "/adol/contact",
    },
  }),
  U = Rr({
    name: { ar: "SLASH", en: "SLASH" },
    discipline: { ar: "تسويق", en: "Marketing" },
    short: {
      ar: "استراتيجية، محتوى، نشر وترويج.",
      en: "Strategy, content, publishing and promotion.",
    },
    tagline: "THE WAY TO ANOTHER WORLD",
    definition: {
      ar: "ستوديو سلاش الإبداعي، ذراع التسويق في REX Group: استراتيجية، محتوى، نشر وترويج — بعقل يفهم الجمهور قبل ما يحچي وياه.",
      en: "Slash creative studio, the marketing arm of REX Group: strategy, content, publishing and promotion — understanding the audience before talking to it.",
    },
    intro: {
      ar: "في سلاش، نرسم ملامح المستقبل بإبداع متجدد وطموح لا يعرف الحدود، لنحوّل الأفكار إلى إعلانات تبهر وتلهم.",
      en: "At Slash, we draw the shape of the future with renewed creativity and boundless ambition — turning ideas into ads that dazzle and inspire.",
    },
    studio: { ar: "ستوديو سلاش الإبداعي", en: "s/ash creative motion studio" },
    about: {
      ar: "ستوديو سلاش الإبداعي (Slash) متخصص في إنشاء إعلانات موشن جرافيك ثلاثية الأبعاد بدون وجوه، بأسلوب غير تقليدي ومبتكر. من خلال استخدام تقنيات حديثة ونصوص إعلانية غير مباشرة، نهدف إلى تقديم محتوى يجذب الجمهور بشكل طبيعي وغير مبالغ فيه، مما يعزز تفاعلهم مع خدمات عملائنا بشكل فعّال.",
      en: "Slash creative studio specialises in faceless 3D motion-graphics ads, in an unconventional and inventive style. Using modern techniques and indirect ad copy, we aim for content that draws the audience in naturally and without exaggeration — effectively strengthening their engagement with our clients’ services.",
    },
    goal: {
      ar: "يسعى ستوديو سلاش الإبداعي إلى تغيير مفهوم الإعلان التقليدي عبر تقديم إعلانات تبدو كأنها محتوى عادي على وسائل التواصل الاجتماعي. نهدف إلى الوصول إلى مختلف الفئات من أصحاب المشاريع المتوسطة والصغيرة، وأصحاب المتاجر الإلكترونية، والشركات الصناعية، بمحتوى إبداعي وملهم.",
      en: "Slash creative studio aims to change the idea of traditional advertising by making ads that feel like ordinary content on social media. We want to reach small and medium business owners, e-commerce stores and industrial companies with creative, inspiring content.",
    },
    audience: [
      { ar: "المشاريع الصغيرة والمتوسطة", en: "Small & medium businesses" },
      { ar: "المتاجر الإلكترونية", en: "E-commerce stores" },
      { ar: "الشركات الصناعية", en: "Industrial companies" },
    ],
    heroWords: {
      ar: ["استراتيجية", "محتوى", "نشر", "ترويج", "جمهور", "براند"],
      en: [
        "Strategy",
        "Content",
        "Publishing",
        "Promotion",
        "Audience",
        "Brand",
      ],
    },
    services: [
      {
        id: "mkt",
        title: { ar: "Marketing Strategy", en: "Marketing strategy" },
        text: {
          ar: "خطة تسويق مبنية على هدف واضح.",
          en: "A marketing plan built on a clear goal.",
        },
      },
      {
        id: "brand",
        title: { ar: "Brand Strategy", en: "Brand strategy" },
        text: {
          ar: "تموضع وشخصية وصوت للبراند.",
          en: "Positioning, personality and voice.",
        },
      },
      {
        id: "social",
        title: { ar: "سوشيال ميديا", en: "Social media" },
        text: {
          ar: "إدارة الحسابات والمحتوى اليومي.",
          en: "Account management and daily content.",
        },
      },
      {
        id: "content",
        title: { ar: "Content Strategy", en: "Content strategy" },
        text: {
          ar: "شنو ننشر، ليش، ووين.",
          en: "What to publish, why, and where.",
        },
      },
      {
        id: "copy",
        title: { ar: "كتابة إعلانية", en: "Copywriting" },
        text: { ar: "كلام قصير يوصل.", en: "Short words that land." },
      },
      {
        id: "media",
        title: { ar: "Media Planning", en: "Media planning" },
        text: {
          ar: "توزيع الميزانية على القنوات الصح.",
          en: "Placing budget on the right channels.",
        },
      },
      {
        id: "promo",
        title: { ar: "ترويج ونشر", en: "Promotion & publishing" },
        text: {
          ar: "نشر مدروس وإعلانات ممولة.",
          en: "Planned publishing and paid promotion.",
        },
      },
      {
        id: "community",
        title: { ar: "إدارة المجتمع", en: "Community management" },
        text: {
          ar: "نرد، نسمع، ونبني علاقة.",
          en: "Replying, listening, building a relationship.",
        },
      },
      {
        id: "audience",
        title: { ar: "تحليل الجمهور", en: "Audience analysis" },
        text: {
          ar: "منو الجمهور وشنو يحرّكه.",
          en: "Who the audience is and what moves them.",
        },
      },
      {
        id: "perf",
        title: { ar: "الأداء والتقارير", en: "Performance & reports" },
        text: {
          ar: "قياس حقيقي وتقارير واضحة.",
          en: "Real measurement, clear reports.",
        },
      },
      {
        id: "digital",
        title: {
          ar: "تسويق رقمي وإدارة براند",
          en: "Digital marketing & brand management",
        },
        text: { ar: "حضور رقمي متماسك.", en: "A coherent digital presence." },
      },
    ],
    phases: [
      {
        id: "scan",
        title: { ar: "SCAN", en: "SCAN" },
        text: {
          ar: "نقرأ السوق والبراند والمنافسين.",
          en: "Read the market, the brand and the competition.",
        },
      },
      {
        id: "target",
        title: { ar: "TARGET", en: "TARGET" },
        text: {
          ar: "نحدد الجمهور والهدف بدقة.",
          en: "Define the audience and the goal precisely.",
        },
      },
      {
        id: "strategy",
        title: { ar: "STRATEGY", en: "STRATEGY" },
        text: {
          ar: "نبني الخطة والرسالة والقنوات.",
          en: "Build the plan, the message and the channels.",
        },
      },
      {
        id: "execute",
        title: { ar: "EXECUTE", en: "EXECUTE" },
        text: {
          ar: "ننفّذ المحتوى والنشر والترويج.",
          en: "Execute content, publishing and promotion.",
        },
      },
      {
        id: "measure",
        title: { ar: "MEASURE", en: "MEASURE" },
        text: {
          ar: "نقيس ونعدّل على أساس نتائج حقيقية.",
          en: "Measure and adjust on real results.",
        },
      },
    ],
    // Slash portfolio. Add files under assets/slash/ and list them here:
    // { src: "./assets/slash/works/x.jpg", w: 1600, h: 1200,
    //   title: { ar: "", en: "" } }   (title optional; video: add type: "video", poster)
    works: [],
    locations: [],
    projects: [],
    contact: rxKc,
    social: [],
    cta: {
      label: { ar: "خلّي نخطط سوا", en: "Let’s plan it" },
      to: "/slash/contact",
    },
  }),
  $ = Rr({
    name: { ar: "APERIO", en: "APERIO" },
    discipline: { ar: "مواقع", en: "Websites" },
    short: {
      ar: "تصميم وتطوير مواقع وتجارب رقمية.",
      en: "Websites and digital experiences, designed and built.",
    },
    meaning: {
      ar: "Aperio كلمة لاتينية معناها: يفتح، يكشف، يُظهر.",
      en: "Aperio is Latin for: to open, to uncover, to reveal.",
    },
    definition: {
      ar: "قسم المواقع والتجارب الرقمية في REX Group: تصميم، تطوير، وإطلاق — مواقع سريعة وواضحة وتشتغل على كل شاشة.",
      en: "The websites and digital-experience division of REX Group: design, development and launch — fast, clear sites that work on every screen.",
    },
    services: [
      {
        id: "design",
        title: { ar: "تصميم مواقع", en: "Web design" },
        tags: ["UI"],
      },
      {
        id: "dev",
        title: { ar: "تطوير مواقع", en: "Web development" },
        tags: ["Build"],
      },
      { id: "ui", title: { ar: "UI Design", en: "UI design" }, tags: ["UI"] },
      { id: "ux", title: { ar: "UX Design", en: "UX design" }, tags: ["UX"] },
      {
        id: "landing",
        title: { ar: "Landing Pages", en: "Landing pages" },
        tags: ["Build"],
      },
      {
        id: "portfolio",
        title: { ar: "بورتفوليو", en: "Portfolios" },
        tags: ["UI", "Build"],
      },
      {
        id: "corporate",
        title: { ar: "مواقع شركات", en: "Corporate websites" },
        tags: ["Build"],
      },
      {
        id: "ecom",
        title: { ar: "متاجر إلكترونية", en: "E-commerce" },
        tags: ["Build"],
      },
      {
        id: "interactive",
        title: { ar: "تجارب تفاعلية", en: "Interactive experiences" },
        tags: ["UX", "Build"],
      },
      {
        id: "dash",
        title: { ar: "لوحات تحكم", en: "Dashboards" },
        tags: ["UI", "UX"],
      },
      {
        id: "responsive",
        title: { ar: "تصميم متجاوب", en: "Responsive design" },
        tags: ["UI"],
      },
      {
        id: "perf",
        title: { ar: "الأداء", en: "Performance" },
        tags: ["Build"],
      },
      {
        id: "deploy",
        title: { ar: "استضافة ونشر", en: "Hosting & deployment" },
        tags: ["Ops"],
      },
      {
        id: "maint",
        title: { ar: "صيانة المواقع", en: "Website maintenance" },
        tags: ["Ops"],
      },
    ],
    phases: [
      {
        id: "discover",
        title: { ar: "اكتشاف", en: "Discover" },
        text: {
          ar: "الهدف، الجمهور، والمحتوى الموجود.",
          en: "Goal, audience and existing content.",
        },
      },
      {
        id: "structure",
        title: { ar: "هيكلة", en: "Structure" },
        text: {
          ar: "خريطة الموقع ومسارات المستخدم.",
          en: "Sitemap and user journeys.",
        },
      },
      {
        id: "design",
        title: { ar: "تصميم", en: "Design" },
        text: {
          ar: "نظام واجهة للديسكتوب والموبايل.",
          en: "A UI system for desktop and mobile.",
        },
      },
      {
        id: "build",
        title: { ar: "بناء", en: "Build" },
        text: { ar: "تطوير نظيف وسريع.", en: "Clean, fast development." },
      },
      {
        id: "launch",
        title: { ar: "إطلاق", en: "Launch" },
        text: {
          ar: "اختبار، نشر، وربط الدومين.",
          en: "Testing, deployment and domain.",
        },
      },
      {
        id: "care",
        title: { ar: "متابعة", en: "Care" },
        text: { ar: "صيانة وتحديثات.", en: "Maintenance and updates." },
      },
    ],
    projects: [
      {
        id: "adol",
        title: "ADOL",
        url: "https://adol.art",
        relay: !0,
        type: { ar: "موقع بورتفوليو سينمائي", en: "Cinematic portfolio site" },
        text: {
          ar: "موقع أعمال لمدير إبداعي وصانع أفلام: شوريل، أقسام أعمال، ونموذج طلب مشروع.",
          en: "Portfolio for a creative director & filmmaker: showreel, work sections and a project-request form.",
        },
        langs: "AR · EN",
      },
      {
        id: "ronin",
        title: "RONIN",
        url: "https://www.roniin.site",
        type: { ar: "موقع استوديو تصميم", en: "Design studio site" },
        text: {
          ar: "هوية رقمية لتصميم جرافيك وإدارة فنية ورواية بصرية — داكن وبسيط.",
          en: "Graphic design, art direction and visual storytelling — dark and minimal.",
        },
        langs: "AR · EN",
      },
      {
        id: "cactus",
        title: "Cactus Café",
        url: "https://cactus-caf.vercel.app/ar",
        type: { ar: "منيو إلكتروني", en: "Digital menu" },
        text: {
          ar: "القائمة الإلكترونية لكاكتوس كافيه — ثلاث لغات ومصممة للموبايل.",
          en: "Cactus Café’s digital menu — three languages, built for mobile.",
        },
        langs: "AR · KU · EN",
        prefer: "mobile",
      },
      {
        id: "r9",
        title: "Reda Hayder",
        url: "https://r0de.space",
        relay: !0,
        type: { ar: "موقع بورتفوليو سينمائي", en: "Cinematic portfolio site" },
        text: {
          ar: "موقع أعمال لمصوّر سينمائي ومدير إبداعي في بغداد — Stories Worth Watching.",
          en: "Portfolio for a Baghdad cinematographer & creative director — Stories Worth Watching.",
        },
        langs: "EN",
      },
      {
        id: "elaf",
        title: "Elaf",
        url: "https://elaf.site",
        relay: !0,
        type: { ar: "موقع بورتفوليو", en: "Portfolio site" },
        text: {
          ar: "موقع أعمال لكاتبة إعلانات ومديرة إبداعية — حملات وإعلانات تلفزيونية.",
          en: "Portfolio for a copywriter & creative director — campaigns and TVC work.",
        },
        langs: "AR · EN",
      },
    ],
    tools: [],
    contact: rxKc,
    cta: {
      label: { ar: "ابدأ موقعك", en: "Start your website" },
      to: "/aperio/contact",
    },
  }),
  Ee = Rr({
    name: { ar: "REX Campaigns", en: "REX Campaigns" },
    discipline: { ar: "حملات", en: "Campaigns" },
    short: {
      ar: "حملات متكاملة من الفكرة للإطلاق.",
      en: "Integrated campaigns from idea to launch.",
    },
    definition: {
      ar: "قسم الحملات الإبداعية المتكاملة: من الفكرة لحد الإطلاق والقياس — ونجمع بيها قدرات كل أقسام REX.",
      en: "The integrated creative-campaigns division: from concept to launch and measurement — pulling in every REX division.",
    },
    heroLine: {
      ar: `فكرة وحدة.
وكل الأدوات
اللي تحتاجها.`,
      en: `One idea.
Every tool
it needs.`,
    },
    services: [
      { id: "concept", title: { ar: "فكرة الحملة", en: "Campaign concept" } },
      { id: "research", title: { ar: "بحث", en: "Research" } },
      {
        id: "cd",
        title: { ar: "Creative Direction", en: "Creative direction" },
      },
      { id: "message", title: { ar: "الرسالة الرئيسية", en: "Key message" } },
      { id: "visual", title: { ar: "الاتجاه البصري", en: "Visual direction" } },
      { id: "content", title: { ar: "المحتوى", en: "Content" } },
      { id: "production", title: { ar: "الإنتاج", en: "Production" } },
      { id: "social", title: { ar: "سوشيال ميديا", en: "Social media" } },
      { id: "ads", title: { ar: "إعلانات", en: "Advertising" } },
      { id: "launch", title: { ar: "الإطلاق", en: "Launch" } },
      { id: "activation", title: { ar: "Activation", en: "Activation" } },
      { id: "influencers", title: { ar: "مؤثرين", en: "Influencers" } },
      { id: "events", title: { ar: "فعاليات", en: "Events" } },
      { id: "outdoor", title: { ar: "إعلانات خارجية", en: "Outdoor" } },
      { id: "digital", title: { ar: "ديجيتال", en: "Digital" } },
      { id: "mgmt", title: { ar: "إدارة الحملة", en: "Campaign management" } },
      { id: "measure", title: { ar: "القياس", en: "Measurement" } },
    ],
    crew: [
      {
        world: "slash",
        role: { ar: "الاستراتيجية والجمهور", en: "Strategy & audience" },
      },
      {
        world: "adol",
        role: { ar: "الإنتاج والتصوير", en: "Production & film" },
      },
      {
        world: "aperio",
        role: { ar: "التجربة الرقمية", en: "Digital experience" },
      },
      {
        world: "rexCampaigns",
        role: {
          ar: "الفكرة والإدارة والإطلاق",
          en: "Idea, management & launch",
        },
      },
    ],
    phases: [
      {
        id: "think",
        title: { ar: "نفكر", en: "Think" },
        text: {
          ar: "بحث، جمهور، وفكرة تستاهل تنجرب.",
          en: "Research, audience, and an idea worth testing.",
        },
      },
      {
        id: "test",
        title: { ar: "نجرب", en: "Test" },
        text: {
          ar: "نرسمها، نكسرها، ونرجع نرسمها. المسودة الأولى مو الأخيرة.",
          en: "Draw it, break it, draw it again. The first draft is never the last.",
        },
      },
      {
        id: "make",
        title: { ar: "نصنع", en: "Make" },
        text: {
          ar: "رسالة، اتجاه بصري، محتوى وإنتاج.",
          en: "Message, visual direction, content and production.",
        },
      },
      {
        id: "launch",
        title: { ar: "نطلق", en: "Launch" },
        text: {
          ar: "إطلاق عبر القنوات الصح، وإدارة يومية.",
          en: "Launch across the right channels, managed daily.",
        },
      },
      {
        id: "measure",
        title: { ar: "نقيس", en: "Measure" },
        text: {
          ar: "نتائج حقيقية ودروس للحملة الجاية.",
          en: "Real results, and lessons for the next one.",
        },
      },
    ],
    caseStudies: [],
    contact: rxKc,
    cta: {
      label: { ar: "خلّي نبدي التجربة", en: "Start an Xperiment" },
      to: "/rex-campaigns/contact",
    },
  }),
  nn = {
    adol: { id: "adol", path: "/adol", label: "ADOL’S PRODUCTION", content: P },
    slash: { id: "slash", path: "/slash", label: "SLASH", content: U },
    aperio: { id: "aperio", path: "/aperio", label: "APERIO", content: $ },
    rexCampaigns: {
      id: "rexCampaigns",
      path: "/rex-campaigns",
      label: "REX Campaigns",
      content: Ee,
    },
  },
  Ne = Rr({
    name: { ar: "REX Group", en: "REX Group" },
    tagline: "Rules End. Xperiments Begin.",
    definition: {
      ar: "مجموعة إبداعية تجمع الإنتاج والتسويق والمواقع والحملات بمساحة وحدة.",
      en: "A creative group that brings production, marketing, websites and campaigns into one space.",
    },
    heroLead: {
      ar: "مو وكالة تقليدية. أربع عوالم إبداعية، كل واحد بتخصصه، يشتغلون سوا حتى تطلع الفكرة مثل ما تخيلناها.",
      en: "Not a traditional agency. Four creative worlds, each with its own craft, working together so the idea comes out the way we imagined it.",
    },
    story: {
      ar: [
        "REX هي مساحة إبداعية أسسها مجموعة من الـpartners يجمعهم شيء واحد: أفكارهم ما تعرف الحدود.",
        "مو هدفنا نكون Marketing Agency تقليدية، ولا Production House تمشي على نفس القواعد المعتادة. REX هي المساحة اللي نكدر بيها نجرب، نغامر، ونحوّل الأفكار اللي ممكن غيرنا يعتبرها «مجنونة» إلى حملات حقيقية.",
        "هنا ما نبني أفكارنا حتى ترضي الجميع، وما نخلي الـtargets أو القوالب التقليدية تحدد سقف الإبداع. نؤمن بالـvision أولاً، ونشتغل ويا البراندات والأشخاص اللي يؤمنون بيها ويكونون مستعدين يسوون شي مختلف فعلاً.",
        "REX مو مكان نشتغل بيه داخل الحدود. REX هي المكان اللي نكتشف بيه شنو يصير من نشيلها.",
      ],
      en: [
        "REX is a creative space founded by a group of partners with one thing in common: their ideas don’t know limits.",
        "We’re not here to be a traditional marketing agency, or a production house that follows the usual rules. REX is where we can experiment, take risks, and turn the ideas others might call “crazy” into real campaigns.",
        "We don’t build ideas to please everyone, and we don’t let targets or templates set the ceiling. We believe in the vision first, and we work with brands and people who believe in it too and are ready to do something actually different.",
        "REX isn’t a place where we work inside the limits. It’s where we find out what happens when we remove them.",
      ],
    },
    philosophy: [
      {
        title: { ar: "Rules End", en: "Rules End" },
        text: {
          ar: "ما نبدأ بـ«شنو المتعارف عليه؟»، نبدأ بـ«شنو نكدر نسوي؟».",
          en: "We don’t start with “what’s usually done?” — we start with “what can we do?”.",
        },
      },
      {
        title: { ar: "Xperiments Begin", en: "Xperiments Begin" },
        text: {
          ar: "ومن تنتهي الحدود، تبدأ التجربة: أفكار جديدة، طرق تنفيذ غير متوقعة، ومخاطرة محسوبة.",
          en: "Where the limits end, the experiment starts: new ideas, unexpected execution, calculated risk.",
        },
      },
    ],
    personality: [
      { ar: "جريئة، مو متهورة", en: "Bold, not reckless" },
      { ar: "شبابية، مو طفولية", en: "Young, not childish" },
      { ar: "مرحة، مو هزلية", en: "Playful, not silly" },
      { ar: "واثقة، مو متعالية", en: "Confident, not arrogant" },
      { ar: "تجريبية، مو فوضوية", en: "Experimental, not chaotic" },
      { ar: "سريعة، بقرارات مدروسة", en: "Fast, with considered decisions" },
    ],
    vision: {
      ar: "أن تحصل الفكرة على مساحة كافية حتى تُختبر وتتطور وتتحول من احتمال جريء إلى حملة حقيقية متكاملة.",
      en: "Give every idea enough room to be tested, developed and turned from a bold possibility into a complete, real campaign.",
    },
    audience: [
      {
        ar: "براندات تدور على Creative Partner، مو مجرد منفّذ.",
        en: "Brands looking for a creative partner, not just an executor.",
      },
      {
        ar: "شركات مستعدة تجرب أفكار مختلفة فعلاً.",
        en: "Companies ready to actually try different ideas.",
      },
      {
        ar: "مشاريع جديدة تريد تدخل السوق بصوت واضح.",
        en: "New ventures entering the market with a clear voice.",
      },
      {
        ar: "شركات كبيرة تريد حملات جريئة بتنفيذ احترافي.",
        en: "Large companies that want bold campaigns with professional execution.",
      },
    ],
    howWeWork: [
      {
        world: "slash",
        ar: "SLASH يبني الاستراتيجية ويفهم الجمهور.",
        en: "SLASH builds the strategy and reads the audience.",
      },
      {
        world: "adol",
        ar: "ADOL’S PRODUCTION ينتج ويخرج ويصوّر ويمنتج.",
        en: "ADOL’S PRODUCTION produces, directs, shoots and edits.",
      },
      {
        world: "aperio",
        ar: "APERIO يبني التجربة الرقمية والمواقع.",
        en: "APERIO builds the digital experience and the websites.",
      },
      {
        world: "rexCampaigns",
        ar: "REX Campaigns يجمع الكل بحملة وحدة ويديرها لحد الإطلاق.",
        en: "REX Campaigns brings it all into one campaign and runs it to launch.",
      },
    ],
    vsAgency: [
      {
        ar: "الوكالة التقليدية تبدأ من القالب. إحنا نبدأ من الفكرة.",
        en: "A traditional agency starts from the template. We start from the idea.",
      },
      {
        ar: "بدل ما تنتقل بين شركات، التخصصات كلها بمساحة وحدة.",
        en: "Instead of moving between companies, every discipline sits in one space.",
      },
      {
        ar: "كل قسم عنده خبرته وطريقته، والمظلة تضمن إنهم يشتغلون كفريق واحد.",
        en: "Each division keeps its own craft; the umbrella makes them work as one team.",
      },
    ],
    localMessage: {
      title: { ar: "هلا بيك.", en: "Welcome." },
      text: {
        ar: "إذا عندك فكرة، احچيلنا بيها — حتى لو بعدها مسودة.",
        en: "If you have an idea, tell us about it — even if it’s still a draft.",
      },
    },
    contact: rxKc,
    social: [
      {
        label: "Instagram",
        handle: "@rexgroupx",
        url: REX_CONFIG.contact.instagram,
      },
    ],
    cta: {
      label: { ar: "خلّي نبدي التجربة", en: "Start an Xperiment" },
      to: "/contact",
    },
  });
function s1({ page: e, children: n }) {
  const { ui: t, t: r } = R();
  return l.jsxs("div", {
    "data-w": "rex",
    className: "rx",
    children: [
      l.jsx("a", {
        className: "skip-link",
        href: "#main",
        children: t("skipToContent"),
      }),
      l.jsxs("header", {
        className: "rx-top",
        children: [
          l.jsxs(D, {
            to: "/",
            className: "rx-brand",
            "aria-label": "REX Group",
            children: [
              l.jsx(Wi, { className: "rx-brand-mark", title: "REX" }),
              l.jsx("span", { className: "rx-brand-sub", children: "GROUP" }),
            ],
          }),
          l.jsxs("nav", {
            className: "rx-nav",
            "aria-label": "REX Group",
            children: [
              l.jsx(D, { to: "/about", children: t("about") }),
              l.jsx(D, { to: "/contact", children: t("contact") }),
            ],
          }),
          l.jsxs("div", {
            className: "rx-ctl",
            children: [
              l.jsx(Pr, { className: "rx-ic" }),
              l.jsx(Wr, { className: "rx-ic rx-lang" }),
            ],
          }),
        ],
      }),
      l.jsx("main", {
        id: "main",
        className: `rx-main rx-p-${e}`,
        children: n,
      }),
      l.jsxs("footer", {
        className: "rx-foot",
        children: [
          l.jsxs("div", {
            className: "rx-foot-tag",
            children: [
              l.jsx(Pi, { className: "rx-foot-x", exp: "#FF5A36" }),
              l.jsxs("p", {
                lang: "en",
                dir: "ltr",
                children: [
                  "Rules End. ",
                  l.jsx("span", { children: "X" }),
                  "periments Begin.",
                ],
              }),
            ],
          }),
          l.jsx("nav", {
            className: "rx-foot-worlds",
            "aria-label": "REX worlds",
            children: Ia.map((s) =>
              l.jsx(D, { to: nn[s].path, children: nn[s].label }, s),
            ),
          }),
          l.jsx(RxContact, { className: "rx-foot-contact", insta: !0 }),
          l.jsxs("p", {
            className: "rx-foot-copy",
            children: ["© ", new Date().getFullYear(), " ", r(Ne.name)],
          }),
        ],
      }),
    ],
  });
}
const Cd = "rex-intro-seen",
  a1 = [
    ["r-stem", 200],
    ["r-bowl", 260],
    ["r-leg", 150],
    ["gap", 50],
    ["e-spine", 150],
    ["e-top", 110],
    ["e-mid", 90],
    ["e-bot", 120],
    ["gap", 40],
    ["x-hand", 150],
    ["gap", 120],
    ["x-break", 110],
  ];
function i1() {
  try {
    return sessionStorage.getItem(Cd) === "1";
  } catch {
    return !1;
  }
}
function o1() {
  try {
    sessionStorage.setItem(Cd, "1");
  } catch {}
}
function u1() {
  const { ui: e } = R(),
    [n, t] = w.useState(() => !i1()),
    [r, s] = w.useState(!1),
    [a, i] = w.useState(!1),
    [o, u] = w.useState(!1),
    c = w.useRef(null),
    A = () => {
      o1(), s(!0), setTimeout(() => t(!1), 520);
    };
  return (
    w.useEffect(() => {
      var L;
      if (!n) return;
      const m = matchMedia("(prefers-reduced-motion: reduce)").matches,
        h = {};
      if (
        ((L = c.current) == null ||
          L.querySelectorAll("[data-k]").forEach((v) => {
            h[v.dataset.k] = v;
          }),
        m)
      ) {
        Object.values(h).forEach((x) => x.setAttribute("stroke-dashoffset", 0)),
          u(!0);
        const v = setTimeout(A, 900);
        return () => clearTimeout(v);
      }
      const g = [];
      let y = 250;
      a1.forEach(([v, x]) => {
        if (v === "gap") {
          y += x;
          return;
        }
        g.push({ k: v, s: y, d: x }),
          v === "x-break" && setTimeout(() => i(!0), y + 20),
          (y += x);
      });
      const k = setTimeout(() => u(!0), y + 60),
        N = setTimeout(A, y + 1e3),
        f = performance.now();
      let d;
      const p = (v) => {
        const x = v - f;
        g.forEach((j) => {
          var E;
          if (x >= j.s) {
            const M = Math.min(1, (x - j.s) / j.d);
            (E = h[j.k]) == null ||
              E.setAttribute("stroke-dashoffset", 1 - (1 - Math.pow(1 - M, 3)));
          }
        }),
          x < y + 100 && (d = requestAnimationFrame(p));
      };
      return (
        (d = requestAnimationFrame(p)),
        () => {
          cancelAnimationFrame(d), clearTimeout(k), clearTimeout(N);
        }
      );
    }, [n]),
    n
      ? l.jsxs("div", {
          className: `rx-intro ${r ? "is-leaving" : ""} ${a ? "is-broken" : ""} ${o ? "is-pop" : ""}`,
          role: "presentation",
          children: [
            l.jsxs("div", {
              className: "rx-intro-stage",
              children: [
                l.jsxs("svg", {
                  ref: c,
                  className: "rx-intro-word",
                  viewBox: "-40 -60 330 220",
                  "aria-label": "REX",
                  children: [
                    l.jsx("line", {
                      className: "rx-intro-rule a",
                      x1: "-30",
                      y1: "0",
                      x2: "190",
                      y2: "0",
                    }),
                    l.jsx("line", {
                      className: "rx-intro-rule b",
                      x1: "190",
                      y1: "0",
                      x2: "280",
                      y2: "0",
                    }),
                    l.jsx("line", {
                      className: "rx-intro-rule c",
                      x1: "-30",
                      y1: "100",
                      x2: "280",
                      y2: "100",
                    }),
                    l.jsx("defs", {
                      children: qe.wordmark.strokes.map((m) =>
                        l.jsx(
                          "mask",
                          {
                            id: `im-${m.id}`,
                            maskUnits: "userSpaceOnUse",
                            x: "-100",
                            y: "-100",
                            width: "500",
                            height: "400",
                            children: l.jsx("path", {
                              "data-k": m.id,
                              d: m.cl,
                              stroke: "#fff",
                              strokeWidth: "32",
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              pathLength: "1",
                              strokeDasharray: "1 1",
                              strokeDashoffset: "1",
                            }),
                          },
                          m.id,
                        ),
                      ),
                    }),
                    qe.wordmark.strokes.map((m) =>
                      l.jsx(
                        "path",
                        {
                          d: m.d,
                          mask: `url(#im-${m.id})`,
                          fill: m.id === "x-break" ? "#FF5A36" : "#12110F",
                        },
                        m.id,
                      ),
                    ),
                  ],
                }),
                l.jsx(Wn, {
                  use: "introReveal",
                  className: "rx-intro-mascot",
                  sizes: "(max-width:700px) 45vw, 260px",
                  eager: !0,
                }),
              ],
            }),
            l.jsxs("button", {
              type: "button",
              className: "rx-intro-skip",
              onClick: A,
              children: [e("skipIntro"), " →"],
            }),
          ],
        })
      : null
  );
}
function c1({ lang: e }) {
  const n = nn.adol.content.poster[e];
  return l.jsxs("div", {
    className: "pd-scene pd-adol",
    "aria-hidden": "true",
    children: [
      l.jsx("i", { className: "pd-rd a" }),
      l.jsx("i", { className: "pd-rd b" }),
      l.jsx("i", { className: "pd-rd c" }),
      l.jsx("i", { className: "pd-rd d" }),
      l.jsxs("span", {
        className: "pd-adol-tag",
        children: [l.jsx("b", {}), "ADOL’S PRODUCTION"],
      }),
      l.jsx("div", { className: "pd-adol-img" }),
      l.jsx("span", {
        className: "pd-adol-word",
        "data-t": n[0],
        children: n[0],
      }),
      l.jsx("span", { className: "pd-adol-not", children: n[1] }),
    ],
  });
}
function d1({ lang: e }) {
  return l.jsxs("div", {
    className: "pd-scene pd-slash",
    "aria-hidden": "true",
    children: [
      l.jsx("div", { className: "pd-slash-panel" }),
      l.jsx(Ra, { className: "pd-slash-logo", ink: "#FFFFFF", title: "" }),
      l.jsx("ol", {
        className: "pd-slash-steps",
        children: nn.slash.content.phases.map((n, t) =>
          l.jsxs(
            "li",
            { children: [l.jsxs("b", { children: ["0", t + 1] }), n.title.en] },
            n.id,
          ),
        ),
      }),
      l.jsx("span", {
        className: "pd-slash-tag",
        children: "THE WAY TO ANOTHER WORLD",
      }),
    ],
  });
}
function f1() {
  const e = w.useRef(null),
    n = (t) => {
      var s;
      const r = (s = e.current) == null ? void 0 : s.getBoundingClientRect();
      r &&
        (e.current.style.setProperty(
          "--fx",
          `${((t.clientX - r.left) / r.width) * 100}%`,
        ),
        e.current.style.setProperty(
          "--fy",
          `${((t.clientY - r.top) / r.height) * 100}%`,
        ));
    };
  return l.jsxs("div", {
    ref: e,
    className: "pd-scene pd-aperio",
    onPointerMove: n,
    "aria-hidden": "true",
    children: [
      l.jsxs("div", {
        className: "pd-win",
        children: [
          l.jsxs("div", {
            className: "pd-chrome",
            children: [
              l.jsx("i", {}),
              l.jsx("i", {}),
              l.jsx("i", {}),
              l.jsx("span", {}),
            ],
          }),
          l.jsxs("div", {
            className: "pd-build",
            children: [
              l.jsx("b", {}),
              l.jsx("b", {}),
              l.jsx("b", {}),
              l.jsx("b", {}),
              l.jsx("b", {}),
            ],
          }),
        ],
      }),
      l.jsx(Dt, { className: "pd-aperio-mark", stroke: "#14120F" }),
    ],
  });
}
function p1({ lang: e }) {
  const n =
    e === "ar"
      ? ["فكرة", "رسالة", "إنتاج", "إطلاق", "قياس"]
      : ["IDEA", "MESSAGE", "MAKE", "LAUNCH", "MEASURE"];
  return l.jsxs("div", {
    className: "pd-scene pd-camp",
    "aria-hidden": "true",
    children: [
      l.jsxs("div", {
        className: "pd-camp-head",
        children: [
          l.jsx(Wi, { className: "pd-camp-word", xColor: "#FF5A36" }),
          l.jsx("span", { className: "pd-camp-sub", children: "CAMPAIGNS" }),
        ],
      }),
      l.jsx("div", {
        className: "pd-camp-chips",
        children: n.map((t, r) =>
          l.jsx("span", { style: { "--i": r }, children: t }, t),
        ),
      }),
    ],
  });
}
const m1 = { adol: c1, slash: d1, aperio: f1, rexCampaigns: p1 };
function h1() {
  const { t: e, lang: n, ui: t } = R(),
    [r, s] = w.useState(null),
    a = w.useRef(null);
  return (
    w.useEffect(() => {
      const i = new IntersectionObserver(
        (o) => {
          o.some((u) => u.isIntersecting) && (Ia.forEach(Ri), i.disconnect());
        },
        { rootMargin: "200px" },
      );
      return a.current && i.observe(a.current), () => i.disconnect();
    }, []),
    l.jsx("div", {
      ref: a,
      className: "rx-doors",
      onPointerLeave: () => s(null),
      children: Ia.map((i, o) => {
        const u = nn[i],
          c = m1[i];
        return l.jsxs(
          D,
          {
            to: u.path,
            className: `rx-door rx-door-${i} ${r === i ? "is-hot" : ""}`,
            onPointerEnter: () => s(i),
            onFocus: () => s(i),
            onBlur: () => s(null),
            "aria-label": `${u.label} — ${e(u.content.discipline)}. ${e(u.content.short)}`,
            children: [
              l.jsx(c, { hot: r === i, lang: n }),
              l.jsxs("span", {
                className: "rx-door-cap",
                children: [
                  l.jsxs("span", {
                    className: "rx-door-n",
                    children: ["0", o + 1],
                  }),
                  l.jsx("span", {
                    className: "rx-door-name",
                    children: u.label,
                  }),
                  l.jsx("span", {
                    className: "rx-door-disc",
                    children: e(u.content.discipline),
                  }),
                  l.jsx("span", {
                    className: "rx-door-short",
                    children: e(u.content.short),
                  }),
                  l.jsxs("span", {
                    className: "rx-door-go",
                    children: [
                      t("enter"),
                      " ",
                      l.jsx("span", {
                        "aria-hidden": "true",
                        children: n === "ar" ? "←" : "→",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          i,
        );
      }),
    })
  );
}
function A1() {
  const { t: e, lang: n } = R(),
    t =
      n === "ar"
        ? "أربع عوالم تحت مظلة واحدة."
        : "Four worlds under one umbrella.";
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(u1, {}),
      l.jsxs("section", {
        className: "rx-hero",
        "aria-labelledby": "rx-h1",
        children: [
          l.jsxs("div", {
            className: "rx-hero-copy",
            children: [
              l.jsx("p", { className: "rx-kicker", children: "REX GROUP" }),
              l.jsxs("h1", {
                id: "rx-h1",
                className: "rx-display",
                lang: "en",
                dir: "ltr",
                children: [
                  l.jsx("span", { className: "rx-l1", children: "Rules End." }),
                  l.jsxs("span", {
                    className: "rx-l2",
                    children: [
                      l.jsx("em", { children: "X" }),
                      "periments Begin.",
                    ],
                  }),
                ],
              }),
              l.jsx(Te, { name: "under", className: "rx-hero-under" }),
              l.jsx("p", { className: "rx-lead", children: e(Ne.heroLead) }),
              l.jsxs("div", {
                className: "rx-hero-cta",
                children: [
                  l.jsxs("a", {
                    href: "#worlds",
                    className: "rx-btn",
                    children: [
                      n === "ar" ? "اكتشف العوالم" : "Explore the worlds",
                      " ",
                      l.jsx("span", { "aria-hidden": "true", children: "↓" }),
                    ],
                  }),
                  l.jsx("a", {
                    href: "#who",
                    className: "rx-btn rx-btn-ghost",
                    children: n === "ar" ? "منو هي REX؟" : "Who is REX?",
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className: "rx-hero-art",
            children: [
              l.jsx(Te, { name: "circle", className: "rx-hero-circle" }),
              l.jsx(Te, { name: "star", className: "rx-hero-star" }),
              l.jsx(Te, { name: "speed", className: "rx-hero-speed" }),
              l.jsx(Wn, {
                use: "hubWelcome",
                className: "rx-hero-mascot",
                eager: !0,
                sizes: "(max-width: 800px) 72vw, 34vw",
              }),
            ],
          }),
        ],
      }),
      l.jsxs("section", {
        id: "worlds",
        className: "rx-worlds",
        "aria-labelledby": "rx-worlds-h",
        children: [
          l.jsxs("header", {
            className: "rx-sec-head",
            children: [
              l.jsx("h2", {
                id: "rx-worlds-h",
                className: "rx-h2",
                children: t,
              }),
              l.jsx("p", {
                className: "rx-sec-lead",
                children:
                  n === "ar"
                    ? "لكل مشروع احتياجه، ولكل احتياج عالمه. اختار العالم المناسب لمشروعك."
                    : "Every project has its own need, and every need has its world. Choose the right world for your project.",
              }),
            ],
          }),
          l.jsx(h1, {}),
        ],
      }),
      l.jsxs("section", {
        id: "who",
        className: "rx-who",
        "aria-labelledby": "rx-who-h",
        children: [
          l.jsx(Pi, { className: "rx-who-x", exp: "#FF5A36" }),
          l.jsxs("div", {
            className: "rx-who-copy",
            children: [
              l.jsx("h2", {
                id: "rx-who-h",
                className: "rx-h2",
                children: n === "ar" ? "منو هي REX؟" : "Who is REX?",
              }),
              l.jsx("p", {
                className: "rx-who-lead",
                children:
                  n === "ar"
                    ? "REX Group هي المجموعة الأم. تحتها أربع عوالم، لكل واحد تخصصه وفريقه: الإنتاج، التسويق، المواقع، والحملات."
                    : "REX Group is the parent group. Under it sit four worlds, each with its own craft and crew: production, marketing, websites and campaigns.",
              }),
              l.jsx("p", {
                children:
                  n === "ar"
                    ? "تتواصل ويا جهة وحدة، وREX توجّه مشروعك للعالم اللي يناسبه — أو تجمع أكثر من عالم إذا احتاج المشروع."
                    : "You talk to one team, and REX points your project to the world that fits — or brings worlds together when the project calls for it.",
              }),
              l.jsxs(D, {
                to: "/about",
                className: "rx-btn rx-btn-ghost",
                children: [
                  n === "ar" ? "قصة REX" : "The REX story",
                  " ",
                  l.jsx("span", {
                    "aria-hidden": "true",
                    children: n === "ar" ? "←" : "→",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      l.jsxs("section", {
        className: "rx-local",
        "aria-labelledby": "rx-local-h",
        children: [
          l.jsx(Wn, {
            use: "localMessage",
            className: "rx-local-mascot",
            sizes: "(max-width: 800px) 56vw, 300px",
          }),
          l.jsxs("div", {
            className: "rx-local-copy",
            children: [
              l.jsx("h2", {
                id: "rx-local-h",
                className: "rx-h2",
                children: e(Ne.localMessage.title),
              }),
              l.jsx("p", { children: e(Ne.localMessage.text) }),
              l.jsx(D, {
                to: "/contact",
                className: "rx-btn",
                children: e(Ne.cta.label),
              }),
            ],
          }),
        ],
      }),
      l.jsx(RxDraw, {}),
    ],
  });
}
// ── "Draw us your idea" — a REX notes sheet you can draw and write on ──
// Strokes are kept as vector ops in a fixed logical space (1000 wide), so
// undo/redo/resize redraw losslessly and the export is always sharp.
const dwPens = [
    { id: "pencil", ar: "رصاص", en: "Pencil", size: 3 },
    { id: "pen", ar: "حبر", en: "Ink pen", size: 5 },
    { id: "marker", ar: "ماركر", en: "Marker", size: 22 },
    { id: "eraser", ar: "ممحاة", en: "Eraser", size: 28 },
    { id: "text", ar: "نص", en: "Text", size: 30 },
  ],
  dwInks = [
    ["#12110F", "حبر أسود", "Black ink"],
    ["#FF5A36", "برتقالي", "Orange"],
    ["#3155FF", "أزرق", "Blue"],
    ["#8A45FF", "بنفسجي", "Purple"],
    ["#1F9D55", "أخضر", "Green"],
    ["#D7FF3F", "أسيد", "Acid"],
  ],
  dwPaper = "#FBF6EC",
  dwLine = "#D9CDB8";
function dwPaint(e, n, t, r) {
  // e: 2d ctx already scaled to logical units; n: ops; t: W; r: H
  let s = 0;
  n.forEach((a, i) => a.type === "clear" && (s = i + 1));
  for (const a of n.slice(s)) {
    if (a.type === "text") {
      e.save(),
        (e.globalCompositeOperation = "source-over"),
        (e.fillStyle = a.color),
        (e.font = `600 ${a.size}px "Bricolage Grotesque","Reem Kufi","IBM Plex Sans Arabic",sans-serif`),
        (e.textBaseline = "top"),
        (e.direction = a.dir || "inherit"),
        (e.textAlign = a.dir === "rtl" ? "right" : "left"),
        a.text.split("\n").forEach((u, c) => e.fillText(u, a.x, a.y + c * a.size * 1.25)),
        e.restore();
      continue;
    }
    const o = a.points;
    if (!o.length) continue;
    e.save(),
      (e.lineCap = a.tool === "marker" ? "square" : "round"),
      (e.lineJoin = "round"),
      (e.strokeStyle = a.color),
      (e.globalCompositeOperation =
        a.tool === "eraser" ? "destination-out" : a.tool === "marker" ? "multiply" : "source-over"),
      (e.globalAlpha = a.tool === "marker" ? 0.45 : a.tool === "pencil" ? 0.82 : 1);
    if (o.length === 1) {
      e.beginPath(),
        e.arc(o[0][0], o[0][1], (a.size * (o[0][2] || 1)) / 2, 0, Math.PI * 2),
        (e.fillStyle = a.color),
        a.tool === "eraser" && (e.fillStyle = "#000"),
        e.fill(),
        e.restore();
      continue;
    }
    for (let u = 1; u < o.length; u++) {
      const c = o[u - 1],
        A = o[u],
        m = a.tool === "pen" || a.tool === "pencil" ? (c[2] + A[2]) / 2 : 1;
      e.beginPath(),
        (e.lineWidth = Math.max(0.6, a.size * m)),
        e.moveTo(c[0], c[1]),
        e.lineTo(A[0], A[1]),
        e.stroke();
    }
    e.restore();
  }
}
function RxDraw() {
  const { lang: e } = R(),
    n = (v, x) => (e === "ar" ? v : x),
    t = w.useRef(null),
    [W] = w.useState(1e3),
    [H] = w.useState(() =>
      typeof window != "undefined" && window.innerWidth < 640 ? 1300 : 640,
    ),
    [s, a] = w.useState([]),
    [i, o] = w.useState([]),
    [u, c] = w.useState("pen"),
    [A, m] = w.useState(dwInks[0][0]),
    [h, g] = w.useState(5),
    [y, k] = w.useState(null),
    [N, f] = w.useState(""),
    d = w.useRef(null),
    p = w.useRef(null),
    [L, x0] = w.useState(""),
    ops = w.useRef(s);
  ops.current = s;
  const draw = w.useCallback(
      (v) => {
        const x = t.current;
        if (!x) return;
        const j = x.getContext("2d"),
          E = x.width / W;
        j.setTransform(1, 0, 0, 1, 0, 0),
          j.clearRect(0, 0, x.width, x.height),
          j.setTransform(E, 0, 0, E, 0, 0),
          dwPaint(j, v || ops.current, W, H);
      },
      [W, H],
    ),
    fit = w.useCallback(() => {
      const v = t.current;
      if (!v) return;
      const x = v.getBoundingClientRect(),
        j = Math.min(2, window.devicePixelRatio || 1);
      (v.width = Math.round(x.width * j)), (v.height = Math.round((x.width * H * j) / W)), draw();
    }, [draw, W, H]);
  w.useEffect(() => {
    fit();
    const v = new ResizeObserver(fit);
    return t.current && v.observe(t.current), () => v.disconnect();
  }, [fit]),
    w.useEffect(() => {
      draw(), x0((v) => (v && URL.revokeObjectURL(v), ""));
    }, [s, draw]),
    w.useEffect(() => {
      y && p.current && p.current.focus();
    }, [y]);
  const pt = (v) => {
      const x = t.current.getBoundingClientRect();
      return [
        ((v.clientX - x.left) / x.width) * W,
        ((v.clientY - x.top) / x.height) * H,
        v.pointerType === "pen" && v.pressure > 0 ? 0.35 + v.pressure * 1.1 : 1,
      ];
    },
    down = (v) => {
      if (v.button > 0) return;
      if (u === "text") {
        v.preventDefault();
        const [x, j] = pt(v);
        y && commit(), k({ x, y: j }), f("");
        return;
      }
      v.preventDefault(), t.current.setPointerCapture(v.pointerId);
      const x = { type: "stroke", tool: u, color: A, size: h, points: [pt(v)] };
      (d.current = x), draw([...ops.current, x]);
    },
    move = (v) => {
      const x = d.current;
      if (!x) return;
      const j = v.getCoalescedEvents ? v.getCoalescedEvents() : [v];
      for (const E of j.length ? j : [v]) x.points.push(pt(E));
      draw([...ops.current, x]);
    },
    up = () => {
      const v = d.current;
      v && ((d.current = null), a((x) => [...x, v]), o([]));
    },
    commit = () => {
      const v = N.trim();
      v &&
        y &&
        (a((x) => [
          ...x,
          {
            type: "text",
            text: v,
            x: y.x,
            y: y.y,
            color: A,
            size: Math.max(18, h * 1.4),
            dir: /[؀-ۿ]/.test(v) ? "rtl" : "ltr",
          },
        ]),
        o([])),
        k(null),
        f("");
    },
    undo = () => {
      const v = ops.current;
      v.length && (o([...i, v[v.length - 1]]), a(v.slice(0, -1)));
    },
    redo = () => {
      i.length && (a([...ops.current, i[i.length - 1]]), o(i.slice(0, -1)));
    },
    clear = () => {
      ops.current.length &&
        window.confirm(n("نمسح الورقة كلها؟", "Clear the whole sheet?")) &&
        (a((v) => [...v, { type: "clear" }]), o([]));
    },
    live = () => {
      let v = 0;
      return s.forEach((x, j) => x.type === "clear" && (v = j + 1)), s.slice(v).length > 0;
    },
    exp = (v = 1600) =>
      new Promise((x) => {
        const j = document.createElement("canvas");
        (j.width = v), (j.height = Math.round((v * H) / W));
        const E = j.getContext("2d"),
          M = v / W;
        (E.fillStyle = dwPaper), E.fillRect(0, 0, j.width, j.height), E.setTransform(M, 0, 0, M, 0, 0);
        const V = document.createElement("canvas");
        (V.width = j.width), (V.height = j.height);
        const we = V.getContext("2d");
        we.setTransform(M, 0, 0, M, 0, 0), dwPaint(we, ops.current, W, H);
        E.setTransform(1, 0, 0, 1, 0, 0), E.drawImage(V, 0, 0);
        E.fillStyle = "#12110F";
        E.font = "700 22px 'Bricolage Grotesque',sans-serif";
        E.globalAlpha = 0.5;
        E.fillText("REX Group — rexgroup44@gmail.com", 24, j.height - 22);
        j.toBlob((Z) => x(Z), "image/png");
      }),
    save = async () => {
      const v = await exp(2e3);
      if (!v) return;
      const x = URL.createObjectURL(v),
        j = document.createElement("a");
      (j.href = x), (j.download = "rex-idea.png"), document.body.appendChild(j), j.click(), j.remove();
      setTimeout(() => URL.revokeObjectURL(x), 4e3);
    },
    look = async () => {
      const v = await exp(1200);
      v && (L && URL.revokeObjectURL(L), x0(URL.createObjectURL(v)));
    },
    extra = async () =>
      live()
        ? {
            files: [{ field: "drawing", blob: await exp(1600), name: "rex-idea.png" }],
            fields: { drawing: n("مرفقة كصورة (rex-idea.png)", "Attached as an image (rex-idea.png)") },
          }
        : { files: [], fields: { drawing: n("بدون رسمة", "No drawing") } },
    pick = (v) => {
      c(v);
      const x = dwPens.find((j) => j.id === v);
      v !== "text" && g(x.size), v !== "text" && y && commit();
    },
    hasOps = live();
  return l.jsxs("section", {
    id: "draw",
    className: "rx-draw",
    "aria-labelledby": "rx-draw-h",
    children: [
      l.jsxs("header", {
        className: "rx-draw-head",
        children: [
          l.jsx("p", { className: "rx-kicker", children: n("ورقة REX", "REX sheet") }),
          l.jsxs("h2", {
            id: "rx-draw-h",
            className: "rx-h2 rx-draw-title",
            children: [
              n("ارسم لنا فكرتك", "Draw us your idea"),
              l.jsx(Te, { name: "under", className: "rx-draw-under" }),
            ],
          }),
          l.jsx("p", {
            className: "rx-draw-sub",
            children: n("أو ارسم لنا اللي تريده.", "Or draw us whatever you want."),
          }),
        ],
      }),
      l.jsxs("div", {
        className: "rx-sheet",
        children: [
          l.jsx("span", { className: "rx-tape a", "aria-hidden": "true" }),
          l.jsx("span", { className: "rx-tape b", "aria-hidden": "true" }),
          l.jsx(Te, { name: "star", className: "rx-sheet-star" }),
          l.jsx(Te, { name: "arrow", className: "rx-sheet-arrow" }),
          l.jsxs("div", {
            className: "rx-tools",
            role: "toolbar",
            "aria-label": n("أدوات الرسم", "Drawing tools"),
            children: [
              l.jsx("div", {
                className: "rx-tool-group",
                role: "radiogroup",
                "aria-label": n("نوع القلم", "Pen type"),
                children: dwPens.map((v) =>
                  l.jsxs(
                    "button",
                    {
                      type: "button",
                      role: "radio",
                      "aria-checked": u === v.id,
                      className: `rx-tool is-${v.id} ${u === v.id ? "is-on" : ""}`,
                      onClick: () => pick(v.id),
                      children: [
                        l.jsx("i", { "aria-hidden": "true" }),
                        l.jsx("span", { children: e === "ar" ? v.ar : v.en }),
                      ],
                    },
                    v.id,
                  ),
                ),
              }),
              l.jsxs("div", {
                className: "rx-tool-group rx-inks",
                role: "radiogroup",
                "aria-label": n("اللون", "Colour"),
                children: [
                  dwInks.map(([v, x, j]) =>
                    l.jsx(
                      "button",
                      {
                        type: "button",
                        role: "radio",
                        "aria-checked": A === v,
                        "aria-label": e === "ar" ? x : j,
                        title: e === "ar" ? x : j,
                        className: `rx-ink ${A === v ? "is-on" : ""}`,
                        style: { "--ink-c": v },
                        onClick: () => {
                          m(v), u === "eraser" && pick("pen");
                        },
                      },
                      v,
                    ),
                  ),
                  l.jsxs("label", {
                    className: "rx-ink rx-ink-any",
                    title: n("لون آخر", "Another colour"),
                    style: { "--ink-c": A },
                    children: [
                      l.jsx("span", { className: "sr-only", children: n("لون آخر", "Another colour") }),
                      l.jsx("input", { type: "color", value: A, onChange: (v) => m(v.target.value.toUpperCase()) }),
                    ],
                  }),
                ],
              }),
              l.jsxs("label", {
                className: "rx-size",
                children: [
                  l.jsx("span", { children: n("السماكة", "Thickness") }),
                  l.jsx("input", {
                    type: "range",
                    min: 1,
                    max: 48,
                    value: h,
                    onChange: (v) => g(+v.target.value),
                  }),
                  l.jsx("i", {
                    "aria-hidden": "true",
                    style: { "--sz": `${Math.min(30, Math.max(3, h * 0.7))}px`, "--ink-c": u === "eraser" ? "#bbb" : A },
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "rx-tool-group rx-acts",
                children: [
                  l.jsx("button", {
                    type: "button",
                    onClick: undo,
                    disabled: !s.length,
                    children: n("تراجع", "Undo"),
                  }),
                  l.jsx("button", {
                    type: "button",
                    onClick: redo,
                    disabled: !i.length,
                    children: n("إعادة", "Redo"),
                  }),
                  l.jsx("button", {
                    type: "button",
                    onClick: clear,
                    disabled: !hasOps,
                    children: n("مسح الورقة", "Clear"),
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className: `rx-paper ${u === "text" ? "is-text" : ""} ${u === "eraser" ? "is-erase" : ""}`,
            style: { "--pr": `${W} / ${H}` },
            children: [
              l.jsx("canvas", {
                ref: t,
                role: "img",
                "aria-label": n(
                  "ورقة رسم. ارسم بالماوس أو بإصبعك أو بالقلم.",
                  "Drawing sheet. Draw with a mouse, finger or stylus.",
                ),
                onPointerDown: down,
                onPointerMove: move,
                onPointerUp: up,
                onPointerCancel: up,
                onLostPointerCapture: up,
              }),
              !hasOps &&
                !y &&
                l.jsx("p", {
                  className: "rx-paper-hint",
                  "aria-hidden": "true",
                  children: n(
                    "ابدأ هنا — خط، شخبطة، سهم، أي شي يوصل الفكرة.",
                    "Start here — a line, a scribble, an arrow, anything that gets the idea across.",
                  ),
                }),
              y &&
                l.jsxs("div", {
                  className: "rx-textbox",
                  style: {
                    left: `${(y.x / W) * 100}%`,
                    top: `${(y.y / H) * 100}%`,
                    "--ink-c": A,
                  },
                  children: [
                    l.jsx("textarea", {
                      ref: p,
                      rows: 2,
                      dir: "auto",
                      value: N,
                      placeholder: n("اكتب هنا…", "Type here…"),
                      onChange: (v) => f(v.target.value),
                      onKeyDown: (v) => {
                        v.key === "Escape" && (k(null), f("")),
                          v.key === "Enter" && !v.shiftKey && (v.preventDefault(), commit());
                      },
                      "aria-label": n("نص على الورقة", "Text on the sheet"),
                    }),
                    l.jsxs("div", {
                      children: [
                        l.jsx("button", { type: "button", onClick: commit, children: n("ثبّت", "Place") }),
                        l.jsx("button", {
                          type: "button",
                          onClick: () => (k(null), f("")),
                          children: n("إلغاء", "Cancel"),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          l.jsxs("div", {
            className: "rx-sheet-foot",
            children: [
              l.jsx("p", {
                children:
                  u === "text"
                    ? n("اضغط على الورقة بالمكان اللي تريد تكتب بيه.", "Tap the sheet where you want to write.")
                    : n(
                        "تقدر ترسم بالماوس، بإصبعك، أو بقلم الآيباد. للكتابة بالكيبورد اختار «نص».",
                        "Draw with a mouse, your finger or an iPad pencil. To type, pick “Text”.",
                      ),
              }),
              l.jsxs("div", {
                className: "rx-sheet-btns",
                children: [
                  l.jsx("button", {
                    type: "button",
                    className: "rx-btn rx-btn-ghost",
                    onClick: look,
                    disabled: !hasOps,
                    children: n("معاينة", "Preview"),
                  }),
                  l.jsx("button", {
                    type: "button",
                    className: "rx-btn rx-btn-ghost",
                    onClick: save,
                    disabled: !hasOps,
                    children: n("تنزيل كصورة", "Download image"),
                  }),
                ],
              }),
            ],
          }),
          L &&
            l.jsxs("figure", {
              className: "rx-preview",
              children: [
                l.jsx("img", { src: L, alt: n("معاينة الرسمة", "Drawing preview") }),
                l.jsxs("figcaption", {
                  children: [
                    n("هذي الصورة اللي توصلنا ويا طلبك.", "This is the image that reaches us with your request."),
                    " ",
                    l.jsx("button", { type: "button", onClick: () => x0(""), children: n("إغلاق", "Close") }),
                  ],
                }),
              ],
            }),
        ],
      }),
      l.jsxs("div", {
        className: "rx-draw-send",
        children: [
          l.jsx("h3", {
            className: "rx-draw-send-h",
            children: n("أرسل الفكرة لفريق REX", "Send the idea to the REX team"),
          }),
          l.jsx("p", {
            className: "rx-muted",
            children: n(
              "الرسمة تنرسل كصورة ويا الطلب. اكتب كم سطر يشرحها حتى نفهمها صح.",
              "The drawing is sent as an image with your request. Add a few lines so we read it right.",
            ),
          }),
          l.jsx(rs, {
            prefix: "rxf",
            division: "unsure",
            source: "REX Group — Draw your idea",
            getExtra: extra,
            submitLabel: n("أرسل الفكرة", "Send the idea"),
          }),
        ],
      }),
    ],
  });
}
const v1 = [
  {
    q: {
      ar: "أحتاج فيديو، إعلان، أو تصوير",
      en: "I need a video, an ad or a shoot",
    },
    to: "adol",
  },
  {
    q: {
      ar: "أحتاج خطة تسويق أو إدارة سوشيال",
      en: "I need a marketing plan or social management",
    },
    to: "slash",
  },
  {
    q: {
      ar: "أحتاج موقع أو تجربة رقمية",
      en: "I need a website or a digital experience",
    },
    to: "aperio",
  },
  {
    q: {
      ar: "أحتاج حملة كاملة من الفكرة للإطلاق",
      en: "I need a full campaign from idea to launch",
    },
    to: "rexCampaigns",
  },
];
function g1() {
  const { t: e, lang: n } = R(),
    [t, r] = w.useState(null),
    s = (a, i) => (n === "ar" ? a : i);
  return l.jsxs(l.Fragment, {
    children: [
      l.jsxs("section", {
        className: "ra-hero",
        children: [
          l.jsxs("div", {
            children: [
              l.jsx("p", {
                className: "rx-kicker",
                children: s("من نحن", "About"),
              }),
              l.jsx("h1", { className: "rx-h1", children: e(Ne.definition) }),
            ],
          }),
          l.jsx(Wn, {
            use: "groupAbout",
            className: "ra-mascot",
            eager: !0,
            sizes: "(max-width: 800px) 60vw, 30vw",
          }),
        ],
      }),
      l.jsxs("section", {
        className: "ra-story",
        children: [
          l.jsx("h2", {
            className: "rx-h2",
            children: s("القصة", "The story"),
          }),
          l.jsx("div", {
            className: "ra-story-text",
            children: e(Ne.story).map((a, i) =>
              l.jsx(
                "p",
                { className: i === 3 ? "ra-pull" : "", children: a },
                i,
              ),
            ),
          }),
        ],
      }),
      l.jsx("section", {
        className: "ra-phil",
        "aria-label": s("الفلسفة", "Philosophy"),
        children: Ne.philosophy.map((a, i) =>
          l.jsxs(
            "div",
            {
              className: `ra-phil-${i}`,
              children: [
                l.jsx("h2", {
                  lang: "en",
                  dir: "ltr",
                  children:
                    i === 1
                      ? l.jsxs(l.Fragment, {
                          children: [
                            l.jsx("em", { children: "X" }),
                            "periments Begin",
                          ],
                        })
                      : a.title.en,
                }),
                l.jsx("p", { children: e(a.text) }),
              ],
            },
            i,
          ),
        ),
      }),
      l.jsxs("section", {
        className: "ra-grid2",
        children: [
          l.jsxs("div", {
            children: [
              l.jsx("h2", {
                className: "rx-h2",
                children: s("شخصيتنا", "Personality"),
              }),
              l.jsx("ul", {
                className: "ra-chips",
                children: Ne.personality.map((a, i) =>
                  l.jsx("li", { children: e(a) }, i),
                ),
              }),
            ],
          }),
          l.jsxs("div", {
            children: [
              l.jsx("h2", {
                className: "rx-h2",
                children: s(
                  "شنو الفرق عن الوكالة التقليدية؟",
                  "How is this different from a traditional agency?",
                ),
              }),
              l.jsx("ul", {
                className: "ra-list",
                children: Ne.vsAgency.map((a, i) =>
                  l.jsx("li", { children: e(a) }, i),
                ),
              }),
            ],
          }),
        ],
      }),
      l.jsxs("section", {
        className: "ra-together",
        children: [
          l.jsx("h2", {
            className: "rx-h2",
            children: s(
              "كيف تشتغل الأقسام سوا",
              "How the divisions work together",
            ),
          }),
          l.jsx("p", {
            className: "rx-sec-lead",
            children: s(
              "مثال: براند يطلق منتج جديد — نفس المشروع يمر على أكثر من عالم، والمظلة وحدة.",
              "Example: a brand launching a new product — the same project moves through several worlds, under one umbrella.",
            ),
          }),
          l.jsx("ol", {
            className: "ra-chain",
            children: Ne.howWeWork.map((a) =>
              l.jsxs(
                "li",
                {
                  children: [
                    l.jsx("b", { children: nn[a.world].label }),
                    l.jsx("span", { children: a[n] }),
                  ],
                },
                a.world,
              ),
            ),
          }),
          l.jsxs("p", {
            className: "ra-vision",
            children: [
              l.jsx(Te, { name: "star", className: "ra-star" }),
              " ",
              e(Ne.vision),
            ],
          }),
        ],
      }),
      l.jsxs("section", {
        className: "ra-picker",
        "aria-labelledby": "ra-pick-h",
        children: [
          l.jsx("h2", {
            id: "ra-pick-h",
            className: "rx-h2",
            children: s("شنو تحتاج؟", "What do you need?"),
          }),
          l.jsx("div", {
            className: "ra-pick-opts",
            role: "radiogroup",
            "aria-labelledby": "ra-pick-h",
            children: v1.map((a) =>
              l.jsx(
                "button",
                {
                  type: "button",
                  role: "radio",
                  "aria-checked": t === a.to,
                  className: t === a.to ? "is-on" : "",
                  onClick: () => r(a.to),
                  children: e(a.q),
                },
                a.to,
              ),
            ),
          }),
          l.jsx("div", {
            className: "ra-pick-out",
            "aria-live": "polite",
            children: t
              ? l.jsxs("p", {
                  children: [
                    s("العالم المناسب:", "Your world:"),
                    " ",
                    l.jsxs(D, {
                      to: nn[t].path,
                      className: "rx-btn",
                      children: [
                        nn[t].label,
                        " ",
                        l.jsx("span", {
                          "aria-hidden": "true",
                          children: n === "ar" ? "←" : "→",
                        }),
                      ],
                    }),
                  ],
                })
              : l.jsxs("p", {
                  className: "rx-muted",
                  children: [
                    s(
                      "اختار جواب ونوديك للعالم الصح. إذا مو متأكد، ",
                      "Pick an answer and we’ll point you to the right world. Not sure? ",
                    ),
                    l.jsx(D, {
                      to: "/contact",
                      children: s("احچي ويانا", "talk to us"),
                    }),
                    ".",
                  ],
                }),
          }),
        ],
      }),
    ],
  });
}
const Pa = [
  {
    id: "adol",
    label: {
      ar: "إنتاج — ADOL’S PRODUCTION",
      en: "Production — ADOL’S PRODUCTION",
    },
  },
  { id: "slash", label: { ar: "تسويق — SLASH", en: "Marketing — SLASH" } },
  { id: "aperio", label: { ar: "مواقع — APERIO", en: "Websites — APERIO" } },
  {
    id: "rexCampaigns",
    label: { ar: "حملات — REX Campaigns", en: "Campaigns — REX Campaigns" },
  },
  {
    id: "multi",
    label: {
      ar: "مشروع يحتاج أكثر من قسم",
      en: "A project that needs several divisions",
    },
  },
  {
    id: "unsure",
    label: { ar: "مو متأكد، أحتاج استشارة", en: "Not sure — I need advice" },
  },
];
// Central contact links (phone + email, plus the group Instagram where asked).
const rxTel = `tel:${REX_CONFIG.contact.phoneIntl}`,
  rxMail = `mailto:${REX_CONFIG.contact.email}`;
function RxContact({ className: e = "", insta: n = !1 }) {
  const { lang: t } = R(),
    r = (s, a) => (t === "ar" ? s : a);
  return l.jsxs("ul", {
    className: `rx-cl ${e}`,
    children: [
      l.jsxs("li", {
        children: [
          l.jsx("b", { children: r("هاتف", "Phone") }),
          l.jsx("a", {
            href: rxTel,
            dir: "ltr",
            children: REX_CONFIG.contact.phone,
          }),
        ],
      }),
      l.jsxs("li", {
        children: [
          l.jsx("b", { children: r("إيميل", "Email") }),
          l.jsx("a", {
            href: rxMail,
            dir: "ltr",
            children: REX_CONFIG.contact.email,
          }),
        ],
      }),
      n &&
        l.jsxs("li", {
          children: [
            l.jsx("b", { children: "Instagram" }),
            l.jsx("a", {
              href: REX_CONFIG.contact.instagram,
              target: "_blank",
              rel: "noopener noreferrer",
              dir: "ltr",
              children: "@rexgroupx",
            }),
          ],
        }),
    ],
  });
}
// Media gallery shared by SLASH (images) and ADOL (videos).
// Item: { src, type?: "image" | "video", poster?, w?, h?, title?: {ar,en} }
// Thumbnails load lazily; videos never autoplay and only load on open.
function RxGallery({ items: e, className: n = "", label: t = "" }) {
  const { t: r, lang: s } = R(),
    [a, i] = w.useState(-1),
    o = w.useRef(null),
    u = w.useRef(null),
    c = (h) => (s === "ar" ? h[0] : h[1]),
    A = (h) => {
      i(h);
      const g = o.current;
      g && !g.open && (g.showModal ? g.showModal() : g.setAttribute("open", ""));
    },
    m = () => {
      var h, g;
      (h = u.current) == null || h.pause(),
        (g = o.current) == null || g.close(),
        i(-1);
    };
  w.useEffect(() => {
    if (a < 0) return;
    const h = (g) => {
      g.key === "ArrowRight" && i((y) => (y + (s === "ar" ? -1 : 1) + e.length) % e.length),
        g.key === "ArrowLeft" && i((y) => (y + (s === "ar" ? 1 : -1) + e.length) % e.length);
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [a, e.length, s]);
  const d = a >= 0 ? e[a] : null,
    f = (h) => h.type === "video" || /\.(mp4|webm|mov)$/i.test(h.src);
  return l.jsxs("div", {
    className: `gx ${n}`,
    children: [
      l.jsx("ul", {
        className: "gx-grid",
        "aria-label": t || void 0,
        children: e.map((h, g) => {
          const y = h.title ? r(h.title) : "",
            k = f(h);
          return l.jsx(
            "li",
            {
              className: `gx-item ${k ? "is-video" : ""}`,
              style: h.w && h.h ? { "--ar": `${h.w} / ${h.h}` } : void 0,
              children: l.jsxs("button", {
                type: "button",
                onClick: () => A(g),
                "aria-label": `${k ? c(["شغّل", "Play"]) : c(["افتح", "Open"])}${y ? `: ${y}` : ` ${g + 1}`}`,
                children: [
                  k
                    ? h.poster
                      ? l.jsx("img", { src: h.poster, alt: "", loading: "lazy", decoding: "async" })
                      : l.jsx("span", { className: "gx-plate", "aria-hidden": "true" })
                    : l.jsx("img", {
                        src: h.thumb || h.src,
                        alt: y,
                        loading: "lazy",
                        decoding: "async",
                        width: h.w,
                        height: h.h,
                      }),
                  k && l.jsx("span", { className: "gx-play", "aria-hidden": "true", children: "▶" }),
                  y && l.jsx("span", { className: "gx-cap", children: y }),
                ],
              }),
            },
            h.src,
          );
        }),
      }),
      l.jsx("dialog", {
        ref: o,
        className: "gx-box",
        onClose: () => {
          var h;
          (h = u.current) == null || h.pause(), i(-1);
        },
        onClick: (h) => h.target === o.current && m(),
        "aria-label": t || void 0,
        children:
          d &&
          l.jsxs("div", {
            className: "gx-box-in",
            children: [
              f(d)
                ? l.jsx(
                    "video",
                    {
                      ref: u,
                      src: d.src,
                      poster: d.poster,
                      controls: !0,
                      playsInline: !0,
                      preload: "metadata",
                    },
                    d.src,
                  )
                : l.jsx("img", { src: d.src, alt: d.title ? r(d.title) : "" }, d.src),
              d.title && l.jsx("p", { className: "gx-box-cap", children: r(d.title) }),
              l.jsxs("div", {
                className: "gx-box-ctl",
                children: [
                  e.length > 1 &&
                    l.jsx("button", {
                      type: "button",
                      onClick: () => i((h) => (h - 1 + e.length) % e.length),
                      "aria-label": c(["السابق", "Previous"]),
                      children: s === "ar" ? "→" : "←",
                    }),
                  l.jsx("bdi", { dir: "ltr", children: `${a + 1} / ${e.length}` }),
                  e.length > 1 &&
                    l.jsx("button", {
                      type: "button",
                      onClick: () => i((h) => (h + 1) % e.length),
                      "aria-label": c(["التالي", "Next"]),
                      children: s === "ar" ? "←" : "→",
                    }),
                  l.jsx("button", {
                    type: "button",
                    className: "gx-x",
                    onClick: m,
                    autoFocus: !0,
                    children: c(["إغلاق", "Close"]),
                  }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
}
const rxMsg = {
  name: { ar: "اكتب اسمك.", en: "Please enter your name." },
  phone: {
    ar: "اكتب رقم هاتف صحيح (7 أرقام على الأقل).",
    en: "Please enter a valid phone number (at least 7 digits).",
  },
  email: {
    ar: "اكتب بريد إلكتروني صحيح، مثل name@mail.com.",
    en: "Please enter a valid email, like name@mail.com.",
  },
  division: { ar: "اختار القسم المطلوب.", en: "Please choose a division." },
  details: {
    ar: "احچيلنا عن المشروع بسطر واحد على الأقل.",
    en: "Tell us about the project — at least one line.",
  },
  file: {
    ar: `حجم الملف أكبر من ${REX_CONFIG.form.maxFileMB} ميغابايت.`,
    en: `The file is larger than ${REX_CONFIG.form.maxFileMB} MB.`,
  },
};
// Sends one request to the central REX inbox. Resolves {ok, message}.
// Never reports success unless the delivery service confirms it.
async function rxSend(e, n) {
  const t = REX_CONFIG.form.endpoint;
  if (!t) return { ok: !1, offline: !0 };
  const r = new FormData();
  Object.entries(e).forEach(([s, a]) => a && r.append(s, a)),
    n.forEach((s) => r.append(s.field, s.blob, s.name));
  try {
    const s = await fetch(t, {
        method: "POST",
        body: r,
        headers: { Accept: "application/json" },
      }),
      a = await s.json().catch(() => ({}));
    return s.ok && String(a.success) === "true"
      ? { ok: !0 }
      : { ok: !1, message: a.message || `HTTP ${s.status}` };
  } catch (s) {
    return { ok: !1, message: String((s && s.message) || s) };
  }
}
function rs({
  division: e = "unsure",
  prefix: n = "cf",
  typeOptions: t = [],
  source: S = "",
  getExtra: G = null,
  submitLabel: Q = null,
}) {
  const { t: r, ui: s, lang: a } = R(),
    { path: P0 } = Ir(),
    i = w.useId().replace(/:/g, ""),
    o = (v) => `${n}-${i}-${v}`,
    [u, c] = w.useState({
      name: "",
      company: "",
      phone: "",
      email: "",
      division: e,
      type: "",
      budget: "",
      date: "",
      details: "",
    }),
    [F, Fs] = w.useState(null),
    fr = w.useRef(null),
    [A, m] = w.useState({}),
    [h, g] = w.useState("idle"),
    [y, k] = w.useState(""),
    x2 = (v, x) => (a === "ar" ? v : x),
    N = (v) => (x) => {
      const j = x.target.value;
      c((E) => ({ ...E, [v]: j })),
        A[v] && m((E) => ({ ...E, [v]: !1 }));
    },
    pf = (v) => {
      var x;
      const j = (x = v.target.files) == null ? void 0 : x[0];
      if (!j) return;
      j.size > REX_CONFIG.form.maxFileMB * 1048576
        ? (m((E) => ({ ...E, file: !0 })), (v.target.value = ""))
        : (m((E) => ({ ...E, file: !1 })), Fs(j));
    },
    rf = () => {
      Fs(null), fr.current && (fr.current.value = "");
    },
    dv = () => {
      var v;
      return r((v = Pa.find((x) => x.id === u.division)) == null ? void 0 : v.label);
    },
    f = () =>
      [
        `${s("fName")}: ${u.name}`,
        `${s("fPhone")}: ${u.phone}`,
        `${s("fEmail")}: ${u.email}`,
        u.company && `${s("fCompany")}: ${u.company}`,
        `${s("fDivision")}: ${dv()}`,
        u.type && `${s("fType")}: ${u.type}`,
        u.budget && `${s("fBudget")}: ${u.budget}`,
        u.date && `${s("fDate")}: ${u.date}`,
        `${s("fDetails")}: ${u.details}`,
      ].filter(Boolean).join(`
`),
    vl = () => {
      const v = {};
      return (
        u.name.trim() || (v.name = !0),
        u.phone.replace(/\D/g, "").length < 7 && (v.phone = !0),
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(u.email.trim()) || (v.email = !0),
        u.division || (v.division = !0),
        u.details.trim().length < 3 && (v.details = !0),
        v
      );
    },
    d = async (v) => {
      v.preventDefault();
      const x = vl();
      if ((m(x), Object.keys(x).length)) {
        const E = Object.keys(x)[0],
          M = document.getElementById(o(E));
        M == null || M.focus();
        return;
      }
      g("sending"), k("");
      const j = G ? await G() : { files: [], fields: {} },
        E = [...j.files];
      F && E.push({ field: "attachment", blob: F, name: F.name });
      const M = await rxSend(
        {
          _subject: `REX Group — ${dv()} — ${u.name}`,
          _template: "table",
          _captcha: "false",
          name: u.name,
          phone: u.phone,
          email: u.email,
          company: u.company,
          division: dv(),
          project_type: u.type,
          budget: u.budget,
          timing: u.date,
          details: u.details,
          source: [S, `#${P0.slice(1).replace(/\//g, "-") || "home"}`]
            .filter(Boolean)
            .join(" · "),
          language: a,
          ...j.fields,
        },
        E,
      );
      M.ok ? g("sent") : (g(M.offline ? "offline" : "error"), k(M.message || ""));
    };
  if (h === "sent")
    return l.jsxs("div", {
      className: `${n}-done rx-done is-ok`,
      role: "status",
      children: [
        l.jsx("p", {
          className: "rx-done-h",
          children: x2("وصل طلبك.", "Your request has arrived."),
        }),
        l.jsx("p", {
          children: x2(
            `وصلت رسالتك لفريق REX على ${REX_CONFIG.contact.email}. نرجعلك على الرقم أو الإيميل اللي كتبته.`,
            `Your message reached the REX team at ${REX_CONFIG.contact.email}. We’ll get back to you on the phone or email you gave.`,
          ),
        }),
      ],
    });
  const L = ({ k: v, label: x, type: j = "text", req: E, auto: V, children: we, hint: H }) =>
    l.jsxs("div", {
      className: `${n}-field ${n}-f-${v} rx-field`,
      children: [
        l.jsxs("label", {
          htmlFor: o(v),
          children: [
            x,
            E
              ? l.jsx("span", {
                  className: "rx-req",
                  "aria-hidden": "true",
                  children: " *",
                })
              : l.jsxs("span", {
                  className: "rx-opt",
                  children: [" ", x2("(اختياري)", "(optional)")],
                }),
          ],
        }),
        we ||
          l.jsx("input", {
            id: o(v),
            type: j,
            value: u[v],
            onChange: N(v),
            autoComplete: V,
            dir: j === "tel" || j === "email" ? "ltr" : void 0,
            required: E,
            "aria-required": E ? "true" : void 0,
            "aria-invalid": A[v] ? "true" : void 0,
            "aria-describedby": A[v] ? o(`${v}-e`) : void 0,
          }),
        H && l.jsx("span", { className: "rx-hint", children: H }),
        A[v] &&
          l.jsx("span", {
            id: o(`${v}-e`),
            className: `${n}-err rx-err`,
            role: "alert",
            children: r(rxMsg[v]),
          }),
      ],
    });
  return l.jsxs("form", {
    className: `${n}-form rx-form`,
    onSubmit: d,
    noValidate: !0,
    lang: a,
    "aria-busy": h === "sending",
    children: [
      l.jsx("p", {
        className: "rx-form-legend",
        children: x2(
          "الحقول المعلّمة بـ * إلزامية. المرفق اختياري.",
          "Fields marked * are required. The attachment is optional.",
        ),
      }),
      L({ k: "name", label: s("fName"), req: !0, auto: "name" }),
      L({ k: "phone", label: s("fPhone"), type: "tel", req: !0, auto: "tel" }),
      L({ k: "email", label: s("fEmail"), type: "email", req: !0, auto: "email" }),
      L({ k: "company", label: s("fCompany"), auto: "organization" }),
      L({
        k: "division",
        label: s("fDivision"),
        req: !0,
        children: l.jsx("select", {
          id: o("division"),
          value: u.division,
          onChange: N("division"),
          required: !0,
          "aria-invalid": A.division ? "true" : void 0,
          children: Pa.map((v) =>
            l.jsx("option", { value: v.id, children: r(v.label) }, v.id),
          ),
        }),
      }),
      t.length > 0 &&
        L({
          k: "type",
          label: s("fType"),
          children: l.jsxs("select", {
            id: o("type"),
            value: u.type,
            onChange: N("type"),
            children: [
              l.jsx("option", { value: "", children: "—" }),
              t.map((v, x) =>
                l.jsx("option", { value: r(v), children: r(v) }, x),
              ),
            ],
          }),
        }),
      L({ k: "budget", label: s("fBudget") }),
      L({ k: "date", label: s("fDate") }),
      l.jsxs("div", {
        className: `${n}-field ${n}-f-details rx-field`,
        children: [
          l.jsxs("label", {
            htmlFor: o("details"),
            children: [
              s("fDetails"),
              l.jsx("span", {
                className: "rx-req",
                "aria-hidden": "true",
                children: " *",
              }),
            ],
          }),
          l.jsx("textarea", {
            id: o("details"),
            rows: 5,
            value: u.details,
            onChange: N("details"),
            required: !0,
            "aria-required": "true",
            "aria-invalid": A.details ? "true" : void 0,
            "aria-describedby": A.details ? o("details-e") : void 0,
          }),
          A.details &&
            l.jsx("span", {
              id: o("details-e"),
              className: `${n}-err rx-err`,
              role: "alert",
              children: r(rxMsg.details),
            }),
        ],
      }),
      l.jsxs("div", {
        className: `${n}-field ${n}-f-file rx-field rx-file`,
        children: [
          l.jsxs("label", {
            htmlFor: o("file"),
            children: [
              x2("مرفق", "Attachment"),
              l.jsxs("span", {
                className: "rx-opt",
                children: [" ", x2("(اختياري)", "(optional)")],
              }),
            ],
          }),
          l.jsx("input", {
            id: o("file"),
            ref: fr,
            type: "file",
            onChange: pf,
            className: F ? "sr-only" : "",
            "aria-describedby": o("file-h"),
          }),
          F &&
            l.jsxs("div", {
              className: "rx-file-chip",
              children: [
                l.jsx("span", { dir: "auto", children: F.name }),
                l.jsx("small", {
                  dir: "ltr",
                  children:
                    F.size < 1048576
                      ? `${Math.max(1, Math.round(F.size / 1024))} KB`
                      : `${(F.size / 1048576).toFixed(1)} MB`,
                }),
                l.jsx("button", {
                  type: "button",
                  onClick: rf,
                  children: x2("إزالة", "Remove"),
                }),
              ],
            }),
          l.jsx("span", {
            id: o("file-h"),
            className: "rx-hint",
            children: x2(
              `صورة أو PDF أو أي ملف يساعدنا نفهم الفكرة — حد أقصى ${REX_CONFIG.form.maxFileMB} ميغابايت. تقدر ترسل بدونه.`,
              `An image, PDF or any file that helps us understand the idea — up to ${REX_CONFIG.form.maxFileMB} MB. You can send without one.`,
            ),
          }),
          A.file &&
            l.jsx("span", {
              className: `${n}-err rx-err`,
              role: "alert",
              children: r(rxMsg.file),
            }),
        ],
      }),
      (h === "error" || h === "offline") &&
        l.jsxs("div", {
          className: "rx-done is-err",
          role: "alert",
          children: [
            l.jsx("p", {
              className: "rx-done-h",
              children:
                h === "offline"
                  ? x2(
                      "الإرسال من الموقع مو مفعّل حالياً.",
                      "Sending from the site is not switched on yet.",
                    )
                  : x2("ما قدرنا نتأكد إن الطلب وصل.", "We couldn’t confirm your request arrived."),
            }),
            l.jsxs("p", {
              children: [
                x2(
                  h === "offline"
                    ? "ما انرسل شي. تقدر ترسل نفس الرسالة مباشرة:"
                    : "حتى تضمن وصوله، أرسل نفس الرسالة مباشرة:",
                  h === "offline"
                    ? "Nothing was sent. You can send the same message directly:"
                    : "To be sure it reaches us, send the same message directly:",
                ),
                y && l.jsx("small", { className: "rx-done-why", dir: "auto", children: ` (${y})` }),
              ],
            }),
            l.jsxs("div", {
              className: "rx-done-actions",
              children: [
                l.jsx("a", {
                  className: `${n}-btn`,
                  href: `${rxMail}?subject=${encodeURIComponent(`REX Group — ${dv()}`)}&body=${encodeURIComponent(f())}`,
                  children: x2("أرسل بالإيميل", "Send by email"),
                }),
                l.jsx("a", {
                  className: `${n}-btn ${n}-ghost`,
                  href: rxTel,
                  dir: "ltr",
                  children: REX_CONFIG.contact.phone,
                }),
              ],
            }),
          ],
        }),
      l.jsx("button", {
        type: "submit",
        className: `${n}-btn ${n}-submit`,
        disabled: h === "sending",
        children:
          h === "sending"
            ? x2("جاري الإرسال…", "Sending…")
            : Q || s("fSend"),
      }),
    ],
  });
}
const L1 = {
  adol: "#1A1815",
  slash: "#0A0A0A",
  aperio: "#F7F5F0",
  rexCampaigns: "#D7FF3F",
  multi: "#12110F",
  unsure: "#F3EBDD",
};
function x1() {
  const { t: e, lang: n, ui: t } = R(),
    [r, s] = w.useState(null),
    a = (i, o) => (n === "ar" ? i : o);
  return l.jsxs("section", {
    className: "rc",
    children: [
      l.jsxs("div", {
        className: "rc-head",
        children: [
          l.jsxs("div", {
            children: [
              l.jsx("p", { className: "rx-kicker", children: t("contact") }),
              l.jsx("h1", {
                className: "rx-h1",
                children: a(
                  "شنو العالم اللي تحتاجه؟",
                  "Which world do you need?",
                ),
              }),
              l.jsx("p", {
                className: "rx-sec-lead",
                children: a(
                  "اختار أولاً، وبعدها نطلعلك النموذج المناسب.",
                  "Choose first — then we’ll show you the right form.",
                ),
              }),
            ],
          }),
          l.jsx(Wn, {
            use: "contact",
            className: "rc-mascot",
            eager: !0,
            sizes: "(max-width: 800px) 44vw, 220px",
          }),
        ],
      }),
      l.jsxs("fieldset", {
        className: "rc-choices",
        children: [
          l.jsx("legend", { className: "sr-only", children: t("fDivision") }),
          Pa.map((i) =>
            l.jsxs(
              "label",
              {
                className: `rc-choice ${r === i.id ? "is-on" : ""}`,
                style: { "--sw": L1[i.id] },
                children: [
                  l.jsx("input", {
                    type: "radio",
                    name: "rc-division",
                    value: i.id,
                    checked: r === i.id,
                    onChange: () => s(i.id),
                  }),
                  l.jsx("span", { className: "rc-sw", "aria-hidden": "true" }),
                  l.jsx("span", { children: e(i.label) }),
                ],
              },
              i.id,
            ),
          ),
        ],
      }),
      r &&
        l.jsx("div", {
          className: "rc-form-wrap",
          children: l.jsx(
            rs,
            { division: r, prefix: "rxf", source: "REX Group — contact" },
            r,
          ),
        }),
      l.jsx(RxContact, { className: "rc-direct", insta: !0 }),
    ],
  });
}
function Id() {
  const { ui: e } = R();
  return l.jsxs("section", {
    className: "rx-404",
    children: [
      l.jsxs("div", {
        className: "rx-404-water",
        "aria-hidden": "true",
        children: [l.jsx("i", {}), l.jsx("i", {}), l.jsx("i", {})],
      }),
      l.jsx(Wn, {
        use: "notFound",
        className: "rx-404-mascot",
        eager: !0,
        sizes: "(max-width: 700px) 60vw, 300px",
      }),
      l.jsxs("div", {
        className: "rx-404-copy",
        children: [
          l.jsx("p", { className: "rx-kicker", children: "404" }),
          l.jsx("h1", { className: "rx-h1", children: e("notFoundTitle") }),
          l.jsx("p", { children: e("notFoundText") }),
          l.jsx(D, { to: "/", className: "rx-btn", children: e("goHub") }),
        ],
      }),
    ],
  });
}
const y1 = { home: A1, about: g1, contact: x1, notFound: Id };
function k1({ page: e }) {
  const n = y1[e] || Id;
  return l.jsx(s1, { page: e, children: l.jsx(n, {}) });
}
const S1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k1 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  st = () =>
    typeof matchMedia != "undefined" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches,
  Rd = () =>
    typeof matchMedia != "undefined" && matchMedia("(pointer: fine)").matches;
function ls(e) {
  const n = w.useRef(null);
  return (
    w.useEffect(() => {
      const t = n.current;
      if (!t || st() || typeof IntersectionObserver == "undefined") return;
      const r = [...t.querySelectorAll("[data-rv]")];
      t.classList.add("rv-on");
      const s = new IntersectionObserver(
        (i) =>
          i.forEach((o) => {
            o.isIntersecting &&
              (o.target.classList.add("is-in"), s.unobserve(o.target));
          }),
        { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
      );
      r.forEach((i) => {
        i.classList.remove("is-in"), s.observe(i);
      });
      const a = setTimeout(
        () => r.forEach((i) => i.classList.add("is-in")),
        2500,
      );
      return () => {
        s.disconnect(), clearTimeout(a);
      };
    }, [e]),
    n
  );
}
function Pd(e = "--p") {
  const n = w.useRef(null);
  return (
    w.useEffect(() => {
      const t = n.current;
      if (!t || st()) return;
      let r;
      const s = () => {
          const i = t.getBoundingClientRect(),
            o = window.innerHeight,
            u = Math.min(1, Math.max(0, (o - i.top) / (o + i.height)));
          t.style.setProperty(e, u.toFixed(3));
        },
        a = () => {
          cancelAnimationFrame(r), (r = requestAnimationFrame(s));
        };
      return (
        s(),
        window.addEventListener("scroll", a, { passive: !0 }),
        window.addEventListener("resize", a),
        () => {
          window.removeEventListener("scroll", a),
            window.removeEventListener("resize", a),
            cancelAnimationFrame(r);
        }
      );
    }, [e]),
    n
  );
}
const w1 = [
  { to: "/adol", key: "home" },
  { to: "/adol/services", key: "services" },
  { to: "/adol/projects", key: "projects" },
  { to: "/adol/process", key: "process" },
  { to: "/adol/about", key: "about" },
  { to: "/adol/contact", key: "contact" },
];
function j1({ page: e, children: n }) {
  var k;
  const { ui: t, t: r, lang: s } = R(),
    { path: a } = Ir(),
    [i, o] = w.useState(!1),
    [u, c] = w.useState(!1),
    A = ls(e);
  w.useEffect(() => o(!1), [a]),
    w.useEffect(() => {
      const N = () => c(window.scrollY > 24);
      return (
        N(),
        window.addEventListener("scroll", N, { passive: !0 }),
        () => window.removeEventListener("scroll", N)
      );
    }, [e]),
    w.useEffect(() => {
      if (!i) return;
      const N = (f) => f.key === "Escape" && o(!1);
      return (
        window.addEventListener("keydown", N),
        () => window.removeEventListener("keydown", N)
      );
    }, [i]);
  const [g, y] = r(P.poster);
  return l.jsxs("div", {
    "data-w": "adol",
    className: `ad ${i ? "menu-open" : ""} ${u ? "is-solid" : ""}`,
    ref: A,
    children: [
      l.jsx("a", {
        className: "skip-link",
        href: "#main",
        children: t("skipToContent"),
      }),
      l.jsxs("div", {
        className: "ad-reg",
        "aria-hidden": "true",
        children: [
          l.jsx("i", {}),
          l.jsx("i", {}),
          l.jsx("i", {}),
          l.jsx("i", {}),
        ],
      }),
      l.jsxs("header", {
        className: "ad-top",
        children: [
          l.jsx(D, {
            to: "/adol",
            className: "ad-logo",
            "aria-label": "ADOL’S PRODUCTION",
            children: l.jsx(Wa, { className: "ad-logo-mark", title: "" }),
          }),
          l.jsxs("p", {
            className: "ad-top-tag",
            "aria-hidden": "true",
            children: [
              l.jsx("span", { className: "ad-arrow" }),
              g,
              s === "ar" ? "،" : ",",
              " ",
              y,
            ],
          }),
          l.jsx("nav", {
            id: "ad-menu",
            className: "ad-nav",
            "aria-label": "ADOL’S PRODUCTION",
            children: w1.map((N, f) =>
              l.jsxs(
                D,
                {
                  to: N.to,
                  className: "ad-nav-a",
                  children: [
                    l.jsxs("span", {
                      className: "ad-nav-n",
                      "aria-hidden": "true",
                      children: ["0", f + 1],
                    }),
                    l.jsx("span", {
                      className: "ad-nav-t",
                      children: t(N.key),
                    }),
                  ],
                },
                N.key,
              ),
            ),
          }),
          l.jsxs("div", {
            className: "ad-ctl",
            children: [
              l.jsx(Pr, { className: "ad-ic" }),
              l.jsx(Wr, { className: "ad-ic" }),
              l.jsx(ts, { className: "ad-back" }),
              l.jsxs("button", {
                type: "button",
                className: "ad-burger",
                "aria-expanded": i,
                "aria-controls": "ad-menu",
                onClick: () => o((N) => !N),
                children: [
                  l.jsx("span", {
                    className: "sr-only",
                    children: t(i ? "close" : "menu"),
                  }),
                  l.jsx("i", {}),
                  l.jsx("i", {}),
                ],
              }),
            ],
          }),
        ],
      }),
      l.jsx("main", {
        id: "main",
        className: `ad-main ad-p-${e}`,
        children: n,
      }),
      l.jsxs("footer", {
        className: "ad-foot",
        children: [
          l.jsxs("p", {
            className: "ad-foot-big",
            "aria-hidden": "true",
            children: [
              l.jsx("span", { children: g }),
              l.jsx("span", { className: "is-pink", children: y }),
            ],
          }),
          l.jsxs("div", {
            className: "ad-foot-row",
            children: [
              l.jsx(Wa, {
                className: "ad-foot-mark",
                color: "#ECE9DD",
                title: "",
              }),
              l.jsx("p", { className: "ad-foot-q", children: r(P.quote) }),
              l.jsxs("ul", {
                className: "ad-foot-links",
                children: [
                  P.social.map((N) =>
                    l.jsx(
                      "li",
                      {
                        children: l.jsx("a", {
                          href: N.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: N.label,
                        }),
                      },
                      N.url,
                    ),
                  ),
                  l.jsx("li", {
                    children: l.jsx("a", {
                      href: rxTel,
                      dir: "ltr",
                      children: REX_CONFIG.contact.phone,
                    }),
                  }),
                  l.jsx("li", {
                    children: l.jsx("a", {
                      href: rxMail,
                      dir: "ltr",
                      children: REX_CONFIG.contact.email,
                    }),
                  }),
                  l.jsx("li", {
                    children: l.jsx(D, {
                      to: "/adol/contact",
                      children: r(P.cta.label),
                    }),
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("p", {
            className: "ad-foot-legal",
            children: [
              "© ",
              new Date().getFullYear(),
              " ADOL’S PRODUCTION · ",
              r(P.contact.address),
              " · REX Group",
            ],
          }),
        ],
      }),
    ],
  });
}
const I = (e, n, t) => (e === "ar" ? n : t),
  at = (e) => String(e).padStart(2, "0"),
  Bi = () => {
    const { lang: e } = R();
    return l.jsx("span", {
      "aria-hidden": "true",
      children: e === "ar" ? "←" : "→",
    });
  },
  rn = P.formats.filter((e) => e.poster).map((e) => e.poster);
function Zi() {
  return l.jsxs("span", {
    className: "ad-dots",
    "aria-hidden": "true",
    children: [l.jsx("i", {}), l.jsx("i", {}), l.jsx("i", {}), l.jsx("i", {})],
  });
}
function ss({ children: e, className: n = "" }) {
  return l.jsxs("p", {
    className: `ad-tag ${n}`,
    children: [
      l.jsx("span", { className: "ad-arrow", "aria-hidden": "true" }),
      e,
    ],
  });
}
function Qn({
  src: e,
  video: n = !1,
  className: t = "",
  children: r,
  label: s = "",
}) {
  const [a, i] = w.useState(!!e),
    o = w.useRef(null);
  return (
    w.useEffect(() => {
      n && o.current && st() && o.current.pause();
    }, [n]),
    l.jsxs("div", {
      className: `ad-duo ${a ? "" : "is-plate"} ${t}`,
      "aria-hidden": s ? void 0 : "true",
      role: s ? "img" : void 0,
      "aria-label": s || void 0,
      children: [
        a &&
          (n
            ? l.jsx("video", {
                ref: o,
                src: e,
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
                preload: "metadata",
                onError: () => i(!1),
              })
            : l.jsx("img", {
                src: e,
                alt: "",
                loading: "lazy",
                decoding: "async",
                onError: () => i(!1),
              })),
        l.jsx("span", { className: "ad-screen" }),
        r,
      ],
    })
  );
}
function Pn({ children: e, className: n = "", as: t = "span", drift: r = 1 }) {
  const s = Pd("--p");
  return l.jsx(t, {
    ref: s,
    className: `ad-big ${n}`,
    style: { "--drift": r },
    children: l.jsx("span", {
      className: "ad-big-in",
      "data-text": e,
      children: e,
    }),
  });
}
function nt({ className: e = "", children: n, tag: t }) {
  return l.jsxs("div", {
    className: `ad-sheet ${e}`,
    children: [
      l.jsx(Zi, {}),
      t && l.jsx(ss, { className: "ad-sheet-tag", children: t }),
      n,
    ],
  });
}
function Xn({ n: e, label: n, title: t, children: r }) {
  return l.jsxs("header", {
    className: "ad-shead",
    "data-rv": !0,
    children: [
      l.jsxs(ss, {
        children: [
          l.jsx("b", { lang: "en", dir: "ltr", children: at(e) }),
          " ",
          n,
        ],
      }),
      l.jsx("h2", { className: "ad-h", children: t }),
      r,
    ],
  });
}
function N1({ tone: e = "blue" }) {
  const n = P.marquee.en,
    t = [...n, ...n];
  return l.jsx("div", {
    className: `ad-marquee is-${e}`,
    "aria-hidden": "true",
    lang: "en",
    dir: "ltr",
    children: l.jsx("div", {
      children: [...t, ...t].map((r, s) =>
        l.jsxs("span", { children: [r, l.jsx("b", { children: "●" })] }, s),
      ),
    }),
  });
}
function Vd({ n: e = 1 }) {
  const { t: n, lang: t } = R(),
    r = Pd("--p"),
    s = n(P.manifesto).split(" ");
  return l.jsxs("section", {
    className: "ad-mani",
    ref: r,
    style: { "--n": s.length },
    children: [
      l.jsx(Zi, {}),
      l.jsxs(ss, {
        children: [
          l.jsx("b", { lang: "en", dir: "ltr", children: at(e) }),
          " ",
          I(t, "البيان", "Manifesto"),
        ],
      }),
      l.jsx("p", {
        className: "ad-mani-t",
        children: s.map((a, i) =>
          l.jsxs("span", { style: { "--i": i }, children: [a, " "] }, i),
        ),
      }),
    ],
  });
}
function Di() {
  const { t: e } = R();
  return l.jsx("ul", {
    className: "ad-depts",
    children: P.departments.map((n, t) =>
      l.jsx(
        "li",
        {
          "data-rv": !0,
          style: { "--d": `${(t % 2) * 90}ms` },
          children: l.jsxs(nt, {
            className: `ad-dept is-${t % 2 ? "b" : "a"}`,
            tag: l.jsxs(l.Fragment, {
              children: [
                l.jsx("b", { lang: "en", dir: "ltr", children: at(t + 1) }),
                " ",
                e(n.title),
              ],
            }),
            children: [
              l.jsxs("div", {
                className: "ad-dept-top",
                children: [
                  l.jsx(Qn, {
                    src: rn[t % rn.length],
                    className: "ad-dept-img",
                  }),
                  l.jsx(Pn, {
                    className: "ad-dept-word",
                    drift: t % 2 ? -0.5 : 0.5,
                    children: e(n.word),
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "ad-dept-body",
                children: [
                  l.jsx("p", { children: e(n.text) }),
                  l.jsx("ul", {
                    children: n.items.map((r) =>
                      l.jsx("li", { children: e(r) }, r.en),
                    ),
                  }),
                ],
              }),
            ],
          }),
        },
        n.id,
      ),
    ),
  });
}
function Bd() {
  const { t: e, lang: n } = R(),
    t = w.useRef(null),
    r = (s) => {
      const a = t.current;
      a &&
        a.scrollBy({
          left: s * a.clientWidth * 0.75 * (n === "ar" ? -1 : 1),
          behavior: st() ? "auto" : "smooth",
        });
    };
  return l.jsxs("div", {
    className: "ad-wall",
    children: [
      l.jsxs("div", {
        className: "ad-wall-nav",
        children: [
          l.jsx("button", {
            type: "button",
            className: "ad-round",
            onClick: () => r(-1),
            "aria-label": I(n, "السابق", "Previous"),
            children: l.jsx("span", {
              "aria-hidden": "true",
              children: n === "ar" ? "→" : "←",
            }),
          }),
          l.jsx("button", {
            type: "button",
            className: "ad-round",
            onClick: () => r(1),
            "aria-label": I(n, "التالي", "Next"),
            children: l.jsx("span", {
              "aria-hidden": "true",
              children: n === "ar" ? "←" : "→",
            }),
          }),
        ],
      }),
      l.jsx("ul", {
        className: "ad-wall-track",
        ref: t,
        tabIndex: 0,
        "aria-label": I(n, "شنو نصنع", "What we make"),
        children: P.formats.map((s, a) =>
          l.jsx(
            "li",
            {
              className: "ad-wall-item",
              style: {
                "--r": `${[-2.5, 1.8, -1.2, 2.4, -1.8, 1.2][a % 6]}deg`,
              },
              children: l.jsxs(nt, {
                className: `ad-poster is-${["a", "b", "c"][a % 3]}`,
                tag: l.jsx("b", {
                  lang: "en",
                  dir: "ltr",
                  children: at(a + 1),
                }),
                children: [
                  l.jsx(Qn, {
                    src: s.poster || rn[a % rn.length],
                    className: "ad-poster-img",
                  }),
                  l.jsx("span", {
                    className: "ad-poster-t",
                    children: e(s.title),
                  }),
                ],
              }),
            },
            s.id,
          ),
        ),
      }),
    ],
  });
}
function Zd() {
  const { t: e } = R();
  return l.jsx("ol", {
    className: "ad-bands",
    children: P.phases.map((n, t) =>
      l.jsxs(
        "li",
        {
          className: `ad-band is-${["cream", "blue", "pink"][t]}`,
          children: [
            l.jsx(Pn, {
              className: "ad-band-word",
              drift: t % 2 ? -0.35 : 0.35,
              children: ["PRE", "PROD", "POST"][t],
            }),
            l.jsxs("div", {
              className: "ad-band-body",
              "data-rv": !0,
              children: [
                l.jsxs("p", {
                  className: "ad-band-n",
                  lang: "en",
                  dir: "ltr",
                  children: [at(t + 1), " / 03"],
                }),
                l.jsx("h3", { children: e(n.title) }),
                l.jsx("ul", {
                  children: n.steps.map((r, s) =>
                    l.jsx("li", { children: e(r) }, s),
                  ),
                }),
              ],
            }),
          ],
        },
        n.id,
      ),
    ),
  });
}
function E1() {
  const { t: e } = R();
  return l.jsx("ol", {
    className: "ad-index",
    children: P.services.map((n, t) =>
      l.jsxs(
        "li",
        {
          "data-rv": !0,
          style: { "--d": `${(t % 4) * 50}ms` },
          children: [
            l.jsx("span", {
              className: "ad-index-n",
              lang: "en",
              dir: "ltr",
              children: at(t + 1),
            }),
            l.jsx("h3", { children: e(n.title) }),
            l.jsx("p", { children: e(n.text) }),
          ],
        },
        n.id,
      ),
    ),
  });
}
function Vr() {
  const { t: e, lang: n } = R();
  return l.jsxs("section", {
    className: "ad-cta",
    children: [
      l.jsx(Zi, {}),
      l.jsx(ss, { children: I(n, "طلب مشروع", "Start a project") }),
      l.jsx(Pn, {
        className: "ad-cta-word",
        as: "h2",
        drift: -0.5,
        children: I(n, "يلا نصوّر", "LET’S SHOOT"),
      }),
      l.jsxs("div", {
        className: "ad-cta-row",
        children: [
          l.jsx("p", {
            children: I(
              n,
              "لنصنع شيئاً يستحقّ المشاهدة.",
              "Let’s build something worth watching.",
            ),
          }),
          l.jsxs(D, {
            to: P.cta.to,
            className: "ad-btn is-blue",
            children: [e(P.cta.label), " ", l.jsx(Bi, {})],
          }),
        ],
      }),
    ],
  });
}
// ADOL films gallery — renders only once real films are listed in P.videos.
function AdFilms({ n: e }) {
  const { lang: n } = R();
  return tn(P.videos)
    ? l.jsxs("section", {
        className: "ad-sec ad-films",
        id: "films",
        children: [
          l.jsx(Xn, {
            n: e,
            label: I(n, "الأفلام", "Films"),
            title: I(n, "من شغلنا.", "From our work."),
          }),
          l.jsx(RxGallery, {
            items: P.videos,
            className: "ad-gx",
            label: I(n, "أفلام ADOL’S PRODUCTION", "ADOL’S PRODUCTION films"),
          }),
        ],
      })
    : null;
}
function Br({ n: e, label: n, word: t, title: r, sub: s, img: a }) {
  return l.jsx("section", {
    className: "ad-phero",
    children: l.jsxs(nt, {
      tag: l.jsxs(l.Fragment, {
        children: [
          l.jsx("b", { lang: "en", dir: "ltr", children: at(e) }),
          " ",
          n,
        ],
      }),
      children: [
        l.jsxs("div", {
          className: "ad-phero-top",
          children: [
            l.jsx(Qn, { src: a, className: "ad-phero-img" }),
            l.jsx(Pn, { className: "ad-phero-word", drift: 0.8, children: t }),
          ],
        }),
        l.jsxs("div", {
          className: "ad-phero-body",
          children: [
            l.jsx("h1", { className: "ad-h", children: r }),
            s && l.jsx("p", { className: "ad-lead", children: s }),
          ],
        }),
      ],
    }),
  });
}
function Dd() {
  const { t: e, lang: n } = R(),
    [t, r] = e(P.poster);
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx("section", {
        className: "ad-hero",
        children: l.jsxs(nt, {
          tag: l.jsxs(l.Fragment, {
            children: [
              "ADOL’S PRODUCTION ",
              l.jsx("i", { className: "ad-sep" }),
              " ",
              e(P.meta),
            ],
          }),
          children: [
            l.jsxs("div", {
              className: "ad-hero-top",
              children: [
                l.jsx(Qn, {
                  src: P.showreel,
                  video: !0,
                  className: "ad-hero-reel",
                  label: "Showreel",
                }),
                l.jsxs("a", {
                  href: "#reel",
                  className: "ad-stamp",
                  "aria-label": "Showreel",
                  children: [
                    l.jsxs("svg", {
                      viewBox: "0 0 120 120",
                      "aria-hidden": "true",
                      children: [
                        l.jsx("defs", {
                          children: l.jsx("path", {
                            id: "adst",
                            d: "M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0",
                          }),
                        }),
                        l.jsx("text", {
                          children: l.jsx("textPath", {
                            href: "#adst",
                            children: "SHOWREEL • SHOWREEL • SHOWREEL •",
                          }),
                        }),
                      ],
                    }),
                    l.jsx("span", { "aria-hidden": "true", children: "▶" }),
                  ],
                }),
                l.jsx(Pn, {
                  className: "ad-hero-word",
                  as: "p",
                  drift: 1.2,
                  children: t,
                }),
              ],
            }),
            l.jsxs("div", {
              className: "ad-hero-bottom",
              children: [
                l.jsxs("div", {
                  className: "ad-hero-title",
                  children: [
                    l.jsxs("h1", {
                      className: "ad-h1",
                      lang: "en",
                      dir: "ltr",
                      children: [
                        l.jsx("span", { children: "ADOL’S" }),
                        " ",
                        l.jsx("span", { children: "PRODUCTION" }),
                      ],
                    }),
                    l.jsxs("p", {
                      className: "ad-hero-not",
                      children: [r, "."],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "ad-hero-side",
                  children: [
                    l.jsx(Qn, { src: rn[1], className: "ad-hero-strip" }),
                    l.jsx("p", {
                      className: "ad-lead",
                      children: e(P.definition),
                    }),
                    l.jsxs("div", {
                      className: "ad-hero-cta",
                      children: [
                        l.jsxs(D, {
                          to: P.cta.to,
                          className: "ad-btn",
                          children: [e(P.cta.label), " ", l.jsx(Bi, {})],
                        }),
                        l.jsx(D, {
                          to: "/adol/services",
                          className: "ad-btn is-ghost",
                          children: I(n, "الخدمات", "Services"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      l.jsx(N1, {}),
      l.jsx(Vd, {}),
      l.jsxs("section", {
        className: "ad-sec",
        children: [
          l.jsx(Xn, {
            n: 2,
            label: I(n, "الأقسام", "Departments"),
            title: I(n, "أربعة فرق. فلم واحد.", "Four crews. One film."),
          }),
          l.jsx(Di, {}),
        ],
      }),
      l.jsxs("section", {
        className: "ad-sec ad-sec-wall",
        children: [
          l.jsx(Xn, {
            n: 3,
            label: I(n, "شنو نصنع", "What we make"),
            title: I(n, "من الإعلان إلى الريل.", "From commercials to reels."),
          }),
          l.jsx(Bd, {}),
        ],
      }),
      l.jsx(AdFilms, { n: 4 }),
      l.jsxs("section", {
        className: "ad-sec ad-sec-full",
        id: "reel",
        children: [
          l.jsx(Xn, {
            n: 4,
            label: "Showreel",
            title: I(n, "كلّ كادرٍ، بقصد.", "Every frame, on purpose."),
          }),
          l.jsxs(nt, {
            className: "ad-reelsheet",
            children: [
              l.jsx(Qn, {
                src: P.showreel,
                video: !0,
                className: "ad-reel",
                label: "Showreel",
              }),
              l.jsx(Pn, {
                className: "ad-reel-word",
                drift: -1,
                children: "SHOWREEL",
              }),
            ],
          }),
        ],
      }),
      l.jsxs("section", {
        className: "ad-sec ad-sec-full",
        children: [
          l.jsx(Xn, {
            n: 5,
            label: I(n, "طريقة العمل", "Process"),
            title: I(
              n,
              "من الفكرة إلى النسخة النهائية.",
              "From first idea to final cut.",
            ),
          }),
          l.jsx(Zd, {}),
        ],
      }),
      l.jsx(Vr, {}),
    ],
  });
}
function z1() {
  const { t: e, lang: n } = R();
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(Br, {
        n: 2,
        label: I(n, "الخدمات", "Services"),
        word: I(n, "خدمات", "SERVICES"),
        img: rn[0],
        title: I(
          n,
          "كل مراحل الإنتاج، تحت سقف واحد.",
          "Every stage of production, under one roof.",
        ),
        sub: e(P.definition),
      }),
      l.jsx("section", { className: "ad-sec", children: l.jsx(E1, {}) }),
      l.jsxs("section", {
        className: "ad-sec",
        children: [
          l.jsx(Xn, {
            n: 3,
            label: I(n, "الأقسام", "Departments"),
            title: I(n, "أربعة فرق. فلم واحد.", "Four crews. One film."),
          }),
          l.jsx(Di, {}),
        ],
      }),
      l.jsx(Vr, {}),
    ],
  });
}
function C1() {
  const { lang: e, ui: n } = R();
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(Br, {
        n: 3,
        label: I(e, "الأعمال", "Work"),
        word: I(e, "أعمال", "WORK"),
        img: rn[2],
        title: I(e, "كلّ كادرٍ، بقصد.", "Every frame, on purpose."),
      }),
      l.jsx(AdFilms, { n: 3 }),
      l.jsx("section", {
        className: "ad-sec ad-sec-full",
        children: l.jsxs(nt, {
          className: "ad-reelsheet",
          children: [
            l.jsx(Qn, {
              src: P.showreel,
              video: !0,
              className: "ad-reel",
              label: "Showreel",
            }),
            l.jsx(Pn, {
              className: "ad-reel-word",
              drift: -1,
              children: "SHOWREEL",
            }),
          ],
        }),
      }),
      l.jsxs("section", {
        className: "ad-sec ad-sec-wall",
        children: [
          l.jsx(Xn, {
            n: 4,
            label: I(e, "شنو نصنع", "What we make"),
            title: I(e, "من الإعلان إلى الريل.", "From commercials to reels."),
          }),
          l.jsx(Bd, {}),
        ],
      }),
      l.jsx(Vr, {}),
    ],
  });
}
function I1() {
  const { lang: e } = R();
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(Br, {
        n: 4,
        label: I(e, "طريقة العمل", "Process"),
        word: I(e, "مراحل", "PROCESS"),
        img: rn[1],
        title: I(
          e,
          "ثلاث مراحل، فريق لكل مرحلة.",
          "Three stages, a crew for each.",
        ),
      }),
      l.jsx("section", {
        className: "ad-sec ad-sec-full",
        children: l.jsx(Zd, {}),
      }),
      l.jsx(Vr, {}),
    ],
  });
}
function R1() {
  const { t: e, lang: n, ui: t } = R(),
    [r, s] = e(P.poster);
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(Br, {
        n: 5,
        label: I(n, "عن الشركة", "About"),
        word: r,
        img: rn[0],
        title: n === "ar" ? `${r}، ${s}.` : `${r}, ${s}.`,
        sub: e(P.definition),
      }),
      l.jsx(Vd, { n: 6 }),
      l.jsx("section", {
        className: "ad-sec",
        children: l.jsxs("div", {
          className: "ad-about",
          children: [
            l.jsxs("blockquote", {
              className: "ad-quote",
              "data-rv": !0,
              children: [
                l.jsx(Pn, {
                  as: "p",
                  className: "ad-quote-t",
                  drift: 0.5,
                  children: e(P.quote),
                }),
                l.jsx("cite", {
                  lang: "en",
                  dir: "ltr",
                  children: "— ADOL’S PRODUCTION",
                }),
              ],
            }),
            l.jsxs("dl", {
              className: "ad-facts",
              "data-rv": !0,
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("dt", { children: I(n, "النوع", "Type") }),
                    l.jsx("dd", { children: e(P.kind) }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("dt", { children: I(n, "الأقسام", "Crews") }),
                    l.jsx("dd", {
                      children: P.departments
                        .map((a) => e(a.title))
                        .join(" · "),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("dt", { children: I(n, "المكان", "Based") }),
                    l.jsx("dd", { children: e(P.contact.address) }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("dt", { children: I(n, "منذ", "Since") }),
                    l.jsx("dd", { lang: "en", dir: "ltr", children: "2020" }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("dt", { children: I(n, "الفريق", "Team") }),
                    l.jsx("dd", {
                      children: tn(P.team)
                        ? P.team.map((a) => a.name).join(" · ")
                        : t("pending"),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("dt", { children: I(n, "ضمن", "Part of") }),
                    l.jsxs("dd", {
                      children: ["REX Group — ", e(P.discipline)],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      l.jsxs("section", {
        className: "ad-sec",
        children: [
          l.jsx(Xn, {
            n: 7,
            label: I(n, "الأقسام", "Departments"),
            title: I(n, "أربعة فرق. فلم واحد.", "Four crews. One film."),
          }),
          l.jsx(Di, {}),
        ],
      }),
      l.jsx(Vr, {}),
    ],
  });
}
function P1() {
  const { t: e, lang: n } = R();
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(Br, {
        n: 6,
        label: I(n, "طلب خدمة", "Request"),
        word: I(n, "يلا", "CALL"),
        img: rn[2],
        title: I(n, "لنبدأ مشروعك.", "Let’s start your project."),
      }),
      l.jsx("section", {
        className: "ad-sec",
        children: l.jsxs("div", {
          className: "ad-contact",
          children: [
            l.jsxs("div", {
              className: "ad-contact-list",
              "data-rv": !0,
              children: [
                l.jsx(RxContact, { className: "ad-cl" }),
                l.jsx("ul", {
                  className: "ad-cl-extra",
                  children: P.social.map((r) =>
                    l.jsxs(
                      "li",
                      {
                        children: [
                          l.jsx("b", { children: r.label }),
                          l.jsx("a", {
                            href: r.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            dir: "ltr",
                            children: r.handle,
                          }),
                        ],
                      },
                      r.url,
                    ),
                  ),
                }),
                l.jsxs("p", {
                  className: "ad-cl-based",
                  children: [
                    l.jsx("b", { children: I(n, "المكان", "Based") }),
                    " ",
                    e(P.contact.address),
                  ],
                }),
              ],
            }),
            l.jsx(nt, {
              className: "ad-order",
              tag: I(n, "استمارة طلب", "Order sheet"),
              children: l.jsx(rs, {
                division: "adol",
                prefix: "ad",
                source: "ADOL’S PRODUCTION — contact",
                typeOptions: P.request.types,
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const V1 = {
  home: Dd,
  services: z1,
  projects: C1,
  process: I1,
  about: R1,
  contact: P1,
};
function B1({ page: e }) {
  const n = V1[e] || Dd;
  return l.jsx(j1, { page: e, children: l.jsx(n, {}) });
}
const Z1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: B1 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  D1 = [
    { to: "/slash", key: "home" },
    { to: "/slash/strategy", key: "strategy" },
    { to: "/slash/services", key: "services" },
    { to: "/slash/projects", key: "works" },
    { to: "/slash/about", key: "about" },
    { to: "/slash/contact", key: "contact" },
  ];
function M1({ page: e, children: n }) {
  const { ui: t } = R(),
    { path: r } = Ir(),
    [s, a] = w.useState(!1),
    i = ls(e);
  return (
    w.useEffect(() => a(!1), [r]),
    w.useEffect(() => {
      if (!s) return;
      const o = (u) => u.key === "Escape" && a(!1);
      return (
        window.addEventListener("keydown", o),
        () => window.removeEventListener("keydown", o)
      );
    }, [s]),
    l.jsxs("div", {
      "data-w": "slash",
      className: `sl ${s ? "menu-open" : ""}`,
      ref: i,
      children: [
        l.jsx("a", {
          className: "skip-link",
          href: "#main",
          children: t("skipToContent"),
        }),
        l.jsxs("header", {
          className: "sl-top",
          children: [
            l.jsx(D, {
              to: "/slash",
              className: "sl-logo-link",
              "aria-label": "Slash",
              children: l.jsx(Ra, { className: "sl-logo", ink: "#FFFFFF" }),
            }),
            l.jsx("nav", {
              id: "sl-menu",
              className: "sl-nav",
              "aria-label": "SLASH",
              children: D1.filter(
                (o) => o.key !== "works" || tn(U.works) || tn(U.locations),
              ).map((o) =>
                l.jsx(
                  D,
                  { to: o.to, className: "sl-nav-a", children: t(o.key) },
                  o.key,
                ),
              ),
            }),
            l.jsxs("div", {
              className: "sl-ctl",
              children: [
                l.jsx(Pr, { className: "sl-ic" }),
                l.jsx(Wr, { className: "sl-ic" }),
                l.jsx(ts, { className: "sl-back" }),
                l.jsxs("button", {
                  type: "button",
                  className: "sl-burger",
                  "aria-expanded": s,
                  "aria-controls": "sl-menu",
                  onClick: () => a((o) => !o),
                  children: [
                    l.jsx("span", {
                      className: "sr-only",
                      children: t(s ? "close" : "menu"),
                    }),
                    l.jsx("i", {}),
                    l.jsx("i", {}),
                  ],
                }),
              ],
            }),
          ],
        }),
        l.jsx("main", {
          id: "main",
          className: `sl-main sl-p-${e}`,
          children: n,
        }),
        l.jsxs("footer", {
          className: "sl-foot",
          children: [
            l.jsx(Ra, { className: "sl-foot-logo", ink: "#FFFFFF" }),
            l.jsx("p", {
              className: "sl-foot-tag",
              lang: "en",
              dir: "ltr",
              children: "THE WAY TO ANOTHER WORLD",
            }),
            l.jsx("p", {
              className: "sl-foot-meta",
              children: "Slash viral · REX Group",
            }),
            l.jsx(RxContact, { className: "foot-cl" }),
          ],
        }),
      ],
    })
  );
}
const X = (e, n, t) => (e === "ar" ? n : t),
  as = (e) => String(e + 1).padStart(2, "0");
function Le({
  n: e,
  label: n,
  tone: t = "dark",
  className: r = "",
  children: s,
}) {
  return l.jsxs("section", {
    className: `sl-sec is-${t} ${r}`,
    children: [
      l.jsxs("div", {
        className: "sl-margin",
        "aria-hidden": "true",
        children: [
          l.jsx("span", {
            className: "sl-margin-n",
            lang: "en",
            dir: "ltr",
            children: e,
          }),
          l.jsx("span", {
            className: "sl-margin-l",
            lang: "en",
            dir: "ltr",
            children: n,
          }),
        ],
      }),
      l.jsx("div", { className: "sl-content", children: s }),
    ],
  });
}
function Me({ eyebrow: e, children: n, as: t = "h2" }) {
  return l.jsxs("header", {
    className: "sl-head",
    "data-rv": !0,
    children: [
      l.jsx("p", {
        className: "sl-eyebrow",
        lang: "en",
        dir: "ltr",
        children: e,
      }),
      l.jsx(t, { className: "sl-h", children: n }),
    ],
  });
}
function Md() {
  const { t: e } = R();
  return l.jsx("ol", {
    className: "sl-steps",
    children: U.phases.map((n, t) =>
      l.jsxs(
        "li",
        {
          "data-rv": !0,
          style: { "--d": `${t * 70}ms` },
          children: [
            l.jsx("span", {
              className: "sl-step-n",
              lang: "en",
              dir: "ltr",
              children: as(t),
            }),
            l.jsx("h3", { lang: "en", dir: "ltr", children: n.title.en }),
            l.jsx("p", { children: e(n.text) }),
          ],
        },
        n.id,
      ),
    ),
  });
}
function Od({ items: e }) {
  const { t: n } = R();
  return l.jsx("ol", {
    className: "sl-svc",
    children: e.map((t, r) =>
      l.jsxs(
        "li",
        {
          "data-rv": !0,
          style: { "--d": `${(r % 2) * 60}ms` },
          children: [
            l.jsx("span", {
              className: "sl-svc-n",
              lang: "en",
              dir: "ltr",
              children: as(r),
            }),
            l.jsxs("div", {
              children: [
                l.jsx("h3", { children: n(t.title) }),
                l.jsx("p", { children: n(t.text) }),
              ],
            }),
          ],
        },
        t.id,
      ),
    ),
  });
}
function Kd() {
  const { t: e, lang: n } = R();
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(Le, {
        n: "00",
        label: "Slash viral",
        className: "sl-hero",
        children: l.jsxs("div", {
          className: "sl-hero-grid",
          children: [
            l.jsxs("div", {
              className: "sl-hero-text",
              children: [
                l.jsxs("p", {
                  className: "sl-eyebrow",
                  children: [
                    e(U.studio),
                    " · ",
                    X(n, "جزء من REX Group", "Part of REX Group"),
                  ],
                }),
                l.jsx("h1", { className: "sl-hero-h", children: e(U.intro) }),
                l.jsx("p", { className: "sl-lead", children: e(U.definition) }),
                l.jsxs("div", {
                  className: "sl-actions",
                  children: [
                    l.jsx(D, {
                      to: U.cta.to,
                      className: "sl-btn",
                      children: e(U.cta.label),
                    }),
                    l.jsx(D, {
                      to: "/slash/services",
                      className: "sl-link",
                      children: X(n, "الخدمات", "Services"),
                    }),
                  ],
                }),
              ],
            }),
            l.jsx("div", {
              className: "sl-hero-mark",
              "aria-hidden": "true",
              children: l.jsx(Vi, { title: "" }),
            }),
          ],
        }),
      }),
      l.jsx(Le, {
        n: "01",
        label: "introduction",
        tone: "light",
        children: l.jsxs("div", {
          className: "sl-two",
          children: [
            l.jsx(Me, {
              eyebrow: "ABOUT",
              children: X(
                n,
                "إعلان يبدو كمحتوى.",
                "Ads that feel like content.",
              ),
            }),
            l.jsxs("div", {
              "data-rv": !0,
              children: [
                l.jsx("p", { className: "sl-body-l", children: e(U.about) }),
                l.jsx("ul", {
                  className: "sl-aud",
                  "aria-label": X(n, "جمهورنا", "Who we serve"),
                  children: U.audience.map((t) =>
                    l.jsxs(
                      "li",
                      {
                        children: [
                          l.jsx("span", {
                            className: "sl-dot",
                            "aria-hidden": "true",
                          }),
                          e(t),
                        ],
                      },
                      t.en,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      l.jsxs(Le, {
        n: "02",
        label: "target system",
        children: [
          l.jsx(Me, {
            eyebrow: "SLASH TARGET SYSTEM",
            children: X(n, "خمس مراحل. هدف واحد.", "Five stages. One target."),
          }),
          l.jsx(Md, {}),
          l.jsx(D, {
            to: "/slash/strategy",
            className: "sl-link",
            children: X(n, "الاستراتيجية بالتفصيل", "The strategy in detail"),
          }),
        ],
      }),
      l.jsxs(Le, {
        n: "03",
        label: "services",
        tone: "light",
        children: [
          l.jsx(Me, {
            eyebrow: "SERVICES",
            children: X(n, "شنو نسوي", "What we do"),
          }),
          l.jsx(Od, { items: U.services.slice(0, 6) }),
          l.jsx(D, {
            to: "/slash/services",
            className: "sl-link",
            children: X(n, "كل الخدمات", "All services"),
          }),
        ],
      }),
      l.jsx(Le, {
        n: "04",
        label: "contact",
        tone: "gold",
        className: "sl-cta",
        children: l.jsxs("div", {
          className: "sl-cta-in",
          "data-rv": !0,
          children: [
            l.jsx("p", {
              className: "sl-h",
              children: X(
                n,
                "قبل ما نحچي ويا جمهورك، نفهمه.",
                "Before we talk to your audience, we understand it.",
              ),
            }),
            l.jsx(D, {
              to: U.cta.to,
              className: "sl-btn is-ink",
              children: e(U.cta.label),
            }),
          ],
        }),
      }),
    ],
  });
}
function O1() {
  const { lang: e } = R();
  return l.jsxs(l.Fragment, {
    children: [
      l.jsxs(Le, {
        n: "01",
        label: "strategy",
        className: "sl-first",
        children: [
          l.jsx(Me, {
            as: "h1",
            eyebrow: "STRATEGY",
            children: X(e, "نظام الاستهداف", "The Target System"),
          }),
          l.jsx(Md, {}),
        ],
      }),
      l.jsxs(Le, {
        n: "02",
        label: "flow",
        tone: "light",
        children: [
          l.jsx(Me, {
            eyebrow: "CONTENT FLOW",
            children: X(e, "مسار المحتوى", "Content flow"),
          }),
          l.jsx("ol", {
            className: "sl-flow",
            children: [
              ["استراتيجية", "Strategy"],
              ["محتوى", "Content"],
              ["نشر", "Publishing"],
              ["انتشار", "Reach"],
              ["قياس", "Measure"],
            ].map(([n, t], r) =>
              l.jsxs(
                "li",
                {
                  "data-rv": !0,
                  style: { "--d": `${r * 60}ms` },
                  children: [
                    l.jsx("span", { lang: "en", dir: "ltr", children: as(r) }),
                    X(e, n, t),
                  ],
                },
                t,
              ),
            ),
          }),
          l.jsx("p", {
            className: "sl-note",
            children: X(
              e,
              "ما نعرض أرقام أداء إلا إذا كانت حقيقية وموثقة من مشاريع فعلية.",
              "We only show performance figures when they are real and documented from actual projects.",
            ),
          }),
        ],
      }),
    ],
  });
}
function K1() {
  const { lang: e } = R();
  return l.jsxs(Le, {
    n: "01",
    label: "services",
    className: "sl-first",
    children: [
      l.jsx(Me, {
        as: "h1",
        eyebrow: "SERVICES",
        children: X(e, "شنو نسوي", "What we do"),
      }),
      l.jsx(Od, { items: U.services }),
    ],
  });
}
function H1() {
  const { lang: e, ui: n } = R(),
    t = [
      {
        id: "works",
        title: X(e, "أعمال سلاش", "Slash work"),
        items: U.works,
      },
      {
        id: "locations",
        title: X(e, "اللوكيشنات والأماكن", "Locations & places"),
        sub: X(
          e,
          "الأماكن اللي اشتغلنا بيها وصوّرنا محتواها.",
          "Places we have worked in and shot content for.",
        ),
        items: U.locations,
      },
    ].filter((i) => tn(i.items)),
    [r, s] = w.useState(0),
    a = t[Math.min(r, t.length - 1)];
  return l.jsxs(Le, {
    n: "01",
    label: "work",
    className: "sl-first",
    children: [
      l.jsx(Me, { as: "h1", eyebrow: "WORK", children: n("works") }),
      t.length > 1 &&
        l.jsx("div", {
          className: "sl-tabs",
          role: "tablist",
          "aria-label": n("works"),
          children: t.map((i, o) =>
            l.jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": o === r,
                className: o === r ? "is-on" : "",
                onClick: () => s(o),
                children: [
                  i.title,
                  " ",
                  l.jsx("small", { dir: "ltr", children: i.items.length }),
                ],
              },
              i.id,
            ),
          ),
        }),
      a
        ? l.jsxs("div", {
            className: "sl-gallery",
            role: t.length > 1 ? "tabpanel" : void 0,
            children: [
              t.length === 1 &&
                l.jsx("h2", { className: "sl-gal-h", children: a.title }),
              a.sub && l.jsx("p", { className: "sl-note", children: a.sub }),
              l.jsx(
                RxGallery,
                { items: a.items, className: "sl-gx", label: a.title },
                a.id,
              ),
            ],
          })
        : l.jsxs("div", {
            className: "sl-empty",
            "data-rv": !0,
            children: [
              l.jsx(Vi, { className: "sl-empty-mark", title: "" }),
              l.jsxs("p", {
                children: [
                  X(
                    e,
                    "نرتّب معرض أعمال سلاش واللوكيشنات. إذا تحب تشوف نماذج من شغلنا، ",
                    "We’re arranging the Slash work and locations gallery. To see samples of our work, ",
                  ),
                  l.jsx(D, {
                    to: "/slash/contact",
                    children: X(e, "احچي ويانا", "talk to us"),
                  }),
                  ".",
                ],
              }),
            ],
          }),
    ],
  });
}
function U1() {
  const { t: e, lang: n, ui: t } = R();
  return l.jsxs(l.Fragment, {
    children: [
      l.jsxs(Le, {
        n: "01",
        label: "introduction",
        className: "sl-first",
        children: [
          l.jsx(Me, { as: "h1", eyebrow: U.studio.en, children: e(U.studio) }),
          l.jsx("p", {
            className: "sl-hero-h sl-quote",
            "data-rv": !0,
            children: e(U.intro),
          }),
        ],
      }),
      l.jsx(Le, {
        n: "02",
        label: "about",
        tone: "light",
        children: l.jsxs("div", {
          className: "sl-two",
          children: [
            l.jsx(Me, {
              eyebrow: "ABOUT",
              children: X(n, "من نحن", "Who we are"),
            }),
            l.jsx("p", {
              className: "sl-body-l",
              "data-rv": !0,
              children: e(U.about),
            }),
          ],
        }),
      }),
      l.jsx(Le, {
        n: "03",
        label: "vision",
        children: l.jsxs("div", {
          className: "sl-two",
          children: [
            l.jsx(Me, {
              eyebrow: "GOAL & VISION",
              children: X(n, "الهدف والرؤية", "Goal & vision"),
            }),
            l.jsxs("div", {
              "data-rv": !0,
              children: [
                l.jsx("p", { className: "sl-body-l", children: e(U.goal) }),
                l.jsxs("dl", {
                  className: "sl-facts",
                  children: [
                    l.jsxs("div", {
                      children: [
                        l.jsx("dt", { children: X(n, "القسم", "Division") }),
                        l.jsxs("dd", {
                          children: [e(U.discipline), " — REX Group"],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      children: [
                        l.jsx("dt", { children: X(n, "الفريق", "Team") }),
                        l.jsx("dd", {
                          children: tn(U.team)
                            ? U.team.map((r) => r.name).join(" / ")
                            : t("pending"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function J1() {
  const { lang: e } = R();
  return l.jsxs(Le, {
    n: "01",
    label: "contact",
    className: "sl-first",
    children: [
      l.jsx(Me, {
        as: "h1",
        eyebrow: "CONTACT",
        children: X(e, "خلّي نخطط سوا", "Let’s plan it"),
      }),
      l.jsxs("div", {
        className: "sl-contact",
        children: [
          l.jsxs("div", {
            className: "sl-contact-list",
            "data-rv": !0,
            children: [
              l.jsx("p", {
                className: "sl-note",
                children: X(
                  e,
                  "طلبات سلاش توصل لفريق REX Group — رقم واحد وإيميل واحد لكل العوالم.",
                  "Slash requests reach the REX Group team — one phone and one email for every world.",
                ),
              }),
              l.jsx(RxContact, { className: "sl-cl" }),
            ],
          }),
          l.jsx(rs, {
            division: "slash",
            prefix: "slf",
            source: "SLASH — contact",
            typeOptions: U.services.map((t) => t.title),
          }),
        ],
      }),
    ],
  });
}
const X1 = {
  home: Kd,
  services: K1,
  strategy: O1,
  projects: H1,
  about: U1,
  contact: J1,
};
function T1({ page: e }) {
  const n = X1[e] || Kd;
  return l.jsx(M1, { page: e, children: l.jsx(n, {}) });
}
const F1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: T1 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  su = [
    { to: "/aperio", key: "home", slug: "" },
    { to: "/aperio/services", key: "services", slug: "services" },
    { to: "/aperio/projects", key: "projects", slug: "projects" },
    { to: "/aperio/process", key: "process", slug: "process" },
    { to: "/aperio/about", key: "about", slug: "about" },
    { to: "/aperio/contact", key: "contact", slug: "contact" },
  ];
function Y1({ page: e, children: n }) {
  var c, A;
  const { ui: t, lang: r } = R(),
    o = ls(e),
    u =
      (A = (c = su.find((m) => m.key === e)) == null ? void 0 : c.slug) != null
        ? A
        : "";
  return l.jsxs("div", {
    "data-w": "aperio",
    className: "ap",
    ref: o,
    children: [
      l.jsx("a", {
        className: "skip-link",
        href: "#main",
        children: t("skipToContent"),
      }),
      l.jsxs("header", {
        className: "ap-bar",
        children: [
          l.jsxs("div", {
            className: "ap-bar-row",
            children: [
              l.jsxs(D, {
                to: "/aperio",
                className: "ap-logo",
                "aria-label": "APERIO",
                children: [
                  l.jsx(Dt, {
                    className: "ap-logo-mark",
                    stroke: "currentColor",
                  }),
                  l.jsx("span", { children: "APERIO" }),
                ],
              }),
              l.jsxs("div", {
                className: "ap-address",
                "aria-hidden": "true",
                dir: "ltr",
                children: [
                  l.jsx("span", { className: "ap-lock", children: "●" }),
                  " aperio",
                  l.jsxs("span", { children: ["/", u] }),
                ],
              }),
              l.jsxs("div", {
                className: "ap-bar-ctl",
                children: [
                  l.jsx(Pr, { className: "ap-ic" }),
                  l.jsx(Wr, { className: "ap-ic" }),
                ],
              }),
            ],
          }),
          l.jsx("nav", {
            className: "ap-tabs",
            "aria-label": "APERIO",
            children: su.map((m) =>
              l.jsx(
                D,
                { to: m.to, className: "ap-tab", children: t(m.key) },
                m.key,
              ),
            ),
          }),
        ],
      }),
      l.jsx("main", {
        id: "main",
        className: `ap-main ap-p-${e}`,
        children: n,
      }),
      l.jsxs("footer", {
        className: "ap-foot",
        children: [
          l.jsx(ts, { className: "ap-back" }),
          l.jsx("p", {
            dir: "ltr",
            children: "aperio — to open, to uncover, to reveal.",
          }),
          l.jsx(RxContact, { className: "foot-cl" }),
        ],
      }),
    ],
  });
}
const au = 1440,
  qd = !1,
  Q1 = (e) =>
    e.relay && qd ? `/api/frame?u=${encodeURIComponent(e.url)}` : e.url,
  G1 = (e, n, t) =>
    `https://s0.wp.com/mshots/v1/${encodeURIComponent(e.url)}?w=${n}&h=${t}`,
  ot = { w: 390, h: 844 };
function b1({ projects: e }) {
  const { t: n, lang: t } = R(),
    r = (x, j) => (t === "ar" ? x : j),
    s = w.useRef(null),
    [a, i] = w.useState(0),
    [o, u] = w.useState({ w: 1e3, h: 640 }),
    c = o.w < 720,
    [A, m] = w.useState(null),
    [h, g] = w.useState(!0),
    [y, k] = w.useState(0),
    N = e[a],
    f = A || (c ? "mobile" : N.prefer || "desktop");
  w.useEffect(() => {
    const x = s.current;
    if (!x) return;
    const j = () => {
      const M = x.clientWidth,
        V = Math.round(Math.max(460, Math.min(window.innerHeight * 0.74, 860)));
      u({ w: M, h: V });
    };
    j();
    const E = new ResizeObserver(j);
    return (
      E.observe(x),
      window.addEventListener("resize", j),
      () => {
        E.disconnect(), window.removeEventListener("resize", j);
      }
    );
  }, []),
    w.useEffect(() => {
      g(!0);
      const x = setTimeout(() => g(!1), 9e3);
      return () => clearTimeout(x);
    }, [a, f, y]);
  const d = (x) => {
      i(x), m(null);
    },
    p = (x) => {
      var M;
      if (x.key !== "ArrowRight" && x.key !== "ArrowLeft") return;
      const j = (x.key === "ArrowRight" ? 1 : -1) * (t === "ar" ? -1 : 1),
        E = (a + j + e.length) % e.length;
      d(E),
        (M = document.getElementById(`ap-tab-${e[E].id}`)) == null || M.focus();
    };
  let L;
  if (f === "desktop") {
    const x = Math.min(1, o.w / au);
    L = { outerW: o.w, outerH: o.h, w: au, h: Math.round(o.h / x), s: x };
  } else {
    const x = Math.min(1, (o.w - 24) / ot.w, (o.h - 24) / ot.h);
    L = {
      outerW: Math.round(ot.w * x),
      outerH: Math.round(ot.h * x),
      w: ot.w,
      h: ot.h,
      s: x,
    };
  }
  const v = N.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return l.jsxs("div", {
    className: "ap-live",
    "data-rv": !0,
    children: [
      l.jsxs("div", {
        className: "ap-live-win",
        children: [
          l.jsx("div", {
            className: "ap-live-tabs",
            role: "tablist",
            "aria-label": r("المشاريع", "Projects"),
            onKeyDown: p,
            children: e.map((x, j) =>
              l.jsxs(
                "button",
                {
                  id: `ap-tab-${x.id}`,
                  role: "tab",
                  type: "button",
                  "aria-selected": j === a,
                  "aria-controls": "ap-live-panel",
                  tabIndex: j === a ? 0 : -1,
                  className: `ap-live-tab ${j === a ? "is-on" : ""}`,
                  onClick: () => d(j),
                  children: [
                    l.jsx("span", {
                      className: "ap-live-fav",
                      "aria-hidden": "true",
                      children: x.title[0],
                    }),
                    l.jsx("span", {
                      className: "ap-live-tt",
                      children: x.title,
                    }),
                  ],
                },
                x.id,
              ),
            ),
          }),
          l.jsxs("div", {
            className: "ap-live-bar",
            children: [
              l.jsxs("span", {
                className: "ap-live-dots",
                "aria-hidden": "true",
                children: [l.jsx("i", {}), l.jsx("i", {}), l.jsx("i", {})],
              }),
              l.jsx("button", {
                type: "button",
                className: "ap-live-btn",
                onClick: () => k((x) => x + 1),
                "aria-label": r("إعادة تحميل", "Reload"),
                children: l.jsx("svg", {
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: l.jsx("path", {
                    d: "M20 12a8 8 0 1 1-2.34-5.66M20 4v5h-5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
              }),
              l.jsxs("div", {
                className: "ap-live-addr",
                dir: "ltr",
                children: [
                  l.jsx("span", {
                    className: "ap-lock",
                    "aria-hidden": "true",
                    children: "●",
                  }),
                  l.jsx("span", { className: "ap-live-host", children: v }),
                ],
              }),
              l.jsxs("div", {
                className: "ap-live-seg",
                role: "group",
                "aria-label": r("حجم العرض", "Viewport"),
                children: [
                  l.jsxs("button", {
                    type: "button",
                    "aria-pressed": f === "desktop",
                    onClick: () => m("desktop"),
                    disabled: c,
                    children: [
                      l.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: [
                          l.jsx("rect", {
                            x: "3",
                            y: "4",
                            width: "18",
                            height: "12",
                            rx: "2",
                          }),
                          l.jsx("path", { d: "M8 20h8M12 16v4" }),
                        ],
                      }),
                      l.jsx("span", {
                        className: "sr-only",
                        children: r("ديسكتوب", "Desktop"),
                      }),
                    ],
                  }),
                  l.jsxs("button", {
                    type: "button",
                    "aria-pressed": f === "mobile",
                    onClick: () => m("mobile"),
                    children: [
                      l.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: [
                          l.jsx("rect", {
                            x: "7",
                            y: "2.5",
                            width: "10",
                            height: "19",
                            rx: "2.5",
                          }),
                          l.jsx("path", { d: "M11 18.5h2" }),
                        ],
                      }),
                      l.jsx("span", {
                        className: "sr-only",
                        children: r("موبايل", "Mobile"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l.jsx("div", {
            ref: s,
            id: "ap-live-panel",
            role: "tabpanel",
            "aria-labelledby": `ap-tab-${N.id}`,
            className: `ap-live-stage is-${f}`,
            style: { height: o.h },
            children: l.jsxs("div", {
              className: `ap-live-device is-${f}`,
              style: { width: L.outerW, height: L.outerH },
              children: [
                N.relay && !qd
                  ? l.jsx(
                      "img",
                      {
                        className: "ap-live-frame ap-live-shot",
                        alt: `${N.title} — ${r("لقطة من الموقع", "site snapshot")}`,
                        src: G1(N, L.w, L.h),
                        style: {
                          width: L.w,
                          height: L.h,
                          transform: `scale(${L.s})`,
                        },
                        onLoad: () => g(!1),
                        onError: () => g(!1),
                      },
                      `${N.id}-${f}-${y}`,
                    )
                  : l.jsx(
                      "iframe",
                      {
                        title: `${N.title} — ${r("معاينة حيّة", "live preview")}`,
                        src: Q1(N),
                        className: "ap-live-frame",
                        style: {
                          width: L.w,
                          height: L.h,
                          transform: `scale(${L.s})`,
                        },
                        sandbox:
                          "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        allow: "autoplay; fullscreen",
                        onLoad: () => g(!1),
                      },
                      `${N.id}-${f}-${y}`,
                    ),
                l.jsxs("div", {
                  className: `ap-live-load ${h ? "is-on" : ""}`,
                  "aria-hidden": !h,
                  children: [
                    l.jsx(Dt, { className: "ap-live-load-mark" }),
                    l.jsx("span", { dir: "ltr", children: v }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      l.jsxs("div", {
        className: "ap-live-info",
        "aria-live": "polite",
        children: [
          l.jsxs("p", {
            className: "ap-live-n",
            dir: "ltr",
            children: [
              String(a + 1).padStart(2, "0"),
              " / ",
              String(e.length).padStart(2, "0"),
            ],
          }),
          l.jsxs("div", {
            children: [
              l.jsx("h2", { className: "ap-live-title", children: N.title }),
              l.jsxs("p", {
                className: "ap-live-type",
                children: [
                  n(N.type),
                  " ",
                  l.jsxs("span", { dir: "ltr", children: ["· ", N.langs] }),
                ],
              }),
            ],
          }),
          l.jsx("p", { className: "ap-live-text", children: n(N.text) }),
          l.jsx("p", {
            className: "ap-live-hint",
            children: r(
              "تصفّح الموقع مباشرة داخل النافذة — بدّل بين الديسكتوب والموبايل.",
              "Browse the site right inside the window — switch between desktop and mobile.",
            ),
          }),
        ],
      }),
    ],
  });
}
const ee = (e, n, t) => (e === "ar" ? n : t);
function tt({ path: e, children: n, sub: t }) {
  return l.jsxs("header", {
    className: "ap-head",
    "data-rv": !0,
    children: [
      l.jsxs("p", {
        className: "ap-crumb",
        dir: "ltr",
        children: [l.jsx("span", { children: "~/aperio/" }), e],
      }),
      l.jsx("h1", { className: "ap-h1", children: n }),
      t && l.jsx("p", { className: "ap-sub", children: t }),
    ],
  });
}
function _1() {
  const { t: e, lang: n } = R(),
    [t, r] = w.useState(st() ? 3 : 0);
  return (
    w.useEffect(() => {
      if (t >= 3) return;
      const s = setTimeout(() => r((a) => a + 1), t === 0 ? 350 : 650);
      return () => clearTimeout(s);
    }, [t]),
    l.jsxs("section", {
      className: `ap-hero st-${t}`,
      children: [
        l.jsxs("div", {
          className: "ap-hero-copy",
          children: [
            l.jsxs("p", {
              className: "ap-crumb",
              dir: "ltr",
              children: [l.jsx("span", { children: "~/aperio/" }), "index"],
            }),
            l.jsx("h1", {
              className: "ap-hero-h",
              children: ee(
                n,
                `نفتح الفكرة
ونبنيها موقع.`,
                `We open the idea
and build it into a site.`,
              )
                .split(
                  `
`,
                )
                .map((s, a) => l.jsx("span", { children: s }, a)),
            }),
            l.jsx("p", { className: "ap-sub", children: e($.definition) }),
            l.jsxs("div", {
              className: "ap-hero-cta",
              children: [
                l.jsx(D, {
                  to: $.cta.to,
                  className: "ap-btn",
                  children: e($.cta.label),
                }),
                l.jsxs("button", {
                  type: "button",
                  className: "ap-btn ap-btn-ghost",
                  onClick: () => r(0),
                  children: [
                    ee(n, "شوفه ينبني مرة ثانية", "Watch it build again"),
                    " ↺",
                  ],
                }),
              ],
            }),
          ],
        }),
        l.jsxs("div", {
          className: "ap-device",
          "aria-hidden": "true",
          children: [
            l.jsxs("div", {
              className: "ap-device-chrome",
              children: [
                l.jsx("i", {}),
                l.jsx("i", {}),
                l.jsx("i", {}),
                l.jsx("span", { dir: "ltr", children: "aperio/preview" }),
              ],
            }),
            l.jsxs("div", {
              className: "ap-device-body",
              children: [
                l.jsx("div", { className: "ap-blk ap-blk-nav" }),
                l.jsx("div", {
                  className: "ap-blk ap-blk-hero",
                  children: l.jsx(Dt, {
                    className: "ap-blk-mark",
                    stroke: "#F7F5F0",
                  }),
                }),
                l.jsx("div", { className: "ap-blk ap-blk-a" }),
                l.jsx("div", { className: "ap-blk ap-blk-b" }),
                l.jsx("div", { className: "ap-blk ap-blk-c" }),
                l.jsx("div", { className: "ap-blk ap-blk-d" }),
                l.jsx("div", { className: "ap-blk ap-blk-e" }),
              ],
            }),
            l.jsxs("div", {
              className: "ap-phone",
              children: [
                l.jsx("div", { className: "ap-blk" }),
                l.jsx("div", { className: "ap-blk" }),
                l.jsx("div", { className: "ap-blk" }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Hd({ limit: e }) {
  const { t: n, lang: t } = R(),
    r = ["All", "UI", "UX", "Build", "Ops"],
    [s, a] = w.useState("All"),
    i = $.services
      .filter((o) => s === "All" || o.tags.includes(s))
      .slice(0, e || 99);
  return l.jsxs("div", {
    className: "ap-svc",
    children: [
      l.jsx("div", {
        className: "ap-chips",
        role: "group",
        "aria-label": ee(t, "تصفية", "Filter"),
        children: r.map((o) =>
          l.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": s === o,
              className: s === o ? "is-on" : "",
              onClick: () => a(o),
              dir: "ltr",
              children: o === "All" ? ee(t, "الكل", "All") : o,
            },
            o,
          ),
        ),
      }),
      l.jsx("ul", {
        className: "ap-cards",
        "aria-live": "polite",
        children: i.map((o) =>
          l.jsxs(
            "li",
            {
              className: "ap-card",
              children: [
                l.jsx("span", {
                  className: "ap-card-tags",
                  dir: "ltr",
                  children: o.tags.map((u) => l.jsx("em", { children: u }, u)),
                }),
                l.jsx("h3", { children: n(o.title) }),
              ],
            },
            o.id,
          ),
        ),
      }),
    ],
  });
}
function Ud() {
  const { t: e, lang: n } = R();
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(_1, {}),
      l.jsxs("section", {
        className: "ap-sec",
        children: [
          l.jsx(tt, {
            path: "services",
            sub: ee(
              n,
              "اختار نوع العمل وشوف شنو يدخل بيه.",
              "Filter by the kind of work.",
            ),
            children: ee(n, "شنو نبني", "What we build"),
          }),
          l.jsx(Hd, { limit: 8 }),
          l.jsxs(D, {
            to: "/aperio/services",
            className: "ap-link",
            children: [ee(n, "كل الخدمات", "All services"), " →"],
          }),
        ],
      }),
      tn($.projects) &&
        l.jsxs("section", {
          className: "ap-sec",
          children: [
            l.jsx(tt, {
              path: "projects",
              sub: ee(
                n,
                "مواقع حقيقية — افتحها وتصفحها داخل APERIO.",
                "Real sites — open and browse them inside APERIO.",
              ),
              children: ee(n, "شغلنا", "Our work"),
            }),
            l.jsx("ul", {
              className: "ap-wk",
              children: $.projects.map((t, r) =>
                l.jsx(
                  "li",
                  {
                    "data-rv": !0,
                    style: { "--d": `${r * 60}ms` },
                    children: l.jsxs(D, {
                      to: "/aperio/projects",
                      className: "ap-wk-card",
                      children: [
                        l.jsxs("span", {
                          className: "ap-wk-chrome",
                          "aria-hidden": "true",
                          children: [
                            l.jsx("i", {}),
                            l.jsx("i", {}),
                            l.jsx("i", {}),
                          ],
                        }),
                        l.jsx("span", {
                          className: "ap-wk-host",
                          dir: "ltr",
                          children: t.url
                            .replace(/^https?:\/\//, "")
                            .replace(/\/$/, ""),
                        }),
                        l.jsx("strong", {
                          className: "ap-wk-t",
                          children: t.title,
                        }),
                        l.jsx("span", {
                          className: "ap-wk-type",
                          children: e(t.type),
                        }),
                      ],
                    }),
                  },
                  t.id,
                ),
              ),
            }),
            l.jsxs(D, {
              to: "/aperio/projects",
              className: "ap-link",
              children: [ee(n, "افتح المشاريع", "Open the projects"), " →"],
            }),
          ],
        }),
      l.jsxs("section", {
        className: "ap-sec ap-meaning",
        "data-rv": !0,
        children: [
          l.jsx(Dt, { className: "ap-meaning-mark", stroke: "#14120F" }),
          l.jsx("p", { className: "ap-meaning-t", children: e($.meaning) }),
        ],
      }),
    ],
  });
}
function $1() {
  const { lang: e } = R();
  return l.jsxs("section", {
    className: "ap-sec ap-first",
    children: [
      l.jsx(tt, {
        path: "services",
        sub: ee(
          e,
          "من صفحة وحدة لحد منصة كاملة.",
          "From a single page to a complete platform.",
        ),
        children: ee(e, "الخدمات", "Services"),
      }),
      l.jsx(Hd, {}),
    ],
  });
}
function eh() {
  const { lang: e, ui: n } = R();
  return l.jsxs("section", {
    className: "ap-sec ap-first",
    children: [
      l.jsx(tt, {
        path: "projects",
        sub: tn($.projects)
          ? ee(
              e,
              "مواقع حقيقية اشتغلناها — تنفتح وتشتغل هنا داخل APERIO.",
              "Real sites we built — they open and run right here inside APERIO.",
            )
          : n("projectsSoon"),
        children: n("projects"),
      }),
      tn($.projects) && l.jsx(b1, { projects: $.projects }),
    ],
  });
}
function nh() {
  const { t: e, lang: n } = R();
  return l.jsxs("section", {
    className: "ap-sec ap-first",
    children: [
      l.jsx(tt, {
        path: "process",
        sub: ee(
          n,
          "طريقة عمل مقترحة — قابلة للتعديل من ملف المحتوى.",
          "Proposed working method — editable in the content file.",
        ),
        children: ee(n, "طريقة العمل", "Process"),
      }),
      l.jsx("ol", {
        className: "ap-log",
        children: $.phases.map((t, r) =>
          l.jsxs(
            "li",
            {
              "data-rv": !0,
              style: { "--d": `${r * 90}ms` },
              children: [
                l.jsx("span", {
                  className: "ap-log-state",
                  dir: "ltr",
                  children: String(r + 1).padStart(2, "0"),
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("h3", { children: e(t.title) }),
                    l.jsx("p", { children: e(t.text) }),
                  ],
                }),
                l.jsx("span", {
                  className: "ap-log-pill",
                  dir: "ltr",
                  children: t.id,
                }),
              ],
            },
            t.id,
          ),
        ),
      }),
    ],
  });
}
function th() {
  const { t: e, lang: n, ui: t } = R();
  return l.jsxs("section", {
    className: "ap-sec ap-first",
    children: [
      l.jsx(tt, { path: "about", children: "APERIO" }),
      l.jsxs("div", {
        className: "ap-about",
        "data-rv": !0,
        children: [
          l.jsx("p", { className: "ap-about-lead", children: e($.definition) }),
          l.jsxs("dl", {
            className: "ap-kv",
            children: [
              l.jsx("dt", { children: ee(n, "المعنى", "Meaning") }),
              l.jsx("dd", { children: e($.meaning) }),
              l.jsx("dt", { children: ee(n, "القسم", "Division") }),
              l.jsxs("dd", { children: [e($.discipline), " — REX Group"] }),
              l.jsx("dt", { children: ee(n, "التقنيات", "Stack") }),
              l.jsx("dd", {
                children: tn($.tools) ? $.tools.join(", ") : t("pending"),
              }),
              l.jsx("dt", { children: ee(n, "الفريق", "Team") }),
              l.jsx("dd", {
                children: tn($.team)
                  ? $.team.map((r) => r.name).join(", ")
                  : t("pending"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function rh() {
  const { lang: e, ui: n } = R();
  return l.jsxs("section", {
    className: "ap-sec ap-first",
    children: [
      l.jsx(tt, {
        path: "contact",
        children: ee(e, "ابدأ موقعك", "Start your website"),
      }),
      l.jsx(RxContact, { className: "ap-direct" }),
      l.jsxs("div", {
        className: "ap-form-win",
        children: [
          l.jsxs("div", {
            className: "ap-device-chrome",
            children: [
              l.jsx("i", {}),
              l.jsx("i", {}),
              l.jsx("i", {}),
              l.jsx("span", { dir: "ltr", children: "aperio/new-project" }),
            ],
          }),
          l.jsx(rs, {
            division: "aperio",
            prefix: "apf",
            source: "APERIO — contact",
            typeOptions: $.services.map((t) => t.title),
          }),
        ],
      }),
    ],
  });
}
const lh = {
  home: Ud,
  services: $1,
  projects: eh,
  process: nh,
  about: th,
  contact: rh,
};
function sh({ page: e }) {
  const n = lh[e] || Ud;
  return l.jsx(Y1, { page: e, children: l.jsx(n, {}) });
}
const ah = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: sh },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ih = [
    { to: "/rex-campaigns", key: "home" },
    { to: "/rex-campaigns/campaigns", key: "campaigns" },
    { to: "/rex-campaigns/services", key: "services" },
    { to: "/rex-campaigns/process", key: "process" },
    { to: "/rex-campaigns/about", key: "about" },
    { to: "/rex-campaigns/contact", key: "contact" },
  ];
function oh() {
  const e = w.useRef(null);
  return (
    w.useEffect(() => {
      if (!Rd() || st()) return;
      const n = e.current,
        t = n.getContext("2d"),
        r = [];
      let s,
        a = Math.min(2, window.devicePixelRatio || 1);
      const i = () => {
        (n.width = innerWidth * a),
          (n.height = innerHeight * a),
          t.setTransform(a, 0, 0, a, 0, 0);
      };
      i();
      const o = (c) => {
          r.push({ x: c.clientX, y: c.clientY, t: performance.now() });
        },
        u = () => {
          const c = performance.now();
          for (; r.length && c - r[0].t > 380; ) r.shift();
          t.clearRect(0, 0, n.width, n.height);
          for (let A = 1; A < r.length; A++) {
            const m = r[A - 1],
              h = r[A],
              g = 1 - (c - h.t) / 380;
            (t.strokeStyle = `rgba(18,17,15,${g * 0.85})`),
              (t.lineWidth = 2 + g * 6),
              (t.lineCap = "round"),
              t.beginPath(),
              t.moveTo(m.x, m.y),
              t.lineTo(h.x, h.y),
              t.stroke();
          }
          s = requestAnimationFrame(u);
        };
      return (
        window.addEventListener("pointermove", o, { passive: !0 }),
        window.addEventListener("resize", i),
        (s = requestAnimationFrame(u)),
        () => {
          cancelAnimationFrame(s),
            window.removeEventListener("pointermove", o),
            window.removeEventListener("resize", i);
        }
      );
    }, []),
    l.jsx("canvas", { ref: e, className: "rc-ink", "aria-hidden": "true" })
  );
}
function uh({ page: e, children: n }) {
  const { ui: t } = R(),
    r = ls(e);
  return l.jsxs("div", {
    "data-w": "rexCampaigns",
    className: "cm",
    ref: r,
    children: [
      l.jsx("a", {
        className: "skip-link",
        href: "#main",
        children: t("skipToContent"),
      }),
      l.jsxs("header", {
        className: "cm-top",
        children: [
          l.jsxs(D, {
            to: "/rex-campaigns",
            className: "cm-logo",
            "aria-label": "REX Campaigns",
            children: [
              l.jsx(Wi, { className: "cm-logo-w", xColor: "#FF5A36" }),
              l.jsx("span", {
                className: "cm-logo-sub",
                children: "CAMPAIGNS",
              }),
            ],
          }),
          l.jsx("nav", {
            className: "cm-nav",
            "aria-label": "REX Campaigns",
            children: ih.map((s, a) =>
              l.jsx(
                D,
                {
                  to: s.to,
                  className: "cm-chip",
                  style: { "--r": `${((a * 37) % 7) - 3}deg` },
                  children: t(s.key),
                },
                s.key,
              ),
            ),
          }),
          l.jsxs("div", {
            className: "cm-ctl",
            children: [
              l.jsx(Pr, { className: "cm-ic" }),
              l.jsx(Wr, { className: "cm-ic" }),
              l.jsx(ts, { className: "cm-back" }),
            ],
          }),
        ],
      }),
      l.jsx("main", {
        id: "main",
        className: `cm-main cm-p-${e}`,
        children: n,
      }),
      l.jsxs("footer", {
        className: "cm-foot",
        children: [
          l.jsxs("p", {
            className: "cm-foot-tag",
            lang: "en",
            dir: "ltr",
            children: [
              "Rules End. ",
              l.jsx("span", { children: "X" }),
              "periments Begin.",
            ],
          }),
          l.jsxs("p", {
            children: ["REX Campaigns — ", t("campaigns"), " · REX Group"],
          }),
          l.jsx(RxContact, { className: "foot-cl" }),
        ],
      }),
      l.jsx(oh, {}),
    ],
  });
}
const Be = (e, n, t) => (e === "ar" ? n : t),
  ch = {
    slash: "/slash",
    adol: "/adol",
    aperio: "/aperio",
    rexCampaigns: "/rex-campaigns",
  },
  dh = {
    slash: l.jsx(Vi, { className: "cm-crew-mark" }),
    adol: l.jsx(Wa, { className: "cm-crew-mark", color: "#12110F", mono: !0 }),
    aperio: l.jsx(Dt, { className: "cm-crew-mark", stroke: "#12110F" }),
    rexCampaigns: l.jsx(Pi, { className: "cm-crew-mark", exp: "#FF5A36" }),
  },
  fh = {
    slash: "SLASH",
    adol: "ADOL’S PRODUCTION",
    aperio: "APERIO",
    rexCampaigns: "REX",
  };
function Zr({ kicker: e, children: n, tone: t = "ink" }) {
  return l.jsxs("header", {
    className: `cm-poster cm-poster-${t}`,
    "data-rv": !0,
    children: [
      l.jsx("p", { className: "cm-kicker", children: e }),
      l.jsx("h1", { className: "cm-h1", children: n }),
      l.jsx(Te, { name: "x", className: "cm-poster-x" }),
    ],
  });
}
function Jd() {
  const { t: e, lang: n } = R();
  return l.jsxs(l.Fragment, {
    children: [
      l.jsxs("section", {
        className: "cm-hero",
        children: [
          l.jsx("h1", {
            className: "cm-hero-h",
            children: e(Ee.heroLine)
              .split(
                `
`,
              )
              .map((t, r) =>
                l.jsx("span", { className: `l${r}`, children: t }, r),
              ),
          }),
          l.jsx("p", { className: "cm-hero-sub", children: e(Ee.definition) }),
          l.jsxs("div", {
            className: "cm-hero-art",
            "aria-hidden": "true",
            children: [
              l.jsx(Te, { name: "circle", className: "cm-a-circle" }),
              l.jsx(Te, { name: "arrow", className: "cm-a-arrow" }),
              l.jsx(Te, { name: "star", className: "cm-a-star" }),
              l.jsx(Te, { name: "speed", className: "cm-a-speed" }),
            ],
          }),
          l.jsx(Wn, {
            use: "transitions",
            className: "cm-hero-mascot",
            eager: !0,
            sizes: "(max-width: 800px) 46vw, 300px",
          }),
          l.jsx("div", {
            className: "cm-hero-cta",
            children: l.jsx(D, {
              to: Ee.cta.to,
              className: "cm-btn",
              children: e(Ee.cta.label),
            }),
          }),
        ],
      }),
      l.jsxs("section", {
        className: "cm-sec cm-crew",
        children: [
          l.jsx("h2", {
            className: "cm-h2",
            "data-rv": !0,
            children: Be(
              n,
              "الحملة تحتاج كل الفريق.",
              "A campaign needs the whole crew.",
            ),
          }),
          l.jsxs("div", {
            className: "cm-machine",
            children: [
              Ee.crew.map((t, r) =>
                l.jsxs(
                  D,
                  {
                    to: ch[t.world],
                    className: `cm-crew-card cm-crew-${t.world}`,
                    "data-rv": !0,
                    style: {
                      "--d": `${r * 90}ms`,
                      "--r": `${[-3, 2, -2, 3][r]}deg`,
                    },
                    children: [
                      dh[t.world],
                      l.jsx("b", { children: fh[t.world] }),
                      l.jsx("span", { children: e(t.role) }),
                    ],
                  },
                  t.world,
                ),
              ),
              l.jsx("div", {
                className: "cm-machine-x",
                "aria-hidden": "true",
                children: l.jsx(Pi, { exp: "#FF5A36" }),
              }),
            ],
          }),
        ],
      }),
      l.jsxs("section", {
        className: "cm-sec cm-wall",
        children: [
          l.jsx("h2", {
            className: "cm-h2",
            "data-rv": !0,
            children: Be(n, "شنو يدخل بالحملة", "What goes into a campaign"),
          }),
          l.jsx("ul", {
            className: "cm-stickers",
            children: Ee.services.map((t, r) =>
              l.jsx(
                "li",
                {
                  "data-rv": !0,
                  style: {
                    "--d": `${(r % 6) * 50}ms`,
                    "--r": `${((r * 53) % 9) - 4}deg`,
                  },
                  className: `s${r % 5}`,
                  children: e(t.title),
                },
                t.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function ph() {
  const { t: e, lang: n } = R();
  return l.jsxs("section", {
    className: "cm-sec cm-first",
    children: [
      l.jsx(Zr, {
        kicker: "SERVICES",
        children: Be(n, "من الفكرة للقياس", "From concept to measurement"),
      }),
      l.jsx("ol", {
        className: "cm-svc",
        children: Ee.services.map((t, r) =>
          l.jsxs(
            "li",
            {
              "data-rv": !0,
              style: { "--d": `${(r % 4) * 60}ms` },
              children: [
                l.jsx("span", { "aria-hidden": "true", children: "✕" }),
                e(t.title),
              ],
            },
            t.id,
          ),
        ),
      }),
    ],
  });
}
function mh() {
  const { lang: e } = R(),
    n = [
      ["المشكلة", "Problem"],
      ["الهدف", "Goal"],
      ["الجمهور", "Audience"],
      ["الفكرة", "Idea"],
      ["الرسالة", "Message"],
      ["الهوية البصرية", "Visual identity"],
      ["القنوات", "Channels"],
      ["المحتوى والإنتاج", "Content & production"],
      ["الإطلاق", "Launch"],
      ["النتائج", "Results"],
    ];
  return l.jsxs("section", {
    className: "cm-sec cm-first",
    children: [
      l.jsx(Zr, {
        kicker: "CAMPAIGNS",
        tone: "orange",
        children: Be(e, "الحملات قصص كاملة", "Campaigns are whole stories"),
      }),
      !tn(Ee.caseStudies) &&
        l.jsx("p", {
          className: "cm-note",
          "data-rv": !0,
          children: Be(
            e,
            "الحملات قريباً. كل حملة راح تنعرض كقصة بفصول:",
            "Campaigns coming soon. Each one will be told as a story in chapters:",
          ),
        }),
      l.jsx("div", {
        className: "cm-story",
        tabIndex: 0,
        "aria-label": Be(e, "فصول دراسة الحالة", "Case-study chapters"),
        children: n.map(([t, r], s) =>
          l.jsxs(
            "article",
            {
              className: "cm-story-ch",
              "data-rv": !0,
              style: { "--d": `${s * 50}ms` },
              children: [
                l.jsx("span", {
                  className: "cm-story-n",
                  children: String(s + 1).padStart(2, "0"),
                }),
                l.jsx("h3", { children: Be(e, t, r) }),
                l.jsx("p", {
                  children: Be(
                    e,
                    "بانتظار حملة حقيقية.",
                    "Awaiting a real campaign.",
                  ),
                }),
              ],
            },
            r,
          ),
        ),
      }),
    ],
  });
}
function hh() {
  const { t: e, lang: n } = R();
  return l.jsxs("section", {
    className: "cm-sec cm-first",
    children: [
      l.jsx(Zr, {
        kicker: "PROCESS",
        children: Be(
          n,
          "نفكر. نجرب. نصنع. نطلق. نقيس.",
          "Think. Test. Make. Launch. Measure.",
        ),
      }),
      l.jsx("ol", {
        className: "cm-steps",
        children: Ee.phases.map((t, r) =>
          l.jsxs(
            "li",
            {
              "data-rv": !0,
              style: { "--d": `${r * 80}ms` },
              className: `cm-step-${r}`,
              children: [
                l.jsx("b", { children: e(t.title) }),
                l.jsx("p", { children: e(t.text) }),
                r < Ee.phases.length - 1 &&
                  l.jsx(Te, { name: "arrow", className: "cm-step-arrow" }),
              ],
            },
            t.id,
          ),
        ),
      }),
    ],
  });
}
function Ah() {
  const { t: e, lang: n } = R();
  return l.jsxs("section", {
    className: "cm-sec cm-first",
    children: [
      l.jsx(Zr, { kicker: "ABOUT", children: "REX Campaigns" }),
      l.jsxs("div", {
        className: "cm-about",
        "data-rv": !0,
        children: [
          l.jsx("p", { className: "cm-big", children: e(Ee.definition) }),
          l.jsx("p", {
            children: Be(
              n,
              "REX Campaigns هو قسم الحملات داخل REX Group — مو المجموعة نفسها. المجموعة هي المظلة، وهذا القسم يجمع قدرات الأقسام بحملة وحدة.",
              "REX Campaigns is the campaigns division inside REX Group — not the group itself. The group is the umbrella; this division pulls the divisions together into one campaign.",
            ),
          }),
          l.jsx(D, {
            to: "/about",
            className: "cm-btn cm-btn-ghost",
            children: Be(n, "عن REX Group", "About REX Group"),
          }),
        ],
      }),
    ],
  });
}
function vh() {
  const { lang: e, ui: n } = R();
  return l.jsxs("section", {
    className: "cm-sec cm-first",
    children: [
      l.jsx(Zr, {
        kicker: "CONTACT",
        tone: "blue",
        children: Be(e, "خلّي نبدي التجربة", "Start an Xperiment"),
      }),
      l.jsx(RxContact, { className: "cm-direct" }),
      l.jsx(rs, {
        division: "rexCampaigns",
        prefix: "cmf",
        source: "REX Campaigns — contact",
        typeOptions: Ee.services.map((t) => t.title),
      }),
    ],
  });
}
const gh = {
  home: Jd,
  services: ph,
  campaigns: mh,
  process: hh,
  about: Ah,
  contact: vh,
};
function Lh({ page: e }) {
  const n = gh[e] || Jd;
  return l.jsx(uh, { page: e, children: l.jsx(n, {}) });
}
const xh = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Lh }, Symbol.toStringTag, {
    value: "Module",
  }),
);
