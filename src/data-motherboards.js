// ============================================================
//  DATA-MOTHERBOARDS.JS
//  CompTIA A+ 220-1201 Objective 3.5
//  Motherboards, CPUs, and add-on cards
// ============================================================

export const MOTHERBOARDS_DATA = [
  // ── Form Factors ─────────────────────────────────────────────
  {
    term:       "ATX",
    definition: "Advanced Technology Extended",
    detail:     "Standard full-size motherboard — 305mm x 244mm",
    category:   "Motherboard Form Factor",
    extra:       "7 expansion slots · Most common desktop · Maximum features",
    visual:     "atx",
  },
  {
    term:       "Micro-ATX",
    definition: "Micro Advanced Technology Extended",
    detail:     "Smaller motherboard — 244mm x 244mm, fits ATX cases",
    category:   "Motherboard Form Factor",
    extra:       "4 expansion slots · Budget builds · Compatible with ATX cases",
    visual:     null,
  },
  {
    term:       "Mini-ITX",
    definition: "Mini Information Technology Extended",
    detail:     "Smallest common form factor — 170mm x 170mm",
    category:   "Motherboard Form Factor",
    extra:       "1 PCIe slot · HTPCs / SFF builds · Limited expansion",
    visual:     null,
  },

  // ── CPU Sockets ──────────────────────────────────────────────
  {
    term:       "LGA Socket",
    definition: "Land Grid Array Socket",
    detail:     "Pins on motherboard, flat contacts on CPU — Intel standard",
    category:   "CPU Socket",
    extra:       "LGA1700 (Intel 12/13th gen) · LGA1851 (Intel 14th gen/Arrow Lake)",
    visual:     null,
  },
  {
    term:       "AM4 Socket",
    definition: "AMD Socket AM4",
    detail:     "AMD Ryzen 1000–5000 series CPU socket — 1331 pins on CPU",
    category:   "CPU Socket",
    extra:       "PGA · DDR4 · PCIe 4.0 · 2016–2022 mainstream AMD",
    visual:     null,
  },
  {
    term:       "AM5 Socket",
    definition: "AMD Socket AM5",
    detail:     "AMD Ryzen 7000 series and newer — LGA style, DDR5 only",
    category:   "CPU Socket",
    extra:       "LGA1718 · DDR5 · PCIe 5.0 · 2022–present AMD",
    visual:     null,
  },

  // ── Expansion Slots ──────────────────────────────────────────
  {
    term:       "PCIe x16",
    definition: "PCI Express x16 Slot",
    detail:     "Primary GPU slot — 16 lanes for maximum graphics bandwidth",
    category:   "Expansion Slot",
    extra:       "PCIe 4.0: 64GB/s · PCIe 5.0: 128GB/s · Longest slot",
    visual:     "pcie",
  },
  {
    term:       "PCIe x1",
    definition: "PCI Express x1 Slot",
    detail:     "Single-lane slot for NICs, sound cards, and small add-in cards",
    category:   "Expansion Slot",
    extra:       "PCIe 4.0: 4GB/s · Shortest PCIe slot · Most common add-in",
    visual:     null,
  },
  {
    term:       "M.2 Slot",
    definition: "M.2 Expansion Slot",
    detail:     "On-board slot for M.2 SSDs and wireless cards",
    category:   "Expansion Slot",
    extra:       "M-key (NVMe/SATA) · E-key (WiFi) · 2230/2242/2260/2280 lengths",
    visual:     null,
  },

  // ── Chipsets & Features ──────────────────────────────────────
  {
    term:       "Chipset",
    definition: "Motherboard Chipset",
    detail:     "Controls communication between CPU, RAM, storage, and peripherals",
    category:   "Motherboard Component",
    extra:       "Intel Z/B/H series · AMD X/B/A series · Determines feature set",
    visual:     null,
  },
  {
    term:       "BIOS",
    definition: "Basic Input Output System",
    detail:     "Legacy firmware that initializes hardware and boots the OS",
    category:   "Motherboard Firmware",
    extra:       "16-bit · MBR partitioning · Being replaced by UEFI",
    visual:     null,
  },
  {
    term:       "UEFI",
    definition: "Unified Extensible Firmware Interface",
    detail:     "Modern replacement for BIOS — GUI interface, faster boot, GPT support",
    category:   "Motherboard Firmware",
    extra:       "Secure Boot · GPT · 32/64-bit · >2TB drive support",
    visual:     null,
  },
  {
    term:       "POST",
    definition: "Power On Self Test",
    detail:     "Hardware diagnostic run by BIOS/UEFI at system startup",
    category:   "Motherboard Firmware",
    extra:       "Beep codes on failure · Checks RAM, CPU, GPU · Before OS loads",
    visual:     null,
  },
  {
    term:       "CMOS Battery",
    definition: "Complementary Metal Oxide Semiconductor Battery",
    detail:     "Coin cell battery that maintains BIOS settings and real-time clock",
    category:   "Motherboard Component",
    extra:       "CR2032 · Replace if date/time resets · 3–10 year lifespan",
    visual:     null,
  },
  {
    term:       "CPU Thermal Paste",
    definition: "Thermal Interface Material",
    detail:     "Fills microscopic gaps between CPU and heatsink for heat transfer",
    category:   "Motherboard Component",
    extra:       "Apply pea-size · Replace every 2–4 years · Prevents overheating",
    visual:     null,
  },
];
