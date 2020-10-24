import joi from '@hapi/joi';

export default joi
  .string()
  .min(3)
  .max(50)
  .required();
