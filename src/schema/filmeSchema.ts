import Joi from "joi"
export const FilmeSchema = Joi.object({
    name: Joi.string().required,
    stream: Joi.string().required,
    category: Joi.string().required,
    watched: Joi.boolean().required,
    note: Joi.string().allow(null)
  })