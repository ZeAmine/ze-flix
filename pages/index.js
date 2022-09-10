import { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import SearchBar from '../src/components/Slices/SearchBar';
import EditoCardList from '../src/components/Slices/EditoCardList';
import { baseUrl, fetchAPI } from '../src/utils/fetchAPI';

export default function Home({ movies }) {
  const [query, setQuery] = useState('');

  const search = (e) => {
    e.preventDefault();
    if (!query) return;
    Router.push(`/search?term=${query}`);
  };

  return (
    <>
      <Head>
        <title>ZE/FLIX</title>
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
  const movies = await fetchAPI(`${baseUrl}&s=batman`);

  return {
    props: { movies },
  };
}

// const [searchResults, setSearchResults] = useState([]);

// useEffect(() => {
//   setSearchResults(movies);
// }, [movies]);

// const search = async (e) => {
//   e.preventDefault();

//   const series = await fetchAPI(`${baseUrl}&s=${query}`);
//   setSearchResults(series);
// };
