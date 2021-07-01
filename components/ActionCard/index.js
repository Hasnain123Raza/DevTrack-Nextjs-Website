import { Card, Button } from "react-bootstrap";

export default function ActionCard({
  initiateAction,
  title,
  description,
  buttonText,
  buttonVariant,
  buttonDisabled = false,
}) {
  return (
    <Card>
      <Card.Body>
        <h5>{title}</h5>
        <hr />
        {description}
        <br />
        <Button
          className="w-100 mt-3"
          variant={buttonVariant}
          disabled={buttonDisabled}
          onClick={initiateAction}
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
