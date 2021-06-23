import Joi from "joi";

import {
  email,
  password,
  reCaptchaToken,
} from "../../../services/validationSchemas.js";

const userSchema = Joi.object({
  email,
  password,
});

export default Joi.object({
  user: userSchema,
  reCaptchaToken,
});
