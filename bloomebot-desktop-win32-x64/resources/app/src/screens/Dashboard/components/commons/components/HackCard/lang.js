import { HACK_CODES } from '../../constants';

const getHackDuration = (licence, month, months) =>
  `${licence.months} ${licence.months === 1 ? month : months}`;
export default langCode =>
  ({
    es: {
      hackDuration: licence => getHackDuration(licence, 'mes', 'meses'),
      hackButtonText: licence => `Comprar por ${getHackDuration(licence, 'mes', 'meses')}`,
      hackDescriptions: {
        [HACK_CODES.AOE2]: 'Shortcuts para construcción rápida.',
        [HACK_CODES.FNAF2]: 'Animatrones automaticos'
      },
      fields: {
        game: 'Juego',
        description: 'Descripción',
        price: 'Precio',
        duration: 'Duración'
      },
      actions: {
        executeHack: 'Ejecutar',
        closeHack: 'Detener ejecución',
        configureHack: 'Configurar'
      },
      openError: hack => `Hubo un error al abrir el hack para ${hack.name}`,
      closeError: hack => `Hubo un error al cerrar el hack para ${hack.name}`
    },
    en: {
      hackDuration: licence => getHackDuration(licence, 'month', 'months'),
      hackButtonText: licence => `Buy for ${getHackDuration(licence, 'month', 'months')}`,
      hackDescriptions: {
        [HACK_CODES.AOE2]: 'Shortcuts for building faster.',
        [HACK_CODES.FNAF2]: 'Automatic animatrons'
      },
      fields: {
        game: 'Game',
        description: 'Description',
        price: 'Price',
        duration: 'Duration'
      },
      actions: {
        executeHack: 'Execute',
        closeHack: 'Stop executing',
        configureHack: 'Configure'
      },
      openError: hack => `There was an error when opening hack for ${hack.name}`,
      closeError: hack => `There was an error when closing hack for ${hack.name}`
    }
  }[langCode]);
