import "../styles/globals.css";
import "../styles/my-swiper.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
