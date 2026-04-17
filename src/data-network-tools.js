// ============================================================
//  DATA-NETWORK-TOOLS.JS
//  CompTIA A+ 220-1201 Objective 2.8
//  Networking tools and their purposes
// ============================================================

export const NETWORK_TOOLS_DATA = [
  // ── Physical Tools ───────────────────────────────────────────
  {
    term:       "Crimper",
    definition: "Cable Crimping Tool",
    detail:     "Attaches RJ-45 or RJ-11 connectors to cable ends",
    category:   "Network Tool",
    extra:       "Ratchet crimper preferred · T568A or T568B wiring",
    visual:     null,
  },
  {
    term:       "Punchdown Tool",
    definition: "Punchdown / Impact Tool",
    detail:     "Seats wire into keystone jacks and patch panel 110 blocks",
    category:   "Network Tool",
    extra:       "110 or Krone blade · Cuts excess wire · Patch panels / jacks",
    visual:     null,
  },
  {
    term:       "Cable Tester",
    definition: "Network Cable Tester",
    detail:     "Verifies continuity and correct pin mapping of network cables",
    category:   "Network Tool",
    extra:       "Tests all 8 pins · Detects miswires, opens, shorts",
    visual:     null,
  },
  {
    term:       "Toner Probe",
    definition: "Toner and Probe Kit",
    detail:     "Injects tone on a cable — probe traces it through walls or panels",
    category:   "Network Tool",
    extra:       "Two parts: tone generator + inductive probe · Finds cable runs",
    visual:     null,
  },
  {
    term:       "Loopback Plug",
    definition: "Network Loopback Plug",
    detail:     "Connects TX to RX pins to test a NIC or port without a network",
    category:   "Network Tool",
    extra:       "RJ-45 or fiber · Tests port hardware · No cable needed",
    visual:     null,
  },
  {
    term:       "Cable Stripper",
    definition: "Cable Jacket Stripper",
    detail:     "Removes outer insulation from cable without damaging wires inside",
    category:   "Network Tool",
    extra:       "Round blade · Used before crimping · Adjustable depth",
    visual:     null,
  },
  {
    term:       "Multimeter",
    definition: "Digital Multimeter",
    detail:     "Measures voltage, current, resistance, and continuity",
    category:   "Network Tool",
    extra:       "AC/DC voltage · Ohms · Continuity beep · Diagnoses power issues",
    visual:     null,
  },
  {
    term:       "WiFi Analyzer",
    definition: "Wireless Network Analyzer",
    detail:     "Scans WiFi channels, signal strength, and interference sources",
    category:   "Network Tool",
    extra:       "App or hardware · Shows SSIDs · Finds channel congestion",
    visual:     null,
  },

  // ── Software / CLI Tools ─────────────────────────────────────
  {
    term:       "ipconfig",
    definition: "IP Configuration Command",
    detail:     "Displays IP address, subnet mask, and gateway — Windows",
    category:   "Network Command",
    extra:       "ipconfig /all · /release · /renew · /flushdns",
  },
  {
    term:       "ping",
    definition: "Packet Internet Groper",
    detail:     "Tests connectivity to a host using ICMP echo requests",
    category:   "Network Command",
    extra:       "ping 127.0.0.1 = local stack · ping gateway = LAN · ping 8.8.8.8 = WAN",
  },
  {
    term:       "tracert",
    definition: "Trace Route Command",
    detail:     "Shows each hop a packet takes to reach a destination",
    category:   "Network Command",
    extra:       "tracert on Windows · traceroute on Linux/Mac · TTL-based",
  },
  {
    term:       "nslookup",
    definition: "Name Server Lookup",
    detail:     "Queries DNS servers to resolve hostnames to IP addresses",
    category:   "Network Command",
    extra:       "Tests DNS · nslookup google.com · Shows A/MX/CNAME records",
  },
  {
    term:       "netstat",
    definition: "Network Statistics Command",
    detail:     "Displays active connections, ports, and routing tables",
    category:   "Network Command",
    extra:       "netstat -an shows all connections · Identifies open ports",
  },
  {
    term:       "net",
    definition: "Net Command",
    detail:     "Windows command for network shares, users, and services",
    category:   "Network Command",
    extra:       "net use · net share · net user · net view",
  },
];
