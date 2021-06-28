import { useRouter } from "next/router";
import { useState } from "react";

import { Card, Button } from "react-bootstrap";
import TitledPage from "../../../../components/TitledPage";
import Instructions from "./components/Instructions";
import GenerateToken from "./components/GenerateToken";
import VerifyROBLOXAccount from "./components/VerifyROBLOXAccount";
import Congratulations from "./components/Congratulations";

export default function ROBLOX() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <TitledPage className="verification-roblox" title="ROBLOX Verification">
      <Card>
        <Card.Body>
          {currentStep >= 1 && <Instructions />}

          {currentStep >= 2 && (
            <>
              <hr />
              <GenerateToken />
            </>
          )}

          {currentStep >= 3 && (
            <>
              <hr />
              <VerifyROBLOXAccount />
            </>
          )}

          {currentStep >= 4 && (
            <>
              <hr />
              <Congratulations />
            </>
          )}

          {currentStep === 4 ? (
            <Button
              variant="primary"
              onClick={() => router.push("/account/dashboard")}
            >
              Dashboard
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Proceed
            </Button>
          )}
        </Card.Body>
      </Card>
    </TitledPage>
  );
}
