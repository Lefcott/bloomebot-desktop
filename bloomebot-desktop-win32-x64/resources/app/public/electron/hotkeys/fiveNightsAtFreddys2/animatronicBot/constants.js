export const SELECTED_COLOR = 'c2dd00';
export const DEFAULT_COORDS = { x: 390, y: 555 };
/** @typedef {'CAM_01' | 'CAM_02' | 'CAM_03' | 'CAM_04' | 'CAM_05' | 'CAM_06' | 'CAM_07' | 'CAM_08' | 'CAM_09' | 'CAM_10' | 'CAM_11' | 'CAM_12' | 'CORRIDOR' | 'OFFICE'}  Place  */
export const PLACES = {
  CAM_01: { x: 482, y: 441 },
  CAM_02: { x: 584, y: 443 },
  CAM_03: { x: 479, y: 389 },
  CAM_04: { x: 588, y: 391 },
  CAM_05: { x: 455, y: 497 },
  CAM_06: { x: 575, y: 515 },
  CAM_07: { x: 574, y: 326 },
  CAM_08: { x: 483, y: 334 },
  CAM_09: { x: 725, y: 309 },
  CAM_10: { x: 673, y: 404 },
  CAM_11: { x: 750, y: 370 },
  CAM_12: { x: 739, y: 442 },
  CORRIDOR: { x: 525, y: 385 },
  OFFICE: { x: 517, y: 479 }
};
export const ANIMATRONIC_NAMES = {
  FREDDY: 'freddy',
  BONNIE: 'bonnie',
  CHICA: 'chica',
  TOY_FREDDY: 'toyFreddy',
  TOY_BONNIE: 'toyBonnie',
  TOY_CHICA: 'toyChica',
  MANGLE: 'mangle'
};
/** @typedef {{ paths: Place[][] }} Animatronic  */
export const ANIMATRONICS = {
  [ANIMATRONIC_NAMES.FREDDY]: {
    paths: [['CAM_08', 'CAM_07', 'CORRIDOR']]
  },
  [ANIMATRONIC_NAMES.BONNIE]: {
    paths: [
      ['CAM_08', 'CAM_07', 'CORRIDOR'],
      ['CAM_01', 'CAM_05', 'OFFICE']
    ]
  },
  [ANIMATRONIC_NAMES.CHICA]: {
    paths: [['CAM_08', 'CAM_04', 'CAM_02', 'CAM_06', 'OFFICE']]
  },
  [ANIMATRONIC_NAMES.TOY_FREDDY]: {
    paths: [['CAM_09', 'CAM_10', 'CORRIDOR']]
  },
  [ANIMATRONIC_NAMES.TOY_BONNIE]: {
    paths: [['CAM_09', 'CAM_03', 'CAM_04', 'CAM_02', 'CAM_06', 'OFFICE']]
  },
  [ANIMATRONIC_NAMES.TOY_CHICA]: {
    paths: [['CAM_09', 'CAM_07', 'CORRIDOR', 'CAM_01', 'CAM_05', 'OFFICE']]
  },
  [ANIMATRONIC_NAMES.MANGLE]: {
    paths: [
      ['CAM_12', 'CAM_11', 'CAM_10', 'CAM_07', 'CORRIDOR'],
      ['CAM_02', 'CAM_06', 'OFFICE']
    ]
  }
};
