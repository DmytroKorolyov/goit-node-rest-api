import Joi from "joi";
import { emailRegexp, subscription } from "../constants/user-constants.js";

export const userSignupSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

export const userSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscription)
    .required(),
});

export const userEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});