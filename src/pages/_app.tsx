import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
