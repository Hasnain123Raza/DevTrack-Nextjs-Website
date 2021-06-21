export default async function postToApi(formData, postApi) {
  const response = await fetch(postApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  return data;
}
