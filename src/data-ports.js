// ============================================================
//  DATA-PORTS.JS
//  CompTIA A+ 220-1201 Objective 2.1
//  TCP/UDP ports, protocols, and their purposes
// ============================================================

export const PORTS_DATA = [
  { term: "FTP Data",    definition: "File Transfer Protocol Data",           detail: "Transfers actual file data in active mode",              category: "Network Port", extra: "Port 20 · TCP" },
  { term: "FTP Control", definition: "File Transfer Protocol Control",        detail: "Manages FTP commands and session control",               category: "Network Port", extra: "Port 21 · TCP" },
  { term: "SSH",         definition: "Secure Shell",                          detail: "Encrypted remote command-line access",                   category: "Network Port", extra: "Port 22 · TCP" },
  { term: "Telnet",      definition: "Telnet Remote Protocol",                detail: "Unencrypted remote CLI access — insecure, legacy",       category: "Network Port", extra: "Port 23 · TCP" },
  { term: "SMTP",        definition: "Simple Mail Transfer Protocol",         detail: "Sends and relays outbound email between servers",        category: "Network Port", extra: "Port 25 · TCP" },
  { term: "DNS",         definition: "Domain Name System",                    detail: "Resolves human-readable domain names to IP addresses",   category: "Network Port", extra: "Port 53 · UDP/TCP" },
  { term: "DHCP Server", definition: "Dynamic Host Configuration Protocol",   detail: "Server side — assigns IP addresses to clients",         category: "Network Port", extra: "Port 67 · UDP" },
  { term: "DHCP Client", definition: "Dynamic Host Configuration Protocol",   detail: "Client side — receives IP assignment from server",      category: "Network Port", extra: "Port 68 · UDP" },
  { term: "HTTP",        definition: "Hypertext Transfer Protocol",           detail: "Unencrypted web page delivery",                         category: "Network Port", extra: "Port 80 · TCP" },
  { term: "POP3",        definition: "Post Office Protocol version 3",        detail: "Downloads email from server, removes from server",      category: "Network Port", extra: "Port 110 · TCP" },
  { term: "NetBIOS NS",  definition: "Network Basic Input/Output System",     detail: "Name service for legacy Windows network browsing",      category: "Network Port", extra: "Port 137 · UDP" },
  { term: "NetBIOS DGM", definition: "Network Basic Input/Output System",     detail: "Datagram service for connectionless communication",     category: "Network Port", extra: "Port 138 · UDP" },
  { term: "NetBIOS SSN", definition: "Network Basic Input/Output System",     detail: "Session service for connection-oriented communication", category: "Network Port", extra: "Port 139 · TCP" },
  { term: "IMAP",        definition: "Internet Message Access Protocol",      detail: "Retrieves email, keeps copies on server",               category: "Network Port", extra: "Port 143 · TCP" },
  { term: "SNMP",        definition: "Simple Network Management Protocol",    detail: "Monitors and manages network devices",                  category: "Network Port", extra: "Port 161 · UDP" },
  { term: "SNMP Trap",   definition: "Simple Network Management Protocol",    detail: "Unsolicited alerts sent from device to manager",        category: "Network Port", extra: "Port 162 · UDP" },
  { term: "LDAP",        definition: "Lightweight Directory Access Protocol", detail: "Queries directory services such as Active Directory",   category: "Network Port", extra: "Port 389 · TCP/UDP" },
  { term: "HTTPS",       definition: "Hypertext Transfer Protocol Secure",    detail: "Encrypted web browsing using TLS",                      category: "Network Port", extra: "Port 443 · TCP" },
  { term: "SMB",         definition: "Server Message Block",                  detail: "File and printer sharing on modern Windows networks",   category: "Network Port", extra: "Port 445 · TCP" },
  { term: "SMTPS",       definition: "SMTP Secure",                           detail: "Encrypted email sending using TLS",                     category: "Network Port", extra: "Port 465 · TCP" },
  { term: "SMTP Submit", definition: "Simple Mail Transfer Protocol",         detail: "Authenticated email submission from client to server",  category: "Network Port", extra: "Port 587 · TCP" },
  { term: "LDAPS",       definition: "LDAP Secure",                           detail: "Encrypted directory service queries using TLS",         category: "Network Port", extra: "Port 636 · TCP" },
  { term: "IMAPS",       definition: "IMAP Secure",                           detail: "Encrypted email retrieval using TLS",                   category: "Network Port", extra: "Port 993 · TCP" },
  { term: "POP3S",       definition: "POP3 Secure",                           detail: "Encrypted email download using TLS",                    category: "Network Port", extra: "Port 995 · TCP" },
  { term: "RDP",         definition: "Remote Desktop Protocol",               detail: "Remote graphical desktop access to Windows systems",    category: "Network Port", extra: "Port 3389 · TCP" },
];
