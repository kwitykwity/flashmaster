// ============================================================
//  DATA-CONNECTIONS.JS
//  CompTIA A+ 220-1201 Objective 2.7
//  Internet connection types, network types, and characteristics
// ============================================================

export const CONNECTIONS_DATA = [
  // ── Internet Connection Types ────────────────────────────────
  {
    term:       "DSL",
    definition: "Digital Subscriber Line",
    detail:     "Broadband over copper phone lines — asymmetric up/down speeds",
    category:   "Internet Connection",
    extra:       "ADSL / VDSL · RJ-11 · Distance-limited · Always on",
  },
  {
    term:       "Cable Internet",
    definition: "Cable Broadband Internet",
    detail:     "Broadband over coaxial cable TV infrastructure — shared bandwidth",
    category:   "Internet Connection",
    extra:       "DOCSIS · F-type connector · Faster than DSL · Shared node",
  },
  {
    term:       "Fiber Internet",
    definition: "Fiber Optic Internet",
    detail:     "Highest speed broadband — light over fiber, symmetric speeds",
    category:   "Internet Connection",
    extra:       "FTTH / FTTP · Up to 10 Gbps · LC/SC connectors",
  },
  {
    term:       "Satellite Internet",
    definition: "Satellite Broadband Internet",
    detail:     "Internet via geostationary or LEO satellites — high latency",
    category:   "Internet Connection",
    extra:       "GEO: ~600ms latency · LEO (Starlink): ~20-40ms · Remote areas",
  },
  {
    term:       "Cellular Internet",
    definition: "Cellular Wireless Internet",
    detail:     "Mobile broadband via cell towers — 4G LTE or 5G",
    category:   "Internet Connection",
    extra:       "4G LTE: ~50 Mbps · 5G: up to 10 Gbps · Mobile hotspot",
  },
  {
    term:       "Fixed Wireless",
    definition: "Fixed Wireless Access",
    detail:     "Point-to-point radio link from ISP tower to premises antenna",
    category:   "Internet Connection",
    extra:       "Line of sight · Rural areas · 5–100 Mbps typical",
  },
  {
    term:       "Dial-up",
    definition: "Dial-up Internet Access",
    detail:     "Internet over analog phone line — very slow, legacy",
    category:   "Internet Connection",
    extra:       "Max 56 Kbps · V.92 modem · Cannot use phone simultaneously",
  },
  {
    term:       "ISDN",
    definition: "Integrated Services Digital Network",
    detail:     "Legacy digital phone line — faster than dial-up, now obsolete",
    category:   "Internet Connection",
    extra:       "BRI: 128 Kbps · PRI: 1.5 Mbps · Replaced by DSL/fiber",
  },

  // ── Network Types ────────────────────────────────────────────
  {
    term:       "LAN",
    definition: "Local Area Network",
    detail:     "Network confined to a small area — home, office, or building",
    category:   "Network Type",
    extra:       "Ethernet / WiFi · High speed · Low latency · Private",
  },
  {
    term:       "WAN",
    definition: "Wide Area Network",
    detail:     "Network spanning large geographic areas — connects multiple LANs",
    category:   "Network Type",
    extra:       "The internet is a WAN · Leased lines / VPN / MPLS",
  },
  {
    term:       "MAN",
    definition: "Metropolitan Area Network",
    detail:     "Network spanning a city or campus — between LAN and WAN",
    category:   "Network Type",
    extra:       "Fiber backbone · ISP infrastructure · City-wide coverage",
  },
  {
    term:       "PAN",
    definition: "Personal Area Network",
    detail:     "Very short-range network around a person — Bluetooth devices",
    category:   "Network Type",
    extra:       "Bluetooth / NFC / USB · ~10m range · Personal devices",
  },
  {
    term:       "WLAN",
    definition: "Wireless Local Area Network",
    detail:     "WiFi-based LAN — no cables needed for device connectivity",
    category:   "Network Type",
    extra:       "802.11 standards · WAP required · SSID broadcast",
  },
  {
    term:       "SAN",
    definition: "Storage Area Network",
    detail:     "High-speed network dedicated to storage devices",
    category:   "Network Type",
    extra:       "Fiber Channel / iSCSI · Block-level storage · Data centers",
  },

  // ── Cellular Standards ───────────────────────────────────────
  {
    term:       "4G LTE",
    definition: "Fourth Generation Long-Term Evolution",
    detail:     "Mobile broadband standard — up to ~150 Mbps typical",
    category:   "Cellular Standard",
    extra:       "Current mainstream · VoLTE for calls · Wide coverage",
  },
  {
    term:       "5G",
    definition: "Fifth Generation Cellular",
    detail:     "Latest mobile standard — up to 10 Gbps, ultra-low latency",
    category:   "Cellular Standard",
    extra:       "Sub-6 GHz and mmWave · IoT / autonomous vehicles · <1ms latency",
  },
];
