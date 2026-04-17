// ============================================================
//  DATA-STORAGE.JS
//  CompTIA A+ 220-1201 Objective 3.4
//  Storage devices
// ============================================================

export const STORAGE_DATA = [
  // ── HDD ──────────────────────────────────────────────────────
  {
    term:       "HDD",
    definition: "Hard Disk Drive",
    detail:     "Magnetic spinning platters — mechanical moving parts",
    category:   "Storage Device",
    extra:       "3.5\" desktop / 2.5\" laptop · SATA · 5400–7200 RPM",
    visual:     "hdd",
  },
  {
    term:       "RPM",
    definition: "Revolutions Per Minute",
    detail:     "HDD platter spin speed — higher RPM = faster data access",
    category:   "Storage Device",
    extra:       "5400 RPM (laptop) · 7200 RPM (desktop) · 10/15K (enterprise)",
    visual:     null,
  },

  // ── SSD ──────────────────────────────────────────────────────
  {
    term:       "SSD",
    definition: "Solid State Drive",
    detail:     "NAND flash storage — no moving parts, much faster than HDD",
    category:   "Storage Device",
    extra:       "2.5\" SATA or M.2 · Silent · Shock resistant · Higher cost/GB",
    visual:     "ssd25",
  },
  {
    term:       "NVMe SSD",
    definition: "Non-Volatile Memory Express SSD",
    detail:     "M.2 SSD using PCIe lanes — dramatically faster than SATA SSD",
    category:   "Storage Device",
    extra:       "M.2 M-key · PCIe 3/4/5 · Up to 7GB/s · Low latency",
    visual:     "nvme",
  },
  {
    term:       "M.2 SATA",
    definition: "M.2 SATA SSD",
    detail:     "M.2 form factor but uses SATA interface — same speed as 2.5\" SATA",
    category:   "Storage Device",
    extra:       "B+M key · Up to 600MB/s · No speed gain over 2.5\" SATA",
    visual:     null,
  },
  {
    term:       "NAND Flash",
    definition: "NAND Flash Memory",
    detail:     "Non-volatile semiconductor storage used in SSDs and USB drives",
    category:   "Storage Device",
    extra:       "SLC / MLC / TLC / QLC · More layers = higher density, lower endurance",
    visual:     null,
  },

  // ── Optical ──────────────────────────────────────────────────
  {
    term:       "CD-ROM",
    definition: "Compact Disc Read-Only Memory",
    detail:     "700MB optical disc — read only, laser-based storage",
    category:   "Optical Storage",
    extra:       "650–700MB · 1x = 150KB/s · Audio CDs · Legacy",
    visual:     null,
  },
  {
    term:       "DVD",
    definition: "Digital Versatile Disc",
    detail:     "4.7GB–17GB optical disc — video and data storage",
    category:   "Optical Storage",
    extra:       "4.7GB single layer · 8.5GB dual layer · 1x = 1.385MB/s",
    visual:     null,
  },
  {
    term:       "Blu-ray",
    definition: "Blu-ray Disc",
    detail:     "25GB–128GB high-capacity optical disc — HD/4K video",
    category:   "Optical Storage",
    extra:       "25GB SL · 50GB DL · Blue-violet laser · BDXL up to 128GB",
    visual:     null,
  },

  // ── Flash Storage ────────────────────────────────────────────
  {
    term:       "USB Flash Drive",
    definition: "USB Flash Drive",
    detail:     "Portable NAND flash storage in a USB form factor",
    category:   "Flash Storage",
    extra:       "USB-A or USB-C · 2.0/3.0/3.1 speeds · Plug and play",
    visual:     null,
  },
  {
    term:       "SD Card",
    definition: "Secure Digital Memory Card",
    detail:     "Removable flash card for cameras, tablets, and embedded devices",
    category:   "Flash Storage",
    extra:       "Full / miniSD / microSD · Class 2–10 · UHS-I/II/III",
    visual:     "sdcard",
  },
  {
    term:       "eMMC",
    definition: "Embedded MultiMediaCard",
    detail:     "Soldered flash storage on budget laptops and tablets — not removable",
    category:   "Flash Storage",
    extra:       "32–256GB · Slower than SSD · Chromebooks / tablets",
    visual:     null,
  },

  // ── RAID ─────────────────────────────────────────────────────
  {
    term:       "RAID 0",
    definition: "RAID Level 0 — Striping",
    detail:     "Data split across drives for speed — no redundancy, total failure if one drive fails",
    category:   "RAID",
    extra:       "Min 2 drives · Full capacity · No fault tolerance",
    visual:     null,
  },
  {
    term:       "RAID 1",
    definition: "RAID Level 1 — Mirroring",
    detail:     "Identical data written to two drives — full redundancy",
    category:   "RAID",
    extra:       "Min 2 drives · 50% usable capacity · Survives one drive failure",
    visual:     null,
  },
  {
    term:       "RAID 5",
    definition: "RAID Level 5 — Striping with Parity",
    detail:     "Data and parity striped across drives — survives one drive failure",
    category:   "RAID",
    extra:       "Min 3 drives · 1 drive overhead · Good balance speed/redundancy",
    visual:     null,
  },
  {
    term:       "RAID 10",
    definition: "RAID Level 10 — Mirror + Stripe",
    detail:     "Combines RAID 1 and RAID 0 — mirrored pairs that are striped",
    category:   "RAID",
    extra:       "Min 4 drives · 50% usable · Best performance + redundancy",
    visual:     null,
  },
];
