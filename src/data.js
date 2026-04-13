// ============================================================
//  DATA.JS — THE ONLY FILE YOU NEED TO EDIT TO SWAP SUBJECTS
// ============================================================
//
//  HOW IT WORKS
//  ------------
//  Fill in DECK_CONFIG and ITEMS below.
//  The flashcard and MCQ engine reads these automatically.
//  Nothing else in the app needs to change.
//
//  DECK_CONFIG tells the app:
//    - What to call itself (title, subtitle)
//    - What your two flashcard "sides" represent
//    - What category labels to show on MCQ cards
//    - What question templates to use
//
//  ITEMS is your actual data — one object per concept.
//  Each object must have exactly the fields named in DECK_CONFIG.fields.
//
// ============================================================


// ------------------------------------------------------------
//  STEP 1 — DESCRIBE YOUR DECK
// ------------------------------------------------------------

export const DECK_CONFIG = {

  // Displayed in the app header and landing page
  title: "Port Mastery",
  subtitle: "CompTIA A+ Core 1 · 220-1201",

  // The four field names your ITEMS objects will use.
  // Think of these as column headers for your data table.
  //
  // fieldA  = the "primary" identifier shown on flashcard front (deck A)
  //           e.g. port number, Korean word, chemical symbol
  //
  // fieldB  = the "secondary" identifier shown on flashcard front (deck B)
  //           e.g. protocol acronym, romanization, element name
  //
  // fieldC  = the expanded or full form
  //           e.g. full protocol name, English translation, definition
  //
  // fieldD  = a description, usage note, or category
  //           e.g. transport type, part of speech, example sentence
  //
  fields: {
    fieldA: "port",
    fieldB: "protocol",
    fieldC: "full",
    fieldD: "type",
  },

  // Labels shown on the FRONT of flashcards (never the answer itself)
  cardLabels: {
    deckA: "Port Number",   // label above the big text on deck-A cards
    deckB: "Acronym",       // label above the big text on deck-B cards
  },

  // How to format the back of each flashcard.
  // Use {fieldA}, {fieldB}, {fieldC}, {fieldD} as placeholders.
  cardBack: {
    deckA: "{fieldB} — {fieldC}\n{desc}\n[{fieldD}]",
    deckB: "{fieldC}\n{fieldA} · {fieldD}\n{desc}",
  },

  // MCQ band labels — these appear on the colored top strip of each
  // question card. They must NEVER match any answer choice.
  // Rename these to suit your subject.
  mcqTopics: {
    lookupA:    "Port Number",       // "which port number does X use?"
    lookupB:    "Protocol ID",       // "port N belongs to which protocol?"
    expansion:  "Acronym Expansion", // "what does X stand for?"
    byDesc:     "Protocol Function", // "which protocol is described as...?"
    typeByB:    "Transport Type",    // "what transport does X use?"
    typeByA:    "Transport Type",    // "port N uses which transport?"
    funcByB:    "Port Function",     // "what is the primary function of X?"
    fullToA:    "Port Lookup",       // "[full name] — what port?"
  },

  // MCQ question templates.
  // Use {fieldA}, {fieldB}, {fieldC}, {fieldD}, {desc} as placeholders.
  mcqTemplates: {
    lookupA:   "Which {fieldALabel} is used by {fieldB} ({fieldC})?",
    lookupB:   "{fieldALabel} {fieldA} belongs to which protocol?",
    expansion: "What does {fieldB} stand for?",
    byDesc:    "Which protocol is described as: \"{desc}\"?",
    typeByB:   "What transport protocol(s) does {fieldB} ({fieldALabel} {fieldA}) use?",
    typeByA:   "{fieldALabel} {fieldA} uses which transport type?",
    funcByB:   "What is the primary function of {fieldB} running on {fieldALabel} {fieldA}?",
    fullToA:   "{fieldC} — what {fieldALabel} does this protocol use?",
  },

  // Human-readable label for fieldA, used inside question templates above.
  // e.g. "Port", "Lesson", "Card number"
  fieldALabel: "Port",

};


// ------------------------------------------------------------
//  STEP 2 — ADD YOUR DATA
// ------------------------------------------------------------

export const ITEMS = [
  { port: "20",   protocol: "FTP",     full: "File Transfer Protocol",               desc: "Data transfer channel (active mode)",              type: "TCP"     },
  { port: "21",   protocol: "FTP",     full: "File Transfer Protocol",               desc: "Control/command channel",                          type: "TCP"     },
  { port: "22",   protocol: "SSH",     full: "Secure Shell",                         desc: "Encrypted remote CLI access",                      type: "TCP"     },
  { port: "23",   protocol: "Telnet",  full: "Telnet",                               desc: "Unencrypted remote CLI (insecure)",                 type: "TCP"     },
  { port: "25",   protocol: "SMTP",    full: "Simple Mail Transfer Protocol",        desc: "Sending/relaying email",                           type: "TCP"     },
  { port: "53",   protocol: "DNS",     full: "Domain Name System",                   desc: "Resolves domain names to IPs",                     type: "UDP/TCP" },
  { port: "67",   protocol: "DHCP",    full: "Dynamic Host Configuration Protocol",  desc: "Server assigns IP addresses",                      type: "UDP"     },
  { port: "68",   protocol: "DHCP",    full: "Dynamic Host Configuration Protocol",  desc: "Client receives IP assignment",                    type: "UDP"     },
  { port: "80",   protocol: "HTTP",    full: "Hypertext Transfer Protocol",          desc: "Unencrypted web browsing",                         type: "TCP"     },
  { port: "110",  protocol: "POP3",    full: "Post Office Protocol v3",              desc: "Downloads email from server (unencrypted)",        type: "TCP"     },
  { port: "137",  protocol: "NetBIOS", full: "Network Basic Input/Output System",    desc: "Name service for Windows networking",              type: "UDP"     },
  { port: "138",  protocol: "NetBIOS", full: "Network Basic Input/Output System",    desc: "Datagram service for Windows networking",          type: "UDP"     },
  { port: "139",  protocol: "NetBIOS", full: "Network Basic Input/Output System",    desc: "Session service, legacy SMB",                      type: "TCP"     },
  { port: "143",  protocol: "IMAP",    full: "Internet Message Access Protocol",     desc: "Retrieves email, keeps on server (unencrypted)",   type: "TCP"     },
  { port: "161",  protocol: "SNMP",    full: "Simple Network Management Protocol",   desc: "Monitors/manages network devices",                 type: "UDP"     },
  { port: "162",  protocol: "SNMP",    full: "Simple Network Management Protocol",   desc: "Trap messages from devices to manager",            type: "UDP"     },
  { port: "389",  protocol: "LDAP",    full: "Lightweight Directory Access Protocol",desc: "Directory queries (e.g., Active Directory)",       type: "TCP/UDP" },
  { port: "443",  protocol: "HTTPS",   full: "Hypertext Transfer Protocol Secure",   desc: "Encrypted web browsing (TLS)",                     type: "TCP"     },
  { port: "445",  protocol: "SMB",     full: "Server Message Block",                 desc: "File/printer sharing, modern Windows",             type: "TCP"     },
  { port: "465",  protocol: "SMTPS",   full: "SMTP Secure",                          desc: "Encrypted email sending (TLS)",                    type: "TCP"     },
  { port: "587",  protocol: "SMTP",    full: "Simple Mail Transfer Protocol",        desc: "Authenticated email submission",                   type: "TCP"     },
  { port: "636",  protocol: "LDAPS",   full: "LDAP Secure",                          desc: "Encrypted directory queries",                      type: "TCP"     },
  { port: "993",  protocol: "IMAPS",   full: "IMAP Secure",                          desc: "Encrypted email retrieval",                        type: "TCP"     },
  { port: "995",  protocol: "POP3S",   full: "POP3 Secure",                          desc: "Encrypted email download",                         type: "TCP"     },
  { port: "3389", protocol: "RDP",     full: "Remote Desktop Protocol",              desc: "Remote graphical desktop access",                  type: "TCP"     },
];


// ------------------------------------------------------------
//  KOREAN VOCABULARY EXAMPLE (commented out)
//  To use: rename fields above, uncomment this, delete ITEMS above
// ------------------------------------------------------------

// export const DECK_CONFIG = {
//   title: "Korean Vocabulary",
//   subtitle: "Beginner — TOPIK I",
//   fields: { fieldA: "korean", fieldB: "romanization", fieldC: "english", fieldD: "partOfSpeech" },
//   cardLabels: { deckA: "Korean", deckB: "Romanization" },
//   cardBack: {
//     deckA: "{fieldB} · {fieldC}\n{desc}\n[{fieldD}]",
//     deckB: "{fieldC}\n{fieldA} · {fieldD}\n{desc}",
//   },
//   mcqTopics: {
//     lookupA: "Korean Script", lookupB: "Romanization", expansion: "English Meaning",
//     byDesc: "Word in Context", typeByB: "Part of Speech", typeByA: "Word Class",
//     funcByB: "Usage", fullToA: "Script Lookup",
//   },
//   mcqTemplates: {
//     lookupA:   "Which Korean word means \"{fieldC}\"?",
//     lookupB:   "What is the romanization of \"{fieldA}\"?",
//     expansion: "What does \"{fieldB}\" mean in English?",
//     byDesc:    "Which word fits this description: \"{desc}\"?",
//     typeByB:   "What part of speech is \"{fieldB}\" ({fieldC})?",
//     typeByA:   "\"{fieldA}\" — what part of speech is this?",
//     funcByB:   "How would you use \"{fieldB}\" in a sentence?",
//     fullToA:   "\"{fieldC}\" — how do you write this in Korean?",
//   },
//   fieldALabel: "Word",
// };
//
// export const ITEMS = [
//   { korean: "사과", romanization: "sagwa",   english: "apple",  partOfSpeech: "noun",    desc: "A common fruit" },
//   { korean: "물",   romanization: "mul",     english: "water",  partOfSpeech: "noun",    desc: "Essential liquid" },
//   { korean: "먹다", romanization: "meokda",  english: "to eat", partOfSpeech: "verb",    desc: "Eating action" },
//   { korean: "크다", romanization: "keuda",   english: "big",    partOfSpeech: "adjective",desc: "Large in size" },
// ];

// Make ITEMS available globally for MCQ explanations
if (typeof window !== "undefined") window.ITEMS = ITEMS;