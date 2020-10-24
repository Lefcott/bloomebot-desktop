import { registerMany } from '../../utils/hotkeys';
import { makeFastBuilding } from './fastBuilding';

export default () => registerMany(['Q'], 3, makeFastBuilding);
