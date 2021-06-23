import { HOST } from "../constants";

export async function getAuthenticatedApi() {
  const response = await fetch(`${HOST}/api/authentication/authenticated`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();
  return data;
}
