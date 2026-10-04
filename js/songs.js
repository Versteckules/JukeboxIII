// songs.js
// Song-Daten (Base64+ROT13 kodiert) + MIDI-Mapping (37 Songs)
// Format pro Song: { id, display: { title, artist }, answers: [], midiFile: "MIDI51/..." }
// Kodierungs-Pipeline: ROT13 → encodeURIComponent → unescape → btoa (= Base64)
// Dekodierung zur Laufzeit: rot13(decodeURIComponent(escape(atob(encoded))))

// ---------------------------------------------------------------------------
// 1. ROT13-Hilfsfunktion
//    Rotiert nur ASCII a–z / A–Z; Umlaute und alle anderen Zeichen bleiben.
// ---------------------------------------------------------------------------
function rot13(str) {
  return str.replace(/[a-zA-Z]/g, c => {
    const base = c >= 'a' && c <= 'z' ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}

// ---------------------------------------------------------------------------
// 2. Encode- & Decode-Hilfsfunktionen
//    enc(str) → Base64( ROT13( trim(str) ) )
//    dec(str) → ROT13( decodeURIComponent( escape( atob(str) ) ) )
// ---------------------------------------------------------------------------
function enc(str) {
  return btoa(unescape(encodeURIComponent(rot13(str.trim()))));
}

function dec(str) {
  return rot13(decodeURIComponent(escape(atob(str))));
}

// ---------------------------------------------------------------------------
// 3. Song-Array (MIDI-Mapping) – 37 Songs
//    HINWEIS: melody / melodyIndex entfallen vollständig.
//    Jeder Song enthält midiFile mit dem relativen Pfad zur MIDI-Datei.
//    ALLE Strings sind via enc() vorverschlüsselt (ROT13 + Base64). Kein Klartext!
// ---------------------------------------------------------------------------
const SONGS = [
  // Song 1
  { id: 1, display: { title: 'UW5xcWwgUGJieQ==', artist: 'T2JhcmwgWi4=' },
    answers: [ 'cW5xcWwgcGJieQ==', 'b2Jhcmwgeg==', 'b2Jhcmwgei4=' ],
    midiFile: 'MIDI51/A1.mid' },

  // Song 2
  { id: 2, display: { title: 'QmlyZSBndXIgVXZ5eWYgbmFxIFNuZSBOam5s', artist: 'WXJxIE1yY2NyeXZh' },
    answers: [ 'YmlyZSBndXIgdXZ5eWYgbmFxIHNuZSBuam5s', 'eXJxIG1yY2NyeXZh' ],
    midiFile: 'MIDI51/A2.mid' },

  // Song 3
  { id: 3, display: { title: 'R3VlcnIgWXZnZ3lyIE92ZXFm', artist: 'T2JvIFpuZXlybA==' },
    answers: [ 'Z3VlcnIgeXZnZ3lyIG92ZXFm', 'b2JvIHpuZXlybA==' ],
    midiFile: 'MIDI51/A3.mid' },

  // Song 4
  { id: 4, display: { title: 'TmNicG55bGNmcg==', artist: 'UHZ0bmVyZ2dyZiBOc2dyZSBGcms=' },
    answers: [ 'bmNicG55bGNmcg==', 'cHZ0bmVyZ2dyZiBuc2dyZSBmcms=' ],
    midiFile: 'MIDI51/A4.mid' },

  // Song 5
  { id: 5, display: { title: 'UWVudGJmZ3JuIFF2YSBHcnY=', artist: 'Qi1NYmFy' },
    answers: [ 'cWVudGJmZ3JuIHF2YSBncnY=', 'Yi1tYmFy', 'Ym1iYXI=', 'dW52cWhwdnY=', 'cWVudGJmZ3JuIHF2YSBncnYgYiBtYmFy' ],
    midiFile: 'MIDI51/A5.mid' },

  // Song 6
  { id: 6, display: { title: 'VmcnZiBabCBZdnNy', artist: 'T2JhIFdiaXY=' },
    answers: [ 'dmdmIHpsIHl2c3I=', 'dmcnZiB6bCB5dnNy', 'b2JhIHdiaXY=' ],
    midiFile: 'MIDI51/B1.mid' },

  // Song 7
  { id: 7, display: { title: 'Wm5wbmVyYW4=', artist: 'WWJmIFFyeSBFdmI=' },
    answers: [ 'em5wbmVyYW4=', 'eWJmIHFyeSBldmI=' ],
    midiFile: 'MIDI51/B2.mid' },

  // Song 8
  { id: 8, display: { title: 'UGJhZGhyZmcgYnMgQ25lbnF2ZnI=', artist: 'SW5hdHJ5dmY=' },
    answers: [ 'cGJhZGhyZmcgYnMgY25lbnF2ZnI=', 'aW5hdHJ5dmY=' ],
    midiFile: 'MIDI51/B3.mid' },

  // Song 9
  { id: 9, display: { title: 'T3Z0IHZhIFduY25h', artist: 'TnljdW5pdnl5cg==' },
    answers: [ 'b3Z0IHZhIHduY25h', 'bnljdW5pdnl5cg==' ],
    midiFile: 'MIDI51/B4.mid' },

  // Song 10
  { id: 10, display: { title: 'Rmhlc3ZhJyBILkYuTi4=', artist: 'R3VyIE9ybnB1IE9ibGY=' },
    answers: [ 'Zmhlc3ZhIGhmbg==', 'Zmhlc3ZhJyBoLmYubi4=', 'Z3VyIG9ybnB1IG9ibGY=', 'b3JucHUgb2JsZg==' ],
    midiFile: 'MIDI51/B5.mid' },

  // Song 11
  { id: 11, display: { title: 'WWJmdmF0IFpsIEVyeXZ0dmJh', artist: 'RS5SLlou' },
    answers: [ 'eWJmdmF0IHpsIGVyeXZ0dmJh', 'ZXJ6', 'ZS5yLnou' ],
    midiFile: 'MIDI51/C1.mid' },

  // Song 12
  { id: 12, display: { title: 'Rmh6enJlIGJzICc2OQ==', artist: 'T2VsbmEgTnFuemY=' },
    answers: [ 'Zmh6enJlIGJzIDY5', 'Zmh6enJlIGJzICc2OQ==', 'b2VsbmEgbnFuemY=' ],
    midiFile: 'MIDI51/C2.mid' },

  // Song 13
  { id: 13, display: { title: 'QW5lcGJndnA=', artist: 'WXZkaHZxYg==' },
    answers: [ 'YW5lcGJndnA=', 'eXZkaHZxYg==' ],
    midiFile: 'MIDI51/C3.mid' },

  // Song 14
  { id: 14, display: { title: 'T3J5dnJpcg==', artist: 'UHVyZQ==' },
    answers: [ 'b3J5dnJpcg==', 'cHVyZQ==' ],
    midiFile: 'MIDI51/C4.mid' },

  // Song 15
  { id: 15, display: { title: 'Q25lbmFidnE=', artist: 'T3lucHggRm5vb25ndQ==' },
    answers: [ 'Y25lbmFidnE=', 'b3lucHggZm5vb25ndQ==' ],
    midiFile: 'MIDI51/C5.mid' },

  // Song 16
  { id: 16, display: { title: 'T25lb3ZyIFR2ZXk=', artist: 'TmRobg==' },
    answers: [ 'b25lb3ZyIHR2ZXk=', 'bmRobg==' ],
    midiFile: 'MIDI51/D1.mid' },

  // Song 17
  { id: 17, display: { title: 'Wm53YmUgR2J6', artist: 'Q3JncmUgRnB1dnl5dmF0' },
    answers: [ 'em53YmUgZ2J6', 'Y3JncmUgZnB1dnl5dmF0' ],
    midiFile: 'MIDI51/D2.mid' },

  // Song 18
  { id: 18, display: { title: 'VGIgSnJmZw==', artist: 'Q3JnIEZ1YmMgT2JsZg==' },
    answers: [ 'dGIganJmZw==', 'Y3JnIGZ1YmMgb2JsZg==' ],
    midiFile: 'MIDI51/D3.mid' },

  // Song 19
  { id: 19, display: { title: 'Q2J2ZmJh', artist: 'Tnl2cHIgUGJiY3Jl' },
    answers: [ 'Y2J2ZmJh', 'bnl2cHIgcGJiY3Jl' ],
    midiFile: 'MIDI51/D4.mid' },

  // Song 20
  { id: 20, display: { title: 'RnlycmN2YXQgdmEgWmwgUG5l', artist: 'RWJrcmdncg==' },
    answers: [ 'ZnlycmN2YXQgdmEgemwgcG5l', 'ZWJrcmdncg==' ],
    midiFile: 'MIDI51/D5.mid' },

  // Song 21
  { id: 21, display: { title: 'SnZmdSBMYmggSnJlciBVcmVy', artist: 'Q3ZheCBTeWJscQ==' },
    answers: [ 'anZmdSBsYmgganJlciB1cmVy', 'Y3ZheCBzeWJscQ==' ],
    midiFile: 'MIDI51/E1.mid' },

  // Song 22
  { id: 22, display: { title: 'U8O8ZSBSeXZmcg==', artist: 'WWhxanZ0IGluYSBPcnJndWJpcmE=' },
    answers: [ 'c2hlIHJ5dmZy', 'c8O8ZSByeXZmcg==', 'eWhxanZ0IGluYSBvcnJndWJpcmE=', 'b3JyZ3ViaXJh' ],
    midiFile: 'MIDI51/E2.mid' },

  // Song 23
  { id: 23, display: { title: 'R3VyIFh2cWYgTmVyYSdnIE55ZXZ0dWc=', artist: 'R3VyIEJzc2ZjZXZhdA==' },
    answers: [ 'Z3VyIHh2cWYgbmVyYWcgbnlldnR1Zw==', 'Z3VyIHh2cWYgbmVyYSdnIG55ZXZ0dWc=', 'Z3VyIGJzc2ZjZXZhdA==', 'YnNzZmNldmF0' ],
    midiFile: 'MIDI51/E3.mid' },

  // Song 24
  { id: 24, display: { title: 'UmlyZWwgT2Vybmd1IExiaCBHbnhy', artist: 'R3VyIENieXZwcg==' },
    answers: [ 'cmlyZWwgb2Vybmd1IGxiaCBnbnhy', 'Z3VyIGNieXZwcg==', 'Y2J5dnBy' ],
    midiFile: 'MIDI51/E4.mid' },

  // Song 25
  { id: 25, display: { title: 'SXZxcmIgWHZ5eXJxIGd1ciBFbnF2YiBGZ25l', artist: 'R3VyIE9odHR5cmY=' },
    answers: [ 'aXZxcmIgeHZ5eXJxIGd1ciBlbnF2YiBmZ25l', 'Z3VyIG9odHR5cmY=', 'b2h0dHlyZg==' ],
    midiFile: 'MIDI51/E5.mid' },

  // Song 26
  { id: 26, display: { title: 'R25nZ2Ji', artist: 'WWJlcnJh' },
    answers: [ 'Z25nZ2Ji', 'eWJlcnJh' ],
    midiFile: 'MIDI51/F1.mid' },

  // Song 27
  { id: 27, display: { title: 'Rmd2eXkgWWJpdmF0IExiaA==', artist: 'RnBiZWN2YmFm' },
    answers: [ 'Zmd2eXkgeWJpdmF0IGxiaA==', 'ZnBiZWN2YmFm', 'Z3VyIGZwYmVjdmJhZg==' ],
    midiFile: 'MIDI51/F2.mid' },

  // Song 28
  { id: 28, display: { title: 'Li4uT25vbCBCYXIgWmJlciBHdnpy', artist: 'T2V2Z2FybCBGY3JuZWY=' },
    answers: [ 'b25vbCBiYXIgemJlciBndnpy', 'Li4ub25vbCBiYXIgemJlciBndnpy', 'b2V2Z2FybCBmY3JuZWY=' ],
    midiFile: 'MIDI51/F3.mid' },

  // Song 29
  { id: 29, display: { title: 'VnpudHZhcg==', artist: 'V2J1YSBZcmFhYmE=' },
    answers: [ 'dnpudHZhcg==', 'd2J1YSB5cmFhYmE=' ],
    midiFile: 'MIDI51/F4.mid' },

  // Song 30
  { id: 30, display: { title: 'R254ciBCYSBacg==', artist: 'Ti11bg==' },
    answers: [ 'Z254ciBiYSB6cg==', 'biB1bg==', 'bi11bg==', 'bnVu' ],
    midiFile: 'MIDI51/F5.mid' },

  // Song 31
  { id: 31, display: { title: 'ViBKdnl5IEZoZWl2aXI=', artist: 'VHliZXZuIFRubGFiZQ==' },
    answers: [ 'diBqdnl5IGZoZWl2aXI=', 'dHliZXZuIHRubGFiZQ==' ],
    midiFile: 'MIDI51/G1.mid' },

  // Song 32
  { id: 32, display: { title: 'RXZhdCBicyBTdmVy', artist: 'V2J1YWFsIFBuZnU=' },
    answers: [ 'ZXZhdCBicyBzdmVy', 'd2J1YWFsIHBuZnU=', 'cG5mdQ==' ],
    midiFile: 'MIDI51/G2.mid' },

  // Song 33
  { id: 33, display: { title: 'T2JlYSBnYiBPciBKdnlx', artist: 'RmdyY2NyYWpieXM=' },
    answers: [ 'b2JlYSBnYiBvciBqdnlx', 'ZmdyY2NyYWpieXM=' ],
    midiFile: 'MIDI51/G3.mid' },

  // Song 34
  { id: 34, display: { title: 'U3ZlciBKbmdyZSBPaGVh', artist: 'T3liYnF1YmhhcSBUbmF0' },
    answers: [ 'c3ZlciBqbmdyZSBvaGVh', 'b3liYnF1YmhhcSB0bmF0' ],
    midiFile: 'MIDI51/G4.mid' },

  // Song 35
  { id: 35, display: { title: 'RmdudmVqbmwgZ2IgVXJuaXJh', artist: 'WXJxIE1yY2NyeXZh' },
    answers: [ 'ZmdudmVqbmwgZ2IgdXJuaXJh', 'eXJxIG1yY2NyeXZh' ],
    midiFile: 'MIDI51/G5.mid' },

  // Song 36
  { id: 36, display: { title: 'Sm5ncmV5YmI=', artist: 'Tk9PTg==' },
    answers: [ 'am5ncmV5YmI=', 'bm9vbg==' ],
    midiFile: 'MIDI51/H1.mid' },

  // Song 37
  { id: 37, display: { title: 'R3VoYXFyZWZnZWhweA==', artist: 'TlAvUVA=' },
    answers: [ 'Z3VoYXFyZWZnZWhweA==', 'bnBxcA==', 'bnAgcXA=', 'bnAvcXA=' ],
    midiFile: 'MIDI51/H2.mid' },
];

// ---------------------------------------------------------------------------
// 4. Export auf window (Vanilla JS, kein Modul-System)
//    Reihenfolge: songs.js → i18n.js → audio.js → solver.js → state.js → ui.js
// ---------------------------------------------------------------------------
window.SONGS  = SONGS;
window.rot13  = rot13;
window.enc    = enc;
window.dec    = dec;
