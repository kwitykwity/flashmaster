// ============================================================
//  DATA-INDEX.JS — DO NOT EDIT
//  Merges all subject data files into a single pool.
//  To add a new subject: import it here and add to ALL_ITEMS.
//  To remove a subject: comment out its import and spread below.
// ============================================================

import { PORTS_DATA }              from "./data-ports.js";
import { CABLES_DATA }             from "./data-cables.js";
import { WIRELESS_DATA }           from "./data-wireless.js";
import { NETWORK_CONFIG_DATA }     from "./data-network-config.js";
import { NETWORK_HARDWARE_DATA }   from "./data-network-hardware.js";
import { CONNECTIONS_DATA }        from "./data-connections.js";
import { NETWORK_TOOLS_DATA }      from "./data-network-tools.js";
import { MOBILE_ACCESSORIES_DATA } from "./data-mobile-accessories.js";
import { MOBILE_NETWORK_DATA }     from "./data-mobile-network.js";
import { RAM_DATA }                from "./data-ram.js";
import { STORAGE_DATA }            from "./data-storage.js";
import { MOTHERBOARDS_DATA }       from "./data-motherboards.js";
import { POWER_DATA }              from "./data-power.js";
import { PRINTERS_DATA }           from "./data-printers.js";
import { VIRTUALIZATION_DATA }     from "./data-virtualization.js";
import { TROUBLESHOOTING_DATA }    from "./data-troubleshooting.js";

// ── Universal item schema ─────────────────────────────────────
//
//  STANDARD ITEMS (auto-generates 8 MCQ question types):
//  {
//    term:        "RJ-45",                         // primary label, flashcard front (deck A)
//    definition:  "Registered Jack 45",            // full name/expansion, flashcard front (deck B)
//    detail:      "8-pin connector for Ethernet",  // key fact shown on flashcard back
//    category:    "Network Cable",                 // grouping label, MCQ band topic
//    extra:       "Cat5e / Cat6 / Cat6a",          // additional testable fact (optional)
//    visual:      "rj45",                          // key into visuals.js SVG map (optional)
//  }
//
//  PRE-BUILT SCENARIO ITEMS (troubleshooting, passed through directly):
//  {
//    prebuilt:    true,
//    q:           "A user reports no display output after installing a new GPU. What should you check first?",
//    correct:     "Ensure the PCIe power connector is seated on the GPU",
//    distractors: ["Replace the monitor", "Update the BIOS", "Re-seat the RAM"],
//    topic:       "Display Troubleshooting",
//  }

export const ALL_ITEMS = [
  ...PORTS_DATA,
  ...CABLES_DATA,
  ...WIRELESS_DATA,
  ...NETWORK_CONFIG_DATA,
  ...NETWORK_HARDWARE_DATA,
  ...CONNECTIONS_DATA,
  ...NETWORK_TOOLS_DATA,
  ...MOBILE_ACCESSORIES_DATA,
  ...MOBILE_NETWORK_DATA,
  ...RAM_DATA,
  ...STORAGE_DATA,
  ...MOTHERBOARDS_DATA,
  ...POWER_DATA,
  ...PRINTERS_DATA,
  ...VIRTUALIZATION_DATA,
  ...TROUBLESHOOTING_DATA,
];
