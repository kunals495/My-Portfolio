// ================== TRUSTPILOT SETTINGS ==================
// Yahan sirf apni details badalni hain, baaki code ko haath lagane ki zaroorat nahi.

export const TRUSTPILOT = {
  // Trustpilot par jo domain claim kiya hai (https:// ke bina).
  // Profile URL ban jayega: https://www.trustpilot.com/review/<domain>
  domain: "portfolio-kunal-singh.vercel.app",

  // Jab reviews aa jayein tab apni Trustpilot profile se dekh kar yahan likho.
  // (Real numbers hi daalna, Trustpilot ke rules ke hisaab se galat rating dikhana allowed nahi.)
  rating: 0, // e.g. 4.8
  reviewCount: 0, // e.g. 12

  // OPTIONAL: Official TrustBox widget (live data).
  // Trustpilot Business dashboard > Integrations > TrustBox library se widget choose karo,
  // phir code me se data-businessunit-id aur data-template-id copy karke yahan paste karo.
  // Dono bhar diye to neeche wala custom star-block hat jayega aur official widget dikhega.
  trustBox: {
    businessUnitId: "6acbd491d196610fec0e7645",
    templateId: "56278e9abfbbba0bdcd568bc",
    locale: "en-US",
    height: "52px",
  },
};

export const profileUrl = `https://www.trustpilot.com/review/${TRUSTPILOT.domain}`;
export const evaluateUrl = `https://www.trustpilot.com/evaluate/${TRUSTPILOT.domain}`;