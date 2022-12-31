import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Appbar from "../components/elements/Appbar/index";
function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <Appbar />
            <Component {...pageProps} />            
        </NextUIProvider>
    );
}

export default MyApp;
