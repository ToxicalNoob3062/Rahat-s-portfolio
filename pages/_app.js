import "../styles/globals.scss";
import "../components/tech/tech.scss";
import Navbar from "../components/navbar/navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
