import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import EditoCardList from '../src/components/Slices/EditoCardList';
import SearchBar from '../src/components/Slices/SearchBar';
import { baseUrl, fetchAPI } from '../src/utils/fetchAPI';

export default function Search({ movies }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    if (!query) return;
    router.push(`/search?term=${query}`);
  };

  console.log(movies);

  return (
    <>
      <Head>
        <title>{router.query.term} - ZE/FLIX</title>
        <meta name="title" content="ZE/FLIX" />
        <meta
          name="description"
          content="Zeflix est un service de streaming qui propose une vaste sélection de séries, films, animes, documentaires et autres programmes primés sur des milliers ..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SearchBar search={search} query={query} setQuery={setQuery} />
        <EditoCardList movies={movies} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const movies = await fetchAPI(`${baseUrl}&s=${context.query.term}`);

  return {
    props: { movies },
  };
}
