import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Appbar from "../components/elements/Appbar/index";
import Alert from "../components/elements/Alert";
function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            {/* <Alert /> */}
            <Appbar />
            <Component {...pageProps} />
        </NextUIProvider>
    );
}

export default MyApp;
