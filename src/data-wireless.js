// ============================================================
//  DATA-WIRELESS.JS
//  CompTIA A+ 220-1201 Objective 2.2
//  Wireless networking technologies
// ============================================================

export const WIRELESS_DATA = [
  // ── 802.11 WiFi Standards ────────────────────────────────────
  {
    term:       "802.11a",
    definition: "WiFi Standard 802.11a",
    detail:     "5 GHz only · Up to 54 Mbps · Less interference, shorter range",
    category:   "WiFi Standard",
    extra:       "Released 1999 · OFDM · Not compatible with b/g",
  },
  {
    term:       "802.11b",
    definition: "WiFi Standard 802.11b",
    detail:     "2.4 GHz only · Up to 11 Mbps · Longer range, more interference",
    category:   "WiFi Standard",
    extra:       "Released 1999 · DSSS · First widely adopted WiFi",
  },
  {
    term:       "802.11g",
    definition: "WiFi Standard 802.11g",
    detail:     "2.4 GHz only · Up to 54 Mbps · Backward compatible with 802.11b",
    category:   "WiFi Standard",
    extra:       "Released 2003 · OFDM · Most common in early 2000s",
  },
  {
    term:       "802.11n",
    definition: "WiFi Standard 802.11n (WiFi 4)",
    detail:     "2.4 GHz and/or 5 GHz · Up to 600 Mbps · MIMO antennas",
    category:   "WiFi Standard",
    extra:       "Released 2009 · MIMO · Dual-band capable",
  },
  {
    term:       "802.11ac",
    definition: "WiFi Standard 802.11ac (WiFi 5)",
    detail:     "5 GHz only · Up to 3.5 Gbps · MU-MIMO, beamforming",
    category:   "WiFi Standard",
    extra:       "Released 2013 · Wave 1/Wave 2 · Most common current standard",
  },
  {
    term:       "802.11ax",
    definition: "WiFi Standard 802.11ax (WiFi 6/6E)",
    detail:     "2.4 / 5 / 6 GHz · Up to 9.6 Gbps · OFDMA, improved density",
    category:   "WiFi Standard",
    extra:       "Released 2019 · WiFi 6E adds 6 GHz band · BSS coloring",
  },

  // ── Frequencies & Channels ───────────────────────────────────
  {
    term:       "2.4 GHz Band",
    definition: "2.4 Gigahertz WiFi Frequency Band",
    detail:     "Longer range, more interference from microwaves and Bluetooth",
    category:   "WiFi Frequency",
    extra:       "3 non-overlapping channels (1, 6, 11) · Used by b/g/n/ax",
  },
  {
    term:       "5 GHz Band",
    definition: "5 Gigahertz WiFi Frequency Band",
    detail:     "Shorter range, faster speeds, less interference",
    category:   "WiFi Frequency",
    extra:       "23+ non-overlapping channels · Used by a/n/ac/ax",
  },
  {
    term:       "6 GHz Band",
    definition: "6 Gigahertz WiFi Frequency Band",
    detail:     "Newest band — least congested, highest speeds, shortest range",
    category:   "WiFi Frequency",
    extra:       "WiFi 6E only · 59 non-overlapping 20MHz channels",
  },

  // ── WiFi Security ────────────────────────────────────────────
  {
    term:       "WPA2",
    definition: "WiFi Protected Access 2",
    detail:     "Current standard WiFi encryption — uses AES-CCMP",
    category:   "WiFi Security",
    extra:       "Personal (PSK) and Enterprise (802.1X) modes",
  },
  {
    term:       "WPA3",
    definition: "WiFi Protected Access 3",
    detail:     "Latest WiFi security — SAE handshake, forward secrecy",
    category:   "WiFi Security",
    extra:       "Replaces WPA2 · Protects against offline dictionary attacks",
  },
  {
    term:       "WEP",
    definition: "Wired Equivalent Privacy",
    detail:     "Legacy WiFi encryption — deprecated, easily cracked",
    category:   "WiFi Security",
    extra:       "RC4 cipher · Do not use · Replaced by WPA/WPA2",
  },
  {
    term:       "TKIP",
    definition: "Temporal Key Integrity Protocol",
    detail:     "WPA encryption method — deprecated, replaced by AES",
    category:   "WiFi Security",
    extra:       "Used in WPA (original) · RC4-based · Vulnerable",
  },
  {
    term:       "AES",
    definition: "Advanced Encryption Standard",
    detail:     "Strong symmetric encryption used in WPA2/WPA3",
    category:   "WiFi Security",
    extra:       "128/256-bit keys · CCMP mode for WiFi · NIST standard",
  },

  // ── Wireless Technologies ────────────────────────────────────
  {
    term:       "Bluetooth",
    definition: "Bluetooth Wireless Technology",
    detail:     "Short-range wireless for peripherals — up to ~10m",
    category:   "Wireless Technology",
    extra:       "2.4 GHz · Class 1/2/3 · BR/EDR and BLE versions",
  },
  {
    term:       "NFC",
    definition: "Near Field Communication",
    detail:     "Very short-range wireless — up to 4cm, contactless payments",
    category:   "Wireless Technology",
    extra:       "13.56 MHz · Tap to pay · Device pairing",
  },
  {
    term:       "RFID",
    definition: "Radio Frequency Identification",
    detail:     "Uses radio waves to identify tagged objects or people",
    category:   "Wireless Technology",
    extra:       "Passive (no battery) or Active · Access cards · Asset tracking",
  },
  {
    term:       "Zigbee",
    definition: "Zigbee Wireless Protocol",
    detail:     "Low-power mesh network protocol for IoT and smart home devices",
    category:   "Wireless Technology",
    extra:       "2.4 GHz · IEEE 802.15.4 · Up to 250 Kbps",
  },
  {
    term:       "Z-Wave",
    definition: "Z-Wave Wireless Protocol",
    detail:     "Low-power mesh protocol for smart home automation",
    category:   "Wireless Technology",
    extra:       "908 MHz (US) · Up to 100 Kbps · 232 device limit",
  },

  // ── Antenna Types ────────────────────────────────────────────
  {
    term:       "Omni Antenna",
    definition: "Omnidirectional Antenna",
    detail:     "Radiates signal equally in all directions — 360 degree coverage",
    category:   "WiFi Antenna",
    extra:       "Most WAPs · Vertical polarization · Lower gain",
  },
  {
    term:       "Yagi Antenna",
    definition: "Yagi-Uda Directional Antenna",
    detail:     "Highly directional antenna — focused beam for point-to-point links",
    category:   "WiFi Antenna",
    extra:       "High gain · Long range · Building-to-building links",
  },
  {
    term:       "MIMO",
    definition: "Multiple Input Multiple Output",
    detail:     "Uses multiple antennas simultaneously to increase throughput",
    category:   "WiFi Technology",
    extra:       "Introduced in 802.11n · MU-MIMO in 802.11ac/ax",
  },
  {
    term:       "Band Steering",
    definition: "WiFi Band Steering",
    detail:     "Automatically moves capable devices from 2.4 GHz to 5 GHz",
    category:   "WiFi Technology",
    extra:       "Dual-band routers · Reduces 2.4 GHz congestion",
  },
];
