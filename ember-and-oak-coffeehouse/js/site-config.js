/**
 * Ember & Oak — site configuration
 * Works on GitHub Pages with zero changes.
 * Optional: set formAccessKey (Web3Forms) to receive contact/review emails.
 * Free key: https://web3forms.com
 */
window.SITE_CONFIG = Object.freeze({
  cafeName: "Ember & Oak",
  tagline: "Coffee, warmth, and a quiet corner of the day.",
  email: "hello@emberandoak.cafe",
  phone: "(555) 482-0193",
  address: "142 Maple Street, Riverside",
  hours: {
    weekdays: "Mon–Fri 7:00am – 6:00pm",
    weekend: "Sat–Sun 8:00am – 5:00pm",
  },
  /* Leave empty for local secure demo mode (messages saved in-browser). */
  formAccessKey: "",
  formEndpoint: "https://api.web3forms.com/submit",
});
