import { SECTIONS } from '../../../../constants';

export default langCode =>
  ({
    es: {
      sections: {
        [SECTIONS.HACK_LIST]: 'Hacks Disponibles',
        [SECTIONS.MY_HACKS]: 'Mis Hacks'
      }
    },
    en: {
      sections: {
        [SECTIONS.HACK_LIST]: 'Available Hacks',
        [SECTIONS.MY_HACKS]: 'My Hacks'
      }
    }
  }[langCode]);
