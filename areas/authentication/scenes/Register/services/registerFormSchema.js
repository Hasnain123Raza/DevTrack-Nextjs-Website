import Joi from "joi";

import {
  displayName,
  email,
  password,
  reCaptchaToken,
} from "../../../services/validationSchemas.js";

const userSchema = Joi.object({
  displayName,
  email,
  password,
});

export default Joi.object({
  user: userSchema,
  reCaptchaToken,
});
