import GlobalStyle from "../app/src/util/globalStyle";
import NavBar from "../app/src/Components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      {/* Every page will have its own pageProps, so grab the strings from that pageProps */}
      <NavBar strings={pageProps?.commonStrings || pageProps?.strings} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
