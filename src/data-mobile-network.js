// ============================================================
//  DATA-MOBILE-NETWORK.JS
//  CompTIA A+ 220-1201 Objective 1.3
//  Mobile device network connectivity and application support
// ============================================================

export const MOBILE_NETWORK_DATA = [
  // ── Mobile Data ──────────────────────────────────────────────
  {
    term:       "Mobile Hotspot",
    definition: "Mobile WiFi Hotspot",
    detail:     "Shares cellular data connection as a WiFi network for other devices",
    category:   "Mobile Network",
    extra:       "Tethering · Data plan required · Battery drain · Up to 10 devices",
  },
  {
    term:       "USB Tethering",
    definition: "USB Mobile Tethering",
    detail:     "Shares phone's internet connection via USB cable to a computer",
    category:   "Mobile Network",
    extra:       "Faster than WiFi hotspot · Charges phone simultaneously",
  },
  {
    term:       "Bluetooth Tethering",
    definition: "Bluetooth Internet Tethering",
    detail:     "Shares cellular data over Bluetooth — slower than USB or WiFi",
    category:   "Mobile Network",
    extra:       "Low speed · Low power · Short range · Pan profile",
  },
  {
    term:       "APN",
    definition: "Access Point Name",
    detail:     "Gateway between cellular network and the internet — carrier setting",
    category:   "Mobile Network",
    extra:       "Configured in cellular settings · Required for mobile data",
  },
  {
    term:       "VoLTE",
    definition: "Voice over LTE",
    detail:     "HD voice calls over 4G LTE data network instead of circuit-switched",
    category:   "Mobile Network",
    extra:       "Higher quality audio · Simultaneous voice + data · IMS based",
  },
  {
    term:       "WiFi Calling",
    definition: "WiFi Calling",
    detail:     "Routes phone calls over WiFi when cellular signal is weak",
    category:   "Mobile Network",
    extra:       "Carrier supported · Uses VoIP · Works in basements / buildings",
  },

  // ── Mobile Email & Sync ──────────────────────────────────────
  {
    term:       "Exchange ActiveSync",
    definition: "Microsoft Exchange ActiveSync",
    detail:     "Protocol for syncing email, contacts, and calendar with Exchange",
    category:   "Mobile Sync",
    extra:       "Push email · MDM policies · Requires server address + credentials",
  },
  {
    term:       "IMAP Mobile",
    definition: "IMAP on Mobile Devices",
    detail:     "Email retrieval that keeps messages on server — syncs across devices",
    category:   "Mobile Sync",
    extra:       "Port 143 / 993 (SSL) · Best for multi-device access",
  },
  {
    term:       "POP3 Mobile",
    definition: "POP3 on Mobile Devices",
    detail:     "Downloads email to device and removes from server by default",
    category:   "Mobile Sync",
    extra:       "Port 110 / 995 (SSL) · Single device · Leave copy option",
  },
  {
    term:       "MDM",
    definition: "Mobile Device Management",
    detail:     "Enterprise software to manage, secure, and enforce policies on devices",
    category:   "Mobile Management",
    extra:       "Remote wipe · App management · Compliance enforcement",
  },

  // ── Mobile OS & Apps ─────────────────────────────────────────
  {
    term:       "iOS",
    definition: "Apple iOS Mobile Operating System",
    detail:     "Apple's mobile OS for iPhone — closed ecosystem, App Store only",
    category:   "Mobile OS",
    extra:       "Walled garden · iCloud sync · FaceTime / iMessage",
  },
  {
    term:       "Android",
    definition: "Google Android Mobile OS",
    detail:     "Open-source mobile OS — various manufacturers, Google Play Store",
    category:   "Mobile OS",
    extra:       "Sideloading allowed · Google account · Fragmented versions",
  },
  {
    term:       "Two-Factor Auth",
    definition: "Two-Factor Authentication",
    detail:     "Requires second verification method beyond password — SMS or app",
    category:   "Mobile Security",
    extra:       "TOTP authenticator apps · SMS codes · Push notifications",
  },
  {
    term:       "Remote Wipe",
    definition: "Mobile Remote Wipe",
    detail:     "Erases all data on a lost or stolen device remotely",
    category:   "Mobile Security",
    extra:       "Find My iPhone · Android Device Manager · MDM initiated",
  },
  {
    term:       "Screen Lock",
    definition: "Mobile Screen Lock",
    detail:     "Requires authentication to unlock device — PIN, pattern, biometric",
    category:   "Mobile Security",
    extra:       "Auto-lock timer · Biometric (Face ID / fingerprint) · Failed attempt wipe",
  },
];
