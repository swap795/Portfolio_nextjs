import GlobalStyle from "../app/src/util/globalStyle";
import NavBar from "../app/src/Components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
