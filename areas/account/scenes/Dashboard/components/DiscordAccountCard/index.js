import { useSelector } from "react-redux";

import { selectIsVerified } from "../../../../../../services/authenticatedSlice/selectors.js";

import Link from "next/link";
import { Card } from "react-bootstrap";

export default function DiscordAccountCard() {
  const isVerified = useSelector(selectIsVerified);

  return (
    <Card className={!isVerified && "text-muted"}>
      <Card.Body>
        <h4>Discord Account</h4>
        To link your Discord account, please follow the procedure{" "}
        {!isVerified ? (
          "here"
        ) : (
          <Link href="" passHref>
            <a className="text-decoration-none">here</a>
          </Link>
        )}
        .
        {/* <b>ID: </b> 3213123543567
    <br />
    <b>Username: </b> RazaTD
    <br />
    <Button className="mt-2" variant="danger">
      Remove
    </Button> */}
      </Card.Body>
    </Card>
  );
}
