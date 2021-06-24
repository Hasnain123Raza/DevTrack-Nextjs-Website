import { HOST } from "../constants";

import useApi from "./useApi";

function validateWithJoi(formData, formSchema) {
  const validationResult = formSchema.validate(formData, {
    abortEarly: false,
  });

  const success = !Boolean(validationResult.error);
  const errors =
    !success &&
    validationResult.error.details.map(({ message, path }) => ({
      message,
      path,
    }));

  return { success, errors };
}

async function postToApi(formData, postApi) {
  const response = await fetch(`${HOST}${postApi}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  return data;
}

async function postForm(formData, formSchema, postApi, setErrors) {
  const { success: validationSuccess, errors: validationErrors } =
    validateWithJoi(formData, formSchema);

  if (!validationSuccess) {
    setErrors(validationErrors);
    return { success: false, errors: validationErrors };
  }

  setErrors([]);

  const response = await postToApi(formData, postApi);
  const { success: postSuccess, errors: postErrors } = response;
  if (!postSuccess && postErrors) {
    setErrors(postErrors);
  }

  return response;
}

export default function useProcessForm(
  formData,
  formSchema,
  postApi,
  setErrors
) {
  return useApi(() => postForm(formData, formSchema, postApi, setErrors));
}
