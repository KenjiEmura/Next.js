import Head from "next/head";

const pageTitle = "The Home Page";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{pageTitle}</h1>
    </div>
  );
};

export default HomePage;
