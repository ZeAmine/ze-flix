import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import SearchBar from '../src/components/Slices/SearchBar';
import EditoCardList from '../src/components/Slices/EditoCardList';
import { baseUrl, fetchAPI } from '../src/utils/fetchAPI';
import { useAppContext } from '../src/context/state';

export default function Home({ movies }) {
  const router = useRouter();
  const { setTotalResults } = useAppContext();
  const [query, setQuery] = useState('');

  const handleKeyPress = (e) => {
    if (!query) return;
    e.key === 'Enter' && router.push(`/search?term=${query}`);
  };

  setTotalResults(movies.totalResults);

  return (
    <>
      <Head>
        <title>Accueil - ZE/FLIX</title>
        <meta name="title" content="ZE/FLIX" />
        <meta
          name="description"
          content="Zeflix est un service de streaming qui propose une vaste sélection de séries, films, animes, documentaires et autres programmes primés sur des milliers ..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleKeyPress={handleKeyPress}
        />
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
