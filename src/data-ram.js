// ============================================================
//  DATA-RAM.JS
//  CompTIA A+ 220-1201 Objective 3.3
//  RAM characteristics
// ============================================================

export const RAM_DATA = [
  // ── DDR Generations ──────────────────────────────────────────
  {
    term:       "DDR3",
    definition: "Double Data Rate 3 SDRAM",
    detail:     "240-pin DIMM · 1.5V · 800–2133 MHz · Offset notch",
    category:   "RAM Type",
    extra:       "2007–2014 mainstream · Max ~16GB/stick · Dual channel",
    visual:     "ddr3",
  },
  {
    term:       "DDR4",
    definition: "Double Data Rate 4 SDRAM",
    detail:     "288-pin DIMM · 1.2V · 2133–3200 MHz · Offset notch (left)",
    category:   "RAM Type",
    extra:       "2014–present · Max ~64GB/stick · Dual/quad channel",
    visual:     "ddr4",
  },
  {
    term:       "DDR5",
    definition: "Double Data Rate 5 SDRAM",
    detail:     "288-pin DIMM · 1.1V · 4800–6400 MHz · Center notch",
    category:   "RAM Type",
    extra:       "2020–present · Max ~256GB/stick · On-die ECC · Dual sub-channels",
    visual:     "ddr5",
  },

  // ── Form Factors ─────────────────────────────────────────────
  {
    term:       "DIMM",
    definition: "Dual Inline Memory Module",
    detail:     "Full-size RAM stick for desktop motherboards",
    category:   "RAM Form Factor",
    extra:       "DDR4: 288-pin · DDR5: 288-pin · DDR3: 240-pin",
    visual:     "ddr4",
  },
  {
    term:       "SO-DIMM",
    definition: "Small Outline DIMM",
    detail:     "Half-length RAM for laptops, NUCs, and small form factor PCs",
    category:   "RAM Form Factor",
    extra:       "DDR4: 260-pin · DDR5: 262-pin · DDR3: 204-pin",
    visual:     "sodimm",
  },

  // ── RAM Characteristics ──────────────────────────────────────
  {
    term:       "ECC RAM",
    definition: "Error Correcting Code RAM",
    detail:     "Detects and corrects single-bit memory errors automatically",
    category:   "RAM Feature",
    extra:       "Servers / workstations · More expensive · Requires ECC motherboard",
    visual:     null,
  },
  {
    term:       "Non-ECC RAM",
    definition: "Non-Error Correcting RAM",
    detail:     "Standard consumer RAM — no error correction capability",
    category:   "RAM Feature",
    extra:       "Desktop / laptop · Less expensive · Not for critical servers",
    visual:     null,
  },
  {
    term:       "Dual Channel",
    definition: "Dual Channel Memory",
    detail:     "Two RAM sticks work together doubling memory bandwidth",
    category:   "RAM Feature",
    extra:       "Match slots (A2+B2) · Same speed/size/type · ~10–15% performance gain",
    visual:     null,
  },
  {
    term:       "Quad Channel",
    definition: "Quad Channel Memory",
    detail:     "Four RAM sticks work together for maximum memory bandwidth",
    category:   "RAM Feature",
    extra:       "HEDT / server platforms · All four slots matched · Best throughput",
    visual:     null,
  },
  {
    term:       "XMP",
    definition: "Extreme Memory Profile",
    detail:     "Intel spec for pre-configured RAM overclocking profiles in BIOS",
    category:   "RAM Feature",
    extra:       "Enable in BIOS · AMD calls it EXPO · Auto overclock RAM",
    visual:     null,
  },
  {
    term:       "CAS Latency",
    definition: "Column Access Strobe Latency",
    detail:     "Number of clock cycles to deliver data after a memory request",
    category:   "RAM Timing",
    extra:       "Lower = faster · CL16 common for DDR4 · Part of RAM timing spec",
    visual:     null,
  },
  {
    term:       "RAM Speed",
    definition: "RAM Clock Speed",
    detail:     "Effective data transfer rate — e.g. DDR4-3200 = 3200 MT/s",
    category:   "RAM Timing",
    extra:       "Must be supported by CPU and motherboard · XMP for higher speeds",
    visual:     null,
  },
  {
    term:       "Virtual RAM",
    definition: "Virtual Memory / Page File",
    detail:     "Hard drive space used as overflow when physical RAM is full",
    category:   "RAM Feature",
    extra:       "Much slower than physical RAM · Pagefile.sys on Windows",
    visual:     null,
  },
];
