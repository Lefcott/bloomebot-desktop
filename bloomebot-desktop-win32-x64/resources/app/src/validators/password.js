import joi from '@hapi/joi';

export default joi
  .string()
  .min(4)
  .max(100)
  .required();
