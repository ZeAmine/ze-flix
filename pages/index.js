import Head from "next/head";
import Layout from "../src/components/Layout";
import SearchBar from "../src/components/Slices/SearchBar";
import EditoCardList from "../src/components/Slices/EditoCardList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zeflix</title>
        <meta name="title" content="Ze Flix" />
        <meta
          name="description"
          content="Zeflix est un service de streaming qui propose une vaste sélection de séries, films, animes, documentaires et autres programmes primés sur des milliers ..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SearchBar />
        <EditoCardList />
      </Layout>
    </>
  );
}

// export default function getStaticProps() {

//   return (
//     props: {

//     }
//   )
// }
