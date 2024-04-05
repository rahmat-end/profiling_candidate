import * as Joi from "joi"

export const profilingSchema = Joi.object({
  randomize: Joi.object().required(),
  choosen_candidate: Joi.string().required(),
  answer_candidate_a: Joi.number().required(),
  answer_candidate_b: Joi.number().required(),
  userId: Joi.number().required()
})