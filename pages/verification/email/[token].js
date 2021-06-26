import { useRouter } from "next/router";

import VerifyEmailToken from "../../../areas/verification/scenes/VerifyEmailToken";

export default function WithToken() {
  const router = useRouter();
  const { token } = router.query;

  return <>{Boolean(token) ? <VerifyEmailToken token={token} /> : "Loading"}</>;
}
