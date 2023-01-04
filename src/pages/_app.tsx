import "../styles/globals.css";
import "../styles/my-swiper.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/MainLayout";
import Meta from "../utils/meta/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta
        title="Киберспорт СПБГЭУ"
        description="Киберспортивный клуб от СПБГЭУ"
      />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
