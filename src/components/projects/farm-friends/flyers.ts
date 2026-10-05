// Pixel maps and palettes for the flying obstacles, copied from the game's js/flyers.js
// (wings-up frames). Each character is a palette key; '.' is transparent.

export const crow = {
  rows: [
    '....WW..............',
    '.....WW.............',
    '......WW............',
    '.......WW.....KKK...',
    'DD.....KWWKKKKKEKBB.',
    '.DDKKKKKKKKKKKKKKBBB',
    '..DDKKKKKKKKKKKKKbb.',
    '....KKKKKKKKKKKK....',
    '......KKKKKKKKK.....',
  ],
  palette: { K: '#2b2b36', D: '#1b1b22', W: '#55556a', E: '#ffffff', B: '#f5a623', b: '#d4781f' },
};

export const owl = {
  rows: [
    '..WWWW............',
    '...WWWWW....BBBBB.',
    '....WWWWW..BLLLLLB',
    '.....WWWWB.LLELELL',
    '..BBBBBWWBBBLLKLLB',
    '.DBBBBBBBBBBBLLLB.',
    'DDBBBBBBBBBBBBBB..',
    '.D.BBBBBBBBBBBB...',
    '.....BBBBBBBBB....',
    '.......D...D......',
  ],
  palette: { B: '#c9a26b', W: '#a88452', L: '#f4ede0', E: '#2a1f1a', K: '#b07a4a', D: '#8a6a42' },
};

export const bee = {
  rows: [
    '..LLL.LL...',
    '.LWWWLWWL..',
    '..LWWLWWL..',
    '...KKKKKKK.',
    '..KYYKYYKEK',
    'KKYYYKYYKKK',
    '..KYYKYYKK.',
    '...KKKKKK..',
    '....K..K...',
  ],
  palette: { Y: '#f6c32b', K: '#2b2b36', E: '#ffffff', W: 'rgba(255, 255, 255, 0.55)', L: 'rgba(170, 200, 225, 0.9)' },
};
