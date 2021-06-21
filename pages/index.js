import Head from "next/head";
import { useRouter } from "next/router";

import { Button } from "react-bootstrap";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>DevTrack</title>
        <meta name="description" content="DevTrack" />
      </Head>

      <h1>Hello World!</h1>
      <Button variant="primary" onClick={() => router.push("/test")}>
        Press me!
      </Button>
    </div>
  );
}
