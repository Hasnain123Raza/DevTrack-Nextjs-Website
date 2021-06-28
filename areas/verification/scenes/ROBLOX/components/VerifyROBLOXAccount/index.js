import { HOST } from "../../../../../../services/constants";

import { useState } from "react";
import useApi from "../../../../../../services/hooks/useApi";

import { InputGroup, FormControl, Button } from "react-bootstrap";
import PostAndRepeatButton from "../../../../../../components/PostAndRepeatButton";

export default function VerifyROBLOXAccount() {
  const [robloxUserId, setRobloxUserID] = useState("");

  const { initiate, status, response } = useApi(async () => {
    const response = await fetch(
      `${HOST}/api/verification/roblox/${robloxUserId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  });

  return (
    <>
      <h4>Verify ROBLOX Account</h4>
      <p>
        Type the id of your ROBLOX account and press the verify button to allow
        our server to begin the verification. Please make sure your profile's
        blurb/description contains just the token.
      </p>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>ROBLOX User ID</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeHolder="0000000000"
          onChange={(event) => setRobloxUserID(event.target.value)}
        />

        <InputGroup.Append>
          {status === "fulfilled" ? (
            <Button variant="success" disabled>
              Verified
            </Button>
          ) : (
            <PostAndRepeatButton
              initiateLoadingRequest={initiate}
              loadingRequestStatus={status}
              idleText="Verify"
              idleVariant="success"
            />
          )}
        </InputGroup.Append>
      </InputGroup>
    </>
  );
}
