import { HOST } from "../../../../../../services/constants";

import useApi from "../../../../../../services/hooks/useApi";

import { InputGroup, FormControl, Button } from "react-bootstrap";
import PostAndRepeatButton from "../../../../../../components/PostAndRepeatButton";

export default function GenerateToken() {
  const { initiate, status, response } = useApi(async () => {
    const response = await fetch(`${HOST}/api/verification/roblox`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    return data;
  });

  return (
    <>
      <h4>Generate Token</h4>
      <p>
        To generate the token, press the generate button. After that copy the
        token into your ROBLOX profile's blurb/description.
      </p>

      <InputGroup className="mb-3">
        <FormControl
          placeHolder="Press generate button to generate a new token"
          value={status === "fulfilled" ? response.payload : null}
          readOnly
        />
        <InputGroup.Append>
          <PostAndRepeatButton
            initiateLoadingRequest={initiate}
            loadingRequestStatus={status}
            idleText="Generate"
            idleVariant="success"
          />
          <Button variant="secondary">Copy</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
}
