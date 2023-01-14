import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Appbar from "../components/elements/Appbar/index";
import Alert from "../components/elements/Alert";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
function MyApp({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={"6LcZo3cjAAAAAPEshUhFpjSOLdDaTQEbSoEwwB67"}
      scriptProps={{
        async: false,
        defer: true,
        appendTo: "body",
        nonce: undefined,
      }}
    >
      <NextUIProvider>
        <Alert />
        <Appbar />
        <Component {...pageProps} />
      </NextUIProvider>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
