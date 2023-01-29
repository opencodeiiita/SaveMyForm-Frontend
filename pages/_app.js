import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Appbar from "../components/elements/Appbar/index";
import Alert from "../components/elements/Alert";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { UserContext, AppbarContext } from "../components/context";
import { useState, useEffect } from "react";
import { existsLS, getLS } from "../components/utils/LocalStorage";

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false),
    [user, setUser] = useState(null),
    [active, setActive] = useState({
      home: false,
      dashboard: false,
      faq: false,
      documentation: false,
    });

  useEffect(() => {
    setIsLoggedIn(existsLS("secret"));
  }, []);
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
        <UserContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, user, setUser }}
        >
          <AppbarContext.Provider value={{ active, setActive }}>
            <Alert />
            <Appbar />
            <Component {...pageProps} />
          </AppbarContext.Provider>
        </UserContext.Provider>
      </NextUIProvider>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
