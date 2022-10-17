import Head from "next/head";
import Link from "next/link";

const pageTitle = "The News Page";

const News = () => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{pageTitle}</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            Next.js is a great framework!
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">Something else</Link>
        </li>
      </ul>
    </div>
  );
};

export default News;
