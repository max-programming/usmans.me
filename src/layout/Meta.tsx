import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href={`${router.basePath}/favicon-72.png`}
          key="icon72"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <script
          async
          defer
          data-website-id="fb6e8164-b366-4658-b48b-21ab3e8173ab"
          src="https://analytics.usman-s.me/umami.js"
        ></script>
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: 'https://usman-s.me/profilePic.jpg',
              width: 800,
              height: 600,
              alt: 'Profile Picture',
            },
          ],
        }}
        twitter={{
          cardType: 'summary',
          handle: '@MaxProgramming1',
          site: 'https://usman-s.me',
        }}
      />
    </>
  );
};

export { Meta };
