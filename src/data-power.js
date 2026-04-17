// ============================================================
//  DATA-POWER.JS
//  CompTIA A+ 220-1201 Objective 3.6
//  Power supplies
// ============================================================

export const POWER_DATA = [
  // ── PSU Form Factors ─────────────────────────────────────────
  {
    term:       "ATX PSU",
    definition: "ATX Power Supply Unit",
    detail:     "Standard desktop PSU — 150mm x 86mm x 140mm+",
    category:   "Power Supply",
    extra:       "Most common · 24-pin main connector · Modular / semi / non-modular",
    visual:     "psu",
  },
  {
    term:       "SFX PSU",
    definition: "Small Form Factor Power Supply",
    detail:     "Compact PSU for mini-ITX and SFF builds",
    category:   "Power Supply",
    extra:       "125mm x 63.5mm · Smaller fan · Higher cost per watt",
    visual:     null,
  },

  // ── Connectors ───────────────────────────────────────────────
  {
    term:       "24-pin ATX",
    definition: "24-pin ATX Main Power Connector",
    detail:     "Primary power connector to motherboard — backwards compatible with 20-pin",
    category:   "Power Connector",
    extra:       "3.3V + 5V + 12V rails · Keyed · All modern motherboards",
    visual:     "atx24pin",
  },
  {
    term:       "8-pin EPS",
    definition: "8-pin CPU Power Connector",
    detail:     "Dedicated 12V power for CPU — required by most modern motherboards",
    category:   "Power Connector",
    extra:       "CPU/EPS connector · Can be 4+4 split · Some boards need dual 8-pin",
    visual:     null,
  },
  {
    term:       "PCIe 6+2 Pin",
    definition: "PCIe GPU Power Connector",
    detail:     "Powers discrete graphics cards — 6-pin (75W) or 8-pin (150W)",
    category:   "Power Connector",
    extra:       "High-end GPUs may need 2–3 connectors · 12VHPWR for RTX 4000",
    visual:     null,
  },
  {
    term:       "SATA Power",
    definition: "SATA Power Connector",
    detail:     "15-pin power connector for SATA drives and some fans",
    category:   "Power Connector",
    extra:       "3.3V + 5V + 12V · L-shaped · HDD / SSD / optical",
    visual:     null,
  },
  {
    term:       "Molex Power",
    definition: "Molex 4-pin Power Connector",
    detail:     "Legacy 4-pin power for older drives, fans, and adapters",
    category:   "Power Connector",
    extra:       "12V + 5V · White plastic · Older HDDs / case fans",
    visual:     "molex",
  },

  // ── PSU Specs ────────────────────────────────────────────────
  {
    term:       "80 Plus",
    definition: "80 Plus Efficiency Rating",
    detail:     "PSU efficiency certification — converts AC to DC with minimal waste heat",
    category:   "Power Supply",
    extra:       "80+ White/Bronze/Silver/Gold/Platinum/Titanium · Higher = more efficient",
    visual:     null,
  },
  {
    term:       "Wattage",
    definition: "PSU Wattage Rating",
    detail:     "Maximum continuous power output — must exceed system TDP",
    category:   "Power Supply",
    extra:       "Budget 10–20% headroom · Gaming: 650–850W · Check GPU TDP",
    visual:     null,
  },
  {
    term:       "Modular PSU",
    definition: "Modular Power Supply",
    detail:     "Detachable cables — only connect cables you need, better airflow",
    category:   "Power Supply",
    extra:       "Full / semi modular · Better cable management · Higher cost",
    visual:     null,
  },
  {
    term:       "12V Rail",
    definition: "12 Volt Power Rail",
    detail:     "Primary voltage rail powering CPU, GPU, and drives",
    category:   "Power Supply",
    extra:       "Most power consumption · Single vs multi-rail designs",
    visual:     null,
  },
  {
    term:       "UPS",
    definition: "Uninterruptible Power Supply",
    detail:     "Battery backup that provides power during outages — protects equipment",
    category:   "Power Supply",
    extra:       "VA rating · Standby / line-interactive / double-conversion · Surge protection",
    visual:     null,
  },
];
