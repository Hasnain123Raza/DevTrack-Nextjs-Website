import Joi from "joi";

import { email, password } from "../../../services/validationSchemas.js";

const userSchema = Joi.object({
  email,
  password,
});

export default Joi.object({
  user: userSchema,
});
