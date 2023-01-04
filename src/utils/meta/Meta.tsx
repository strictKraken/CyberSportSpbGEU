import { ISeo } from "./Meta.interface";

import Head from "next/head";
import { useRouter } from "next/router";
import { siteName, titleMerge } from "../../config/seo.config";

const Meta: React.FC<ISeo> = ({ title, description, image, children }) => {
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
      </Head>
    </>
  );
};

export default Meta;
