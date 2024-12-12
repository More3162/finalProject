import Joi from 'joi';

const baseSchema = {
    email: Joi.string()
        .ruleset.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
        .rule({ message: 'user "email" mast be a valid email' })
        .required(),
    password: Joi.string()
        .ruleset.regex(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/)
        .rule({
            message: 'user "password" must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
        })
        .required()
};

const restaurantLoginSchema = Joi.object(baseSchema);

const restaurantRegisterSchema = Joi.object({
    name: Joi.string().min(2).required(),
    address: Joi.object({
        country: Joi.string().min(2).max(256).required(),
        city: Joi.string().min(2).max(256).required(),
        street: Joi.string().min(2).max(256).required(),
        houseNumber: Joi.number().required()
    }),
    phone: Joi.string()
        .ruleset.regex(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
        .rule({ message: 'user "phone" must be a valid phone number' })
        .required(),
    ...baseSchema,
    opening_hours: Joi.object({
        monday: Joi.string().min(2).max(256).required(),
        tuesday: Joi.string().min(2).max(256).required(),
        wednesday: Joi.string().min(2).max(256).required(),
        thursday: Joi.string().min(2).max(256).required(),
        friday: Joi.string().min(2).max(256).required(),
        saturday: Joi.string().min(2).max(256).required(),
        sunday: Joi.string().min(2).max(256).required()
    })
});

export { restaurantLoginSchema, restaurantRegisterSchema };