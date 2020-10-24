import constants from './constants';

const validations = {};

export const createValidation = (componentId, valueId, value, validator, ...checkParams) => {
  if (!validations[componentId]) validations[componentId] = {};
  if (!validations[componentId][valueId]) validations[componentId][valueId] = {};
  if (!validations[componentId][valueId].validate) validations[componentId][valueId].validate = validator;
  validations[componentId][valueId].checkParams = checkParams;
  validations[componentId][valueId].value = value;
};
/**
 * Validates all values of a components, returns an object with the failed validations
 * @param {*} componentId
 * @returns {Object}
 */
export const validateAll = componentId => {
  if (!validations[componentId]) return {};
  const results = {};
  const keys = Object.keys(validations[componentId]);
  keys.forEach(key => {
    const { valid } = validations[componentId][key].validate(
      validations[componentId][key].value,
      ...validations[componentId][key].checkParams
    );
    results[key] = !valid;
  });
  return results;
};
export const hookConstants = constants;
