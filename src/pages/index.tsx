import Head from "next/head";
import Hero from "~/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atlas McKinley</title>
        <meta name="description" content="Atlas McKinley Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />

      </main>
    </>
  );
}
