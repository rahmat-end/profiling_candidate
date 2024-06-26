import * as Joi from "joi"

export const userAddSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  district: Joi.string(),
  school: Joi.string(),
  phone_number: Joi.string(),
  gender: Joi.string().required(),
  question1: Joi.string().required(),
  question2: Joi.string().required(),
  question3: Joi.string().required(),
  question4: Joi.string().required(),
  question_video_ads: Joi.string().required(),
  question_banner: Joi.string().required(),
  question5: Joi.string().required(),
  question6: Joi.string().required(),
})

export const userUpdateSchema = Joi.object({
  question7: Joi.string().required(),
  question8: Joi.string().required(),
  question9: Joi.string().required(),
  question10: Joi.string().required(),
  question11: Joi.string().required(),
})