import { ISeo } from "./Meta.interface";

import Head from "next/head";
import { useRouter } from "next/router";
import { siteName, titleMerge } from "../../config/seo.config";

const Meta: React.FC<ISeo> = ({ title, description, image }) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;

  return (
    <>
      <Head>
        <title itemProp="headline">{titleMerge(title)}</title>
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={description}
            />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:locale" content="ru" />
            <meta property="og:title" content={titleMerge(title)} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
      </Head>
    </>
  );
};

export default Meta;
