import useAsync from "./useAsync";
import { initializeStore } from "../redux/store";

function handleCommonErrors(errors) {
  const store = initializeStore();
  const { dispatch } = store;

  const errorType = errors[0].path[0];
  const errorMessage = errors[0].message;
  if (errorType === "alert") {
    console.log(`ALERT: ${errorMessage}`);
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
  const { initiate, status, response, error } = useAsync(fetcher);

  if (status === "fulfilled") {
    const { success, errors } = response;
    if (!success && errors) handleCommonErrors(errors);
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
