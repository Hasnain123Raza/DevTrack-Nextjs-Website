import { Provider } from "react-redux";
import { getAuthenticated } from "../services/authenticatedSlice/index.js";

import { useEffect } from "react";
import useStore from "../services/hooks/useStore.js";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.reduxState);
  const { dispatch } = store;

  useEffect(() => {
    dispatch(getAuthenticated());
  }, []);

  return (
    <Provider store={store}>
      <div className="app d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
