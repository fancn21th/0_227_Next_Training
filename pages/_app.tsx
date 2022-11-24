import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  console.log("App is running");
  return (
    <div>
      <Head>
        <title>Welcome to Next Training From Fanyjb</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* The Component is Page Component */}
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
