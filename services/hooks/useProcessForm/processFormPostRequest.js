import validateWithJoi from "./validateWithJoi.js";
import postToApi from "./postToApi.js";

export default async function processFormPostRequest(
  formData,
  formSchema,
  postApi,
  setErrors
) {
  const { success: validationSuccess, errors: validationErrors } =
    validateWithJoi(formData, formSchema);

  if (!validationSuccess) {
    setErrors(validationErrors);
    return { success: false, errors: validationErrors };
  }

  setErrors([]);

  const postResponse = await postToApi(formData, postApi);
  const { success: postSuccess, errors: postErrors } = postResponse;

  if (!postSuccess) {
    if (postErrors) {
      if (postErrors[0].path[0] === "alert")
        console.log(`ALERT: ${postErrors[0].message}`);
      else setErrors(postErrors);
    }
  }

  return postResponse;
}
