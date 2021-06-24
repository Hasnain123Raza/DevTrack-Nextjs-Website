import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { reset } from "./services/alertSystemSlice";
import { selectAlert } from "./services/alertSystemSlice/selectors.js";

import { Alert } from "react-bootstrap";

export default function AlertSystem() {
  const dispatch = useDispatch();
  const router = useRouter();

  const alert = useSelector(selectAlert);

  useEffect(() => {
    return () => dispatch(reset());
  }, [router.pathname]);

  return (
    <>
      {Boolean(alert) && (
        <Alert
          variant={alert.variant}
          onClose={() => dispatch(reset())}
          dismissible
        >
          {alert.message}
        </Alert>
      )}
    </>
  );
}
