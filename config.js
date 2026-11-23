/* ============================================================
   config.js - everything Alesia edits lives in this file.
   Empty handle ("") = that button is hidden. Keep contact.vcf in sync.
   ============================================================ */
const CONFIG = {
  previewNote: "Sample details. Replace everything in config.js, then set previewNote to \"\".",
  name: "Sewing Creations-GA",
  tagline: "Handmade sewing and custom orders",
  phone: "(555) 010-0000",
  phoneRaw: "+15550100000",
  email: "hello@example.com",
  siteUrl: "",                  // the public page address, once hosted
  skin: "creations",            // creations (logo colors), denim or blush

  pay: [
    { label: "PayPal",   handle: "yourname",  chip: "P", url: h => "https://paypal.me/" + h },
    { label: "Venmo",    handle: "yourname",  chip: "V", url: h => "https://venmo.com/u/" + h },
    { label: "Cash App", handle: "$yourname", chip: "$", url: h => "https://cash.app/" + h }
  ],
  follow: [
    { label: "Facebook",  handle: "yourpage",  chip: "f", url: h => "https://facebook.com/" + h },
    { label: "Instagram", handle: "@yourname", chip: "I", url: h => "https://instagram.com/" + h.replace("@", "") },
    { label: "TikTok",    handle: "@yourname", chip: "T", url: h => "https://tiktok.com/@" + h.replace("@", "") }
  ],
  shop: [
    { label: "Website or shop",        handle: "example.com",       chip: "W", url: h => "https://" + h },
    { label: "Request a custom order", handle: "hello@example.com", chip: "C", url: h => "mailto:" + h }
  ]
};
