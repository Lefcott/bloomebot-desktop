import { HACK_CODES } from '../commons/constants';

const getHackDuration = (licence, month, months) =>
  `${licence.months} ${licence.months === 1 ? month : months}`;
export default langCode =>
  ({
    es: {
      errors: {
        errorGettingHacksTitle: 'Error interno',
        errorGettingHacks: 'Hubo un error al obtener los hacks disponibles'
      },
      hackDuration: licence => getHackDuration(licence, 'mes', 'meses'),
      hackDescriptions: {
        [HACK_CODES.AOE2]: 'Shortcuts para construcción rápida.'
      },
      fields: {
        game: 'Juego',
        description: 'Descripción',
        price: 'Precio',
        duration: 'Duración'
      }
    },
    en: {
      errors: {
        errorGettingHacksTitle: 'Internal Error',
        errorGettingHacks: 'There was an error getting the available hacks'
      },
      hackDuration: licence => getHackDuration(licence, 'month', 'months'),
      hackDescriptions: {
        [HACK_CODES.AOE2]: 'Shortcuts for building faster.'
      },
      fields: {
        game: 'Game',
        description: 'Description',
        price: 'Price',
        duration: 'Duration'
      }
    }
  }[langCode]);
