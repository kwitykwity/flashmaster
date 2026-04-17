// ============================================================
//  DATA-NETWORK-HARDWARE.JS
//  CompTIA A+ 220-1201 Objective 2.5
//  Common networking hardware devices
// ============================================================

export const NETWORK_HARDWARE_DATA = [
  {
    term:       "Hub",
    definition: "Network Hub",
    detail:     "Layer 1 device — broadcasts all traffic to every port",
    category:   "Network Hardware",
    extra:       "Half-duplex · Collision domain · Legacy, replaced by switches",
  },
  {
    term:       "Switch",
    definition: "Network Switch",
    detail:     "Layer 2 device — forwards frames based on MAC address table",
    category:   "Network Hardware",
    extra:       "Full-duplex · Each port = collision domain · VLAN capable",
  },
  {
    term:       "Managed Switch",
    definition: "Managed Network Switch",
    detail:     "Configurable switch with VLAN, QoS, and monitoring support",
    category:   "Network Hardware",
    extra:       "CLI / web GUI · Spanning Tree · Port mirroring",
  },
  {
    term:       "Router",
    definition: "Network Router",
    detail:     "Layer 3 device — routes packets between networks using IP",
    category:   "Network Hardware",
    extra:       "Connects LAN to WAN · NAT · Default gateway device",
  },
  {
    term:       "WAP",
    definition: "Wireless Access Point",
    detail:     "Provides wireless connectivity to a wired network",
    category:   "Network Hardware",
    extra:       "802.11 standards · PoE powered · SSID broadcast",
  },
  {
    term:       "SOHO Router",
    definition: "Small Office Home Office Router",
    detail:     "All-in-one device — router, switch, WAP, and firewall combined",
    category:   "Network Hardware",
    extra:       "Home/small office use · NAT/DHCP/DNS built-in",
  },
  {
    term:       "Firewall",
    definition: "Network Firewall",
    detail:     "Filters traffic based on rules — blocks unauthorized access",
    category:   "Network Hardware",
    extra:       "Stateful inspection · Layer 3/4 · Hardware or software",
  },
  {
    term:       "IDS",
    definition: "Intrusion Detection System",
    detail:     "Monitors network traffic and alerts on suspicious activity",
    category:   "Network Hardware",
    extra:       "Passive — detects only · Does not block · Logs alerts",
  },
  {
    term:       "IPS",
    definition: "Intrusion Prevention System",
    detail:     "Monitors and actively blocks suspicious network traffic",
    category:   "Network Hardware",
    extra:       "Inline — blocks traffic · Active response · Replaces IDS",
  },
  {
    term:       "Proxy Server",
    definition: "Network Proxy Server",
    detail:     "Intermediary between clients and internet — caching and filtering",
    category:   "Network Hardware",
    extra:       "Content filtering · Caches web content · Hides client IPs",
  },
  {
    term:       "Load Balancer",
    definition: "Network Load Balancer",
    detail:     "Distributes incoming traffic across multiple servers",
    category:   "Network Hardware",
    extra:       "High availability · Round-robin / least connections · Layer 4/7",
  },
  {
    term:       "NIC",
    definition: "Network Interface Card",
    detail:     "Hardware that connects a computer to a network",
    category:   "Network Hardware",
    extra:       "MAC address burned in · RJ-45 or fiber · PCIe or onboard",
  },
  {
    term:       "PoE Switch",
    definition: "Power over Ethernet Switch",
    detail:     "Delivers electrical power and data over Ethernet cable",
    category:   "Network Hardware",
    extra:       "802.3af (15.4W) / 802.3at (30W) / 802.3bt (60/100W)",
  },
  {
    term:       "Cable Modem",
    definition: "Cable Broadband Modem",
    detail:     "Connects home network to ISP via coaxial cable infrastructure",
    category:   "Network Hardware",
    extra:       "DOCSIS standard · F-type connector · Shared bandwidth",
  },
  {
    term:       "DSL Modem",
    definition: "Digital Subscriber Line Modem",
    detail:     "Connects to ISP using existing telephone copper lines",
    category:   "Network Hardware",
    extra:       "ADSL / VDSL · RJ-11 connector · Distance-dependent speed",
  },
  {
    term:       "Patch Panel",
    definition: "Network Patch Panel",
    detail:     "Central termination point for structured cabling in a rack",
    category:   "Network Hardware",
    extra:       "110 punchdown · RJ-45 ports · Organizes cable runs",
  },
];
