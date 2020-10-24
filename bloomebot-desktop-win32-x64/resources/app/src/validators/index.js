import Email from './email';
import Password from './password';
import Name from './name';

const Validate = schema => value => {
  const result = schema.validate(value);
  return { valid: !result.error, value: result.value };
};

export const validate = Validate;
export const checkEmail = Validate(Email);
export const checkPassword = Validate(Password);
export const checkName = Validate(Name);
export const checkEquals = (value, equalTo) => ({ valid: value === equalTo, value });
