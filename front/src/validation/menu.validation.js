import Joi from "joi";

const menuItemSchema = Joi.object({
  name: Joi.string().min(2).max(128).required(),
  category: Joi.string().valid("Main", "Starters", "Dessert").required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().min(2).max(256).required(),
  imageUrl: Joi.string(),
});

export { menuItemSchema };
