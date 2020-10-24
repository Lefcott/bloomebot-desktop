import robotjs from 'robotjs';

import { wasPressedNTimes } from '../../utils/hotkeys';

export const makeFastBuilding = accelerators => {
  robotjs.dragMouse(Math.random() * 500, Math.random() * 500);
  if (wasPressedNTimes(3, accelerators)) console.log('3 TIMES!');
};
