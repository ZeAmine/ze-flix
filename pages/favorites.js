import Head from 'next/head';
import Layout from '../src/components/Layout';
import EditoCardListFav from '../src/components/Slices/EditoCardListFav';
import { useAppContext } from '../src/context/state';

export default function Favorites() {
  const { favorites } = useAppContext();

  return (
    <>
      <Head>
        <title>Mes favoris - ZE/FLIX</title>
        <link rel="icon" href="/favicon-user.ico" />
      </Head>
      <Layout>
        <EditoCardListFav favorites={favorites} />
      </Layout>
    </>
  );
}
