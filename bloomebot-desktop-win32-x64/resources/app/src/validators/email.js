import joi from '@hapi/joi';

export default joi.string().max(80).email().required();
