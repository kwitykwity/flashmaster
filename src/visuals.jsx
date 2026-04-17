// ============================================================
//  VISUALS.JS — DO NOT EDIT (unless adding new illustrations)
//  SVG illustration functions for flashcard backs.
//  Each function returns a JSX-compatible SVG element.
//  Keys must match the `visual` field in data files.
// ============================================================

const C = {
  gold:    "#c8a000",
  blue:    "#3a7abf",
  dkblue:  "#1a3a5a",
  green:   "#1a3a1a",
  dkgreen: "#2a6a2a",
  purple:  "#4a2a6a",
  dkpurp:  "#2a1a4a",
  gray:    "#444",
  ltgray:  "#888",
  bg:      "#111",
  wire:    "#555",
  pcb:     "#1a3a1a",
  pcbblue: "#1a1a3a",
};

function SVGWrap({ w = 220, h = 160, children }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      style={{ maxWidth: w, display: "block", margin: "0 auto" }}
      role="img"
    >
      {children}
    </svg>
  );
}

// ── RJ-45 ─────────────────────────────────────────────────────
export function visual_rj45() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="60" y="20" width="100" height="70" rx="4" fill={C.blue} stroke="#1a5a9f" strokeWidth="2"/>
      <rect x="70" y="30" width="80" height="48" rx="2" fill={C.dkblue}/>
      <rect x="85" y="22" width="50" height="10" rx="2" fill="#2a6aaf"/>
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={74 + i*9} y={34} width={6} height={38} rx="1"
          fill={["#FF8C00","#FF8C00","#228B22","#1E90FF","#1E90FF","#228B22","#8B0000","#8B0000"][i]}
          opacity={[1,0.5,1,1,0.5,0.5,1,0.5][i]}/>
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <text key={i} x={77 + i*9} y={80} textAnchor="middle"
          style={{fontSize:"7px", fill:C.gold, fontFamily:"system-ui"}}>
          {i+1}
        </text>
      ))}
      <rect x="85" y="90" width="50" height="32" rx="3" fill={C.wire}/>
      <text x="110" y="140" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        8P8C · Ethernet
      </text>
      <text x="110" y="152" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Cat5e / Cat6 / Cat6a
      </text>
    </SVGWrap>
  );
}

// ── RJ-11 ─────────────────────────────────────────────────────
export function visual_rj11() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="75" y="20" width="70" height="70" rx="4" fill="#7b68ee" stroke="#5a4abf" strokeWidth="2"/>
      <rect x="83" y="30" width="54" height="48" rx="2" fill="#2a1a5a"/>
      <rect x="93" y="22" width="34" height="10" rx="2" fill="#5a4abf"/>
      {[0,1,2,3].map(i => (
        <rect key={i} x={88 + i*11} y={34} width={8} height={38} rx="1"
          fill={[C.gold,"#888",C.gold,"#888"][i]}/>
      ))}
      {[0,1,2,3].map(i => (
        <text key={i} x={92 + i*11} y={80} textAnchor="middle"
          style={{fontSize:"7px", fill:C.gold, fontFamily:"system-ui"}}>{i+1}</text>
      ))}
      <rect x="93" y="90" width="34" height="32" rx="3" fill={C.wire}/>
      <text x="110" y="140" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        4P4C · Telephone
      </text>
      <text x="110" y="152" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        DSL / Landline
      </text>
    </SVGWrap>
  );
}

// ── USB-A ─────────────────────────────────────────────────────
export function visual_usba() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="55" y="30" width="110" height="55" rx="5" fill={C.gray} stroke="#666" strokeWidth="2"/>
      <rect x="63" y="38" width="94" height="38" rx="2" fill="#1a1a2e"/>
      {[0,1,2,3].map(i => (
        <rect key={i} x={68 + i*20} y={42} width={14} height={30} rx="1" fill={C.gold}/>
      ))}
      <rect x="80" y="85" width="60" height="35" rx="3" fill={C.wire}/>
      <text x="110" y="132" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        USB Type-A
      </text>
      <text x="110" y="145" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        USB 2.0 / 3.0 / 3.1
      </text>
      <text x="110" y="157" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Rectangular host connector
      </text>
    </SVGWrap>
  );
}

// ── USB-B ─────────────────────────────────────────────────────
export function visual_usbb() {
  return (
    <SVGWrap w={220} h={160}>
      <polygon points="75,25 145,25 155,45 155,85 65,85 65,45" fill={C.gray} stroke="#666" strokeWidth="2"/>
      <polygon points="80,32 140,32 148,48 148,78 72,78 72,48" fill="#1a1a2e"/>
      {[0,1,2,3].map(i => (
        <rect key={i} x={80 + i*18} y={38} width={12} height={34} rx="1" fill={C.gold}/>
      ))}
      <rect x="82" y="85" width="56" height="35" rx="3" fill={C.wire}/>
      <text x="110" y="134" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        USB Type-B
      </text>
      <text x="110" y="147" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Square · Printer / scanner
      </text>
    </SVGWrap>
  );
}

// ── USB-C ─────────────────────────────────────────────────────
export function visual_usbc() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="55" y="38" width="110" height="50" rx="25" fill={C.gray} stroke="#777" strokeWidth="2"/>
      <rect x="63" y="46" width="94" height="34" rx="17" fill="#1a1a2e"/>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={70 + i*16} y={50} width={10} height={12} rx="1" fill={C.gold}/>
      ))}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={70 + i*16} y={68} width={10} height={12} rx="1" fill={C.gold}/>
      ))}
      <text x="110" y="100" textAnchor="middle" style={{fontSize:"11px", fill:"#9B6FA0", fontFamily:"system-ui", fontWeight:"bold"}}>⇅</text>
      <rect x="82" y="88" width="56" height="30" rx="3" fill={C.wire}/>
      <text x="110" y="132" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        USB Type-C · 24-pin
      </text>
      <text x="110" y="145" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Reversible · USB3.2/USB4/TB3/4
      </text>
      <text x="110" y="157" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Up to 240W · Video capable
      </text>
    </SVGWrap>
  );
}

// ── Micro USB ─────────────────────────────────────────────────
export function visual_microusb() {
  return (
    <SVGWrap w={220} h={160}>
      <polygon points="70,32 150,32 158,50 158,82 62,82 62,50" fill={C.gray} stroke="#666" strokeWidth="2"/>
      <polygon points="76,40 144,40 150,54 150,74 70,74 70,54" fill="#1a1a2e"/>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={76 + i*14} y={46} width={10} height={24} rx="1" fill={C.gold}/>
      ))}
      <rect x="82" y="82" width="56" height="30" rx="3" fill={C.wire}/>
      <text x="110" y="126" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        Micro-USB · 5-pin
      </text>
      <text x="110" y="139" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Older Android devices
      </text>
      <text x="110" y="152" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Not reversible · USB 2.0
      </text>
    </SVGWrap>
  );
}

// ── Lightning ─────────────────────────────────────────────────
export function visual_lightning() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="72" y="35" width="76" height="48" rx="6" fill={C.gray} stroke="#666" strokeWidth="2"/>
      <rect x="80" y="43" width="60" height="32" rx="4" fill="#1a1a2e"/>
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={83 + i*7} y={47} width={4} height={10} rx="0.5" fill={C.gold}/>
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={83 + i*7} y={61} width={4} height={10} rx="0.5" fill={C.gold}/>
      ))}
      <rect x="90" y="83" width="40" height="30" rx="3" fill={C.wire}/>
      <text x="110" y="127" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        Apple Lightning
      </text>
      <text x="110" y="140" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        8-pin · Reversible
      </text>
      <text x="110" y="153" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        iPhone pre-2023
      </text>
    </SVGWrap>
  );
}

// ── HDMI ──────────────────────────────────────────────────────
export function visual_hdmi() {
  return (
    <SVGWrap w={220} h={160}>
      <polygon points="45,28 175,28 185,58 185,88 35,88 35,58" fill="#222" stroke="#555" strokeWidth="2"/>
      <polygon points="50,34 170,34 178,60 178,82 42,82 42,60" fill="#111"/>
      {Array.from({length:15},(_,i) => (
        <rect key={i} x={52 + i*8} y={38} width={5} height={38} rx="0.5" fill={C.gold}/>
      ))}
      <rect x="75" y="88" width="70" height="30" rx="3" fill={C.wire}/>
      <text x="110" y="132" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        HDMI · 19-pin trapezoidal
      </text>
      <text x="110" y="145" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Digital audio + video
      </text>
      <text x="110" y="157" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Up to 8K · 48Gbps (2.1)
      </text>
    </SVGWrap>
  );
}

// ── DisplayPort ───────────────────────────────────────────────
export function visual_displayport() {
  return (
    <SVGWrap w={220} h={160}>
      <polygon points="35,28 175,28 185,44 185,88 35,88" fill="#222" stroke="#555" strokeWidth="2"/>
      <polygon points="40,34 170,34 178,48 178,82 40,82" fill="#111"/>
      {Array.from({length:14},(_,i) => (
        <rect key={i} x={46 + i*9} y={38} width={6} height={38} rx="0.5" fill={C.gold}/>
      ))}
      <rect x="75" y="88" width="70" height="30" rx="3" fill={C.wire}/>
      <text x="110" y="132" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        DisplayPort · 20-pin
      </text>
      <text x="110" y="145" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Notched corner · Digital video
      </text>
      <text x="110" y="157" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Up to 80Gbps (DP 2.1)
      </text>
    </SVGWrap>
  );
}

// ── VGA ───────────────────────────────────────────────────────
export function visual_vga() {
  return (
    <SVGWrap w={220} h={160}>
      <polygon points="30,24 190,24 198,70 22,70" fill="#1a3a5c" stroke="#2a5a8c" strokeWidth="2"/>
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={50 + i*26} cy={38} r="4" fill="#000" stroke="#888" strokeWidth="1"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={63 + i*26} cy={52} r="4" fill="#000" stroke="#888" strokeWidth="1"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={76 + i*26} cy={63} r="4" fill="#000" stroke="#888" strokeWidth="1"/>
      ))}
      <rect x="75" y="70" width="70" height="30" rx="3" fill={C.wire}/>
      <text x="110" y="116" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        VGA · DE-15 · 15-pin
      </text>
      <text x="110" y="129" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Analog video only · Legacy
      </text>
      <text x="110" y="142" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Blue trapezoidal connector
      </text>
    </SVGWrap>
  );
}

// ── DVI ───────────────────────────────────────────────────────
export function visual_dvi() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="25" y="25" width="170" height="65" rx="4" fill="#222" stroke="#555" strokeWidth="2"/>
      <rect x="32" y="32" width="156" height="51" rx="2" fill="#111"/>
      {Array.from({length:8},(_,i) => (
        <circle key={i} cx={38 + i*14} cy={44} r="3" fill={C.gold}/>
      ))}
      {Array.from({length:8},(_,i) => (
        <circle key={i} cx={38 + i*14} cy={57} r="3" fill={C.gold}/>
      ))}
      {Array.from({length:4},(_,i) => (
        <circle key={i} cx={38 + i*14} cy={70} r="3" fill={C.gold}/>
      ))}
      <rect x="170" y={44} width="10" height="24" rx="1" fill={C.gold}/>
      <rect x="75" y="90" width="70" height="28" rx="3" fill={C.wire}/>
      <text x="110" y="132" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        DVI · Digital Visual Interface
      </text>
      <text x="110" y="145" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        DVI-D / DVI-A / DVI-I
      </text>
      <text x="110" y="157" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Digital and/or analog video
      </text>
    </SVGWrap>
  );
}

// ── SATA ──────────────────────────────────────────────────────
export function visual_sata() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="50" y="30" width="120" height="22" rx="2" fill={C.gray} stroke="#666" strokeWidth="1.5"/>
      <rect x="50" y="52" width="50" height="22" rx="2" fill={C.gray} stroke="#666" strokeWidth="1.5"/>
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={55 + i*10} y={34} width={6} height={12} rx="0.5" fill={C.gold}/>
      ))}
      <rect x="65" y="74" width="90" height="35" rx="3" fill={C.wire}/>
      <text x="110" y="122" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        SATA Data · 7-pin L-shape
      </text>
      <text x="110" y="135" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        HDD / SSD / Optical
      </text>
      <text x="110" y="148" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Up to 6Gbps (SATA III)
      </text>
    </SVGWrap>
  );
}

// ── Molex ─────────────────────────────────────────────────────
export function visual_molex() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="60" y="30" width="100" height="50" rx="3" fill="#ddd" stroke="#aaa" strokeWidth="2"/>
      <rect x="66" y="36" width="88" height="38" rx="2" fill="#bbb"/>
      {[0,1,2,3].map(i => (
        <circle key={i} cx={76 + i*24} cy={55} r="8" fill="#888" stroke="#666" strokeWidth="1"/>
      ))}
      {[0,1,2,3].map(i => (
        <circle key={i} cx={76 + i*24} cy={55} r="4" fill={["#f00","#000","#f00","#ff0"][i]} opacity={0.8}/>
      ))}
      <rect x="78" y="80" width="64" height="32" rx="3" fill={C.wire}/>
      <text x="110" y="126" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        Molex · 4-pin
      </text>
      <text x="110" y="139" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        12V + 5V · White plastic
      </text>
      <text x="110" y="152" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Legacy drives / fans
      </text>
    </SVGWrap>
  );
}

// ── Coaxial ───────────────────────────────────────────────────
export function visual_coaxial() {
  return (
    <SVGWrap w={220} h={160}>
      <circle cx="110" cy="68" r="50" fill={C.gray} stroke="#666" strokeWidth="2"/>
      <circle cx="110" cy="68" r="38" fill="#222"/>
      <circle cx="110" cy="68" r="26" fill="#888" stroke="#aaa" strokeWidth="1"/>
      <circle cx="110" cy="68" r="12" fill={C.gold}/>
      <rect x="82" y="118" width="56" height="16" rx="8" fill={C.gray} stroke="#777" strokeWidth="1"/>
      <circle cx="110" cy="126" r="5" fill={C.gold}/>
      <text x="110" y="146" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        Coaxial · F-type / BNC
      </text>
      <text x="110" y="158" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Center conductor + shield
      </text>
    </SVGWrap>
  );
}

// ── Fiber LC ──────────────────────────────────────────────────
export function visual_lc() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="70" y="20" width="36" height="80" rx="4" fill="#2196F3" stroke="#1565C0" strokeWidth="2"/>
      <rect x="106" y="20" width="36" height="80" rx="4" fill="#2196F3" stroke="#1565C0" strokeWidth="2"/>
      <rect x="76" y="28" width="24" height="60" rx="2" fill="#0D47A1"/>
      <rect x="112" y="28" width="24" height="60" rx="2" fill="#0D47A1"/>
      <circle cx="88" cy="58" r="6" fill="#81D4FA"/>
      <circle cx="88" cy="58" r="3" fill="#fff" opacity={0.9}/>
      <circle cx="124" cy="58" r="6" fill="#81D4FA"/>
      <circle cx="124" cy="58" r="3" fill="#fff" opacity={0.9}/>
      <rect x="70" y="100" width="72" height="20" rx="3" fill={C.wire}/>
      <text x="110" y="135" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        LC Connector · Duplex
      </text>
      <text x="110" y="148" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Small form-factor fiber
      </text>
      <text x="110" y="160" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Push-pull latch · SMF/MMF
      </text>
    </SVGWrap>
  );
}

// ── Fiber SC ──────────────────────────────────────────────────
export function visual_sc() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="76" y="18" width="56" height="82" rx="4" fill="#FF9800" stroke="#E65100" strokeWidth="2"/>
      <rect x="83" y="26" width="42" height="60" rx="2" fill="#BF360C"/>
      <circle cx="104" cy="56" r="10" fill="#FFCC80"/>
      <circle cx="104" cy="56" r="5" fill="#fff" opacity={0.9}/>
      <rect x="85" y="100" width="38" height="18" rx="3" fill={C.wire}/>
      <text x="110" y="133" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        SC Connector
      </text>
      <text x="110" y="146" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Square · Push-pull · Snap-in
      </text>
      <text x="110" y="158" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Larger than LC · SMF/MMF
      </text>
    </SVGWrap>
  );
}

// ── DB-9 Serial ───────────────────────────────────────────────
export function visual_db9() {
  return (
    <SVGWrap w={220} h={160}>
      <polygon points="40,28 180,28 188,58 188,88 32,88 32,58" fill="#444" stroke="#666" strokeWidth="2"/>
      <polygon points="46,34 174,34 180,60 180,82 40,82 40,60" fill="#222"/>
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={58 + i*26} cy={50} r="5" fill={C.gold}/>
      ))}
      {[0,1,2,3].map(i => (
        <circle key={i} cx={71 + i*26} cy={68} r="5" fill={C.gold}/>
      ))}
      <rect x="75" y="88" width="70" height="30" rx="3" fill={C.wire}/>
      <text x="110" y="132" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        DB-9 · RS-232 Serial
      </text>
      <text x="110" y="145" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        9-pin D-sub · COM port
      </text>
      <text x="110" y="157" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Male on PC · Legacy serial
      </text>
    </SVGWrap>
  );
}

// ── DDR3 RAM ──────────────────────────────────────────────────
export function visual_ddr3() {
  return (
    <SVGWrap w={220} h={130}>
      <rect x="10" y="20" width="200" height="50" rx="3" fill={C.pcb} stroke={C.dkgreen} strokeWidth="1.5"/>
      {Array.from({length:8},(_,i) => (
        <rect key={i} x={16 + i*24} y={26} width={18} height={16} rx="2" fill="#111" stroke="#333" strokeWidth="1"}/>
      ))}
      <rect x="10" y="66" width="180" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="130" y="64" width="12" height="12" rx="1" fill="#0e0e0e"/>
      <text x="110" y="90" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>240-pin · Offset notch</text>
      <text x="110" y="103" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>DDR3 DIMM</text>
      <text x="110" y="116" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>1.5V · 800–2133 MHz · Desktop</text>
    </SVGWrap>
  );
}

// ── DDR4 RAM ──────────────────────────────────────────────────
export function visual_ddr4() {
  return (
    <SVGWrap w={220} h={130}>
      <rect x="10" y="20" width="200" height="50" rx="3" fill={C.pcb} stroke={C.dkgreen} strokeWidth="1.5"/>
      {Array.from({length:8},(_,i) => (
        <rect key={i} x={16 + i*24} y={26} width={18} height={16} rx="2" fill="#111" stroke="#333" strokeWidth="1"}/>
      ))}
      <rect x="10" y="66" width="200" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="108" y="64" width="12" height="12" rx="1" fill="#0e0e0e"/>
      <text x="110" y="90" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>288-pin · Offset notch (left-center)</text>
      <text x="110" y="103" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>DDR4 DIMM</text>
      <text x="110" y="116" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>1.2V · 2133–3200 MHz · Desktop</text>
    </SVGWrap>
  );
}

// ── DDR5 RAM ──────────────────────────────────────────────────
export function visual_ddr5() {
  return (
    <SVGWrap w={220} h={130}>
      <rect x="10" y="20" width="200" height="50" rx="3" fill={C.pcbblue} stroke="#3a3a8a" strokeWidth="1.5"/>
      {Array.from({length:10},(_,i) => (
        <rect key={i} x={12 + i*20} y={26} width={14} height={16} rx="2" fill="#111" stroke="#333" strokeWidth="1"}/>
      ))}
      <rect x="10" y="66" width="200" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="130" y="64" width="12" height="12" rx="1" fill="#0e0e0e"/>
      <text x="110" y="90" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>288-pin · Center notch</text>
      <text x="110" y="103" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>DDR5 DIMM</text>
      <text x="110" y="116" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>1.1V · 4800–6400 MHz · On-die ECC</text>
    </SVGWrap>
  );
}

// ── SO-DIMM ───────────────────────────────────────────────────
export function visual_sodimm() {
  return (
    <SVGWrap w={220} h={130}>
      <rect x="30" y="24" width="160" height="44" rx="3" fill={C.pcb} stroke={C.dkgreen} strokeWidth="1.5"/>
      {Array.from({length:6},(_,i) => (
        <rect key={i} x={36 + i*24} y={30} width={18} height={14} rx="2" fill="#111" stroke="#333" strokeWidth="1"}/>
      ))}
      <rect x="30" y="64" width="148" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="120" y="62" width="10" height="10" rx="1" fill="#0e0e0e"/>
      <text x="110" y="90" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>DDR4: 260-pin · DDR5: 262-pin</text>
      <text x="110" y="103" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>SO-DIMM</text>
      <text x="110" y="116" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>Laptop / NUC / SFF · Half length</text>
    </SVGWrap>
  );
}

// ── HDD ───────────────────────────────────────────────────────
export function visual_hdd() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="30" y="20" width="160" height="100" rx="6" fill="#2a2a2a" stroke="#444" strokeWidth="2"/>
      <rect x="38" y="28" width="144" height="54" rx="3" fill="#1a1a1a"/>
      <circle cx="110" cy="55" r="22" fill="#333" stroke="#555" strokeWidth="1.5"/>
      <circle cx="110" cy="55" r="14" fill="#222"/>
      <circle cx="110" cy="55" r="5" fill="#555"/>
      <line x1="110" y1="33" x2="110" y2="77" stroke="#444" strokeWidth="1"/>
      <line x1="88" y1="55" x2="132" y2="55" stroke="#444" strokeWidth="1"/>
      <rect x="38" y="90" width="100" height="22" rx="2" fill="#111"/>
      <rect x="142" y="90" width="40" height="8" rx="1" fill="#555"/>
      <text x="110" y="136" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        HDD · 3.5" Desktop
      </text>
      <text x="110" y="149" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        Spinning platters · SATA
      </text>
      <text x="110" y="161" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        5400–7200 RPM
      </text>
    </SVGWrap>
  );
}

// ── 2.5" SSD ──────────────────────────────────────────────────
export function visual_ssd25() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="30" y="25" width="160" height="100" rx="6" fill="#2a2a2a" stroke="#444" strokeWidth="2"/>
      <rect x="38" y="33" width="144" height="58" rx="3" fill="#1a1a2e"/>
      <text x="110" y="58" textAnchor="middle" style={{fontSize:"9px", fill:"#333", fontFamily:"system-ui"}}>SOLID STATE DRIVE</text>
      {Array.from({length:4},(_,i) => (
        <rect key={i} x={44 + i*34} y={64} width={26} height={18} rx="2" fill="#111" stroke="#222" strokeWidth="1"/>
      ))}
      <rect x="38" y="100" width="90" height="18" rx="2" fill="#111"/>
      <rect x="132" y="100" width="40" height="8" rx="1" fill="#555"/>
      <text x="110" y="140" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>
        2.5" SATA SSD
      </text>
      <text x="110" y="153" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>
        NAND Flash · No moving parts
      </text>
    </SVGWrap>
  );
}

// ── NVMe M.2 ──────────────────────────────────────────────────
export function visual_nvme() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="88" y="14" width="44" height="120" rx="3" fill={C.pcb} stroke={C.dkgreen} strokeWidth="1.5"/>
      <rect x="92" y="20" width="16" height="16" rx="2" fill="#111" stroke="#333" strokeWidth="1"/>
      <rect x="112" y="20" width="16" height="16" rx="2" fill="#111" stroke="#333" strokeWidth="1"/>
      <rect x="92" y="40" width="16" height="16" rx="2" fill="#111" stroke="#333" strokeWidth="1"/>
      <rect x="112" y="40" width="16" height="16" rx="2" fill="#111" stroke="#333" strokeWidth="1"/>
      <rect x="92" y="60" width="16" height="16" rx="2" fill="#111" stroke="#333" strokeWidth="1"/>
      <rect x="112" y="60" width="16" height="16" rx="2" fill="#111" stroke="#333" strokeWidth="1"/>
      <rect x="88" y="126" width="44" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="116" y="124" width="10" height="12" rx="1" fill="#0e0e0e"/>
      <text x="110" y="150" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>NVMe M.2 SSD</text>
      <text x="110" y="162" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>M-key · PCIe · Up to 7GB/s</text>
    </SVGWrap>
  );
}

// ── SD Card ───────────────────────────────────────────────────
export function visual_sdcard() {
  return (
    <SVGWrap w={220} h={160}>
      <polygon points="70,20 150,20 160,36 160,120 70,120" fill="#1565C0" stroke="#0D47A1" strokeWidth="2"/>
      <rect x="76" y="90" width="78" height="24" rx="1" fill="#0D47A1"/>
      {Array.from({length:9},(_,i) => (
        <rect key={i} x={78 + i*8} y={92} width={5} height={20} rx="0.5" fill={C.gold}/>
      ))}
      <text x="110" y="54" textAnchor="middle" style={{fontSize:"10px", fill:"#90CAF9", fontFamily:"system-ui", fontWeight:"bold"}}>SD</text>
      <text x="110" y="70" textAnchor="middle" style={{fontSize:"8px", fill:"#64B5F6", fontFamily:"system-ui"}}>SECURE DIGITAL</text>
      <text x="110" y="140" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>SD Card</text>
      <text x="110" y="153" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>Full / miniSD / microSD</text>
    </SVGWrap>
  );
}

// ── ATX Motherboard ───────────────────────────────────────────
export function visual_atx() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="10" y="10" width="200" height="140" rx="4" fill={C.pcb} stroke={C.dkgreen} strokeWidth="2"/>
      <rect x="16" y="16" width="80" height="40" rx="2" fill="#111" stroke="#222" strokeWidth="1"/>
      <text x="56" y="40" textAnchor="middle" style={{fontSize:"8px", fill:"#444", fontFamily:"system-ui"}}>CPU Socket</text>
      <rect x="100" y="16" width="105" height="22" rx="2" fill="#0a0a1a" stroke="#1a1a4a" strokeWidth="1"/>
      <text x="152" y="30" textAnchor="middle" style={{fontSize:"7px", fill:"#333", fontFamily:"system-ui"}}>RAM Slots (x4)</text>
      {Array.from({length:4},(_,i) => (
        <rect key={i} x={102 + i*25} y={18} width={18} height={18} rx="1" fill="#111" stroke="#2a2a6a" strokeWidth="1"/>
      ))}
      <rect x="16" y="62" width="190" height="14" rx="2" fill="#1a1a0a" stroke="#3a3a0a" strokeWidth="1"/>
      <text x="110" y="72" textAnchor="middle" style={{fontSize:"7px", fill:"#444", fontFamily:"system-ui"}}>PCIe x16</text>
      <rect x="16" y="80" width="190" height="10" rx="1" fill="#111" stroke="#333" strokeWidth="1"/>
      <text x="110" y="88" textAnchor="middle" style={{fontSize:"7px", fill:"#333", fontFamily:"system-ui"}}>PCIe x1</text>
      <rect x="16" y="94" width="190" height="10" rx="1" fill="#111" stroke="#333" strokeWidth="1"/>
      <rect x="16" y="108" width="90" height="30" rx="2" fill="#111" stroke="#222" strokeWidth="1"/>
      <text x="61" y="126" textAnchor="middle" style={{fontSize:"7px", fill:"#333", fontFamily:"system-ui"}}>I/O Panel</text>
      <rect x="120" y="108" width="86" height="30" rx="2" fill="#0a1a0a" stroke="#1a3a1a" strokeWidth="1"/>
      <text x="163" y="126" textAnchor="middle" style={{fontSize:"7px", fill:"#333", fontFamily:"system-ui"}}>SATA Ports</text>
      <text x="110" y="152" textAnchor="middle" style={{fontSize:"9px", fill:"#aaa", fontFamily:"system-ui"}}>ATX · 305×244mm · 7 PCIe slots</text>
    </SVGWrap>
  );
}

// ── PCIe Slot ─────────────────────────────────────────────────
export function visual_pcie() {
  return (
    <SVGWrap w={220} h={130}>
      <rect x="10" y="30" width="200" height="30" rx="2" fill="#1a3a1a" stroke={C.dkgreen} strokeWidth="1.5"/>
      {Array.from({length:16},(_,i) => (
        <rect key={i} x={14 + i*11} y={34} width={7} height={22} rx="0.5" fill="#c8a000" opacity={0.7}/>
      ))}
      <rect x="10" y="60" width="200" height="8" rx="1" fill="#111"/>
      <text x="110" y="86" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>PCIe x16 Slot</text>
      <text x="110" y="99" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>Primary GPU slot · 16 lanes</text>
      <text x="110" y="112" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>PCIe 4.0: 64GB/s · PCIe 5.0: 128GB/s</text>
    </SVGWrap>
  );
}

// ── ATX 24-pin ────────────────────────────────────────────────
export function visual_atx24pin() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="35" y="20" width="150" height="80" rx="4" fill="#ddd" stroke="#aaa" strokeWidth="2"/>
      <rect x="41" y="26" width="138" height="68" rx="2" fill="#ccc"/>
      {Array.from({length:12},(_,i) => (
        <circle key={i} cx={48 + i*11} cy={44} r="4" fill={["#f00","#ff0","#000","#000","#f00","#ff0","#000","#000","#888","#888","#000","#888"][i]} opacity={0.8}/>
      ))}
      {Array.from({length:12},(_,i) => (
        <circle key={i} cx={48 + i*11} cy={70} r="4" fill={["#f00","#f00","#000","#ff0","#888","#000","#f00","#ff0","#888","#000","#888","#000"][i]} opacity={0.8}/>
      ))}
      <text x="110" y="118" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>ATX 24-pin Main Power</text>
      <text x="110" y="131" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>3.3V + 5V + 12V rails</text>
      <text x="110" y="144" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>All modern motherboards</text>
    </SVGWrap>
  );
}

// ── PSU ───────────────────────────────────────────────────────
export function visual_psu() {
  return (
    <SVGWrap w={220} h={160}>
      <rect x="20" y="20" width="180" height="110" rx="6" fill="#333" stroke="#555" strokeWidth="2"/>
      <rect x="28" y="28" width="100" height="94" rx="3" fill="#222"/>
      <circle cx="138" cy="55" r="28" fill="#111" stroke="#444" strokeWidth="2"/>
      <circle cx="138" cy="55" r="20" fill="#1a1a1a"/>
      {Array.from({length:8},(_,i) => (
        <line key={i}
          x1={138 + 12*Math.cos(i*Math.PI/4)}
          y1={55 + 12*Math.sin(i*Math.PI/4)}
          x2={138 + 20*Math.cos(i*Math.PI/4)}
          y2={55 + 20*Math.sin(i*Math.PI/4)}
          stroke="#333" strokeWidth="2"/>
      ))}
      <rect x="130" y="90" width="18" height="28" rx="2" fill="#555"/>
      <text x="110" y="148" textAnchor="middle" style={{fontSize:"10px", fill:"#aaa", fontFamily:"system-ui"}}>Power Supply Unit (PSU)</text>
      <text x="110" y="161" textAnchor="middle" style={{fontSize:"9px", fill:"#666", fontFamily:"system-ui"}}>ATX form factor · 80 Plus rated</text>
    </SVGWrap>
  );
}

// ── Master lookup map ─────────────────────────────────────────
export const VISUAL_MAP = {
  rj45:         visual_rj45,
  rj11:         visual_rj11,
  usba:         visual_usba,
  usbb:         visual_usbb,
  usbc:         visual_usbc,
  microusb:     visual_microusb,
  lightning:    visual_lightning,
  hdmi:         visual_hdmi,
  displayport:  visual_displayport,
  vga:          visual_vga,
  dvi:          visual_dvi,
  sata:         visual_sata,
  molex:        visual_molex,
  coaxial:      visual_coaxial,
  fiber:        visual_lc,
  lc:           visual_lc,
  sc:           visual_sc,
  db9:          visual_db9,
  ddr3:         visual_ddr3,
  ddr4:         visual_ddr4,
  ddr5:         visual_ddr5,
  sodimm:       visual_sodimm,
  hdd:          visual_hdd,
  ssd25:        visual_ssd25,
  nvme:         visual_nvme,
  sdcard:       visual_sdcard,
  atx:          visual_atx,
  pcie:         visual_pcie,
  atx24pin:     visual_atx24pin,
  psu:          visual_psu,
};
