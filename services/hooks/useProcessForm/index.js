import processFormPostRequest from "./processFormPostRequest";

import useAsync from "../useAsync";

function processFormResponse(status, response, error) {
  if (error) return status;
  if (status !== "fulfilled") return status;

  const { success } = response;
  if (success) return "fulfilled";
  else return "rejected";
}

export default function useProcessForm(
  formData,
  formSchema,
  postApi,
  setErrors
) {
  const { initiate, status, response, error } = useAsync(() =>
    processFormPostRequest(formData, formSchema, postApi, setErrors)
  );

  const newStatus = processFormResponse(status, response, error);

  return { initiate, status: newStatus, response };
}
