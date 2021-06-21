import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  );
}

export default MyApp;
