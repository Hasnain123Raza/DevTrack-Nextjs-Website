import { HOST } from "../../services/constants";

import Dashboard from "../../areas/account/scenes/Dashboard";

export async function getServerSideProps({ req: request }) {
  console.log(request.cookies);
  try {
    const response = await fetch(`${HOST}/api/authentication/authenticated`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `connect.sid=${request.cookies["connect.sid"]}`,
      },
    });

    const data = await response.json();
    const { success, payload } = data;
    const { authenticated: isAuthenticated, user } = payload;

    if (isAuthenticated) {
      return {
        props: {
          reduxState: {
            authenticated: {
              isAuthenticated,
              user,
              getAuthenticatedRequestStatus: "fulfilled",
            },
          },
        },
      };
    } else {
      return {
        redirect: {
          destination: "/authentication/login",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/authentication/login",
        permanent: false,
      },
    };
  }
}

export default Dashboard;
