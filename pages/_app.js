import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Appbar from "../components/elements/Appbar/index";
import Alert from "../components/elements/Alert";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { UserContext, AppbarContext } from "../components/context";
import { useState, useEffect } from "react";
import { existsLS, getLS, removeLS } from "../components/utils/LocalStorage";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { get } from "../components/utils/API";
// import { useQueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
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
    get("/user/self")
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          setIsLoggedIn(false);
          removeLS("secret");
        }
        else{
          console.log(err?.response?.message);
        }
      });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
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
                <ReactQueryDevtools />
              </AppbarContext.Provider>
            </UserContext.Provider>
          </NextUIProvider>
        </GoogleReCaptchaProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
