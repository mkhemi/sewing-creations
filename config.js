/* ============================================================
   config.js - everything Alesia edits lives in this file.
   Empty handle ("") = that button is hidden. Keep contact.vcf in sync.
   ============================================================ */
const CONFIG = {
  previewNote: "",
  name: "Sewing Creations-GA",
  tagline: "Sew special, Sew you, Sew loved!",
  phone: "(678) 687-1280",
  phoneRaw: "+16786871280",
  email: "sewingcreations70@outlook.com",
  siteUrl: "https://mkhemi.github.io/sewing-creations/",                  // the public page address, once hosted
  skin: "creations",            // creations (logo colors), denim or blush

  pay: [
    { label: "PayPal",   handle: "",          chip: "P", url: h => "https://paypal.me/" + h },
    { label: "Venmo",    handle: "Akramm",    chip: "V", url: h => "https://venmo.com/u/" + h },
    { label: "Cash App", handle: "$AlesiaKramm", chip: "$", url: h => "https://cash.app/" + h }
  ],
  follow: [
    { label: "Facebook",  handle: "people/Sewing-Creations-GA/61569828150358/", show: "Sewing Creations-GA", chip: "f", url: h => "https://facebook.com/" + h },
    { label: "Instagram", handle: "",          chip: "I", url: h => "https://instagram.com/" + h.replace("@", "") },
    { label: "TikTok",    handle: "",          chip: "T", url: h => "https://tiktok.com/@" + h.replace("@", "") }
  ],
  shop: [
    { label: "Website or shop",        handle: "",                chip: "W", url: h => "https://" + h },
    { label: "Request a custom order", handle: "sewingcreations70@outlook.com", chip: "C", url: h => "mailto:" + h }
  ]
};
