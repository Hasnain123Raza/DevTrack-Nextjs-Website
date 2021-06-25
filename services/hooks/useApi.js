import useAsync from "./useAsync";

import { setAlert } from "../../components/AlertSystem/services/alertSystemSlice";
import { setAuthentication } from "../authenticatedSlice";

import { initializeStore } from "../redux/store";

function handleCommonErrors(errors) {
  const store = initializeStore();
  const { dispatch } = store;

  const errorType = errors[0].path[0];
  const errorMessage = errors[0].message;
  if (errorType === "alert") {
    dispatch(setAlert({ variant: "danger", message: errorMessage }));
  } else if (errorType === "authenticated") {
    const { authenticated: isAuthenticated, user } = postPayload;
    dispatch(setAuthentication({ isAuthenticated, user }));
  }
}

function transformAsyncStatusToFetchStatus(status, response, error) {
  if (error) return status;
  if (status !== "fulfilled") return status;

  const { success } = response;
  if (success) return "fulfilled";
  else return "rejected";
}

export default function useApi(fetcher) {
  const { initiate, status, response, error } = useAsync(async () => {
    const data = await fetcher();
    const { errors } = data;
    if (Boolean(errors)) handleCommonErrors(errors);
    return data;
  });

  if (status === "fulfilled") {
    const newStatus = transformAsyncStatusToFetchStatus(
      status,
      response,
      error
    );

    return { initiate, status: newStatus, response };
  } else if (status === "rejected") {
    return { initiate, status, response: { success: false } };
  } else {
    return { initiate, status, response };
  }
}
