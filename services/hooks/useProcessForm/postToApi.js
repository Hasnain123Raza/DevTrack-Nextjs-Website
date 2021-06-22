import { HOST } from "../../../services/constants";

export default async function postToApi(formData, postApi) {
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
