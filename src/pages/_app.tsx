import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const MainLayout = dynamic(() => import("../components/layouts/MainLayout"));

import "../styles/globals.css";
import "../styles/animationLink.css";
import "../styles/my-swiper.css";

import Meta from "../utils/meta/Meta";
import { defaultConfig } from "next/dist/server/config-shared";
// import Header from "../components/header";
const Header = dynamic(() => import("../components/header"), { ssr: false });

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = (url: string) => setLoading(true);
    const handleComplete = (url: string) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events, router.asPath]);

  return loading ? (
    <div className="">
      <div className="text-[40px]">Loading...</div>
    </div>
  ) : (
    <></>
  );
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Meta
          title="Киберспорт СПБГЭУ"
          description="Киберспортивный клуб от СПБГЭУ"
        />
        <MainLayout>
          <Loading />
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
