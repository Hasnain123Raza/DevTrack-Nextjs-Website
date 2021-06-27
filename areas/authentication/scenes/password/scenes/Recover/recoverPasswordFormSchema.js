import Joi from "joi";

import { email } from "../../../../services/validationSchemas";

export default Joi.object({
  email,
});
