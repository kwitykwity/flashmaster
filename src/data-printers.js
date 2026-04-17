// ============================================================
//  DATA-PRINTERS.JS
//  CompTIA A+ 220-1201 Objectives 3.7 & 3.8
//  Multifunction devices, printers, and printer maintenance
// ============================================================

export const PRINTERS_DATA = [
  // ── Printer Types ────────────────────────────────────────────
  {
    term:       "Laser Printer",
    definition: "Laser Printer",
    detail:     "Uses toner and heat to fuse image onto paper — fast and precise",
    category:   "Printer Type",
    extra:       "EP process · High volume · Low cost per page · Monochrome / color",
    visual:     null,
  },
  {
    term:       "Inkjet Printer",
    definition: "Inkjet Printer",
    detail:     "Sprays liquid ink droplets onto paper — excellent photo quality",
    category:   "Printer Type",
    extra:       "Low upfront cost · High ink cost · Thermal or piezoelectric",
    visual:     null,
  },
  {
    term:       "Thermal Printer",
    definition: "Thermal Printer",
    detail:     "Uses heat to activate special paper — no ink or toner needed",
    category:   "Printer Type",
    extra:       "Receipts / labels / shipping · Direct thermal or thermal transfer",
    visual:     null,
  },
  {
    term:       "Impact Printer",
    definition: "Impact / Dot Matrix Printer",
    detail:     "Pins strike ribbon against paper — used for multi-part forms",
    category:   "Printer Type",
    extra:       "Loud · Continuous feed · Carbon copy forms · Legacy",
    visual:     null,
  },
  {
    term:       "3D Printer",
    definition: "3D Printer",
    detail:     "Builds 3D objects layer by layer from digital models",
    category:   "Printer Type",
    extra:       "FDM (filament) / SLA (resin) · STL files · Rapid prototyping",
    visual:     null,
  },
  {
    term:       "MFD",
    definition: "Multifunction Device",
    detail:     "Combines printer, scanner, copier, and fax in one unit",
    category:   "Printer Type",
    extra:       "AIO — All In One · Network capable · ADF for multi-page scanning",
    visual:     null,
  },

  // ── Laser Printer EP Process ─────────────────────────────────
  {
    term:       "Processing",
    definition: "Laser EP Step 1: Processing",
    detail:     "RIP converts print job to bitmap image for the laser",
    category:   "Laser EP Process",
    extra:       "First step · Raster Image Processor · In printer memory",
  },
  {
    term:       "Charging",
    definition: "Laser EP Step 2: Charging",
    detail:     "Primary corona wire applies uniform negative charge to drum",
    category:   "Laser EP Process",
    extra:       "–600V DC · Conditions drum · Precedes laser exposure",
  },
  {
    term:       "Exposing",
    definition: "Laser EP Step 3: Exposing",
    detail:     "Laser beam neutralizes charge on drum to create latent image",
    category:   "Laser EP Process",
    extra:       "–100V where laser hits · Creates invisible image on drum",
  },
  {
    term:       "Developing",
    definition: "Laser EP Step 4: Developing",
    detail:     "Toner adheres to discharged areas of drum forming visible image",
    category:   "Laser EP Process",
    extra:       "Negatively charged toner · Attracted to less-negative areas",
  },
  {
    term:       "Transferring",
    definition: "Laser EP Step 5: Transferring",
    detail:     "Transfer corona gives paper positive charge to attract toner from drum",
    category:   "Laser EP Process",
    extra:       "Toner moves to paper · Image not yet permanent",
  },
  {
    term:       "Fusing",
    definition: "Laser EP Step 6: Fusing",
    detail:     "Heat and pressure permanently bonds toner to paper",
    category:   "Laser EP Process",
    extra:       "~200°C · Fuser assembly · Why freshly printed pages are warm",
  },
  {
    term:       "Cleaning",
    definition: "Laser EP Step 7: Cleaning",
    detail:     "Blade removes residual toner from drum for next print cycle",
    category:   "Laser EP Process",
    extra:       "Final step · Erase lamp neutralizes drum · Ready for next job",
  },

  // ── Printer Maintenance ──────────────────────────────────────
  {
    term:       "Toner Cartridge",
    definition: "Laser Toner Cartridge",
    detail:     "Replaceable cartridge containing toner powder for laser printers",
    category:   "Printer Maintenance",
    extra:       "Shake gently when low · Recycle used · OEM vs compatible",
  },
  {
    term:       "Fuser Assembly",
    definition: "Printer Fuser Assembly",
    detail:     "Heated roller unit that permanently bonds toner to paper",
    category:   "Printer Maintenance",
    extra:       "Replaceable · Causes smearing if failed · Hot — allow to cool",
  },
  {
    term:       "Pickup Rollers",
    definition: "Printer Paper Pickup Rollers",
    detail:     "Rubber rollers that feed paper from the tray into the printer",
    category:   "Printer Maintenance",
    extra:       "Wear over time · Cause paper jams · Clean with isopropyl alcohol",
  },
  {
    term:       "Calibration",
    definition: "Printer Calibration",
    detail:     "Aligns print heads or color registration for accurate output",
    category:   "Printer Maintenance",
    extra:       "Run after new cartridge · Fixes color banding or misalignment",
  },
  {
    term:       "Print Spooler",
    definition: "Windows Print Spooler Service",
    detail:     "Windows service that queues print jobs and manages printing",
    category:   "Printer Maintenance",
    extra:       "Restart if stuck: services.msc · Clears stuck jobs · Required for printing",
  },
];
