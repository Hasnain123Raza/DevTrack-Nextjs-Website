import Head from "next/head";
import { useRouter } from "next/router";

import { Button } from "react-bootstrap";

export default function Test({ data }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="DevTrack" />
      </Head>

      <h1>Goodbye!</h1>
      <p>{data.toString()}</p>
      <div className="mt-auto">
        <Button variant="primary" onClick={() => router.push("/")}>
          Press me!
        </Button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    "http://localhost:3000/api/authentication/authenticated"
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
