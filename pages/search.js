import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import EditoCardList from '../src/components/Slices/EditoCardList';
import SearchBar from '../src/components/Slices/SearchBar';
import { baseUrl, fetchAPI } from '../src/utils/fetchAPI';
import { useAppContext } from '../src/context/state';

export default function Search({ movies }) {
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
        <title>{router.query.term} - ZE/FLIX</title>
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
  const movies = await fetchAPI(`${baseUrl}&s=${context.query.term}`);

  return {
    props: { movies },
  };
}
