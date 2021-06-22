import { initializeStore } from "../../redux/store.js";
import { setAuthentication } from "../../authenticatedSlice/index.js";

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
  const {
    success: postSuccess,
    errors: postErrors,
    payload: postPayload,
  } = postResponse;

  if (!postSuccess) {
    if (postErrors) {
      const store = initializeStore();
      const { dispatch } = store;

      const errorType = postErrors[0].path[0];
      if (errorType === "alert") {
        console.log(`ALERT: ${postErrors[0].message}`);
      } else if (errorType === "authenticated") {
        const { authenticated: isAuthenticated, user } = postPayload;
        dispatch(setAuthentication({ isAuthenticated, user }));
      } else setErrors(postErrors);
    }
  }

  return postResponse;
}
