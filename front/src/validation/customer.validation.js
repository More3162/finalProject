import Joi from 'joi';
import { contactBaseSchema } from './contact.validation';

const baseSchema = {
  email: contactBaseSchema.email,
  password: Joi.string()
    .ruleset.regex(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/)
    .rule({
      message: 'user "password" must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
    })
    .required()
};

const customerLoginSchema = Joi.object(baseSchema);

const customerRegisterSchema = Joi.object({
  ...contactBaseSchema,
  ...baseSchema,
});

export { customerLoginSchema, customerRegisterSchema };
