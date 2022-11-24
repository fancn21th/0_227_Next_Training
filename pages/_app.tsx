import type { AppProps } from "next/app";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  console.log("App is running");
  return (
    <div>
      {/* The Component is Page Component */}
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
