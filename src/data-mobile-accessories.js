// ============================================================
//  DATA-MOBILE-ACCESSORIES.JS
//  CompTIA A+ 220-1201 Objective 1.2
//  Mobile device accessories and connectivity options
// ============================================================

export const MOBILE_ACCESSORIES_DATA = [
  // ── Connection Types ─────────────────────────────────────────
  {
    term:       "Lightning",
    definition: "Apple Lightning Connector",
    detail:     "Apple proprietary 8-pin reversible connector for iOS devices",
    category:   "Mobile Connector",
    extra:       "iPhone/iPad pre-2023 · Charging + data · Replaced by USB-C",
    visual:     "lightning",
  },
  {
    term:       "USB-C Mobile",
    definition: "USB Type-C Mobile Connector",
    detail:     "Universal reversible connector — modern Android and iPad devices",
    category:   "Mobile Connector",
    extra:       "Charging + data + video · Up to 240W · Industry standard",
    visual:     "usbc",
  },
  {
    term:       "Micro-USB Mobile",
    definition: "Micro USB Mobile Connector",
    detail:     "5-pin connector on older Android devices — not reversible",
    category:   "Mobile Connector",
    extra:       "USB 2.0 · Older Android phones · Being phased out",
    visual:     "microusb",
  },
  {
    term:       "MagSafe",
    definition: "Apple MagSafe Wireless Charging",
    detail:     "Magnetic alignment for wireless charging on iPhone 12 and later",
    category:   "Mobile Connector",
    extra:       "15W max · Qi compatible · Magnetic ring alignment",
    visual:     null,
  },
  {
    term:       "Qi Charging",
    definition: "Qi Wireless Charging Standard",
    detail:     "Inductive wireless charging standard — place device on pad",
    category:   "Mobile Connector",
    extra:       "WPC standard · 5-15W · Android and iPhone compatible",
    visual:     null,
  },

  // ── Audio ────────────────────────────────────────────────────
  {
    term:       "3.5mm TRS",
    definition: "3.5mm Tip-Ring-Sleeve Audio Jack",
    detail:     "Analog audio connector — headphones and microphone",
    category:   "Mobile Accessory",
    extra:       "TRRS for headset mic · Being replaced by USB-C / Bluetooth",
    visual:     null,
  },
  {
    term:       "Bluetooth Audio",
    definition: "Bluetooth Wireless Audio",
    detail:     "Wireless audio streaming to headphones and speakers",
    category:   "Mobile Accessory",
    extra:       "A2DP profile · aptX / AAC / LDAC codecs · ~10m range",
    visual:     null,
  },

  // ── Display & Video ──────────────────────────────────────────
  {
    term:       "Miracast",
    definition: "Miracast Wireless Display",
    detail:     "WiFi Direct screen mirroring standard — no network needed",
    category:   "Mobile Accessory",
    extra:       "WiFi Direct · Android / Windows · Up to 1080p",
    visual:     null,
  },
  {
    term:       "AirPlay",
    definition: "Apple AirPlay",
    detail:     "Apple wireless screen mirroring and audio streaming",
    category:   "Mobile Accessory",
    extra:       "WiFi required · Apple devices · Apple TV / AirPlay 2 speakers",
    visual:     null,
  },
  {
    term:       "USB-C DisplayPort",
    definition: "USB-C DisplayPort Alt Mode",
    detail:     "Outputs video from USB-C port to external display",
    category:   "Mobile Accessory",
    extra:       "Alt Mode · Adapter required · Up to 8K · Thunderbolt 3/4",
    visual:     null,
  },

  // ── Input Accessories ─────────────────────────────────────────
  {
    term:       "Stylus",
    definition: "Digital Stylus Pen",
    detail:     "Pressure-sensitive pen for touchscreen drawing and writing",
    category:   "Mobile Accessory",
    extra:       "Apple Pencil / S Pen · Active or passive · Palm rejection",
    visual:     null,
  },
  {
    term:       "Mobile Keyboard",
    definition: "Bluetooth Mobile Keyboard",
    detail:     "External keyboard connected to tablet or phone via Bluetooth",
    category:   "Mobile Accessory",
    extra:       "Bluetooth HID profile · Folding / folio designs",
    visual:     null,
  },

  // ── Power ────────────────────────────────────────────────────
  {
    term:       "Power Bank",
    definition: "Portable Battery Pack",
    detail:     "External battery for charging mobile devices on the go",
    category:   "Mobile Accessory",
    extra:       "mAh capacity · USB-A/C output · Fast charge support",
    visual:     null,
  },
  {
    term:       "Car Charger",
    definition: "Vehicle USB Charger",
    detail:     "Charges devices from 12V vehicle power outlet",
    category:   "Mobile Accessory",
    extra:       "12V / OBD2 · USB-A or USB-C · Quick Charge support",
    visual:     null,
  },

  // ── Docking ──────────────────────────────────────────────────
  {
    term:       "USB-C Hub",
    definition: "USB-C Multiport Hub",
    detail:     "Expands single USB-C port to multiple ports and connections",
    category:   "Mobile Accessory",
    extra:       "HDMI + USB-A + SD card + Ethernet · Single cable to laptop",
    visual:     null,
  },
  {
    term:       "Thunderbolt Dock",
    definition: "Thunderbolt Docking Station",
    detail:     "Full-featured dock connecting laptop to multiple peripherals",
    category:   "Mobile Accessory",
    extra:       "TB3/4 · Up to 96W charging · Dual 4K displays · Single cable",
    visual:     null,
  },
];
