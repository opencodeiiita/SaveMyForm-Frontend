import Head from "next/head";
import Image from "next/image";
import Dashboard from "./dashboard";
import FAQ from "./faq";
import Alert from "../components/elements/Alert"

export default function Index() {
    return <>
        <Alert />
        <Dashboard />
    </>;
}
