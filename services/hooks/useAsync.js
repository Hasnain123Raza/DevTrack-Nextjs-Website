import { useState } from "react";

export default function useAsync(task) {
  const [status, setStatus] = useState("idle");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const initiate = () => {
    setStatus("pending");
    task()
      .then((response) => {
        setResponse(response);
        setStatus("fulfilled");
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  };

  return { initiate, status, response, error };
}
