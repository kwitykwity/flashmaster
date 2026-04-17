// ============================================================
//  DATA-NETWORK-CONFIG.JS
//  CompTIA A+ 220-1201 Objective 2.4
//  Common network configuration concepts
// ============================================================

export const NETWORK_CONFIG_DATA = [
  // ── IP Addressing ────────────────────────────────────────────
  {
    term:       "IPv4",
    definition: "Internet Protocol version 4",
    detail:     "32-bit address in dotted decimal — e.g. 192.168.1.1",
    category:   "IP Addressing",
    extra:       "~4.3 billion addresses · Still dominant · Classes A/B/C/D/E",
  },
  {
    term:       "IPv6",
    definition: "Internet Protocol version 6",
    detail:     "128-bit address in hexadecimal — e.g. 2001:0db8::1",
    category:   "IP Addressing",
    extra:       "340 undecillion addresses · Solves IPv4 exhaustion",
  },
  {
    term:       "APIPA",
    definition: "Automatic Private IP Addressing",
    detail:     "Self-assigned IP when DHCP fails — 169.254.x.x range",
    category:   "IP Addressing",
    extra:       "Link-local only · Cannot reach internet · Windows/macOS",
  },
  {
    term:       "Loopback",
    definition: "Loopback Address",
    detail:     "127.0.0.1 — tests local TCP/IP stack without network hardware",
    category:   "IP Addressing",
    extra:       "::1 in IPv6 · ping 127.0.0.1 to test stack · Never routed",
  },
  {
    term:       "Private IP",
    definition: "Private IP Address Ranges",
    detail:     "Non-routable addresses used inside LANs behind NAT",
    category:   "IP Addressing",
    extra:       "10.x.x.x / 172.16-31.x.x / 192.168.x.x · RFC 1918",
  },
  {
    term:       "Public IP",
    definition: "Public IP Address",
    detail:     "Globally routable address assigned by ISP — visible on internet",
    category:   "IP Addressing",
    extra:       "Assigned by IANA/ISP · Required for internet access",
  },
  {
    term:       "Static IP",
    definition: "Static IP Address",
    detail:     "Manually configured IP that does not change — used for servers",
    category:   "IP Addressing",
    extra:       "Servers / printers / network devices · No DHCP needed",
  },

  // ── Subnetting ───────────────────────────────────────────────
  {
    term:       "Subnet Mask",
    definition: "Subnet Mask",
    detail:     "Defines which portion of an IP address is network vs host",
    category:   "Subnetting",
    extra:       "255.255.255.0 = /24 · Determines broadcast domain",
  },
  {
    term:       "CIDR",
    definition: "Classless Inter-Domain Routing",
    detail:     "Slash notation for subnet masks — e.g. /24 = 255.255.255.0",
    category:   "Subnetting",
    extra:       "/24 = 254 hosts · /16 = 65534 hosts · /8 = 16M hosts",
  },
  {
    term:       "Default Gateway",
    definition: "Default Gateway",
    detail:     "Router IP address — first hop for traffic leaving the local network",
    category:   "IP Addressing",
    extra:       "Usually ends in .1 · Required for internet access",
  },

  // ── DNS ──────────────────────────────────────────────────────
  {
    term:       "DNS",
    definition: "Domain Name System",
    detail:     "Translates domain names to IP addresses for routing",
    category:   "Network Services",
    extra:       "Port 53 · A record (IPv4) · AAAA record (IPv6)",
  },
  {
    term:       "DNS A Record",
    definition: "DNS Address Record",
    detail:     "Maps a hostname to an IPv4 address",
    category:   "Network Services",
    extra:       "Most common record · Forward lookup · e.g. www → 1.2.3.4",
  },
  {
    term:       "DNS MX Record",
    definition: "DNS Mail Exchange Record",
    detail:     "Specifies mail servers responsible for a domain",
    category:   "Network Services",
    extra:       "Email routing · Priority value · Points to mail server",
  },
  {
    term:       "DNS CNAME",
    definition: "DNS Canonical Name Record",
    detail:     "Creates an alias from one hostname to another",
    category:   "Network Services",
    extra:       "www → domain.com · Cannot be root domain",
  },

  // ── DHCP ─────────────────────────────────────────────────────
  {
    term:       "DHCP",
    definition: "Dynamic Host Configuration Protocol",
    detail:     "Automatically assigns IP, subnet, gateway, and DNS to clients",
    category:   "Network Services",
    extra:       "DORA process: Discover, Offer, Request, Acknowledge",
  },
  {
    term:       "DHCP Scope",
    definition: "DHCP Address Scope",
    detail:     "Range of IP addresses a DHCP server can assign to clients",
    category:   "Network Services",
    extra:       "Exclusions reserve IPs · Lease time controls duration",
  },
  {
    term:       "DHCP Reservation",
    definition: "DHCP Static Reservation",
    detail:     "Assigns a fixed IP to a device based on its MAC address",
    category:   "Network Services",
    extra:       "Printers / servers · Consistent IP without static config",
  },

  // ── NAT & VPN ────────────────────────────────────────────────
  {
    term:       "NAT",
    definition: "Network Address Translation",
    detail:     "Translates private IPs to a public IP for internet access",
    category:   "Network Config",
    extra:       "PAT/masquerade · Conserves IPv4 · Performed by router",
  },
  {
    term:       "VPN",
    definition: "Virtual Private Network",
    detail:     "Encrypted tunnel over the internet to a private network",
    category:   "Network Config",
    extra:       "Site-to-site or client-to-site · IPSec / SSL / OpenVPN",
  },
  {
    term:       "VLAN",
    definition: "Virtual Local Area Network",
    detail:     "Logically segments a network without physical separation",
    category:   "Network Config",
    extra:       "802.1Q tagging · Improves security and reduces broadcast",
  },
  {
    term:       "QoS",
    definition: "Quality of Service",
    detail:     "Prioritizes certain traffic types — e.g. VoIP over file downloads",
    category:   "Network Config",
    extra:       "DSCP marking · Prevents jitter · Voice/video priority",
  },
];
