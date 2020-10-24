import { registerMany } from '../../utils/hotkeys';
import { activateAnimatronBot, deactivateAnimatronicBot, setAnimatronic } from './animatronicBot';
import { ANIMATRONIC_NAMES } from './animatronicBot/constants';

export default () => {
  try {
    let params = [];
    params = [...params, ...[['A'], 1, activateAnimatronBot]];
    params = [...params, ...[['S'], 1, deactivateAnimatronicBot]];
    params = [...params, ...[['num1', '1'], 1, () => setAnimatronic(ANIMATRONIC_NAMES.FREDDY)]];
    params = [...params, ...[['num2', '2'], 1, () => setAnimatronic(ANIMATRONIC_NAMES.BONNIE)]];
    params = [...params, ...[['num3', '3'], 1, () => setAnimatronic(ANIMATRONIC_NAMES.CHICA)]];
    params = [...params, ...[['num4', '4'], 1, () => setAnimatronic(ANIMATRONIC_NAMES.TOY_FREDDY)]];
    params = [...params, ...[['num5', '5'], 1, () => setAnimatronic(ANIMATRONIC_NAMES.TOY_BONNIE)]];
    params = [...params, ...[['num6', '6'], 1, () => setAnimatronic(ANIMATRONIC_NAMES.TOY_CHICA)]];
    params = [...params, ...[['num7', '7'], 1, () => setAnimatronic(ANIMATRONIC_NAMES.MANGLE)]];
    return registerMany(...params);
  } catch (e) {
    console.error(e);
    return false;
  }
};
